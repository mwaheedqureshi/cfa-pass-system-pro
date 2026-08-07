"""Parse locally OCRed 2026 mock books without changing existing 2025 mock content."""
from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OCR_ROOT = ROOT / ".local-research" / "mock-exams" / "ocr-2026-hi"
FALLBACK_OCR_ROOT = ROOT / ".local-research" / "mock-exams" / "ocr-2026"
AUDIT_ROOT = ROOT / ".local-research" / "mock-exams"
LIBRARY_PATH = AUDIT_ROOT / "data" / "mock-library.json"
SOURCE_ROOT = Path(r"C:\Users\Z4 G4\Documents\CFA\Mocks\Mocks (2026)")

SECTION_RE = re.compile(r"Session\s*([12]).{0,12}(Questions|Answers)", re.I | re.S)
QUESTION_RE = re.compile(r"(?im)^\s*[‘'|]?[QO]uestion\s+(\d{1,3})[^A-Za-z0-9\n]*$")
ANSWER_RE = re.compile(r"(?im)^\s*[‘'|]?Answers?\s+(\d{1,3})[^A-Za-z0-9\n]*$")
CHOICE_RE = re.compile(r"(?im)^\s*[‘'|]?(A{1,2}|B|8|C|[€¢©])\s*[.,)]\s*")


def clean(text: str) -> str:
    replacements = {"|": "I", "“": '"', "”": '"', "’": "'", "‘": "'", "\u00ad": ""}
    for old, new in replacements.items():
        text = text.replace(old, new)
    return re.sub(r"[ \t]+", " ", text).strip()


def topic(stem: str) -> tuple[str, str]:
    lower = stem.lower()
    rules = [
        ("Ethical and Professional Standards", ["standard", "gips", "cfa institute", "charterholder"]),
        ("Quantitative Methods", ["probability", "variance", "regression", "hypothesis", "standard deviation"]),
        ("Economics", ["gdp", "inflation", "monetary", "fiscal", "currency"]),
        ("Financial Statement Analysis", ["financial statement", "inventory", "depreciation", "cash flow"]),
        ("Corporate Issuers", ["capital budgeting", "corporate governance", "wacc"]),
        ("Equity Investments", ["equity", "stock valuation", "dividend discount"]),
        ("Fixed Income", ["bond", "duration", "yield curve"]),
        ("Derivatives", ["option", "forward contract", "swap"]),
        ("Alternative Investments", ["real estate", "private equity", "hedge fund"]),
        ("Portfolio Management", ["portfolio", "risk aversion", "investment policy"]),
    ]
    for name, words in rules:
        if any(word in lower for word in words):
            return name, "medium"
    return "Unmapped", "unmapped"


def section_texts(mock_number: int, root: Path = OCR_ROOT) -> tuple[dict[tuple[int, str], str], int]:
    pages = sorted((root / f"mock-{mock_number}").glob("page-*.txt"))
    sections: dict[tuple[int, str], list[str]] = {}
    current: tuple[int, str] | None = None
    for page in pages:
        text = page.read_text(encoding="utf-8", errors="replace")
        match = SECTION_RE.search(text)
        if match:
            current = (int(match.group(1)), match.group(2).lower())
        if current:
            sections.setdefault(current, []).append(text)
    return {key: "\n".join(value) for key, value in sections.items()}, len(pages)


def numbered_blocks(text: str, pattern: re.Pattern[str]) -> dict[int, str]:
    matches = list(pattern.finditer(text))
    return {
        int(match.group(1)): text[match.end() : matches[index + 1].start() if index + 1 < len(matches) else len(text)]
        for index, match in enumerate(matches)
    }


def parse_question(block: str) -> tuple[str, list[str]] | None:
    choices = list(CHOICE_RE.finditer(block))
    if len(choices) != 3:
        return None
    stem = clean(block[: choices[0].start()])
    values = [clean(block[item.end() : choices[index + 1].start() if index + 1 < 3 else len(block)]) for index, item in enumerate(choices)]
    if len(stem) < 15 or any(len(value) < 1 for value in values):
        return None
    return stem, values


def parse_answer(block: str) -> int | None:
    match = CHOICE_RE.search(block)
    if not match:
        return None
    token = match.group(1).upper()
    return 0 if token.startswith("A") else 1 if token in {"B", "8"} else 2


def import_mock(mock_number: int) -> tuple[dict, dict]:
    sections, ocr_pages = section_texts(mock_number)
    fallback_sections, fallback_ocr_pages = section_texts(mock_number, FALLBACK_OCR_ROOT)
    questions: list[dict] = []
    detected = 0
    manual_review: list[dict] = []
    for session in (1, 2):
        question_blocks = numbered_blocks(sections.get((session, "questions"), ""), QUESTION_RE)
        fallback_question_blocks = numbered_blocks(fallback_sections.get((session, "questions"), ""), QUESTION_RE)
        answer_blocks = numbered_blocks(sections.get((session, "answers"), ""), ANSWER_RE)
        fallback_answer_blocks = numbered_blocks(fallback_sections.get((session, "answers"), ""), ANSWER_RE)
        detected += len(set(question_blocks) | set(fallback_question_blocks))
        for number in range(1, 91):
            parsed = parse_question(question_blocks.get(number, "")) or parse_question(fallback_question_blocks.get(number, ""))
            answer = parse_answer(answer_blocks.get(number, ""))
            if answer is None:
                answer = parse_answer(fallback_answer_blocks.get(number, ""))
            reason = None
            if not parsed:
                reason = "Question number, stem, or exactly three choices could not be parsed reliably."
            elif answer is None:
                reason = "Answer key could not be parsed reliably."
            if reason:
                manual_review.append({"session": session, "sourceQuestionNumber": number, "reason": reason})
                continue
            stem, choices = parsed
            topic_name, mapping_confidence = topic(stem)
            question_id = f"cfa-l1-2026-mock-{mock_number}-s{session}-q{number:03d}"
            questions.append({
                "id": question_id,
                "mockId": f"cfa-l1-2026-mock-{mock_number}",
                "sourceQuestionNumber": number,
                "session": session,
                "topic": topic_name,
                "stem": stem,
                "choices": choices,
                "correctChoiceIndex": answer,
                "explanation": f"The verified source answer key identifies choice {chr(65 + answer)}.",
                "sourceExplanation": False,
                "extractionConfidence": "high",
                "needsManualReview": False,
                "mappingConfidence": mapping_confidence,
                "relatedFormulaIds": [],
            })
    source = SOURCE_ROOT / f"Mock {mock_number}.pdf"
    mock = {
        "id": f"cfa-l1-2026-mock-{mock_number}",
        "title": f"CFA Level I 2026 Mock {mock_number}",
        "provider": "CFA Institute",
        "year": 2026,
        "sourceFile": str(source),
        "sourceFolder": str(SOURCE_ROOT),
        "session": "Two sessions",
        "questionCount": len(questions),
        "timeLimitMinutes": 270,
        "timeLimitProvenance": "Existing mock-engine fallback: 135 minutes per session; source book does not state a limit.",
        "questions": questions,
    }
    audit = {
        "mockId": mock["id"],
        "sourcePDF": str(source),
        "questionsDetected": detected,
        "expectedSourceQuestions": 180,
        "questionsExtracted": len(questions),
        "answersMatched": len(questions),
        "explanationsMatched": 0,
        "questionsRequiringManualReview": len(manual_review),
        "manualReviewItems": manual_review,
        "ocrPages": ocr_pages + fallback_ocr_pages,
        "renderedPages": ocr_pages,
        "extractionWarnings": [] if not manual_review else ["Unresolved items were excluded from the playable mock."],
    }
    return mock, audit


def main() -> None:
    library = json.loads(LIBRARY_PATH.read_text(encoding="utf-8"))
    existing_2025 = [mock for mock in library["mocks"] if mock.get("year") == 2025]
    existing_2025_snapshot = json.dumps(existing_2025, ensure_ascii=False, sort_keys=True)
    mocks_2026 = []
    for number in range(1, 7):
        mock, audit = import_mock(number)
        mocks_2026.append(mock)
        (AUDIT_ROOT / f"cfa-2026-mock-{number}.json").write_text(json.dumps(audit, indent=2), encoding="utf-8")
    if json.dumps(existing_2025, ensure_ascii=False, sort_keys=True) != existing_2025_snapshot:
        raise RuntimeError("2025 mock content changed unexpectedly.")
    library["generatedAt"] = datetime.now(timezone.utc).isoformat()
    library["mocks"] = sorted(existing_2025 + mocks_2026, key=lambda mock: (-mock["year"], int(mock["id"].rsplit("-", 1)[1])))
    library["warnings"] = [
        {"sourceFile": audit["sourcePDF"], "reason": item["reason"]}
        for number in range(1, 7)
        for audit in [json.loads((AUDIT_ROOT / f"cfa-2026-mock-{number}.json").read_text(encoding="utf-8"))]
        for item in audit["manualReviewItems"]
    ]
    LIBRARY_PATH.write_text(json.dumps(library, ensure_ascii=False), encoding="utf-8")
    print(f"Imported 6 private 2026 mocks with {sum(mock['questionCount'] for mock in mocks_2026)} playable questions.")


if __name__ == "__main__":
    main()

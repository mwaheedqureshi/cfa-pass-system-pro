# v1.8.0 — Financial Statement Analysis: Official 2027 Curriculum Mapping

This release maps the official CFA Level I 2027 Financial Statement Analysis (FSA) topic and designs its future production plan. **This is a mapping-only release: no FSA lesson prose, questions, flashcards, public formula records, exhibits, tools, or routes were created.** Quantitative Methods and Economics remain untouched, verified, and content-frozen.

## Scope

- Recursively rescanned the entire local CFA library (`C:\Users\Z4 G4\Documents\CFA`) in two passes. Pass 1 found 29 folders and 218 files (217 PDF, 1 DOCX) — byte-for-byte identical to the last known snapshot (zero new, removed, or changed files anywhere in the library).
- Directly extracted the official 2027 FSA source (`Curriculum 2027/FSA 2027.pdf`, 518 pages) via PyMuPDF, confirming exactly **12 official learning modules** (FSA-LM1 through FSA-LM12), their exact titles, order, PDF/printed page ranges, and every verbatim learning outcome (53 LOS total). Cross-checked against the 2026 edition (`Curriculum 2026/FSA.pdf`, 516 pages): identical module count, titles, order, and page anchors; word-for-word identical LOS across all 12 modules; the only two textual differences found (a 2-page glossary present in 2027 but not 2026, and one navigation-bookmark-only diff in LM5) do not affect examinable scope. Independently corroborated (not sourced from) a local, non-official change-analysis document, which reached the same "no material FSA change" conclusion.
- Surveyed every named secondary provider (Schweser 2025/2026/2027, IFT, FinTree, Zell, CFA Premium) for FSA coverage. All providers have usable material; the 2027 Schweser FSA volume is scanned/image-only and was only visually confirmed to exist (not consulted for content), consistent with the existing Schweser-2027-unreadable pattern already recorded for Economics. One misfiled file (`FSA Juice Notes@2024.pdf`, actually FinTree content sitting in the IFT folder) was noted for file hygiene.
- Surveyed the full local mock/practice library across all years present. The 2025 mocks were fully swept (62 FSA-relevant items found across both sessions, LM6/LM11 most represented). The 2026 mocks are scanned/image-only with no OCR tool available; a representative partial sample confirmed at least 29 items, disclosed explicitly as a lower bound rather than extrapolated to a full count. A dedicated 100-question topic-wise FSA/FRA question bank was fully read and classified (85 of 100 map cleanly to the current 12-module structure; 15 excluded as misfiled Fixed Income content or legacy pre-2019 curriculum material). Two CFA Premium Pack volumes were confirmed to contain 130 and 122+ FSA questions respectively by their own internal numbering, but were not individually classified since both are scanned/image-only.
- Designed the future study-lesson structure in `docs/FSA_2027_TARGET_MANIFEST.md`: one study lesson per official module (12 total), with a noted production-time judgment call for FSA-LM8 (which spans three fairly distinct sub-topics — leases, pension/stock-based compensation, and disclosures — and may warrant internal study subdivisions the way Quantitative LM7 does, without splitting the official module count). Planning-stage targets: 505 questions, 505 flashcards, 91 formula/ratio targets, and 102 original-exhibit targets across all 12 modules — explicitly estimates only, never to be forced during production.
- Planned 21 future interactive tools across all 12 modules in `docs/FSA_INTERACTIVE_PLAN.md`, each justified by a specific official LOS (e.g., an EPS/Diluted EPS Calculator for LM2, an Inventory Method Comparator for LM6, a DuPont Analysis Explorer for LM11).
- Planned future question and flashcard production in `docs/FSA_ASSESSMENT_PLAN.md`, with a per-module question-mix rationale reweighted toward FSA's heavier calculation and exhibit-analysis emphasis relative to the Economics mix.
- Created a private verification scaffold for all 12 modules under `.local-research/fsa-verification/` (source-map, coverage-matrix, lesson-audit, example-audit, question-audit, flashcard-audit, formula-audit, exhibit-audit, tool-audit, mock-coverage, verification-report, MODULE_VERIFICATION_SUMMARY — 144 files total), every one honestly marked `mapping_verified` / `content_pending`, with no fabricated verification results.
- Created `docs/FSA_RELEASE_PLAN.md`, sequencing 12 future module-production releases (v1.8.1-v1.8.12) followed by a topic-wide certification and content-freeze release (v1.8.13), mirroring the Economics v1.7.0-v1.7.9 pattern.
- Created `scripts/validate-fsa-mapping.mjs` (wired into `npm run validate-fsa-mapping` and `npm run check`), which validates: exactly 12 official modules with no duplicate IDs/numbers, every module has a page range/LOS/planned lesson ID/production targets/complete verification scaffold, no FSA module is marked verified in this mapping-only release, no FSA lesson content exists yet (no `public/content/fsa/` directory, no FSA entries in the lesson manifest), Quantitative and Economics remain `verified_and_content_frozen`, and no private source artifact is tracked by Git.
- Updated `PROJECT_MASTER.md`, `CURRICULUM_MASTER.md`, `ROADMAP.md` (added the v1.8.1-v1.8.13 sequencing), `KNOWN_ISSUES.md` (three new low-priority transparency entries: KI-L11 Schweser 2027 FSA unreadable, KI-L12 2026 mock partial-sample disclosure, KI-L13 misfiled IFT/FinTree file; plus an unrelated dead-code note about `src/data/curriculum.json` discovered incidentally and left unfixed), `README.md`, and `docs/CURRICULUM_STATUS.md`.

## Mapping inventory

| Item | Count |
|---|---:|
| Official FSA modules | 12 |
| Total learning outcomes | 53 |
| Planned questions/flashcards | 505 each |
| Formula/ratio targets | 91 |
| Original exhibit targets | 102 |
| Planned interactive tools | 21 |
| Provider sources surveyed | 13 (including 2 discovered beyond the required list) |
| Mock/practice sources surveyed | 6 (2025) + 6 (2026) + 3 dedicated question banks |

## Tests and validation

- `npm run validate-mocks`, `validate-content`, `validate-quant-mapping`, `validate-quant-verification`, `validate-economics-mapping`, `validate-economics-verification`, `validate-fsa-mapping`, `lint`, `test`, and `build` all pass.
- 371 tests across 56 test files — unchanged from v1.7.9, confirming no FSA content was added to the public app (no new questions, flashcards, formulas, lessons, or tools).
- Content counts (`validate-content`) remain exactly 965 questions / 207 formulas / 965 flashcards / 20 lessons — unchanged, confirming mapping-only compliance.
- Initial JavaScript bundle is unchanged at 304.20 kB (92.85 kB gzip), since no public code was added.

## Limitations and residual gaps

- The 2027 Schweser FSA volume remains scanned/image-only and was not consulted for content (`KI-L11`).
- The 2026 mocks' FSA coverage count (29 items) is an explicit partial lower bound pending OCR tooling or a full manual review (`KI-L12`).
- `IFT (Notes only)/FSA/FSA Juice Notes@2024.pdf` is misfiled FinTree content (`KI-L13`); noted for hygiene, does not affect any mapping conclusion.
- FSA-LM8's possible internal study-subdivision need is flagged for a production-time decision, not resolved in this mapping release.
- `src/data/curriculum.json` was found to be dead, stale code during this release's investigation; recorded in `KNOWN_ISSUES.md` and left unfixed as out of scope.

## Next release

FSA Module Production Sprint 1 — FSA-LM1 (Introduction to Financial Statement Analysis), per `docs/FSA_RELEASE_PLAN.md`.

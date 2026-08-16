# CFA PASS SYSTEM Professional — Project Master

> Read this document, `ROADMAP.md`, and `KNOWN_ISSUES.md` before starting any future release.

## Project overview

CFA PASS SYSTEM Professional is an independent, offline-first CFA Level I study application built with React, TypeScript, Vite, Tailwind CSS, Markdown, and local browser storage. It combines lessons, practice questions, flashcards, formulas, interactive tools, search, assessments, and progress tracking.

## Vision

Build a reliable, premium-quality study system in deliberate, verifiable releases. Curriculum fidelity, original writing, mathematical accuracy, accessibility, local-first privacy, and stable learner progress take priority over release speed.

## Release state

- **Current release:** v1.8.8 — FSA Module Production Sprint 8 (FSA-LM8 Topics in Long-Term Liabilities and Equity)
- **Current status:** FSA-LM3 (Analyzing Balance Sheets) is produced and content-verified — the third of 12 official FSA modules. A dedicated deep-extraction research pass confirmed all 5 official LOS, essentially no 2026->2027 change (99.9% byte-identical text at the same page anchor), 8 original exhibits (matching the mapping-stage target exactly), and 9 formulas (an organic, source-justified overage over the 6-formula mapping-stage target, since the official Exhibit 13 individually names 7 distinct balance-sheet ratios). Delivered: a complete original lesson with 21 worked examples evenly spread across all 5 LOS, 40 official + 10 supplementary questions and flashcards (answer positions balanced via a deterministic round-robin assignment at generation time, avoiding the post-hoc correction FSA-LM2 required), 2 interactive tools (Common-Size Statement Builder and Financial Instrument and Intangible Disclosure Explorer, 26 passing tests combined), a working chapter exam, full search/navigation/progress integration, and further-generalized `scripts/validate-fsa-content.mjs` / `scripts/validate-fsa-mapping.mjs` release gates. FSA-LM4 through FSA-LM12 remain mapping-only. FSA-LM1, FSA-LM2, Quantitative, and Economics remain verified and unmodified.
- **Next release:** FSA Module Production Sprint 9 — FSA-LM9

- **Current version:** v1.8.8 — FSA Module Production Sprint 8
- **Current sprint:** FSA-LM3 produced and verified.
- **Next sprint:** FSA-LM9 production; not begun in v1.8.8.
- **Long-term roadmap:** See `ROADMAP.md`.

## Current repository statistics

Measured on 2026-08-12 after the v1.8.3 check suite.

| Measure | Current value |
|---|---:|
| Published lessons | 23 |
| Quantitative study lessons | 12 |
| Economics lessons | 8 |
| FSA study lessons | 3 (9 remain planned; mapping-only) |
| Questions | 1,120 total; 555 Quantitative; 410 Economics (325 official / 85 supplementary); 155 FSA (125 official / 30 supplementary) |
| Flashcards | 1,120 total; 555 Quantitative; 410 Economics (325 official / 85 supplementary); 155 FSA (125 official / 30 supplementary) |
| Formulas | 226 total; 165 Quantitative; 42 Economics; 19 FSA (0 in FSA-LM1, 10 in FSA-LM2, 9 in FSA-LM3) |
| Registered interactive tools | 46 |
| Comprehensive assessments | 2 (Quantitative 90-question; Economics 60-question) |
| Automated tests | 472 |
| Test files | 64 |
| Initial JavaScript bundle | 315.35 kB |
| Initial JavaScript gzip | 94.97 kB |
| Documentation | Foundation set complete; curriculum and verification records remain iterative |

## Topic completion

| Topic | Published lessons | State |
|---|---:|---|
| Quantitative Methods | 12 | VERIFIED AND CONTENT-FROZEN |
| Economics | 8 (8 of 8 official modules verified: ECO-LM1, ECO-LM2, ECO-LM3, ECO-LM4, ECO-LM5, ECO-LM6, ECO-LM7, ECO-LM8) | VERIFIED AND CONTENT-FROZEN |
| Financial Statement Analysis | 3 (3 of 12 official modules verified: FSA-LM1, FSA-LM2, FSA-LM3; 9 mapped, not yet produced) | In progress |
| Corporate Issuers | 0 | Planned |
| Equity Investments | 0 | Planned |
| Fixed Income | 0 | Planned |
| Derivatives | 0 | Planned |
| Alternative Investments | 0 | Planned |
| Portfolio Management | 0 | Planned |
| Ethical and Professional Standards | 0 | Planned |

## Curriculum and verification status

- Quantitative Methods currently uses 11 official modules presented through 12 stable study lessons because LM7 is split into Estimation and Hypothesis Testing.
- v1.6.3 verifies the source-backed official map and classifies all current Quantitative learning assets; lesson/item remediation remains pending v1.6.4 and v1.6.5.
- The future progress migration and target manifest are designed but are not executed by v1.6.3.
- Economics is VERIFIED AND CONTENT-FROZEN as of v1.7.9 across all 8 official 2027 modules, presented through 8 stable study lessons.
- Financial Statement Analysis is mapped across all 12 official 2027 modules as of v1.8.0; FSA-LM1 is produced and content-verified as of v1.8.1; FSA-LM2 is produced and content-verified as of v1.8.2; FSA-LM3 is produced and content-verified as of v1.8.3; FSA-LM4 through FSA-LM12 remain mapping-only.
- Other topics remain intentionally unpublished.
- Detailed status belongs in `docs/CURRICULUM_STATUS.md`.
- Source alignment and mathematical verification are distinct gates. “Published” never means “fully verified” unless the verification column explicitly says so.

## Technical debt and known issues

Do not fix unrelated issues opportunistically. Record them in `KNOWN_ISSUES.md` and schedule them through a release. Current priorities include text-encoding cleanup, dependency-range determinism, continued mathematical verification, and expanded accessibility coverage.

## Release checklist

Every release must complete planning, implementation, self-review, validation, tests, build, documentation, release notes, this master update, and the known-issues update. Use `RELEASE_CHECKLIST.md` as the authoritative checklist.

## Coding standards

- Preserve the established architecture and stable routes unless a release explicitly authorizes change.
- Prefer small typed modules, explicit domain names, deterministic pure services, and accessible React components.
- Avoid unrelated cleanup in scoped releases.
- Preserve user data through versioned, idempotent migrations.
- Follow `DEVELOPMENT_STANDARDS.md` for detailed conventions.

## Content standards

- Write original instructional content; never copy commercial or official curriculum prose.
- Use verified official sources only for curriculum scope and outcome references.
- Separate official scope from supplementary material explicitly.
- Recalculate examples and validate linked assets before publication.

## Lesson standards

Each production lesson needs a clear introduction, relevance, outcomes or approved scope statements, complete explanations, worked examples, interpretation, exam guidance, common mistakes, revision material, and a concise summary. All internal IDs and links must resolve.

## Formula standards

Every formula record requires a stable ID, expression, variables, meaning, intuition where applicable, worked example, common mistake, lesson relationship, curriculum classification, and tags. Symbols and units must be consistent with the lesson.

## Flashcard standards

Cards must be atomic, unambiguous, original, tagged, classified, linked to one study lesson, and useful without hidden context. Avoid duplicating question stems or turning paragraphs into cards.

## Question standards

Questions require exactly three plausible options, one defensible answer, difficulty, estimated time, curriculum relationship, related formulas where applicable, a correct explanation, and an explanation for every option. Calculation inputs and rounding must be reproducible.

## Interactive tool standards

Tools must teach a verified lesson concept, validate inputs, expose assumptions, provide interpretation, support keyboard use, remain responsive, and have deterministic service-level tests for core calculations.

## Testing standards

- Add meaningful tests for new behavior and regressions.
- Keep tests deterministic and independent of external services.
- Test migrations, invalid inputs, boundary cases, accessibility-relevant behavior, and content relationships in proportion to risk.
- Existing valid tests must remain green.

## Validation standards

`npm run validate-content`, `npm run lint`, `npm run test`, `npm run build`, and `npm run check` must pass. Never weaken a validation rule merely to permit invalid content. New content types require corresponding validation.

## Commit convention

Use Conventional Commits: `type(scope): concise imperative summary`. Common types are `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, and `build`. Keep one release or cohesive change per commit.

## Semantic version convention

- **Patch (`x.y.Z`)**: documentation, verification, safe remediation, or backward-compatible maintenance.
- **Minor (`x.Y.0`)**: a substantial backward-compatible feature or content capability.
- **Major (`X.0.0`)**: a planned topic milestone or intentionally breaking platform generation, as defined by the roadmap.

## Definition of Done

A release is done only when its authorized scope is implemented without unrelated changes; self-review is complete; content and data links are valid; required tests and validation pass; production build passes; documentation, release notes, master status, curriculum status where relevant, and known issues are current; no private reference artifacts are exposed; remaining limitations are stated honestly; and the recommended commit message is provided.

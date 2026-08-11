# CFA PASS SYSTEM Professional — Project Master

> Read this document, `ROADMAP.md`, and `KNOWN_ISSUES.md` before starting any future release.

## Project overview

CFA PASS SYSTEM Professional is an independent, offline-first CFA Level I study application built with React, TypeScript, Vite, Tailwind CSS, Markdown, and local browser storage. It combines lessons, practice questions, flashcards, formulas, interactive tools, search, assessments, and progress tracking.

## Vision

Build a reliable, premium-quality study system in deliberate, verifiable releases. Curriculum fidelity, original writing, mathematical accuracy, accessibility, local-first privacy, and stable learner progress take priority over release speed.

## Release state

- **Current release:** v1.8.0 — Financial Statement Analysis Official 2027 Curriculum Mapping
- **Current status:** All 12 official 2027 FSA modules (FSA-LM1 through FSA-LM12) are mapped and source-verified. This is a mapping-only release: a fresh recursive two-pass library rescan (zero changes since the prior scan), direct extraction of the official 2027 FSA source (`FSA 2027.pdf`, 518 pages) confirming exact module count/titles/order/page ranges/LOS, a full 2026->2027 comparison (essentially unchanged — identical module structure, word-for-word identical LOS across all 12 modules), secondary-provider and mock/practice coverage surveys, a future study-lesson/route/target design (505 planned questions/flashcards, 91 formula/ratio targets, 102 exhibit targets, 21 planned tools), a private verification scaffold for all 12 modules, and a new `scripts/validate-fsa-mapping.mjs` release gate. No FSA lesson, question, flashcard, formula, exhibit, or tool content was produced. Quantitative and Economics remain verified and content-frozen, unmodified.
- **Next release:** FSA Module Production Sprint 1 — FSA-LM1 (Introduction to Financial Statement Analysis)

- **Current version:** v1.8.0 — Financial Statement Analysis Official 2027 Curriculum Mapping
- **Current sprint:** FSA topic-wide mapping complete.
- **Next sprint:** FSA-LM1 production (first FSA module).
- **Long-term roadmap:** See `ROADMAP.md`.

## Current repository statistics

Measured on 2026-08-11 after the v1.8.0 check suite.

| Measure | Current value |
|---|---:|
| Published lessons | 20 |
| Quantitative study lessons | 12 |
| Economics lessons | 8 |
| FSA study lessons | 0 (12 planned; mapping-only) |
| Questions | 965 total; 555 Quantitative; 410 Economics (325 official / 85 supplementary); 0 FSA |
| Flashcards | 965 total; 555 Quantitative; 410 Economics (325 official / 85 supplementary); 0 FSA |
| Formulas | 207 total; 165 Quantitative; 42 Economics; 0 FSA |
| Registered interactive tools | 41 |
| Comprehensive assessments | 2 (Quantitative 90-question; Economics 60-question) |
| Automated tests | 371 |
| Test files | 56 |
| Initial JavaScript bundle | 304.20 kB |
| Initial JavaScript gzip | 92.85 kB |
| Documentation | Foundation set complete; curriculum and verification records remain iterative |

## Topic completion

| Topic | Published lessons | State |
|---|---:|---|
| Quantitative Methods | 12 | VERIFIED AND CONTENT-FROZEN |
| Economics | 8 (8 of 8 official modules verified: ECO-LM1, ECO-LM2, ECO-LM3, ECO-LM4, ECO-LM5, ECO-LM6, ECO-LM7, ECO-LM8) | VERIFIED AND CONTENT-FROZEN |
| Financial Statement Analysis | 0 (12 official modules mapped, none produced) | Mapped |
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
- Financial Statement Analysis is mapped as of v1.8.0 across all 12 official 2027 modules; no content is produced yet.
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

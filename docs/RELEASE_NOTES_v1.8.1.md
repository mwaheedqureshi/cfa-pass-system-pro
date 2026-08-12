# v1.8.1 — FSA Module Production Sprint 1: FSA-LM1 Introduction to Financial Statement Analysis

This release produces and verifies FSA-LM1 against the official 2027 CFA Level I Financial Statement Analysis curriculum, under the planned stable lesson id from the v1.8.0 target manifest, `fsa-01-introduction-to-financial-statement-analysis`. This is the **first of 12 official FSA modules**; FSA-LM2 through FSA-LM12 remain mapping-only.

## Scope

- Recursively rescanned the entire local CFA library (`C:\Users\Z4 G4\Documents\CFA`) in two passes; zero new, removed, or changed files since the v1.8.0 mapping snapshot.
- Directly extracted and read the full official 2027 source text for FSA-LM1 (PDF pp.15-48, printed pp.3-36 of a 518-page volume) via a dedicated deep-extraction research pass (beyond the topic-wide v1.8.0 mapping pass), confirming all 5 official learning outcomes and every named concept (the six-phase FSA framework; roles/decision contexts; standard-setters vs. regulators; IOSCO; SOX/PCAOB; named SEC filing types; EU regulatory structure; financial statement notes and segment reporting including the 10% test and 75% coverage rule; management's commentary/MD&A; the four audit opinion types and Key/Critical Audit Matters; IFRS vs. US GAAP differences; monitoring developments in financial reporting standards; the four categories of supplementary information sources).
- **Confirmed zero symbolic formulas or numeric worked calculations exist anywhere in the official LM1 text** — the only quantitative content is threshold percentages used as disclosure-qualification criteria (the segment-reporting 10%/75% rules, IOSCO market-coverage and insider-ownership thresholds), never presented as a calculation the reader performs. FSA-LM1 delivers 0 formulas, an honest downward revision from a 2-formula mapping-stage placeholder target, consistent with the project's standing rule against inventing formulas to hit a count (the same pattern as Economics ECO-LM5).
- Cross-checked the 2026 edition at the identical page anchor via a direct line-by-line comparison (not relying on the prior topic-wide summary alone): confirmed effectively zero substantive content difference — only cosmetic PDF-rendering artifacts (soft-hyphen vs. plain-hyphen, one stray bullet-glyph, minor footnote line-wrap differences) distinguish the two editions; all 5 LOS are word-for-word identical.
- Cross-checked three secondary providers (IFT, Zell Education, Schweser 2025) for pedagogical structure only, never as a scope-determining source. Identified and excluded one out-of-scope addition: IFT's own primary-financial-statement definitions and accounting-equation content, which does not appear in the official LM1 text (that content belongs to later FSA modules).
- Wrote a complete original lesson (`public/content/fsa/01-introduction-to-financial-statement-analysis.md`) covering all 5 official learning outcomes across 5 sections, with 24 original worked/scenario examples (independently verified reasoning chains; the two examples involving arithmetic — segment-reporting 10%/75% rule application — were independently re-summed and cross-verified against the interactive tool's pure function) and 7 original exhibits against a 6-exhibit mapping-stage target (1 ASCII framework diagram, 5 original tables, 1 original checklist — an organic, source-justified overage, not a forced count).
- Added 45 new questions (35 official, 10 supplementary) and 45 new flashcards (35 official, 10 supplementary), all under the new lesson id, exactly 3 choices each with full option-level explanations. Answer positions were deliberately rotated from initial authoring ([14,16,15] overall, [12,12,11] official, [2,4,4] supplementary) — no post-hoc swap script was required this time, a direct improvement over the answer-position-balance authoring oversight recorded in several prior Economics module releases.
- Built and registered 1 interactive tool: Financial Statement Analysis Framework Navigator (two panels — a framework-step identifier and a segment-disclosure checker applying the 10% test and 75% coverage rule), matching the single tool named in `docs/FSA_INTERACTIVE_PLAN.md` for this module. Its pure calculation/classification functions are unit-tested (15 tests) independently of the React component, including exact reproductions of the lesson's own segment-reporting worked examples and boundary-condition tests.
- Registered the new lesson in the lesson manifest (with an empty `formulaIds` array and an entry in the `lessonsWithNoOfficialFormulas` exemption set), `LessonInteractiveTools.tsx`, search index, Practice, Flashcards, chapter exam routing (`LessonResources`), the Financial Statement Analysis topic page (module list, live stats, chapter-exam shortcut), and `LessonPage`. No Formula Explorer entry was added, since this module has zero formulas.
- Created `src/content/fsaCurriculum.ts` (mirroring `economicsCurriculum.ts`) to drive the data-driven "1 / 12 official modules published" section on the FSA topic page, and extended `useContentStats.ts` with FSA-specific question/flashcard/formula counters.
- Updated `scripts/validate-fsa-mapping.mjs` to accommodate a `producedModules` set (now `{FSA-LM1}`), following the same evolution already used for `validate-economics-mapping.mjs`, and created a new `scripts/validate-fsa-content.mjs` (wired into `npm run validate-fsa-content` and `npm run check`) that validates: the FSA-LM1 lesson and its LOS mapping, exact question/flashcard counts and official/supplementary split, zero duplicate IDs/stems/fronts (including a project-wide flashcard-front check), zero-formula consistency, chapter-exam and tool registration, that FSA-LM2 through FSA-LM12 remain unpublished, and that Quantitative and Economics remain frozen.
- Updated private verification records under `.local-research/fsa-verification/FSA-LM1/` to reflect verified production status (all 12 required files), and the topic-level `verification-status.json` (`status: production_in_progress`, `fullyVerifiedModules: ["FSA-LM1"]`).

## Verified inventory for FSA-LM1

| Asset | Official | Supplementary | Total |
|---|---:|---:|---:|
| Questions | 35 | 10 | 45 |
| Flashcards | 35 | 10 | 45 |
| Formulas | 0 | — | 0 |
| Interactive tools | 1 | — | 1 |

## Formula and exhibit target reconciliation

The v1.8.0 mapping-stage plan estimated a formula target of 2 and an exhibit target of 6 for FSA-LM1. This release delivers 0 formulas — the official reading contains no symbolic formula or numeric calculation anywhere in the module, confirmed by direct full-text extraction — and 7 original exhibits, an organic overage over the 6-exhibit target added because it meaningfully improved coverage of LOS2 (roles/decision contexts). See `.local-research/fsa-verification/FSA-LM1/formula-audit.json` and `exhibit-audit.json`.

## Tests and validation

- `npm run validate-mocks`, `validate-content`, `validate-quant-mapping`, `validate-quant-verification`, `validate-economics-mapping`, `validate-economics-verification`, `validate-fsa-mapping`, `validate-fsa-content`, `lint`, `test`, and `build` all pass.
- 395 tests across 58 test files (up from 371/56 in v1.8.0), including 15 new pure-function tests for the interactive tool and a new `fsaIntroductionToFinancialStatementAnalysisContent.test.ts` that independently reproduces the lesson's segment-reporting worked examples via the tool's pure function and asserts FSA completion at 1 of 12 modules.
- Initial JavaScript bundle is 309.93 kB (93.74 kB gzip), up modestly from 304.20 kB (92.85 kB gzip) in v1.8.0 due to the new lesson manifest entry, `fsaCurriculum.ts`, and topic-page/search-index additions; the lesson content and the new tool ship in existing lazy-loaded route chunks.

## Limitations and residual gaps

- The local 2027 Schweser FSA volume remains scanned/image-only and was not consulted for content (`KI-L11`, unchanged from v1.8.0).
- The 2026 mock exams' FSA coverage count remains a disclosed partial lower bound (`KI-L12`, unchanged).
- Only 13 mock items were individually classified to FSA-LM1 specifically (from a fully-read 100-question topic-wise question bank); broader topic-wide FSA mock coverage (74 total confirmed/lower-bound items) has not yet been sub-classified by module beyond LM1.
- FSA-LM2 through FSA-LM12 remain mapping-only, per the one-module-at-a-time production discipline.

## Next release

FSA Module Production Sprint 2 — FSA-LM2 (Analyzing Income Statements), per `docs/FSA_RELEASE_PLAN.md`.

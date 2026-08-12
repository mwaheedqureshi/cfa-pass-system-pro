# v1.8.2 — FSA Module Production Sprint 2: FSA-LM2 Analyzing Income Statements

This release produces and verifies FSA-LM2 against the official 2027 CFA Level I Financial Statement Analysis curriculum, under the planned stable lesson id from the v1.8.0 target manifest, `fsa-02-analyzing-income-statements`. This is the **second of 12 official FSA modules**; FSA-LM3 through FSA-LM12 remain mapping-only.

## Scope

- Recursively rescanned the entire local CFA library in two passes; zero new, removed, or changed files since the v1.8.1 snapshot. A dedicated second pass performed deep extraction of FSA-LM2's own official text.
- Directly extracted and read the full official 2027 source text for FSA-LM2 (PDF pp.49-102, printed pp.37-90 of a 518-page volume), confirming all 5 official learning outcomes and every named concept (the 5-step revenue recognition model and its application to principal-vs-agent, franchising, SaaS vs. perpetual license, long-term contracts, and bill-and-hold arrangements; the capitalize-vs-expense decision test; non-recurring items including discontinued operations, unusual/infrequent items, and retrospective vs. prospective accounting changes; basic and diluted EPS mechanics; common-size income statements and the four margin ratios).
- Cross-checked the 2026 edition at the identical page anchor: confirmed no substantive content difference, consistent with the topic-wide finding that FSA is essentially unchanged between editions; all 5 LOS are word-for-word identical.
- Cross-checked three secondary providers (IFT, Zell Education, Schweser 2025) for pedagogical structure only, never as a scope-determining source. No out-of-scope additions were found for LM2.
- Wrote a complete original lesson (`public/content/fsa/02-analyzing-income-statements.md`) covering all 5 official learning outcomes across 5 sections, with **25 original worked examples** (every numeric example independently recalculated via a standalone verification script before being written into lesson prose) and **10 original exhibits** matching the mapping-stage target exactly by count (2 ASCII diagrams, 7 original tables, 1 original checklist). EPS mechanics (LOS4) received deliberately extensive treatment — 8 of the 25 worked examples — per the explicit EPS-calculation-safety priority, covering basic EPS with mid-year issuance, retroactive stock-split restatement, if-converted method (both convertible preferred and convertible debt), treasury-stock method, antidilution testing, and full sequential most-dilutive-first testing across a 3-security complex capital structure.
- Built **10 formula/ratio records**, matching the mapping-stage target exactly by count: basic EPS, weighted-average common shares outstanding, diluted EPS if-converted (preferred and debt, separately), diluted EPS treasury-stock method, and the four named margin ratios (gross, operating, pretax, net profit) plus the common-size line-item transformation. Two mapping-stage placeholder category labels ("revenue recognition threshold", "expense/capitalization treatment") described qualitative criteria rather than formulas and were honestly replaced with source-confirmed content — see `KNOWN_ISSUES.md` KI-L15 for the full reconciliation.
- Added 60 new questions (50 official, 10 supplementary) and 60 new flashcards (50 official, 10 supplementary), all under the new lesson id, exactly 3 choices each with full option-level explanations. **Initial authoring produced a severe answer-position imbalance ([21,38,1] overall)** despite a deliberate rotating-index authoring plan; caught by the standard post-authoring integrity check and corrected via a verified swap script that moved each choice and its matching explanation together. Final balance: [21,20,19] overall, [17,17,16] official, [4,3,3] supplementary. See `KNOWN_ISSUES.md` KI-L16.
- Built and registered **2 interactive tools**, matching the exact subset planned in `docs/FSA_INTERACTIVE_PLAN.md`:
  - **Income Statement EPS Explorer** — pure functions (`calculateBasicEPS`, `securityEffect`, `calculateDilutedEPS`) implementing basic EPS, if-converted (preferred/debt), treasury-stock method, and sequential most-dilutive-first antidilution testing against the running cumulative EPS. 17 unit tests, including exact reproductions of every EPS worked example in the lesson.
  - **Revenue and Expense Recognition Classifier** — a deterministic 10-scenario lookup covering the module's revenue- and expense-recognition classification patterns. 11 unit tests.
  - 28/28 tests passing combined.
- Registered the new lesson across the lesson manifest (10 `formulaIds`), `LessonInteractiveTools.tsx`, search index (formulas, flashcards, and questions arrays, plus new `eps`/`waso`/`cogs` search aliases), Practice, Flashcards, Formula Explorer, chapter exam routing (`LessonResources`), and the Financial Statement Analysis topic page (now reporting 2 of 12 modules published).
- Generalized `scripts/validate-fsa-mapping.mjs` (`producedModules` now `{FSA-LM1, FSA-LM2}`) and `scripts/validate-fsa-content.mjs` (rewritten from an FSA-LM1-only script into one that iterates a `producedModules` array with per-module official/supplementary counts, formula-bearing flags, and tool lists) so both validators scale to additional modules without weakening any check.
- Updated private verification records under `.local-research/fsa-verification/FSA-LM2/` (all 12 required files, including a source-confirmed count of 17 FSA-LM2-specific items individually mapped from a fully-read 100-question topic-wise question bank), and the topic-level `verification-status.json` (`fullyVerifiedModules: ["FSA-LM1", "FSA-LM2"]`).

## Verified inventory for FSA-LM2

| Asset | Official | Supplementary | Total |
|---|---:|---:|---:|
| Questions | 50 | 10 | 60 |
| Flashcards | 50 | 10 | 60 |
| Formulas | 10 | — | 10 |
| Interactive tools | 2 | — | 2 |

## Formula and exhibit target reconciliation

The v1.8.0 mapping-stage plan estimated a formula target of 10 and an exhibit target of 10 for FSA-LM2. This release delivers exactly 10 of each, but the composition of both was honestly reshaped around confirmed official-source content rather than the original placeholder labels: 2 placeholder formula categories described qualitative criteria, not formulas, and were replaced with source-confirmed formula content; the "single-step"/"multi-step" placeholder exhibit framing was found not to be official terminology and was replaced with source-grounded originals. See `.local-research/fsa-verification/FSA-LM2/formula-audit.json` and `exhibit-audit.json`, and `KNOWN_ISSUES.md` KI-L15.

## EPS calculation safety

Per the explicit high-priority instruction for this release, every EPS formula and worked example was independently recalculated before being written into lesson prose. The interactive tool's dilution logic performs sequential most-dilutive-first testing against the running cumulative EPS (not each security tested in isolation against basic EPS), correctly handling the case where a security dilutive against basic EPS in isolation is nonetheless antidilutive at the margin once more-dilutive securities are already included. 17 regression tests reproduce every EPS worked example in the lesson exactly, including the full 3-security complex-capital-structure case.

## Tests and validation

- `npm run validate-mocks`, `validate-content`, `validate-quant-mapping`, `validate-quant-verification`, `validate-economics-mapping`, `validate-economics-verification`, `validate-fsa-mapping`, `validate-fsa-content`, `lint`, `test`, and `build` all pass.
- 434 tests across 61 test files (up from 395/58 in v1.8.1), including 28 new pure-function tests for the two interactive tools and a new `fsaAnalyzingIncomeStatementsContent.test.ts` that independently reproduces the lesson's EPS worked examples via the tool's pure functions and asserts FSA completion at 2 of 12 modules.
- Initial JavaScript bundle is 312.97 kB (94.47 kB gzip), up modestly from 309.93 kB (93.74 kB gzip) in v1.8.1; the lesson content and both new tools ship in existing lazy-loaded route chunks.

## Limitations and residual gaps

- The local 2027 Schweser FSA volume remains scanned/image-only and was not consulted for content (`KI-L11`, unchanged).
- The 2026 mock exams' FSA coverage count remains a disclosed partial lower bound (`KI-L12`, unchanged).
- Only 17 mock items were individually classified to FSA-LM2 specifically (from the same fully-read 100-question topic-wise question bank used for FSA-LM1); broader topic-wide FSA mock coverage has not yet been sub-classified by module beyond LM1 and LM2.
- FSA-LM3 through FSA-LM12 remain mapping-only, per the one-module-at-a-time production discipline.

## Next release

FSA Module Production Sprint 3 — FSA-LM3, per `docs/FSA_RELEASE_PLAN.md`.

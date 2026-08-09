# v1.7.3 — Economics Module Production Sprint 3: ECO-LM3 Fiscal Policy

This release produces and verifies ECO-LM3 against the official 2027 CFA Level I Economics curriculum, under the planned stable lesson id from the v1.7.0 target manifest, `economics-03-fiscal-policy`.

## Scope

- Recursively scanned the entire local CFA library (`C:\Users\Z4 G4\Documents\CFA`, 29 folders, 218 files across 10 provider folders and 4 discovered years) in two passes, confirming no additional ECO-LM3 candidate sources existed outside the folders already inventoried in `.local-research/economics-verification/master-source-inventory.json`.
- Read the full official 2027 source text for ECO-LM3 (PDF pp. 87–112, printed pp. 79–104) and cross-checked it against the 2026 source. Body text, LOS wording, and all worked-example values are word-for-word identical between the two editions; the one substantive difference is that the 2027 edition numbers a previously unnumbered opening exhibit as "Exhibit 1," shifting every subsequent exhibit number by one relative to 2026 — lesson content was written to avoid citing bare exhibit numbers as a result.
- Cross-checked three secondary providers (IFT, FinTree, Zell Education) for triangulation; all three independently corroborate the module's core fiscal-multiplier formula and balanced-budget-multiplier result with different worked parameters, strengthening confidence that these are the source's actual stated relationships. One 2027 Schweser volume remains scanned/image-only and was not consulted, consistent with the existing recorded limitation for ECO-LM1/ECO-LM2 (`KNOWN_ISSUES.md` KI-L03).
- Wrote a complete original lesson (`public/content/economics/03-fiscal-policy.md`) covering all four official learning outcomes across six sections, with 21 independently recalculated worked examples (target: at least 18), an ASCII implementation-lag sequence diagram, two original comparison tables, a glossary, a one-page revision sheet, and a 30-second summary.
- Added 7 new formula records (budget balance, disposable income, MPC/MPS identity, simple multiplier, fiscal multiplier, balanced budget multiplier, debt-to-GDP ratio) — 7 of the mapping-stage target of 8, since source research confirmed the official reading gives no symbolic formula for debt-ratio dynamics, structural-balance calculation, or crowding-out magnitude; no 8th formula was invented to hit the target count.
- Added 50 new questions (40 official, 10 supplementary) and 50 new flashcards (40 official, 10 supplementary), all under the new lesson id.
- Built and registered 2 interactive tools: Fiscal Multiplier Explorer (simple/fiscal multiplier calculator plus a balanced-budget-multiplier scenario that always resolves to unity) and Fiscal Policy Stance Comparator (headline expansionary/contractionary/neutral classifier plus an original, clearly labeled illustrative structural-balance estimator). Each has pure, unit-tested calculation functions independent of its React component.
- Registered the new lesson in the lesson manifest, `LessonInteractiveTools.tsx`, search index, Practice, Formula Explorer, Flashcards, chapter exam routing, and `LessonResources`.
- Updated `src/content/economicsCurriculum.ts` to mark ECO-LM3 verified with its study lesson id, which drives the data-driven "3 / 8 official modules published" section on the Economics topic page automatically.
- Updated `scripts/validate-content.mjs` for the new counts, the 40/10 official/supplementary split, and interactive-tool registration.
- Updated `scripts/validate-economics-mapping.mjs` so it certifies ECO-LM3 as verified production content alongside ECO-LM1 and ECO-LM2, while continuing to require ECO-LM4–ECO-LM8 to remain mapping-only.
- Extended the non-Quantitative tool exclusion list in `scripts/validate-quant-mapping.mjs` with the two new tool component names, the same class of fix made for ECO-LM1's and ECO-LM2's tools in prior releases.
- Updated private verification records under `.local-research/economics-verification/ECO-LM3/` to reflect verified production status, including new `graph-audit.json`, `mock-coverage.json`, and `MODULE_VERIFICATION_SUMMARY.md` files; these records are not committed publicly.

## Verified inventory for ECO-LM3

| Asset | Official | Supplementary | Total |
|---|---:|---:|---:|
| Questions | 40 | 10 | 50 |
| Flashcards | 40 | 10 | 50 |
| Formulas | 7 | — | 7 |
| Interactive tools | 2 | — | 2 |

## Formula and graph target reconciliation

The v1.7.0 mapping-stage plan estimated a formula target of 8 and a graph target of 5 for ECO-LM3. This release delivers 7 formulas — all directly grounded in explicit official-source content or the module's own literal subject matter (the debt-to-GDP ratio) — after source research confirmed the official reading gives no symbolic formula for debt-ratio dynamics, structural-balance calculation, or crowding-out magnitude; no formula was invented to reach the target count. The graph target of 5 is met exactly: 2 original comparison tables, 1 ASCII implementation-lag sequence diagram, and 2 SVG visualizations embedded in the 2 interactive tools. See `.local-research/economics-verification/ECO-LM3/formula-audit.json` and `graph-audit.json`.

## Tests and validation

- `npm run validate-mocks`, `validate-content`, `validate-quant-mapping`, `validate-quant-verification`, `validate-economics-mapping`, `lint`, `test`, and `build` all pass.
- 249 tests across 43 test files, including 2 new pure-calculation test files for the interactive tools and a new `economicsFiscalPolicyContent.test.ts`.
- Initial JavaScript bundle is 293.03 kB (90.41 kB gzip), up modestly from 290.87 kB (89.88 kB gzip) in v1.7.2 due to the expanded lesson manifest and Economics curriculum registry; the lesson content and the 2 new tools ship in existing lazy-loaded chunks.

## Limitations and residual gaps

- The official reading's cross-country debt/revenue/expenditure exhibits use 2018-vintage OECD data; this release uses original prose/argument treatment rather than reproducing those specific figures as "current" data.
- One 2027 Schweser volume remains scanned/image-only in the local environment; not consulted, consistent with the pre-existing `KI-L03` limitation.
- Mock-exam coverage for ECO-LM3 is the richest of the three modules produced to date: 26 locally available mock/premium-practice questions keyword-classified to this module at medium confidence across all discovered 2025–2026 mocks. Original supplementary questions were authored from verified curriculum concepts, not derived from mock wording.
- ECO-LM4 through ECO-LM8 remain mapping-only, unchanged from v1.7.0, per the one-module-at-a-time roadmap.
- The structural-balance estimator in the Fiscal Policy Stance Comparator is an original, clearly labeled illustrative teaching model, not an official CFA-stated formula, since the official source defines the structural deficit only in words with no calculation method given.

## Next release

ECO-LM4 — Monetary Policy, per `docs/ECONOMICS_RELEASE_PLAN.md`.

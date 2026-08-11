# v1.7.7 — Economics Module Production Sprint 7: ECO-LM7 Capital Flows and the FX Market

This release produces and verifies ECO-LM7 against the official 2027 CFA Level I Economics curriculum, under the planned stable lesson id from the v1.7.0 target manifest, `economics-07-capital-flows-and-the-fx-market`.

## Scope

- Recursively re-scanned the entire local CFA library (`C:\Users\Z4 G4\Documents\CFA`), refreshing the existing inventory and confirming no additional ECO-LM7 candidate sources existed outside the folders already recorded in `.local-research/economics-verification/master-source-inventory.json`.
- Directly extracted and read the full official 2027 source text for ECO-LM7 (PDF pp. 221-258, printed pp. 213-250, 38 pages — the longest Economics module produced so far) via PyMuPDF, and cross-checked it against the 2026 source. Confirmed effectively zero substantive content difference between editions, aside from one genuine terminology update ("China"/"mainland China" -> "The Chinese Mainland"), consistent with a CFA Institute-wide standardization already observed in other 2027 Economics modules.
- **Currency notation safety**: this module is unusually vulnerable to quotation-direction errors. The official source's exact A/B (price currency/base currency) convention was extracted verbatim (PDF pp. 224, 235) and placed in a dedicated, explicit notation-convention section at the very start of the lesson, before any other content. The source's own "market-code order versus actual ratio order" landmine (market-convention codes name the base currency first, the opposite order from the actual price/base ratio) is called out explicitly with a dedicated worked example and table. Every calculation, question, and the interactive tool state their A/B convention explicitly.
- Cross-checked four secondary providers (IFT, Fintree, Zell Education, Schweser 2025/2026) for triangulation. All three text-extractable providers (IFT, Zell, Schweser) confirmed an identical quotation convention to the official text — no landmine of a secondary provider using a reversed convention. Fintree's notes for this module are graphic/infographic slides with no extractable text and could not be verified. Schweser 2027 remains scanned/image-only and was not consulted, consistent with the existing recorded limitation for ECO-LM1-LM6 (`KNOWN_ISSUES.md` KI-L03). Confirmed via Schweser that cross-rate and covered-interest-rate-parity content belongs to a separate, later module ("Exchange Rate Calculations," ECO-LM8) and is correctly excluded from this lesson's scope.
- Wrote a complete original lesson (`public/content/economics/07-capital-flows-and-the-fx-market.md`) covering all three official learning outcomes across three sections plus the up-front notation section, with 22 original worked examples (target: at least 22, since this is a calculation-heavy module) — 12 for FX market/quotation mechanics (the largest and most calculation-intensive section, matching the source's own emphasis), 7 for exchange rate regimes and the trade balance, 3 for capital restrictions — every numeric example independently recalculated and verified via a standalone script, using original currency pairs and figures distinct from the source's own examples (which used USD/EUR, AUD/HKD, GBP/EUR, INR/USD, MXN/USD, GBP/CHF, EUR/CHF).
- Confirmed the official reading states 4-5 distinct symbolic formula families (real exchange rate level, its percentage-change approximation, base-currency percentage appreciation with an explicit non-symmetry caveat, and the trade balance identity) and no cross-rate, interest-rate-parity, or forward-rate formula. These were formalized into 5 formula records (adding an honest formalization of the source's own stated reciprocal-quote relationship) against a mapping-stage target of 7; no formula was invented.
- Added 55 new questions (45 official, 10 supplementary) and 55 new flashcards (45 official, 10 supplementary), all under the new lesson id, exactly 3 choices each with full option-level explanations. An authoring oversight placed every question's correct answer at index 0; corrected via an automated cyclic swap script to reach 15/15/15 (official) and 19/18/18 (all 55). Flashcard authoring initially fell 5 short of the official target (40 instead of 45) and was corrected by adding 5 more official cards. Two flashcard fronts ("Monetary union?" and "Capital restriction vs. trade restriction?") were found to duplicate existing ECO-LM6 flashcard fronts and were reworded to be distinct, since ECO-LM6 content itself is frozen.
- Built and registered 1 interactive tool: FX Quote and Regime Explorer (a two-panel tool covering quote-appreciation/reciprocal calculation and exchange-rate-regime classification), matching the single tool actually named in `docs/ECONOMICS_INTERACTIVE_PLAN.md` for this module. Its pure calculation functions are unit-tested (17 tests) independently of the React component, including explicit tests reproducing the lesson's own worked-example figures and an explicit inverted-quote-order test.
- Registered the new lesson in the lesson manifest, `LessonInteractiveTools.tsx`, search index, Practice, Formula Explorer, Flashcards, chapter exam routing (`LessonResources`), and `LessonPage`.
- Updated `src/content/economicsCurriculum.ts` to mark ECO-LM7 verified with its study lesson id, which drives the data-driven "7 / 8 official modules published" section on the Economics topic page automatically.
- Updated `scripts/validate-content.mjs` for the new counts, the 45/10 official/supplementary split, and interactive-tool registration.
- Updated `scripts/validate-economics-mapping.mjs` so it certifies ECO-LM7 as verified production content alongside ECO-LM1-ECO-LM6, while continuing to require ECO-LM8 to remain mapping-only.
- Extended the non-Quantitative tool exclusion list in `scripts/validate-quant-mapping.mjs` with the new tool component name.
- Updated a stale global-completion assertion in the existing `economicsInternationalTradeContent.test.ts` (ECO-LM6's content test) that had hard-coded the prior "6 of 8 verified" module list; this is a shared-invariant assertion that necessarily tracks the whole curriculum's state, not a change to ECO-LM6's own content, formulas, questions, or flashcards.
- Updated private verification records under `.local-research/economics-verification/ECO-LM7/` to reflect verified production status, including new `graph-audit.json`, `mock-coverage.json`, and `MODULE_VERIFICATION_SUMMARY.md` files; these records are not committed publicly.

## Verified inventory for ECO-LM7

| Asset | Official | Supplementary | Total |
|---|---:|---:|---:|
| Questions | 45 | 10 | 55 |
| Flashcards | 45 | 10 | 55 |
| Formulas | 5 | — | 5 |
| Interactive tools | 1 | — | 1 |

## Formula and graph target reconciliation

The v1.7.0 mapping-stage plan estimated a formula target of 7 and a graph target of 8 for ECO-LM7. This release delivers 5 formulas — the module's four stated formula families plus an honest formalization of its own stated reciprocal-quote relationship — after source research confirmed no cross-rate, interest-rate-parity, or forward-rate formula exists in this module (that content is deferred to the separate ECO-LM8 module). The graph target of 8 is met with 6 elements: 3 recreate official Exhibit 2-6 content (FX market composition, quote-convention/hierarchy table, 9-regime spectrum table), and 3 are original pedagogical additions (a quote-convention schematic diagram, a capital-restriction mechanisms table, and the interactive tool's regime-spectrum SVG), since the official source contains exactly 6 exhibits, all data tables, with zero charts or diagrams. See `.local-research/economics-verification/ECO-LM7/formula-audit.json` and `graph-audit.json`.

## Tests and validation

- `npm run validate-mocks`, `validate-content`, `validate-quant-mapping`, `validate-quant-verification`, `validate-economics-mapping`, `lint`, `test`, and `build` all pass.
- 336 tests across 53 test files, including 17 new pure-calculation tests for the interactive tool (with explicit reciprocal/inverted-quote-order coverage) and a new `economicsCapitalFlowsFxContent.test.ts` that independently reproduces the lesson's worked asymmetry-example figures and asserts the module's completion status.
- Initial JavaScript bundle is 301.61 kB (92.35 kB gzip), up modestly from 299.22 kB (91.84 kB gzip) in v1.7.6 due to the expanded lesson manifest and Economics curriculum registry; the lesson content and the new tool ship in existing lazy-loaded chunks.

## Limitations and residual gaps

- 6 questions were reliably mapped from the 2025 mock library (regime classification, appreciation/depreciation calculation, capital-restriction objectives, real-exchange-rate properties); 3 additional mock items were correctly excluded as belonging to the separate ECO-LM8 module (forward-rate/covered-interest-rate-parity calculations) rather than force-mapped to LM7. 2026 mocks and both years of the CFA Premium Pack remain scanned/image-only and were not searchable; this is a residual coverage gap, not a forced-zero result.
- One 2027 Schweser volume remains scanned/image-only in the local environment; not consulted, consistent with the pre-existing `KI-L03` limitation.
- Fintree's 2025/2026 notes for this module are graphic/infographic slides with no extractable text; their content could not be independently verified and was not used as a scope input.
- ECO-LM8 remains mapping-only, unchanged from v1.7.0, per the one-module-at-a-time roadmap.

## Next release

ECO-LM8, per `docs/ECONOMICS_RELEASE_PLAN.md`.

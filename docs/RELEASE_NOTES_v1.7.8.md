# v1.7.8 — Economics Module Production Sprint 8: ECO-LM8 Exchange Rate Calculations

This release produces and verifies ECO-LM8 against the official 2027 CFA Level I Economics curriculum, under the planned stable lesson id from the v1.7.0 target manifest, `economics-08-exchange-rate-calculations`. **This completes all 8 of 8 official Economics modules.** Economics is now content-complete but is **not yet content-frozen**; full Economics-wide certification is deferred to v1.7.9.

## Scope

- Recursively re-scanned the entire local CFA library (`C:\Users\Z4 G4\Documents\CFA`), refreshing the existing inventory; no additional ECO-LM8 candidate sources were found outside the folders already recorded in `.local-research/economics-verification/master-source-inventory.json`.
- Directly extracted and read the full official 2027 source text for ECO-LM8 (PDF pp. 259-278, 20 pages, of which only pp. 259-274 (16 pages) are actual module content — pp. 275-278 are the book-wide, non-module-specific Economics glossary) via PyMuPDF, and cross-checked it against the 2026 source (PDF pp. 261-276, a consistent +2-page offset matching ECO-LM7). Confirmed zero substantive 2026->2027 content difference.
- **Currency notation continuity**: verified, via direct source quotation ("recall our earlier discussion of how price and base currencies are defined," p. 261), that ECO-LM8 uses the *identical* A/B (price/base) quotation convention established in ECO-LM7, without restatement — only a generic f/d (foreign/domestic) relabeling is added for the arbitrage-relationship derivation. No silent notation change occurred. The lesson's "Prerequisites" section makes this continuity explicit rather than re-deriving the convention from scratch.
- Cross-checked secondary providers (IFT, Zell, Schweser 2025/2026) for triangulation; all confirmed the identical convention. Fintree's notes for this module are graphic-only and unextractable. Schweser 2027 remains scanned/image-only and was not consulted, consistent with the pre-existing `KI-L03` limitation.
- Wrote a complete original lesson (`public/content/economics/08-exchange-rate-calculations.md`) covering both official learning outcomes (cross-rate calculations; forward-rate calculations) with 24 original worked examples (10 for cross-rates, 14 for forward rates), every one independently recalculated via standalone Node scripts. Four original visual elements were added: a quote-convention schematic, a direct-multiplication-vs-inversion diagram, a recreation of the official Exhibit 1 sample forward-points table, and an arbitrage/no-arbitrage-cycle diagram.
- Confirmed the official reading states exactly 8 formula families (direct-multiplication and inversion cross-rate methods, forward-points-to-rate, forward premium/discount percentage, the arbitrage relationship, forward-rate-from-arbitrage, forward-as-expected-spot, and the day-count-adjusted forward). All 8 were delivered, exactly matching the mapping-stage target — the only Economics module produced to date requiring no downward revision of either its formula or graph target.
- **Caught and corrected a genuine formula-direction error during independent verification**: the hedged-return arbitrage-detection calculation was initially computed as `(1/S) x (1+r_f) x F` instead of the mathematically correct `S x (1+r_f) / F`. This was found while independently recalculating worked example 17 (not from any source mismatch) and was also present in two questions (`eco-xc-q-024`, `eco-xc-q-045`) that had copied the same flawed pattern. All three were rewritten with the corrected formula and internally consistent figures before release. Documented transparently in `KNOWN_ISSUES.md` as KI-L09.
- Added 45 new questions (35 official, 10 supplementary) and 45 new flashcards (35 official, 10 supplementary), all under the new lesson id, exactly 3 choices each with full option-level explanations. An authoring oversight again placed every question's correct answer at index 0 (the same error class as ECO-LM7); corrected via two rounds of automated cyclic-swap scripts, reaching overall balance [15,15,15], official-only balance [12,11,12], and supplementary-only balance [3,4,3]. Verified zero duplicate flashcard fronts, both within this file and project-wide across all 20 lesson flashcard files.
- Built and registered 1 interactive tool: Cross-Rate and Forward-Rate Calculator (a two-panel tool covering cross-rate derivation via direct multiplication or inversion, and day-count-adjusted forward-rate/points/premium-discount calculation), matching the single tool named in `docs/ECONOMICS_INTERACTIVE_PLAN.md` for this module. Its pure calculation functions are unit-tested (17 tests) independently of the React component, including explicit reciprocal-consistency, no-shared-currency, and JPY-vs-standard points-scaling coverage.
- Registered the new lesson in the lesson manifest, `LessonInteractiveTools.tsx`, search index, Practice, Formula Explorer, Flashcards, chapter exam routing (`LessonResources`), and `LessonPage`.
- Updated `src/content/economicsCurriculum.ts` to mark ECO-LM8 verified with its study lesson id, which drives the data-driven "8 / 8 official modules published" section on the Economics topic page automatically.
- Updated `scripts/validate-content.mjs` for the new counts, the 35/10 official/supplementary split, and interactive-tool registration.
- Updated `scripts/validate-economics-mapping.mjs` so it certifies ECO-LM8 as verified production content alongside ECO-LM1-ECO-LM7.
- Extended the non-Quantitative tool exclusion list in `scripts/validate-quant-mapping.mjs` with the new tool component name.
- Updated a stale global-completion assertion in the existing `economicsCapitalFlowsFxContent.test.ts` (ECO-LM7's content test) that had hard-coded the prior "7 of 8 verified" module list; this is a shared-invariant assertion that necessarily tracks the whole curriculum's state, not a change to ECO-LM7's own content, formulas, questions, or flashcards.
- Verified the 3 mock questions previously flagged during ECO-LM7 research as likely ECO-LM8 scope (Mock 1 SS1 Q50, Mock 2 SS1 Q73, Mock 6 SS1 Q48), confirming all 3 as genuine forward-rate-calculation ECO-LM8 items, and discovered 4 additional mock items (Mock 3 SS1 Q73, Mock 4 SS1 Q90, Mock 5 SS1 Q54) plus correctly excluded one keyword false-positive (Mock 4 SS2 Q45, an FRA question belonging to Fixed Income, not FX).
- Updated private verification records under `.local-research/economics-verification/ECO-LM8/` (source-map, coverage-matrix, lesson-audit, example-audit, question-audit, flashcard-audit, formula-audit, graph-audit, tool-audit, mock-coverage, verification-report, MODULE_VERIFICATION_SUMMARY); these records are not committed publicly beyond the repository's existing `.local-research` convention.

## Verified inventory for ECO-LM8

| Asset | Official | Supplementary | Total |
|---|---:|---:|---:|
| Questions | 35 | 10 | 45 |
| Flashcards | 35 | 10 | 45 |
| Formulas | 8 | — | 8 |
| Interactive tools | 1 | — | 1 |

## Formula and graph target reconciliation

The v1.7.0 mapping-stage plan estimated a formula target of 8 and a graph target of 4 for ECO-LM8. This release delivers exactly 8 formulas and exactly 4 graphic elements — the only Economics module produced to date where neither target required downward revision. See `.local-research/economics-verification/ECO-LM8/formula-audit.json` and `graph-audit.json`.

## Tests and validation

- `npm run validate-mocks`, `validate-content`, `validate-quant-mapping`, `validate-quant-verification`, `validate-economics-mapping`, `lint`, `test`, and `build` all pass.
- 364 tests across 55 test files, including 17 new pure-calculation tests for the interactive tool and a new `economicsExchangeRateCalculationsContent.test.ts` that independently reproduces the lesson's core arbitrage-relationship worked example, confirms the corrected hedged-return direction, confirms forward points do not exactly double between a 90-day and 180-day horizon, and asserts Economics completion at all 8 of 8 official modules verified.
- Initial JavaScript bundle is 303.77 kB (92.78 kB gzip), up modestly from 301.61 kB (92.35 kB gzip) in v1.7.7 due to the expanded lesson manifest and Economics curriculum registry; the lesson content and the new tool ship in existing lazy-loaded chunks.

## Limitations and residual gaps

- One 2027 Schweser volume remains scanned/image-only in the local environment; not consulted, consistent with the pre-existing `KI-L03` limitation.
- Fintree's notes for this module are graphic/infographic slides with no extractable text; their content could not be independently verified and was not used as a scope input.
- Economics is content-complete across all 8 official modules but is **not yet content-frozen**. Economics-wide certification — a single pass cross-checking all 8 modules together, full mock-coverage reconciliation, and cross-module consistency — is a separate, subsequent release (v1.7.9), consistent with the v1.6.6 Quantitative certification precedent.

## Next release

Economics Full Verification and Content Freeze (v1.7.9), per `docs/ECONOMICS_RELEASE_PLAN.md`.

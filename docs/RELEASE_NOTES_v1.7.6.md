# v1.7.6 — Economics Module Production Sprint 6: ECO-LM6 International Trade

This release produces and verifies ECO-LM6 against the official 2027 CFA Level I Economics curriculum, under the planned stable lesson id from the v1.7.0 target manifest, `economics-06-international-trade`.

## Scope

- Recursively re-scanned the entire local CFA library (`C:\Users\Z4 G4\Documents\CFA`), refreshing the existing inventory and confirming no additional ECO-LM6 candidate sources existed outside the folders already recorded in `.local-research/economics-verification/master-source-inventory.json`.
- Directly extracted and read the full official 2027 source text for ECO-LM6 (PDF pp. 201-220, printed pp. 193-212) via PyMuPDF, and cross-checked it against the 2026 source. This module shows **zero substantive content difference** between editions — the module is shifted exactly 2 PDF pages earlier in 2027 (a front-matter pagination artifact only), with identical exhibits, worked examples, practice problems, and solutions after discounting a footer-text-extraction artifact.
- Cross-checked four secondary providers (IFT, Fintree, Zell Education, Schweser 2025/2026) for triangulation. IFT reproduces the official exhibits and examples verbatim but adds its own illustrative country examples; Zell adds an unofficial numeric Ricardo/PPF example, India-specific statistics, and an inaccurate welfare-loss simplification; Schweser 2025/2026 use their own generic examples and omit trade creation/diversion entirely. All secondary-only additions were excluded from lesson content. Schweser 2027 remains scanned/image-only and was not consulted, consistent with the existing recorded limitation for ECO-LM1-LM5 (`KNOWN_ISSUES.md` KI-L03).
- Wrote a complete original lesson (`public/content/economics/06-international-trade.md`) covering all three official learning outcomes across three sections, with 20 original worked examples (target: at least 18, since this is a calculation/graph-heavy module) — 6 for benefits/costs, 8 for trade restrictions (the module's most calculation-intensive section, matching the source's own emphasis), 6 for trading blocs — every numeric example independently recalculated with original scenario names and figures distinct from the source's own South Africa/Thailand/Qualor-Vulcan-Aurelia examples.
- Confirmed the official reading contains **zero explicit named symbolic formulas**, only 4 numeric worked-calculation patterns (consumer-surplus loss, producer-surplus gain, government revenue/quota rent, deadweight loss) applying unstated area-geometry to a single reused diagram. These 4 patterns were formalized into 4 original formula records against a mapping-stage target of 5; no 5th formula was invented.
- Added 45 new questions (35 official, 10 supplementary) and 45 new flashcards (35 official, 10 supplementary), all under the new lesson id, exactly 3 choices each with full option-level explanations. Initial authoring produced 50 of each (an over-count); 5 items were deleted as redundant and 5 more retagged supplementary to reach the exact 35/10 target, then an initial answer-position skew was corrected via 9 safe choice-order swaps to reach 15/15/15 overall (12/12/11 official). A JSON-choice numeric mismatch was found and corrected in one supplementary question before finalization.
- Built and registered 2 interactive tools: Trade Restriction Welfare Diagram (a tariff/quota welfare calculator reproducing the lesson's own worked-example figures exactly) and Trading Bloc Comparator (a cumulative integration-ladder classifier), matching the two tools actually named in `docs/ECONOMICS_INTERACTIVE_PLAN.md` for this module. Each has pure, unit-tested calculation functions independent of its React component.
- Registered the new lesson in the lesson manifest, `LessonInteractiveTools.tsx`, search index, Practice, Formula Explorer, Flashcards, chapter exam routing (`LessonResources`), and `LessonPage`.
- Updated `src/content/economicsCurriculum.ts` to mark ECO-LM6 verified with its study lesson id, which drives the data-driven "6 / 8 official modules published" section on the Economics topic page automatically.
- Updated `scripts/validate-content.mjs` for the new counts, the 35/10 official/supplementary split, and interactive-tool registration.
- Updated `scripts/validate-economics-mapping.mjs` so it certifies ECO-LM6 as verified production content alongside ECO-LM1-ECO-LM5, while continuing to require ECO-LM7-ECO-LM8 to remain mapping-only.
- Extended the non-Quantitative tool exclusion list in `scripts/validate-quant-mapping.mjs` with the two new tool component names.
- Updated private verification records under `.local-research/economics-verification/ECO-LM6/` to reflect verified production status, including new `graph-audit.json`, `mock-coverage.json`, and `MODULE_VERIFICATION_SUMMARY.md` files; these records are not committed publicly.

## Verified inventory for ECO-LM6

| Asset | Official | Supplementary | Total |
|---|---:|---:|---:|
| Questions | 35 | 10 | 45 |
| Flashcards | 35 | 10 | 45 |
| Formulas | 4 | — | 4 |
| Interactive tools | 2 | — | 2 |

## Formula and graph target reconciliation

The v1.7.0 mapping-stage plan estimated a formula target of 5 and a graph target of 7 for ECO-LM6. This release delivers 4 formulas — honest formalizations of the module's own worked area-geometry welfare-calculation method (Example 1's consumer-surplus-loss, producer-surplus-gain, government-revenue, and deadweight-loss computations, with Exhibit 2's qualitative region mapping) — after source research confirmed no formula is literally printed in the official text. The graph target of 7 is met exactly: 3 elements recreate the official Exhibit 1/2/3 content, and 4 are original pedagogical additions (an integration-ladder table, a trade-creation/diversion flow diagram, and 2 interactive SVGs embedded in the 2 tools). See `.local-research/economics-verification/ECO-LM6/formula-audit.json` and `graph-audit.json`.

## Tests and validation

- `npm run validate-mocks`, `validate-content`, `validate-quant-mapping`, `validate-quant-verification`, `validate-economics-mapping`, `lint`, `test`, and `build` all pass.
- 310 tests across 51 test files, including 2 new pure-calculation test files for the interactive tools (17 test cases) and a new `economicsInternationalTradeContent.test.ts` that independently reproduces the lesson's worked tariff-calculation figures and asserts the module's completion status.
- Initial JavaScript bundle is 299.22 kB (91.84 kB gzip), up modestly from 297.11 kB (91.31 kB gzip) in v1.7.5 due to the expanded lesson manifest and Economics curriculum registry; the lesson content and the 2 new tools ship in existing lazy-loaded chunks.

## Limitations and residual gaps

- 4 questions were reliably mapped from the 2025 mock library (Mocks 1/3/5/6 SS1, all trading-bloc classification or export-subsidy questions) — a higher hit rate than ECO-LM5's zero. 2026 mocks and both years of the CFA Premium Pack remain scanned/image-only and were not searchable; this is a residual coverage gap, not a forced-zero result.
- One 2027 Schweser volume remains scanned/image-only in the local environment; not consulted, consistent with the pre-existing `KI-L03` limitation.
- ECO-LM7 through ECO-LM8 remain mapping-only, unchanged from v1.7.0, per the one-module-at-a-time roadmap.

## Next release

ECO-LM7, per `docs/ECONOMICS_RELEASE_PLAN.md`.

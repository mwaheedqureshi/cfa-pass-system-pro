# v1.7.2 — Economics Module Production Sprint 2: ECO-LM2 Understanding Business Cycles

This release produces and verifies ECO-LM2 against the official 2027 CFA Level I Economics curriculum, under the planned stable lesson id from the v1.7.0 target manifest, `economics-02-understanding-business-cycles`.

## Scope

- Recursively scanned the entire local CFA library (`C:\Users\Z4 G4\Documents\CFA`, 29 folders, 218 files across 10 provider folders and 4 discovered years) in two passes (folder/filename/metadata, then extracted content) to confirm no additional ECO-LM2 candidate sources existed outside the folders already inventoried in `.local-research/economics-verification/master-source-inventory.json`.
- Read the full official 2027 source text for ECO-LM2 (PDF pp. 57–86, printed pp. 49–78) directly from the local CFA library and cross-checked it against the 2026 source, finding the two are a **word-for-word zero-change carryover** aside from PDF-extraction artifacts.
- Cross-checked three secondary providers (IFT, FinTree, Zell Education) for triangulation; Zell reflects an older curriculum edition bundling additional theory/inflation content out of ECO-LM2's current scope, used only as an idea source for the housing/external-trade LOS clause the official reading treats thinly. One 2027 Schweser volume remains scanned/image-only and was not consulted, consistent with the existing recorded limitation for ECO-LM1 (`KNOWN_ISSUES.md` KI-L03).
- Wrote a complete original lesson (`public/content/economics/02-understanding-business-cycles.md`) covering all three official learning outcomes across eight sections, with 16 independently recalculated worked examples, two ASCII decision-flow diagrams, a glossary, a one-page revision sheet, and a 30-second summary.
- Added 4 new formula records (output gap, diffusion index, inventory-to-sales ratio, credit-to-GDP ratio), each grounded in explicit official-source content — none invented to reach a target count.
- Added 50 new questions (40 official, 10 supplementary) and 50 new flashcards (40 official, 10 supplementary), all under the new lesson id.
- Built and registered 2 interactive tools: Business Cycle Indicator Timeline (diffusion-index calculator plus illustrative leading/coincident/lagging timing sequencer) and Credit Cycle Explorer (credit-to-GDP ratio and illustrative loosening/tightening classifier). Each has a pure, unit-tested calculation function independent of its React component.
- Registered the new lesson in the lesson manifest, `LessonInteractiveTools.tsx`, search index, Practice, Formula Explorer, Flashcards, chapter exam routing, and `LessonResources`.
- Added `src/content/economicsCurriculum.ts`, a typed 8-module official Economics registry, and used it to add a data-driven "X / 8 official modules published" section to the Economics topic page, extending `useContentStats` with official-Economics asset counts derived from that registry.
- Updated `scripts/validate-content.mjs` for the new counts, the 40/10 official/supplementary split, and interactive-tool registration.
- Updated `scripts/validate-economics-mapping.mjs` so it certifies ECO-LM2 as verified production content alongside ECO-LM1, while continuing to require ECO-LM3–ECO-LM8 to remain mapping-only.
- Fixed a scope leak in `scripts/validate-quant-mapping.mjs`: its tool-registry completeness check needed the two new non-Quantitative tool component names added to its existing Economics exclusion list (the same class of fix made for ECO-LM1's three tools in v1.7.1).
- Updated private verification records under `.local-research/economics-verification/ECO-LM2/` to reflect verified production status, including new `graph-audit.json`, `mock-coverage.json`, and `MODULE_VERIFICATION_SUMMARY.md` files; these records are not committed publicly.

## Verified inventory for ECO-LM2

| Asset | Official | Supplementary | Total |
|---|---:|---:|---:|
| Questions | 40 | 10 | 50 |
| Flashcards | 40 | 10 | 50 |
| Formulas | 4 | — | 4 |
| Interactive tools | 2 | — | 2 |

## Graph target reconciliation

The v1.7.0 mapping-stage plan estimated a graph target of 8 for ECO-LM2. This release delivers 8 original graphic elements — 2 ASCII decision-flow diagrams, 3 original comparison tables recreating the relationships in the module's official exhibits, and 3 SVG visualizations embedded in the 2 interactive tools — each independently checked against its corresponding official exhibit, rather than 8 standalone chart images. See `.local-research/economics-verification/ECO-LM2/graph-audit.json`.

## Tests and validation

- `npm run validate-mocks`, `validate-content`, `validate-quant-mapping`, `validate-quant-verification`, `validate-economics-mapping`, `lint`, `test`, and `build` all pass.
- 224 tests across 40 test files, including 2 new pure-calculation test files for the interactive tools, a new `economicsBusinessCyclesContent.test.ts`, and a new `economicsCurriculum.test.ts`.
- Initial JavaScript bundle is 290.87 kB (89.88 kB gzip), up modestly from 286.15 kB (88.89 kB gzip) in v1.7.1 due to the expanded lesson manifest, the new Economics curriculum registry, and the Economics topic-page section shipping in the main chunk; the lesson content and the 2 new tools ship in existing lazy-loaded chunks.

## Limitations and residual gaps

- The official 2027/2026 source gives the housing and external-trade activity clause of LOS 3 comparatively thin, indicator-level coverage rather than a dedicated framework. The lesson discloses this explicitly (Section 7) and builds general, original open-economy content for that clause instead of overstating official-source backing; recorded as `KI-L04` in `KNOWN_ISSUES.md`.
- One 2027 Schweser volume remains scanned/image-only in the local environment; not consulted, consistent with the pre-existing `KI-L03` limitation.
- Mock-exam coverage for ECO-LM2 is thin: only 2 locally available mock/premium-practice questions keyword-classified to this module at medium confidence across all discovered 2025–2026 mocks. Original supplementary questions were authored from verified curriculum concepts, not derived from mock wording.
- ECO-LM3 through ECO-LM8 remain mapping-only, unchanged from v1.7.0, per the one-module-at-a-time roadmap.
- Illustrative interpretive aids in the Credit Cycle Explorer (loosening/stable/tightening bands, the elevated-risk flag) and the Business Cycle Indicator Timeline (leading/coincident/lagging offset spacing) are labeled in the tools as teaching approximations, not asserted official CFA curriculum content.

## Next release

ECO-LM3 — Fiscal Policy, per `docs/ECONOMICS_RELEASE_PLAN.md`.

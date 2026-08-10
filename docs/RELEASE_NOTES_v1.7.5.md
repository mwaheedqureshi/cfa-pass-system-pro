# v1.7.5 — Economics Module Production Sprint 5: ECO-LM5 Introduction to Geopolitics

This release produces and verifies ECO-LM5 against the official 2027 CFA Level I Economics curriculum, under the planned stable lesson id from the v1.7.0 target manifest, `economics-05-introduction-to-geopolitics`.

## Scope

- Recursively re-scanned the entire local CFA library (`C:\Users\Z4 G4\Documents\CFA`) in two passes, refreshing the existing inventory and confirming no additional ECO-LM5 candidate sources existed outside the folders already recorded in `.local-research/economics-verification/master-source-inventory.json`.
- Read the full official 2027 source text for ECO-LM5 (PDF pp. 149-200, printed pp. 141-192), the longest Economics module produced so far at 52 pages, and cross-checked it against the 2026 source. This module shows **no exhibit-numbering shift and no substantive content difference** between editions — the mildest 2026->2027 delta of any Economics module produced to date.
- Cross-checked three secondary providers (IFT, FinTree, Zell Education) for triangulation. IFT and FinTree independently corroborate the official conceptual scope with no formula or unsourced current-events content added. Zell Education's notes were found to introduce **unsourced current-events political framing** (a named diplomatic-visit example and war-related statistics) not present in the official 2026 or 2027 CFA text; this framing was explicitly excluded from all lesson-authoring input, per the module's heightened political-neutrality requirement. One 2027 Schweser volume (Book 2) remains scanned/image-only and was not consulted, consistent with the existing recorded limitation for ECO-LM1-LM4 (`KNOWN_ISSUES.md` KI-L03).
- Wrote a complete original lesson (`public/content/economics/05-introduction-to-geopolitics.md`) covering all six official learning outcomes across six sections, with 22 original worked/scenario examples (target: at least 18, all qualitative given the module's zero-formula, framework-based scope), the archetypes-of-country-behavior 2x2 framework, a tools-to-quadrants comparison table, a glossary, a one-page revision sheet, and a 30-second summary. Content was authored strictly from the official source's own descriptive, non-judgmental framing: all hypothetical hierarchy-of-interest scenarios use generic "Country A/B" labels, and real historical episodes (Bretton Woods/GATT/WTO history, Venezuela sanctions, Crimea/Russia gas disputes, Syrian refugee crisis, Brexit, Fukushima, Equifax, COVID-19, China's WTO accession) are framed in strictly descriptive, past-tense terms with no endorsement, criticism, or position taken on any government, party, or conflict.
- Confirmed and honestly recorded **0 official formulas**: source research found no explicit symbolic formula anywhere in the 52-page reading, against a mapping-stage target of 2. No formula was invented; `lessonManifest.test.ts` was extended with a narrowly scoped, documented exception for this lesson, and the module is correctly omitted from the Formula Explorer integration.
- Added 50 new questions (40 official, 10 supplementary) and 50 new flashcards (40 official, 10 supplementary), all under the new lesson id, exactly 3 choices each with full option-level explanations, reviewed for political neutrality. An initial answer-position skew (17/20/13) was corrected via safe choice-order swaps to 17/17/16. A JSON syntax/logic defect found in one question during authoring (a stray bracket and a mismatched `correctChoiceIndex`) was fixed before verification.
- Built and registered 1 interactive tool, Geopolitical Risk Scenario Map, matching the single tool actually named in `docs/ECONOMICS_INTERACTIVE_PLAN.md` for this module: an archetype classifier (cooperation x globalization -> Multilateralism/Hegemony/Bilateralism/Autarky) and a risk-type/velocity transmission mapper (event/exogenous/thematic x high/medium/low -> transmission channels), each with pure, unit-tested calculation functions independent of the React component, using only generic labels and disclosing the source's own spectrum/non-judgment caveats directly in the UI.
- Registered the new lesson in the lesson manifest, `LessonInteractiveTools.tsx`, search index, Practice, Flashcards, chapter exam routing (`LessonResources`), and `LessonPage`.
- Updated `src/content/economicsCurriculum.ts` to mark ECO-LM5 verified with its study lesson id, which drives the data-driven "5 / 8 official modules published" section on the Economics topic page automatically.
- Updated `scripts/validate-content.mjs` for the new counts, the 40/10 official/supplementary split, and interactive-tool registration, while deliberately omitting ECO-LM5 from the formula-file expectations (0 official formulas).
- Updated `scripts/validate-economics-mapping.mjs` so it certifies ECO-LM5 as verified production content alongside ECO-LM1-ECO-LM4, while continuing to require ECO-LM6-ECO-LM8 to remain mapping-only.
- Extended the non-Quantitative tool exclusion list in `scripts/validate-quant-mapping.mjs` with the new tool component name.
- Updated private verification records under `.local-research/economics-verification/ECO-LM5/` to reflect verified production status, including a `neutralityAudit` section documenting the political-neutrality review and the Zell exclusion finding; these records are not committed publicly.

## Verified inventory for ECO-LM5

| Asset | Official | Supplementary | Total |
|---|---:|---:|---:|
| Questions | 40 | 10 | 50 |
| Flashcards | 40 | 10 | 50 |
| Formulas | 0 | — | 0 |
| Interactive tools | 1 | — | 1 |

## Formula and graph target reconciliation

The v1.7.0 mapping-stage plan estimated a formula target of 2 and a graph target of 4 for ECO-LM5. This release delivers **0 formulas** after source research confirmed the official 52-page reading contains no explicit symbolic formula anywhere — a purely conceptual/framework-based module, a stronger finding than even ECO-LM4's single-formula result. The graph target of 4 is met exactly: 1 original 2x2 archetype matrix table, 1 original tools-to-quadrants comparison table, and 2 interactive SVG visualizations embedded in the single tool. See `.local-research/economics-verification/ECO-LM5/formula-audit.json` and `graph-audit.json`.

## Tests and validation

- `npm run validate-mocks`, `validate-content`, `validate-quant-mapping`, `validate-quant-verification`, `validate-economics-mapping`, `lint`, `test`, and `build` all pass.
- 284 tests across 48 test files, including a new pure-calculation test file for the interactive tool (`GeopoliticalRiskScenarioMap.test.ts`) and a new `economicsGeopoliticsContent.test.ts`, which explicitly asserts the module's zero-formula property.
- Initial JavaScript bundle is 297.11 kB (91.31 kB gzip), up modestly from 295.24 kB (90.86 kB gzip) in v1.7.4 due to the expanded lesson manifest and Economics curriculum registry; the lesson content and the new tool ship in existing lazy-loaded chunks.

## Limitations and residual gaps

- No mock-exam coverage was found for ECO-LM5 in the locally available 2025-2026 mock/premium-practice library; the 10 original supplementary questions were authored entirely from verified curriculum concepts, and 0 mappings were forced.
- One 2027 Schweser volume (Book 2) remains scanned/image-only in the local environment; not consulted, consistent with the pre-existing `KI-L03` limitation.
- Several official exhibits (cross-country data tables, historical timelines, specific historical market-reaction data) use dated, specific reference points; this release uses original, generic narrative treatment rather than reproducing those specific figures as current.
- A secondary provider (Zell Education) was found to introduce unsourced current-events political framing absent from the official text; this was identified during source triangulation and explicitly excluded from all lesson, question, and flashcard content, per the module's neutrality requirement. See `docs/ECONOMICS_2027_TARGET_MANIFEST.md` and `KNOWN_ISSUES.md` (KI-L06) for the formula-scope reconciliation.
- ECO-LM6 through ECO-LM8 remain mapping-only, unchanged from v1.7.0, per the one-module-at-a-time roadmap.

## Next release

ECO-LM6, per `docs/ECONOMICS_RELEASE_PLAN.md`.

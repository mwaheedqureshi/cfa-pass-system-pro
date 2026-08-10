# v1.7.4 — Economics Module Production Sprint 4: ECO-LM4 Monetary Policy

This release produces and verifies ECO-LM4 against the official 2027 CFA Level I Economics curriculum, under the planned stable lesson id from the v1.7.0 target manifest, `economics-04-monetary-policy`.

## Scope

- Recursively scanned the entire local CFA library (`C:\Users\Z4 G4\Documents\CFA`, 29 folders, 218 files across 10 provider folders and 4 discovered years) in two passes, confirming no additional ECO-LM4 candidate sources existed outside the folders already inventoried in `.local-research/economics-verification/master-source-inventory.json`.
- Read the full official 2027 source text for ECO-LM4 (PDF pp. 113–148, printed pp. 105–140) and cross-checked it against the 2026 source. Unlike ECO-LM3, this module shows **no exhibit-numbering shift** between editions; two small, genuine factual updates were found instead (France's banking supervisor renamed to the ACPR; FOMC mechanics updated from an open-market-operations framing to the modern administered-rates framing), both reflected in the lesson.
- Cross-checked three secondary providers (IFT, FinTree, Zell Education) for triangulation. All three independently corroborate the module's one formula (the neutral policy rate) with different worked parameters. Fintree and Zell separately introduce money-multiplier, Fisher-relationship, and quantity-theory-of-money content that is **confirmed absent** from the official 2027 LM4 reading — this content was deliberately excluded from the formula set rather than misattributed. One 2027 Schweser volume (Book 2) remains scanned/image-only and was not consulted, consistent with the existing recorded limitation for ECO-LM1–LM3 (`KNOWN_ISSUES.md` KI-L03).
- Wrote a complete original lesson (`public/content/economics/04-monetary-policy.md`) covering all four official learning outcomes across seven sections, with 22 independently recalculated worked examples (target: at least 20), three ASCII diagrams, two original comparison tables, a glossary, a one-page revision sheet, and a 30-second summary.
- Added 2 new formula records (neutral policy rate; policy rate gap) against a mapping-stage target of 10 — source research confirmed the official reading contains exactly one explicit symbolic formula in the entire module; no additional formulas were invented to hit the target count.
- Added 55 new questions (45 official, 10 supplementary) and 55 new flashcards (45 official, 10 supplementary), all under the new lesson id. An initial answer-position skew (27/15/13) was corrected via safe choice-order swaps to 18/18/19.
- Built and registered 2 interactive tools: Monetary Transmission Explorer (neutral-rate/stance calculator plus a directional four-channel transmission visualization) and Central Bank Targeting Comparator (inflation/exchange-rate/interest-rate regime comparison plus an independence-and-transparency quality assessment). Each has pure, unit-tested calculation functions independent of its React component.
- Registered the new lesson in the lesson manifest, `LessonInteractiveTools.tsx`, search index, Practice, Formula Explorer, Flashcards, chapter exam routing, and `LessonResources`.
- Updated `src/content/economicsCurriculum.ts` to mark ECO-LM4 verified with its study lesson id, which drives the data-driven "4 / 8 official modules published" section on the Economics topic page automatically.
- Updated `scripts/validate-content.mjs` for the new counts, the 45/10 official/supplementary split, and interactive-tool registration.
- Updated `scripts/validate-economics-mapping.mjs` so it certifies ECO-LM4 as verified production content alongside ECO-LM1–ECO-LM3, while continuing to require ECO-LM5–ECO-LM8 to remain mapping-only.
- Extended the non-Quantitative tool exclusion list in `scripts/validate-quant-mapping.mjs` with the two new tool component names.
- Updated private verification records under `.local-research/economics-verification/ECO-LM4/` to reflect verified production status, including new `graph-audit.json`, `mock-coverage.json`, and `MODULE_VERIFICATION_SUMMARY.md` files; these records are not committed publicly.

## Verified inventory for ECO-LM4

| Asset | Official | Supplementary | Total |
|---|---:|---:|---:|
| Questions | 45 | 10 | 55 |
| Flashcards | 45 | 10 | 55 |
| Formulas | 2 | — | 2 |
| Interactive tools | 2 | — | 2 |

## Formula and graph target reconciliation

The v1.7.0 mapping-stage plan estimated a formula target of 10 and a graph target of 7 for ECO-LM4. This release delivers 2 formulas — the module's sole explicit formula (the neutral policy rate) and a direct formalization of its own stated stance-comparison rule — after source research confirmed no money-multiplier, Fisher-relationship, Taylor-rule, or quantity-theory formula exists in the official text. The graph target of 7 is met exactly: 3 ASCII diagrams, 2 original comparison tables, and 2 SVG visualizations embedded in the 2 interactive tools. See `.local-research/economics-verification/ECO-LM4/formula-audit.json` and `graph-audit.json`.

## Tests and validation

- `npm run validate-mocks`, `validate-content`, `validate-quant-mapping`, `validate-quant-verification`, `validate-economics-mapping`, `lint`, `test`, and `build` all pass.
- 270 tests across 46 test files, including 2 new pure-calculation test files for the interactive tools and a new `economicsMonetaryPolicyContent.test.ts`.
- Initial JavaScript bundle is 295.24 kB (90.86 kB gzip), up modestly from 293.03 kB (90.41 kB gzip) in v1.7.3 due to the expanded lesson manifest and Economics curriculum registry; the lesson content and the 2 new tools ship in existing lazy-loaded chunks.

## Limitations and residual gaps

- The official reading's exhibits (supervision table, objectives quote-compilation, inflation-targeting adoption timeline, target-range table, USD-peg/dollarization list, Japan inflation/deflation chart) use dated reference points, several from 2018; this release uses original narrative and comparison-table treatment rather than reproducing those specific figures as current.
- One 2027 Schweser volume (Book 2) remains scanned/image-only in the local environment; not consulted, consistent with the pre-existing `KI-L03` limitation.
- Mock-exam coverage for ECO-LM4 is comparable to ECO-LM3's, the richest of the modules produced to date: 26 locally available mock/premium-practice questions keyword-classified to this module at medium confidence across all discovered 2025–2026 mocks. Original supplementary questions were authored from verified curriculum concepts, not derived from mock wording.
- ECO-LM5 through ECO-LM8 remain mapping-only, unchanged from v1.7.0, per the one-module-at-a-time roadmap.
- LOS 3's "interest rate targeting" clause has no dedicated official subsection; the lesson and the Central Bank Targeting Comparator tool build this leg around the neutral-rate mechanism, consistent with the source's own structure, and this is explicitly disclosed rather than presented as an equivalent-depth third regime.

## Next release

ECO-LM5 — Introduction to Geopolitics, per `docs/ECONOMICS_RELEASE_PLAN.md`.

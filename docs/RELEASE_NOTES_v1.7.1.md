# v1.7.1 — Economics Module Production Sprint 1: ECO-LM1 The Firm and Market Structures

This release produces and verifies ECO-LM1 against the official 2027 CFA Level I Economics curriculum. It expands the existing preliminary lesson `economics-firm-market-01` in place rather than introducing a parallel lesson, preserving the stable content ID, route, and all previously published learner-facing content.

## Scope

- Read the full official 2027 source text for ECO-LM1 (PDF pp. 11–56) directly from the local CFA library and cross-checked it against the 2026 source, the 2026→2027 change analysis, and three secondary providers (IFT, Zell Education, FinTree).
- Expanded the lesson to 16 worked examples, a glossary, two ASCII decision-flow diagrams (operate/shut-down; market-structure identification), an additional CR_N-versus-HHI comparison table, and an interactive-tools section, while keeping all previously published sections and 30 prior worked examples' surrounding material intact.
- Added 2 new formula records (Cournot symmetric duopoly equilibrium; HHI equal-share benchmark), bringing the module to 12 formulas.
- Added 20 new questions (5 official, 15 supplementary), bringing the module to 45 official and 15 supplementary questions (60 total). All 40 previously published questions are unchanged.
- Added 30 new flashcards (15 official, 15 supplementary), bringing the module to 45 official and 15 supplementary flashcards (60 total). All 30 previously published flashcards are unchanged.
- Built and registered 3 interactive tools: Supply, Cost, and Market Structure Explorer; Breakeven and Shutdown Explorer; Concentration Measure Explorer. Each has a pure, unit-tested calculation function independent of its React component.
- Updated `scripts/validate-content.mjs` for the new counts, the 45/15 official/supplementary split, and interactive-tool registration.
- Updated `scripts/validate-economics-mapping.mjs` so it certifies ECO-LM1 as verified production content while continuing to require ECO-LM2–ECO-LM8 to remain mapping-only, matching the roadmap's one-module-at-a-time production plan.
- Fixed a scope leak in `scripts/validate-quant-mapping.mjs`: its tool-registry completeness check previously audited every component in the shared `LessonInteractiveTools.tsx` registry file, which broke once non-Quantitative tools existed there. The check is now scoped to Quantitative tools only.
- Updated private verification records under `.local-research/economics/` and `.local-research/economics-verification/ECO-LM1/` to reflect verified production status; these records are not committed publicly.

## Why the stable lesson ID was retained

`docs/ECONOMICS_2027_TARGET_MANIFEST.md` (written during the v1.7.0 mapping-only release) proposed a future lesson ID, `economics-01-the-firm-and-market-structures`, as planning-stage naming — that release explicitly implemented no routes or public assets under any ID. The existing preliminary lesson `economics-firm-market-01` already covers the same five official outcomes and is wired through the lesson manifest, search index, formulas/flashcards/practice pages, and chapter exam. Renaming it would have touched ten-plus files purely for a cosmetic ID change and risked orphaning any learner progress keyed to the existing ID, contradicting the project's standing rule to preserve stable content IDs and routes absent an explicit migration need. This release therefore treats v1.7.1 as a production/verification upgrade of the existing lesson rather than a parallel new one, and the target manifest has been annotated accordingly.

## Verified inventory for ECO-LM1

| Asset | Official | Supplementary | Total |
|---|---:|---:|---:|
| Questions | 45 | 15 | 60 |
| Flashcards | 45 | 15 | 60 |
| Formulas | 12 | — | 12 |
| Interactive tools | 3 | — | 3 |

## Tests and validation

- `npm run validate-mocks`, `validate-content`, `validate-quant-mapping`, `validate-quant-verification`, `validate-economics-mapping`, `lint`, `test`, and `build` all pass.
- 198 tests across 36 test files, including 3 new pure-calculation test files for the interactive tools and expanded assertions in `economicsContent.test.ts`.
- Initial JavaScript bundle is unchanged at 286.15 kB (88.89 kB gzip); the 3 new tools and expanded content ship in existing lazy-loaded chunks.

## Limitations and residual gaps

- One 2027 Schweser volume (`Schweser (2027)/CFA level 1 book 1.pdf`) has no extractable text layer in the local environment used for this release (poppler/tesseract were available only inside a WSL environment that was not exercised); it was not consulted and is recorded as a residual gap in the private source log rather than silently skipped.
- Mock-exam coverage for ECO-LM1 is thin: only 3 locally available mock questions keyword-classified to this module at medium confidence. Original challenge questions were authored from verified curriculum concepts, not derived from mock wording.
- ECO-LM2 through ECO-LM8 remain mapping-only, unchanged from v1.7.0, per the one-module-at-a-time roadmap.
- Concentration-measure classification bands surfaced in the Concentration Measure Explorer (unconcentrated / moderately concentrated / highly concentrated) are illustrative interpretive aids, not asserted as official CFA curriculum content, and are labeled as such in the tool.

## Next release

ECO-LM2 — Understanding Business Cycles, per `docs/ECONOMICS_RELEASE_PLAN.md`.

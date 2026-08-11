# Economics verification summary (v1.7.9)

This is the release-level certification record for the CFA Level I 2027 Economics topic. It consolidates the per-module verification work performed in v1.7.1 through v1.7.8 and the cross-module, release-level checks performed in v1.7.9. Economics is certified **VERIFIED AND CONTENT-FROZEN** as of this release.

## Official 8-module structure

| Module | Official title | Study lesson |
|---|---|---|
| ECO-LM1 | The Firm and Market Structures | `economics-firm-market-01` |
| ECO-LM2 | Understanding Business Cycles | `economics-02-understanding-business-cycles` |
| ECO-LM3 | Fiscal Policy | `economics-03-fiscal-policy` |
| ECO-LM4 | Monetary Policy | `economics-04-monetary-policy` |
| ECO-LM5 | Introduction to Geopolitics | `economics-05-introduction-to-geopolitics` |
| ECO-LM6 | International Trade | `economics-06-international-trade` |
| ECO-LM7 | Capital Flows and the FX Market | `economics-07-capital-flows-and-the-fx-market` |
| ECO-LM8 | Exchange Rate Calculations | `economics-08-exchange-rate-calculations` |

## Official source used

`C:/Users/Z4 G4/Documents/CFA/Curriculum 2027/Economics 2027.pdf` (PDF pp. 11-278, covering all 8 modules plus the book-wide glossary). Cross-checked against `C:/Users/Z4 G4/Documents/CFA/Curriculum 2026/` for edition changes, and against `C:/Users/Z4 G4/Documents/CFA/Curriculum change for 2027/` for the official change document.

## Recursive library methodology

A fresh two-pass recursive rescan of the entire local CFA library (`C:\Users\Z4 G4\Documents\CFA`) was performed for this release. Pass 1 (filenames/paths/metadata) found 29 folders and 218 files (217 PDF, 1 DOCX) — byte-for-byte identical in count, path, and size to the v1.7.0 mapping-stage snapshot (`master-source-inventory.json`, generated 2026-08-07). Zero files were added, removed, or changed. Because no file changed, Pass 2 (deep re-extraction) was not re-run against all 217 PDFs; the per-module extractions already performed and recorded during ECO-LM1 through ECO-LM8 production remain current. No newly discovered source contradicts any verified module. See `.local-research/economics-verification/ECO-LM-CERT/rescan-summary.json`.

## 2026 -> 2027 change summary

Every module was individually cross-checked against the 2026 edition during its own production release. Findings: ECO-LM1-LM3, LM5, LM6, LM8 show zero substantive content change (pagination-only shifts in some cases); ECO-LM4 has two small genuine factual updates (France's supervisor renamed to ACPR; FOMC mechanics updated to the modern administered-rates description); ECO-LM7 has one confirmed terminology update ("China"/"mainland China" -> "The Chinese Mainland"). No module required a scope change as a result of the 2026->2027 comparison.

## Verification status by module

All 8 modules: **VERIFIED**. Every module has a complete private evidence trail (source-map, coverage-matrix, lesson-audit, example-audit, question-audit, flashcard-audit, formula-audit, graph-audit, tool-audit, mock-coverage, verification-report, MODULE_VERIFICATION_SUMMARY) confirmed present and substantive during this release's Phase 1 evidence audit. ECO-LM1's evidence trail (produced in v1.7.1, before several audit-file conventions existed) was backfilled with genuine, source-grounded content during this release with no change to any public lesson, question, flashcard, formula, or tool.

## Final question totals

325 official + 85 supplementary = 410 total, computed directly from `src/data/questions/economics-*.json`. Per module (official/supplementary): LM1 45/15, LM2 40/10, LM3 40/10, LM4 45/10, LM5 40/10, LM6 35/10, LM7 45/10, LM8 35/10.

## Final flashcard totals

325 official + 85 supplementary = 410 total, computed directly from `src/data/flashcards/economics-*.json`, with the same per-module split as questions. Zero duplicate IDs and zero duplicate normalized fronts, checked project-wide.

## Final formula totals

42 official formulas, 0 supplementary, computed directly from `src/data/formulas/economics-*.json`. Per module: LM1 12, LM2 4, LM3 7, LM4 2, LM5 0, LM6 4, LM7 5, LM8 8. ECO-LM5 has no formula file because the official reading contains no explicit symbolic formula (source-verified, not a gap).

## Worked example totals

163 worked examples across all 8 lessons, independently recalculated. Per module: LM1 16, LM2 16, LM3 21, LM4 22, LM5 22, LM6 20, LM7 22, LM8 24.

## Graph / diagram totals

46 original graphic elements across all 8 lessons and their interactive tools. Per module (delivered/mapping-stage target): LM1 5/12, LM2 8/8, LM3 5/5, LM4 7/7, LM5 4/4, LM6 7/7, LM7 6/8, LM8 4/4. Every deviation from a mapping-stage target is a documented downward reconciliation against the real source content (never a forced invention); see each module's `graph-audit.json` and `KNOWN_ISSUES.md` KI-L04 through KI-L09.

## Tool totals

14 interactive tools registered across the 8 modules (LM1 3, LM2 2, LM3 2, LM4 2, LM5 1, LM6 2, LM7 1, LM8 1). Every tool has a colocated `*.test.ts` file with pure-calculation unit tests independent of its React component, confirmed present for all 14 during this release's Phase 8 audit. The shared `nonQuantTools` exclusion list in `scripts/validate-quant-mapping.mjs` names all 14.

## Chapter exams

All 8 modules resolve a working chapter exam through the shared, lesson-agnostic `ChapterExam` component (30 randomized official questions, supplementary excluded, timed/untimed modes, pause/resume, local persistence, scoring, learning-outcome breakdown, confidence breakdown, incorrect-answer review with lesson and formula links, retry incorrect). Every module has at least 35 official questions, comfortably above the 30 a chapter exam draws.

## Economics comprehensive assessment

New in v1.7.9: a 60-question comprehensive assessment (`EconomicsComprehensiveAssessment.tsx`, reachable at `/practice?mode=economics` and linked from the Economics topic page) balanced across all 8 official modules using the same deterministic, seeded `selectBalancedAssessment` engine that powers the Quantitative comprehensive assessment (`src/services/assessmentService.ts`, generalized in this release to resolve Economics module IDs via a new `officialModuleForLesson` lookup in `economicsCurriculum.ts`). Official-only selection, 90-minute default timer, pause/resume, local persistence, score, module breakdown, learning-outcome breakdown, confidence breakdown, incorrect-answer review with lesson and formula links, and a "Retry weak areas" action. Verified by `src/services/economicsCertification.test.ts` (7 tests: 60-question/8-module selection, balanced allocation, supplementary exclusion, deterministic seed behavior, distinct selection under a different seed, scoring, module/confidence breakdowns) and by the new `scripts/validate-economics-verification.mjs`.

## Mock coverage by module / year

74 mock items mapped across 2025 and 2026 mock years. Per module: LM1 3 (2026, medium confidence, keyword-level), LM2 2, LM3 26, LM4 26, LM5 0 (honestly unmapped, not forced), LM6 4, LM7 6, LM8 7. The ECO-LM7/ECO-LM8 boundary was specifically re-verified during ECO-LM8 production: 3 previously flagged items were confirmed as genuine ECO-LM8 scope, 4 more were found, and 1 keyword false-positive (a Fixed-Income FRA question) was correctly excluded from both modules. No mock/premium source file was modified at any point.

## Major corrections discovered during production

- **KI-L09 (ECO-LM8):** an inverted hedged-return arbitrage formula (`(1/S) x (1+r_f) x F` instead of the correct `S x (1+r_f) / F`) was caught during independent recalculation and corrected in the lesson and two questions before release. Regression-checked in this release (`validate-economics-verification.mjs` scans for the buggy pattern in the ECO-LM8 lesson and question explanations) and confirmed absent.
- Minor rounding corrections in ECO-LM8 worked examples 4 and 14, and a garbled mid-sentence artifact in worked example 10, both caught and fixed during authoring.
- Answer-position-balance authoring oversights (questions initially clustering at index 0) occurred in multiple modules, most notably ECO-LM7 and ECO-LM8, and were corrected via automated cyclic-swap scripts before release, verified by balance checks in both `validate-content.mjs` and `validate-economics-verification.mjs`.

## Formula-scope deviations from the mapping plan

Six of eight modules deliver fewer formulas than their v1.7.0 mapping-stage estimate, each an honest reconciliation against source content rather than an invented count to hit a target: LM3 7/8, LM4 2/10, LM5 0/2, LM6 4/5, LM7 5/7. ECO-LM1 (12/12) and ECO-LM8 (8/8) match their targets exactly. No formula was ever invented to force a mapping-stage number; every deviation is documented in the relevant module's `formula-audit.json` and in `KNOWN_ISSUES.md` (KI-L05 through KI-L09).

## FX notation certification result

**PASS.** ECO-LM7 and ECO-LM8 use the identical A/B (price currency / base currency) quotation convention throughout every formula, worked example, question, flashcard, and the interactive tool; ECO-LM8 adds only a generic f/d (foreign/domestic) relabeling for its arbitrage-relationship derivation, explicitly presented as the same structure, not a new rule. A dedicated cross-module terminology audit (covering all 8 modules, with this LM7/LM8 boundary as the highest-priority check) found no genuine contradiction anywhere in the topic. KI-L09 remains corrected and was regression-checked by the new validator.

## Remaining non-critical issues

- **KI-L03:** local 2027 Schweser volumes remain scanned/image-only; not consulted for any Economics module, since the official 2027 source and other secondary providers were available.
- **KI-H02:** pre-existing visible encoding corruption in some legacy text (unrelated to Economics; not touched in this release, per the standing rule to fix it only in a dedicated engineering release).
- **KI-M01/KI-M02:** dependency-pinning and systematic accessibility auditing remain outstanding project-wide, not Economics-specific.
- ECO-LM1's mock-coverage mapping (3 items, 2026 only, medium confidence) is a lighter, keyword-only pass from the v1.7.0 mapping stage rather than the deeper LOS-level research given to later modules; consolidated into a per-module file this release, but not re-researched to the same depth.
- ECO-LM5 (Introduction to Geopolitics) has 0 confidently mapped mock items; recorded honestly as unmapped rather than forced.

None of these are critical or block certification; `verification-status.json` reports zero critical unresolved Economics items.

## Private-source policy

No official, provider, or mock source text is copied into any public or private file. Private verification workspaces under `.local-research/economics-verification/` store only metadata (page ranges, outcome text already public in the curriculum's own published learning outcomes, structural facts, and independently recalculated figures) and are excluded from version control (`.gitignore` — confirmed via `git ls-files .local-research` returning empty, checked by both `validate-economics-mapping.mjs` and the new `validate-economics-verification.mjs`).

## Final status

**Economics: VERIFIED AND CONTENT-FROZEN**, effective v1.7.9. Future Economics changes are limited to verified defects, official CFA curriculum updates, mathematical/formula corrections, accessibility fixes, and security/compatibility fixes, mirroring the Quantitative Methods policy set at its own v1.6.6 certification.

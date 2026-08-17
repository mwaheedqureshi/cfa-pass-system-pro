# Curriculum status

## Quantitative Methods

Quantitative Methods is **VERIFIED AND CONTENT-FROZEN** for the official CFA Level I 2027 structure. Official mapping, source pages, formulas, examples, questions, flashcards, tools, chapter exams, comprehensive assessment behavior, and progress migration have passed v1.6.6 certification.

| Official module | Study lesson | Status |
|---|---|---|
| LM1 Returns of Financial Assets and Instruments | `quant-returns-01` | Fully verified |
| LM2 Types of Financial Returns | `quant-returns-02` | Fully verified |
| LM3 Benchmarking Returns | `quant-benchmarking-03` | Fully verified |
| LM4 The Time Value of Money in Finance | `quant-tvm-04` | Fully verified |
| LM5 Statistical Characteristics of Asset Returns | `quant-statistics-05` | Fully verified |
| LM6 Statistical Distributions for Financial Asset Prices and Returns | `quant-probability-06` | Fully verified |
| LM7 Estimation and Hypothesis Testing | `quant-sampling-08` (A); `quant-hypothesis-09` (B) | Fully verified; counted once |
| LM8 The Return and Risk of a Financial Portfolio | `quant-distributions-07` | Fully verified |
| LM9 Simulation of Financial Asset Prices and Returns | `quant-simulation-11` | Fully verified |
| LM10 Applications of Simple Linear Regression in Finance | `quant-regression-10` | Fully verified |
| LM11 Introduction to Financial Data Science | `quant-data-ai-12` | Fully verified |

Final Quantitative inventory: 545 official and 10 supplementary questions; 545 official and 10 supplementary flashcards; 155 official and 10 supplementary formulas; 27 registered tools. Supplementary LM11 model-evaluation material is excluded from official assessments.

Future Quantitative changes are limited to verified defects, official curriculum changes, mathematical corrections, accessibility fixes, and security or compatibility fixes.

## Economics

Economics is **VERIFIED AND CONTENT-FROZEN** for the official CFA Level I 2027 structure, effective v1.7.9. All 8 official modules were individually produced and content-verified across v1.7.1-v1.7.8, then certified together in v1.7.9: a fresh recursive two-pass library rescan found zero new or changed sources; a cross-module terminology and FX-notation review found no contradictions across all 8 lessons; question/flashcard/formula/graph/tool audits were recomputed directly from the shipped datasets; all 8 chapter exams and a new 60-question comprehensive assessment (balanced across all 8 modules) were verified; and mock coverage was consolidated (74 mapped items across 2025-2026). See `docs/ECONOMICS_VERIFICATION_SUMMARY.md` for the full certification record.

- **ECO-LM1 (The Firm and Market Structures)** is content-verified against the official 2027 source, with 45 official and 15 supplementary questions, 45 official and 15 supplementary flashcards, 12 formulas, and 3 registered interactive tools (Supply, Cost, and Market Structure Explorer; Breakeven and Shutdown Explorer; Concentration Measure Explorer). The lesson keeps its stable ID, `economics-firm-market-01`.
- **ECO-LM2 (Understanding Business Cycles)** is content-verified against the official 2027 source (confirmed a word-for-word zero-change carryover from the 2026 curriculum), with 40 official and 10 supplementary questions, 40 official and 10 supplementary flashcards, 4 formulas, and 2 registered interactive tools (Business Cycle Indicator Timeline; Credit Cycle Explorer). The lesson uses the planned stable ID from the v1.7.0 target manifest, `economics-02-understanding-business-cycles`.
- **ECO-LM3 (Fiscal Policy)** is content-verified against the official 2027 source (body text and worked examples identical to 2026, aside from an exhibit-numbering shift), with 40 official and 10 supplementary questions, 40 official and 10 supplementary flashcards, 7 formulas, and 2 registered interactive tools (Fiscal Multiplier Explorer; Fiscal Policy Stance Comparator). The lesson uses the planned stable ID from the v1.7.0 target manifest, `economics-03-fiscal-policy`.
- **ECO-LM4 (Monetary Policy)** is content-verified against the official 2027 source (no exhibit-numbering shift; two small genuine factual updates versus 2026), with 45 official and 10 supplementary questions, 45 official and 10 supplementary flashcards, 2 formulas, and 2 registered interactive tools (Monetary Transmission Explorer; Central Bank Targeting Comparator). The lesson uses the planned stable ID from the v1.7.0 target manifest, `economics-04-monetary-policy`.
- **ECO-LM5 (Introduction to Geopolitics)** is content-verified against the official 2027 source (52-page module, the longest Economics module produced so far, with no exhibit-numbering shift and no substantive 2026->2027 change), with 40 official and 10 supplementary questions, 40 official and 10 supplementary flashcards, 0 formulas (source-verified: the official reading contains no explicit symbolic formula), and 1 registered interactive tool (Geopolitical Risk Scenario Map). The lesson uses the planned stable ID from the v1.7.0 target manifest, `economics-05-introduction-to-geopolitics`. This module covers a politically sensitive subject; content was authored strictly from the official source's own descriptive, non-judgmental framing, and a secondary provider's unsourced current-events political framing was identified and excluded.

- **ECO-LM6 (International Trade)** is content-verified against the official 2027 source (zero substantive 2026->2027 content change), with 35 official and 10 supplementary questions, 35 official and 10 supplementary flashcards, 4 formulas, and 2 registered interactive tools (Trade Restriction Welfare Diagram; Trading Bloc Comparator). The lesson uses the planned stable ID from the v1.7.0 target manifest, `economics-06-international-trade`.
- **ECO-LM7 (Capital Flows and the FX Market)** is content-verified against the official 2027 source (38-page module, the longest Economics module produced so far, effectively zero substantive 2026->2027 content change aside from one confirmed terminology update), with 45 official and 10 supplementary questions, 45 official and 10 supplementary flashcards, 5 formulas, and 1 registered interactive tool (FX Quote and Regime Explorer). The lesson uses the planned stable ID from the v1.7.0 target manifest, `economics-07-capital-flows-and-the-fx-market`. Given this module's high sensitivity to currency-quotation-direction errors, the lesson opens with a dedicated, explicit notation-convention section, and every calculation states its A/B (price/base) convention consistently.

- **ECO-LM8 (Exchange Rate Calculations)** is content-verified against the official 2027 source (20-page module, PDF pp. 259-278, of which pp. 275-278 are the book-wide Economics glossary rather than module content; zero substantive 2026->2027 content difference), with 35 official and 10 supplementary questions, 35 official and 10 supplementary flashcards, 8 formulas (matching its mapping-stage target exactly — the only Economics module requiring no downward formula-count revision), and 1 registered interactive tool (Cross-Rate and Forward-Rate Calculator). The lesson uses the planned stable ID from the v1.7.0 target manifest, `economics-08-exchange-rate-calculations`. This module preserves the identical A/B (price/base) currency-quotation convention established in ECO-LM7 without restatement, adding only a generic f/d (foreign/domestic) relabeling for the arbitrage-relationship derivation. Independent recalculation of every worked example caught and corrected a hedged-return arbitrage formula-direction error before release; see `KNOWN_ISSUES.md` KI-L09.

All 8 official Economics modules — ECO-LM1 through ECO-LM8 — are content-verified and the topic is content-frozen as of v1.7.9. Final Economics inventory: 325 official and 85 supplementary questions; 325 official and 85 supplementary flashcards; 42 official formulas; 14 registered tools; 8 chapter exams; a 60-question comprehensive assessment. Supplementary material is excluded from official assessments.

Future Economics changes are limited to verified defects, official curriculum changes, mathematical corrections, accessibility fixes, and security or compatibility fixes.

## Financial Statement Analysis

Financial Statement Analysis is **VERIFIED AND CONTENT-FROZEN** for the official CFA Level I 2027 structure as of v1.8.12. All 12 official modules and all 53 LOS passed aggregate lesson, assessment, formula, tool, search, chapter-exam, progress, and reachability certification. Final inventory: 475 official plus 120 supplementary questions and flashcards, 110 formulas/metrics, 21 tools, and 12 chapter exams. This status applies only to FSA, not the entire Level I platform.

- **FSA-LM1 (Introduction to Financial Statement Analysis)** is content-verified against the official 2027 source (PDF pp.15-48 of a 518-page volume; zero substantive 2026->2027 content difference, confirmed via a dedicated line-by-line comparison), with 35 official and 10 supplementary questions, 35 official and 10 supplementary flashcards, 0 formulas (source-verified: the official reading contains no symbolic formula or numeric worked calculation), and 1 registered interactive tool (Financial Statement Analysis Framework Navigator). The lesson uses the planned stable ID from the v1.8.0 target manifest, `fsa-01-introduction-to-financial-statement-analysis`.
- **FSA-LM2 (Analyzing Income Statements)** is content-verified against the official 2027 source (PDF pp.49-102 of a 518-page volume; zero substantive 2026->2027 content difference), with 50 official and 10 supplementary questions, 50 official and 10 supplementary flashcards, 10 formulas (matching the mapping-stage target exactly by count, with an honest reconciliation of the placeholder category labels — see `KNOWN_ISSUES.md` KI-L15), and 2 registered interactive tools (Income Statement EPS Explorer, Revenue and Expense Recognition Classifier). EPS mechanics received deliberately extensive coverage (8 of 25 worked examples, 16 of 50 official questions) per the explicit EPS-calculation-safety priority, including full sequential most-dilutive-first complex-capital-structure testing. The lesson uses the planned stable ID from the v1.8.0 target manifest, `fsa-02-analyzing-income-statements`.
- **FSA-LM3 (Analyzing Balance Sheets)** is content-verified against the official 2027 source (PDF pp.103-134 of a 518-page volume; zero substantive 2026->2027 content difference, confirmed via a direct normalized diff), with 40 official and 10 supplementary questions (evenly balanced 8/2 across all 5 LOS), 40 official and 10 supplementary flashcards, 9 formulas (an organic overage over the 6-formula mapping-stage target, since the official source's own Exhibit 13 individually names 7 distinct balance-sheet ratios — see `KNOWN_ISSUES.md` KI-L17), and 2 registered interactive tools (Common-Size Statement Builder, Financial Instrument and Intangible Disclosure Explorer). Answer positions were balanced via a deterministic round-robin assignment at generation time, avoiding the post-hoc correction FSA-LM2 required (KI-L16). The lesson uses the planned stable ID from the v1.8.0 target manifest, `fsa-03-analyzing-balance-sheets`.

| Official module | Future study lesson | Status |
|---|---|---|
| FSA-LM1 Introduction to Financial Statement Analysis | `fsa-01-introduction-to-financial-statement-analysis` | Verified |
| FSA-LM2 Analyzing Income Statements | `fsa-02-analyzing-income-statements` | Verified |
| FSA-LM3 Analyzing Balance Sheets | `fsa-03-analyzing-balance-sheets` | Verified |
| FSA-LM4 Analyzing Statements of Cash Flows I | `fsa-04-analyzing-statements-of-cash-flows-i` | Verified v1.8.4 |
| FSA-LM5 Analyzing Statements of Cash Flows II | `fsa-05-analyzing-statements-of-cash-flows-ii` | Verified v1.8.5 |
| FSA-LM6 Analysis of Inventories | `fsa-06-analysis-of-inventories` | Verified v1.8.6 |
| FSA-LM7 Analysis of Long-Term Assets | `fsa-07-analysis-of-long-term-assets` | Verified v1.8.7 |
| FSA-LM6 Analysis of Inventories | `fsa-06-analysis-of-inventories` | Mapped |
| FSA-LM7 Analysis of Long-Term Assets | `fsa-07-analysis-of-long-term-assets` | Mapped |
| FSA-LM8 Topics in Long-Term Liabilities and Equity | `fsa-08-topics-in-long-term-liabilities-and-equity` | Verified v1.8.8 |
| FSA-LM9 Analysis of Income Taxes | `fsa-09-analysis-of-income-taxes` | Verified v1.8.9 |
| FSA-LM10 Financial Reporting Quality | `fsa-10-financial-reporting-quality` | Verified v1.8.10 |
| FSA-LM11 Financial Analysis Techniques | `fsa-11-financial-analysis-techniques` | Verified v1.8.11 |
| FSA-LM12 Introduction to Financial Statement Modeling | `fsa-12-introduction-to-financial-statement-modeling` | Verified v1.8.12 |

The official 2027 FSA source (`FSA 2027.pdf`, 518 pages) was directly extracted and confirmed to have exactly 12 modules, identical in count, title, order, and page anchors to the 2026 edition, with word-for-word identical learning outcomes across all 12 modules — essentially no substantive 2026->2027 change. Secondary providers (Schweser, IFT, FinTree, Zell, CFA Premium) and the local mock library were surveyed for future production planning; see `docs/FSA_2027_TARGET_MANIFEST.md`, `docs/FSA_INTERACTIVE_PLAN.md`, `docs/FSA_ASSESSMENT_PLAN.md`, and `docs/FSA_RELEASE_PLAN.md`. The local 2027 Schweser FSA volume remains scanned/image-only and was not consulted for content (`KNOWN_ISSUES.md` KI-L11); the 2026 mock exams' FSA coverage count is a disclosed partial lower bound pending OCR tooling (KI-L12).

FSA-LM1 delivers 1 registered interactive tool and 0 formulas against 12 official modules total; final FSA-LM1 inventory: 35 official and 10 supplementary questions; 35 official and 10 supplementary flashcards; 0 official formulas (honest downward revision, see `KNOWN_ISSUES.md` KI-L14); 1 registered tool; 1 chapter exam.

FSA-LM2 delivers 2 registered interactive tools and 10 formulas against 12 official modules total; final FSA-LM2 inventory: 50 official and 10 supplementary questions; 50 official and 10 supplementary flashcards; 10 official formulas (count matches the mapping-stage target exactly, category labels honestly reconciled, see `KNOWN_ISSUES.md` KI-L15); 2 registered tools; 1 chapter exam.

FSA-LM3 delivers 2 registered interactive tools and 9 formulas against 12 official modules total; final FSA-LM3 inventory: 40 official and 10 supplementary questions; 40 official and 10 supplementary flashcards; 9 official formulas (an organic overage over the 6-formula mapping-stage target, see `KNOWN_ISSUES.md` KI-L17); 2 registered tools; 1 chapter exam. FSA completion after v1.8.3: 3 of 12 official modules verified.

FSA-LM4 adds 45 official + 10 supplementary questions and flashcards, 8 formulas, 10 original exhibits, and 2 tools. FSA completion after v1.8.4: **4 of 12 (33.3%)**.

FSA-LM5 adds 35 official + 10 supplementary questions and flashcards, 16 formulas/metrics, 7 original exhibits, and 1 tool. FSA completion after v1.8.5: **5 of 12 (41.7%)**.

FSA-LM6 adds 40 official + 10 supplementary questions and flashcards, 8 formulas, 8 original exhibits, and 2 tools. FSA completion after v1.8.6: **6 of 12 (50%)**.

FSA-LM7 adds 35 official + 10 supplementary questions and flashcards, 13 formulas/metrics, 8 original exhibits, and 1 tool. FSA completion after v1.8.7: **7 of 12 (58.3%)**.

FSA-LM8 adds 35 official + 10 supplementary questions and flashcards, 11 formulas/metrics, 8 original exhibits, and 2 tools. FSA completion after v1.8.8: **8 of 12 (66.7%)**.

FSA-LM9 adds 30 official + 10 supplementary questions and flashcards, 8 formulas/metrics, 8 original exhibits, and 2 tools. FSA completion after v1.8.9: **9 of 12 (75.0%)**.

FSA-LM11 adds 55 official + 10 supplementary questions and flashcards, 20 LM11-owned formulas/metrics, 12 original exhibits, and 2 tools. FSA completion after v1.8.11: **11 of 12 (91.7%)**.

Next release: **FSA Module Production Sprint 12 — FSA-LM12**.

## Other topics

All other topics remain pending official mapping.

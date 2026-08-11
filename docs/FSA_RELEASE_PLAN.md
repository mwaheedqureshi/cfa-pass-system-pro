# Financial Statement Analysis release plan

Mapping is complete in v1.8.0, covering all 12 official 2027 FSA modules. Future releases remain subject to separate authorization and follow the same one-module-per-release discipline already used for Economics (v1.7.1 through v1.7.8), followed by a final topic-wide certification and content-freeze release (mirroring Economics v1.7.9).

Each future production release must include: a complete original lesson (verified LOS, worked examples independently recalculated, original exhibits — never reproductions of the official source's own tables), formulas/ratios verified against the official source (never forced to a target count), interactive tools where officially justified, questions, flashcards, a chapter exam, search/progress integration, substantive private verification, and tests — following `docs/CONTENT_PIPELINE.md` and `DEVELOPMENT_STANDARDS.md`.

- v1.8.1: FSA-LM1 — Introduction to Financial Statement Analysis.
- v1.8.2: FSA-LM2 — Analyzing Income Statements.
- v1.8.3: FSA-LM3 — Analyzing Balance Sheets.
- v1.8.4: FSA-LM4 — Analyzing Statements of Cash Flows I.
- v1.8.5: FSA-LM5 — Analyzing Statements of Cash Flows II.
- v1.8.6: FSA-LM6 — Analysis of Inventories.
- v1.8.7: FSA-LM7 — Analysis of Long-Term Assets.
- v1.8.8: FSA-LM8 — Topics in Long-Term Liabilities and Equity. Production should assess whether this module needs internal study subdivisions (leases; pension/stock-based compensation; disclosures), preserving one official module identity and counting completion once, the way Quantitative LM7 (Estimation/Hypothesis Testing) does — see the note in `docs/FSA_2027_TARGET_MANIFEST.md`.
- v1.8.9: FSA-LM9 — Analysis of Income Taxes.
- v1.8.10: FSA-LM10 — Financial Reporting Quality.
- v1.8.11: FSA-LM11 — Financial Analysis Techniques.
- v1.8.12: FSA-LM12 — Introduction to Financial Statement Modeling. Completes all 12 of 12 official FSA modules.
- v1.8.13: FSA Full Verification and Content Freeze. Certify all 12 FSA modules together (fresh recursive library rescan, cross-module terminology and accounting-treatment consistency review, full asset/tool/chapter-exam audits, an FSA comprehensive assessment, mock-coverage consolidation, and a dedicated `validate-fsa-verification` release gate) and mark the topic **VERIFIED AND CONTENT-FROZEN**, mirroring the v1.6.6 Quantitative and v1.7.9 Economics certifications.

Module order within this plan follows official module number. A future release may reorder later, unproduced modules if a scoping reason arises, but must update this document and `CURRICULUM_MASTER.md` explicitly rather than silently deviating.

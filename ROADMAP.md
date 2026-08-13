# Product roadmap

Roadmap entries define release boundaries, not permission to implement later work early.

| Release | Milestone | Intended outcome |
|---|---|---|
| v1.6.2 | Project Foundation | Governance documents, standards, status tracking, and release discipline |
| v1.6.3 | Official Curriculum Mapping | Complete: authoritative 11-module map, complete private item inventory, and migration/manifest design |
| v1.6.4 | Quantitative Remediation Part 1 | Complete: LM1-LM5 structural remediation |
| v1.6.5 | Quantitative Remediation Part 2 | Complete: LM6-LM11 structural remediation and progress migration |
| v1.6.6 | Quantitative Verification | Complete: verified and content-frozen across 11 official modules and 12 study lessons |
| v1.7.0 | Economics — Official 2027 Curriculum Mapping | Complete: 8-module official map and production design; no new learning assets |
| v1.7.1 | Economics Module Production Sprint 1 | Complete: ECO-LM1 The Firm and Market Structures produced and verified — 45 official + 15 supplementary questions and flashcards, 12 formulas, 3 interactive tools |
| v1.7.2 | Economics Module Production Sprint 2 | Complete: ECO-LM2 Understanding Business Cycles produced and verified — 40 official + 10 supplementary questions and flashcards, 4 formulas, 2 interactive tools |
| v1.7.3 | Economics Module Production Sprint 3 | Complete: ECO-LM3 Fiscal Policy produced and verified — 40 official + 10 supplementary questions and flashcards, 7 formulas, 2 interactive tools |
| v1.7.4 | Economics Module Production Sprint 4 | Complete: ECO-LM4 Monetary Policy produced and verified — 45 official + 10 supplementary questions and flashcards, 2 formulas, 2 interactive tools |
| v1.7.5 | Economics Module Production Sprint 5 | Complete: ECO-LM5 Introduction to Geopolitics produced and verified — 40 official + 10 supplementary questions and flashcards, 0 formulas (source-verified: no symbolic formula in the official reading), 1 interactive tool |
| v1.7.6 | Economics Module Production Sprint 6 | Complete: ECO-LM6 International Trade produced and verified — 35 official + 10 supplementary questions and flashcards, 4 formulas (source-verified honest formalization of the reading's own worked welfare-calculation method), 2 interactive tools |
| v1.7.7 | Economics Module Production Sprint 7 | Complete: ECO-LM7 Capital Flows and the FX Market produced and verified — 45 official + 10 supplementary questions and flashcards, 5 formulas (source-verified against a 7-formula mapping-stage estimate), 1 interactive tool |
| v1.7.8 | Economics Module Production Sprint 8 | Complete: ECO-LM8 Exchange Rate Calculations produced and verified — the final official Economics module — 35 official + 10 supplementary questions and flashcards, 8 formulas (matching its mapping-stage target exactly), 1 interactive tool. All 8 of 8 official Economics modules are now content-verified; Economics is not yet content-frozen |
| v1.7.9 | Economics Full Verification and Content Freeze | Complete: certified all 8 Economics modules together (fresh recursive library rescan, cross-module terminology and FX-notation review, full asset/tool/chapter-exam audits, a new 60-question comprehensive assessment, mock-coverage consolidation, and a new `validate-economics-verification` release gate) and marked the topic **VERIFIED AND CONTENT-FROZEN**, mirroring the v1.6.6 Quantitative certification |
| v1.8.0 | Financial Statement Analysis — Official 2027 Curriculum Mapping | Complete: 12-module official map (FSA-LM1 through FSA-LM12, official 2027 source directly confirmed, essentially unchanged from 2026) and production design (505 planned questions/flashcards, 91 formula/ratio targets, 102 exhibit targets, 21 planned tools); no new learning assets |
| v1.8.1 | FSA Module Production Sprint 1 | Complete: FSA-LM1 Introduction to Financial Statement Analysis produced and verified — 35 official + 10 supplementary questions and flashcards, 0 formulas (source-verified: no symbolic formula in the official reading), 1 interactive tool |
| v1.8.2 | FSA Module Production Sprint 2 | Complete: FSA-LM2 Analyzing Income Statements produced and verified — 50 official + 10 supplementary questions and flashcards, 10 formulas (matching its mapping-stage target exactly, with placeholder category labels honestly reconciled), 2 interactive tools |
| v1.8.3 | FSA Module Production Sprint 3 | Complete: FSA-LM3 Analyzing Balance Sheets produced and verified — 40 official + 10 supplementary questions and flashcards, 9 formulas (an organic overage over its 6-formula mapping-stage target, matching the official source's 7 individually named balance-sheet ratios), 2 interactive tools |
| v1.8.4 | FSA Module Production Sprint 4 | FSA-LM4 Analyzing Statements of Cash Flows I |
| v1.8.5 | FSA Module Production Sprint 5 | FSA-LM5 Analyzing Statements of Cash Flows II |
| v1.8.6 | FSA Module Production Sprint 6 | FSA-LM6 Analysis of Inventories |
| v1.8.7 | FSA Module Production Sprint 7 | FSA-LM7 Analysis of Long-Term Assets |
| v1.8.8 | FSA Module Production Sprint 8 | FSA-LM8 Topics in Long-Term Liabilities and Equity |
| v1.8.9 | FSA Module Production Sprint 9 | FSA-LM9 Analysis of Income Taxes |
| v1.8.10 | FSA Module Production Sprint 10 | FSA-LM10 Financial Reporting Quality |
| v1.8.11 | FSA Module Production Sprint 11 | FSA-LM11 Financial Analysis Techniques |
| v1.8.12 | FSA Module Production Sprint 12 | FSA-LM12 Introduction to Financial Statement Modeling — completes all 12 of 12 official FSA modules |
| v1.8.13 | FSA Full Verification and Content Freeze | Certify all 12 FSA modules together and mark the topic content-frozen, mirroring the v1.6.6 Quantitative and v1.7.9 Economics certifications |
| v2.0 | Economics | Superseded — Economics was completed and certified across v1.7.0-v1.7.9 rather than as a single v2.0 milestone; row retained for historical sequencing only |
| v3.0 | Financial Statement Analysis | Superseded — FSA is planned to complete across v1.8.0-v1.8.13 rather than as a single v3.0 milestone, mirroring the Economics sequencing; row retained for historical sequencing only |
| v4.0 | Corporate Issuers | Complete the Corporate Issuers topic |
| v5.0 | Equity | Complete Equity Investments |
| v6.0 | Fixed Income | Complete Fixed Income |
| v7.0 | Derivatives | Complete Derivatives |
| v8.0 | Alternative Investments | Complete Alternative Investments |
| v9.0 | Portfolio Management | Complete Portfolio Management |
| v10 | Ethics | Complete Ethical and Professional Standards |
| v11 | Mock Exam Center | Deliver integrated mock exams, diagnostics, and review workflows |
| v12 | AI Study Coach | Deliver a privacy-conscious adaptive study assistant after core content verification |

## Roadmap rules

- Implement one release at a time.
- A later milestone does not authorize scope expansion in the current sprint.
- Update this roadmap when sequencing changes; record unscheduled work in `KNOWN_ISSUES.md`.
- Major topic milestones require verified mapping, original content, complete learning assets, validation, tests, and release documentation.

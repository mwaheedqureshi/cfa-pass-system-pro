# v1.6.6 — Quantitative Verification

This release certifies Quantitative Methods against the locally held official CFA Level I 2027 curriculum. It preserves all 12 stable lesson routes while representing the 11-module official structure, including the two LM7 study subdivisions.

## Verification completed

- Recursively checked the complete local CFA library: 29 folders, 218 files, 217 PDFs, and 1 DOCX.
- Verified official source mapping and page ranges for LM1–LM11.
- Recalculated formulas, worked examples, numerical questions, and interactive-tool fixtures.
- Audited 555 Quantitative questions, 555 flashcards, 165 formulas, and 27 tools.
- Verified official-only chapter exams and the balanced 90-question comprehensive assessment.
- Certified the versioned, idempotent 2027 Quantitative progress migration.
- Regression-checked the Mock Exam Center: 17 playable mocks and 2,402 extracted questions.
- Added `npm run validate-quant-verification` and included it in `npm run check`.

## Classification policy

Official-scope material is selected by default. Ten LM11 questions, ten LM11 flashcards, and ten LM11 formulas covering extended model-evaluation metrics remain explicitly supplementary and are excluded from official chapter and comprehensive assessments.

## Compatibility

Routes, stable lesson IDs, local progress storage, and legacy comprehensive-assessment readability are preserved. The migration does not reinterpret historical distribution work as LM8 portfolio completion.

## Remaining limitations

Legacy encoding cleanup, complete automated accessibility coverage, dependency pinning, and bundle-size automation remain scheduled maintenance concerns. No critical Quantitative scope or mathematical issue remains.

# Quantitative remediation execution plan

**v1.6.6 final status:** Complete. All 11 official modules and 12 study lessons passed independent source, mathematical, content-bank, tool, assessment, and migration verification. Quantitative Methods is VERIFIED AND CONTENT-FROZEN. Historical execution sections below are retained as release history.

**v1.6.5 execution status:** Implemented. LM6-LM11 are structurally remediated, the stable LM8 route now contains portfolio return/risk, LM7 is grouped as one official module with two study lessons, and the versioned migration is active. Full independent legacy verification remains v1.6.6.

This plan follows the source-backed v1.6.3 maps. It does not authorize implementation during the mapping release.

## v1.6.4 — Official Modules 1–5

### Scope

- Lessons: `quant-returns-01`, `quant-returns-02`, `quant-benchmarking-03`, `quant-tvm-04`, and `quant-statistics-05`.
- Questions, flashcards, and formulas: every mapped item for QM-LM1 through QM-LM5.
- Tools: Benchmark Diagram; TVM Calculator, Cash Flow Timeline, Compounding Explorer; Distribution Shape and Descriptive Statistics tools.
- Migration: none expected beyond additive classification compatibility.

### Work

Refocus LM1, substantively align LM2 and LM3, constrain LM4 to finance-specific outcomes, and close LM5 covariance/correlation/semideviation/CV gaps. Recalculate examples; reclassify, rewrite, or retire items according to the private maps; audit formulas and tools; update search and assessment metadata without changing stable routes.

### Tests and acceptance

Test exact module/lesson classification, outcomes, formula links, question/card counts after justified changes, tool calculations, search, previous/next order, and official-only assessment grouping. Acceptance requires complete official scope for LM1–LM5, explicit supplementary boundaries, no orphan assets, all mathematics recalculated, and the full check suite passing.

### Rollback

Keep stable IDs only for substantively unchanged items. Make data changes reviewable by module, retain a pre-release inventory snapshot privately, and avoid progress-schema changes so reverting content does not reset learners.

## v1.6.5 — Official Modules 6–11 and migration

### Scope

- Lessons: `quant-probability-06`, `quant-sampling-08`, `quant-hypothesis-09`, `quant-distributions-07`, `quant-simulation-11`, `quant-regression-10`, and `quant-data-ai-12`.
- Questions, flashcards, formulas, and all tools mapped to QM-LM6 through QM-LM11.
- Assessments: official 11-module grouping with both LM7 subdivisions.
- Migration: implement and test `QUANT_PROGRESS_MIGRATION_SPEC.md`.

### Work

Consolidate distributions into LM6; present LM7 as two study lessons but one official group; repurpose the stable distribution route for LM8 portfolio content; align simulation, regression, and financial data science; label extended AI supplementary; remap every asset; migrate progress without reinterpreting history.

The working tree already contains later-facing LM6/LM8 and migration changes from prior development. v1.6.5 must audit and reconcile that state against this plan rather than assuming the work is absent or automatically verified.

### Tests and acceptance

Test exact 11/12 counts, LM7 grouping/completion, migration idempotency and malformed data, completion transfer, portfolio reset, note/bookmark/history preservation, official-only assessments, supplementary exclusion, legacy saved assessments, item remapping, navigation, search, tools, and topic statistics. Acceptance requires source-aligned LM6–LM11, correct LM8 content, safe migration, no legacy result counted as portfolio work, and the complete check suite passing.

### Rollback

Version the migration and retain legacy metadata; do not delete original user text or history. Keep a compatibility reader for old saved assessments. Roll back public content independently of stored migration evidence, never by clearing localStorage.

## v1.6.6 — Full mathematical and reference verification

### Scope

All 12 Quantitative study lessons, 555 current Quantitative questions, 555 flashcards, 165 formulas, 27 tools, assessments, search, and progress integrations.

### Work

Verify every official outcome against the authorized local sources; recalculate every example, question, formula example, and tool scenario; audit units, rounding, calculator guidance, terminology, section links, supplementary labels, and source metadata. Resolve or explicitly retain every private-map flag.

### Tests and acceptance

Add regression fixtures for audited calculations and validation for source-map status, orphan assets, section links, classifications, answer balance, and reference artifacts. Acceptance requires every inventory record to have an honest terminal audit status, all critical/high mathematical issues resolved, and all checks and production build passing.

### Rollback

Submit verification corrections in small module-scoped commits. Preserve stable IDs when substance remains valid; use retirement metadata rather than silent deletion. Never expose source extracts or copyrighted passages.

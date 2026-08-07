# Known issues

This is the permanent project issue register. Future sessions should add or update entries here instead of solving unrelated problems.

## Critical

None. KI-C01 was resolved by the v1.6.6 source, mathematical, assessment, tool, migration, and integration certification.

Economics v1.7.0 is mapping-only. Seven modules have no public lesson assets, and the existing preliminary firm/market lesson requires a full 2027 production audit before it can be called verified.

## High

- **KI-H01 — Resolved.** Quantitative verification completed in v1.6.6. The topic is content-frozen.
- **KI-H02 — Visible encoding corruption exists in legacy text.** Mojibake appears in some source and documentation strings. Correct it only in an explicitly scoped engineering release because bulk replacement can damage mathematical symbols.

## Medium

- **KI-M01 — Dependency specifications use `latest`.** Pin reproducible versions in a dedicated dependency-maintenance release and regenerate the lockfile with authorized registry access.
- **KI-M02 — Accessibility coverage is incomplete.** Existing controls follow baseline conventions, but systematic keyboard, screen-reader, contrast, and reduced-motion auditing remains outstanding.
- **KI-M03 — Resolved for Quantitative.** Official/supplementary filtering has validator, chapter-exam, and comprehensive-assessment coverage.

## Low

- **KI-L01 — Documentation history contains older release assumptions.** Archive or reconcile superseded statements when their related release is revisited.
- **KI-L02 — Bundle reporting is manual.** Add an automated size budget and historical report when performance work is scheduled.

## Technical Debt

- Some source files are densely formatted and should be reformatted only through a dedicated, behavior-neutral change.
- Content validation contains release-specific inventory expectations that should eventually derive from a single typed manifest.
- Tool registration is centralized in a conditional component; consider a typed registry after the curriculum stabilizes.
- Browser persistence is localStorage-only and lacks an export/import recovery workflow.

## Future Improvements

- Automated accessibility audits in CI.
- Bundle-size budgets and route-level performance tracking.
- Learner-controlled progress export and import.
- Stronger source-verification metadata surfaced in authoring tools.
- Mock-exam analytics and the later AI Study Coach, according to `ROADMAP.md`.

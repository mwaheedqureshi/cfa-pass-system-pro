# Known issues

This is the permanent project issue register. Future sessions should add or update entries here instead of solving unrelated problems.

## Critical

None. KI-C01 was resolved by the v1.6.6 source, mathematical, assessment, tool, migration, and integration certification.

Economics v1.7.5 has produced and verified 5 of 8 official modules (ECO-LM1, The Firm and Market Structures; ECO-LM2, Understanding Business Cycles; ECO-LM3, Fiscal Policy; ECO-LM4, Monetary Policy; ECO-LM5, Introduction to Geopolitics). The remaining three modules (ECO-LM6–ECO-LM8) have no public lesson assets and remain mapping-only pending their own production releases.

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
- **KI-L03 — Local 2027 Schweser volumes have no extractable text layer.** The `Schweser (2027)` books are scanned/image-only in the environment used for v1.7.1 and confirmed still scanned/image-only in v1.7.2, v1.7.3, and v1.7.4; OCR tooling (tesseract/ocrmypdf) exists only inside a WSL environment that was not exercised. They were not consulted for ECO-LM1 through ECO-LM4 and are not required, since the official 2027 curriculum and other secondary providers (IFT, Zell, FinTree) were available. Revisit only if a future Economics production release specifically needs Schweser cross-referencing.

- **KI-L05 — Official ECO-LM4 source contains only one explicit formula, well below its 10-formula mapping-stage estimate.** Source research confirmed the official Monetary Policy reading gives exactly one symbolic formula (the neutral policy rate); money-multiplier, Fisher-relationship, Taylor-rule, and quantity-theory-of-money content — all present in secondary providers' notes — are not part of this official reading. ECO-LM4 delivers 2 formulas (the neutral rate plus a direct formalization of its own stance-comparison rule), not 10, per the standing rule against inventing formulas to meet a target count. Not a defect; recorded for transparency.
- **KI-L04 — Official ECO-LM2 source gives housing and external-trade activity thin coverage relative to its LOS wording.** The official 2027/2026 reading for Understanding Business Cycles treats the housing and external-trade clause of LOS 3 mainly through two indicator mentions (building permits, house prices) rather than a dedicated framework. ECO-LM2's lesson discloses this explicitly and builds general, original open-economy content for that clause rather than asserting detailed official-source backing beyond what the curriculum states. Not a defect; recorded for transparency.
- **KI-L06 — Official ECO-LM5 source contains zero explicit symbolic formulas, against a 2-formula mapping-stage estimate.** Source research (52-page official reading, PDF pp. 149-200) confirmed Introduction to Geopolitics is a purely conceptual/framework-based reading with no symbolic formula anywhere in its text or exhibits. ECO-LM5 delivers 0 formulas, is correctly exempted from the lesson-manifest formula check (`lessonManifest.test.ts`), and is correctly omitted from the Formula Explorer integration, per the standing rule against inventing formulas to meet a target count. Not a defect; recorded for transparency.

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

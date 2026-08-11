# Known issues

This is the permanent project issue register. Future sessions should add or update entries here instead of solving unrelated problems.

## Critical

None. KI-C01 was resolved by the v1.6.6 source, mathematical, assessment, tool, migration, and integration certification.

Economics v1.7.8 has produced and verified all 8 of 8 official modules (ECO-LM1, The Firm and Market Structures; ECO-LM2, Understanding Business Cycles; ECO-LM3, Fiscal Policy; ECO-LM4, Monetary Policy; ECO-LM5, Introduction to Geopolitics; ECO-LM6, International Trade; ECO-LM7, Capital Flows and the FX Market; ECO-LM8, Exchange Rate Calculations). Economics is content-complete but **not yet content-frozen** — full Economics-wide certification (analogous to the v1.6.6 Quantitative certification) is a separate, subsequent release.

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
- **KI-L07 — Official ECO-LM6 source contains zero explicit named symbolic formulas, against a 5-formula mapping-stage estimate; the graph mapping-stage estimate of 7 also exceeds the 3 exhibits literally drawn in the source.** Source research (20-page official reading, PDF pp. 201-220) confirmed the source only performs 4 numeric worked-calculation patterns (consumer-surplus loss, producer-surplus gain, government revenue/quota rent, deadweight loss) via unstated rectangle/triangle area-geometry applied to a single reused diagram (Exhibit 1), with the qualitative region mapping stated in Exhibit 2. ECO-LM6 delivers 4 formulas, honestly formalizing this method with explicit variable names rather than inventing a 5th formula to hit the target, and delivers 7 graphic elements by combining 3 original recreations of the official exhibits with 4 original pedagogical additions (an integration-ladder table, a trade-creation/diversion flow diagram, and 2 interactive tool SVGs), consistent with the precedent set by ECO-LM2's graph-target reconciliation. Not a defect; recorded for transparency.
- **KI-L08 — Official ECO-LM7 source states only 4-5 explicit formula families, against a 7-formula mapping-stage estimate; the graph mapping-stage estimate of 8 also exceeds the 6 data-table exhibits in the source (which contains zero charts/diagrams).** Source research (38-page official reading, PDF pp. 221-258, the longest Economics module produced so far) confirmed the reading states the real exchange rate level formula, its percentage-change approximation, the base-currency percentage-appreciation formula (with an explicit non-symmetry caveat), and the trade balance identity — no cross-rate, interest-rate-parity, or forward-rate formula exists in this module, since that content is confirmed deferred to the separate, later ECO-LM8 ("Exchange Rate Calculations") module. ECO-LM7 delivers 5 formulas (the four stated families plus an honest formalization of the source's own stated reciprocal-quote relationship), and delivers 6 graphic elements (3 recreating official Exhibit 2-6 content, 3 original pedagogical additions including a quote-convention schematic and the tool's regime-spectrum SVG) against the 8-graph target, since the source's 6 exhibits are all data tables with no charts or diagrams. Not a defect; recorded for transparency.
- **KI-L09 — During ECO-LM8 authoring, an inverted hedged-return arbitrage formula was caught and corrected before release; ECO-LM8's formula and graph counts matched their mapping-stage targets exactly (8 and 4), the only Economics module where neither required downward revision.** While computing the arbitrage-profit-detection worked example and two related questions, the hedged-return calculation was initially applied as `(1/S) × (1+r_f) × F` instead of the correct `S × (1+r_f) ÷ F` (derived from first principles: converting 1 unit of domestic currency to foreign at spot yields S units of foreign currency, not 1/S units). Independent recalculation of every numeric worked example before finalization caught the error; the affected lesson example and two questions were rewritten with the corrected formula and internally consistent numbers. The underlying core arbitrage-relationship formula itself (`F = S × [(1+r_f)/(1+r_d)]`) was correctly extracted from the source throughout and was never in error. Not a defect in the shipped content; recorded for transparency and as a reminder to independently recompute — not just source-verify — every applied formula, not only the formula statement itself.

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

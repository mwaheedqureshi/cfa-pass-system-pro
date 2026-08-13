# v1.8.3 — FSA Module Production Sprint 3: FSA-LM3 Analyzing Balance Sheets

This release produces and verifies FSA-LM3 against the official 2027 CFA Level I Financial Statement Analysis curriculum, under the planned stable lesson id from the v1.8.0 target manifest, `fsa-03-analyzing-balance-sheets`. This is the **third of 12 official FSA modules**; FSA-LM4 through FSA-LM12 remain mapping-only.

## Scope

- Recursively rescanned the entire local CFA library in two passes; zero new, removed, or changed files since the v1.8.2 snapshot (a minor folder-count discrepancy in the traversal method was investigated and confirmed to reflect zero actual file changes). A dedicated second pass performed deep extraction of FSA-LM3's own official text.
- Directly extracted and read the full official 2027 source text for FSA-LM3 (PDF pp.103-134, printed pp.91-122 of a 518-page volume), confirming all 5 official learning outcomes and every named concept (intangible-asset recognition and the purchased/internally-developed/acquired-in-combination origin paths; the IFRS research-vs-development capitalization test and the US GAAP general-expensing rule; finite-life amortization vs. indefinite-life impairment testing; the IFRS revaluation model vs. the US GAAP cost-only model; goodwill measurement and impairment testing including the never-reversed and never-internally-generated rules; the three financial-instrument measurement categories and the equity-FVOCI non-recycling rule; bond issuance at par/discount/premium and early-retirement gains/losses; affirmative vs. negative debt covenants; common-size balance sheets, vertical and horizontal analysis, and all seven liquidity/solvency ratios).
- Cross-checked the 2026 edition at the identical page anchor via a direct normalized diff (not relying on the prior topic-wide summary alone): confirmed the text 99.9% byte-identical across ~75,300 characters, with the only differences being 3 trivial cross-reference phrasing tweaks; all 5 LOS are word-for-word identical.
- Cross-checked three secondary providers (IFT, Zell Education, Schweser 2025) for pedagogical structure only, never as a scope-determining source. Identified and excluded one out-of-scope addition: Zell Education's "Shareholders' Equity and Ratios" subsection, which covers material (par value, treasury shares, noncontrolling interest, statement of changes in equity) that does not map to any of FSA-LM3's 5 official LOS.
- Wrote a complete original lesson (`public/content/fsa/03-analyzing-balance-sheets.md`) covering all 5 official learning outcomes across 5 sections, with **21 original worked examples** (every numeric example independently recalculated via a standalone verification script — 39/39 checks passing — before being written into lesson prose) evenly distributed across all 5 LOS, and **8 original exhibits** matching the mapping-stage target exactly by count.
- Built **9 formula/ratio records**, an organic overage over the 6-formula mapping-stage target: goodwill, the common-size line-item transformation, and all 7 individually named balance-sheet ratios from the official source's own Exhibit 13 (current, quick, and cash liquidity ratios; long-term debt-to-equity, debt-to-equity, total debt, and financial leverage solvency ratios). The overage is source-justified, not forced — see `KNOWN_ISSUES.md` KI-L17 for the full reconciliation, and KI-L18 for a data-quality note on a labeling artifact discovered in the v1.8.0 mapping-stage placeholder file.
- Added 50 new questions (40 official, 10 supplementary) and 50 new flashcards (40 official, 10 supplementary), all under the new lesson id, exactly 3 choices each with full option-level explanations, evenly balanced 8 official + 2 supplementary across each of the 5 LOS. **Learning from FSA-LM2's answer-position-imbalance incident (KI-L16), `correctChoiceIndex` was assigned programmatically via a deterministic round-robin at generation time** rather than relying on manual rotation discipline while drafting prose — this produced a balanced bank ([18,16,16] overall) on the first pass with no post-hoc swap script required.
- Built and registered **2 interactive tools**, matching the exact subset planned in `docs/FSA_INTERACTIVE_PLAN.md`:
  - **Common-Size Statement Builder** — pure functions (`calculateCommonSize`, `flagDeviations`, `calculateHorizontalAnalysis`) for building common-size balance sheets, flagging material period-over-period deviations, and computing horizontal-analysis growth rates. 13 unit tests.
  - **Financial Instrument and Intangible Disclosure Explorer** — a deterministic 10-scenario lookup spanning all 4 disclosure LOS (intangibles, goodwill, financial instruments, non-current liabilities). 13 unit tests.
  - 26/26 tests passing combined.
- Registered the new lesson across the lesson manifest (9 `formulaIds`), `LessonInteractiveTools.tsx`, search index (formulas, flashcards, and questions arrays, plus new `fvoci`/`fvpl`/`d/e`/`cgu` search aliases), Practice, Flashcards, Formula Explorer, chapter exam routing (`LessonResources`), and the Financial Statement Analysis topic page (now reporting 3 of 12 modules published).
- Further generalized `scripts/validate-fsa-mapping.mjs` (`producedModules` now `{FSA-LM1, FSA-LM2, FSA-LM3}`) and `scripts/validate-fsa-content.mjs` (added a third `producedModules` entry with its own formula count and tool list) so both validators continue to scale without weakening any check.
- Updated private verification records under `.local-research/fsa-verification/FSA-LM3/` (all 12 required files, including a source-confirmed count of 14 FSA-LM3-specific items individually mapped from the same fully-read 100-question topic-wise question bank used for FSA-LM1 and FSA-LM2), and the topic-level `verification-status.json` (`fullyVerifiedModules: ["FSA-LM1", "FSA-LM2", "FSA-LM3"]`).
- Fixed two pre-existing lint errors surfaced by ESLint's `no-useless-assignment` rule in the new `CommonSizeBalanceSheetBuilder.tsx` component (unnecessary initial array assignments outside the `try` block that computes them) and added `.local-research` to the ESLint ignore list, since private scratch/research scripts under that directory are not part of the shipped application and should not block `npm run check` on Node-script-specific lint rules (e.g., `no-undef` for `console` in a plain `.mjs` script).

## Verified inventory for FSA-LM3

| Asset | Official | Supplementary | Total |
|---|---:|---:|---:|
| Questions | 40 | 10 | 50 |
| Flashcards | 40 | 10 | 50 |
| Formulas | 9 | — | 9 |
| Interactive tools | 2 | — | 2 |

## Formula and exhibit target reconciliation

The v1.8.0 mapping-stage plan estimated a formula target of 6 and an exhibit target of 8 for FSA-LM3. This release delivers 9 formulas (an organic overage, since the official source's own Exhibit 13 individually names 7 distinct ratios rather than one generic "balance-sheet ratio," consistent with the established per-ratio formula-record convention already used for FSA-LM2's margin ratios) and exactly 8 exhibits (count matched exactly, composition honestly reshaped away from a mismatched "income statement" placeholder framing). See `.local-research/fsa-verification/FSA-LM3/formula-audit.json` and `exhibit-audit.json`, and `KNOWN_ISSUES.md` KI-L17/KI-L18.

## Tests and validation

- `npm run validate-mocks`, `validate-content`, `validate-quant-mapping`, `validate-quant-verification`, `validate-economics-mapping`, `validate-economics-verification`, `validate-fsa-mapping`, `validate-fsa-content`, `lint`, `test`, and `build` all pass.
- 472 tests across 64 test files (up from 434/61 in v1.8.2), including 26 new pure-function tests for the two interactive tools and a new `fsaAnalyzingBalanceSheetsContent.test.ts` that independently reproduces the lesson's goodwill, common-size, and horizontal-analysis worked examples via the tools' pure functions and asserts FSA completion at 3 of 12 modules.
- Initial JavaScript bundle is 315.35 kB (94.97 kB gzip), up modestly from 312.97 kB (94.47 kB gzip) in v1.8.2; the lesson content and both new tools ship in existing lazy-loaded route chunks.

## Limitations and residual gaps

- The local 2027 Schweser FSA volume remains scanned/image-only and was not consulted for content (`KI-L11`, unchanged).
- The 2026 mock exams' FSA coverage count remains a disclosed partial lower bound (`KI-L12`, unchanged).
- Only 14 mock items were individually classified to FSA-LM3 specifically (from the same fully-read 100-question topic-wise question bank used for FSA-LM1 and FSA-LM2); broader topic-wide mock coverage has not yet been sub-classified by module beyond LM1, LM2, and LM3.
- FSA-LM4 through FSA-LM12 remain mapping-only, per the one-module-at-a-time production discipline.

## Next release

FSA Module Production Sprint 4 — FSA-LM4, per `docs/FSA_RELEASE_PLAN.md`.

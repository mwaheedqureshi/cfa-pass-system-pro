# Capital Investments and Capital Allocation

Corporate Issuers · Learning Module 5 · 2027 curriculum

## Learning outcomes

- describe types of capital investments
- describe the capital allocation process, calculate net present value (NPV), internal rate of return (IRR), and return on invested capital (ROIC), and contrast their use in capital allocation
- describe principles of capital allocation and common capital allocation pitfalls
- describe types of real options relevant to capital investments

## 1. Types of capital investment

Capital investment commits resources to long-term assets or capabilities. The decision is strategic: expected return, uncertainty, and management discretion differ by category.

### Original capital-investment classification map

| Purpose | Typical projects | Risk and discretion |
|---|---|---|
| Going concern | replacement, efficiency, risk management | usually low-to-moderate risk; discretionary within operating needs |
| Regulatory/compliance | safety, environmental, reporting mandates | usually limited discretion about whether to comply |
| Existing-business expansion | capacity, geographic reach, core R&D or acquisitions | growth risk within familiar activities |
| New lines and other | unrelated acquisitions, new technologies or markets | usually highest uncertainty |

### Worked example 1 — Replacement or growth?

North Mill replaces a failing press without increasing capacity. It is a going-concern project: the benefit is continuity, not growth.

### Worked example 2 — Compliance choice

A rule requires emissions control. The issuer cannot simply reject compliance because the project NPV is negative, but it can compare compliant designs and select the least value-destructive alternative.

### Worked example 3 — Existing versus new scope

Opening stores in an adjacent region under the current brand expands an existing business. Buying a biotechnology start-up would be a new-line-of-business investment with less familiar risk.

### Original project-purpose decision tree

Ask in order: Is the project legally required? If yes, compliance. If no, does it preserve existing operations? If yes, going concern. If it grows the core business, existing-business expansion. Otherwise, new line or other.

## 2. The capital allocation process

Management and the board identify opportunities, plan and prioritize, analyze proposals, decide, implement, and monitor. A project should contribute to shareholder value relative to similarly risky alternatives and fit the issuer’s strategy and constraints. When attractive projects are unavailable, returning capital may be preferable.

### Original capital-allocation process map

1. Generate ideas consistent with strategy.
2. Forecast incremental after-tax cash flows and risk.
3. Apply NPV, IRR, and relevant qualitative considerations.
4. Prioritize projects in the context of the whole issuer.
5. Authorize and implement.
6. Monitor outcomes and feed lessons into future forecasts.

### Project cash-flow map

Time zero usually contains the negative initial investment. Later periods contain incremental after-tax inflows or outflows. Each cash flow keeps its sign and actual timing. Financing choice does not make retained earnings free; the required return reflects investors’ opportunity cost for comparable risk.

## 3. Net present value

NPV applies canonical Quant present-value mechanics to a corporate project:

`NPV = Σ[t=0 to T] CFₜ / (1 + r)ᵗ`

Here `CFₜ` is the after-tax cash flow at time `t`, `r` is the required return for a similarly risky investment, and the time-zero outlay is normally negative. Accept when NPV is at least zero; reject when NPV is negative. A positive NPV is the estimated currency increase in shareholder wealth.

### Worked example 4 — Two-period NPV

A project costs 100 now and returns 60 at each of years 1 and 2. At 10%, `NPV = −100 + 60/1.10 + 60/1.10² = 4.13`. Accept.

### Worked example 5 — A negative NPV

An 80 outlay produces 42 in each of two years. At 12%, NPV is `−80 + 42/1.12 + 42/1.12² = −9.03`. Reject because expected inflows do not compensate investors at the required return.

### Worked example 6 — Irregular timing

A cash flow of 30 at time 1.5 is discounted by `(1 + r)^1.5`, not forced to year 1 or 2. Actual timing matters; spreadsheet date functions may be appropriate for dated flows.

### Original NPV decision tree

Verify incremental after-tax cash flows → match nominal/real conventions → select a risk-consistent required return → discount by actual timing → accept NPV ≥ 0. For mutually exclusive projects, choose the feasible project with the highest NPV.

## 4. Internal rate of return

IRR is the rate that sets NPV to zero:

`0 = Σ[t=0 to T] CFₜ / (1 + IRR)ᵗ`

Accept a conventional independent project when IRR exceeds the required return. IRR is intuitive as a percentage, but it does not report the currency amount of wealth created and may mis-rank projects with different scale or timing.

### Worked example 7 — One-period IRR

A project costs 50 and returns 60 in one year. `0 = −50 + 60/(1 + IRR)`, so IRR is 20%. It passes a 12% hurdle.

### Worked example 8 — NPV and IRR agree

A conventional project has a 14% IRR and positive NPV at a 9% required return. Both rules accept because the IRR exceeds the rate used for NPV.

### Worked example 9 — Ranking conflict

Project Small has NPV 4 and IRR 24%; Project Large has NPV 10 and IRR 16%. If mutually exclusive, choose Large because its higher NPV adds more estimated wealth. If independent and both NPVs are positive, accept both when feasible.

### Original NPV versus IRR comparison

| Feature | NPV | IRR |
|---|---|---|
| Output | currency value added | project return percentage |
| Decision | accept NPV ≥ 0 | accept IRR ≥ required return |
| Ranking conflict | preferred for mutually exclusive projects | can favor smaller or differently timed projects |
| Reinvestment convention | required return | IRR assumption |

### Original independent versus mutually exclusive matrix

Independent projects are judged separately. Mutually exclusive projects require an either-or ranking. A positive NPV is sufficient for an independent project but not proof that it is the best mutually exclusive choice.

## 5. ROIC and the external analyst

ROIC is a company-wide historical profitability ratio rather than a project valuation measure. Canonical FSA owns its formula. External analysts can estimate ROIC from reported after-tax operating profit and average invested capital, whereas project NPV and IRR require internal forecasts. A value-creating project can reduce current ROIC if its return exceeds its hurdle but is below the issuer’s existing ROIC.

### Worked example 10 — Ratio tension

An issuer earns 15% ROIC. A project has a 12% IRR, a 9% required return, and positive NPV. The project creates value but can pull the issuer’s average ROIC below 15%. Rejecting it solely to protect ROIC would sacrifice value.

### Original decision-rule comparison

NPV asks how much expected value the project adds. IRR asks what percentage return its cash flows imply. ROIC asks what return the issuer earned across aggregated invested capital. They answer different questions.

## 6. Principles and pitfalls

Use incremental after-tax cash flows, consider effects across the firm, preserve actual timing, and make cash-flow and discount-rate inflation conventions consistent. Ignore sunk costs. Include cannibalization, cost savings, and other changes caused by the decision. Depreciation is not itself cash, but a permitted tax deduction changes taxes and therefore cash flow.

### Original sunk-versus-incremental table

| Item | Treatment | Reason |
|---|---|---|
| completed market research | exclude | sunk regardless of decision |
| lost sales of an existing product | include as negative | project causes cannibalization |
| project-created logistics savings | include as positive | project changes firm cash flow |
| allocated overhead that does not change | exclude | not incremental |
| depreciation tax effect | include where deductible | changes taxes paid |

### Worked example 11 — Sunk study

An issuer paid 2 for research last month. The 2 is excluded from today’s project cash flows because accepting or rejecting cannot recover it.

### Worked example 12 — Cannibalization and synergy

A new product creates cash inflow of 15, reduces old-product inflow by 3, and saves shared distribution cost of 1. The broad incremental benefit is `15 − 3 + 1 = 13` before other project effects.

### Worked example 13 — Depreciation tax effect

Depreciation of 10 is deductible at a 25% tax rate. Although depreciation is non-cash, it reduces taxes by 2.5, increasing after-tax project cash flow by 2.5.

### Worked example 14 — Nominal and real consistency

Nominal cash flows include expected inflation and must use a nominal required return. Real cash flows exclude general inflation and use a real rate. Mixing the two distorts NPV.

### Worked example 15 — Timing error

Moving all inflows six months later lowers their present value. With the initial outlay unchanged, both NPV and the economically relevant IRR decline.

### Forecast-bias controls

Use independent challenge, scenario ranges, comparable outcomes, explicit assumptions, and post-audits. These controls counter optimism, strategic exaggeration, and pet-project sponsorship without replacing judgment.

### Original capital-allocation pitfall matrix

| Pitfall | Effect | Control |
|---|---|---|
| optimistic forecasts | overstates NPV | challenge assumptions and ranges |
| short-term earnings focus | underinvestment | evaluate long-term value |
| pet-project bias | weak prioritization | consistent review and governance |
| wrong discount-rate convention | distorted NPV | match risk and nominal/real inputs |
| cheap internal-funds fallacy | hurdle too low | recognize shareholder opportunity cost |

## 7. Real options

A real option gives the right, but not the obligation, to take a future operating or investment action. Exercise only when value enhancing.

### Original real-option taxonomy

| Type | Managerial flexibility |
|---|---|
| Timing | delay or sequence investment while information improves |
| Sizing | abandon after weak results or expand after strong results |
| Operating flexibility | change price, production, inputs, or use |
| Fundamental | invest conditionally on an external underlying factor |

### Worked example 16 — Delay

Management can wait one year for regulatory clarity before building. Waiting sacrifices near-term cash flow but may prevent a large loss. This is a timing option.

### Worked example 17 — Abandon or expand

If weak demand makes sale proceeds exceed the present value of continuing, abandon. If strong demand supports profitable added capacity, exercise the expansion option. Both are sizing choices.

### Worked example 18 — Option-adjusted NPV

Base NPV is −2, a flexible design costs 1, and its estimated option value is 5. `Adjusted NPV = −2 − 1 + 5 = 2`; flexibility changes the decision from reject to accept.

### Original real-option value bridge

`Project NPV with option = base NPV − incremental option cost + option value`. A positive base NPV with favorable unmodeled flexibility is a lower-bound estimate; a negative base NPV is not rescued unless net option value is large enough.

### Original sequential-decision map

Commit initial capital → observe state → choose abandon, continue, expand, delay, or adapt → probability-weight each state’s cash flow → discount by timing. Decision trees make contingent actions explicit; advanced option-pricing mathematics is beyond this lesson’s required production treatment.

## Exam tips and distinctions

- Quant owns discounting primitives; LM5 owns NPV and IRR as corporate decision applications.
- FSA owns the canonical ROIC formula.
- Do not derive WACC here: a required return is an input, while WACC construction belongs to LM6.
- Prefer NPV in mutually exclusive ranking conflicts.
- Separate cash flow from accounting income and incremental effects from sunk costs.
- Capital rationing and project working-capital construction are not explicit 2027 LM5 learning relationships.

## Rapid revision sheet

`NPV = Σ CFₜ/(1+r)ᵗ`; accept at zero or above. IRR sets that NPV to zero; accept when it meets the required return. Prefer NPV for mutually exclusive conflicts. ROIC remains a company-wide FSA measure. Use incremental after-tax cash flows, exclude sunk costs, preserve timing, and match nominal/real conventions. Real options are timing, sizing, operating-flexibility, or fundamental rights exercised only when value enhancing.

## Common mistakes

- entering the initial outlay with the wrong sign
- treating retained earnings as costless
- mixing nominal cash flows with a real rate
- ignoring cannibalization or project-created savings
- choosing a higher IRR over a higher NPV for mutually exclusive projects
- treating ROIC as a forward-looking project valuation
- adding advanced option pricing or LM6 WACC derivation

## 30-second summary

Classify investments by purpose and risk. Evaluate projects with incremental after-tax cash flows at actual timing. NPV measures estimated currency value creation; IRR is the zero-NPV rate; ROIC is a company-wide historical ratio. Use NPV for mutually exclusive conflicts. Control forecast and behavioral pitfalls. Real options add value by preserving timing, sizing, operating, or fundamental flexibility.

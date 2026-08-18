# Capital Structure

Corporate Issuers · Learning Module 6 · 2027 curriculum

## Learning outcomes

- calculate and interpret the weighted-average cost of capital for a company
- explain factors affecting capital structure and the weighted-average cost of capital
- explain the Modigliani–Miller propositions regarding capital structure
- describe optimal and target capital structures

## 1. Cost of capital and WACC

Debt and equity investors supply capital and require returns consistent with their risk. WACC combines those component required returns at the issuer’s capital weights. A preferred-stock or other financing source is added as a separate weighted component when present.

### Original WACC component map

| Source | Component | Weight | Tax treatment |
|---|---|---|---|
| Debt | debt investors’ required return | market or target debt proportion | multiply by `(1 − t)` only when interest is deductible |
| Preferred | preferred component cost | preferred proportion | use the applicable after-tax cost |
| Common equity | equity investors’ required return | equity proportion | no interest tax shield |

`WACC = w_d r_d(1 − t) + w_p r_p + w_e r_e`

### Worked example 1 — Basic debt and equity WACC

Debt is 40% at a 5% pretax cost, equity is 60% at 10%, and tax is 25%. WACC is `0.40(5%)(0.75) + 0.60(10%) = 7.50%`.

### Worked example 2 — Preferred component

Debt 30% at 5%, preferred 10% at 8%, equity 60% at 10%, and tax 25% produces `1.125% + 0.800% + 6.000% = 7.925%`.

### Worked example 3 — No interest deduction

If the same 5% debt interest is not deductible, its 30% contribution is `1.50%`, not `1.125%`. The tax rate does not mechanically change this component.

### Capital-weight conversion table

| Given | Debt weight | Equity weight |
|---|---:|---:|
| D/E = 0.50 | 0.50/1.50 = 33.33% | 66.67% |
| D = 20, E = 80 | 20% | 80% |
| D = 60, V = 100 | 60% | 40% |

### Worked example 4 — D/E to WACC weights

D/E is 0.50, debt cost is 6%, equity cost is 11%, and tax is 20%. Debt weight is 1/3 and equity weight is 2/3, so WACC is `⅓(6%)(0.80) + ⅔(11%) = 8.93%`.

### Original market-versus-target weight matrix

Market weights reflect current investor opportunity costs. Management target weights express the intended mix and are often stated on a book-value basis. Use the convention appropriate to the analysis and label it explicitly.

### Worked example 5 — Market and book divergence

Debt book and market value are both 40, equity book value is 60, but equity market value is 100. Book debt weight is 40%; market debt weight is 28.57%. Current WACC analysis normally uses the market mix unless a credible target is specified.

### Worked example 6 — Tax-rate sensitivity

At debt weight 30% and debt cost 6%, increasing the deductible tax rate from 20% to 25% reduces WACC by `0.30 × 6% × 5% = 0.09 percentage point`, holding everything else constant.

### Original cost-of-capital ownership table

LM6 owns the WACC aggregation and debt tax adjustment. It treats debt and equity required returns as inputs. Fixed Income later develops debt valuation and yield mechanics; Equity and Portfolio develop their own required-return applications; Quant owns the rate and discounting primitives.

## 2. Factors affecting capital structure and WACC

Financing needs and costs reflect the business model, life-cycle stage, capital markets, regulation, revenue stability, operating leverage, financial leverage, interest coverage, and collateral.

### Original internal/external factor map

| External | Issuer-specific |
|---|---|
| market rates, credit conditions, recession risk, regulation, industry norms | business model, life cycle, sales stability, fixed-cost share, debt burden, coverage, asset quality |

### Worked example 7 — Life-cycle financing

A pre-revenue issuer lacks stable cash flow for conventional unsecured debt. Equity dominates, while leases or convertible debt may be available. A mature subscription issuer can generally support more contractual debt.

### Life-cycle financing ladder

Startup: equity, leases, limited convertible debt → growth: expanding equity and secured debt access → mature: broader unsecured debt and stable refinancing → decline: reduced capacity and tighter terms if cash flow weakens.

### Worked example 8 — Operating leverage

Fixed costs are 30 and total costs are 75. Source-defined operating leverage is `30/75 = 40%`.

### Worked example 9 — Profit sensitivity

Two firms earn 30 at revenue 100. Firm High has fixed cost 50 and variable cost 20%; Firm Low has fixed cost 20 and variable cost 50%. At revenue 75, profits become 10 and 17.5, respectively. Higher operating leverage creates the larger decline.

### Original leverage terminology map

| Term | LM6 meaning |
|---|---|
| Operating leverage | fixed costs ÷ total costs |
| Debt/equity | debt financing relative to equity financing |
| Interest coverage | profit before interest and taxes ÷ interest expense; canonical FSA reuse |
| FSA financial leverage | assets ÷ equity; not interchangeable with D/E |

### Worked example 10 — Financial leverage and coverage

Two firms have operating profit of 30. Firm A pays interest of 2, so coverage is 15×. Firm B pays 9, so coverage is 3.33×. Firm B has less capacity to absorb an earnings decline or additional debt.

### Worked example 11 — Revenue stability

A diversified subscription issuer and a cyclical equipment maker have equal current profit. Investors normally require less return from the issuer with more predictable revenue, other things equal.

### Worked example 12 — Collateral

An issuer owning saleable aircraft can often support secured borrowing more readily than an issuer whose value rests mainly on non-transferable human capital.

### Original debt-capacity scorecard

Debt capacity strengthens with stable revenue, low operating leverage, strong coverage, liquid collateral, favorable markets, and predictable cash flows. It weakens in the opposite conditions.

## 3. Modigliani–Miller propositions

MM begins with homogeneous expectations, perfect capital markets, no transaction costs, risk-free borrowing and lending, and a fixed investment policy. The model isolates financing effects by progressively changing assumptions.

### Original MM assumption checklist

- investors agree on expected operating cash flows
- information is available without cost and securities are fairly priced
- investors and issuers can borrow and lend at the risk-free rate
- investment policy and operating cash flows do not change with financing
- the initial no-tax case has no taxes or bankruptcy costs

### MM Proposition I without taxes

`V_L = V_U`. Investors can create homemade leverage, so capital structure cannot change value when operating cash flows and frictionless assumptions are unchanged. WACC remains constant.

### Worked example 13 — No-tax value irrelevance

An all-equity firm is worth 100. Issuing 40 of debt to repurchase equity does not change the total value under Proposition I without taxes: the levered firm remains worth 100.

### MM Proposition II without taxes

`r_e = r_0 + (r_0 − r_d)(D/E)`. Equity becomes riskier as debt increases. The higher equity cost exactly offsets the increased weight of cheaper debt.

### Worked example 14 — No-tax equity cost

With `r₀ = 10%`, `r_d = 5%`, and `D/E = 0.60`, equity cost is `10% + 5%(0.60) = 13%`.

### Original MM no-tax transmission map

More debt → more residual equity risk → higher `r_e` → exact offset to cheap debt → unchanged WACC → unchanged firm value.

### MM Proposition I with corporate taxes

`V_L = V_U + tD`. Deductible interest creates a tax shield whose present value is `tD` under the source assumptions.

### Worked example 15 — Tax-shield value

An unlevered firm worth 100 adds debt of 40 at a 25% tax rate. Levered value is `100 + 0.25(40) = 110`.

### MM Proposition II with corporate taxes

`r_e = r_0 + (r_0 − r_d)(1 − t)(D/E)`. Equity cost still rises with leverage, but more slowly. With taxes and no distress costs, WACC falls and firm value rises as debt increases.

### Worked example 16 — Tax-adjusted equity cost

With `r₀ = 10%`, `r_d = 5%`, `t = 25%`, and `D/E = 0.60`, equity cost is `10% + 5%(0.75)(0.60) = 12.25%`.

### Original MM tax/no-tax comparison

| Case | Firm value | Equity cost | WACC effect of debt |
|---|---|---|---|
| No tax | `V_L = V_U` | slope `(r₀ − r_d)` | unchanged |
| Corporate tax | `V_L = V_U + tD` | slope `(r₀ − r_d)(1 − t)` | declines absent distress costs |

### Worked example 17 — What tax MM omits

The pure tax model implies 100% debt because every unit adds tax-shield value. Real issuers face expected distress, agency, flexibility, and other costs, so that extreme result is not a practical recommendation.

## 4. Optimal and target capital structure

Static trade-off theory adds expected financial-distress costs to debt tax benefits. Firm value rises while the marginal tax benefit dominates, peaks at the optimal debt level, and falls when added expected costs dominate.

### Original tax-benefit/distress trade-off

Low debt offers unused tax capacity but high flexibility. Moderate debt can add net tax value. Excess debt raises default probability, direct and indirect distress costs, agency conflicts, and lost flexibility.

### Worked example 18 — Moving beyond the optimum

An additional debt tranche adds expected tax-shield value of 3 but raises the present value of expected distress costs by 5. Net firm value falls by 2, so the issuer has moved beyond the optimal debt level.

### Original target-capital-structure framework

Start with business and operating risk → assess collateral and cash-flow durability → evaluate taxes and distress → review ratings, covenants, peers, and market access → preserve flexibility → set a target range and monitor it.

Targets may be stated with book debt/equity, a maximum debt-to-EBITDA ratio, or a minimum credit rating. Current market weights remain the baseline for current WACC analysis when no credible target is known.

### Worked example 19 — Target range

Management targets debt between 30% and 40% of book capital and a minimum investment-grade rating. A temporary 28% market debt weight does not automatically replace the stated operating target.

Pecking order theory predicts internal financing first, then debt, and public equity last because of asymmetric information and signaling. The free cash flow hypothesis notes that debt commitments can discipline discretionary spending, although leverage can also intensify shareholder–debtholder agency conflicts.

### Worked example 20 — Financing hierarchy

A firm needs 25, has 10 of internal funds, and wants to limit issuance signals. Pecking order reasoning uses the 10 internally, then considers 15 of debt before public equity, subject to capacity and value.

### Original capital-structure theory comparison

| Framework | Central insight |
|---|---|
| MM no tax | financing mix irrelevant under restrictive assumptions |
| MM tax | debt tax shield adds value absent offsetting costs |
| Static trade-off | choose debt where marginal tax benefits and expected costs balance |
| Pecking order | financing hierarchy reflects information asymmetry |
| Free cash flow | debt may discipline managerial use of excess cash |

## Exam tips and distinctions

- Use market weights for current investor opportunity costs; use a stated target consistently when the purpose is target WACC.
- Apply `(1 − t)` only to deductible debt interest.
- Preferred stock adds a weighted component; the 2027 source does not give it a separate cost formula.
- The source teaches operating leverage as fixed costs divided by total costs, not degree of operating leverage.
- Keep D/E, operating leverage, interest coverage, and FSA assets/equity distinct.
- MM I addresses value; MM II explains the leverage effect on equity cost and WACC.
- Do not import bond pricing, full cost-of-equity models, or LM5 project-selection mechanics.

## Rapid revision sheet

WACC weights required returns; deductible debt uses `r_d(1−t)`. Operating leverage is fixed costs/total costs. MM no tax: `V_L=V_U` and `r_e=r₀+(r₀−r_d)D/E`; WACC is constant. MM tax: `V_L=V_U+tD` and `r_e=r₀+(r₀−r_d)(1−t)D/E`; WACC falls absent distress. Real targets balance tax shields, expected distress, agency costs, signals, ratings, and flexibility.

## Common mistakes

- using weights that do not sum to 100%
- applying the tax shield to equity or non-deductible interest
- confusing book targets with market-value WACC weights
- confusing operating leverage with D/E or assets/equity
- mixing MM tax and no-tax equations
- treating the frictionless 100% debt result as real-world advice
- deriving bond yields or equity required returns beyond LM6 scope

## 30-second summary

WACC blends component required returns using capital weights and an after-tax debt cost where interest is deductible. Business model, life cycle, market conditions, cash-flow stability, leverage, coverage, and collateral shape capital structure. MM isolates financing effects under restrictive assumptions; taxes add debt-shield value, while real distress and agency costs produce an interior optimum. Targets also reflect signaling, ratings, flexibility, and strategy.

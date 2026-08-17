# Introduction to Financial Statement Modeling

Financial statement modeling turns analysis into an explicit, reviewable forecast. Historical ratios from LM11 are inputs, not conclusions: LM12 owns the forward-looking step of connecting assumptions to projected income statements, cash flows, and balance sheets.

## 30-second summary

Start with price, volume, and sales; forecast operating, financing, and tax results; translate working-capital and investment assumptions into balances; reconcile cash; and require the projected balance sheet to balance. Challenge every assumption for bias, competitive structure, inflation effects, and horizon consistency.

## Learning outcomes

By the end of this lesson, you should be able to develop a sales-based pro forma company model; diagnose behavioral influences on forecasts and recommend remedies; connect Porter's five forces to prices and costs; forecast sales and costs under inflation or deflation; and select an explicit forecast horizon with defensible longer-term projections.

## 1. Build a sales-based pro forma model

A transparent sequence is:

1. Forecast revenue from price and volume, or from a documented growth rate.
2. Forecast operating costs and EBIT using operational drivers and justified common-size relationships.
3. Forecast financing costs, pretax income, taxes, and net income.
4. Project working-capital balances, PP&E, other assets and liabilities, and equity roll-forwards.
5. Construct cash flow from earnings, noncash items, investment, and financing.
6. Link ending cash to the balance sheet and run the accounting-equation check.

### Original diagram 1: the linked forecast spine

```text
Price × volume → Revenue → Costs → EBIT → Financing → Tax → Net income
                         ↓                         ↓
          Working capital and PP&E          Retained earnings
                         ↓                         ↓
                    Cash flows → Ending cash → Closing balance sheet
                                                  ↓
                                  Assets = Liabilities + Equity
```

### Revenue

```formula
Sales_t = Sales_(t−1) × (1 + growth_t)
```

```formula
Revenue_t = Price_t × Volume_t
```

When price and volume both change, exact revenue growth is `(1 + price change)(1 + volume change) − 1`. Adding the two changes is only an approximation because it omits their cross-product.

### Original table 2: revenue forecast choices

| Method | Starting evidence | Best use | Main risk |
|---|---|---|---|
| Top-down | Macro/industry growth and market share | Industry-linked demand | Hiding company-specific constraints |
| Bottom-up | Units, customers, sites, capacity, price | Operationally observable drivers | False precision |
| Historical relationship | Trend, common size, regression | Stable economic relationships | Structural breaks |
| Scenario-based | Coherent alternative assumptions | Material uncertainty | Inconsistent scenario inputs |

### Worked example 1: price and volume

A product sold 20,000 units at 30. Next year, price is expected to rise 4% and volume 3%. Forecast revenue is `20,000 × 1.03 × 30 × 1.04 = 642,720`, an exact increase of 7.12%, not 7.00%.

### Worked example 2: sales growth

Current sales are 850. A justified 6% growth assumption gives forecast sales of `850 × 1.06 = 901`.

### Operating costs and margins

Percent-of-sales forecasting is useful when the relationship is stable and economically justified:

```formula
Projected line item = Projected sales × Assumed common-size ratio
```

Do not forecast every line mechanically as a percentage of sales. Separate fixed and variable costs, capacity steps, input prices, contracts, and one-time items where material.

### Original table 3: cost-driver selection

| Cost | Plausible driver | Convention to document |
|---|---|---|
| Materials | Units × input cost | Inflation and purchasing lag |
| Labor | Headcount × compensation | Productivity and wage inflation |
| Distribution | Volume, distance, fuel | Fixed/variable split |
| SG&A | Sales ratio plus discrete programs | Normalize unusual campaigns |
| Depreciation | Asset base and capex plan | Beginning/current/average base |

### Worked example 3: operating forecast

Forecast sales are 1,200. COGS is 58% and SG&A is 17% of sales. COGS is 696, SG&A is 204, and EBIT is 300, or 25% of sales.

### Financing costs and taxes

Interest should reflect debt and borrowing-cost assumptions. Beginning debt is transparent and avoids circularity; average debt may better match a period flow but needs a sequencing convention. State the choice. LM12 does not require iterative debt sweeps.

Apply an expected effective tax rate to forecast pretax income only after considering whether statutory rates, geography, permanent differences, or loss carryforwards make the historical rate unrepresentative.

### Worked example 4: earnings below EBIT

EBIT is 180, beginning debt is 500, the borrowing rate is 6%, and the forecast effective tax rate is 25%. Interest is 30, pretax income 150, tax 37.5, and net income 112.5.

### Original checklist 4: financing and tax controls

- Label beginning, ending, or average debt.
- Keep interest expense distinct from principal repayment.
- Separate interest income when cash is material.
- Explain the effective tax-rate assumption.
- Avoid a debt–interest–cash loop unless the model explicitly resolves it.

### Working capital

LM11 owns DSO, inventory days, and payable days. LM12 rearranges those canonical relationships to project accounts:

- Receivables = DSO × revenue ÷ days in period.
- Inventory = inventory days × COGS ÷ days in period.
- Payables = payable days × COGS ÷ days in period.

These are model applications of existing ratios, not duplicate formula records. Use consistent day counts and recognize that a flow covers a period while a balance is measured at a date.

### Original table 5: working-capital links

| Assumption rises | Projected balance | Typical cash effect |
|---|---|---|
| DSO | Receivables rise | CFO falls |
| Inventory days | Inventory rises | CFO falls |
| Payable days | Payables rise | CFO rises |

### Worked example 5: working capital

Revenue is 1,825, COGS is 1,095, DSO is 36.5 days, inventory days are 60, and payable days are 45. Receivables are 182.5, inventory 180, and payables 135 using 365 days.

### PP&E, capex, and depreciation

```formula
Ending net PP&E = Beginning net PP&E + Capex − D&A − Disposals/impairment
```

Capex should reflect maintenance, growth, capacity, and project timing. A D&A percentage of an asset base is a modeling convention rather than a universal formula.

### Worked example 6: PP&E roll-forward

Beginning net PP&E is 700, capex is 110, D&A is 65, and disposals have a carrying amount of 5. Ending net PP&E is 740.

### Original diagram 6: investment linkage

```text
Demand/capacity plan → Capex → PP&E roll-forward → D&A → EBIT
                           ↓                         ↓
                          CFI                 CFO reconciliation
```

### Equity and retained earnings

```formula
Ending retained earnings = Beginning retained earnings + Net income − Dividends
```

Share issuance, repurchases, share-based compensation, and other comprehensive income require separate explicit assumptions when relevant.

### Worked example 7: retained earnings

Beginning retained earnings are 330, net income is 112.5, and dividends are 42.5. Ending retained earnings are 400.

### Cash flow and projected balance sheet

Build CFO from net income, noncash charges, and working-capital changes; CFI from investment and disposals; and CFF from debt, equity, dividends, and repurchases.

```formula
Ending cash = Beginning cash + CFO + CFI + CFF
```

### Worked example 8: cash roll-forward

Beginning cash is 45, CFO 140, CFI −110, and CFF −15. Ending cash is 60.

### Original table 7: three-statement reconciliation

| Forecast event | Income statement | Cash flow | Balance sheet |
|---|---|---|---|
| Credit sale | Revenue/profit | Receivables adjustment | Receivables |
| Depreciation | Expense | Added back in CFO | Lower PP&E |
| Capex | — | CFI outflow | Higher PP&E |
| Debt issue | Interest later | CFF inflow | Debt and cash |
| Dividend | — | CFF outflow | Lower cash and retained earnings |

The deterministic balance check is `assets − liabilities − equity`. A nonzero amount is a diagnostic, not an acceptable plug. A cash or financing plug is legitimate only when it represents a documented policy.

### Worked example 9: balance check

Projected assets are 1,460; liabilities are 780 and equity is 675. The check is `1,460 − 780 − 675 = 5`. The model is not balanced; the missing linkage must be found.

## 2. Behavioral factors in forecasts

Forecasts combine data and judgment. Common risks include overconfidence, illusion of knowledge or control, confirmation bias, availability, representativeness, base-rate neglect, and escalation of commitment.

### Original table 8: bias and remedy

| Forecast behavior | Risk | Remedy |
|---|---|---|
| Narrow range despite uncertainty | Overconfidence | Scenarios and calibrated ranges |
| Only supportive evidence collected | Confirmation | Deliberate disconfirmation |
| Vivid case dominates statistics | Availability/representativeness | Reference-class base rates |
| Guidance accepted uncritically | Anchoring/management influence | Independent triangulation |
| Old thesis defended after facts change | Escalation | Predefined review triggers |

### Worked example 10: base-rate discipline

An analyst forecasts a 30% margin because one admired peer achieved it, while the relevant industry distribution centers on 18%. A remedy is to start with the base rate, then document company-specific evidence supporting any departure.

### Worked example 11: scenario remedy

A point forecast assumes 8% sales growth and a 22% EBIT margin. A base, downside, and upside set—each with linked price, volume, margin, and working-capital assumptions—reveals whether the conclusion depends on unjustified precision.

## 3. Competitive position and forecast assumptions

Porter's framework examines entry, substitutes, suppliers, buyers, and rivalry. It does not output a universal numeric score. Its value is converting competitive evidence into reviewable price, volume, cost, investment, and durability assumptions.

### Original diagram 9: forces to model inputs

```text
Entry barriers ─┐
Substitutes ────┼→ price / volume / market share
Buyer power ────┤
Supplier power ─┼→ input cost / payment terms / sourcing capex
Rivalry ────────┘→ selling cost / capacity / margin durability
```

### Worked example 12: supplier power

Two suppliers control a specialized input and contracts reset next year. Rather than simply extrapolating gross margin, the analyst models a higher unit cost, partial price pass-through, and a transition inventory build.

### Worked example 13: substitutes

A lower-priced substitute is gaining adoption. A coherent downside scenario combines lower volume, slower price growth, higher marketing expense, and possibly lower capacity utilization.

## 4. Inflation and deflation

Separate price, volume, input-cost inflation, pass-through, timing, elasticity, and mix. Nominal revenue can rise while real activity falls. Costs may reach earnings with a lag because of inventories or contracts.

### Original table 10: inflation transmission

| Driver | Forecast question | Possible statement effect |
|---|---|---|
| Selling-price inflation | How much and when? | Revenue and receivables |
| Volume elasticity | How do units respond? | Revenue, variable cost, capacity |
| Input inflation | Which inputs reprice? | Inventory, COGS, payables |
| Pass-through | Complete or partial? | Gross margin |
| Wage inflation | Fixed or variable staffing? | Operating expense |

### Worked example 14: unequal inflation

Volume is unchanged, price rises 4%, and unit cost rises 7%. Starting price and cost are 100 and 60. New gross profit is `104 − 64.2 = 39.8`, versus 40 initially, so the gross margin falls from 40.0% to about 38.3%.

### Original table 11: top-down versus bottom-up inflation forecast

| Approach | Inflation input | Company bridge |
|---|---|---|
| Top-down | CPI, producer prices, industry prices | Share, mix, and pass-through |
| Bottom-up | Contract prices and unit costs | Customer/product aggregation |

## 5. Forecast horizon and longer-term projections

The explicit horizon should capture material competitive change, investment, ramp-up, cyclicality, and movement toward sustainable conditions. It is company-specific. Beyond detailed forecasting, growth, margins, asset efficiency, and reinvestment should converge coherently rather than preserve temporary extremes.

### Original diagram 12: horizon decision

```text
Detailed visibility → strategic/investment transition → normalized sustainable state
      explicit short-term forecast             longer-term projection anchor
```

Scenario analysis changes a coherent set of assumptions. Sensitivity analysis often isolates one driver. Both can illuminate uncertainty, but neither eliminates model risk or supplies a probability automatically.

### Worked example 15: horizon selection

A manufacturer begins a three-year plant build followed by a two-year utilization ramp. A two-year horizon misses the project's economics; a five-year or longer explicit period is more defensible if it reaches a normalized operating state.

## Final review checklist

- Revenue drivers are explicit and avoid price-volume double counting.
- Historical LM11 ratios are normalized before becoming LM12 assumptions.
- Stock/flow timing and beginning/average/ending balance conventions are documented.
- Working capital, PP&E, retained earnings, cash flow, and closing balances are linked.
- Financing sequencing is transparent and does not hide circularity.
- Bias, competition, inflation, scenarios, and horizon choices affect assumptions coherently.
- Cash reconciles and the projected balance sheet balances.
- Sustainable-growth, terminal-value formulas, and advanced iterative solvers remain outside this module.

## Compact revision sheet

- Sales-based modeling sequence: revenue → EBIT → financing → tax → net income → cash flow → closing balances.
- Reuse LM11 ratios; LM12 owns their conversion into projected accounts.
- Document beginning, average, and ending-balance conventions.
- Model price, volume, costs, pass-through, and timing separately when material.
- Use scenarios to challenge confidence and a balance check to challenge mechanics.

## Exam tips

Follow the question's stated convention, distinguish a historical ratio from a forecast account, compound price and volume for an exact change, and treat the final explicit year as sustainable only when the economics support normalization.

## Common mistakes

Common errors include forecasting every line as a fixed percentage of sales, double-counting price and volume growth, treating management guidance as certainty, ignoring working-capital cash effects, mixing flow and stock measures, hiding circularity in a plug, and carrying temporary peak margins into the long term.

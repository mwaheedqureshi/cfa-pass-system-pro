# Types of Financial Returns

> [!INFO]
> This chapter is an independently written study resource. The learning outcomes are curriculum references only; the explanations, examples, and questions are original.

## Introduction

“Return” is not a single universal number. An analyst may be measuring a price change, the investor's complete gain, purchasing-power growth, a manager's performance, or the return required before an investment becomes attractive. Each purpose calls for a specific return measure.

The skill is therefore two-part: calculate accurately, then select and interpret the measure that answers the question actually being asked.

## Why this topic matters

Return measures appear throughout investment analysis. They feed performance evaluation, risk estimates, portfolio comparisons, valuation inputs, and client reporting. A technically correct calculation can still be misleading if it uses the wrong return definition. For example, a price return omits income, an arithmetic mean does not describe realized compound growth, and a money-weighted return can reward or penalize a manager for client cash flows outside the manager's control.

## Official learning outcomes

The relevant curriculum references ask learners to calculate, distinguish, and interpret common return measures, including holding-period components, average returns, cash-flow-sensitive returns, real returns, and foreign-currency returns. This chapter explains those ideas independently and does not reproduce curriculum prose.

## The return-measurement framework

Before touching the calculator, identify four things:

1. **Value base:** What capital was invested at the start?
2. **Cash flows:** Is income included? Are contributions or withdrawals external?
3. **Measurement lens:** Is the question about price, total wealth, purchasing power, or manager skill?
4. **Time scale:** Is the rate for one holding period, several periods, or one year?

> [!TIP]
> Underline the qualifier attached to “return”: price, total, net, real, geometric, money-weighted, time-weighted, domestic-currency, or annualized. That word usually selects the formula.

## Holding-period return review

Holding-period return (HPR) measures the total gain or loss over the period an investment is owned. It combines the change in value with income received and uses beginning value as the capital base.

```formula
HPR = (P₁ − P₀ + D) / P₀
```

### Worked example 1: a complete holding-period return

```example
Problem
An investor buys a bond for 980, receives a coupon of 35, and sells the bond for 1,010 six months later. Find the six-month HPR.

Step-by-step solution
1. Price change = 1,010 − 980 = 30.
2. Add income: 30 + 35 = 65.
3. Divide by beginning value: 65 / 980 = 0.06633.
4. Six-month HPR = 6.63%.

Interpretation
The investor's wealth increased 6.63% during the actual six-month holding period, before any stated fees or taxes.

Exam insight
The coupon is part of total return. Do not annualize unless the question requests an annualized rate.
```

## Simple, total, price, and income return

A **simple return** expresses a period's gain relative to beginning value. In many investment questions, “simple holding-period return” means the non-logarithmic total return. A **price return** isolates appreciation or depreciation. An **income return** isolates dividends, coupons, or other distributions. **Total return** combines both components.

```formula
Simple total return = (Ending value − Beginning value + Income) / Beginning value
Price return = (Ending value − Beginning value) / Beginning value
Income return = Income / Beginning value
Total return = Price return + Income return
```

| Feature | Simple return | Total return |
|---|---|---|
| Core idea | Period gain divided by beginning value | Full wealth change including income |
| Income treatment | Depends on the stated gain; clarify the convention | Explicitly included |
| Compounding | Not built into a single-period rate | Not built into a single-period rate |
| Main trap | Assuming “simple” automatically excludes income | Forgetting a distribution |

### Worked example 2: return decomposition

```example
Problem
A share begins at 64, ends at 68, and pays a dividend of 1.60. Calculate price, income, and total return.

Step-by-step solution
1. Price return = (68 − 64) / 64 = 6.25%.
2. Income return = 1.60 / 64 = 2.50%.
3. Total return = 6.25% + 2.50% = 8.75%.

Interpretation
Most of the investor's 8.75% gain came from price appreciation, while 2.50 percentage points came from income.

Exam insight
All components use the same beginning-value denominator, which makes them additive.
```

## Gross and net return

Gross return is measured before specified investment-management fees and expenses. Net return is measured after them. The exact scope of “net” depends on the question or reporting convention, so identify which fees are included rather than relying on the label alone.

```formula
Net ending wealth = Gross ending wealth − fees
Net return = Net ending wealth / Beginning wealth − 1
```

| Feature | Gross return | Net return |
|---|---|---|
| Fees | Before specified fees | After specified fees |
| Useful for | Evaluating investment process before fee drag | Investor experience after stated costs |
| Required input | Gross change in value | Fee amount or fee rate and timing |
| Main trap | Presenting it as what the investor kept | Subtracting percentages when fees are charged on a different base |

### Worked example 3: fee drag from ending wealth

```example
Problem
A portfolio starts at 200,000 and grows to 218,000 before a 2,000 management fee paid at period end. Find gross and net return.

Step-by-step solution
1. Gross return = 218,000 / 200,000 − 1 = 9.00%.
2. Net ending wealth = 218,000 − 2,000 = 216,000.
3. Net return = 216,000 / 200,000 − 1 = 8.00%.

Interpretation
The stated fee reduced the investor's period return by one percentage point because it equaled 1% of beginning wealth.

Exam insight
Reconstruct net wealth when the fee is given as currency; do not blindly subtract a fee percentage from return.
```

## Nominal and real return

Nominal return measures growth in money. Real return measures growth in purchasing power after inflation. The exact relationship works with wealth relatives; subtraction is an approximation.

```formula
Real return = (1 + nominal return) / (1 + inflation rate) − 1
Approximate real return ≈ nominal return − inflation rate
```

| Feature | Nominal return | Real return |
|---|---|---|
| Measures | Currency growth | Purchasing-power growth |
| Inflation | Still embedded | Removed |
| Appropriate comparison | Money values | Consumption capacity |
| Main trap | Treating positive nominal growth as positive purchasing-power growth | Using subtraction when an exact answer is required |

### Worked example 4: purchasing-power loss despite a gain

```example
Problem
An investment earns 4% while inflation is 6%. Calculate exact real return.

Step-by-step solution
1. Nominal wealth relative = 1.04.
2. Price-level relative = 1.06.
3. Real wealth relative = 1.04 / 1.06 = 0.98113.
4. Real return = 0.98113 − 1 = −1.89%.

Interpretation
Money wealth rose, but purchasing power fell by approximately 1.89%.

Exam insight
A positive nominal return does not guarantee a positive real return.
```

## Leveraged return

Leverage combines investor equity with borrowing. Because equity is smaller than the asset position, a given asset gain or loss has a larger percentage effect on equity. Interest and other financing costs belong in the equity calculation.

```formula
Leveraged equity return = (Ending asset value − debt repayment − beginning equity) / beginning equity
```

### Worked example 5: leverage with financing cost

```example
Problem
An investor contributes 75 and borrows 25 to buy an asset for 100. The asset ends at 108, and debt repayment including interest is 26. Find the equity return.

Step-by-step solution
1. Ending equity after debt repayment = 108 − 26 = 82.
2. Equity gain = 82 − 75 = 7.
3. Leveraged equity return = 7 / 75 = 9.33%.
4. The unleveraged asset return was 8 / 100 = 8.00%.

Interpretation
Leverage increased the equity return, but financing cost absorbed part of the amplification.

Exam insight
Use equity—not total asset value—as the denominator for the leveraged investor's return.
```

> [!WARNING]
> Leverage is symmetric: it magnifies adverse asset movements as well as favorable ones.

## Arithmetic and geometric return

The arithmetic mean is the simple average of periodic returns and is useful when describing a typical single period. The geometric mean is the constant periodic rate that reproduces the actual compounded terminal wealth.

```formula
Arithmetic mean return = (R₁ + R₂ + … + Rₙ) / n
Geometric mean return = [(1 + R₁)(1 + R₂)…(1 + Rₙ)]^(1/n) − 1
```

| Feature | Arithmetic mean | Geometric mean |
|---|---|---|
| Calculation | Add rates, divide by observations | Compound wealth relatives, take nth root |
| Best use | Average one-period outcome | Realized compound growth rate |
| Effect of volatility | Does not capture volatility drag | Captures volatility drag |
| Relationship | Greater than or equal to geometric mean | Less than or equal to arithmetic mean |

### Worked example 6: average versus compound growth

```example
Problem
Annual returns are +30%, −10%, and +5%. Calculate arithmetic and geometric means.

Step-by-step solution
1. Arithmetic mean = (30% − 10% + 5%) / 3 = 8.33%.
2. Compound relative = 1.30 × 0.90 × 1.05 = 1.2285.
3. Geometric mean = 1.2285^(1/3) − 1 = 7.11% approximately.

Interpretation
The average annual observation was 8.33%, but wealth compounded at about 7.11% per year.

Exam insight
If the question asks what constant annual rate produced terminal wealth, choose geometric—not arithmetic—return.
```

## Multi-period and annualized return

Multi-period return compounds consecutive holding-period returns. Adding rates ignores the interaction among periods.

```formula
Multi-period return = (1 + R₁)(1 + R₂)…(1 + Rₙ) − 1
```

Annualization converts a cumulative return over `T` years into an equivalent compound annual rate.

```formula
Annualized return = (1 + cumulative return)^(1/T) − 1
```

For a period lasting `m` months, `T = m / 12`. Annualizing a short holding-period return assumes compounding at the same rate and does not claim the result will actually repeat.

### Worked example 7: compound a return path

```example
Problem
A portfolio earns 12% in year 1, loses 7% in year 2, and earns 4% in year 3. Find its cumulative return.

Step-by-step solution
1. Convert returns to relatives: 1.12, 0.93, and 1.04.
2. Multiply: 1.12 × 0.93 × 1.04 = 1.083264.
3. Subtract one: cumulative return = 8.3264%.

Interpretation
One unit of starting wealth became approximately 1.0833 units over three years.

Exam insight
The sum, 9%, is not the exact multi-period return.
```

### Worked example 8: annualize cumulative performance

```example
Problem
An investment grows 21% over two years. Find the compound annualized return.

Step-by-step solution
1. Cumulative wealth relative = 1.21.
2. Take the two-year root: 1.21^(1/2) = 1.10.
3. Subtract one: annualized return = 10%.

Interpretation
A constant 10% annual compound rate would turn beginning wealth into 121% of its original value after two years.

Exam insight
Dividing 21% by two gives 10.5%, which ignores compounding.
```

## Money-weighted and time-weighted return

Money-weighted return (MWR) is the internal rate of return on the investor's dated cash flows. Large contributions give subsequent periods greater influence. Time-weighted return (TWR) breaks the evaluation at external cash flows and geometrically links subperiod performance, reducing the effect of cash-flow timing.

```formula
Money-weighted return solves: 0 = CF₀ + CF₁/(1+r) + … + CFₙ/(1+r)ⁿ
Time-weighted return = (1 + R₁)(1 + R₂)…(1 + Rₙ) − 1
```

| Feature | Money-weighted return | Time-weighted return |
|---|---|---|
| Mathematical idea | Internal rate of return | Geometric link of subperiod returns |
| External cash flows | Amount and timing matter | Periods are separated at flows |
| Best perspective | Investor experience | Manager performance when manager does not control flows |
| Main trap | Treating it as flow-neutral | Calculating subperiod values incorrectly around flows |

### Worked example 9: time-weighted performance

```example
Problem
A fund earns 8% before a large client contribution and −3% after it. Find TWR.

Step-by-step solution
1. First subperiod relative = 1.08.
2. Second subperiod relative = 0.97.
3. Link the periods: 1.08 × 0.97 = 1.0476.
4. TWR = 4.76%.

Interpretation
The fund's investment process compounded wealth by 4.76%, independent of the contribution's size.

Exam insight
Do not average 8% and −3%; TWR for the full period links rather than averages subperiod returns.
```

### Worked example 10: money-weighted investor experience

```example
Problem
An investor contributes 100 today, contributes another 50 after one year, and receives 176 after two years. Find the annual MWR.

Step-by-step solution
1. Write investor cash flows: −100 at t=0, −50 at t=1, +176 at t=2.
2. Solve 0 = −100 − 50/(1+r) + 176/(1+r)².
3. The economically relevant solution is approximately 10%.
4. Check: −100 − 50/1.10 + 176/1.10² = 0.

Interpretation
Given the amount and timing of invested capital, the investor earned approximately 10% annually.

Exam insight
Cash paid and cash received require opposite signs in an IRR worksheet.
```

## Foreign-currency return

A domestic investor in a foreign asset earns the combination of the local asset return and the foreign currency's change against the domestic currency.

```formula
Domestic-currency return = (1 + foreign-asset return)(1 + foreign-currency return) − 1
```

A positive currency return means the foreign currency appreciated from the domestic investor's perspective; depreciation is entered as a negative rate.

### Worked example 11: currency offsets asset performance

```example
Problem
A foreign asset earns 9% in its local currency, while that currency depreciates 6% against the investor's domestic currency. Find domestic return.

Step-by-step solution
1. Asset relative = 1.09.
2. Currency relative = 0.94.
3. Combined relative = 1.09 × 0.94 = 1.0246.
4. Domestic return = 2.46%.

Interpretation
Most of the local-market gain was lost when translated into the stronger domestic currency.

Exam insight
9% − 6% = 3% is only an approximation; the exact result includes the interaction term.
```

## Required return and risk premium

Required return is the minimum expected return an investor demands to commit capital at a given level of risk. A risk premium is compensation above an appropriate risk-free benchmark for bearing uncertainty. Depending on context, investors may demand premiums for equity, credit, liquidity, maturity, country, or currency risk.

```formula
Risk premium = required return − reference risk-free return
Required return = reference risk-free return + risk premium
```

### Worked example 12: infer a risk premium

```example
Problem
An investor requires 8.5% on an investment when the relevant risk-free rate is 3.0%. Find the risk premium.

Step-by-step solution
1. Start with required return = risk-free return + risk premium.
2. Rearrange: risk premium = required return − risk-free return.
3. Risk premium = 8.5% − 3.0% = 5.5%.

Interpretation
The investor requires 5.5 percentage points beyond the reference risk-free return for accepting the investment's risk.

Exam insight
The premium is the spread between rates, not a ratio of the two rates.
```

## Common mistakes

- Omitting income when total return is requested.
- Dividing a gain by ending rather than beginning value.
- Assuming every use of “simple return” excludes distributions.
- Subtracting fees without checking the fee base and timing.
- Calling a nominal gain a real gain when inflation is higher.
- Ignoring financing cost in a leveraged return.
- Using arithmetic mean to represent realized compound growth.
- Adding periodic returns instead of multiplying wealth relatives.
- Dividing cumulative return by years to annualize it.
- Using MWR to isolate manager skill when the manager did not control cash flows.
- Treating currency depreciation as positive for the domestic investor.
- Confusing required return with realized return.

## Memory tricks

> [!TIP]
> **P + I = T:** price return plus income return equals total return.

> [!TIP]
> **A for a period; G for growth:** arithmetic describes an average period, geometric describes compound growth.

> [!TIP]
> **Money follows the money; Time tests the team:** MWR follows investor cash flows, while TWR is commonly used to assess the investment team.

> [!TIP]
> **One-plus discipline:** for multi-period, real, annualized, and currency returns, work with wealth relatives and subtract one only at the end.

## Exam tips

- Write the requested return label above your calculation before entering numbers.
- Keep returns in decimal form until the final percentage conversion.
- Sketch a cash-flow timeline for MWR problems.
- Break TWR at every external contribution or withdrawal.
- Check whether the requested annual result is a simple convention or a compound annualized rate.
- Use an economic reasonableness check: high inflation should reduce real return; foreign-currency depreciation should reduce domestic return; fees should reduce net return.

## Quick revision sheet

| Need to measure | Use |
|---|---|
| Price movement only | `(P₁ − P₀) / P₀` |
| Income yield only | `D / P₀` |
| Full holding-period gain | `(P₁ − P₀ + D) / P₀` |
| Purchasing-power growth | `(1 + nominal) / (1 + inflation) − 1` |
| Typical one-period observation | Arithmetic mean |
| Compound periodic growth | Geometric mean |
| Investor's cash-flow experience | Money-weighted return |
| Flow-neutral manager performance | Time-weighted return |
| Several consecutive periods | Multiply `(1 + R)` terms, then subtract one |
| Equivalent annual compound rate | `(1 + cumulative return)^(1/T) − 1` |
| Domestic result on foreign asset | `(1 + asset return)(1 + currency return) − 1` |
| Compensation above risk-free rate | Risk premium |

## 30-second summary

Return selection begins with purpose. Price plus income gives total return; fees separate gross from net; inflation separates nominal from real. Arithmetic return describes an average period, while geometric return describes compound growth. MWR follows investor cash flows, and TWR neutralizes them for performance evaluation. Compound across time, use an appropriate root to annualize, combine foreign assets with currency effects, and view required return as a risk-free benchmark plus compensation for risk.
## Asset, instrument, and indicator application lab

### Worked Example 13 — equity return sources
**Problem.** A share moves from 42 to 45 and pays 1.20. **Solution.** Price return is $3/42=7.14\%$; distribution return is $1.2/42=2.86\%$; total is 10.00%. **Interpretation.** Equity return combines uncertain price change and shareholder distributions. **Exam insight.** Use the same beginning-price denominator.

### Worked Example 14 — bond return decomposition
**Problem.** A bond begins at 98, ends at 96.5, and pays a 3 coupon. **Solution.** Price return is $-1.5/98=-1.53\%$; income return is $3/98=3.06\%$; total return is 1.53%. **Interpretation.** Coupon income can offset a price decline. **Exam insight.** Coupon rate is not automatically the holding-period income return.

### Worked Example 15 — price versus total-return index
**Problem.** A price index rises from 1,250 to 1,300 while reinvested distributions add 18 index points. **Solution.** Price return is 4.00%; total return is $(1,300-1,250+18)/1,250=5.44\%$. **Interpretation.** A total-return indicator captures distributions omitted by the price index. **Exam insight.** Compare like with like across benchmarks.

### Worked Example 16 — foreign asset in base currency
**Problem.** A foreign asset earns 6% locally and its currency appreciates 3% against the investor’s currency. **Solution.** Base-currency return is $(1.06)(1.03)-1=9.18\%$. **Interpretation.** Currency appreciation adds to the local asset outcome. **Exam insight.** Additive 9% is only an approximation.

> **Knowledge Check 1.** Which component is usually fixed for a conventional coupon bond? **Answer:** Contractual coupon cash flow, subject to credit performance.
> **Knowledge Check 2.** Does a price-return index assume distributions are reinvested? **Answer:** No.
> **Knowledge Check 3.** Why can commodity investment return differ from spot-price change? **Answer:** Collateral income and contract effects may also matter.
> **Knowledge Check 4.** What distinguishes an indicator return from an investable asset return? **Answer:** An indicator may be a constructed measure rather than a directly held security.
> **Knowledge Check 5.** Is nominal return adjusted for inflation? **Answer:** No.
> **Knowledge Check 6.** When should net return be preferred? **Answer:** When evaluating the return retained after the specified costs.
> **Knowledge Check 7.** Does leverage create return independently? **Answer:** No; it magnifies the asset return net of financing cost.
> **Knowledge Check 8.** Why compare long-run geometric returns? **Answer:** They describe compound growth over multiple periods.

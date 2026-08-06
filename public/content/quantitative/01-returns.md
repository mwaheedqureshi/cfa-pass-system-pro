# Returns of Financial Assets and Instruments

> [!INFO]
> This independently written lesson supports the published curriculum outcomes. It is not official CFA Institute content.

## Why return measurement matters

Return converts an investment's change in wealth into a comparable rate. The correct measure depends on the question: price movement, total investor experience, purchasing power, compounded growth, manager skill, or domestic-currency wealth.

## Holding-period, price, and income return

```formula
HPR = (P₁ − P₀ + D) / P₀
```

Here, `P₀` is beginning value, `P₁` is ending value, and `D` is income such as dividends, coupons, interest, distributions, or rent.

| Measure | Numerator | Best interpretation |
|---|---|---|
| Price return | P₁ − P₀ | Gain or loss from price movement |
| Income return | D | Cash income earned |
| Total return | P₁ − P₀ + D | Full holding-period result |

```formula
Price return = (P₁ − P₀) / P₀
Income return = D / P₀
Total return = Price return + Income return
```

### Worked example 1: decomposing total return

```example
A share costs 100, pays a dividend of 4, and finishes at 108.
Price return = (108 − 100) / 100 = 8%
Income return = 4 / 100 = 4%
Total return = 12%
```

> [!TIP]
> Unless the question explicitly requests price return, scan for dividends, coupons, and distributions before calculating.

> [!WARNING]
> A common mistake is dividing by ending value. Return is normally measured against capital at risk at the beginning.

## Gross, net, pre-tax, and after-tax return

Gross return is measured before specified investment-management fees and expenses. Net return is after those deductions. Always read which costs the question includes; labels alone do not identify every cost.

### Worked example 2: return after fees

```example
A portfolio earns 9.0% before a fee equal to 1.2% of beginning assets.
Net return = 9.0% − 1.2% = 7.8%.
```

Pre-tax return is measured before taxes; after-tax return reflects taxes. When one tax rate applies to the full return, a simplified calculation is:

```formula
After-tax return = Pre-tax return × (1 − tax rate)
```

### Worked example 3: simplified after-tax return

```example
Pre-tax return = 10%; tax rate = 25%.
After-tax return = 10% × 0.75 = 7.5%.
```

> [!INFO]
> Real tax systems may apply different rates to income and capital gains. Use the cash flows and assumptions supplied in the problem.

## Nominal and real return

Nominal return measures growth in currency units. Real return measures growth in purchasing power. The exact Fisher relationship is:

```formula
1 + nominal return = (1 + real return)(1 + inflation)
Real return = (1 + nominal return) / (1 + inflation) − 1
```

The convenient approximation is:

```formula
Real return ≈ nominal return − inflation
```

### Worked example 4: exact versus approximate real return

```example
Nominal return = 8%; inflation = 3%.
Approximate real return = 8% − 3% = 5%.
Exact real return = 1.08 / 1.03 − 1 = 4.85%.
```

> [!TIP]
> Words such as “exact” or closely spaced answer choices signal that you should divide wealth relatives rather than subtract rates.

## Leveraged return

Leverage uses borrowed capital. It increases the amount of assets controlled by each unit of investor equity, magnifying both gains and losses. Financing costs reduce the investor's result.

### Worked example 5: leverage magnifies equity return

```example
An investor contributes 60 and borrows 40 to buy an asset for 100.
The asset rises to 110; ignore interest.
Ending equity = 110 − 40 = 70.
Equity return = (70 − 60) / 60 = 16.67%.
The asset itself returned only 10%.
```

> [!WARNING]
> Do not apply the asset return to equity and stop. Reconstruct ending equity after repaying debt and any financing cost.

## Arithmetic and geometric mean returns

```formula
Arithmetic mean = (R₁ + R₂ + … + Rₙ) / n
Geometric mean = [(1 + R₁)(1 + R₂)…(1 + Rₙ)]^(1/n) − 1
```

| Measure | Answers | Sensitive to compounding? |
|---|---|---|
| Arithmetic mean | What was the average one-period return? | No |
| Geometric mean | What constant rate produced the same terminal wealth? | Yes |

### Worked example 6: volatility drag

```example
Returns are +20% and −20%.
Arithmetic mean = (20% − 20%) / 2 = 0%.
Geometric mean = √(1.20 × 0.80) − 1 = −2.02%.
Starting wealth of 100 ends at 96, so compound growth must be negative.
```

> [!INFO]
> The geometric mean is no greater than the arithmetic mean for a valid series; they are equal when every periodic return is the same.

## Money-weighted return

Money-weighted return is the internal rate of return (IRR) that equates the present value of cash inflows and outflows. Large investments receive more weight, so investor-controlled contributions and withdrawals affect the result.

```formula
0 = CF₀ + CF₁/(1+r) + CF₂/(1+r)² + … + CFₙ/(1+r)ⁿ
```

### Worked example 7: investor cash-flow timing

```example
Invest 100 today and receive 110 one year later.
0 = −100 + 110/(1+r), so r = 10%.
For several irregular cash flows, solve for r with an IRR function.
```

## Time-weighted return

Time-weighted return evaluates compounded performance while neutralizing external cash-flow timing. Split the evaluation period whenever an external cash flow occurs, compute each subperiod return, and link them geometrically.

```formula
Time-weighted return = (1 + R₁)(1 + R₂)…(1 + Rₙ) − 1
```

### Worked example 8: link subperiod returns

```example
The portfolio returns +10% before a contribution and −5% afterward.
Time-weighted return = 1.10 × 0.95 − 1 = 4.5%.
```

| Measure | External cash-flow effect | Typical analytical use |
|---|---|---|
| Money-weighted | Included | Investor's actual experience |
| Time-weighted | Neutralized | Manager performance when flows are outside manager control |

## Foreign-currency investment return

A domestic investor's wealth depends on both the asset return in its local market and the currency's movement against the domestic currency.

```formula
Domestic return = (1 + foreign asset return)(1 + currency return) − 1
```

### Worked example 9: appreciating foreign currency

```example
Foreign asset return = 6%; foreign currency appreciation = 4%.
Domestic return = 1.06 × 1.04 − 1 = 10.24%.
```

### Worked example 10: depreciating foreign currency

```example
Foreign asset return = 8%; foreign currency return = −5%.
Domestic return = 1.08 × 0.95 − 1 = 2.60%.
```

> [!WARNING]
> Add the rates only as a rough approximation. Multiplication captures the interaction term and is required for an exact answer.

## Required return and risk premium

Required return is the minimum expected return an investor demands for postponing consumption and accepting risk. A risk premium is expected return above an appropriate risk-free benchmark as compensation for a particular risk. Depending on the investment, relevant premiums may relate to equity, credit, liquidity, maturity, country, or currency risk.

```formula
Illustrative required return = real risk-free rate + expected inflation + risk premium(s)
```

This additive expression is a useful component framework, not a universal pricing model.

## BA II Plus guidance

```calculator
Money-weighted return / IRR:
1. Press CF, then clear the worksheet with 2nd + CLR WORK.
2. Enter the initial investment as CF0 (normally negative), then ENTER and ↓.
3. Enter later cash flows in chronological order; use F fields for repeated equal flows.
4. Press IRR, then CPT.
5. Check that cash paid and cash received use opposite signs.
```

For a geometric mean, multiply wealth relatives and take the appropriate root; keep rates in decimal form during intermediate calculations.

## Common exam mistakes

- Omitting income from total return.
- Using ending rather than beginning value as the denominator.
- Treating gross and net return as interchangeable.
- Using nominal return when purchasing-power growth is requested.
- Using the approximate Fisher relationship when an exact answer is required.
- Using arithmetic mean for compound growth.
- Confusing investor-sensitive money-weighted return with flow-neutral time-weighted return.
- Forgetting the currency interaction term.
- Treating leverage as an upside-only effect.
- Entering all IRR cash flows with the same sign.

## Memory aids

> [!TIP]
> **P-I-T:** Price plus Income equals Total. **Manager? Time-weight. Investor? Money-weight.** For real and currency returns, think in wealth relatives: add one, combine, then subtract one.

## End-of-lesson summary

- Total holding-period return combines price change and income relative to beginning value.
- Net and after-tax returns depend on the stated fees and tax assumptions.
- Exact real return divides nominal growth by inflation growth.
- Arithmetic mean describes a typical single period; geometric mean describes compounded growth.
- Money-weighted return reflects actual cash-flow timing; time-weighted return neutralizes it.
- Domestic foreign-asset return combines local asset and currency wealth relatives.
- Leverage magnifies equity outcomes in both directions.


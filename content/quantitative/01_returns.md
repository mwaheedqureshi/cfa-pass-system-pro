# Returns of Financial Assets and Instruments

> [!INFO]
> **Reading time:** about 28 minutes  
> **Difficulty:** Beginner to intermediate  
> **Purpose:** Build the return-measurement foundation used throughout CFA Level I.

## Why this matters

Almost every investment decision starts with the same question: **What return did the investor earn?**

The correct measure depends on the purpose. Analysts distinguish price return, total return, gross and net return, nominal and real return, arithmetic and geometric averages, money-weighted and time-weighted returns, and domestic versus foreign-currency returns.

## Learning objectives explained

- Calculate holding-period return.
- Separate price return and income return.
- Distinguish gross, net, pre-tax, after-tax, nominal, and real returns.
- Calculate arithmetic and geometric average returns.
- Explain money-weighted and time-weighted returns.
- Calculate a domestic investor's return on a foreign asset.
- Interpret risk premium and required return.

## Holding-period return

```formula
HPR = (Ending value - Beginning value + Income) / Beginning value
```

Income may include dividends, coupons, distributions, interest, or rent.

### Price return and income return

```formula
Price return = (Ending value - Beginning value) / Beginning value
```

```formula
Income return = Income / Beginning value
```

```formula
Total return = Price return + Income return
```

> [!TIP]
> Include dividends or coupons unless the question explicitly asks for price return only.

### Worked example 1

An investor buys a share for 100, receives a dividend of 4, and sells it for 108.

```example
Price return = (108 - 100) / 100 = 8%
Income return = 4 / 100 = 4%
Total return = 12%
```

## Gross and net returns

Gross return is measured before management fees and specified expenses. Net return is after those deductions.

```formula
Net return = Gross return - fees and expenses
```

### Worked example 2

A portfolio earns 9.0% before fees. Fees equal 1.2% of beginning assets.

```example
Net return = 9.0% - 1.2% = 7.8%
```

## Pre-tax and after-tax returns

A simplified relationship is:

```formula
After-tax return = Pre-tax return x (1 - tax rate)
```

This is appropriate only when the same tax rate applies to the whole return.

## Nominal and real returns

Nominal return measures currency growth. Real return measures purchasing-power growth.

```formula
Real return = (1 + nominal return) / (1 + inflation) - 1
```

Approximation:

```formula
Real return ≈ Nominal return - Inflation
```

### Worked example 3

Nominal return is 8% and inflation is 3%.

```example
Approximate real return = 5%
Exact real return = 1.08 / 1.03 - 1 = 4.85%
```

> [!WARNING]
> Use subtraction only when the question asks for an approximation.

## Leveraged return

Leverage magnifies both gains and losses. If equity of 100 controls an asset worth 150 using debt of 50 and the asset rises by 15, the asset return is 10% but the equity return is 15%, ignoring financing cost.

## Arithmetic and geometric average returns

```formula
Arithmetic mean = (R1 + R2 + ... + Rn) / n
```

```formula
Geometric mean = [(1 + R1)(1 + R2)...(1 + Rn)]^(1/n) - 1
```

The arithmetic mean is suitable for an average one-period return. The geometric mean measures compound growth.

### Worked example 4

Returns are +20% and -20%.

```example
Arithmetic mean = 0%
Geometric mean = [(1.20)(0.80)]^(1/2) - 1 ≈ -2.02%
```

Starting wealth of 100 becomes 96, not 100.

## Money-weighted return

Money-weighted return is the internal rate of return of the investor's actual cash flows. It is affected by the timing and amount of contributions and withdrawals.

## Time-weighted return

Time-weighted return removes external cash-flow timing. Break the period at each external cash flow, calculate each subperiod return, and compound them.

```formula
Time-weighted return = (1 + R1)(1 + R2)...(1 + Rn) - 1
```

### Worked example 5

A portfolio earns 10% in the first subperiod and loses 5% in the second.

```example
(1.10)(0.95) - 1 = 4.5%
```

## Foreign-currency return

```formula
Domestic return = (1 + foreign asset return)(1 + currency return) - 1
```

### Worked example 6

A foreign share gains 6% and the foreign currency appreciates 4%.

```example
(1.06)(1.04) - 1 = 10.24%
```

## Required return and risk premium

A simplified required return is:

```formula
Required return = Real risk-free rate + Expected inflation + Risk premium
```

Risk premiums may compensate for equity, credit, liquidity, maturity, country, or currency risk.

## BA II Plus calculator guidance

For money-weighted return:

1. Press `CF`.
2. Enter the initial investment as `CF0` with a negative sign.
3. Enter later cash flows chronologically.
4. Press `IRR`.
5. Press `CPT`.

> [!WARNING]
> Cash paid and cash received must have opposite signs.

## Common exam traps

- Forgetting dividends or coupons.
- Using ending value as the denominator.
- Using arithmetic mean for compound growth.
- Using the approximate real return when the exact answer is required.
- Confusing money-weighted and time-weighted returns.
- Forgetting the currency component.
- Assuming leverage improves return without increasing downside.

## Memory shortcuts

- Total return: price change plus income, divided by beginning value.
- Real return: nominal return with inflation removed.
- Geometric mean: multiply wealth relatives, take the root, subtract one.
- Manager evaluation: time-weighted.
- Investor experience: money-weighted.

## Quick summary

- Holding-period return includes price change and income.
- Real return measures purchasing-power growth.
- Arithmetic mean is for a one-period average.
- Geometric mean measures compound growth.
- Money-weighted return includes investor cash-flow timing.
- Time-weighted return removes external cash-flow timing.
- Foreign return includes asset and currency components.

## Knowledge check

Use the quiz below. A score below 80% should trigger another review.

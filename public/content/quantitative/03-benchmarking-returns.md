# Benchmarking Returns

> [!INFO]
> This independently written chapter uses published learning themes only as curriculum references. It is not official CFA Institute content.

## Professional introduction

A return has little meaning without context. Earning 8% may be excellent when comparable assets lost value, inadequate when the mandate required 10%, or irrelevant if the portfolio took risks the comparison did not reflect. A benchmark turns a raw return into an evaluative statement.

## Why benchmarking matters

Benchmarks support objective setting, portfolio construction, manager evaluation, risk control, attribution, and client communication. The choice of benchmark often matters as much as the return calculation: an unsuitable comparison can make sound management appear poor or conceal weak decisions.

## Learning outcomes

Curriculum references for this lesson concern explaining benchmark purposes and types, evaluating benchmark quality, interpreting relative performance and tracking measures, and recognizing selection limitations. All teaching text and examples below are original.

## Purpose and qualities of benchmarks

A benchmark is a pre-specified reference against which portfolio return, risk, or implementation can be assessed. A sound benchmark is **unambiguous, investable, measurable, appropriate, reflective of current investment views, specified in advance, and accountable**: the manager should understand and accept responsibility for relevant deviations.

| Good benchmark | Poor benchmark |
|---|---|
| Matches mandate and risk opportunity set | Uses unrelated assets or risk |
| Rules and constituents are transparent | Definition changes after results are known |
| Return can be calculated reliably | Data are unavailable or subjective |
| Investable or realistically replicable | Cannot be held or approximated |
| Specified before evaluation | Chosen with hindsight |

### Worked example 1: mandate fit

```example
Problem
A manager invests only in short-duration domestic government bonds but is compared with a global high-yield index.

Step-by-step solution
1. Identify the mandate: short-duration, domestic, government credit.
2. Identify benchmark exposures: global currencies, longer duration, speculative credit.
3. Compare the opportunity sets: they are materially different.
4. Conclude that the index is not appropriate despite being measurable.

Interpretation
Relative performance would mostly reflect structural risk differences rather than manager skill.

Exam insight
“Widely followed” does not mean “appropriate.” Start with mandate fit.
```

> [!TIP]
> Knowledge check 1: If a benchmark is selected after performance is observed, which quality fails? **Specified in advance.**

## Strategic and tactical benchmarks

A **strategic benchmark** represents the long-term policy mix consistent with objectives and constraints. A **tactical benchmark** represents a shorter-term reference adjusted for authorized temporary positions or views.

| Feature | Strategic benchmark | Tactical benchmark |
|---|---|---|
| Horizon | Long term | Shorter term |
| Main role | Policy and structural allocation | Evaluate temporary deviations |
| Change frequency | Infrequent | More responsive to approved views |
| Risk represented | Long-run target risk | Near-term intended risk |

### Worked example 2: tactical deviation

```example
Problem
A policy mix is 60% equities and 40% bonds. For one quarter, an approved tactical stance is 65% equities and 35% bonds. Equity returns 6%; bonds return 1%.

Step-by-step solution
1. Strategic return = 0.60(6%) + 0.40(1%) = 4.00%.
2. Tactical return = 0.65(6%) + 0.35(1%) = 4.25%.
3. Tactical positioning added 0.25 percentage point relative to policy.

Interpretation
The tactical reference isolates the return expected from the authorized temporary mix.

Exam insight
Do not silently replace the long-term policy benchmark; label the horizon and purpose of each reference.
```

## Absolute and relative return benchmarks

An **absolute return benchmark** states a target independent of a market index, such as 6% or inflation plus 3%. A **relative return benchmark** evaluates performance against another portfolio or index.

| Feature | Absolute return | Relative return |
|---|---|---|
| Reference | Fixed or formula target | Index, custom portfolio, or peer return |
| Result | Portfolio return minus target | Portfolio return minus comparator |
| Market sensitivity | Target may not move with markets | Comparator generally moves with its market |
| Main question | Was the objective achieved? | Was the comparator outperformed? |

### Worked example 3: two valid conclusions

```example
Problem
A portfolio earns 7%. Its absolute target is 6%, while its market benchmark earns 9%.

Step-by-step solution
1. Absolute excess = 7% − 6% = +1%.
2. Relative excess = 7% − 9% = −2%.
3. State both conclusions separately.

Interpretation
The portfolio exceeded its absolute objective but underperformed the market comparison.

Exam insight
“Beat the target” and “beat the market” are not interchangeable claims.
```

> [!TIP]
> Knowledge check 2: A target of inflation plus 4% is **absolute/formula-based**, even though inflation changes over time.

## Market index, custom, and peer group benchmarks

A **market index** follows published rules for a defined market segment. A **custom benchmark** combines indices or securities to reflect a specific mandate. A **peer group benchmark** compares a portfolio with similar funds or managers, often using a median or percentile.

| Type | Strength | Limitation | Suitable use |
|---|---|---|---|
| Market index | Transparent and measurable | May not match constraints | Standard market mandate |
| Custom benchmark | Tailored exposure match | Requires maintenance and governance | Specialized mandate |
| Peer group | Reflects competing managers | Survivorship and composition biases | Supplemental competitive context |

### Worked example 4: blended custom benchmark

```example
Problem
A mandate is 50% domestic equity, 30% global equity, and 20% bonds. Component index returns are 8%, 5%, and 2%.

Step-by-step solution
1. Multiply each return by its benchmark weight.
2. Contributions are 4.0%, 1.5%, and 0.4%.
3. Sum contributions: custom benchmark return = 5.9%.

Interpretation
The custom benchmark represents the mandate's intended mixed opportunity set.

Exam insight
Benchmark weights must sum to 100%, and component returns must cover the same period.
```

### Worked example 5: peer median

```example
Problem
Five comparable funds return 2%, 4%, 5%, 7%, and 12%. The portfolio returns 6%.

Step-by-step solution
1. Order peer returns (already ordered).
2. The middle observation is 5%, the peer median.
3. Portfolio excess over median = 6% − 5% = 1%.

Interpretation
The portfolio beat the median peer, but this alone does not establish risk-adjusted skill.

Exam insight
An extreme peer return affects the mean more than the median.
```

> [!TIP]
> Knowledge check 3: Which benchmark best mirrors a specialized multi-asset mandate? Usually a **custom benchmark**.

## Benchmark rebalancing

Rebalancing restores benchmark weights according to a stated rule. Without it, outperforming segments grow in weight, changing the benchmark's risk exposure. Rebalancing frequency affects turnover and benchmark return.

### Worked example 6: drift and rebalance

```example
Problem
A 50/50 benchmark starts with 100 in equities and 100 in bonds. Equities rise 20%; bonds are unchanged.

Step-by-step solution
1. Ending values before rebalance: 120 equity and 100 bonds.
2. Total value = 220.
3. Drifted weights = 54.55% equity and 45.45% bonds.
4. A 50/50 rebalance sets each sleeve to 110: sell 10 equity and buy 10 bonds.

Interpretation
Rebalancing restores intended risk rather than predicting which asset will outperform next.

Exam insight
Calculate drift from market values before determining trades.
```

## Tracking difference and tracking error

**Tracking difference** is portfolio return minus benchmark return for a period. **Tracking error** describes the variability of tracking differences across periods. A passive portfolio may have a small negative average difference because of fees, taxes, trading costs, or imperfect replication while still having low tracking error.

```formula
Tracking difference = Portfolio return − Benchmark return
```

| Measure | What it captures | Sign/scale |
|---|---|---|
| Tracking difference | One period's relative return | Positive or negative percentage points |
| Tracking error | Variability of relative returns | Non-negative dispersion measure |

### Worked example 7: tracking difference

```example
Problem
A fund returns 7.6% and its benchmark returns 8.0%.

Step-by-step solution
1. Tracking difference = 7.6% − 8.0%.
2. Result = −0.4 percentage point.
3. Identify likely sources before judging implementation.

Interpretation
The fund lagged the benchmark by 40 basis points for the period.

Exam insight
Keep the subtraction order consistent: portfolio minus benchmark.
```

### Worked example 8: same average, different consistency

```example
Problem
Fund A tracking differences are −0.2%, −0.2%, −0.2%. Fund B differences are +1.0%, −1.8%, +0.2%.

Step-by-step solution
1. Each fund's average difference is −0.2%.
2. Fund A never deviates from that average.
3. Fund B varies widely around it.
4. Fund B therefore has higher tracking error conceptually.

Interpretation
Average relative performance and consistency are separate dimensions.

Exam insight
Tracking error is about dispersion, not whether average tracking difference is positive.
```

> [!TIP]
> Knowledge check 4: Can a fund have zero average tracking difference but positive tracking error? **Yes**, if positive and negative deviations offset.

## Performance attribution overview

Attribution decomposes relative return into sources. At a high level, **allocation effects** arise from holding different segment weights than the benchmark, **selection effects** arise from different security performance within segments, and interaction captures their joint effect. Attribution is diagnostic; it depends on a credible benchmark.

### Worked example 9: allocation intuition

```example
Problem
The benchmark assigns 20% to a sector that returns 10%. A portfolio assigns 30%; the total benchmark return is 6%.

Step-by-step solution
1. Active sector weight = 30% − 20% = 10%.
2. Sector advantage over benchmark = 10% − 6% = 4%.
3. Approximate allocation effect = 10% × 4% = +0.40%.

Interpretation
Overweighting a benchmark-leading sector contributed positively before selection and interaction effects.

Exam insight
Good allocation is not the same as good security selection.
```

## Selection mistakes and limitations

Common errors include choosing with hindsight, comparing different currencies or periods, ignoring risk and constraints, using a non-investable reference, allowing style mismatch, overlooking index changes, and treating peer rankings as bias-free. Benchmarks also simplify reality: indices incur no real-world tax circumstances, custom benchmarks require judgment, and any reference can fail to capture all investor objectives.

### Worked example 10: currency mismatch

```example
Problem
A euro-based portfolio earns 5% in euros. A US index earns 7% in dollars, but the dollar depreciates 4% versus the euro.

Step-by-step solution
1. Recognize that 5% and 7% are in different currencies.
2. Translate the benchmark: (1.07)(0.96) − 1 = 2.72% in euros.
3. Comparable excess return = 5.00% − 2.72% = 2.28%.

Interpretation
The portfolio outperformed after placing both returns in the investor's currency.

Exam insight
Match currency, horizon, and return convention before subtraction.
```

> [!TIP]
> Knowledge check 5: A benchmark that cannot be replicated fails which quality? **Investability.**

> [!TIP]
> Knowledge check 6: Attribution against a style-mismatched benchmark is likely **misleading**, because active effects include structural mismatch.

## Common mistakes

- Selecting the benchmark after seeing performance.
- Equating popularity with appropriateness.
- Comparing returns across different currencies or dates.
- Confusing tracking difference with tracking error.
- Treating peer groups as free of survivorship or composition bias.
- Ignoring benchmark drift and rebalancing rules.
- Claiming manager skill from raw relative return without considering risk.

## Memory tricks and exam tips

> [!TIP]
> **SAMURAI:** Specified, Appropriate, Measurable, Unambiguous, Reflective, Accountable, Investable.

> [!TIP]
> **Difference is direction; error is wobble.** Tracking difference shows lead or lag, while tracking error shows variability.

- Write “portfolio minus benchmark” before calculating relative return.
- Ask whether the benchmark reflects the manager's actual opportunity set.
- Separate policy (strategic) from temporary positioning (tactical).
- Treat attribution as an explanation of relative return, not proof of persistent skill.

## Revision sheet

| Prompt | Core response |
|---|---|
| Long-term policy reference | Strategic benchmark |
| Short-term authorized positioning | Tactical benchmark |
| Fixed target or inflation plus spread | Absolute benchmark |
| Published market segment | Market index |
| Specialized mandate | Custom benchmark |
| Competing managers | Peer group, with bias cautions |
| One-period lead or lag | Tracking difference |
| Consistency of relative return | Tracking error |
| Sources of excess return | Attribution |

## Quick summary

A useful benchmark is pre-specified, measurable, investable, appropriate, and consistent with the mandate. Strategic benchmarks express long-run policy; tactical benchmarks reflect authorized short-run positioning. Absolute and relative references answer different questions. Market, custom, and peer benchmarks offer different trade-offs. Rebalancing preserves intended exposures, tracking difference measures lead or lag, tracking error measures its variability, and attribution explains where relative return arose. Every conclusion is only as credible as the benchmark selected.
+
## One-page revision sheet

| Question | Benchmark requirement |
|---|---|
| What is being evaluated? | Match the manager's mandate and opportunity set |
| Can performance be measured? | Use transparent, observable rules |
| Is comparison investable? | Prefer a realistic alternative portfolio |
| Did the portfolio outperform? | Compare return and risk over matching periods |

## 30-second summary

A useful benchmark is specified in advance, measurable, appropriate, investable, and consistent with the mandate. Relative return and tracking difference are meaningful only when benchmark construction and comparison periods align.
## Official index-construction application lab

### Worked Example 11 — linked time-weighted return
**Problem.** Subperiod returns around an external cash flow are 5%, −2%, and 4%. **Solution.** $(1.05)(0.98)(1.04)-1=7.02\%$. **Interpretation.** Linking removes the size effect of the external flow. **Exam insight.** Do not average subperiod returns.

### Worked Example 12 — money-weighted sensitivity
**Problem.** A large contribution arrives immediately before the strongest period. **Solution.** The money-weighted return places more economic weight on that strong period, while time-weighted return does not. **Interpretation.** MWR reflects investor experience. **Exam insight.** Timing and size of external flows distinguish MWR from TWR.

### Worked Example 13 — price-weighted index
**Problem.** Prices are 20, 30, and 50 with divisor 3. **Solution.** Index value is $100/3=33.33$. After a 2-for-1 split of the 50 security, a new divisor preserves continuity: $75/d=33.33$, so $d=2.25$. **Interpretation.** A split must not create an economic index return. **Exam insight.** Adjust the divisor, not historical prices.

### Worked Example 14 — equal-weighted index
**Problem.** Three constituents return 12%, −3%, and 6%. **Solution.** Equal-weighted return is $(12-3+6)/3=5\%$. **Interpretation.** Each constituent contributes equally at rebalancing. **Exam insight.** Equal weighting requires periodic rebalancing.

### Worked Example 15 — capitalization weighting
**Problem.** Market values are 200, 300, and 500; returns are 4%, 8%, and −2%. **Solution.** Weights are 20%, 30%, 50%; return is $0.2(4)+0.3(8)+0.5(-2)=2.2\%$. **Interpretation.** The largest company has the greatest influence. **Exam insight.** Use beginning market values.

### Worked Example 16 — float adjustment
**Problem.** A company has value 800 but only 60% freely tradable. **Solution.** Float-adjusted value is $800(0.60)=480$. **Interpretation.** Strategic holdings are excluded from investable weighting. **Exam insight.** Apply the float factor before determining index weights.

### Worked Example 17 — total-return index
**Problem.** A price index rises from 2,000 to 2,050 and constituent distributions equal 20 index points. **Solution.** Price return is 2.50%; total return is $(2,050-2,000+20)/2,000=3.50\%$. **Interpretation.** The 1-point difference is distribution return. **Exam insight.** State the index convention.

### Worked Example 18 — reconstitution effect
**Problem.** An index replaces a 4% weight constituent without changing index level at the effective moment. **Solution.** The provider adjusts shares/divisor so the replacement itself produces zero mechanical return. **Interpretation.** Subsequent returns reflect the new basket. **Exam insight.** Reconstitution changes membership; rebalancing changes weights.

> **Knowledge Check 7.** Which measure is preferred for a manager who does not control external flows? **Answer:** TWR.
> **Knowledge Check 8.** Which weighting gives the highest-priced security the greatest influence? **Answer:** Price weighting.
> **Knowledge Check 9.** What is reconstitution? **Answer:** Changing index membership under the provider’s rules.
> **Knowledge Check 10.** Why adjust an index divisor? **Answer:** To prevent non-economic events from changing the index level.

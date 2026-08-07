# Sampling and Estimation

## Introduction

Investment decisions often concern a large population—every customer, trade, fund, or possible return—but analysts usually observe only a sample. Sampling determines how evidence is collected; estimation turns that evidence into disciplined statements about the population. Good arithmetic cannot rescue a biased sample, and a representative sample still carries uncertainty.

## Why this topic matters

Research conclusions, manager comparisons, risk estimates, and market surveys all depend on sample design. This lesson builds the judgment to select a sampling method, distinguish sampling from nonsampling error, understand sampling distributions, and construct and interpret confidence intervals without overstating what they prove.

## Official learning outcomes

Use these stored outcomes as the scope boundary:

1. Compare probability and non-probability sampling methods and sources of sampling error.
2. Explain sampling distributions, the Central Limit Theorem, standard error, and estimator properties.
3. Calculate and interpret confidence intervals for a population mean using Z or Student's t.

## 1. Population, sample, parameter, and statistic

| Term | Meaning | Example |
|---|---|---|
| Population | Entire group of interest | All bonds in an index |
| Sample | Observed subset | 80 selected bonds |
| Parameter | Fixed, usually unknown population feature | Population mean spread μ |
| Statistic | Sample-based quantity | Sample mean spread x̄ |
| Estimator | Rule used before observing data | The sample-mean formula |
| Estimate | Realized value after applying the rule | x̄ = 112 bp |

A sound process defines the population, constructs a sampling frame, chooses a method, collects consistent measurements, checks data quality, and quantifies uncertainty.

```example
### Worked example 1 — Parameter or statistic?
**Problem.** An analyst calculates an average fee of 0.74% from 60 funds and wants the average for all 900 eligible funds.

**Step-by-step solution.** (1) The 900 funds are the population. (2) The 60 observed funds are the sample. (3) The 0.74% sample mean is a statistic and an estimate. (4) The unknown average across 900 funds is the parameter.

**Interpretation.** The estimate is evidence about the parameter, not the parameter itself.

**Exam insight.** “Estimator” is the rule; “estimate” is its realized number.
```

> **Knowledge check 1.** Is a population parameter random after the population is fixed? **Answer:** No. The statistic varies across possible samples; the parameter is fixed but unknown.

## 2. Probability sampling methods

Probability sampling gives population units a known selection mechanism. This supports probability-based inference when the frame and execution are sound.

| Method | Selection rule | Strength | Typical concern |
|---|---|---|---|
| Simple random | Every size-n sample has equal chance | Direct and transparent | Needs a complete frame |
| Systematic | Random start, then every kth unit | Operationally efficient | Periodicity can bias selection |
| Stratified random | Random samples within defined strata | Ensures subgroup representation | Requires useful strata and weights |
| Cluster | Randomly select groups, then observe units in them | Cuts geographic or operational cost | Units within clusters may be similar |

```example
### Worked example 2 — Simple random sampling
**Problem.** From 2,000 client accounts, software assigns random numbers and selects the 100 smallest.

**Step-by-step solution.** Every account participates in the same random mechanism; no grouping or fixed interval is used. The method is simple random sampling.

**Interpretation.** Random selection reduces deliberate selection bias, though nonresponse can still distort results.

**Exam insight.** Random selection does not guarantee a perfectly representative realized sample.
```

```example
### Worked example 3 — Systematic sampling
**Problem.** An auditor randomly starts at invoice 7 and reviews every 25th invoice.

**Step-by-step solution.** The random start plus fixed interval identifies systematic sampling. If invoice ordering repeats every 25 records, selection may align with that pattern.

**Interpretation.** Efficiency is gained, but periodicity must be investigated.

**Exam insight.** A nonrandom first unit weakens the probability design.
```

```example
### Worked example 4 — Stratified random sampling
**Problem.** A universe is 60% investment-grade and 40% high-yield. The analyst randomly selects 60 and 40 bonds from the respective groups.

**Step-by-step solution.** The universe is divided into nonoverlapping strata, followed by random selection within each. Proportional allocation preserves the universe mix.

**Interpretation.** Stratification can improve precision when observations are similar within a stratum but different across strata.

**Exam insight.** Selecting some entire groups is cluster sampling; sampling within every group is stratified sampling.
```

```example
### Worked example 5 — Cluster sampling
**Problem.** A firm randomly selects 8 of 50 branches and surveys all advisers in those branches.

**Step-by-step solution.** Branches are natural clusters. Whole selected clusters are observed, so the design is cluster sampling.

**Interpretation.** Travel cost falls, but advisers in the same branch may be correlated, reducing information relative to an equally sized simple random sample.

**Exam insight.** Clusters should resemble miniature populations; strata should be internally homogeneous.
```

> **Knowledge check 2.** Randomly sampling from every sector is stratified, not cluster sampling.

## 3. Non-probability sampling

| Method | How observations enter | Advantage | Inference limitation |
|---|---|---|---|
| Convenience | Easy availability | Fast and inexpensive | Selection probabilities unknown |
| Judgmental | Researcher deliberately selects cases | Uses expertise for focused work | Subjective selection can bias results |

```example
### Worked example 6 — Convenience versus judgmental
**Problem.** Surveying conference attendees at the nearest booth is compared with deliberately selecting five veteran credit analysts.

**Step-by-step solution.** Easy access makes the first convenience sampling. Expertise-based deliberate choice makes the second judgmental sampling.

**Interpretation.** Either may be useful for exploratory work, but neither automatically supports population-wide error bounds.

**Exam insight.** “Carefully chosen” does not mean probability sampled.
```

## 4. Sampling and nonsampling error

| Error | Source | Reduced by larger n? | Example |
|---|---|---|---|
| Sampling error | Chance difference between sample statistic and parameter | Usually | Sample mean differs from μ |
| Coverage error | Frame omits or duplicates units | Not necessarily | Database excludes closed funds |
| Nonresponse error | Selected units do not respond | Not necessarily | Dissatisfied clients reply more often |
| Measurement error | Variable recorded inaccurately | Not necessarily | Ambiguous survey wording |
| Processing error | Coding, entry, or calculation mistake | Not necessarily | Returns entered as percentages inconsistently |

```example
### Worked example 7 — Classifying error
**Problem.** A random survey of 1,000 investors omits anyone without an email address.

**Step-by-step solution.** Random variation remains sampling error. The missing no-email group is coverage error, a nonsampling error. Increasing the email sample to 10,000 does not restore omitted investors.

**Interpretation.** Precision around a biased target can create false confidence.

**Exam insight.** Larger samples primarily reduce sampling error, not systematic design errors.
```

> **Knowledge check 3.** Does a census eliminate all error? **Answer:** It eliminates sampling error but can retain measurement, coverage, and processing errors.

## 5. Sampling distributions and the Central Limit Theorem

A sampling distribution is the probability distribution of a statistic across all possible samples of a fixed design and size. For independent observations with finite variance, the Central Limit Theorem (CLT) says the standardized sample mean approaches a normal distribution as sample size grows. It does not say the raw population becomes normal, and “large enough” depends on skewness, tails, and dependence.

| Distribution | What varies | Center | Spread |
|---|---|---|---|
| Population distribution | Individual X | μ | σ |
| One sample's data | Observations in a realized sample | x̄ | s |
| Sampling distribution of x̄ | Sample mean across repeated samples | μ when unbiased | σ/√n |

The standard error of the mean is `SE(x̄) = σ/√n`, or `s/√n` when σ is estimated. The square-root relation matters: quadrupling n halves standard error.

```example
### Worked example 8 — Standard error with known σ
**Problem.** Population standard deviation is 12% and n = 36.

**Step-by-step solution.** SE = 12%/√36 = 12%/6 = 2%.

**Interpretation.** Across repeated size-36 samples, sample means have a standard deviation of 2%.

**Exam insight.** Divide by √n, not n.
```

```example
### Worked example 9 — Effect of sample size
**Problem.** With σ = 18%, compare n = 25 and n = 100.

**Step-by-step solution.** SE25 = 18%/5 = 3.6%. SE100 = 18%/10 = 1.8%.

**Interpretation.** Four times the sample size halves standard error.

**Exam insight.** Precision has diminishing returns in n.
```

```example
### Worked example 10 — Estimated standard error
**Problem.** For n = 64 and sample standard deviation 16 bp, estimate SE.

**Step-by-step solution.** Because σ is unknown, use s: SE ≈ 16/√64 = 2 bp.

**Interpretation.** The estimated sampling spread of x̄ is 2 bp.

**Exam insight.** Using s introduces additional uncertainty, motivating t inference.
```

```example
### Worked example 11 — CLT judgment
**Problem.** Individual trade sizes are right-skewed. An analyst averages 150 approximately independent trades.

**Step-by-step solution.** The population need not be normal. With finite variance and a reasonably large independent sample, the sample mean may be approximately normal under the CLT.

**Interpretation.** The claim concerns the sampling distribution of the mean, not individual trade sizes.

**Exam insight.** Dependence or extremely heavy tails can undermine the usual approximation.
```

> **Knowledge check 4.** If n rises from 49 to 196, SE becomes one-half as large.

## 6. Point estimators and desirable properties

| Property | Meaning | Comparison idea |
|---|---|---|
| Unbiasedness | Expected estimator equals the parameter | Centered correctly over repetitions |
| Efficiency | Smaller variance among unbiased estimators | Tighter sampling distribution |
| Consistency | Converges toward the parameter as n grows | Error tends to shrink with information |

```example
### Worked example 12 — Unbiasedness
**Problem.** Estimator A has repeated-sample mean 5.0 when the parameter is 5.0; estimator B has repeated-sample mean 5.3.

**Step-by-step solution.** A is unbiased because E(A)=5.0. B has bias 5.3−5.0=0.3.

**Interpretation.** One estimate from A can still miss 5.0; unbiasedness is a repeated-sampling property.

**Exam insight.** Unbiased does not mean error-free.
```

```example
### Worked example 13 — Efficiency
**Problem.** Two unbiased estimators have variances 4 and 7.

**Step-by-step solution.** Both are correctly centered. The estimator with variance 4 is more efficient because it is more concentrated around the parameter.

**Interpretation.** Efficiency compares sampling variability, normally among unbiased candidates.

**Exam insight.** Do not confuse low variance with zero bias.
```

```example
### Worked example 14 — Consistency
**Problem.** An estimator's bias and variance both approach zero as n increases.

**Step-by-step solution.** Its estimates concentrate on the true parameter as information grows, satisfying consistency.

**Interpretation.** Consistency is an asymptotic property and does not promise accuracy in a small sample.

**Exam insight.** A biased estimator can still be consistent if its bias vanishes with n.
```

> **Knowledge check 5.** Can an efficient estimator be biased? **Answer:** Efficiency is usually compared within a stated class; low variance alone does not establish unbiasedness.

## 7. Confidence intervals

A confidence interval has the form `point estimate ± critical value × standard error`. The confidence level describes the long-run coverage rate of intervals constructed by the same valid procedure. After one interval is computed, the unknown parameter is fixed: avoid saying there is a 95% probability that it lies in that particular frequentist interval.

| Situation | Interval | Critical distribution |
|---|---|---|
| Population σ known | x̄ ± z* σ/√n | Standard normal |
| Population σ unknown | x̄ ± t* s/√n | Student's t with df=n−1 |

Margin of error is `critical value × SE`. A higher confidence level, greater variability, or smaller sample increases the margin, all else equal.

```example
### Worked example 15 — 95% Z interval
**Problem.** x̄ = 8%, σ = 12%, n = 36. Construct a 95% interval using z*=1.96.

**Step-by-step solution.** SE=12%/6=2%. Margin=1.96×2%=3.92%. Bounds=8%±3.92%=[4.08%,11.92%].

**Interpretation.** In repeated use under the assumptions, 95% of intervals made this way cover μ.

**Exam insight.** Known σ, not merely large n, is the direct reason for the Z formula here.
```

```example
### Worked example 16 — 90% Z interval
**Problem.** x̄ = 52, σ = 10, n = 100; z*=1.645.

**Step-by-step solution.** SE=10/10=1. Margin=1.645. Interval=[50.355,53.645].

**Interpretation.** Lower confidence gives a narrower interval than 95% with the same data.

**Exam insight.** Confidence and precision trade off when n and variability are fixed.
```

```example
### Worked example 17 — 95% t interval
**Problem.** x̄ = 14.0, s = 4.0, n = 16; use t*=2.131 for df=15.

**Step-by-step solution.** SE=4/4=1. Margin=2.131×1=2.131. Interval=[11.869,16.131].

**Interpretation.** t accounts for estimating σ, with heavier tails particularly visible at small df.

**Exam insight.** Degrees of freedom equal n−1 for a one-sample mean.
```

```example
### Worked example 18 — 99% Z interval
**Problem.** x̄=120 bp, σ=30 bp, n=100; z*=2.576.

**Step-by-step solution.** SE=30/10=3 bp. Margin=2.576×3=7.728 bp. Interval=[112.272,127.728] bp.

**Interpretation.** The 99% procedure seeks more coverage and therefore uses a wider interval.

**Exam insight.** Keep units consistent throughout.
```

```example
### Worked example 19 — Unknown σ and larger n
**Problem.** x̄=6.5%, s=9%, n=81; use t*=1.990 for df=80.

**Step-by-step solution.** SE=9%/9=1%. Margin=1.990%. Interval=[4.510%,8.490%].

**Interpretation.** With many degrees of freedom, t approaches the normal distribution but the unknown-σ procedure remains t based.

**Exam insight.** “Large sample” does not turn an unknown σ into a known one.
```

```example
### Worked example 20 — Margin and sample size
**Problem.** σ=20 and z*=1.96. Compare margins for n=25 and n=100.

**Step-by-step solution.** For n=25, SE=4 and margin=7.84. For n=100, SE=2 and margin=3.92.

**Interpretation.** Quadrupling sample size halves the margin when other inputs are fixed.

**Exam insight.** Margin scales with 1/√n.
```

> **Knowledge check 6.** Unknown population variance and n=20 imply t with 19 degrees of freedom.

> **Knowledge check 7.** Raising confidence from 90% to 99% widens the interval, all else equal.

> **Knowledge check 8.** Doubling sample standard deviation doubles the estimated standard error.

> **Knowledge check 9.** A 95% interval does not mean 95% of population observations lie inside it; it targets a population parameter.

> **Knowledge check 10.** A narrow interval from a biased convenience sample can be precise for the wrong target.

## Distributional assumptions and practical cautions

Z inference uses a normal sampling model with known population variance. t inference replaces σ with s and uses heavier tails. Exact small-sample inference for a mean generally needs an approximately normal population; for large samples the CLT may support approximation. Independence, representative selection, stable measurement, and finite variability remain substantive requirements.

## Common mistakes

- Dividing standard deviation by n instead of √n.
- Calling a realized estimate an estimator.
- Treating random sampling as proof that no bias occurred.
- Confusing stratified sampling with cluster sampling.
- Assuming a larger sample repairs coverage or measurement error.
- Using Z solely because n is large when σ is unknown.
- Using df=n rather than n−1 for a one-sample t interval.
- Interpreting 95% confidence as a posterior probability about a fixed μ.
- Saying 95% of observations fall inside a confidence interval for the mean.

## Memory aids

- **Strata: sample Some from every Section. Clusters: choose Complete groups.**
- **SE shrinks by the square root.** Four times n, half the SE.
- **Unknown σ? t takes over.**
- **Confidence costs width.** More coverage requires a larger critical value.
- **U-E-C:** unbiased is centered, efficient is concentrated, consistent converges.

## Exam tips

1. Identify the target population before judging a design.
2. Look for “every kth” (systematic), “within every group” (stratified), or “whole groups” (cluster).
3. Label σ known or unknown before selecting Z or t.
4. Compute SE before margin of error.
5. State interval interpretations in repeated-sampling language.
6. Diagnose bias separately from sampling variability.

## One-page revision sheet

| Item | Decision or formula |
|---|---|
| Simple random | Equal random mechanism across units |
| Systematic | Random start, every kth unit |
| Stratified | Random observations within every stratum |
| Cluster | Random groups, observe units in chosen groups |
| Convenience / judgmental | Non-probability methods |
| Standard error | σ/√n, estimated by s/√n |
| CLT | Sampling distribution of x̄ approaches normality under conditions |
| Unbiased | E(estimator)=parameter |
| Efficient | Smaller variance among comparable estimators |
| Consistent | Converges to parameter as n grows |
| Known σ interval | x̄ ± z*σ/√n |
| Unknown σ interval | x̄ ± t*s/√n, df=n−1 |
| Wider interval | Higher confidence, greater variability, or smaller n |

## 30-second summary

Sampling design controls whose evidence enters; estimation quantifies what that evidence says. Probability methods include simple random, systematic, stratified, and cluster sampling, while convenience and judgmental methods lack known selection probabilities. The sample mean's standard error falls with √n, and the CLT concerns its sampling distribution. Strong estimators are evaluated for unbiasedness, efficiency, and consistency. Confidence intervals equal estimate ± critical value × SE: use Z with known σ and t with unknown σ, using n−1 degrees of freedom. Interpret confidence as long-run procedure coverage, never as certainty about one realized interval.

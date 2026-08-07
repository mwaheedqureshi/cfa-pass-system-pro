# Common Probability Distributions

> [!INFO]
> This independently written chapter uses the stored learning-outcome references as its scope. It is not official curriculum text.

## Why distributions matter

A probability distribution connects possible values with their likelihoods. Selecting a suitable distribution helps analysts model event counts, standardized returns, positive asset prices, and uncertainty in estimates. A model is a disciplined simplification—not a claim that markets follow it exactly.

## Learning outcomes

Distinguish discrete and continuous distributions; calculate and interpret Bernoulli, binomial, uniform, normal, lognormal, and Student's t quantities; standardize observations; and select distributions with appropriate limitations.

## Random variables, PMFs, PDFs, and CDFs

A discrete random variable has countable values; a continuous variable can take values over an interval. A probability mass function (PMF) assigns probability to discrete points. A probability density function (PDF) has area—not height alone—as probability. A cumulative distribution function (CDF) gives `P(X ≤ x)` for either type.

| Feature | Discrete | Continuous |
|---|---|---|
| Values | Countable | Interval continuum |
| Point probability | May be positive | Zero at an exact point |
| Function | PMF | PDF |
| Probability | Sum masses | Integrate density area |

| Function | Meaning | Validity condition |
|---|---|---|
| PMF | `P(X=x)` | Masses nonnegative and sum to 1 |
| PDF | Relative density | Nonnegative and total area 1 |
| CDF | `P(X≤x)` | Nondecreasing from 0 to 1 |

```formula
E(X)=ΣxP(X=x); Var(X)=E[(X−μ)²]
```

### Worked example 1: discrete uniform

```example
Problem
A fair six-sided die defines X as its face value. Find P(X≤2) and E(X).
Step-by-step solution
1. Each value has probability 1/6.
2. P(X≤2)=2/6=1/3.
3. E(X)=(1+2+3+4+5+6)/6=3.5.
Interpretation
The expected value is the long-run average, not a possible single die result.
Exam insight
Discrete-uniform probabilities are equal across the finite support.
```

> [!TIP]
> Knowledge check 1: Is PDF height itself a probability? **No; probability is area under the density.**

## Bernoulli and binomial distributions

A Bernoulli trial has success (`1`) or failure (`0`) with constant success probability `p`. A binomial variable counts successes in `n` independent, identically structured Bernoulli trials.

```formula
Bernoulli: E(X)=p; Var(X)=p(1−p)
Binomial: P(X=x)=C(n,x)p^x(1−p)^(n−x)
E(X)=np; Var(X)=np(1−p)
```

| Binomial requirement | Question to ask |
|---|---|
| Fixed trials | Is n established in advance? |
| Two outcomes per trial | Can each trial be classified success/failure? |
| Constant p | Is success probability unchanged? |
| Independence | Does one trial avoid changing another? |

### Worked example 2: Bernoulli moments

```example
Problem
A bond defaults with probability 0.03. Let X=1 for default. Find mean and variance.
Step-by-step solution
1. E(X)=p=0.03.
2. Var(X)=0.03(0.97)=0.0291.
Interpretation
The Bernoulli mean equals the event probability.
Exam insight
The standard deviation is the square root of 0.0291, not 0.0291 itself.
```

### Worked example 3: exact binomial probability

```example
Problem
Five independent projects each succeed with probability 0.40. Find P(X=2).
Step-by-step solution
1. C(5,2)=10.
2. P(X=2)=10(0.4²)(0.6³).
3. Result=0.3456.
Interpretation
Exactly two successes occur with probability 34.56% under the model.
Exam insight
The combination counts every ordering of two successes.
```

### Worked example 4: binomial cumulative probability

```example
Problem
Using n=5 and p=0.40, find P(X≤2).
Step-by-step solution
1. P(0)=0.6⁵=0.07776.
2. P(1)=5(0.4)(0.6⁴)=0.25920.
3. Add P(2)=0.34560.
4. P(X≤2)=0.68256.
Interpretation
Two or fewer successes occur about 68.26% of the time.
Exam insight
“At most” includes the stated boundary.
```

### Worked example 5: binomial complement

```example
Problem
For n=5 and p=0.40, find P(X≥1).
Step-by-step solution
1. Use the complement: P(X≥1)=1−P(X=0).
2. P(0)=0.6⁵=0.07776.
3. Result=0.92224.
Interpretation
At least one success has probability 92.224%.
Exam insight
The complement often avoids adding many terms.
```

### Worked example 6: binomial mean and variance

```example
Problem
Twenty independent applications have success probability 0.25. Find expected successes and variance.
Step-by-step solution
1. Mean=np=20(0.25)=5.
2. Variance=np(1−p)=20(0.25)(0.75)=3.75.
3. Standard deviation=√3.75=1.936.
Interpretation
Five is the long-run average count, with typical dispersion about 1.94 successes.
Exam insight
Keep count units distinct from success probability.
```

> [!TIP]
> Knowledge check 2: What phrase suggests a complement? **“At least one.”**
>
> Knowledge check 3: Does binomial modeling require constant p and independent trials? **Yes.**

## Continuous uniform distribution

For a continuous uniform variable on `[a,b]`, equal-length subintervals have equal probability.

```formula
E(X)=(a+b)/2; Var(X)=(b−a)²/12
```

### Worked example 7: continuous uniform interval

```example
Problem
X is uniform from 2 to 10. Find P(4≤X≤7), mean, and variance.
Step-by-step solution
1. Probability=interval length/total length=(7−4)/(10−2)=3/8=0.375.
2. Mean=(2+10)/2=6.
3. Variance=(10−2)²/12=64/12=5.333.
Interpretation
Probability depends only on relative interval length.
Exam insight
Endpoint inclusion does not change a continuous probability.
```

## Normal and standard normal distributions

The normal distribution is symmetric and determined by mean `μ` and positive standard deviation `σ`. Standardization maps an observation to the standard normal distribution.

```formula
Z=(X−μ)/σ; X=μ+Zσ
```

| Normal property | Interpretation |
|---|---|
| Symmetric | Mean=median=mode |
| Unbounded support | Modeled values range from −∞ to +∞ |
| Standard normal | Mean 0, standard deviation 1 |
| Tail probability | Area beyond a cutoff |

### Worked example 8: positive Z-score

```example
Problem
A return is 11%, with modeled mean 8% and standard deviation 6%. Find Z.
Step-by-step solution
1. Difference=11%−8%=3%.
2. Divide by 6%: Z=0.50.
Interpretation
The observation is one-half standard deviation above the mean.
Exam insight
Numerator and denominator must use the same units.
```

### Worked example 9: negative Z-score

```example
Problem
An observation is 70, with mean 100 and standard deviation 15. Find Z.
Step-by-step solution
1. Z=(70−100)/15.
2. Z=−2.00.
Interpretation
The observation lies two standard deviations below the mean.
Exam insight
The sign records direction relative to the mean.
```

### Worked example 10: lower-tail probability

```example
Problem
For a standard normal variable, find P(Z≤1.00).
Step-by-step solution
1. Use the standard-normal CDF at 1.00.
2. Φ(1.00)≈0.8413.
Interpretation
About 84.13% of modeled outcomes lie at or below one standard deviation above the mean.
Exam insight
A CDF is a lower-tail probability.
```

### Worked example 11: upper-tail probability

```example
Problem
Find P(Z>1.645).
Step-by-step solution
1. Φ(1.645)≈0.9500.
2. Upper tail=1−0.9500=0.0500.
Interpretation
About 5% of standard-normal outcomes exceed 1.645.
Exam insight
Upper tail requires a complement of the lower-tail table value.
```

### Worked example 12: central probability

```example
Problem
Find P(−1.96≤Z≤1.96).
Step-by-step solution
1. Φ(1.96)≈0.9750 and Φ(−1.96)≈0.0250.
2. Difference=0.9500.
Interpretation
The central interval contains about 95% under standard normality.
Exam insight
Subtract the lower CDF from the upper CDF.
```

### Worked example 13: reverse standardization

```example
Problem
Mean return is 5%, standard deviation 4%, and Z=1.25. Find the raw return.
Step-by-step solution
1. X=μ+Zσ.
2. X=5%+1.25(4%)=10%.
Interpretation
Ten percent is 1.25 standard deviations above the mean.
Exam insight
Reverse standardization multiplies before adding the mean.
```

> [!TIP]
> Knowledge check 4: A negative Z-score lies on which side of the mean? **Below it.**
>
> Knowledge check 5: What does Φ(z) report? **A lower-tail probability.**
>
> Knowledge check 6: Does normal density height equal probability? **No; interval area does.**

## Lognormal distribution

If `Y=ln(X)` is normal, positive `X=e^Y` is lognormal. Lognormal variables are right-skewed and bounded below by zero, which can suit simplified models of asset prices when continuously compounded returns are modeled as normal. Real prices may still depart materially from this assumption.

```formula
If Y~N(μ,σ²), X=e^Y; Median(X)=e^μ; E(X)=e^(μ+σ²/2)
```

| Normal | Lognormal |
|---|---|
| Symmetric | Positively skewed |
| Can be negative | Strictly positive |
| Additive shocks | Multiplicative levels |
| Mean=median | Mean exceeds median when σ>0 |

### Worked example 14: lognormal median

```example
Problem
Log price Y has μ=4. Find the median modeled price X=e^Y.
Step-by-step solution
1. Median(X)=e^μ.
2. e⁴≈54.598.
Interpretation
Half the modeled prices lie below approximately 54.60.
Exam insight
The lognormal median does not include the variance adjustment.
```

### Worked example 15: lognormal mean

```example
Problem
Log price has μ=4 and σ=0.20. Find E(X).
Step-by-step solution
1. σ²/2=0.04/2=0.02.
2. E(X)=e^(4.02)≈55.701.
Interpretation
Right skew makes the modeled mean exceed the median.
Exam insight
Use log variance, not log standard deviation, in the adjustment.
```

### Worked example 16: price interpretation

```example
Problem
A model requires strictly positive asset prices and permits a long right tail. Choose normal or lognormal.
Step-by-step solution
1. Normal support includes negative values.
2. Lognormal support is positive and right-skewed.
3. Select lognormal as the closer simplified model.
Interpretation
The choice matches support and shape, not guaranteed market behavior.
Exam insight
Normal log returns can imply lognormal price levels under stated assumptions.
```

> [!TIP]
> Knowledge check 7: Which can take negative modeled values—normal or lognormal? **Normal.**
>
> Knowledge check 8: In a nondegenerate lognormal distribution, which is larger, mean or median? **Mean.**

## Student's t-distribution

Student's t is symmetric like normal but has heavier tails, especially at low degrees of freedom. As degrees of freedom rise, it approaches standard normal. It is useful when estimating a mean with unknown population variance.

```formula
t=(x̄−μ₀)/(s/√n); df=n−1
```

| Feature | Standard normal | Student's t |
|---|---|---|
| Shape | Symmetric | Symmetric, heavier tails |
| Parameter | None after standardization | Degrees of freedom |
| Variance input for mean inference | Population σ known | Population σ unknown; sample s used |
| Critical value | Smaller | Larger at finite df |

### Worked example 17: t statistic

```example
Problem
Sample mean=12, hypothesized mean=10, sample standard deviation=5, n=25. Find t.
Step-by-step solution
1. Standard error=5/√25=1.
2. t=(12−10)/1=2.00.
3. df=25−1=24.
Interpretation
The sample mean is two estimated standard errors above the hypothesized mean.
Exam insight
Unknown population variance leads to sample s and t.
```

### Worked example 18: degrees of freedom

```example
Problem
A mean estimate uses a sample of 12 observations with unknown population variance. Find df and compare tails with normal.
Step-by-step solution
1. df=n−1=11.
2. A t distribution with 11 df has heavier tails than standard normal.
Interpretation
Extra tail area reflects uncertainty from estimating σ.
Exam insight
Degrees of freedom depend on the estimation setting; here it is n−1.
```

### Worked example 19: t versus Z critical value

```example
Problem
For a two-sided 95% interval with df=9, compare t critical≈2.262 with Z critical≈1.960.
Step-by-step solution
1. Both multiply the same standard-error concept.
2. 2.262>1.960, so the t-based margin is wider.
Interpretation
Small-sample variance uncertainty demands a larger critical value.
Exam insight
Do not use Z merely because a normal-looking curve is shown when σ is unknown.
```

> [!TIP]
> Knowledge check 9: What happens to t as df grows? **It approaches standard normal.**
>
> Knowledge check 10: Why are finite-df t critical values larger? **Heavier tails reflect variance-estimation uncertainty.**

## Distribution selection and limitations

| Analytical task | Candidate distribution | Key condition |
|---|---|---|
| One success/failure | Bernoulli | One binary trial |
| Count successes | Binomial | Fixed n, constant p, independence |
| Bounded flat interval | Continuous uniform | Constant density |
| Symmetric unbounded measure | Normal | Model fit supports symmetry/tails |
| Positive multiplicative level | Lognormal | Log variable approximately normal |
| Mean inference, σ unknown | Student's t | Appropriate sampling assumptions |

Common mistakes include confusing mass with density, reversing tails, omitting binomial combinations, treating `P(X≥x)` as `1−P(X≤x)`, applying normality without checking tails, and treating lognormal price modeling as a guarantee.

## Exam tips and memory aids

- **Mass at points; density over intervals.**
- **Z subtracts then scales.**
- **At least x = 1 − P(X≤x−1).**
- **Lognormal lives above zero; t carries heavier tails.**
- Draw the requested tail before using a table or calculator.

## One-page revision sheet

| Need | Tool |
|---|---|
| Binary outcome | Bernoulli |
| Success count | Binomial |
| Standardized normal position | Z-score |
| Positive right-skewed level | Lognormal |
| Unknown-σ mean inference | Student's t |
| Lower tail | CDF |
| Upper tail | 1−CDF |
| Between two bounds | CDF difference |

## 30-second summary

Discrete variables use probability masses; continuous variables use density areas. Bernoulli models one binary trial and binomial counts successes under fixed, independent trials with constant probability. Normal models symmetric unbounded values; Z-scores standardize them. Lognormal models positive right-skewed levels when logs are normal. Student's t has heavier tails for unknown-variance mean inference and approaches normal as degrees of freedom rise. Distribution choice must match support, process, and observed shape.
+
## Common mistakes

- Treating a continuous density height as a point probability.
- Reversing lower- and upper-tail probabilities.
- Omitting the combination term in a binomial probability.
- Treating a lognormal variable as symmetric.
- Using normal critical values when finite-degree t inference is required.

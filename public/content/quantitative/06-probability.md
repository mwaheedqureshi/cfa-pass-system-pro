# Statistical Distributions for Financial Asset Prices and Returns
> [!INFO]
> Original educational content scoped to stored learning-outcome references.
## Why probability matters
Probability converts uncertainty into consistent decision inputs. A random experiment produces outcomes; the sample space contains all outcomes; an event is a subset.
## Learning outcomes
Calculate and interpret unconditional, conditional, joint, total, and posterior probabilities; expected values; covariance; correlation; and two-asset portfolio risk.
## Events and probability sources
Mutually exclusive events cannot occur together; exhaustive events cover the sample space. Independent events do not change one another's probabilities. Empirical probability uses observed frequency, a priori probability uses logical symmetry, and subjective probability uses informed judgment.
| Probability basis | Source | Investment example |
|---|---|---|
| Empirical | Observed frequency | Historical default rate |
| A priori | Logical structure | Fair-die outcome |
| Subjective | Informed judgment | Policy-change probability |
| Pair | Meaning |
|---|---|
| Exclusive | P(A∩B)=0 |
| Exhaustive | P(A∪B)=1 |
| Independent | P(A|B)=P(A) |
| Dependent | Conditioning changes probability |
```formula
P(Aᶜ)=1−P(A)
P(A∪B)=P(A)+P(B)−P(A∩B)
P(A∩B)=P(A|B)P(B)
P(A|B)=P(A∩B)/P(B)
```
### Worked examples 1–6
```example
Problem
P(default)=3%. Find no-default probability.
Step-by-step solution
1−0.03=0.97.
Interpretation
No default has 97% probability.
Exam insight
Complements sum to one.
```
```example
Problem
P(A)=.4, P(B)=.3, P(A∩B)=.1. Find P(A∪B).
Step-by-step solution
.4+.3−.1=.6.
Interpretation
At least one occurs with 60% probability.
Exam insight
Subtract overlap once.
```
```example
Problem
P(B)=.5 and P(A|B)=.2. Find joint probability.
Step-by-step solution
.5×.2=.10.
Interpretation
Both occur 10% of the time.
Exam insight
Joint equals branch probabilities multiplied.
```
```example
Problem
P(A∩B)=.12 and P(B)=.30. Find P(A|B).
Step-by-step solution
.12/.30=.40.
Interpretation
Within B cases, 40% are A.
Exam insight
The condition belongs in the denominator.
```
```example
Problem
Fair die: probability of an even result?
Step-by-step solution
Three favorable outcomes of six: 1/2.
Interpretation
This is a priori probability.
Exam insight
Logical symmetry must be justified.
```
```example
Problem
Two independent events have probabilities .6 and .5. Find joint probability.
Step-by-step solution
.6×.5=.30.
Interpretation
Independence permits multiplication of marginals.
Exam insight
Do not assume independence merely because events differ.
```
> [!TIP]
> Knowledge check 1: Joint probability of mutually exclusive events? **Zero.**
>
> Knowledge check 2: Union probability of exhaustive events? **One.**
>
> Knowledge check 3: Denominator of P(A|B)? **P(B), the conditioning event.**
## Total probability, trees, and Bayes
```formula
P(S)=P(S|A)P(A)+P(S|Aᶜ)P(Aᶜ)
P(A|S)=P(S|A)P(A)/P(S)
```
| Quantity | Direction |
|---|---|
| Likelihood | P(evidence|cause) |
| Posterior | P(cause|evidence) |
### Worked examples 7–10
```example
Problem
P(A)=.4, P(S|A)=.7, P(S|not A)=.2. Find P(S).
Step-by-step solution
.4(.7)+.6(.2)=.40.
Interpretation
Success occurs 40% overall.
Exam insight
Add mutually exclusive terminal branches.
```
```example
Problem
Using the prior tree, find P(A|S).
Step-by-step solution
.4(.7)/.40=.70.
Interpretation
Given success, A has 70% posterior probability.
Exam insight
Bayes denominator is total evidence probability.
```
```example
Problem
Disease prior=.01, sensitivity=.90, false-positive=.05. Find posterior after positive.
Step-by-step solution
Total positive=.01(.90)+.99(.05)=.0585; posterior=.009/.0585=15.38%.
Interpretation
Low prior keeps posterior modest.
Exam insight
Do not confuse sensitivity with posterior.
```
```example
Problem
Market up probability=.6; gain conditional up=.8 and conditional down=.3. Find gain probability.
Step-by-step solution
.6(.8)+.4(.3)=.60.
Interpretation
Terminal gain probability is 60%.
Exam insight
A tree makes conditional direction explicit.
```
> [!TIP]
> Knowledge check 4: How are probabilities combined along one tree path? **Multiply.**
>
> Knowledge check 5: How are alternative terminal paths combined? **Add.**
>
> Knowledge check 6: What does Bayes update? **A prior into a posterior.**
## Odds, expected value, and random-variable risk
Odds for A are P(A):[1−P(A)]; odds against reverse them.
```formula
E(X)=Σpi xi
Var(X)=Σpi[xi−E(X)]²
```
### Worked examples 11–13
```example
Problem
P(A)=.75. Give odds for A.
Step-by-step solution
.75:.25=3:1.
Interpretation
Three favorable probability units per unfavorable unit.
Exam insight
Odds are not probability.
```
```example
Problem
Returns 10% and −4% have probabilities .6 and .4. Find expected return.
Step-by-step solution
.6(.10)+.4(−.04)=4.4%.
Interpretation
4.4% is the probability-weighted mean.
Exam insight
Expected value need not be an attainable outcome.
```
```example
Problem
Payoffs 100, 0, −50 have probabilities .3,.5,.2. Find expected payoff.
Step-by-step solution
30+0−10=20.
Interpretation
Repeated average payoff is 20.
Exam insight
Probabilities must sum to one.
```
```example
Problem
A project pays 15 with probability .4 and 5 with probability .6. Find expected payoff.
Step-by-step solution
.4(15)+.6(5)=6+3=9.
Interpretation
Nine is the long-run probability-weighted payoff, although it is not a listed outcome.
Exam insight
Expected value need not be attainable in a single trial.
```
## Supplementary prerequisite review — portfolio calculations

> [!INFO]
> Portfolio expected return and variance are prerequisite review only. Their official treatment, assessment, and tools belong to LM8, The Return and Risk of a Financial Portfolio.
```formula
Cov(X,Y)=E[(X−EX)(Y−EY)]
ρXY=Cov(X,Y)/(σXσY)
E(Rp)=wA E(RA)+wB E(RB)
σp²=wA²σA²+wB²σB²+2wAwBσAσBρAB
```
| Measure | Scale | Meaning |
|---|---|---|
| Covariance | Unit-dependent | Direction of co-movement |
| Correlation | −1 to +1 | Standardized co-movement |

| Portfolio input | Affects expected return? | Affects variance? |
|---|---|---|
| Asset weights | Yes | Yes |
| Asset expected returns | Yes | No directly |
| Asset standard deviations | No | Yes |
| Correlation | No | Yes |
### Worked examples 14–18
```example
Problem
Weights .6/.4; returns 8%/4%. Find expected portfolio return.
Step-by-step solution
.6(.08)+.4(.04)=6.4%.
Interpretation
Expected return is weighted average.
Exam insight
Weights sum to one.
```
```example
Problem
σA=.15, σB=.08, weights .6/.4, correlation .25. Find variance.
Step-by-step solution
.6²(.15²)+.4²(.08²)+2(.6)(.4)(.15)(.08)(.25)=.010564.
Interpretation
Portfolio SD≈10.28%.
Exam insight
Include the cross term.
```
```example
Problem
Same inputs with correlation −1. Find SD.
Step-by-step solution
|.6(.15)−.4(.08)|=.058=5.8%.
Interpretation
Negative correlation strengthens diversification.
Exam insight
Correlation cannot be below −1.
```
```example
Problem
Covariance=.006, σA=.10, σB=.12. Find correlation.
Step-by-step solution
.006/(.10×.12)=.50.
Interpretation
Returns have moderately positive standardized co-movement.
Exam insight
Covariance and correlation are not interchangeable.
```
```example
Problem
Expected return=4.4% for outcomes 10% (.6) and −4% (.4). Find variance.
Step-by-step solution
.6(.10−.044)²+.4(−.04−.044)²=.004704; SD=6.86%.
Interpretation
Dispersion is around the expected return.
Exam insight
Use decimal returns consistently.
```
> [!TIP]
> Knowledge check 7: Correlation range? **−1 to +1.**
>
> Knowledge check 8: Does expected portfolio return require correlation? **No.**
>
> Knowledge check 9: Does two-asset variance require correlation or covariance? **Yes.**
>
> Knowledge check 10: When is diversification generally stronger? **When correlation is lower, all else equal.**
## Common mistakes and revision sheet
- Do not add exclusive probabilities with an overlap subtraction that is already zero incorrectly.
- Do not reverse P(A|B) and P(B|A).
- Bayes denominator is total evidence probability.
- Expected value is not guaranteed.
- Correlation is bounded; covariance is not standardized.
| Task | Rule |
|---|---|
| At least one | Addition rule |
| Both/sequential branch | Multiplication rule |
| Update belief | Bayes |
| Long-run weighted outcome | Expected value |
| Two-asset risk | Include covariance cross term |
## 30-second summary
Define the sample space, distinguish exclusivity from independence, and keep conditional direction explicit. Add alternative terminal paths, multiply along branches, and use total probability as Bayes' denominator. Expected value is probability weighted; variance measures dispersion. Portfolio expected return is weighted, while portfolio risk also depends on covariance or correlation.
+
## Exam tips

Define events first, mark whether they are mutually exclusive or independent, multiply along tree branches, add across disjoint paths, and verify that final probabilities remain between zero and one.

## One-page revision sheet

| Task | Rule |
|---|---|
| At least one | Use the complement when simpler |
| Joint path | Multiply conditional branch probabilities |
| Alternative paths | Add mutually exclusive path probabilities |
| Update after evidence | Apply Bayes with total evidence in the denominator |
| Portfolio risk | Include covariance or correlation terms |
# Official distribution application lab

The following cases consolidate the verified LM6 distribution scope. Each solution states its probability model before calculating, because selecting the model is part of the analysis.

## Worked Example 5 — Discrete expected return

**Problem.** Returns of −5%, 4%, and 12% have probabilities 0.20, 0.50, and 0.30. Find the expected return.

**Step-by-step solution.** Multiply each outcome by its probability and add: (E(R)=0.20(-5)+0.50(4)+0.30(12)=4.6\%\).

**Interpretation.** The probability-weighted center is 4.6%; it is not a guaranteed result. **Exam insight:** probabilities must sum to one.

## Worked Example 6 — Discrete variance

**Problem.** Using Example 5, calculate variance.

**Step-by-step solution.** Square each deviation from 4.6% and probability-weight it: (0.20(-9.6)^2+0.50(-0.6)^2+0.30(7.4)^2=35.04) percentage-points squared.

**Interpretation.** Standard deviation is (sqrt{35.04}=5.92\%\). **Exam insight:** variance uses deviations from the expected value.

## Worked Example 7 — Bernoulli moments

**Problem.** A bond defaults with probability 2%. Let (X=1) for default. Find its mean and variance.

**Step-by-step solution.** For Bernoulli (p=0.02), (E(X)=p=0.02) and (Var(X)=p(1-p)=0.0196).

**Interpretation.** The indicator's mean is the event probability. **Exam insight:** a Bernoulli variable records one trial, not a count over many trials.

## Worked Example 8 — Binomial probability

**Problem.** With independent 2% default probability, find the probability of exactly one default among five bonds.

**Step-by-step solution.** (P(X=1)=\binom51(0.02)(0.98)^4=0.0922), or 9.22%.

**Interpretation.** Five mutually independent Bernoulli trials create a binomial count. **Exam insight:** “exactly” calls for one probability mass, not a cumulative probability.

## Worked Example 9 — Binomial tail

**Problem.** In four independent trials with success probability 0.30, find (P(X\ge1)).

**Step-by-step solution.** Use the complement: (1-P(X=0)=1-(0.70)^4=0.7599).

**Interpretation.** At least one success has probability 75.99%. **Exam insight:** complements often simplify “at least one.”

## Worked Example 10 — Uniform probability

**Problem.** A return is uniform from −2% to 8%. Find (P(R>5\%)).

**Step-by-step solution.** Probability is interval length over total length: ((8-5)/(8-(-2))=0.30).

**Interpretation.** Equal-length intervals have equal probability. **Exam insight:** probability is area, not density height alone.

## Worked Example 11 — Uniform mean and variance

**Problem.** Find the mean and variance for the uniform return in Example 10.

**Step-by-step solution.** Mean (=(a+b)/2=3\%\). Variance (=(b-a)^2/12=100/12=8.333) percentage-points squared.

**Interpretation.** The distribution is centered at 3%. **Exam insight:** keep percentage-point and decimal units consistent.

## Worked Example 12 — Normal z-score

**Problem.** Normally distributed returns have mean 7% and standard deviation 10%. Find the z-score for −8%.

**Step-by-step solution.** (z=(-8-7)/10=-1.50).

**Interpretation.** The observation is 1.5 standard deviations below the mean. **Exam insight:** subtract the mean before dividing by risk.

## Worked Example 13 — Normal left tail

**Problem.** Using Example 12, estimate (P(R<-8\%)) when (Phi(-1.50)=0.0668).

**Step-by-step solution.** The requested event is already a left-tail probability, so the answer is 6.68%.

**Interpretation.** About 6.7% of model outcomes fall below −8%. **Exam insight:** do not take (1-Phi(z)) for a left tail.

## Worked Example 14 — Normal interval

**Problem.** Find (P(-3\%<R<17\%)) for the distribution in Example 12.

**Step-by-step solution.** Bounds correspond to z-scores −1 and +1. Thus (P=\Phi(1)-\Phi(-1)=0.8413-0.1587=0.6826).

**Interpretation.** The symmetric one-standard-deviation interval contains about 68.3%. **Exam insight:** interval probability is upper CDF minus lower CDF.

## Worked Example 15 — Normal right tail

**Problem.** If (z=1.25) and (Phi(1.25)=0.8944), find the right-tail probability.

**Step-by-step solution.** (P(Z>1.25)=1-0.8944=0.1056).

**Interpretation.** The upper tail contains 10.56%. **Exam insight:** a CDF always reports probability at or below its argument.

## Worked Example 16 — Lognormal price mapping

**Problem.** A price is 100 and its continuously compounded one-period return is 8%. Find the ending price.

**Step-by-step solution.** (P_1=P_0e^r=100e^{0.08}=108.33).

**Interpretation.** Exponentiating a normal log return produces a positive price. **Exam insight:** lognormal prices cannot be negative.

## Worked Example 17 — Log return from prices

**Problem.** A price rises from 80 to 86. Find its continuously compounded return.

**Step-by-step solution.** (r=\ln(86/80)=0.0723=7.23\%\).

**Interpretation.** This is the log change, not the 7.50% simple return. **Exam insight:** identify the requested return convention.

## Supplementary Worked Example 18 — Student's t selection

**Problem.** A sample of 16 returns has unknown population variance. Which standardized distribution supports a mean interval under normal sampling?

**Step-by-step solution.** Estimate the standard error with the sample standard deviation and use Student's t with (16-1=15) degrees of freedom.

**Interpretation.** Estimating variance adds uncertainty and heavier tails. **Exam insight:** degrees of freedom are (n-1).

## Supplementary Worked Example 19 — t critical value interval

**Problem.** A sample mean is 6%, its standard error is 2%, and the two-sided t critical value is 2.131. Construct the interval.

**Step-by-step solution.** Margin (=2.131(2\%)=4.262\%\); interval (=[1.738\%,10.262\%]).

**Interpretation.** The interval reflects sampling uncertainty. **Exam insight:** use the supplied t critical value rather than a z value.

## Worked Example 20 — CDF to interval probability

**Problem.** A continuous return has (F(2\%)=0.35) and (F(7\%)=0.80). Find (P(2\%<R\le7\%)).

**Step-by-step solution.** (F(7\%)-F(2\%)=0.80-0.35=0.45).

**Interpretation.** Forty-five percent lies in the interval. **Exam insight:** for continuous variables, endpoint inclusion does not change probability.

## Worked Example 21 — Density versus probability

**Problem.** A uniform density on [0, 4] has height 0.25. Find (P(1<X<2.5)).

**Step-by-step solution.** Area (=(2.5-1)(0.25)=0.375).

**Interpretation.** Probability is the area under the density. **Exam insight:** a density value is not itself an interval probability.

## Worked Example 22 — Distribution choice

**Problem.** Choose between normal and lognormal models for an asset price level that must remain positive.

**Step-by-step solution.** Use a lognormal price model; a normal model assigns some probability to negative levels.

**Interpretation.** Model support must match the financial variable. **Exam insight:** distinguish a price level from its continuously compounded return.

## Knowledge Check 11

Why can a density exceed one? Because only its total area must equal one; probability is area over an interval.

## Knowledge Check 12

Student's t inference belongs to LM7 Estimation and Hypothesis Testing and is retained here only as explicitly labeled prerequisite review.

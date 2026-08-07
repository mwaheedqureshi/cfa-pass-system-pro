# Hypothesis Testing

> **Scope notice:** The scope statements in this lesson are independently written for curriculum organization and are not official CFA Institute Learning Outcomes.

## Introduction

Hypothesis testing provides a disciplined way to judge whether sample evidence is sufficiently inconsistent with a baseline claim.

## Why this topic matters

Portfolio research repeatedly asks whether an observed return, cost, or exposure differs from a benchmark. Testing makes the uncertainty and error trade-offs explicit.

## Independent scope statements

- **HT-01:** Explain the purpose and structure of statistical hypothesis testing.
- **HT-02:** Distinguish the null hypothesis from the alternative hypothesis.
- **HT-03:** Distinguish one-tailed and two-tailed tests and select the appropriate form for a stated research question.
- **HT-04:** Explain significance level, critical value, rejection region, test statistic, and p-value.
- **HT-05:** Make a hypothesis-test decision using either the critical-value method or the p-value method.
- **HT-06:** Explain Type I error, Type II error, and statistical power.
- **HT-07:** Explain how significance level, sample size, effect size, and variability affect test power and error trade-offs.
- **HT-08:** Distinguish statistical significance from economic or practical significance.
- **HT-09:** Conduct and interpret a test of a population mean when population variance is known.
- **HT-10:** Conduct and interpret a test of a population mean when population variance is unknown.
- **HT-11:** Select appropriately between a Z-test and a Student’s t-test.
- **HT-12:** Explain the role of degrees of freedom in a t-test.
- **HT-13:** Explain the relationship between confidence intervals and two-sided hypothesis tests.
- **HT-14:** Interpret failure to reject the null hypothesis correctly without claiming that the null has been proven true.
- **HT-15:** Identify assumptions, limitations, and common errors in investment-related hypothesis testing.

## Core language and decisions

| Item | Meaning | Trap |
|---|---|---|
| H0 | Baseline claim tested | It is not automatically believed forever |
| H1 | Competing claim | Direction must be chosen before seeing results |
| Alpha | Maximum Type I error probability under H0 | Not the probability H0 is true |
| Critical value | Boundary of rejection region | Depends on tail and distribution |
| p-value | Probability under H0 of a result at least as extreme | Not P(H0 is true) |
| Power | Probability of rejection at a specified alternative | Depends on the true effect |
| Type I error | Reject a true H0 | Probability α under assumptions |
| Type II error | Fail to reject a false H0 | Probability β at a specified alternative |

A test starts with a population question, states H0 and H1, selects alpha and a valid statistic before examining results, calculates the statistic, and decides using either an equivalent critical-value or p-value rule. One-sided alternatives use one tail; “different” uses two. Known σ uses Z for a mean; unknown σ uses t with df=n−1 under suitable sampling assumptions.

| Research wording | Alternative | Tail |
|---|---|---|
| Greater than | μ>μ0 | Upper |
| Less than | μ<μ0 | Lower |
| Different from | μ≠μ0 | Two |

| Method | Reject when |
|---|---|
| Critical-value | Statistic enters rejection region |
| p-value | p≤α |

| Mean setting | Statistic | Key condition |
|---|---|---|
| Known σ | z=(x̄−μ0)/(σ/√n) | Valid normal/CLT sampling model |
| Unknown σ | t=(x̄−μ0)/(s/√n) | t model; df=n−1 |

| Conclusion | Correct wording |
|---|---|
| Reject | Evidence is inconsistent with H0 at α |
| Fail to reject | Evidence is insufficient to reject H0 |

| Change, otherwise fixed | Typical power effect |
|---|---|
| Larger n | Higher |
| Larger true effect | Higher |
| Lower variability | Higher |
| Higher α | Higher power but more Type I risk |

## Worked examples

```example
### Worked example 1 — Upper-tail Z test

**Problem and solution.** H0: μ≤5 versus H1: μ>5. With x̄=5.8, σ=2, n=25, z=(5.8−5)/(2/5)=2.00. At α=.05, critical z=1.645; reject H0. The evidence supports a mean above 5, subject to assumptions.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 2 — Lower-tail Z test

**Problem and solution.** H0: μ≥100 versus H1: μ<100. x̄=96, σ=12, n=36 gives z=−2.00. Since −2<−1.645 at α=.05, reject H0.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 3 — Upper-tail p-value

**Problem and solution.** For z=1.80, upper-tail p≈.0359. Since .0359<.05, reject H0; at α=.01, fail to reject.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 4 — Lower-tail p-value

**Problem and solution.** For z=−1.28, lower-tail p≈.1003. At α=.05, fail to reject H0; this is insufficient evidence, not proof.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 5 — Directional research question

**Problem and solution.** A claim that active return exceeds zero maps to H1:μ>0 and an upper-tail test. Choosing direction after seeing data invalidates the planned error rate.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 6 — Two-tailed Z test

**Problem and solution.** H0:μ=50 versus H1:μ≠50. x̄=54, σ=10, n=25 gives z=2.00. Critical values ±1.96 at 5%; reject.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 7 — Two-tailed p-value

**Problem and solution.** For z=−2.30, p=2Φ(−2.30)≈.0214. Reject at 5% but not at 1%.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 8 — Two-tailed non-rejection

**Problem and solution.** z=1.40 lies between ±1.96 and has p≈.1615. Fail to reject at 5%.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 9 — Confidence-interval connection

**Problem and solution.** A 95% interval [2.1,5.9] excludes μ0=2.0, so the corresponding two-sided 5% test rejects H0:μ=2.0.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 10 — Economic significance

**Problem and solution.** An estimated annual alpha of 0.04% has p=.01 but trading costs are 0.30%. It is statistically significant yet economically unattractive.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 11 — Unknown variance t test

**Problem and solution.** x̄=12, μ0=10, s=4, n=16 gives t=2/(4/4)=2 with df=15. Two-sided 5% critical ±2.131; fail to reject.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 12 — Upper-tail t test

**Problem and solution.** With t=2.20 and df=20, upper-tail critical at 5% is about 1.725. Reject H0.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 13 — Lower-tail t test

**Problem and solution.** With t=−1.90 and df=12, lower 5% critical is about −1.782. Reject H0.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 14 — Two-tailed t test

**Problem and solution.** t=2.50, df=10 exceeds 2.228 in magnitude; reject at 5%.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 15 — t p-value decision

**Problem and solution.** A two-sided t test reports p=.074. At α=.05, fail to reject; at α=.10, reject.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 16 — Z or t selection

**Problem and solution.** Known population σ supports a Z mean test. Unknown σ replaced by s supports t with n−1 df, assuming the sampling model is suitable.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 17 — Type I error

**Problem and solution.** Rejecting a true claim of no abnormal return is Type I error. Its probability is α under the null and test assumptions.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 18 — Type II error

**Problem and solution.** Failing to reject when a genuine economically relevant alpha exists is Type II error, probability β at that specified alternative.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 19 — Power and sample size

**Problem and solution.** Holding model, α, effect, and variability fixed, increasing n reduces standard error and usually raises power.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 20 — Power and effect size

**Problem and solution.** A larger true departure from H0 is easier to detect, so power generally rises under otherwise fixed conditions.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 21 — Alpha trade-off

**Problem and solution.** Raising α from .01 to .05 expands rejection regions and generally raises power but increases Type I error probability.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 22 — Assumption diagnosis

**Problem and solution.** Autocorrelated monthly returns violate independence. A textbook standard error may be misleading even when its arithmetic is correct.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

> **Knowledge check 1.** Which quantity or decision rule governs this section? **Answer:** Use the explicitly defined statistic, critical region, or fitted-model measure.

> **Knowledge check 2.** What is the central trap? **Answer:** Do not replace a conditional statistical conclusion with certainty or causation.

> **Knowledge check 3.** What wording avoids overclaiming? **Answer:** State association or evidence and preserve the stated assumptions.

> **Knowledge check 4.** Which quantity or decision rule governs this section? **Answer:** Use the explicitly defined statistic, critical region, or fitted-model measure.

> **Knowledge check 5.** What is the central trap? **Answer:** Do not replace a conditional statistical conclusion with certainty or causation.

> **Knowledge check 6.** What wording avoids overclaiming? **Answer:** State association or evidence and preserve the stated assumptions.

> **Knowledge check 7.** Which quantity or decision rule governs this section? **Answer:** Use the explicitly defined statistic, critical region, or fitted-model measure.

> **Knowledge check 8.** What is the central trap? **Answer:** Do not replace a conditional statistical conclusion with certainty or causation.

> **Knowledge check 9.** What wording avoids overclaiming? **Answer:** State association or evidence and preserve the stated assumptions.

> **Knowledge check 10.** Which quantity or decision rule governs this section? **Answer:** Use the explicitly defined statistic, critical region, or fitted-model measure.

> **Knowledge check 11.** What is the central trap? **Answer:** Do not replace a conditional statistical conclusion with certainty or causation.

> **Knowledge check 12.** What wording avoids overclaiming? **Answer:** State association or evidence and preserve the stated assumptions.

## Decision audit table

| Audit question | Required check |
|---|---|
| Was direction selected in advance? | Match the research question, not the observed sign |
| Is the reference distribution valid? | Check known/unknown variance, df, sampling, and dependence |
| Do both methods agree? | Critical-value and p-value decisions must match |
| Is the conclusion calibrated? | Reject or fail to reject; never “prove” or “accept” |

## Common mistakes

- Accepting H0 after failure to reject.
- Reversing upper and lower tails.
- Doubling a one-tail p-value when the alternative is directional.
- Using Z merely because n is large when σ is unknown.
- Treating p as the probability H0 is true.
- Confusing statistical with economic significance.

## Memory aids and exam tips

**Direction follows H1. p small, evidence tall. Unknown σ takes t.** Write hypotheses first, compute the standard error carefully, and compare p with alpha using the same tail definition.

## One-page revision sheet

| Decision | Rule |
|---|---|
| Upper tail | Reject for a sufficiently positive statistic |
| Lower tail | Reject for a sufficiently negative statistic |
| Two tail | Reject for sufficiently large absolute statistic |
| Z mean test | Known σ |
| t mean test | Unknown σ; df=n−1 |
| p-value | Reject when p≤α |
| 1−β | Power at a specified alternative |
| CI link | Two-sided H0 value outside matching CI implies rejection |

## 30-second summary

Hypothesis testing weighs sample evidence against H0 using a preselected tail and alpha. Critical-value and p-value methods agree when calculated consistently. Type I error rejects a true null; Type II error misses a false null; power is 1−β at a stated alternative. Use Z for known σ and t for unknown σ. Failure to reject is not proof, and statistical significance is not economic importance.

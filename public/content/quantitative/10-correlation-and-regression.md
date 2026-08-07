# Applications of Simple Linear Regression in Finance

> **Scope notice:** The scope statements in this lesson are independently written for curriculum organization and are not official CFA Institute Learning Outcomes.

## Introduction

Correlation summarizes linear association; regression turns that relationship into an estimated conditional equation while retaining uncertainty and diagnostic limits.

## Why this topic matters

Analysts use regressions to estimate sensitivities, explain variation, test exposures, and forecast. Correct interpretation matters more than mechanical output.

## Learning outcome references

This original lesson is organized around four outcome areas: explain simple linear regression and least-squares estimation; evaluate assumptions, residuals, goodness of fit, coefficients, and ANOVA; calculate predictions, estimation error, prediction intervals, and interpret functional forms; and calculate and interpret CAPM regression estimates.

## Independent scope statements

- **CR-01:** Calculate and interpret covariance between two variables.
- **CR-02:** Calculate and interpret the correlation coefficient.
- **CR-03:** Explain the limits and limitations of correlation, including why correlation does not establish causation.
- **CR-04:** Interpret scatterplots, including nonlinear relationships and the influence of outliers.
- **CR-05:** Explain the structure and purpose of a simple linear regression model.
- **CR-06:** Distinguish dependent and independent variables.
- **CR-07:** Calculate and interpret the estimated slope and intercept.
- **CR-08:** Use an estimated regression equation to calculate a predicted dependent-variable value.
- **CR-09:** Calculate and interpret residuals.
- **CR-10:** Explain the ordinary least-squares objective and the meaning of the sum of squared errors.
- **CR-11:** Calculate and interpret R-squared.
- **CR-12:** Explain why R-squared is not a measure of causation or the percentage of observations predicted correctly.
- **CR-13:** Calculate and interpret the standard error of estimate where sufficient information is available.
- **CR-14:** Test and interpret the statistical significance of the slope coefficient.
- **CR-15:** Construct or interpret a confidence interval for the slope coefficient where sufficient information is available.
- **CR-16:** Identify important simple-regression assumptions.
- **CR-17:** Explain how outliers, leverage points, and influential observations can affect regression results.
- **CR-18:** Identify common signs and consequences of model misspecification.
- **CR-20:** Evaluate regression output in an investment-analysis context and recognize forecasting limitations.

## Core language and interpretation

| Quantity | Meaning | Limitation |
|---|---|---|
| Covariance | Direction and scale of joint variation | Unit dependent |
| Correlation | Standardized linear association | Not causation |
| Slope | Predicted Y change per unit X | Conditional model interpretation |
| Intercept | Predicted Y when X=0 | May lack economic meaning |
| Residual | y−ŷ | Sample prediction error |
| SSE | Sum of squared residuals | Lower in-sample is not automatically better forecasting |
| R² | Explained sample Y variation proportion | Not percent correctly predicted |
| SEE | Typical fitted residual scale | Depends on model validity |

The estimated line is ŷ=b0+b1x, where b1=Sxy/Sxx and b0=ȳ−b1x̄. OLS selects coefficients minimizing SSE. SST=SSR+SSE and R²=SSR/SST=1−SSE/SST when an intercept is included.

| Plot feature | Possible interpretation |
|---|---|
| Upward cloud | Positive linear association |
| Curved pattern | Low r may hide a strong nonlinear relation |
| Extreme X | Leverage |
| Large residual | Outlier in Y conditional on X |
| One point changes fit | Influence |
| Funnel residuals | Possible heteroskedasticity |
| Runs over time | Possible serial correlation |

| Assumption | Why it matters |
|---|---|
| Linear conditional mean | Supports line specification |
| Independent errors | Supports conventional inference |
| Constant error variance | Supports conventional standard errors |
| Suitable error distribution | Supports small-sample t inference |
| X measured/selected appropriately | Supports interpretation |

| Slope inference | Formula |
|---|---|
| SE(b1) | SEE/√Sxx |
| t statistic | (b1−β1,0)/SE(b1), df=n−2 |
| Confidence interval | b1±t*SE(b1) |

## ANOVA and the model test

With an intercept, total variation separates exactly into explained and unexplained parts: `SST = SSR + SSE`. A simple regression has one regression degree of freedom and `n - 2` error degrees of freedom. Thus `MSR = SSR`, `MSE = SSE/(n - 2)`, and `F = MSR/MSE`. For one predictor, the model F-test and the two-sided slope t-test test the same null hypothesis, so `F = t^2`. A large F supports a linear association; it does not prove causation or validate the model assumptions.

## Prediction intervals

At `x0`, the point prediction is `y-hat0 = b0 + b1x0`. Define `h0 = 1/n + (x0 - x-bar)^2/SXX`. The standard error for the estimated mean response is `SEE sqrt(h0)`. For one future observation it is `SEE sqrt(1 + h0)`. The extra 1 represents irreducible observation-level error, so an individual prediction interval is wider. Both intervals widen as `x0` moves away from `x-bar`.

## Functional forms

| Form | Model | Slope interpretation |
|---|---|---|
| Linear-linear | `Y = b0 + b1X` | One unit more X predicts `b1` units more Y |
| Log-linear | `ln(Y) = b0 + b1X` | One unit more X predicts approximately `100b1%` more Y |
| Linear-log | `Y = b0 + b1ln(X)` | A 1% increase in X predicts approximately `b1/100` units more Y |
| Log-log | `ln(Y) = b0 + b1ln(X)` | `b1` is elasticity |

For a log-dependent model, the exact percentage effect of a one-unit X change is `100[exp(b1)-1]%`; the usual percentage rule is an approximation.

## CAPM regression

The empirical model is `Ri - Rf = alpha_i + beta_i(Rm - Rf) + epsilon_i`. Asset excess return is Y and market excess return is X. Alpha is abnormal return per observation period. Beta is market sensitivity; beta above one indicates greater systematic sensitivity than the market. The residual is asset-specific return not explained by the market. R-squared is the fraction of asset excess-return variation explained by market excess return. All returns must have consistent frequencies and units.

## Worked examples

```example
### Worked example 1 — Sample covariance

**Problem and solution.** For X=[1,2,3], Y=[2,4,5], means are 2 and 11/3. Cross-deviation sum is 3; sample covariance=3/(3−1)=1.5, indicating positive co-movement.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 2 — Perfect positive correlation

**Problem and solution.** Y=2X for X=[1,2,3] gives r=1. Scaling does not weaken perfect positive linear association.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 3 — Perfect negative correlation

**Problem and solution.** Y=6−X for X=[1,2,3] gives r=−1.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 4 — Zero linear correlation

**Problem and solution.** X=[−1,0,1], Y=[1,0,1] has covariance and correlation 0, yet Y=X² is a deterministic nonlinear relationship.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 5 — Outlier effect

**Problem and solution.** Four points near an upward line plus one distant lower-right point can reverse r. Compare results with and without the point; do not delete it without justification.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 6 — Slope from sums

**Problem and solution.** If Sxy=18 and Sxx=12, b1=18/12=1.5.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 7 — Intercept

**Problem and solution.** With x̄=4, ȳ=10, and b1=1.5, b0=10−1.5(4)=4.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 8 — Regression equation

**Problem and solution.** The estimates b0=4 and b1=1.5 give ŷ=4+1.5x. A one-unit X increase is associated with 1.5 higher predicted Y.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 9 — Prediction 1

**Problem and solution.** Using ŷ=4+1.5x at x=6 gives ŷ=13.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 10 — Prediction 2

**Problem and solution.** Using ŷ=2−0.4x at x=5 gives ŷ=0.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 11 — Residual

**Problem and solution.** If actual y=14 and predicted ŷ=13, residual e=y−ŷ=1.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 12 — SSE

**Problem and solution.** Residuals [1,−2,1] give SSE=1²+(−2)²+1²=6.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 13 — OLS intuition

**Problem and solution.** Between candidate lines with SSE 10 and 14 on the same data, OLS selects the line with SSE 10.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 14 — Prediction 3

**Problem and solution.** A spread model ŷ=80+6x predicts 98 bp when x=3.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 15 — Prediction 4

**Problem and solution.** A beta model ŷ=.2+1.1x predicts 5.7% when market return x=5% using consistent percentage units.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 16 — Prediction limitation

**Problem and solution.** If observed X ranged 1–5, predicting at X=20 is extrapolation and carries added model risk.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 17 — R-squared from sums

**Problem and solution.** SST=100 and SSE=36 gives R²=1−36/100=.64.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 18 — R-squared interpretation

**Problem and solution.** R²=.64 means 64% of sample variation in Y is explained by the fitted linear model—not 64% correct predictions.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 19 — R-squared comparison

**Problem and solution.** R² rising after adding or changing specification does not prove causation or good out-of-sample forecasts.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 20 — Perfect fit

**Problem and solution.** SSE=0 with positive SST gives R²=1, but this alone does not validate assumptions or causality.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 21 — Standard error of estimate

**Problem and solution.** SSE=18 and n=5 gives SEE=√(18/(5−2))=√6=2.449.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 22 — Slope standard error

**Problem and solution.** SEE=2 and Sxx=16 gives SE(b1)=2/4=.5.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 23 — Slope t-test 1

**Problem and solution.** b1=1.2 and SE=.4 gives t=3.0. With df=n−2=18 and two-sided 5% critical about 2.101, reject zero slope.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 24 — Slope t-test 2

**Problem and solution.** b1=.3 and SE=.25 gives t=1.2; fail to reject zero slope at conventional two-sided 5% levels.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 25 — Slope p-value

**Problem and solution.** A slope p-value .008 is below α=.01, so reject H0:b1=0; economic importance remains separate.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 26 — Slope confidence interval

**Problem and solution.** b1=.8, SE=.2, t*=2.10 gives .8±.42=[.38,1.22], excluding zero and matching two-sided rejection.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 27 — High leverage

**Problem and solution.** An extreme X value has leverage and may strongly affect the fitted line; influence also depends on its residual.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 28 — Influential observation

**Problem and solution.** If removing one point materially changes slope and conclusions, it is influential and warrants investigation.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 29 — Misspecification

**Problem and solution.** A curved residual pattern suggests a linear functional form may be inadequate.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 30 — Heteroskedasticity

**Problem and solution.** A funnel-shaped residual plot indicates nonconstant error variance; conventional standard errors may be unreliable.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 31 — Serial correlation

**Problem and solution.** Runs of same-sign time-series residuals suggest dependence, potentially distorting standard errors and inference.

**Interpretation.** Read the numerical result in the context of the stated model and research question.

**Exam insight.** Identify the governing definition or formula before calculating, and state conclusions without overclaiming.
````

```example
### Worked example 32 — Forecast limitation

**Problem and solution.** Structural change can make a historically fitted relationship unstable out of sample.

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

## Output and diagnostic comparisons

| Output | Answers | Does not answer |
|---|---|---|
| Slope | Predicted change in Y per unit X | Whether X causes Y |
| P-value | Evidence against a stated slope null | Economic importance |
| Confidence interval | Sampling uncertainty around slope | Guaranteed forecast range |

| Observation type | Defining feature | Possible impact |
|---|---|---|
| Outlier | Large residual | Raises SSE and can affect fit |
| Leverage point | Unusual X | Can pull the fitted line |
| Influential point | Materially changes results | Can reverse conclusions |

| Forecast setting | Relative concern |
|---|---|
| Interpolation within stable sample range | Lower extrapolation risk, but model risk remains |
| Extrapolation beyond observed X | Greater functional-form risk |
| New economic regime | Historical coefficients may be unstable |

## Common mistakes

- Claiming correlation proves causation.
- Calling R² the percentage of observations predicted correctly.
- Reversing residual sign.
- Using population instead of sample covariance denominator.
- Extrapolating far outside observed X without warning.
- Ignoring outliers, leverage, dependence, or changing regimes.

## Memory aids and exam tips

**COV carries units; CORR clears units. Residual = real minus regression. OLS squares misses.** Verify SST=SSR+SSE and interpret every coefficient in units.

## One-page revision sheet

| Item | Formula or interpretation |
|---|---|
| Covariance | Σ(x−x̄)(y−ȳ)/(n−1) |
| Correlation | covariance/(sx sy), within [−1,1] |
| Slope | Sxy/Sxx |
| Intercept | ȳ−b1x̄ |
| Prediction | b0+b1x |
| Residual | y−ŷ |
| R² | 1−SSE/SST |
| SEE | √[SSE/(n−2)] |
| Slope test | t=(b1−β1,0)/SE(b1), df=n−2 |

## 30-second summary

Correlation standardizes linear co-movement but never establishes causation. Simple regression fits ŷ=b0+b1x by minimizing squared residuals. R² describes the fraction of sample Y variation explained by the fitted line, not prediction correctness. Slope inference uses n−2 degrees of freedom. Predictions, standard errors, and significance are trustworthy only to the extent that sampling, functional-form, and error assumptions are reasonable.

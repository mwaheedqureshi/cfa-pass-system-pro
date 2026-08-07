# The Return and Risk of a Financial Portfolio

> **Official LM8 · Study lesson 9 of 12**  
> This original lesson addresses portfolio expected return and risk, minimum-variance portfolios, the efficient frontier, and optimal portfolio selection with a risk-free asset.

## Introduction

A portfolio is not merely a list of securities. Its return is a weighted average, but its risk depends on how the securities move together. That asymmetry is the foundation of diversification and modern portfolio choice.

## Why this topic matters

An analyst must distinguish an asset that looks risky alone from one that increases portfolio risk. Covariance and correlation connect security analysis to portfolio construction; the efficient frontier and capital allocation line turn those measurements into choices.

## Learning outcomes

After this lesson, you should be able to:

1. Calculate, interpret, and evaluate expected return, variance, standard deviation, covariance, and correlation of portfolio returns.
2. Describe, calculate, and interpret a minimum-variance portfolio and the efficient frontier.
3. Explain optimal portfolio selection using risk aversion and the capital allocation line, including its extension to the market portfolio and capital market line.

## 1. Portfolio return

For weights that sum to one, expected portfolio return is the weighted average of expected asset returns:

$$E(R_p)=\sum_{i=1}^{n}w_iE(R_i)$$

Realized portfolio return uses realized asset returns in the same equation. A negative weight represents a short position; a weight above one represents leveraged exposure.

| Comparison 1 | Expected portfolio return | Portfolio risk |
|---|---|---|
| Main inputs | Weights and expected asset returns | Weights, variances, and every covariance |
| Diversification effect | None beyond weighting | Can materially reduce risk |

### Worked example 1 — expected return

**Problem.** A portfolio invests 40% in an asset expected to return 6% and 60% in an asset expected to return 10%. Find its expected return.

**Step-by-step solution.** (1) Multiply each return by its weight: $0.40(6\%)=2.4\%$ and $0.60(10\%)=6.0\%$. (2) Add: $E(R_p)=8.4\%$.

**Interpretation.** The portfolio's probability-weighted average return is 8.4%; this is not a guaranteed outcome.

**Exam insight.** Expected return is linear—correlation does not enter this calculation.

### Worked example 2 — realized return and contribution

**Problem.** Weights are 25%, 35%, and 40%; realized returns are −4%, 8%, and 12%. Find total return and each contribution.

**Step-by-step solution.** Contributions are $0.25(-4\%)=-1.0\%$, $0.35(8\%)=2.8\%$, and $0.40(12\%)=4.8\%$. Total return is $-1.0+2.8+4.8=6.6\%$.

**Interpretation.** The first asset detracted 1 percentage point even though the portfolio gained.

**Exam insight.** A contribution is weight times return, expressed in percentage points.

> **Knowledge check 1.** Do weights affect expected return linearly? **Answer:** Yes.

> **Knowledge check 2.** Can a negative-return holding coexist with a positive portfolio return? **Answer:** Yes, if other weighted contributions dominate.

## 2. Covariance, correlation, and portfolio variance

$$\operatorname{Cov}(R_i,R_j)=\rho_{ij}\sigma_i\sigma_j$$

$$\sigma_p^2=\sum_i\sum_jw_iw_j\operatorname{Cov}(R_i,R_j)$$

For two assets:

$$\sigma_p^2=w_A^2\sigma_A^2+w_B^2\sigma_B^2+2w_Aw_B\rho_{AB}\sigma_A\sigma_B$$

| Comparison 2 | Covariance | Correlation |
|---|---|---|
| Scale | Units squared | Unit-free |
| Range | Unbounded | −1 to +1 |
| Use | Direct variance input | Comparable strength of co-movement |

| Comparison 3 | $\rho=+1$ | $-1<\rho<+1$ | $\rho=-1$ |
|---|---|---|---|
| Diversification | No curvature benefit | Risk can fall below weighted average | Some mix can eliminate risk |

### Worked example 3 — covariance from correlation

**Problem.** Two assets have standard deviations of 12% and 20% and correlation 0.25. Find covariance.

**Step-by-step solution.** Convert to decimals and multiply: $0.25(0.12)(0.20)=0.0060$.

**Interpretation.** Their returns tend to move together, but weakly.

**Exam insight.** Covariance uses decimal returns; 0.0060 is not 0.60% standard deviation.

### Worked example 4 — correlation from covariance

**Problem.** Covariance is 0.009 and standard deviations are 15% and 30%. Find correlation.

**Step-by-step solution.** $\rho=0.009/(0.15\times0.30)=0.20$.

**Interpretation.** The assets have modest positive co-movement.

**Exam insight.** A result outside [−1,1] signals inconsistent inputs or arithmetic error.

### Worked example 5 — two-asset variance

**Problem.** A 50/50 portfolio holds assets with standard deviations 10% and 18%; correlation is 0.30. Find risk.

**Step-by-step solution.** Variance is $0.5^2(0.10^2)+0.5^2(0.18^2)+2(0.5)(0.5)(0.30)(0.10)(0.18)=0.0133$. Thus $\sigma_p=\sqrt{0.0133}=11.53\%$.

**Interpretation.** Risk is below the 14% weighted average of individual standard deviations.

**Exam insight.** Take the square root only after all variance and covariance terms are added.

### Worked example 6 — perfect positive correlation

**Problem.** Repeat Example 5 with correlation +1.

**Step-by-step solution.** $\sigma_p=0.5(10\%)+0.5(18\%)=14\%$.

**Interpretation.** Perfect positive correlation eliminates the diversification benefit.

**Exam insight.** With $\rho=+1$, portfolio standard deviation is the weighted average for long-only weights.

### Worked example 7 — perfect negative correlation

**Problem.** Asset A has 10% risk and B has 15% risk with correlation −1. Find the zero-risk weight in A.

**Step-by-step solution.** Set $w_A(10\%)=(1-w_A)(15\%)$. Then $0.25w_A=0.15$, so $w_A=0.60$ and $w_B=0.40$.

**Interpretation.** Opposing movements exactly offset at this mix.

**Exam insight.** Perfect negative correlation makes zero variance possible; zero covariance generally does not.

### Worked example 8 — multi-asset variance matrix

**Problem.** Weights are 0.5, 0.3, 0.2. Variances are 0.0100, 0.0225, 0.0400 and covariances are 0.0030, 0.0020, and 0.0060 for pairs AB, AC, and BC. Find variance.

**Step-by-step solution.** Diagonal terms total $0.5^2(0.01)+0.3^2(0.0225)+0.2^2(0.04)=0.006125$. Pair terms total $2[0.5(0.3)(0.003)+0.5(0.2)(0.002)+0.3(0.2)(0.006)]=0.00202$. Total variance is 0.008145; risk is $\sqrt{0.008145}=9.03\%$.

**Interpretation.** All pairwise relationships matter.

**Exam insight.** Either sum the full matrix or double each unique off-diagonal pair—never both.

> **Knowledge check 3.** Is covariance bounded? **Answer:** No; correlation is bounded.

> **Knowledge check 4.** Why is the cross term doubled? **Answer:** Covariance AB and BA both appear in the full variance matrix.

> **Knowledge check 5.** Does correlation of zero imply independence? **Answer:** Not generally.

## 3. Diversification and estimation

Diversification removes asset-specific risk when imperfectly correlated exposures are combined. It cannot guarantee against common market shocks. Correlations are estimates, may change in stressed markets, and do not capture nonlinear or tail dependence.

| Comparison 4 | Asset-specific risk | Systematic risk |
|---|---|---|
| Main source | Firm or security events | Economy-wide factors |
| Diversification | Can reduce substantially | Cannot eliminate by broad diversification alone |

| Comparison 5 | Historical estimate | Forward-looking estimate |
|---|---|---|
| Strength | Observable and reproducible | Can reflect regime expectations |
| Limitation | Backward-looking, sample-sensitive | Model- and judgment-sensitive |

### Worked example 9 — changing correlation

**Problem.** A 50/50 portfolio holds two 20%-risk assets. Compare portfolio risk at correlations 0.5 and 0.

**Step-by-step solution.** At 0.5, variance is $0.25(0.04)+0.25(0.04)+0.5(0.5)(0.04)=0.03$, so risk is 17.32%. At 0, variance is 0.02, so risk is 14.14%.

**Interpretation.** Lower correlation creates more diversification without changing either asset's stand-alone risk.

**Exam insight.** Holding all else equal, portfolio variance rises with correlation for positive weights.

### Worked example 10 — stressed correlation

**Problem.** A portfolio was modeled at 12% risk using correlation 0.20; stressed correlation raises calculated risk to 15%. Quantify the change.

**Step-by-step solution.** Absolute increase: $15\%-12\%=3$ percentage points. Relative increase: $3/12=25\%$.

**Interpretation.** Stable historical volatility does not protect a portfolio if co-movement rises.

**Exam insight.** State clearly whether a change is in percentage points or percent.

> **Knowledge check 6.** Can diversification eliminate systematic risk? **Answer:** No.

> **Knowledge check 7.** Are historical correlations fixed parameters? **Answer:** No, they are sample estimates that may shift.

## 4. Minimum-variance portfolios and the efficient frontier

For two risky assets with $w_B=1-w_A$, the global minimum-variance weight in A is:

$$w_A^{GMV}=\frac{\sigma_B^2-\operatorname{Cov}_{AB}}{\sigma_A^2+\sigma_B^2-2\operatorname{Cov}_{AB}}$$

The minimum-variance frontier is the set of portfolios with the lowest variance for each target expected return. Its upper portion, from the global minimum-variance portfolio upward, is the efficient frontier: no other feasible portfolio offers more expected return for the same or less risk.

| Comparison 6 | Minimum-variance frontier | Efficient frontier |
|---|---|---|
| Content | Lowest-risk portfolios for target returns | Upper, non-dominated portion |
| Rational choice | Lower branch may be dominated | Candidates before preferences are applied |

### Worked example 11 — global minimum-variance weight

**Problem.** Variances are 0.0144 and 0.0324; covariance is 0.0036. Find the GMV weight in A.

**Step-by-step solution.** $w_A=(0.0324-0.0036)/(0.0144+0.0324-0.0072)=0.0288/0.0396=72.73\%$. Therefore $w_B=27.27\%$.

**Interpretation.** More weight goes to the lower-variance asset, adjusted for covariance.

**Exam insight.** A GMV weight can be outside 0–1 if short selling is allowed.

### Worked example 12 — GMV expected return

**Problem.** Using Example 11, expected returns are 7% and 11%. Find GMV expected return.

**Step-by-step solution.** $0.7273(7\%)+0.2727(11\%)=8.09\%$.

**Interpretation.** Minimum variance identifies risk, not necessarily the lowest expected return.

**Exam insight.** Calculate the weights first; expected return remains a weighted average.

### Worked example 13 — dominance

**Problem.** Portfolio X has return 9%, risk 12%; Y has return 9%, risk 15%; Z has return 11%, risk 12%. Which dominate X?

**Step-by-step solution.** X dominates Y because return is equal and risk lower. Z dominates X because risk is equal and return higher.

**Interpretation.** Only non-dominated portfolios belong on the efficient frontier.

**Exam insight.** Dominance needs at least one strict improvement and no deterioration.

### Worked example 14 — target-return weights

**Problem.** Assets return 6% and 14%. Find weights for a 10% target.

**Step-by-step solution.** $10\%=w(6\%)+(1-w)(14\%)$. Thus $w=0.50$ in each asset.

**Interpretation.** The target fixes weights in a two-asset fully invested portfolio.

**Exam insight.** This step uses returns; use the resulting weights in the variance equation afterward.

> **Knowledge check 8.** Is every minimum-variance-frontier portfolio efficient? **Answer:** No; the lower branch is dominated.

> **Knowledge check 9.** Does the GMV portfolio depend on expected returns? **Answer:** Its variance-minimizing weights depend on variances and covariances, not expected returns.

## 5. Risk-free combinations and the capital allocation line

Let $y$ be the fraction invested in risky portfolio P and $1-y$ the fraction in the risk-free asset:

$$E(R_c)=R_f+y[E(R_p)-R_f],\qquad \sigma_c=|y|\sigma_p$$

The capital allocation line (CAL) slope is the risky portfolio's Sharpe ratio. The best available CAL is tangent to the risky-asset efficient frontier. When its tangency portfolio is the market portfolio, the line is the capital market line (CML).

| Comparison 7 | CAL | CML |
|---|---|---|
| Risky portfolio | Any selected risky portfolio | Market portfolio |
| Slope | Its Sharpe ratio | Market Sharpe ratio |

| Comparison 8 | $0<y<1$ | $y=1$ | $y>1$ |
|---|---|---|---|
| Position | Lend; hold some risk-free asset | All in risky portfolio | Borrow/leverage risky portfolio |

### Worked example 15 — CAL return and risk

**Problem.** $R_f=3\%$, risky portfolio return is 9%, risk is 12%, and $y=0.75$. Find complete-portfolio return and risk.

**Step-by-step solution.** Return is $3\%+0.75(9\%-3\%)=7.5\%$. Risk is $0.75(12\%)=9\%$.

**Interpretation.** Lending 25% at the risk-free rate reduces both excess return and risk proportionally.

**Exam insight.** The risk-free asset contributes no variance or covariance.

### Worked example 16 — leveraged CAL

**Problem.** Use Example 15 with $y=1.25$.

**Step-by-step solution.** Return is $3\%+1.25(6\%)=10.5\%$. Risk is $1.25(12\%)=15\%$; the risk-free weight is −25%.

**Interpretation.** Borrowing magnifies both expected excess return and volatility.

**Exam insight.** A negative risk-free weight indicates borrowing, not a negative risk-free rate.

### Worked example 17 — CAL slope

**Problem.** A risky portfolio returns 10%, its risk is 14%, and $R_f=3\%$. Find the CAL slope.

**Step-by-step solution.** $(10\%-3\%)/14\%=0.50$.

**Interpretation.** The portfolio offers 0.50 units of expected excess return per unit of total risk.

**Exam insight.** A steeper feasible CAL dominates a flatter one for mean-variance investors.

### Worked example 18 — choose between CALs

**Problem.** Portfolio A returns 9% with 10% risk; B returns 12% with 18% risk; $R_f=3\%$. Choose the better CAL.

**Step-by-step solution.** Slopes: A $=(9-3)/10=0.60$; B $=(12-3)/18=0.50$. Choose A.

**Interpretation.** Higher stand-alone return does not guarantee better risk-adjusted opportunity.

**Exam insight.** Compare Sharpe ratios, not raw returns.

> **Knowledge check 10.** What does a CAL slope measure? **Answer:** Expected excess return per unit of total risk.

> **Knowledge check 11.** What does $y>1$ imply? **Answer:** Borrowing at the risk-free rate to lever the risky portfolio.

## 6. Risk aversion and optimal selection

A common mean-variance utility representation is:

$$U=E(R_c)-\tfrac12A\sigma_c^2$$

where $A>0$ measures risk aversion. Greater $A$ produces a lower allocation to the risky portfolio. With the utility form above, the optimal risky fraction is:

$$y^*=\frac{E(R_p)-R_f}{A\sigma_p^2}$$

### Worked example 19 — utility comparison

**Problem.** An investor has $A=4$. Portfolio X has return 8%, risk 10%; Y has return 11%, risk 18%. Which has higher utility?

**Step-by-step solution.** $U_X=0.08-0.5(4)(0.10^2)=0.060$. $U_Y=0.11-0.5(4)(0.18^2)=0.0452$. Choose X.

**Interpretation.** The extra expected return of Y does not compensate this investor for its extra variance.

**Exam insight.** Square standard deviation and use decimal inputs.

### Worked example 20 — optimal risky allocation

**Problem.** $E(R_p)=9\%$, $R_f=3\%$, $\sigma_p=15\%$, and $A=3$. Find $y^*$.

**Step-by-step solution.** $y^*=0.06/[3(0.15^2)]=0.8889$. Invest 88.89% in P and 11.11% risk-free. Expected return is $3\%+0.8889(6\%)=8.33\%$; risk is $0.8889(15\%)=13.33\%$.

**Interpretation.** This investor lends a small amount and holds most wealth in the tangency portfolio.

**Exam insight.** Higher risk aversion lowers $y^*$; it does not change the common tangency portfolio under the standard assumptions.

> **Knowledge check 12.** If risk aversion doubles, what happens to $y^*$, all else equal? **Answer:** It halves.

## Calculator guidance

Store weights and returns at full precision. For variance, enter decimals, calculate the variance first, and then apply the square-root key. When using a covariance matrix, verify symmetry and count every unique pair twice. On timeline-neutral portfolio problems, do not use TVM worksheets.

## Common mistakes and memory aids

- **Return averages; risk interacts.** Returns use weighted averages, while risk includes cross terms.
- **Co before rho.** Covariance has units; correlation rescales it to −1 through +1.
- **Frontier first, preference second.** Feasible portfolios determine the frontier; risk aversion selects a point.
- Never add standard deviations as though they were returns unless correlation is +1 and weights are long-only.
- Never call failure of historical correlation stability a calculation error; it is estimation risk.
- Do not confuse the CAL (any risky portfolio) with the CML (market portfolio).

## Exam tips

1. Write the two-asset variance formula before substituting.
2. Check weights sum to one unless the problem explicitly permits an uninvested balance.
3. Label variance and standard deviation distinctly.
4. Use dominance before doing unnecessary optimization.
5. For risk-free combinations, apply the risky weight to excess return and to risk.

## Quick revision sheet

| Task | Core relation | Interpretation |
|---|---|---|
| Expected return | $\sum w_iE(R_i)$ | Weighted average |
| Covariance | $\rho_{ij}\sigma_i\sigma_j$ | Direction and scale of co-movement |
| Portfolio variance | $\sum_i\sum_jw_iw_jCov_{ij}$ | Includes all interactions |
| Two-asset GMV weight | $(\sigma_B^2-Cov_{AB})/(\sigma_A^2+\sigma_B^2-2Cov_{AB})$ | Lowest-variance combination |
| CAL | $R_f+y(E(R_p)-R_f)$ | Risk-free plus risky exposure |
| CAL risk | $|y|\sigma_p$ | Scales linearly |
| Utility | $E(R)-\tfrac12A\sigma^2$ | Return adjusted for risk preference |
| Optimal risky fraction | $(E(R_p)-R_f)/(A\sigma_p^2)$ | Falls as risk aversion rises |

## 30-second summary

Portfolio return is a weighted average. Portfolio risk is not: covariance and correlation determine whether assets reinforce or offset one another. The global minimum-variance portfolio anchors the minimum-variance frontier; its upper branch is efficient. Adding a risk-free asset produces a CAL, whose slope is the Sharpe ratio. The tangency CAL gives the best risky portfolio, the CML is the market-based special case, and investor risk aversion determines the final mix of that risky portfolio and the risk-free asset.
## Portfolio decision application lab

## Worked Example 21 — Two-asset expected return

**Problem.** A portfolio invests 40% in an asset expected to return 5% and 60% in one expected to return 9%. **Solution.** (E(R_p)=0.40(5)+0.60(9)=7.4\%\). **Interpretation.** Expected portfolio return is the weighted average. **Exam insight:** weights, not risks, determine expected return.

## Worked Example 22 — Two-asset variance

**Problem.** Weights are 40% and 60%, standard deviations are 10% and 15%, and correlation is 0.25. **Solution.** (sigma_p^2=(0.4^2)(0.1^2)+(0.6^2)(0.15^2)+2(0.4)(0.6)(0.25)(0.1)(0.15)=0.0115), so (sigma_p=10.72\%\). **Interpretation.** Imperfect correlation reduces risk below the weighted average of standalone risks. **Exam insight:** the covariance term contains both weights and both standard deviations.

## Worked Example 23 — Capital allocation line

**Problem.** A risky portfolio returns 9% with 12% standard deviation; the risk-free rate is 3%. An investor puts 75% in the risky portfolio. **Solution.** Expected return (=3\%+0.75(9\%-3\%)=7.5\%\); risk (=0.75(12\%)=9\%\). **Interpretation.** Combining one risky portfolio with the risk-free asset traces a straight line. **Exam insight:** the risk-free allocation adds no variance.

## Worked Example 24 — Utility-based allocation

**Problem.** For (U=E(R)-\tfrac12A\sigma^2), compare portfolios X (8%, 10%) and Y (10%, 18%) for (A=4). **Solution.** (U_X=0.08-0.5(4)(0.10^2)=0.060); (U_Y=0.10-0.5(4)(0.18^2)=0.0352). **Interpretation.** The more risk-averse investor prefers X despite Y's higher expected return. **Exam insight:** variance uses decimal returns squared.

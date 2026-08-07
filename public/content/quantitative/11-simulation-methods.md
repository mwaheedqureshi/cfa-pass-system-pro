# Simulation of Financial Asset Prices and Returns

> **Scope notice:** The scope statements in this lesson are independently written for curriculum organization and are not official CFA Institute Learning Outcomes.

## Introduction

Simulation represents uncertain investment inputs and maps repeated draws into a distribution of possible outcomes.

## Why this topic matters

Many portfolio, valuation, and planning decisions depend on nonlinear interactions and tail outcomes that a single forecast cannot show.

## Official learning outcomes

The official 2027 module requires candidates to describe and explain investment applications of three approaches:

- historical simulation;
- bootstrap resampling; and
- Monte Carlo simulation.

The explanations below are original. The outcome wording is used only to define scope.

## Historical simulation

Historical simulation applies observed changes in market variables to current exposures. A portfolio-risk implementation normally defines the current positions, collects aligned historical risk-factor changes, applies each dated vector to today's portfolio, and orders the resulting profit-and-loss observations. Because the scenarios are empirical, skewness, fat tails, and observed cross-market dependence can enter without fitting a named distribution.

That realism has a boundary: only states present in the selected window can be replayed. Regime change, short security histories, missing observations, survivorship effects, and stale or non-synchronous prices can make the scenario set unrepresentative. A proxy may extend a history, but it introduces basis risk.

For current value $V_0$ and historical scenario return $r_i$, a simple scenario result is $P/L_i=V_0r_i$. Percentiles describe the ordered scenario distribution; they are conditional tail locations, not promises about the future.

## Bootstrapping

Bootstrap resampling treats the observed sample as an empirical population and repeatedly draws from it **with replacement**. Replacement is essential: one observation can appear several times in a resample while another is omitted. Repeating the procedure produces an empirical distribution of a statistic, price path, payoff, or other result.

Bootstrapping avoids imposing a named parametric distribution, but it is not assumption-free. The original sample must represent the population and the resampling design must respect relevant dependence. Independently resampling individual observations can destroy autocorrelation or volatility clustering. More resamples reduce numerical noise; they cannot repair bias or invent unobserved crises.

An investment application may resample returns into price paths, calculate an option payoff for every path, and summarize the payoff distribution. Another application estimates the sampling variability of volatility or another portfolio statistic.

## Monte Carlo simulation

Monte Carlo simulation specifies a stochastic process, generates pseudorandom draws from assumed distributions, maps those draws through a calculation engine, and summarizes many outcomes. The four practical stages are:

1. **Setup and parameterize:** define the target, horizon, process, parameters, units, and dependence assumptions.
2. **Generate scenarios:** draw random variables and create single-period outcomes or full paths.
3. **Evaluate scenarios:** revalue the portfolio, security, liability, or strategy in each scenario.
4. **Compile and analyze:** report means, dispersion, percentiles, tail frequencies, and sensitivity to assumptions.

For a geometric-Brownian-motion illustration, a one-step log return is

$$r_t=\left(r_f-\frac{\sigma^2}{2}\right)s+\sigma\sqrt{s}X,$$

and the next price is $P_t=P_{t-1}e^{r_t}$. These equations are conditional on lognormal-price and constant-parameter assumptions. They are not universal laws of asset prices.

### Dependence and correlated draws

Independent normal draws $Z_1$ and $Z_2$ can be transformed into correlated variables:

$$X_1=\sigma_1Z_1,\qquad X_2=\sigma_2\left(\rho Z_1+\sqrt{1-\rho^2}Z_2\right).$$

The shared $Z_1$ term creates the target covariance. Incorrect correlation assumptions can overstate diversification and understate joint losses, especially when dependence changes in stressed markets.

### Paths, percentiles, and convergence

A terminal-only payoff may need one draw per scenario; a path-dependent payoff needs every intermediate price. Percentiles locate outcomes in the ordered simulation distribution. A 5th percentile of 72 means roughly 5% of modeled trials are at or below 72—not that 72 is guaranteed or that the model has a 95% chance of being correct.

Increasing the number of valid trials reduces Monte Carlo sampling variation approximately at a square-root rate. Quadrupling trials roughly halves the standard error of a simulated mean. It does not reduce model risk, parameter risk, distribution risk, or implementation risk.

### Strengths and limitations

Monte Carlo is flexible enough for nonlinear, multi-factor, and path-dependent problems that lack convenient closed-form solutions. It supports sensitivity analysis and produces full conditional distributions. The trade-offs are computational cost, specification complexity, sampling noise, and dependence on assumptions. Deterministic special cases, independent calculations, fixed seeds, run-count stability, and assumption sensitivity are important validation controls.

## Core comparisons

| Method | Inputs | Output |
|---|---|---|
| Deterministic | One input set | One outcome |
| Sensitivity | One changed input | Isolated response |
| Scenario | Coherent input set | Scenario outcome |
| Stress | Extreme adverse inputs | Vulnerability |
| Monte Carlo | Probability model | Outcome distribution |

| Simulation step | Control |
|---|---|
| Define objective | Match decision and horizon |
| Specify inputs | Document sources and units |
| Choose distributions | Test support, tails, and skew |
| Model dependence | Validate correlations and regimes |
| Generate trials | Seed and cap runs |
| Summarize | Mean, dispersion, percentiles, tails |
| Validate | Benchmarks, sensitivity, diagnostics |

| Output | Interpretation |
|---|---|
| Mean | Model-implied average |
| Median | Middle trial |
| Percentile | Conditional tail location |
| Shortfall frequency | Trial proportion below threshold |

| Risk | Example |
|---|---|
| Input | Expected return estimated too high |
| Distribution | Thin tails assumed |
| Correlation | Crisis dependence understated |
| Implementation | Percentage/decimal error |
| Model | Important mechanism omitted |

| Resampling method | Source |
|---|---|
| Bootstrap | Draw with replacement from sample |
| Historical simulation | Replay observed vectors |
| Parametric simulation | Draw from fitted distributions |

| More iterations can reduce | More iterations cannot remove |
|---|---|
| Monte Carlo sampling noise | Model misspecification |
| Percentile instability | Biased inputs |
| Seed-specific variation | Structural change |

| Application | Typical output |
|---|---|
| Portfolio | Return and loss distribution |
| Option | Discounted payoff average |
| Retirement | Shortfall probability |
| Project | Value distribution |

| Reproducibility tool | Purpose |
|---|---|
| Seed | Repeat pseudorandom sequence |
| Versioned inputs | Recreate assumptions |
| Validation benchmark | Detect implementation errors |

## Worked examples and applied scenarios

```example
### Worked example 1 — Deterministic versus stochastic

**Problem and solution.** A deterministic 6% return makes 100 grow to 106. A stochastic model treats return as a draw, producing a distribution rather than one forecast.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 2 — Monte Carlo workflow 1

**Problem and solution.** Define terminal wealth, select return and volatility inputs, draw returns, compound paths, repeat, summarize, and validate.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 3 — Monte Carlo workflow 2

**Problem and solution.** At zero volatility, 100 compounded at 5% for 3 periods equals 115.7625 in every trial; dispersion is zero.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 4 — Monte Carlo workflow 3

**Problem and solution.** With uncertain returns, compute each path separately before taking percentiles; compounding the average draw is not the same operation.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 5 — Monte Carlo workflow 4

**Problem and solution.** A retirement model adds the contribution after each period. Timing must match the documented cash-flow convention.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 6 — Monte Carlo workflow 5

**Problem and solution.** Two assets require joint draws. Assuming zero correlation when stress correlation is positive can understate downside concentration.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 7 — Iteration precision

**Problem and solution.** If Monte Carlo SE is 2 with 1,000 trials, roughly four times the trials are needed to halve sampling SE, all else fixed.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 8 — Law of large numbers

**Problem and solution.** As valid independent trials grow, simulated averages stabilize around the model-implied expectation; the model itself does not become true.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 9 — Seed reproducibility

**Problem and solution.** Using seed 42 with the same algorithm and inputs reproduces the same draws, supporting debugging and audit.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 10 — Percentile interpretation

**Problem and solution.** A simulated 5th percentile of 72 means about 5% of modeled trials finish at or below 72; it is conditional on inputs.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 11 — Tail probability

**Problem and solution.** If 180 of 2,000 trials finish below initial wealth, the simulated probability is 180/2,000=9%.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 12 — Output mean and median

**Problem and solution.** A right-skewed terminal distribution may have mean 130 and median 115; rare large outcomes pull the mean upward.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 13 — Bootstrap 1

**Problem and solution.** From returns [1%,2%,3%], a size-3 resample might be [2%,2%,1%]. Replacement permits repetition and omission.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 14 — Bootstrap 2

**Problem and solution.** Bootstrap means approximate sampling uncertainty using the empirical sample as the resampling population.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 15 — Bootstrap 3

**Problem and solution.** A 95% percentile interval uses the 2.5th and 97.5th percentiles of bootstrap estimates.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 16 — Bootstrap 4

**Problem and solution.** A biased or unrepresentative original sample produces resamples that inherit those defects.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 17 — Sensitivity analysis

**Problem and solution.** Change volatility alone while holding return and horizon fixed to isolate how dispersion responds.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 18 — Scenario analysis

**Problem and solution.** A recession scenario jointly lowers returns, raises volatility, and changes correlations coherently.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 19 — Stress testing

**Problem and solution.** An extreme liquidity shock is imposed deliberately; it need not represent a probability-weighted forecast.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 20 — Historical simulation

**Problem and solution.** Replaying observed historical vectors preserves observed co-movement but assumes history is informative for the future.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 21 — Distribution risk

**Problem and solution.** Normal draws can underrepresent skew or fat tails; more iterations only estimate the chosen normal model more precisely.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 22 — Implementation risk

**Problem and solution.** A percentage entered as 6 rather than .06 creates garbage output. Unit validation and sensitivity checks reveal the error.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 23 — Option valuation application

**Problem and solution.** Simulate risk-factor paths, calculate path payoffs, discount, and average under the valuation model; model assumptions remain decisive.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 24 — Planning application

**Problem and solution.** Report a range and shortfall probability rather than presenting the average terminal wealth as certain.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

> **Knowledge check 1.** Why align historical risk-factor changes by date? **Answer:** To preserve the contemporaneous co-movement observed in each scenario.

> **Knowledge check 2.** What cannot historical simulation generate? **Answer:** A market regime or relationship absent from the selected history.

> **Knowledge check 3.** What does “with replacement” permit? **Answer:** A source observation may appear repeatedly or be omitted from a resample.

> **Knowledge check 4.** Can more bootstrap resamples repair a biased sample? **Answer:** No. They estimate the biased empirical distribution more precisely.

> **Knowledge check 5.** What are the four Monte Carlo stages? **Answer:** Parameterize, generate scenarios, evaluate scenarios, and compile/analyze results.

> **Knowledge check 6.** Why simulate full price paths? **Answer:** A path-dependent payoff or decision uses intermediate values, not only the terminal value.

> **Knowledge check 7.** What does a fixed random seed control? **Answer:** It reproduces the same pseudorandom sequence for testing and comparison.

> **Knowledge check 8.** What happens to mean-estimate standard error when valid trials quadruple? **Answer:** It is approximately halved.

> **Knowledge check 9.** What does increasing trial count not fix? **Answer:** Misspecified processes, biased parameters, unsuitable distributions, or coding errors.

> **Knowledge check 10.** Why transform independent normal draws? **Answer:** To impose the required volatility and correlation structure on simulated factors.

> **Knowledge check 11.** How should a simulated 5th percentile be stated? **Answer:** About 5% of modeled outcomes lie at or below it, conditional on the assumptions.

> **Knowledge check 12.** What is a strong implementation test? **Answer:** Verify that a zero-volatility special case matches deterministic compounding exactly.

## Common mistakes

- Treating an analytical output as certain or self-validating.
- Ignoring data provenance, units, dependence, and selection.
- Reporting one convenient metric without its decision context.
- Assuming more computation repairs a flawed model or dataset.

## Memory aids and exam tips

**Inputs, process, outputs, limits.** Classify the task first, calculate with validated inputs, then interpret conditionally and identify governance controls.

## One-page revision sheet

Review the comparison tables, formulas, tool outputs, assumptions, and failure modes. Match each method to the question it can answer and explicitly state what it cannot establish.

## 30-second summary

Use data and models as decision support, not substitutes for evidence or judgment. Validate inputs, separate fitting from evaluation, quantify uncertainty with appropriate metrics, test sensitivity, preserve reproducibility, and maintain accountable human oversight.

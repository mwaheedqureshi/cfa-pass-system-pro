# Statistical Characteristics of Asset Returns
> [!INFO]
> Original instruction aligned to stored learning-outcome references; not official curriculum text.
## Why descriptive statistics matter
Return data are noisy. Descriptive statistics compress observations into useful statements about location, dispersion, and shape—but no single statistic tells the whole story.
## Learning outcomes
Calculate and interpret measures of central tendency, location, dispersion, skewness, and kurtosis; distinguish population parameters from sample statistics; and select measures appropriate to investment data.
## Data, populations, samples, and distributions
An observation is one recorded value. A population contains every item of interest; a sample is a subset. Greek letters commonly denote population parameters and Roman symbols sample statistics. Frequency is a count, relative frequency is count divided by total, and cumulative frequency adds categories through a boundary. Histograms show interval frequencies; bin choices affect appearance.
| Concept | Population | Sample |
|---|---|---|
| Mean | μ | x̄ |
| Variance denominator | N | n−1 |
| Purpose | Describe complete group | Estimate population from subset |
| Uncertainty | No sampling error for that group | Subject to sampling error |
### Worked example 1
```example
Problem
Returns 1%, 2%, 2%, 5% occur with counts 2, 3, 4, 1. Find relative and cumulative frequency through 2%.
Step-by-step solution
Total=10. Relative frequency at 2%=4/10=40%. Cumulative count through 2%=2+3+4=9, or 90%.
Interpretation
Nine of ten observations do not exceed 2%.
Exam insight
Cumulative frequency follows ordered values, not arbitrary labels.
```
> [!TIP]
> Knowledge check 1: Does a sample statistic describe a population with certainty? **No.**
## Central tendency
```formula
Arithmetic mean = Σxi/n
Weighted mean = Σwixi, with Σwi=1
Geometric mean = [Π(1+Ri)]^(1/n)−1
Harmonic mean = n/Σ(1/xi)
```
Median is the ordered middle; mode is most frequent. Quantiles divide ordered data: quartiles into four, quintiles five, deciles ten, percentiles one hundred.
| Quantile name | Ordered groups | Typical boundary count |
|---|---:|---:|
| Quartiles | 4 | 3 |
| Quintiles | 5 | 4 |
| Deciles | 10 | 9 |
| Percentiles | 100 | 99 |
| Measure | Best use | Main sensitivity |
|---|---|---|
| Arithmetic mean | Additive average | Outliers |
| Weighted mean | Unequal importance | Weight choice |
| Geometric mean | Compound growth | Requires valid wealth relatives |
| Harmonic mean | Average ratios with fixed numerator | Zero/negative inputs |
| Median | Typical skewed observation | Ignores distance |
| Mode | Most common value/category | May be multiple or absent |
### Worked example 2
```example
Problem
Find the arithmetic mean of 2%, 5%, −1%, 6%.
Step-by-step solution
Sum=12%; divide by 4: 3%.
Interpretation
The average one-period observation is 3%.
Exam insight
Arithmetic mean is not compound growth.
```
### Worked example 3
```example
Problem
A portfolio weights 60% at 8% and 40% at 3%.
Step-by-step solution
0.60(8%)+0.40(3%)=6%.
Interpretation
The portfolio expected return is 6%.
Exam insight
Weights must sum to one.
```
### Worked example 4
```example
Problem
Returns are +20% and −10%. Find geometric mean.
Step-by-step solution
√(1.20×0.90)−1=3.923%.
Interpretation
Wealth compounded about 3.92% annually.
Exam insight
The arithmetic mean, 5%, overstates compound growth.
```
### Worked example 5
```example
Problem
Average speeds over equal distances are 30 and 60 km/h.
Step-by-step solution
Harmonic mean=2/(1/30+1/60)=40.
Interpretation
Equal-distance average speed is 40 km/h.
Exam insight
Use harmonic mean for appropriate rates with a fixed numerator.
```
### Worked example 6
```example
Problem
For 1, 3, 3, 7, 20 find median and mode.
Step-by-step solution
Ordered middle=3; most frequent=3.
Interpretation
Both resist the large upper outlier better than the mean.
Exam insight
Mode may be non-unique in other samples.
```
### Worked example 7
```example
Problem
Interpret the 75th percentile return of 9%.
Step-by-step solution
Locate the boundary with about 75% of observations at or below it.
Interpretation
About one quarter exceed 9% under the chosen convention.
Exam insight
Percentile calculation conventions can differ; follow the stated method.
```
> [!TIP]
> Knowledge check 2: Which mean describes compound growth? **Geometric mean.**
>
> Knowledge check 3: Which location measure is often most robust for skewed data? **Median.**
>
> Knowledge check 4: Which mean handles unequal importance? **Weighted mean.**
## Dispersion
Range=max−min. Mean absolute deviation averages absolute distances. Variance averages squared deviations; standard deviation restores original units.
```formula
Population variance σ²=Σ(xi−μ)²/N
Sample variance s²=Σ(xi−x̄)²/(n−1)
Coefficient of variation=standard deviation/mean
Sharpe ratio=(portfolio return−risk-free return)/standard deviation
```
| Measure | Units | Use |
|---|---|---|
| Range | Original | Quick spread |
| MAD | Original | Average absolute distance |
| Variance | Squared | Mathematical dispersion |
| Standard deviation | Original | Typical volatility scale |
| CV | Unitless | Risk per unit of mean |
### Worked example 8
```example
Problem
For 2,4,6 calculate population variance.
Step-by-step solution
Mean=4; squared deviations=4,0,4; divide 8 by N=3: 2.6667.
Interpretation
Population standard deviation is √2.6667=1.633.
Exam insight
Use N only when observations are the complete population.
```
### Worked example 9
```example
Problem
Treat 2,4,6 as a sample.
Step-by-step solution
Sum squared deviations=8; divide by n−1=2: s²=4; s=2.
Interpretation
Sample correction produces a larger estimate.
Exam insight
Do not confuse n and n−1.
```
### Worked example 10
```example
Problem
Mean return=8%, standard deviation=12%. Find CV.
Step-by-step solution
CV=12%/8%=1.5.
Interpretation
Dispersion is 1.5 units per unit of mean return.
Exam insight
CV is unstable when mean is near zero.
```
### Worked example 11
```example
Problem
Return=9%, risk-free=3%, standard deviation=10%. Find Sharpe ratio.
Step-by-step solution
(9%−3%)/10%=0.60.
Interpretation
Excess return equals 0.60 per unit of total volatility.
Exam insight
Inputs must use consistent periods.
```
> [!TIP]
> Knowledge check 5: What is the sample-variance denominator? **n−1.**
>
> Knowledge check 6: What units does standard deviation use? **The original data units.**
## Distribution shape
Positive skew has a longer right tail and commonly mean > median > mode; negative skew reverses that ordering. Kurtosis concerns tail weight and peak shape relative to a normal reference: mesokurtic is reference-like, leptokurtic has heavier tails, platykurtic lighter tails. Excess kurtosis equals kurtosis minus 3 under the common Pearson convention.
| Shape | Tail | Typical ordering |
|---|---|---|
| Symmetric | Balanced | mean=median=mode |
| Positive skew | Long right | mean>median>mode |
| Negative skew | Long left | mean<median<mode |
| Leptokurtic | Heavier | More extreme observations |
| Platykurtic | Lighter | Fewer extreme observations |
### Worked example 12
```example
Problem
Mean=8, median=5, mode=3. Interpret shape.
Step-by-step solution
8>5>3 matches positive-skew ordering.
Interpretation
A long right tail likely pulls the mean upward.
Exam insight
Ordering is a clue, not proof of an exact distribution.
```
### Worked example 13
```example
Problem
A return series has kurtosis 5.2. Find excess kurtosis.
Step-by-step solution
5.2−3=2.2.
Interpretation
Positive excess indicates leptokurtic tail behavior relative to normal.
Exam insight
Confirm whether kurtosis or excess kurtosis is quoted.
```
### Worked example 14
```example
Problem
Most returns cluster near 1%, with one −35% result. Select a central measure.
Step-by-step solution
Recognize negative outlier; compare mean and median; select median for a robust typical observation.
Interpretation
Median reduces domination by the crash observation.
Exam insight
Do not discard outliers without a justified data policy.
```
### Worked example 15
```example
Problem
Choose between standard deviation and CV for funds with means 5% and 10%.
Step-by-step solution
If comparing absolute volatility, use standard deviation; for dispersion per unit of mean, use CV.
Interpretation
Statistic choice follows the analytical question.
Exam insight
No statistic is universally best.
```
Outliers may be errors or genuine tail events. Trimming removes extremes; winsorization caps them. Use only under an explicit, justified policy because both alter data.
> [!TIP]
> Knowledge check 7: What shape has a long left tail? **Negative skew.**
>
> Knowledge check 8: What does positive excess kurtosis indicate? **Leptokurtic behavior relative to normal.**
## Common mistakes, exam tips, and memory aids
- Sorting is required for medians and quantiles.
- Geometric mean uses wealth relatives.
- Variance has squared units; standard deviation does not.
- **Right tail pulls mean right.** **Sample sacrifices one degree: n−1.**
- Descriptive statistics summarize history; they do not guarantee future distributions.
## One-page revision sheet
| Question | Statistic |
|---|---|
| Typical symmetric value | Mean |
| Typical skewed value | Median |
| Most frequent | Mode |
| Compound return | Geometric mean |
| Unequal importance | Weighted mean |
| Complete-group dispersion | Divide by N |
| Sample estimate | Divide by n−1 |
| Relative dispersion | CV |
| Tail asymmetry | Skewness |
| Tail heaviness | Kurtosis |
## 30-second summary
Describe data with location, dispersion, and shape together. Match population/sample denominators, use geometric mean for compounding, median for outlier-resistant location, standard deviation for volatility scale, CV for relative dispersion, skewness for asymmetry, and kurtosis for tail behavior. Treat outliers and summary statistics with judgment.
## Risk-statistics application lab

### Worked Example 16 — sample covariance
**Problem.** Paired return deviations are (−2%, −1%), (0%, 1%), and (2%, 0%). **Solution.** Cross-products sum to 0.0002; divide by $n-1=2$ to obtain covariance 0.0001. **Interpretation.** Positive covariance indicates same-direction linear co-movement on average. **Exam insight.** Keep decimal units and the sample denominator.

### Worked Example 17 — correlation
**Problem.** Covariance is 0.0012 and standard deviations are 10% and 20%. **Solution.** $\rho=0.0012/(0.10\times0.20)=0.06$. **Interpretation.** Linear association is weakly positive. **Exam insight.** Correlation must lie between −1 and +1.

### Worked Example 18 — target semideviation
**Problem.** Returns are −6%, 1%, 4%, and 9%; target is 2%. **Solution.** Downside deviations are −8% and −1%; zeros apply otherwise. Using the sample convention, squared downside deviations sum to $0.08^2+0.01^2=0.0065$; divide by $n-1=3$ and take the square root to obtain 4.65%. **Interpretation.** Only outcomes below target contribute. **Exam insight.** Distinguish the sample denominator $n-1$ from a population convention before calculating.

### Worked Example 19 — coefficient of variation
**Problem.** Asset A has expected return 8% and risk 12%; B has 10% and 18%. **Solution.** $CV_A=1.50$ and $CV_B=1.80$. **Interpretation.** A has less total risk per unit of expected return. **Exam insight.** CV is problematic when the mean is zero or negative.

### Worked Example 20 — skewness and kurtosis selection
**Problem.** A return sample has a long left tail and frequent extremes. **Solution.** It is negatively skewed and likely leptokurtic relative to a normal distribution. **Interpretation.** Mean and standard deviation alone understate the shape information. **Exam insight.** Skewness concerns asymmetry; kurtosis concerns tail weight.

> **Knowledge Check 9.** Does zero correlation prove independence? **Answer:** No, except under restrictive distributional assumptions.
> **Knowledge Check 10.** Which statistic focuses on observations below a target? **Answer:** Semideviation.

# Introduction to Financial Data Science

> **Scope notice:** The scope statements in this lesson are independently written for curriculum organization and are not official CFA Institute Learning Outcomes.

## Introduction

Programming, data science, and AI can improve scale and consistency in investment workflows when data controls and human accountability remain central.

## Why this topic matters

Analysts must understand data structures, model evaluation, bias, leakage, and AI risks even when they do not implement software.

## Independent scope statements

- **DAI-01:** Explain how programming and data science support investment analysis.
- **DAI-02:** Distinguish common financial data structures, including cross-sectional, time-series, and panel data.
- **DAI-03:** Explain common data-cleaning and data-quality problems.
- **DAI-04:** Identify look-ahead bias, survivorship bias, selection bias, and data leakage.
- **DAI-05:** Distinguish training, validation, and test datasets.
- **DAI-06:** Distinguish supervised learning from unsupervised learning.
- **DAI-07:** Distinguish regression, classification, clustering, and dimensionality-reduction tasks.
- **DAI-08:** Explain overfitting, underfitting, and the bias-variance trade-off.
- **DAI-09:** Explain the purpose of regularization, cross-validation, and feature engineering.
- **DAI-10:** Interpret a confusion matrix and calculate or interpret accuracy, precision, recall, specificity, and F1 score.
- **DAI-11:** Explain class imbalance and why accuracy alone may be misleading.
- **DAI-12:** Explain ROC curves and AUC conceptually.
- **DAI-13:** Explain model interpretability, explainability, governance, and human oversight.
- **DAI-14:** Identify algorithmic bias, privacy, security, and ethical risks in investment applications.
- **DAI-15:** Explain generative AI and large language models conceptually.
- **DAI-16:** Identify hallucination, prompt sensitivity, stale-data, confidentiality, and automation-bias risks.
- **DAI-17:** Explain retrieval-augmented generation conceptually without implementation detail.
- **DAI-18:** Evaluate appropriate and inappropriate uses of AI in investment research, portfolio management, risk, and compliance.

## Core comparisons

| Data structure | Investment example |
|---|---|
| Cross-sectional | Many firms at one date |
| Time series | One variable through time |
| Panel | Many entities through time |
| Unstructured | Filings, calls, news text |

| Split | Purpose |
|---|---|
| Training | Fit parameters |
| Validation | Tune and compare |
| Test | Final unbiased evaluation |

| Learning task | Target labels? | Output |
|---|---|---|
| Regression | Yes | Continuous value |
| Classification | Yes | Class/probability |
| Clustering | No | Groups |
| Dimensionality reduction | No | Compressed representation |

| Fit pattern | Likely diagnosis |
|---|---|
| Strong train, weak validation | Overfitting |
| Weak train and validation | Underfitting |
| Stable across folds | Better evidence of robustness |

| Metric | Formula focus |
|---|---|
| Accuracy | All correct predictions |
| Precision | Purity of predicted positives |
| Recall | Coverage of actual positives |
| Specificity | Coverage of actual negatives |
| F1 | Precision-recall balance |

| Risk | Mechanism |
|---|---|
| Look-ahead | Future information enters past decision |
| Survivorship | Failed entities omitted |
| Leakage | Holdout information affects fitting |
| Selection | Sample differs systematically from target |

| AI risk | Control |
|---|---|
| Hallucination | Verify sources and calculations |
| Confidentiality | Approved systems and access controls |
| Staleness | Retrieve dated authoritative data |
| Automation bias | Independent human challenge |

| Governance element | Question |
|---|---|
| Ownership | Who is accountable? |
| Validation | Was performance independently tested? |
| Monitoring | Has data or behavior drifted? |
| Escalation | When is use stopped or overridden? |

## Worked examples and applied scenarios

```example
### Worked example 1 — Python role

**Problem and solution.** A repeatable script can apply identical cleaning and calculations across many securities; governance still requires review and version control.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 2 — Data types

**Problem and solution.** A price is numeric, a ticker is text, and a missing date is not zero. Type validation prevents silent corruption.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 3 — Lists and dictionaries

**Problem and solution.** A list preserves an ordered sequence; a dictionary maps keys such as tickers to attributes.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 4 — Arrays and vectorization

**Problem and solution.** Vectorized return calculations reduce repetitive manual operations but still require aligned dates and units.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 5 — Data frames

**Problem and solution.** Rows can represent dates and columns assets; labels help align observations, but duplicate keys must be checked.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 6 — Missing values

**Problem and solution.** Filling missing returns with zero invents performance. Investigate cause and choose a documented treatment.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 7 — Duplicate observations

**Problem and solution.** A duplicated trade doubles its influence; identify the business key before deduplication.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 8 — Outliers

**Problem and solution.** A 900% return may be real or a split error. Investigate rather than automatically delete.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 9 — Data validation

**Problem and solution.** A rule requiring probabilities in [0,1] catches impossible inputs before modeling.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 10 — Structured versus unstructured

**Problem and solution.** A price table is structured; filings and transcripts are largely unstructured text.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 11 — Cross-sectional data

**Problem and solution.** One-date valuation ratios for 500 firms form a cross section.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 12 — Time-series data

**Problem and solution.** Daily index returns across ten years form a time series.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 13 — Panel data

**Problem and solution.** Monthly returns for many firms across time form panel data.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 14 — Look-ahead bias

**Problem and solution.** Using a filing before its public timestamp contaminates a historical backtest.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 15 — Survivorship bias

**Problem and solution.** Studying only current index members omits failed or removed firms and can overstate results.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 16 — Data leakage

**Problem and solution.** Fitting preprocessing on all data before splitting lets test information influence training.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 17 — Train validation test

**Problem and solution.** Fit on training, tune on validation, and reserve test data for final unbiased evaluation.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 18 — Supervised regression

**Problem and solution.** Predicting a continuous next-month return from labeled examples is supervised regression.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 19 — Supervised classification

**Problem and solution.** Predicting default versus no default from labeled loans is classification.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 20 — Unsupervised clustering

**Problem and solution.** Grouping firms by observed characteristics without target labels is clustering.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 21 — Dimensionality reduction

**Problem and solution.** Compressing many correlated features into fewer components is unsupervised representation.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 22 — Overfitting

**Problem and solution.** Excellent training results with weak validation results indicate learned noise.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 23 — Underfitting

**Problem and solution.** Poor results on both training and validation data suggest inadequate model flexibility or features.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
## Supplementary — extended model evaluation

The following metrics and techniques are useful professional extensions, but they are outside the verified LM11 outcome boundary and are excluded from official assessments.

### Worked example 24 — Regularization

**Problem and solution.** Penalizing excessive coefficient size can reduce variance, though penalty strength needs validation.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 25 — Accuracy

**Problem and solution.** TP=40,FP=10,TN=30,FN=20 gives accuracy=(40+30)/100=70%.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 26 — Precision

**Problem and solution.** The same matrix gives precision=40/(40+10)=80%.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 27 — Recall

**Problem and solution.** Recall=40/(40+20)=66.67%.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 28 — Specificity

**Problem and solution.** Specificity=30/(30+10)=75%.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 29 — F1 score

**Problem and solution.** F1=2(.8)(.6667)/(.8+.6667)=72.73%.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 30 — Class imbalance

**Problem and solution.** If defaults are 1%, predicting no default always is 99% accurate but useless for detecting defaults.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 31 — ROC and AUC

**Problem and solution.** ROC compares true-positive and false-positive rates across thresholds; AUC summarizes ranking, not calibration.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 32 — Cross-validation

**Problem and solution.** Average validation scores across folds to assess stability; preserve time ordering for time-series tasks.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 33 — Interpretability

**Problem and solution.** A transparent model may be preferred when decisions need defensible explanations and controls.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 34 — Algorithmic bias

**Problem and solution.** Historical labels reflecting unequal treatment can transmit bias into predictions.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 35 — Privacy

**Problem and solution.** Client data should enter only approved systems with access, retention, and purpose controls.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 36 — Model governance

**Problem and solution.** Document ownership, validation, changes, limits, monitoring, and escalation.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
## Supplementary — generative-AI workflow extensions

The following extended generative-AI, retrieval, confidentiality, and automation-risk cases are retained as clearly optional professional enrichment. They do not contribute to official completion, official question counts, or default assessments.

### Worked example 37 — Hallucination

**Problem and solution.** A fluent generated claim with a fabricated citation must be rejected through source verification.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 38 — Prompt sensitivity

**Problem and solution.** Material output changes from minor prompt wording require robustness checks and human judgment.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 39 — Stale information

**Problem and solution.** An LLM knowledge cutoff can miss current filings; retrieve dated authoritative sources.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 40 — RAG concept

**Problem and solution.** Retrieval supplies relevant governed documents to generation, improving grounding but not guaranteeing truth.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 41 — Confidentiality

**Problem and solution.** Pasting nonpublic holdings into an unapproved public model creates exposure risk.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 42 — Automation bias

**Problem and solution.** Human reviewers may defer to confident output; require independent checks and accountable approval.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 43 — Investment research use

**Problem and solution.** AI can draft a first-pass summary, but analysts must verify facts, citations, reasoning, and material omissions.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 44 — Portfolio use

**Problem and solution.** A model may support scenario screening; fiduciary decisions require constraints, oversight, and documented judgment.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 45 — Compliance use

**Problem and solution.** Automated surveillance can prioritize cases but false positives and false negatives need governed review.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 46 — Feature engineering

**Problem and solution.** A debt ratio may be more meaningful than raw debt, provided it uses information available at the decision time.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 47 — Calibration

**Problem and solution.** Among predictions near 20%, roughly 20% occurrence supports calibration; ranking quality alone does not ensure it.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

```example
### Worked example 48 — Human oversight

**Problem and solution.** A named accountable person must be able to challenge, override, and escalate model outputs.

**Interpretation.** The result is conditional on the stated data, process, and assumptions.

**Exam insight.** Identify the task, inputs, validation rule, and interpretation before selecting a method.
````

> **Knowledge check 1.** What is the central safeguard? **Answer:** Validate inputs and preserve the method’s assumptions and limitations.

> **Knowledge check 2.** What should the conclusion avoid? **Answer:** Do not turn conditional evidence into certainty or autonomous judgment.

> **Knowledge check 3.** What is the central safeguard? **Answer:** Validate inputs and preserve the method’s assumptions and limitations.

> **Knowledge check 4.** What should the conclusion avoid? **Answer:** Do not turn conditional evidence into certainty or autonomous judgment.

> **Knowledge check 5.** What is the central safeguard? **Answer:** Validate inputs and preserve the method’s assumptions and limitations.

> **Knowledge check 6.** What should the conclusion avoid? **Answer:** Do not turn conditional evidence into certainty or autonomous judgment.

> **Knowledge check 7.** What is the central safeguard? **Answer:** Validate inputs and preserve the method’s assumptions and limitations.

> **Knowledge check 8.** What should the conclusion avoid? **Answer:** Do not turn conditional evidence into certainty or autonomous judgment.

> **Knowledge check 9.** What is the central safeguard? **Answer:** Validate inputs and preserve the method’s assumptions and limitations.

> **Knowledge check 10.** What should the conclusion avoid? **Answer:** Do not turn conditional evidence into certainty or autonomous judgment.

> **Knowledge check 11.** What is the central safeguard? **Answer:** Validate inputs and preserve the method’s assumptions and limitations.

> **Knowledge check 12.** What should the conclusion avoid? **Answer:** Do not turn conditional evidence into certainty or autonomous judgment.

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

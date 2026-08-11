# Financial Statement Analysis interactive plan

Planning only; no components are implemented. 21 tools are planned across the 12 official modules (1-3 per module, scaled to each module's calculation and statement-analysis intensity). Every tool below is justified by a specific official LOS; none is proposed purely for variety. Implementation happens only in each module's own future production release, never in this mapping-only release.

## FSA-LM1 — Introduction to Financial Statement Analysis

### Financial Statement Analysis Framework Navigator
- Module: FSA-LM1
- LOS: describe the steps in the financial statement analysis framework
- Learning goal: internalize the sequence of the analysis framework (define purpose, gather data, process data, analyze/interpret, develop conclusions, follow up) as an active decision aid rather than a memorized list.
- Inputs: scenario selector (e.g., credit analysis, equity analysis, M&A due diligence); step-by-step guided prompts.
- Outputs: framework-stage summary and a checklist of the information sources relevant to the selected scenario.
- Calculations: none (purely a structured/qualitative aid).
- Statement impact: none directly; orients the learner before quantitative modules begin.
- Accessibility: explicit labels, keyboard-operable step navigation, non-color status encoding, responsive layout.
- Future implementation priority: low (supports the framework module; not calculation-critical).

## FSA-LM2 — Analyzing Income Statements

### EPS / Diluted EPS Calculator
- Module: FSA-LM2
- LOS: describe how earnings per share is calculated and calculate and interpret a company's basic and diluted earnings per share for companies with simple and complex capital structures including those with antidilutive securities
- Learning goal: correctly apply the treasury-stock method and if-converted method, and correctly exclude antidilutive securities.
- Inputs: net income, preferred dividends, weighted-average shares, convertible security terms (conversion ratio, coupon/dividend, tax rate), option/warrant terms (strike price, average market price).
- Outputs: basic EPS, diluted EPS, per-security dilutive/antidilutive classification, and a worked reconciliation.
- Calculations: pure functions implementing the treasury-stock method, if-converted method, and antidilution test.
- Statement impact: explains how each convertible/option instrument changes the EPS denominator and numerator.
- Accessibility: explicit labels, numeric input validation, non-color dilutive/antidilutive indicator (text + icon), responsive layout.
- Future implementation priority: high (core calculation LOS, historically exam-favored).

### Revenue and Expense Recognition Classifier
- Module: FSA-LM2
- LOS: describe general principles of revenue recognition, specific revenue recognition applications, and implications of revenue recognition choices for financial analysis; describe general principles of expense recognition... and contrast costs that are capitalized versus those that are expensed
- Learning goal: practice classifying revenue-recognition scenarios and capitalize-vs-expense decisions and see the income-statement/balance-sheet consequences.
- Inputs: scenario selector (e.g., long-term contract, principal-vs-agent, R&D cost, software development cost).
- Outputs: recognition timing/classification decision plus the resulting income-statement and balance-sheet effect.
- Calculations: none beyond simple period-allocation arithmetic where relevant.
- Statement impact: shows capitalize-vs-expense effect on net income, total assets, and future-period earnings.
- Accessibility: explicit labels, keyboard-operable scenario selector, non-color-only classification indicator, responsive layout.
- Future implementation priority: medium.

## FSA-LM3 — Analyzing Balance Sheets

### Common-Size Statement Builder (balance sheet)
- Module: FSA-LM3
- LOS: calculate and interpret common-size balance sheets and related financial ratios
- Learning goal: build and interpret a common-size balance sheet from raw statement inputs.
- Inputs: balance-sheet line items (assets, liabilities, equity).
- Outputs: common-size percentages per line item, plus flagged year-over-year or peer deviations.
- Calculations: each line item as a percentage of total assets.
- Statement impact: highlights structural shifts in asset/liability/equity composition.
- Accessibility: explicit labels, sortable/keyboard-navigable table, non-color deviation flags, responsive layout.
- Future implementation priority: medium-high.

### Financial Instrument and Intangible Disclosure Explorer
- Module: FSA-LM3
- LOS: explain the financial reporting and disclosures related to intangible assets; ...goodwill; ...financial instruments; ...non-current liabilities
- Learning goal: practice reading disclosure scenarios and identifying the correct balance-sheet treatment and classification.
- Inputs: scenario selector across intangibles/goodwill/financial instruments/non-current liabilities.
- Outputs: correct classification and a short interpretation of the disclosure's analytical implication.
- Calculations: none (classification-focused).
- Statement impact: shows which balance-sheet category and disclosure note each scenario affects.
- Accessibility: explicit labels, keyboard-operable, non-color classification badges, responsive layout.
- Future implementation priority: medium.

## FSA-LM4 — Analyzing Statements of Cash Flows I

### Financial Statement Linkage Explorer
- Module: FSA-LM4
- LOS: describe how the cash flow statement is linked to the income statement and the balance sheet
- Learning goal: see how a change on the income statement or balance sheet flows through to the cash flow statement.
- Inputs: simplified income-statement and balance-sheet line items across two periods.
- Outputs: a derived cash flow statement (indirect method) with each line traced to its source.
- Calculations: standard indirect-method reconciliation (net income adjusted for non-cash items and working-capital changes).
- Statement impact: makes the three-statement linkage explicit and interactive.
- Accessibility: explicit labels, keyboard-navigable linkage diagram with a textual summary, non-color linkage indicators, responsive layout.
- Future implementation priority: high (foundational cross-statement tool).

### Direct/Indirect Cash Flow Conversion Trainer
- Module: FSA-LM4
- LOS: describe the steps in the preparation of direct and indirect cash flow statements...; demonstrate the conversion of cash flows from the indirect to direct method; contrast cash flow statements prepared under IFRS and US GAAP
- Learning goal: practice converting an indirect-method statement to direct-method presentation, and compare IFRS/US GAAP classification choices.
- Inputs: indirect-method cash flow statement line items; IFRS-vs-US-GAAP classification toggle (e.g., interest/dividends paid or received).
- Outputs: the equivalent direct-method statement, and a side-by-side IFRS/US GAAP classification comparison.
- Calculations: pure conversion functions (e.g., cash collected from customers = revenue − increase in accounts receivable).
- Statement impact: demonstrates that direct and indirect methods reconcile to the same operating cash flow total.
- Accessibility: explicit labels, keyboard-operable toggle, non-color classification differences, responsive layout.
- Future implementation priority: high.

## FSA-LM5 — Analyzing Statements of Cash Flows II

### Free Cash Flow Calculator
- Module: FSA-LM5
- LOS: calculate and interpret free cash flow to the firm, free cash flow to equity, and performance and coverage cash flow ratios
- Learning goal: correctly calculate FCFF and FCFE from different starting points (net income, CFO, EBIT/EBITDA) and interpret cash flow-based ratios.
- Inputs: net income or CFO, interest expense, tax rate, net borrowing, capital expenditures, depreciation/non-cash charges.
- Outputs: FCFF, FCFE, and a set of cash flow performance/coverage ratios with interpretation text.
- Calculations: pure functions for each FCFF/FCFE derivation path (from net income, from CFO, from EBIT/EBITDA) and the standard cash flow ratios.
- Statement impact: shows how each derivation path reconciles to the same result.
- Accessibility: explicit labels, numeric validation, non-color pass/fail interpretation cues, responsive layout.
- Future implementation priority: high.

## FSA-LM6 — Analysis of Inventories

### Inventory Method Comparator
- Module: FSA-LM6
- LOS: calculate and explain how inflation and deflation of inventory costs affect the financial statements and ratios of companies that use different inventory valuation methods
- Learning goal: see side-by-side how FIFO, LIFO, and weighted-average produce different COGS, ending inventory, and ratio outcomes under inflation or deflation.
- Inputs: purchase layers (units, unit cost, date), units sold, price-trend direction.
- Outputs: COGS, ending inventory, gross profit, and key ratios under each method, plus the LIFO reserve/adjustment where applicable.
- Calculations: pure FIFO/LIFO/weighted-average cost-flow functions and a LIFO-to-FIFO adjustment function.
- Statement impact: demonstrates the income-statement and balance-sheet divergence between methods under inflation/deflation.
- Accessibility: explicit labels, sortable/keyboard-navigable comparison table, non-color method indicators, responsive layout.
- Future implementation priority: high (a historically exam-favored calculation area).

### Lower-of-Cost-and-NRV Trainer
- Module: FSA-LM6
- LOS: describe the measurement of inventory at the lower of cost and net realisable value and its implications for financial statements and ratios
- Learning goal: practice the lower-of-cost-and-NRV write-down decision and see its effect on the income statement and ratios.
- Inputs: cost, net realisable value, prior write-down status (for reversal scenarios where applicable).
- Outputs: the correct carrying value, any write-down/reversal amount, and the resulting ratio impact.
- Calculations: a pure lower-of-cost-and-NRV comparison and write-down/reversal function.
- Statement impact: shows the effect on inventory carrying value, COGS, and gross margin.
- Accessibility: explicit labels, numeric validation, non-color write-down indicator, responsive layout.
- Future implementation priority: medium.

## FSA-LM7 — Analysis of Long-Term Assets

### Long-Lived Asset Impairment Trainer
- Module: FSA-LM7
- LOS: explain and evaluate how impairment and derecognition of property, plant, and equipment and intangible assets affect the financial statements and ratios
- Learning goal: practice the impairment test and derecognition calculation, and see the resulting financial-statement and ratio effects.
- Inputs: carrying value, recoverable amount/fair value less costs to sell, disposal proceeds (for derecognition scenarios).
- Outputs: impairment loss (if any), gain/loss on derecognition, and the resulting ratio impact.
- Calculations: pure impairment-test and derecognition-gain/loss functions.
- Statement impact: shows the effect on asset carrying value, net income, and asset-turnover-type ratios.
- Accessibility: explicit labels, numeric validation, non-color impairment indicator, responsive layout.
- Future implementation priority: medium-high.

## FSA-LM8 — Topics in Long-Term Liabilities and Equity

### Lease Classification and Measurement Explorer
- Module: FSA-LM8
- LOS: explain the financial reporting of leases from the perspectives of lessors and lessees
- Learning goal: practice lease measurement from both the lessee's and lessor's perspective and see the balance-sheet and income-statement effects.
- Inputs: lease term, payment schedule, discount rate, lessor classification criteria.
- Outputs: right-of-use asset/lease liability (lessee) or the lessor's receivable/income recognition, plus period expense/income patterns.
- Calculations: present-value-based lease measurement functions (drawing on Quantitative Methods time-value-of-money mechanics, referenced not duplicated).
- Statement impact: shows the balance-sheet and income-statement effect of lease measurement choices.
- Accessibility: explicit labels, numeric validation, non-color lessee/lessor indicator, responsive layout.
- Future implementation priority: medium-high.

### Pension and Stock-Based Compensation Explorer
- Module: FSA-LM8
- LOS: explain the financial reporting of defined contribution, defined benefit, and stock-based compensation plans
- Learning goal: practice defined-benefit funded-status and periodic-cost calculations, and stock-based compensation expense recognition.
- Inputs: plan assets, plan obligation, service cost, interest cost, actuarial gains/losses; option/award fair value and vesting terms.
- Outputs: funded status, periodic pension cost components, and stock-based compensation expense schedule.
- Calculations: pure functions for defined-benefit funded status/periodic cost and straight-line stock-compensation expense recognition.
- Statement impact: shows the balance-sheet (funded status) and income-statement (periodic cost/expense) effects.
- Accessibility: explicit labels, numeric validation, non-color plan-type indicator, responsive layout.
- Future implementation priority: medium.

## FSA-LM9 — Analysis of Income Taxes

### Deferred Tax Explorer
- Module: FSA-LM9
- LOS: explain how deferred tax liabilities and assets are created and the factors that determine how a company's deferred tax liabilities and assets should be treated for the purposes of financial analysis
- Learning goal: practice identifying temporary differences and calculating the resulting deferred tax asset/liability.
- Inputs: carrying value vs. tax base for an asset/liability, applicable tax rate, valuation-allowance considerations.
- Outputs: deferred tax asset or liability amount, and an analyst-treatment recommendation (e.g., whether to treat as a liability or as equity-like).
- Calculations: a pure temporary-difference-to-deferred-tax function.
- Statement impact: shows the balance-sheet and effective-tax-rate effect.
- Accessibility: explicit labels, numeric validation, non-color asset/liability indicator, responsive layout.
- Future implementation priority: high.

### Effective Tax Rate Reconciliation Tool
- Module: FSA-LM9
- LOS: calculate, interpret, and contrast an issuer's effective tax rate, statutory tax rate, and cash tax rate; analyze disclosures relating to deferred tax items and the effective tax rate reconciliation
- Learning goal: reconcile statutory to effective tax rate using common reconciling items, and calculate the cash tax rate.
- Inputs: statutory rate, reconciling items (e.g., permanent differences, credits, foreign rate differential), cash taxes paid, pretax income.
- Outputs: effective tax rate, cash tax rate, and a reconciliation waterfall.
- Calculations: pure reconciliation and rate-calculation functions.
- Statement impact: shows how disclosed reconciling items explain the gap between statutory and effective rates.
- Accessibility: explicit labels, numeric validation, non-color waterfall encoding (labels/patterns, not color alone), responsive layout.
- Future implementation priority: medium-high.

## FSA-LM10 — Financial Reporting Quality

### Quality of Earnings Analyzer
- Module: FSA-LM10
- LOS: compare financial reporting quality with the quality of reported results; describe accounting warning signs and methods for detecting manipulation of information in financial reports
- Learning goal: practice placing a scenario on the financial-reporting-quality spectrum and identifying red flags.
- Inputs: scenario selector (e.g., aggressive revenue recognition, understated allowances, non-GAAP adjustment pattern, related-party transaction).
- Outputs: a quality-spectrum placement and a list of the specific warning signs present in the scenario.
- Calculations: none (qualitative classification tool, consistent with the module's largely qualitative official scope).
- Statement impact: connects each warning sign to the specific statement line item or ratio it distorts.
- Accessibility: explicit labels, keyboard-operable scenario selector, non-color spectrum encoding (position + label, not color alone), responsive layout.
- Future implementation priority: medium.

## FSA-LM11 — Financial Analysis Techniques

### Ratio Analysis Calculator
- Module: FSA-LM11
- LOS: calculate and interpret activity, liquidity, solvency, and profitability ratios; describe relationships among ratios and evaluate a company using ratio analysis
- Learning goal: calculate the full standard ratio set from statement inputs and interpret results against typical benchmarks.
- Inputs: income-statement and balance-sheet line items.
- Outputs: activity, liquidity, solvency, and profitability ratios, with plain-language interpretation.
- Calculations: pure functions for each standard ratio category.
- Statement impact: ties every ratio back to its source statement line items.
- Accessibility: explicit labels, sortable/keyboard-navigable ratio table, non-color interpretation cues, responsive layout.
- Future implementation priority: high (the topic's core calculation tool).

### DuPont Analysis Explorer
- Module: FSA-LM11
- LOS: demonstrate the application of DuPont analysis of return on equity and calculate and interpret effects of changes in its components
- Learning goal: decompose ROE into its 3-factor and 5-factor DuPont components and see how a change in one component affects ROE.
- Inputs: net profit margin, asset turnover, financial leverage (3-factor); plus tax burden and interest burden (5-factor).
- Outputs: ROE decomposition and a sensitivity view showing the effect of changing one component.
- Calculations: pure 3-factor and 5-factor DuPont decomposition functions.
- Statement impact: connects ROE movement to specific income-statement and balance-sheet drivers.
- Accessibility: explicit labels, numeric validation, non-color component-contribution encoding, responsive layout.
- Future implementation priority: high (a historically exam-favored calculation area).

### Working Capital and Liquidity Explorer
- Module: FSA-LM11
- LOS: describe tools and techniques used in financial analysis, including their uses and limitations; describe the uses of industry-specific ratios used in financial analysis
- Learning goal: explore working-capital and liquidity dynamics and industry-specific ratio applications across different business models.
- Inputs: current asset/liability line items; industry selector.
- Outputs: working-capital measures, liquidity ratios, and industry-relevant ratio suggestions with interpretation.
- Calculations: pure working-capital and liquidity-ratio functions.
- Statement impact: shows how liquidity measures shift with operating-cycle assumptions.
- Accessibility: explicit labels, keyboard-operable industry selector, non-color liquidity-status indicator, responsive layout.
- Future implementation priority: medium.

## FSA-LM12 — Introduction to Financial Statement Modeling

### Sales-Based Pro Forma Model Builder
- Module: FSA-LM12
- LOS: demonstrate the development of a sales-based pro forma company model; explain how to forecast industry and company sales and costs when they are subject to price inflation or deflation
- Learning goal: build a simple sales-based pro forma income statement and see how inflation/deflation assumptions change forecast outputs.
- Inputs: base-year revenue and cost structure, growth-rate assumption, inflation/deflation assumption.
- Outputs: a projected pro forma income statement across a chosen forecast horizon.
- Calculations: pure sales-growth and cost-forecast projection functions.
- Statement impact: demonstrates how top-line and cost assumptions cascade into a full pro forma statement.
- Accessibility: explicit labels, numeric validation, non-color scenario indicators, responsive layout.
- Future implementation priority: medium-high.

### Forecast Bias and Horizon Explorer
- Module: FSA-LM12
- LOS: explain how behavioral factors affect analyst forecasts and recommend remedial actions for analyst biases; explain considerations in the choice of an explicit forecast horizon and an analyst's choices in developing projections beyond the short-term forecast horizon
- Learning goal: recognize common behavioral forecasting biases and practice choosing an appropriate explicit forecast horizon and terminal-value approach.
- Inputs: scenario selector (e.g., anchoring, overconfidence, confirmation bias); company/industry maturity selector for horizon choice.
- Outputs: a bias diagnosis with a remedial-action suggestion, and a recommended forecast-horizon/terminal-value approach with rationale.
- Calculations: none (qualitative decision-support tool).
- Statement impact: connects forecasting choices back to the pro forma model's reliability.
- Accessibility: explicit labels, keyboard-operable selectors, non-color bias/recommendation encoding, responsive layout.
- Future implementation priority: low-medium.

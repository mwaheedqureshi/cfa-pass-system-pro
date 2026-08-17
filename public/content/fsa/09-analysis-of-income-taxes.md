# Analysis of Income Taxes

Income-tax accounting separates three clocks: profit reported to investors, income taxed by authorities, and cash tax settlement. The analyst’s job is to connect them without treating every difference as permanent or every deferred tax balance as economically identical.

## Learning outcomes

After this lesson, you should be able to:

1. contrast accounting profit, taxable income, taxes payable, income tax expense, and temporary versus permanent differences;
2. explain deferred tax asset and liability creation and evaluate their analytical treatment;
3. calculate and interpret statutory, effective, and cash tax rates; and
4. analyze deferred-tax and rate-reconciliation disclosures and their statement and ratio effects.

## 1. Accounting profit, taxable income, and tax expense

**Accounting profit** is pretax income measured under financial-reporting standards. **Taxable income** follows tax law. Applying the tax rate to taxable income produces **taxes payable**, the current tax obligation. **Income tax expense** combines current tax with the period’s deferred-tax effect.

### Original diagram 1 — the three-clock bridge

```text
Accounting profit
  ± temporary differences
  ± permanent differences
        ↓
Taxable income × tax rate = taxes payable (current tax)

Current tax ± deferred-tax change = income tax expense
Cash paid may differ from both expense and current-period taxes payable.
```

A **permanent difference** never reverses, so it affects the effective rate but creates no DTA or DTL. A **temporary difference** is a timing difference between carrying amount and tax base that reverses as the asset is recovered or liability settled.

### Original table 2 — permanent versus temporary

| Feature | Permanent difference | Temporary difference |
|---|---|---|
| Reverses later? | No | Yes |
| Creates DTA/DTL? | No | Usually |
| Affects ETR? | Often | Through timing and rate measurement |
| Analyst focus | Recurrence and sustainability | Reversal timing and realizability |

### Worked example 1 — accounting profit to taxable income

A company reports accounting profit of 1,000. Tax depreciation exceeds book depreciation by 120, while a nondeductible fine is 20. Taxable income is `1,000 − 120 + 20 = 900`. At 25%, taxes payable are 225. The depreciation difference is temporary; the fine is permanent.

### Worked example 2 — permanent difference

Pretax accounting profit is 500 and includes a nondeductible penalty of 10. Taxable income is 510 and current tax at 30% is 153. The penalty raises the effective tax burden but creates no deferred tax because no future deduction or taxation will occur.

### Worked example 3 — income-tax-expense bridge

Taxes payable are 225. The DTL increases by 30 and the DTA increases by 5. Tax expense is `225 + 30 − 5 = 250`. The increase in the DTL raises deferred tax expense; the increase in the DTA reduces it.

### Worked example 4 — cash, current, and deferred tax

Tax expense is 250, taxes payable for the year are 225, and cash taxes paid are 210 because 15 remains payable. Never substitute cash taxes for tax expense: the first is a cash-flow measure, while the second includes deferred tax.

## 2. Tax bases and temporary differences

An asset’s **tax base** is the amount deductible against future taxable benefits. A liability’s tax base is its carrying amount less amounts deductible for tax purposes when the liability is settled.

### Original table 3 — directionality matrix

| Balance | Carrying amount > tax base | Carrying amount < tax base |
|---|---|---|
| Asset | Taxable temporary difference → DTL | Deductible temporary difference → DTA |
| Liability | Deductible temporary difference → DTA | Taxable temporary difference → DTL |

The liability direction reverses because settlement, not recovery, determines future deductions.

### Original checklist 4 — tax-base reasoning

1. Identify whether the item is an asset or liability.
2. Determine its carrying amount under financial reporting.
3. Determine the amount attributable to future tax deductions or taxation.
4. Compare carrying amount with tax base using the correct row of the matrix.
5. Multiply the temporary difference by the applicable enacted or substantively enacted reversal rate.
6. Check whether an exception or realizability constraint applies within the source scope.

### Worked example 5 — asset creates a DTL

Equipment has a carrying amount of 800 and tax base of 620. Recovering the asset produces 180 more taxable economic benefits than future deductions. The taxable temporary difference is 180; at 25%, the DTL is 45.

### Worked example 6 — asset creates a DTA

An allowance reduces receivables to a carrying amount of 460, but the 500 tax base remains deductible when accounts are written off. The 40 deductible temporary difference creates a DTA of 10 at 25%.

### Worked example 7 — liability creates a DTA

A warranty liability has carrying amount 120 and tax base 0 because the 120 becomes deductible when paid. Carrying amount exceeds tax base for a liability, creating a 120 deductible temporary difference and a DTA of 30 at 25%.

### Worked example 8 — liability creates a DTL

Revenue received in advance has a carrying liability of 60 but tax base of 100 in a fact pattern where future settlement leaves 40 more taxable than deductible. Carrying amount below tax base creates a 40 taxable temporary difference and a DTL of 10 at 25%.

## 3. Deferred-tax analysis

A **DTA** represents a future tax benefit, subject to sufficient future taxable income and applicable recognition rules. A **DTL** represents future tax payments caused by taxable temporary differences. Unused tax losses and credits can create DTAs. Under US GAAP, a valuation allowance reduces a gross DTA when realization is not more likely than not; IFRS applies a recognition threshold rather than presenting a separate valuation allowance.

### Original diagram 5 — deferred-tax roll-forward

```text
Opening net deferred tax balance
 + new temporary differences
 − reversals
 ± tax-rate remeasurement
 − increase in valuation allowance (for net DTA under US GAAP)
 = closing net deferred tax balance
```

Tax-rate changes remeasure deferred balances using the rate expected when the difference reverses. The remeasurement affects tax expense or the same location as the underlying item, as applicable.

### Worked example 9 — valuation allowance

A company has a gross DTA of 90. Evidence indicates 35 is not more likely than not to be realized under US GAAP. The valuation allowance is 35 and net DTA is 55. Increasing the allowance generally raises tax expense and reduces assets and equity; releasing it does the opposite.

### Worked example 10 — tax-rate remeasurement

A 200 taxable temporary difference was measured at 25%, producing a DTL of 50. Before reversal, the applicable rate becomes 30%. The DTL rises to 60 and the 10 remeasurement increase reduces current-period net income when recognized in profit or loss.

### Original table 6 — analyst treatment

| Observation | Analytical question |
|---|---|
| DTL expected to reverse soon | Treat more like a genuine liability |
| Indefinitely growing DTL with remote reversal | Consider equity-like treatment, with caution |
| DTA supported by stable taxable profit | Realization appears more credible |
| Large/rising valuation allowance | Future benefit is less certain; inspect earnings effects |
| Tax-loss carryforward near expiry | Benefit may not be sustainable or realizable |

### Worked example 11 — leverage adjustment

Reported debt is 600, equity 400, and a 100 DTL is judged unlikely to reverse. Reported debt-to-equity is 1.50. If the analyst reclassifies the DTL as equity-like, adjusted debt is 500 and equity 500, producing 1.00. This is an analytical judgment, not a required accounting entry.

## 4. Statutory, effective, and cash tax rates

The **statutory rate** is the legally enacted rate for a jurisdiction. The **effective tax rate (ETR)** is income tax expense divided by accounting profit before tax. The **cash tax rate** is cash taxes paid divided by accounting profit before tax. They answer different questions.

### Original table 7 — rate comparison

| Rate | Numerator | What it reveals |
|---|---|---|
| Statutory | Enacted percentage | Legal benchmark |
| Effective | Income tax expense | Reported tax burden, including deferred effects |
| Cash | Cash taxes paid | Current cash burden |

### Worked example 12 — ETR and cash rate

Pretax income is 1,200, tax expense is 276, and cash taxes paid are 216. ETR is `276 ÷ 1,200 = 23%`; cash tax rate is `216 ÷ 1,200 = 18%`. The five-point gap signals timing or settlement differences, not automatically aggressive reporting.

### Worked example 13 — statutory-to-effective reconciliation

A 25% statutory rate is adjusted by +2 points for nondeductible costs, −3 points for tax credits, and −1 point for lower-tax foreign earnings. ETR is `25% + 2% − 3% − 1% = 23%`. Permanent items and jurisdiction mix can persist; one-time credits may not.

## 5. Disclosures and financial analysis

Tax notes commonly disaggregate current and deferred expense, domestic and foreign components, DTA/DTL categories, loss carryforwards, valuation allowances, unrecognized benefits, and the statutory-to-effective reconciliation. Read the roll-forward and rate reconciliation together.

### Original checklist 8 — disclosure-to-analysis workflow

| Disclosure | Analyst action | Possible statement/ratio effect |
|---|---|---|
| DTA components and expiry | Assess realizability | Asset quality and future tax expense |
| Valuation allowance change | Separate operating evidence from estimation change | Net income, assets, equity, ROA |
| DTL reversal pattern | Assess liability-like character | Leverage and solvency |
| Rate reconciliation | Identify persistent versus transitory drivers | Sustainable ETR and forecast earnings |
| Cash taxes versus expense | Explain timing and settlement | CFO and cash conversion |

### Worked example 14 — disclosure and ratio interpretation

Pretax income is unchanged, but a 20 valuation-allowance release lowers tax expense from 120 to 100. Net income rises by 20, increasing ROA and profit margin without improving operating performance or cash flow. An analyst should isolate the release when estimating sustainable earnings.

## Formula recap

- Asset tax base: future tax deduction associated with recovering the asset.
- Liability tax base: carrying amount minus future deductible amount.
- Deferred tax amount: temporary difference × applicable reversal rate.
- Tax expense bridge: taxes payable + increase in DTL − increase in DTA.
- Net DTA under US GAAP: gross DTA − valuation allowance.
- ETR: income tax expense ÷ pretax accounting profit.
- Cash tax rate: cash taxes paid ÷ pretax accounting profit.
- Reconciled ETR: statutory rate plus/minus reconciling rate effects.

## Exam traps

- A permanent difference affects the tax rate but never creates deferred tax.
- Asset and liability directionality are opposite.
- A DTA is not automatically fully realizable.
- Tax expense, taxes payable, and cash taxes paid are not interchangeable.
- A low ETR is not automatically sustainable or high quality.
- Analyst reclassification of a DTL is judgment, not accounting policy.

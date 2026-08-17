# Financial Analysis Techniques

Financial analysis turns statements into comparable evidence. A ratio is not a verdict: it is a relationship whose meaning depends on definitions, accounting choices, business economics, time period, and the analyst's purpose. This module develops a disciplined workflow for selecting tools, calculating consistently, interpreting related signals, decomposing return on equity, choosing industry-specific measures, and carrying normalized relationships into forecasts—without crossing into the linked pro forma construction owned by LM12.

## Learning outcomes

By the end of this lesson, you should be able to:

1. describe tools and techniques used in financial analysis, including their uses and limitations;
2. calculate and interpret activity, liquidity, solvency, and profitability ratios;
3. describe relationships among ratios and evaluate a company using ratio analysis;
4. demonstrate the application of DuPont analysis of return on equity and calculate and interpret effects of changes in its components;
5. describe the uses of industry-specific ratios used in financial analysis; and
6. describe how ratio analysis and other techniques can be used to model and forecast earnings.

## LOS 1: Tools, comparisons, and limitations

Vertical common-size analysis divides each line by a same-period base: revenue for the income statement and total assets for the balance sheet. Horizontal analysis compares an item with a prior or base period. A base-year index is current amount divided by base amount; a growth rate is current divided by prior minus one. Time-series analysis follows one company, while cross-sectional analysis compares companies at the same time. Tables retain detail; graphs expose patterns; regression quantifies historical relationships but does not prove causation.

### Original table 1 — Analysis-tool selection map

| Question | Primary tool | Essential check |
|---|---|---|
| What is the statement's current structure? | Vertical common size | Consistent base |
| What changed across periods? | Horizontal/trend analysis | Base period and inflation |
| How does the issuer differ from peers? | Cross-sectional benchmarking | Business and policy comparability |
| Which drivers moved together historically? | Graph/regression | Stability and economic rationale |
| What does a relationship imply? | Ratio analysis | Definitions, related ratios, context |

### Worked example 1 — Horizontal analysis

Fictional Northstar's receivables rise from 80 to 104 while revenue rises from 500 to 550. Receivables growth is 104/80 − 1 = **30%**, versus revenue growth of **10%**. The divergence directs attention to collection efficiency and revenue quality; it does not prove premature recognition.

### Worked example 2 — Common-size peer comparison

Orchid and Lumen report inventory of 18% and 10% of assets. Orchid is not automatically inefficient: its retail model requires owned seasonal stock, while Lumen uses supplier-managed inventory. The calculation is comparable; the economics require qualification.

### Worked example 3 — Regression limitation

A five-year regression links sales growth to GDP growth, but the company has since exited its cyclical division. The historical coefficient is mathematically valid yet structurally stale. The analyst should revise the specification or use scenarios rather than extrapolate mechanically.

### Original checklist 2 — Limitations checklist

| Risk | Diagnostic question |
|---|---|
| Accounting choice | Are recognition, estimates, and classifications aligned? |
| Definition | Are numerator and denominator defined identically? |
| Timing | Do flow periods match average stock balances? |
| Business mix | Are operations and geographies genuinely comparable? |
| Data quality | Are inputs neutral, complete, and sustainable? |
| Inflation/seasonality | Are nominal changes or reporting dates distorting the trend? |

## LOS 2: Activity, liquidity, solvency, and profitability

Period flows normally pair with average balance-sheet stocks: average balance = (opening + closing)/2 when finer observations are unavailable. Ending balances are appropriate only when the question is explicitly point-in-time. Interim turnovers must be annualized before comparison with annual ratios, or converted to days using the matching interim day count.

### Activity ratios

- Receivables turnover = revenue / average receivables; DSO = days / turnover.
- Payables turnover = COGS / average trade payables; days payable = days / turnover.
- Working-capital turnover = revenue / average working capital.
- Total-asset turnover = revenue / average total assets.
- Inventory turnover and DOH retain their canonical LM6 definitions.
- Fixed-asset turnover retains its canonical LM7 definition.
- Cash conversion cycle (CCC) = DOH + DSO − days payable.

### Original table 3 — Activity-ratio relationship table

| Operating stage | Flow | Average stock | Days measure | Typical concern |
|---|---|---|---|---|
| Buy/produce | COGS | Inventory | DOH | Obsolescence or stockouts |
| Sell/collect | Revenue | Receivables | DSO | Credit quality and revenue timing |
| Obtain supplier credit | COGS | Trade payables | Days payable | Liquidity versus supplier strain |
| Use all assets | Revenue | Total assets | — | Capacity and asset intensity |

### Worked example 4 — Receivables turnover and DSO

Revenue is 1,080; opening receivables 105 and closing receivables 135. Average receivables are 120, turnover is **9.0**, and DSO using 360 days is **40 days**. A rise from 32 days merits investigation of credit terms, collections, customer mix, and revenue timing.

### Worked example 5 — Payables and day-count consistency

COGS is 730 and average trade payables are 73. Turnover is **10.0** and days payable using 365 days is **36.5**. Comparing that with a 90-day quarterly ratio requires either 90/quarterly turnover or an annualized turnover—not a mixture of 90 and an annual rate.

### Worked example 6 — Cash conversion cycle

DOH is 54, DSO 37, and days payable 46. CCC = 54 + 37 − 46 = **45 days**. If days payable rises to 60, CCC falls to 31 days, but the apparent liquidity benefit could reflect supplier distress rather than stronger operations.

### Worked example 7 — Turnover and annualization

A 90-day quarter has revenue of 240 and average assets of 800, giving quarterly asset turnover of 0.30. Multiplying by 365/90 gives approximately **1.22 annualized**. That annualization assumes the quarter is representative; seasonality may invalidate it.

### Liquidity ratios

Current, quick, and cash ratios remain canonical LM3 records. The defensive interval ratio equals quick assets divided by daily cash expenditures. Daily expenditures should exclude noncash expenses such as depreciation. CCC connects activity with liquidity: shorter is often helpful, but negative or falling CCC must be interpreted through the business model and supplier relationships.

### Original table 4 — Liquidity ladder

| Measure | Resources counted | Key limitation |
|---|---|---|
| Current ratio | All current assets | Inventory and receivables may be illiquid |
| Quick ratio | Cash, marketable investments, receivables | Receivables may still be impaired |
| Cash ratio | Cash and marketable investments | Crisis values can change |
| Defensive interval | Quick assets versus daily cash spending | Expenditure estimate requires adjustments |
| CCC | Inventory and collection days net of supplier days | A low value can arise from supplier pressure |

### Worked example 8 — Defensive interval

Cash is 60, marketable investments 20, receivables 100, and annual cash expenditures 3,285. Daily cash expenditures are 9, so the defensive interval is (60 + 20 + 100)/9 = **20 days**. It measures survival without new inflow, not profitability.

### Solvency ratios

This lesson defines total debt as interest-bearing short- and long-term debt unless stated otherwise. Net debt deducts cash, equivalents, and marketable securities. Debt-to-assets and debt-to-equity reference LM3. Debt-to-capital uses debt/(debt + equity). Debt-to-EBITDA must state total or net debt. EBIT interest coverage is EBIT/interest payments and must not be confused with LM5 cash interest coverage. Fixed-charge coverage is (EBIT + lease payments)/(interest + lease payments).

### Original table 5 — Liquidity and solvency comparison

| Dimension | Liquidity | Solvency |
|---|---|---|
| Horizon | Near-term obligations | Long-term financial capacity |
| Main stocks | Current and quick assets | Debt, capital, equity |
| Main flows | Cash expenditures and working capital | EBIT, EBITDA, interest, leases |
| Common trap | Calling every high current ratio good | Mixing total, net, and long-term debt |

### Worked example 9 — Debt-to-capital and debt-to-EBITDA

Interest-bearing debt is 360, cash is 60, equity 540, and EBITDA 120. Debt-to-capital is 360/(360 + 540) = **40%**. Total-debt/EBITDA is **3.0×**; net-debt/EBITDA is **2.5×**. Both are valid only when labeled.

### Worked example 10 — EBIT versus cash coverage

EBIT is 210 and interest is 35, so EBIT interest coverage is **6.0×**. CFO is 150, interest paid 32, and taxes paid 38; LM5 cash interest coverage uses a different numerator. The two measures answer related but distinct accrual-versus-cash questions.

### Worked example 11 — Fixed-charge coverage

EBIT is 180, lease payments 20, and interest payments 30. Coverage is (180 + 20)/(30 + 20) = **4.0×**. Omitting lease payments from both places would understate the fixed commitments being tested.

### Profitability and returns

Gross, operating, pretax, and net margins reference LM2. Operating ROA uses operating income or consistently defined EBIT over average assets; ROA uses net income; ROIC uses after-tax EBIT over average interest-bearing debt and equity; ROE uses net income over average total equity; return on common equity subtracts preferred dividends and uses average common equity. These are distinct economic claims, not interchangeable labels.

### Original table 6 — Profitability and return hierarchy

| Measure | Return numerator | Capital/flow base | Perspective |
|---|---|---|---|
| Operating margin | Operating income | Revenue | Core operations |
| Operating ROA | Operating income/EBIT | Average assets | Pre-financing assets |
| ROA | Net income | Average assets | After financing and tax |
| ROIC | After-tax EBIT | Average debt + equity | All invested capital |
| ROE | Net income | Average total equity | All equity |
| Return on common equity | NI − preferred dividends | Average common equity | Common shareholders |

### Worked example 12 — ROA, ROIC, and ROE

Net income is 84, EBIT 140, tax rate 25%, average assets 840, average invested capital 700, and average equity 420. ROA is **10%**, ROIC is 105/700 = **15%**, and ROE is **20%**. The differences reflect financing claims and denominator scope.

## LOS 3: Relationships and company evaluation

Ratios interact. Margin and total-asset turnover combine into ROA. A high current ratio can coexist with poor liquidity when inventory is obsolete. A declining DSO can reflect better collection or write-offs. Higher leverage can increase ROE while weakening solvency. Accounting policies can alter margins, assets, turnover, and leverage simultaneously.

### Original table 7 — Contextual interpretation matrix

| Signal | Favorable explanation | Concerning explanation | Corroboration |
|---|---|---|---|
| Higher turnover | Better utilization | Insufficient capacity | Service levels, capex |
| Lower DSO | Faster collection | Write-offs or tighter sales | Allowance, revenue trend |
| Higher current ratio | More liquidity | Obsolete inventory | Quick ratio, turnover |
| Higher ROE | Better operations | More leverage | DuPont, coverage |
| Lower CCC | Efficient cycle | Supplier pressure | Terms, payable aging |

### Worked example 13 — Integrated peer diagnosis

Atlas has a 12% margin, 0.8 turnover, and leverage of 1.5; Beacon has an 8% margin, 1.4 turnover, and leverage of 2.0. Atlas ROE is **14.4%** and Beacon ROE **22.4%**. Beacon's advantage comes from efficiency and leverage, not margin; the higher return must be weighed against risk.

### Worked example 14 — Accounting-policy interaction

An upward asset revaluation raises assets and equity without changing debt or revenue. Debt-to-equity falls, but asset turnover and ROE also fall mechanically. The analyst should identify the denominator effect rather than infer debt repayment or deteriorating operations.

### Original table 8 — Average-balance and definition conventions

| Choice | Preferred convention | Exception requiring disclosure |
|---|---|---|
| Flow/stock ratio | Average opening and closing stock | Point-in-time objective |
| Interim turnover | Matching-period days or annualized flow | Strong seasonality |
| Debt | Interest-bearing short + long term | Net debt or covenant definition |
| Operating return | Operating income or consistent EBIT | Non-operating EBIT components |
| Peer comparison | Same definitions and policies | Reconcile or qualify differences |

## LOS 4: DuPont decomposition

The two-component bridge, ROE = ROA × leverage, remains a teaching identity. The production decompositions are:

**Three-component:** ROE = net profit margin × total-asset turnover × financial leverage.

**Five-component:** ROE = tax burden × interest burden × EBIT margin × total-asset turnover × financial leverage, where tax burden = NI/EBT and interest burden = EBT/EBIT.

### Original diagram 9 — DuPont tree

```text
ROE
├── Tax burden: NI / EBT
├── Interest burden: EBT / EBIT
├── EBIT margin: EBIT / Revenue
├── Asset efficiency: Revenue / Average assets
└── Financial leverage: Average assets / Average equity
```

### Worked example 15 — Three-component DuPont

Net margin is 6%, turnover 1.4, and leverage 2.0. ROE = 0.06 × 1.4 × 2.0 = **16.8%**. Raising leverage to 2.4 with other factors fixed raises ROE to 20.16%, but it also increases financial risk.

### Worked example 16 — Five-component bridge

Tax burden is 0.75, interest burden 0.80, EBIT margin 10%, turnover 1.4, and leverage 2.0. ROE is **16.8%**. If interest burden falls to 0.70, ROE falls to **14.7%**, isolating the financing drag.

### Original table 10 — Five-factor sensitivity bridge

| Component rises | Direct interpretation | Necessary caution |
|---|---|---|
| Tax burden | Lower effective tax drag | Sustainability and jurisdictions |
| Interest burden | Less EBIT lost before EBT | Debt level and non-operating items |
| EBIT margin | Stronger operating profitability | Policy and cycle effects |
| Asset turnover | Greater efficiency | Capacity and asset condition |
| Leverage | More assets per equity unit | Solvency and coverage risk |

## LOS 5: Industry-specific ratios

Industry measures translate distinctive operating capacity into interpretable drivers. Banks use regulatory capital, reserves, liquid assets, and net interest margin; retailers use same-store sales and sales per area; hotels use average daily rate and occupancy; subscription businesses use average revenue per user. Service firms may use revenue or income per employee. The LOS emphasizes selecting and interpreting these measures, not treating every context-specific definition as a universal formula record.

### Original table 11 — Industry KPI selection

| Industry | KPI | Economic question |
|---|---|---|
| Banking | Capital adequacy; net interest margin | Risk capacity; spread earned on assets |
| Retail | Same-store sales; sales per area | Organic growth; space productivity |
| Hotel | Occupancy; average daily rate | Utilization versus price |
| Subscription | ARPU | Monetization of the user base |
| Services | Revenue/income per employee | Labor productivity |

### Worked example 17 — Hotel and subscriber KPIs

A hotel sells 27,000 of 30,000 available room-nights for 3.24 million: occupancy is **90%** and average daily rate **120**. A platform earns 24 million from an average 800,000 users: ARPU is **30**. Neither metric alone establishes profitability; costs, churn, risk, and capacity matter.

## LOS 6: Ratios as forecasting inputs

Normalized history supplies starting relationships. Peer metrics provide anchors when economics and accounting are comparable. Margin assumptions translate revenue into profit; turnover and days assumptions translate revenue or COGS into asset and working-capital needs. Regression may support a forecast when the relationship is economically sensible and stable. Scenarios expose sensitivity. LM11 stops at identifying and interpreting these relationships; LM12 owns explicit linked pro forma statements, forecast biases, competitive-force construction, inflation mechanics, and terminal horizons.

### Original diagram 12 — Forecast-input workflow

```text
Historical statements
  → normalize unusual items and policy effects
  → calculate consistent margins, turnover, and days
  → compare trends and relevant peers
  → choose economically justified assumptions
  → test scenarios and constraints
  → document uncertainty
  → hand relationships to LM12 model construction
```

### Worked example 18 — Ratio-informed earnings forecast

Normalized revenue is 1,000, expected growth 8%, normalized EBIT margin 12%, interest burden 0.85, and tax burden 0.75. Forecast revenue is 1,080; EBIT is 129.6; EBT is 110.16; net income is **82.62**. This is a relationship-based earnings forecast, not a complete linked pro forma model.

## Exam workflow

1. Name the analytical question before selecting a tool.
2. Write the exact numerator, denominator, period, averaging, day-count, and debt definition.
3. Calculate, then compare with relevant history and peers.
4. Inspect linked ratios and accounting-policy effects.
5. Explain both favorable and concerning interpretations.
6. Use DuPont to attribute ROE rather than labeling it mechanically.
7. Choose industry KPIs that reflect the actual capacity or customer driver.
8. Normalize and document forecast inputs, stopping before LM12 model construction.

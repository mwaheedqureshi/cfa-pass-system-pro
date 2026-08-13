# Analyzing Statements of Cash Flows I

## Learning outcomes

After this lesson, you should be able to:

1. describe how the cash flow statement is linked to the income statement and the balance sheet
2. describe the steps in the preparation of direct and indirect cash flow statements, including how cash flows can be computed using income statement and balance sheet data
3. demonstrate the conversion of cash flows from the indirect to direct method
4. contrast cash flow statements prepared under International Financial Reporting Standards (IFRS) and US generally accepted accounting principles (US GAAP)

## Why this module matters

Accrual accounting answers when economic activity is recognized; the statement of cash flows answers when cash moved. A sound analyst can bridge those views, reconstruct cash receipts and payments from comparative statements, and normalize classification choices before comparing companies.

## Section 1 — How the statements link

The balance sheet is a point-in-time statement. The income statement, statement of cash flows, and statement of changes in equity explain activity between two balance-sheet dates. The cash flow statement reconciles beginning cash and cash equivalents to ending cash and cash equivalents through operating (CFO), investing (CFI), and financing (CFF) activities.

### Original diagram — the statement bridge

```text
Opening balance sheet
       │
       ├── Income statement: accrual performance ──┐
       ├── Cash flow statement: CFO + CFI + CFF ──┼── Closing balance sheet
       └── Changes in equity: NI − dividends + owner transactions ─┘
```

### Original table — stock and flow accounts

| Statement | Measurement | Principal bridge |
|---|---|---|
| Balance sheet | Point in time | Closing asset, liability, and equity balances |
| Income statement | Period | Revenue − expenses = net income |
| Cash flow statement | Period | Opening cash + CFO + CFI + CFF = closing cash |
| Changes in equity | Period | Opening equity + comprehensive income + owner transactions = closing equity |

Working-capital accounts record timing gaps. Revenue recognized before collection increases accounts receivable. Cash received before revenue recognition increases deferred revenue. Expense recognized before payment increases an accrued liability; payment before expense recognition increases a prepaid asset.

### Worked example 1 — receivables bridge

Northstar reports revenue of $86 million and cash collections of $79 million. Accounts receivable therefore increase by **$7 million**: opening receivables + $86 revenue − $79 collections = closing receivables.

### Worked example 2 — cash reconciliation

Opening cash is $18 million; CFO is $24 million, CFI is −$31 million, and CFF is $9 million. Closing cash is **$20 million**: $18 + $24 − $31 + $9.

### Worked example 3 — retained earnings and dividends

Opening retained earnings are $65 million, net income is $14 million, and cash dividends are $6 million. Closing retained earnings are **$73 million**. The dividend reduces both cash and retained earnings but never net income.

### Worked example 4 — detecting a collection problem

Revenue and net income rise by 20%, but CFO falls while receivables rise 45%. The statements still articulate, yet the divergence signals that recognized sales are not converting into cash. The analyst investigates collection quality and revenue-recognition assumptions.

## Section 2 — Classify before calculating

Operating activities are the company's principal revenue-producing activities. Investing activities acquire or dispose of long-lived assets and investments. Financing activities change contributed equity and borrowings. Material noncash investing and financing transactions are disclosed separately rather than inserted into cash totals.

### Original table — classification decision guide

| Transaction | Normal classification | Reason |
|---|---|---|
| Cash collected from customers; cash paid to suppliers/employees | Operating | Core revenue-producing activity |
| Purchase or sale of equipment or investment | Investing | Changes productive assets/investments |
| Debt or share issuance; debt repayment; owner distributions | Financing | Changes capital providers' claims |
| Debt exchanged for equity | Separate noncash disclosure | No cash moved |

Both direct and indirect methods change only the presentation of CFO. CFI and CFF are always presented directly.

### Worked example 5 — equipment purchase

A $12 million cash equipment purchase increases equipment and decreases cash. It is a **$12 million CFI outflow**, with no immediate income-statement expense.

### Worked example 6 — borrowing and repayment

A company borrows $40 million and repays $11 million principal. CFF contains a $40 million inflow and $11 million outflow; net debt rises $29 million.

## Section 3 — Direct-method CFO

The direct method reports major operating cash receipts by source and cash payments by use. The essential skill is using each accrual account and its related balance-sheet account as a roll-forward.

### Original table — direct-method sign map

| Accrual line | Related balance-sheet change | Cash conversion |
|---|---|---|
| Revenue | Increase in receivables | Subtract |
| Revenue | Increase in deferred revenue | Add |
| COGS | Increase in inventory | Add to derive purchases |
| Purchases | Increase in accounts payable | Subtract |
| Expense | Increase in related payable | Subtract |
| Expense | Increase in related prepaid asset | Add |

### Worked example 7 — cash received from customers

Revenue is $120 million, accounts receivable decrease $9 million, and deferred revenue increases $4 million. Cash received is **$133 million**: $120 + $9 + $4.

### Worked example 8 — supplier payments

COGS is $75 million and inventory decreases $6 million, so purchases are $69 million. Accounts payable decreases $2 million, meaning the company also paid prior obligations. Cash paid to suppliers is **$71 million**.

### Worked example 9 — cash paid to employees

Wage expense is $25 million and wages payable increases $4 million. Cash paid is **$21 million**, because $4 million of recognized expense remains unpaid.

### Worked example 10 — other operating payments

Other operating expense is $30 million; prepaid expenses rise $4 million and accrued expenses rise $2 million. Cash paid is **$32 million**: $30 + $4 − $2.

### Worked example 11 — interest and taxes paid

Interest expense is $9 million and interest payable rises $1 million, so cash interest is **$8 million**. Tax expense is $14 million and taxes payable falls $3 million, so cash taxes are **$17 million**.

### Original table — compact direct CFO

| Direct line | Amount ($m) |
|---|---:|
| Cash collected from customers | 133 |
| Cash paid to suppliers | (71) |
| Cash paid to employees | (21) |
| Other operating cash payments | (32) |
| Cash interest and taxes | (25) |
| **CFO** | **(16)** |

The negative CFO is not an arithmetic error: the cash-payment assumptions exceed collections. That is precisely the visibility the direct format supplies.

## Section 4 — Indirect-method CFO

The indirect method begins with net income and removes accrual/non-operating effects:

- add noncash expenses such as depreciation;
- subtract non-operating gains and add non-operating losses whose cash proceeds belong in CFI;
- subtract increases (add decreases) in operating current assets;
- add increases (subtract decreases) in operating current liabilities.

### Original diagram — indirect reconciliation

```text
Net income
+ noncash charges
− gains (+ losses) assigned outside CFO
− increases (+ decreases) in operating assets
+ increases (− decreases) in operating liabilities
= operating cash flow
```

### Worked example 12 — full reconciliation

Net income is $40 million; depreciation is $8 million; receivables rise $5 million; inventory falls $3 million; payables rise $2 million. CFO is **$48 million**: $40 + $8 − $5 + $3 + $2.

### Worked example 13 — asset-sale gain

Equipment is sold for $12 million and the income statement includes a $2 million gain. The indirect method **deducts the $2 million gain from CFO**, while CFI reports the entire **$12 million inflow**. Only cash proceeds—not the accounting gain—enter CFI.

### Original table — common indirect adjustments

| Item | CFO adjustment | Why |
|---|---:|---|
| Depreciation/amortization | Add | Noncash expense reduced net income |
| Gain on long-lived asset sale | Subtract | Included in NI; cash proceeds belong in CFI |
| Loss on long-lived asset sale | Add | Included in NI; cash proceeds belong in CFI |
| Increase in receivables/inventory/prepaids | Subtract | Operating asset absorbed cash |
| Increase in payables/accruals/deferred revenue | Add | Operating liability preserved cash |

### Worked example 14 — noncash financing

A lender exchanges $15 million of debt for shares. Debt falls and equity rises, but CFO, CFI, and CFF are unchanged. The material transaction is disclosed separately.

## Section 5 — Convert indirect CFO to direct CFO

The official process is three steps:

1. Aggregate all revenue and expense accounts.
2. Remove noncash items and separate the remaining operating components.
3. Use related balance-sheet changes to convert each accrual component into cash received or paid.

### Original checklist — conversion controls

- Confirm every income-statement operating line has a cash counterpart or a documented noncash removal.
- Apply asset and liability changes with the correct sign.
- Remove gains/losses from CFO and place total sale proceeds in CFI.
- Confirm direct receipts less direct payments equal indirect CFO exactly.

### Worked example 15 — indirect-to-direct conversion

Meridian reports revenue $100 million, COGS $55 million, wages $18 million, other cash operating expense $7 million, depreciation $5 million, receivables increase $6 million, inventory increase $4 million, payables increase $3 million, and wages payable decrease $1 million.

- Cash collected = $100 − $6 = **$94 million**.
- Purchases = $55 + $4 = $59 million; cash paid to suppliers = $59 − $3 = **$56 million**.
- Cash paid to employees = $18 + $1 = **$19 million**.
- Other cash payments = **$7 million**.
- Direct CFO = $94 − $56 − $19 − $7 = **$12 million**.

Net income before tax/other omitted items in this simplified fact pattern is $15 million ($100 − $55 − $18 − $7 − $5). Indirect CFO is $15 + $5 − $6 − $4 + $3 − $1 = **$12 million**: the totals reconcile.

### Worked example 16 — deferred revenue in conversion

Revenue is $50 million, receivables rise $2 million, and deferred revenue rises $3 million. Cash collected is **$51 million**: $50 − $2 + $3. The receivable absorbed cash; the customer advance supplied cash not yet recognized as revenue.

### Original table — direct and indirect equivalence

| Presentation | Visible information | CFO total |
|---|---|---:|
| Direct | Gross customer receipts and operating payments | $12m |
| Indirect | Net income reconciled for noncash/accrual items | $12m |

## Section 6 — IFRS versus US GAAP

IFRS generally allows more classification flexibility, but an entity must apply its policy consistently. This flexibility can make reported CFO incomparable until the analyst normalizes classifications.

### Original table — standards comparison

| Item | IFRS | US GAAP |
|---|---|---|
| Interest received | Operating or investing | Operating |
| Dividends received | Operating or investing | Operating |
| Interest paid | Operating or financing | Operating |
| Dividends paid | Operating or financing | Financing |
| Income taxes | Operating unless specifically identifiable with CFI/CFF | Generally operating; specific allocation rules apply |
| Qualifying bank overdraft | May be part of cash equivalents when repayable on demand and integral to cash management | Financing liability; not cash equivalent |

### Worked example 17 — normalize interest paid

An IFRS reporter classifies $8 million interest paid as financing; a US GAAP peer reports identical interest in CFO. Before comparing CFO, the analyst moves the IFRS company's interest payment into operating activities: normalized IFRS CFO falls $8 million and normalized CFF rises $8 million (becomes less negative/more positive). Total cash change is unaffected.

### Worked example 18 — dividends received

An IFRS company places $5 million dividends received in CFI while a US GAAP peer places them in CFO. Moving the IFRS amount to CFO increases normalized CFO $5 million and reduces normalized CFI $5 million; total cash is unchanged.

### Original table — normalization workflow

| Step | Analyst action |
|---|---|
| 1 | Read the classification policy note |
| 2 | Identify interest, dividends, taxes, and overdrafts |
| 3 | Reclassify to a common analytical convention |
| 4 | Recalculate CFO/CFI/CFF without changing total cash |

### Worked example 19 — bank overdraft

An IFRS entity has $10 million deposits and a $2 million qualifying overdraft integral to cash management; it may present net cash equivalents of $8 million. A US GAAP reporter ordinarily shows $10 million cash and a $2 million financing liability. An analyst compares the gross positions before drawing liquidity conclusions.

### Worked example 20 — tax tied to an asset sale

Under IFRS, tax specifically attributable to an investing asset sale may accompany the sale in CFI. Under US GAAP, tax is generally operating subject to allocation requirements. Normalization is required before using CFO margins across the two reporters.

## Analyst workflow

1. Reconcile opening to closing cash.
2. Classify genuine cash transactions into CFO, CFI, and CFF; isolate noncash disclosures.
3. Build the indirect CFO using net income, noncash/non-operating adjustments, and working-capital changes.
4. Reconstruct direct receipts and payments from accrual lines and balance-sheet roll-forwards.
5. Demand equality between direct and indirect CFO.
6. Normalize IFRS/US GAAP policy choices before cross-company comparison.

## Common mistakes and exam traps

- Reversing the sign: an operating asset increase generally reduces CFO; an operating liability increase generally raises CFO.
- Reporting an asset-sale gain as CFI instead of the total cash proceeds.
- Treating dividends as an expense that reduces net income.
- Assuming the direct method changes CFO rather than only its presentation.
- Putting material noncash investing/financing exchanges into cash totals.
- Assuming IFRS and US GAAP CFO are directly comparable without reading classification policies.
- Forgetting deferred revenue when converting revenue to collections.

## Memory aids

- **Operating asset up, cash down; operating liability up, cash retained.**
- **Gain out of CFO; gross proceeds into CFI.**
- **Direct shows the cash; indirect explains the gap from income.**
- **IFRS offers choices; US GAAP fixes more classifications.**

## One-page revision sheet

- Closing cash = opening cash + CFO + CFI + CFF.
- Cash collected = revenue − increase in receivables + increase in deferred revenue.
- Purchases = COGS + increase in inventory.
- Cash paid suppliers = purchases − increase in payables.
- Cash paid for an expense = expense + increase in related prepaid asset − increase in related accrued liability.
- Indirect CFO = NI + noncash charges − gains + losses − operating-asset increases + operating-liability increases.
- Direct and indirect CFO must match.
- IFRS: interest received/dividends received O or I; interest paid/dividends paid O or F.
- US GAAP: interest received, dividends received, interest paid O; dividends paid F.

## 30-second summary

The cash flow statement is the cash bridge between balance sheets. Build it by classifying cash activity, converting accrual lines through related balance-sheet changes, reconciling net income to CFO, and normalizing IFRS/US GAAP choices. Direct and indirect methods reveal different detail but must report the same CFO.

## Interactive tools

Use the Financial Statement Linkage Explorer to calculate indirect CFO and trace every adjustment. Use the Direct/Indirect Cash Flow Conversion Trainer to reconstruct direct receipts/payments and compare IFRS with US GAAP classifications.

## Continue studying

Review all eight conversion relationships in the Formula Explorer, drill the 55-card deck, complete the 55-question practice bank, and take the official-question-only Chapter Exam.

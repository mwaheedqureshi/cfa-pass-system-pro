# Analyzing Income Statements

## Chapter overview

The income statement is where an analyst first confronts the fact that "profit" is a matter of accounting judgment, not a single objective number. This module teaches how revenue and expenses are recognized, how non-recurring items are presented, how to calculate and interpret basic and diluted earnings per share, and how to use common-size analysis to compare companies of different sizes. Every topic here feeds directly into later FSA modules on the balance sheet, cash flow statement, and financial analysis techniques.

## Why it matters

Two companies can report identical cash economics and wildly different net income, purely because of revenue-recognition timing, capitalize-versus-expense choices, or share-count mechanics. An analyst who cannot see through these choices will misprice securities, misjudge creditworthiness, and misread earnings trends. EPS in particular is one of the most heavily tested and most error-prone calculations in the entire Level I curriculum.

## Official 2027 learning outcomes

- describe general principles of revenue recognition, specific revenue recognition applications, and implications of revenue recognition choices for financial analysis
- describe general principles of expense recognition, specific expense recognition applications, implications of expense recognition choices for financial analysis and contrast costs that are capitalized versus those that are expensed in the period in which they are incurred
- describe the financial reporting treatment and analysis of non-recurring items (including discontinued operations, unusual or infrequent items) and changes in accounting policies
- describe how earnings per share is calculated and calculate and interpret a company's basic and diluted earnings per share for companies with simple and complex capital structures including those with antidilutive securities
- evaluate a company's financial performance using common-size income statements and financial ratios based on the income statement

## Prerequisites

FSA-LM1's framework, regulatory-filing vocabulary, and audit/reporting-quality concepts are assumed. This module does not restate what a "financial statement" is in general; it goes directly into the income statement's own construction.

### Original table — anatomy of an income statement

| Line | What it captures |
|---|---|
| Revenue | Amount recognized for goods/services transferred to customers this period |
| − Cost of goods sold (COGS) | Direct cost of the goods/services sold |
| = Gross profit | Revenue remaining after direct costs |
| − Operating expenses | Selling, general, administrative, R&D, and similar period costs |
| = Operating profit (EBIT) | Profit from the company's core operations |
| ± Non-operating items | Interest expense/income, other non-core gains/losses |
| = Pretax profit | Profit before income tax |
| − Income tax expense | Tax on pretax profit |
| = Net income | The "bottom line," before any discontinued-operations adjustment |
| ± Discontinued operations (net of tax) | Results of a business unit being exited, shown separately |
| = Net income (total) | Final reported net income, allocated to basic and diluted EPS |

## 1. Revenue recognition

The governing principle: revenue is recognized to depict the transfer of promised goods or services to customers in an amount that reflects the consideration the company expects to be entitled to receive. This is operationalized through a **five-step model**.

### Original diagram — the five-step revenue recognition model

```
1. IDENTIFY THE CONTRACT with a customer
        |
        v
2. IDENTIFY THE PERFORMANCE OBLIGATIONS in the contract
   (each distinct good or service promised)
        |
        v
3. DETERMINE THE TRANSACTION PRICE
   (the consideration the company expects to receive)
        |
        v
4. ALLOCATE THE TRANSACTION PRICE
   to each performance obligation
        |
        v
5. RECOGNIZE REVENUE
   as (or when) each performance obligation is satisfied
```

A subtle jurisdictional difference: IFRS defines the collectability threshold for step 1 as "probable" meaning *more likely than not*, while US GAAP's "probable" means *likely to occur* — a higher bar. Two economically similar contracts can therefore be recognized differently depending on the reporting framework.

### Worked example 1 — Principal versus agent

Solstice Robotics arranges the sale of $500,000 of industrial equipment manufactured by a third party, earning an 8% commission ($40,000). Determine revenue and gross profit under each classification.

**As principal** (Solstice controls the goods before transfer and bears inventory risk): it records the full $500,000 as revenue. If its cost basis for the equipment is $460,000, gross profit is $500,000 − $460,000 = $40,000, a gross margin of $40,000 / $500,000 = 8%.

**As agent** (Solstice merely arranges the sale on the manufacturer's behalf): it records only its commission, $40,000, as revenue, with no associated cost of goods sold, so "gross profit" is also $40,000 — a 100% margin on that revenue line.

**Analytical point.** Both classifications produce the same $40,000 economic profit, but the principal presentation reports 12.5 times more revenue with an 8% margin, while the agent presentation reports a 100% margin on a much smaller revenue base. An analyst comparing two companies must know which classification each uses before comparing revenue growth or margin.

### Worked example 2 — Franchising and licensing revenue

Meridian Eats collects a $50,000 upfront franchise fee for a 10-year franchise term, plus an ongoing 5% royalty on franchisee sales. In its first full year, a franchisee reports $800,000 of sales. Calculate Meridian's recognized revenue for the year from this franchisee relationship.

**Upfront fee.** The $50,000 fee relates to services (training, brand access) delivered over the 10-year term, so it is deferred and recognized straight-line: $50,000 / 10 = $5,000 per year.

**Royalty.** 5% × $800,000 = $40,000, recognized as the franchisee's sales occur.

**Total recognized revenue this year** = $5,000 + $40,000 = $45,000, even though $50,000 of cash may have been collected upfront — a clear illustration of revenue recognition timing diverging from cash receipt.

### Worked example 3 — Point-in-time versus over-time recognition (SaaS)

Vantage Cloud offers customers a choice: a perpetual software license for $180,000 (all rights and risk transfer at delivery), or a 3-year cloud subscription for the same total $180,000. Compare Year 1 revenue recognized under each option.

**Perpetual license**: control transfers at the point of delivery, so the full $180,000 is recognized in Year 1.

**Cloud subscription**: the customer receives and consumes the service continuously over the contract term, so revenue is recognized ratably: $180,000 / 3 = $60,000 in Year 1.

**Analytical point.** Two contracts of identical total value produce a $120,000 difference in Year-1 revenue purely from the delivery model. A shift in a software company's sales mix toward subscriptions will mechanically slow revenue growth even if underlying demand is identical or stronger.

### Worked example 4 — Long-term contract, revenue recognized over time

Atlas Defense Systems has a $10,000,000 contract to build a satellite system, with total estimated costs of $7,500,000. By year-end, $3,000,000 of costs have been incurred, and the criteria for recognizing revenue over time are met. Calculate the revenue and profit recognized to date.

**Percent complete** = costs incurred to date / total estimated costs = $3,000,000 / $7,500,000 = 40%.

**Revenue recognized to date** = 40% × $10,000,000 = $4,000,000.

**Profit recognized to date** = 40% × ($10,000,000 − $7,500,000) = 40% × $2,500,000 = $1,000,000.

**Analytical point.** This cost-based measure of progress is itself an estimate; a change in the total-cost estimate in a later period changes the percent-complete calculation and can produce a sudden jump or drop in reported profit with no change in the underlying contract.

### Original table — point-in-time versus over-time revenue recognition

| Recognition pattern | Applies when | Example from this section |
|---|---|---|
| Point-in-time | Control of a distinct good/service transfers at a single moment | Perpetual software license (Worked Example 3); principal sale of goods (Worked Example 1) |
| Over time | The customer simultaneously receives and consumes the benefit, or the asset has no alternative use and the entity has an enforceable right to payment | Long-term construction/manufacturing contracts (Worked Example 4); SaaS/cloud subscriptions (Worked Example 3) |

### Worked example 5 — Bill-and-hold arrangements

Harbor Metals manufactures custom alloy components and, at the customer's request, holds completed goods in its own warehouse for two months before shipment (the customer has already been invoiced and title has transferred). Under what conditions can Harbor Metals recognize revenue before physical delivery?

**Answer.** Revenue may be recognized before physical delivery only if: (1) there is a substantive business reason for the bill-and-hold arrangement (here, the customer's own storage constraints); (2) the product is separately identified as belonging to the customer; (3) the product is currently ready for physical transfer; and (4) Harbor Metals does not have the ability to use the product or direct it to another customer. If all four hold, revenue is recognized at the point control effectively transfers, not physical shipment.

## 2. Expense recognition and capitalizing versus expensing

Three expense-recognition patterns govern the income statement: the **matching principle** (a cost directly tied to revenue, like cost of goods sold, is expensed in the same period as the related revenue), **expensing as incurred** (period costs with no clear future benefit, such as administrative salaries), and **capitalization** (a cost expected to provide economic benefit in future periods is recorded as an asset and expensed gradually through depreciation or amortization).

### Original table — the capitalize-versus-expense test

| Question | If yes | If no |
|---|---|---|
| Does the cost create an asset expected to provide economic benefit in **future** periods? | Capitalize, then depreciate/amortize over the benefit period | Expense in the period incurred |
| Is the future benefit reasonably certain (e.g., past technological-feasibility or completion milestones)? | Continue capitalizing | Expense remaining costs as incurred |

### Worked example 6 — Capitalize versus expense: income-statement impact

Crestwood Manufacturing buys equipment for $200,000 with a 5-year useful life (straight-line depreciation, $40,000/year). Revenue is $500,000 and other expenses are $300,000. Compare Year-1 net income if the $200,000 is (a) expensed immediately versus (b) capitalized and depreciated.

**Expensed immediately**: Net income = $500,000 − $300,000 − $200,000 = $0.

**Capitalized**: Net income = $500,000 − $300,000 − $40,000 (Year-1 depreciation) = $160,000.

**Analytical point.** The capitalize choice reports $160,000 more Year-1 income from an identical cash outflow. Over the full 5 years, total expense is $200,000 either way — capitalizing only shifts *when* the expense is recognized, not the total.

### Worked example 7 — Capitalized interest and the "true" interest coverage ratio

Ferrovia Rail reports EBIT of $50,000,000 and interest expense of $8,000,000 on its income statement. During construction of a new rail line, it also capitalized $2,000,000 of interest directly into the asset's cost (not expensed). Compare the as-reported interest coverage ratio to a coverage ratio reflecting total interest incurred.

**As-reported coverage** = EBIT / interest expense = $50,000,000 / $8,000,000 = 6.25x.

**Total interest incurred** = $8,000,000 expensed + $2,000,000 capitalized = $10,000,000.

**Adjusted coverage** = $50,000,000 / $10,000,000 = 5.0x.

**Analytical point.** The as-reported ratio overstates Ferrovia's ability to cover its true interest burden, because capitalized interest never appears in the interest-expense line even though it represents a real financing cost.

### Worked example 8 — Internally developed software costs

Nimbus Software spends $12,000,000 developing a new product: $8,000,000 before technological feasibility is established (must be expensed) and $4,000,000 after (eligible for capitalization). Revenue is $60,000,000 and other operating expenses are $40,000,000. The capitalized $4,000,000 is amortized over 4 years ($1,000,000 Year-1 amortization). Compare Year-1 operating margin if Nimbus (a) expenses the entire $12,000,000 versus (b) capitalizes the eligible $4,000,000.

**Expense all $12,000,000**: total operating expense = $40,000,000 + $12,000,000 = $52,000,000; operating income = $60,000,000 − $52,000,000 = $8,000,000; operating margin = $8,000,000 / $60,000,000 ≈ 13.33%.

**Capitalize the eligible $4,000,000**: total operating expense = $40,000,000 + $8,000,000 (expensed portion) + $1,000,000 (Year-1 amortization) = $49,000,000; operating income = $60,000,000 − $49,000,000 = $11,000,000; operating margin = $11,000,000 / $60,000,000 ≈ 18.33%.

**Analytical point.** A software company that capitalizes aggressively (like Nimbus here) will show materially higher near-term margins than an economically identical competitor that expenses everything as incurred — a comparability trap unless the analyst adjusts for the policy difference.

### Worked example 9 — Matching principle applied to cost of goods sold

Bluepeak Retail sells three specifically identified units this period, costing $100, $120, and $110 respectively, each sold for $150. Calculate revenue, cost of goods sold, and gross profit.

**Revenue** = 3 × $150 = $450. **COGS** (specific identification) = $100 + $120 + $110 = $330. **Gross profit** = $450 − $330 = $120.

**Analytical point.** Specific identification matches the exact cost of each identified unit to its sale — the cleanest illustration of the matching principle, though most companies with high-volume, interchangeable inventory instead use FIFO, LIFO, or weighted-average cost-flow assumptions (covered in a later FSA module).

### Worked example 10 — Own-use versus for-sale capitalization

Ridgeline Developers incurs $3,000,000 of interest during construction on two projects: a new corporate headquarters it will occupy itself, and a residential complex it intends to sell. Explain how the capitalized interest is classified differently for each.

**Answer.** Interest capitalized on the headquarters (an asset Ridgeline will use, not sell) becomes part of the building's cost within property, plant, and equipment, and is later depreciated. Interest capitalized on the residential complex (an asset built for sale) becomes part of inventory cost, and flows through cost of goods sold only when the units are sold — not depreciated at all. The same capitalization logic applies, but the resulting asset classification, and therefore the expense-recognition pattern, differs based on the asset's intended use.

## 3. Non-recurring items

Distinguishing recurring, ongoing operating performance from one-time events is central to forecasting. Four categories each have a distinct presentation rule.

### Original table — non-recurring item categories and presentation rules

| Category | Presentation | Restatement of prior periods? |
|---|---|---|
| Unusual or infrequent items | Part of continuing operations, but presented separately from normal operating items | No |
| Discontinued operations | Separate line, net of tax, below continuing-operations income (including a separate per-share figure) | Prior periods' discontinued-operations figures are also reclassified for comparability |
| Change in accounting policy | Applied retrospectively: all prior periods shown are restated as if the new policy had always applied (a modified-retrospective option exists in some cases, adjusting only opening retained earnings) | Yes (full retrospective) or partial (modified retrospective) |
| Change in accounting estimate | Applied prospectively: current and future periods only | No |
| Correction of a prior-period error | All affected financial statements for the prior period(s) are restated | Yes |

### Worked example 11 — Discontinued operations

Tidewater Logistics sells its trucking division at a pretax loss of $2,000,000; its tax rate is 25%. Continuing-operations net income is $10,000,000. Calculate total net income and show how it would be presented.

**After-tax loss from discontinued operations** = $2,000,000 × (1 − 0.25) = $1,500,000.

**Total net income** = $10,000,000 − $1,500,000 = $8,500,000, presented as: Income from continuing operations $10,000,000, less loss from discontinued operations, net of tax, $1,500,000, equals net income $8,500,000.

**Analytical point.** An analyst forecasting Tidewater's future earnings power should generally use the $10,000,000 continuing-operations figure, not the $8,500,000 total, since the trucking division will not recur.

### Worked example 12 — Unusual or infrequent item

Solace Pharma records a $3,000,000 restructuring charge related to closing an underperforming facility. Under current guidance (US GAAP, periods beginning after December 15, 2015), how is this presented?

**Answer.** The restructuring charge is included within continuing operations — it is not shown "below the line" as an extraordinary item, since neither IFRS nor current US GAAP permits an extraordinary-item classification — but it is presented separately from Solace's normal recurring operating line items (e.g., in its own "restructuring charges" line), so that a reader can see both the item and the underlying operating results without it.

### Worked example 13 — Retrospective application of a policy change

Anchor Industries changes its revenue recognition policy. Under the old policy, prior-year revenue was reported as $80,000,000; under the new policy, applied retrospectively, prior-year revenue is restated to $85,000,000. Explain what "retrospective" requires here.

**Answer.** Retrospective application requires Anchor to restate the prior year's revenue (and all other affected prior-period figures, including net income and EPS) to $85,000,000, as if the new policy had always been in effect — not merely disclose the $5,000,000 difference in a footnote. Comparative financial statements presented alongside the current year must reflect the new policy throughout.

### Worked example 14 — Prospective application of an estimate change

Kestrel Energy owns equipment with a $6,000,000 remaining book value and, under its original estimate, 6 years of remaining useful life ($1,000,000/year straight-line depreciation). Engineers determine the equipment can actually operate for 11 more years. Calculate the new annual depreciation and state which periods are affected.

**New annual depreciation** = $6,000,000 / 11 ≈ $545,455.

**Periods affected**: only the current and future periods. No prior-period depreciation is restated, and no cumulative "catch-up" adjustment is recorded — the change is applied prospectively from the point the new estimate is adopted.

## 4. Earnings per share

EPS is the single most heavily tested calculation in this module. Every mechanism below has a precise numerator and denominator; mixing them up is the most common error at this stage.

### Original diagram — basic EPS

```
                Net income − Preferred dividends
Basic EPS  =    --------------------------------
                Weighted average common shares outstanding
```

Only dividends actually declared on **preferred** shares reduce the numerator; common-stock dividends never do, since EPS measures earnings attributable to common shareholders.

### Worked example 15 — Basic EPS with a mid-year share issuance

Palisade Corp reports net income of $9,000,000 and preferred dividends of $500,000. It had 4,000,000 common shares outstanding from January 1 through March 31, then issued 1,000,000 new shares on April 1, ending the year with 5,000,000 shares outstanding through December 31. Calculate basic EPS.

**Weighted average shares** = 4,000,000 × (3/12) + 5,000,000 × (9/12) = 1,000,000 + 3,750,000 = 4,750,000.

**Basic EPS** = ($9,000,000 − $500,000) / 4,750,000 = $8,500,000 / 4,750,000 ≈ **$1.79**.

### Worked example 16 — Stock split: retroactive share-count restatement

Wintergreen Foods had 2,000,000 common shares outstanding for the entire year, then executed a 2-for-1 stock split effective November 1. Net income is $6,000,000, with no preferred dividends. Calculate basic EPS, and show why simply using the year-end share count would be wrong.

**Correct treatment**: stock splits are applied retroactively to the start of the earliest period presented — as if the 2,000,000 shares had always been 4,000,000. Basic EPS = $6,000,000 / 4,000,000 = **$1.50**.

**Incorrect treatment** (using only the pre-split count, or improperly time-weighting the split): $6,000,000 / 2,000,000 = $3.00 — double the correct figure. A stock split changes only the number of shares representing the same ownership interest; it must never be time-weighted like a genuine issuance or buyback.

### Worked example 17 — Diluted EPS, if-converted method (convertible preferred)

Cobalt Mining Co reports net income of $5,000,000 and has 2,000,000 weighted average common shares outstanding. It also has convertible preferred stock: 50,000 shares paying a $4.00 dividend each ($200,000 total), convertible into 300,000 common shares. Calculate basic and diluted EPS, and confirm the security is dilutive.

**Basic EPS** = ($5,000,000 − $200,000) / 2,000,000 = $4,800,000 / 2,000,000 = **$2.40**.

**If-converted numerator**: add back the $200,000 preferred dividend (since the preferred is now assumed converted to common, it no longer receives a preferred dividend) → numerator = $5,000,000 (the full net income, no preferred-dividend subtraction).

**If-converted denominator** = 2,000,000 + 300,000 (as-converted shares) = 2,300,000.

**Diluted EPS** = $5,000,000 / 2,300,000 ≈ **$2.17**.

**Dilution check**: the security's own per-share effect is $200,000 / 300,000 ≈ $0.67, which is less than basic EPS of $2.40, confirming it is dilutive (diluted EPS $2.17 is indeed lower than basic EPS $2.40, as it must be for any correctly included dilutive security).

### Worked example 18 — Diluted EPS, if-converted method (convertible debt)

Driftwood Airlines reports net income of $8,000,000, no preferred dividends, and 3,000,000 weighted average common shares. It has convertible bonds with $20,000,000 par value, a 6% coupon ($1,200,000 annual interest), convertible into 500,000 common shares; its tax rate is 30%. Calculate basic and diluted EPS.

**Basic EPS** = $8,000,000 / 3,000,000 ≈ **$2.67**.

**After-tax interest add-back** = $1,200,000 × (1 − 0.30) = $840,000 (the company would lose this interest tax shield upon conversion, so only the after-tax amount is added back).

**Diluted numerator** = $8,000,000 + $840,000 = $8,840,000. **Diluted denominator** = 3,000,000 + 500,000 = 3,500,000.

**Diluted EPS** = $8,840,000 / 3,500,000 ≈ **$2.53**.

**Dilution check**: per-share effect = $840,000 / 500,000 = $1.68, less than basic EPS of $2.67 — dilutive, and $2.53 < $2.67 as required.

### Worked example 19 — Diluted EPS, treasury-stock method (options)

Solander Tech reports net income of $4,000,000, no preferred dividends, and 1,800,000 weighted average common shares. It has 100,000 outstanding options with an exercise price of $20; the average market price of its stock during the year was $32. Calculate basic and diluted EPS.

**Basic EPS** = $4,000,000 / 1,800,000 ≈ **$2.22**.

**Treasury-stock mechanics**: assumed proceeds from exercise = 100,000 × $20 = $2,000,000. Shares hypothetically repurchased with those proceeds at the *average market price* = $2,000,000 / $32 = 62,500. Net incremental shares = 100,000 − 62,500 = 37,500.

**Diluted numerator**: unchanged at $4,000,000 (assumed option exercise does not affect net income). **Diluted denominator** = 1,800,000 + 37,500 = 1,837,500.

**Diluted EPS** = $4,000,000 / 1,837,500 ≈ **$2.18**.

**Note**: the treasury-stock method only produces dilution when the exercise price is below the average market price (the options are "in the money"), exactly as here ($20 < $32).

### Original table — if-converted method versus treasury-stock method

| | If-converted method | Treasury-stock method |
|---|---|---|
| Applies to | Convertible debt, convertible preferred stock | Options, warrants |
| Numerator adjustment | Add after-tax interest (debt) or add back the preferred dividend (preferred) | None — net income is unchanged |
| Denominator adjustment | Add the full as-converted share count | Add only the net incremental shares (issuable shares minus shares hypothetically repurchased at the average market price) |
| Produces dilution when | The security's own per-share effect is below the EPS being compared against | The exercise price is below the average market price (in the money) |

### Original table — antidilution quick-test shortcut

| Step | Action |
|---|---|
| 1 | Compute the security's own per-share effect: (numerator adjustment) ÷ (share-count adjustment) |
| 2 | Compare it to the EPS figure being tested against (basic EPS, or the running cumulative diluted EPS if other securities are already included) |
| 3 | If the security's per-share effect is **lower**, it is dilutive — include it |
| 4 | If the security's per-share effect is **higher** (or the security would otherwise increase EPS / decrease a loss per share), it is antidilutive — exclude it |

### Worked example 20 — Identifying and excluding an antidilutive security

Marchbanks Group reports net income of $6,000,000 and 2,500,000 weighted average common shares (no other securities). It also has convertible preferred stock paying $600,000 in total dividends, convertible into 200,000 shares. Determine whether this security should be included in diluted EPS.

**Basic EPS** = $6,000,000 / 2,500,000 = **$2.40**.

**Security's own per-share effect** = $600,000 / 200,000 = **$3.00**.

**Test**: because $3.00 > $2.40, including this security would *increase* EPS rather than decrease it — the security is **antidilutive** and must be **excluded**. Diluted EPS is reported equal to basic EPS: **$2.40**.

**Common trap**: a security that looks dilutive because it "adds shares" is not automatically dilutive — the test is always whether its own numerator-to-share-count effect falls below (dilutive) or above (antidilutive) the EPS being compared against.

### Worked example 21 — Complex capital structure: sequential dilution testing

Ashford Capital Partners reports net income of $12,000,000 and 5,000,000 weighted average common shares. It has three potentially dilutive securities: convertible bonds (after-tax interest add-back $450,000, 300,000 as-converted shares), convertible preferred stock ($250,000 dividends, 100,000 as-converted shares), and options (no numerator effect, 50,000 incremental shares under the treasury-stock method). Determine diluted EPS.

**Step 1 — basic EPS** = $12,000,000 / 5,000,000 = $2.40.

**Step 2 — rank each security by its own per-share effect, most dilutive (lowest) first:**
- Options: $0 / 50,000 = $0.00
- Convertible bonds: $450,000 / 300,000 = $1.50
- Convertible preferred: $250,000 / 100,000 = $2.50

**Step 3 — add securities one at a time, recalculating cumulative diluted EPS, stopping as soon as adding one would raise EPS:**

| Step | Numerator | Denominator | Cumulative EPS |
|---|---:|---:|---:|
| Basic | $12,000,000 | 5,000,000 | $2.40 |
| + Options | $12,000,000 | 5,050,000 | $2.38 |
| + Convertible bonds | $12,450,000 | 5,350,000 | $2.33 |
| + Convertible preferred | $12,700,000 | 5,450,000 | $2.33 (rounds the same; precisely $2.3303, versus $2.3271 before adding it) |

Adding the convertible preferred stock raises cumulative EPS from approximately $2.3271 to approximately $2.3303 — an increase — so it is **antidilutive at the margin** and must be **excluded**, even though it appeared dilutive when tested against basic EPS alone in isolation.

**Diluted EPS** = the last non-increasing cumulative figure, from options plus convertible bonds only ≈ **$2.33**.

**Analytical point.** With more than one potentially dilutive security, each one must be tested for its *incremental* effect on the running cumulative EPS, not just compared individually to basic EPS — a security can look dilutive in isolation yet be the one that tips the combination into being antidilutive once other, more strongly dilutive securities are already included.

### Worked example 22 — Continuing operations, discontinued operations, and total EPS

Revisit Tidewater Logistics from Worked Example 11 (continuing-operations net income $10,000,000; after-tax discontinued-operations loss $1,500,000; total net income $8,500,000), assuming 4,000,000 weighted average shares and no preferred dividends. Calculate EPS from continuing operations, EPS from discontinued operations, and total EPS.

**EPS from continuing operations** = $10,000,000 / 4,000,000 = $2.50.

**EPS from discontinued operations** = −$1,500,000 / 4,000,000 = −$0.375 ≈ −$0.38.

**Total EPS** = $8,500,000 / 4,000,000 = $2.125 ≈ $2.13 (equivalently, $2.50 − $0.38 ≈ $2.13, before rounding).

**Presentation note**: companies with discontinued operations typically present all three figures, so a reader can see forward-looking continuing-operations EPS separately from the one-time discontinued-operations effect.

## 5. Common-size income statements and income-statement ratios

**Common-size** restates every income-statement line as a percentage of revenue, which strips out the effect of company size and makes cross-company and time-series comparison far more meaningful.

### Original table — income-statement margin ratios

| Ratio | Formula |
|---|---|
| Gross profit margin | Gross profit ÷ Revenue |
| Operating profit margin | Operating profit (EBIT) ÷ Revenue |
| Pretax margin | Pretax profit ÷ Revenue |
| Net profit margin | Net income ÷ Revenue |

### Worked example 23 — Common-size comparison across company size

Northgate Apparel has revenue of $10,000,000 and COGS of $6,000,000. A much larger competitor has revenue of $50,000,000 and COGS of $32,000,000. Compare their gross margins.

**Northgate**: COGS% = $6,000,000 / $10,000,000 = 60%; gross margin = 40%.

**Competitor**: COGS% = $32,000,000 / $50,000,000 = 64%; gross margin = 36%.

**Analytical point.** Despite being one-fifth the size, Northgate has a meaningfully better gross margin — a comparison that is only visible once both companies are put on a common-size (percentage-of-revenue) basis; comparing raw dollar gross profit ($4,000,000 vs. $18,000,000) would have suggested the opposite conclusion about operating efficiency.

### Worked example 24 — Calculating all four margin ratios

Everline Industries reports revenue of $20,000,000, COGS of $12,000,000, operating expenses of $5,000,000, non-operating expense of $500,000, and a 25% tax rate. Calculate gross profit margin, operating margin, pretax margin, and net profit margin.

- Gross profit = $20,000,000 − $12,000,000 = $8,000,000; **gross margin = 40%**.
- Operating profit = $8,000,000 − $5,000,000 = $3,000,000; **operating margin = 15%**.
- Pretax profit = $3,000,000 − $500,000 = $2,500,000; **pretax margin = 12.5%**.
- Tax = $2,500,000 × 25% = $625,000; net income = $2,500,000 − $625,000 = $1,875,000; **net margin ≈ 9.38%**.

### Worked example 25 — Diagnosing a margin decline with common-size analysis

In the following year, Everline Industries' gross margin falls to 35% (from 40% in Worked Example 24), while its operating-expense percentage of revenue stays constant. Explain, using common-size analysis, where the margin pressure originated.

**Answer.** Because the operating-expense percentage is unchanged, the entire decline flows through from the gross-margin line — meaning the pressure originated in cost of goods sold (or in pricing) rather than in overhead spending. An analyst would investigate input costs, pricing power, or product mix, rather than SG&A discipline, as the likely driver, and would expect operating margin to fall by roughly the same 5 percentage points as gross margin, which a quick recalculation would confirm.

## Analyst decision workflow

### Original checklist — before comparing income statements across companies or periods

1. Have I confirmed both companies use comparable revenue-recognition policies (point-in-time vs. over-time, principal vs. agent)?
2. Have I identified any capitalize-versus-expense policy differences that would distort near-term margins?
3. Have I separated recurring operating results from discontinued operations and unusual/infrequent items before forecasting?
4. For any accounting change, have I correctly applied retrospective treatment (policy changes) versus prospective treatment (estimate changes) when comparing periods?
5. Have I used diluted EPS (not basic) when the company has potentially dilutive securities, and confirmed no antidilutive security was mistakenly included?
6. Have I restated the comparison on a common-size basis before drawing conclusions from companies of different sizes?

## Glossary

- **Five-step revenue recognition model** — identify the contract; identify performance obligations; determine the transaction price; allocate the price; recognize revenue as obligations are satisfied.
- **Principal vs. agent** — a principal records gross transaction revenue and related costs; an agent records only its net commission/fee.
- **Matching principle** — expenses are recognized in the same period as the revenue they help generate.
- **Capitalize** — record a cost as an asset and recognize it as an expense gradually (depreciation/amortization) over its expected benefit period, rather than immediately.
- **Discontinued operations** — the results of a business unit being exited, presented separately, net of tax, below continuing-operations income.
- **Retrospective application** — restating all prior periods shown, as if a new accounting policy had always applied.
- **Prospective application** — applying a change (typically an accounting estimate) only to the current and future periods, with no restatement.
- **Basic EPS** — (net income − preferred dividends) ÷ weighted average common shares outstanding.
- **Diluted EPS** — basic EPS adjusted for the effect of all dilutive potentially convertible securities and options, using the if-converted method (convertible debt/preferred) and the treasury-stock method (options/warrants).
- **If-converted method** — for convertible securities: add back the related preferred dividend or after-tax interest to the numerator, and add the as-converted shares to the denominator.
- **Treasury-stock method** — for options/warrants: assume exercise, assume proceeds are used to repurchase shares at the average market price, and add only the net incremental shares to the denominator.
- **Antidilutive security** — a security whose inclusion would increase EPS (or decrease a loss per share); such securities must be excluded from diluted EPS.
- **Common-size income statement** — every line restated as a percentage of revenue.

## Interactive tools

Use the Income Statement EPS Explorer below to build a basic-to-diluted EPS bridge (if-converted and treasury-stock mechanics) and to test individual securities for dilution or antidilution.

## Common mistakes and exam traps

- Subtracting common-stock dividends from the EPS numerator — only **preferred** dividends reduce it.
- Using the year-end share count instead of a properly time-weighted average for basic EPS.
- Applying a stock split or stock dividend only from its effective date instead of retroactively to the start of the earliest period presented.
- In the treasury-stock method, repurchasing assumed shares at the **exercise price** instead of the **average market price** — a very common and severe error.
- In the if-converted method for debt, adding back the **pretax** interest instead of the **after-tax** interest.
- Assuming any security that "adds shares" is automatically dilutive — the correct test is always the security's own per-share effect compared to the running EPS, not simply whether shares increase.
- With multiple potentially dilutive securities, testing each only in isolation against basic EPS instead of sequentially, most-dilutive-first, against the cumulative diluted EPS.
- Treating a change in accounting estimate as if it required restating prior periods (it does not — only policy changes and error corrections do).
- Comparing raw dollar profit figures across companies of very different sizes instead of common-size percentages.

## Memory aids

- Basic EPS numerator: "common shareholders only" — subtract **preferred** dividends, never common dividends.
- If-converted: "add back what you would have kept" — after-tax interest (debt) or the preferred dividend (preferred), because that cost disappears once the security is assumed converted.
- Treasury-stock method: "buy back at the *market* price, not the deal price" — shares repurchased use the average market price, not the exercise price.
- Antidilution test: "if it helps EPS, it doesn't count" — a security that would raise EPS is excluded from diluted EPS.
- Policy change = retro (restate the past); estimate change = pro (only the future) — "policy looks back, estimate looks forward."

## Exam tips

- EPS questions are the highest-value calculation questions in this module — practice the treasury-stock and if-converted mechanics until the numerator/denominator adjustments are automatic.
- Watch for a scenario that gives you an exercise price *above* the average market price — those options are out of the money and are not dilutive at all (no treasury-stock adjustment applies).
- When a question gives multiple potentially dilutive securities, check whether it wants the simple individual test or the full sequential cumulative test — the sequential test is required whenever more than one security could plausibly interact.
- For non-recurring items, the fastest way to answer a classification question is to ask: does this get restated in prior periods (policy change, error) or not (estimate change, unusual item)? — that one distinction resolves most classification questions.

## One-page revision sheet

- **Revenue recognition**: 5-step model (contract, performance obligations, transaction price, allocation, recognition); principal (gross) vs. agent (net); point-in-time vs. over-time (percent-complete for long-term contracts); bill-and-hold's 4 criteria.
- **Expense recognition**: matching principle, expense-as-incurred, capitalize-then-depreciate; capitalize test = future economic benefit; capitalized interest excluded from reported interest expense; software costs capitalizable only after technological feasibility.
- **Non-recurring items**: unusual/infrequent (continuing operations, separate line, no restatement); discontinued operations (net of tax, separate line, prior periods reclassified); policy change (retrospective); estimate change (prospective); error correction (restated).
- **Basic EPS** = (NI − preferred dividends) ÷ weighted average shares; splits/dividends applied retroactively.
- **Diluted EPS**: if-converted method for convertible debt (add after-tax interest) and convertible preferred (add back the dividend); treasury-stock method for options (net incremental shares at average market price); exclude antidilutive securities (test: does inclusion raise EPS?); with multiple securities, test sequentially most-dilutive-first.
- **Common-size and ratios**: every line ÷ revenue; gross margin, operating margin, pretax margin, net margin.

## 30-second summary

Revenue and expense recognition choices — timing, principal-vs-agent, capitalize-vs-expense — can make economically identical companies look very different on the income statement, so an analyst must identify and adjust for policy differences before comparing them. Non-recurring items (discontinued operations, unusual items, and accounting policy or estimate changes) each have a distinct presentation and restatement rule that determines whether they belong in a forward-looking earnings forecast. EPS bridges basic to diluted using the if-converted method (debt and preferred) and the treasury-stock method (options), always excluding any security whose inclusion would raise EPS, and testing multiple securities sequentially in order of their individual dilutive strength. Common-size analysis removes the distorting effect of company size, revealing margin differences that raw dollar comparisons hide.

## Continue studying

Formulas for this lesson are linked below in the Formula Explorer. Continue to the practice questions and flashcards, then the chapter exam, before moving on to FSA-LM3 (Analyzing Balance Sheets) once it is produced.

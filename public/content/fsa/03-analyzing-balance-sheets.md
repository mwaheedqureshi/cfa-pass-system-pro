# Analyzing Balance Sheets

## Chapter overview

The balance sheet reports what a company owns, what it owes, and the residual claim of its owners at a single point in time. This module moves beyond the income statement to examine four disclosure-heavy balance-sheet areas that repeatedly separate careful analysts from careless ones — intangible assets, goodwill, financial instruments, and non-current liabilities — and closes with the calculation toolkit analysts use to compare balance sheets across time and across companies of very different sizes: common-size statements and balance-sheet ratios.

## Why it matters

Balance-sheet line items are rarely as simple as the number printed on the page. Two companies with identical economics can report very different total assets, equity, and leverage purely because of how they classify a financial instrument, whether an intangible was purchased or developed internally, or whether a bond was issued at a discount or a premium. An analyst who cannot see through these classification choices will misjudge solvency, misjudge asset quality, and misprice risk.

## Official 2027 learning outcomes

1. explain the financial reporting and disclosures related to intangible assets
2. explain the financial reporting and disclosures related to goodwill
3. explain the financial reporting and disclosures related to financial instruments
4. explain the financial reporting and disclosures related to non-current liabilities
5. calculate and interpret common-size balance sheets and related financial ratios

## Prerequisites

This module builds on the financial statement analysis framework (FSA-LM1) and the income-statement mechanics from FSA-LM2 (recognition and capitalize-versus-expense reasoning carries over directly to intangible assets here).

### Original table — anatomy of a classified balance sheet

| Section | Typical line items | What it tells an analyst |
|---|---|---|
| Current assets | Cash, marketable securities, receivables, inventory, prepaid expenses | Resources expected to convert to cash or be used within one year or one operating cycle |
| Non-current assets | Property, plant & equipment, intangible assets, goodwill, long-term financial instruments | Resources providing benefit beyond one year; a major driver of long-run earning power |
| Current liabilities | Accounts payable, short-term borrowings, current portion of long-term debt, accrued expenses | Obligations due within one year; compared against current assets for liquidity |
| Non-current liabilities | Long-term debt (bonds payable), lease liabilities, deferred tax liabilities, pension obligations | Longer-dated claims on the firm; central to solvency analysis |
| Equity | Contributed capital, retained earnings, accumulated other comprehensive income, non-controlling interests | The owners' residual claim after all liabilities are satisfied |

A classified balance sheet — one that separates current from non-current — is the standard presentation format and is what makes liquidity and solvency ratio analysis possible in the first place.

## Section 1 — Intangible assets

An intangible asset is an identifiable, non-monetary asset without physical substance. "Identifiable" means the asset either is separable (can be sold, licensed, or transferred on its own) or arises from contractual/legal rights, which is what distinguishes a recognized intangible asset from goodwill (Section 2), which is never separately identifiable.

Recognition requires that future economic benefits are probable and that cost can be measured reliably. Three origin paths lead to very different accounting outcomes:

- **Purchased individually** — capitalized at cost, the most straightforward case.
- **Internally developed** — under IFRS, research-phase costs are expensed as incurred, while development-phase costs are capitalized once technical and commercial feasibility criteria are met; under US GAAP, both research and development costs are generally expensed as incurred (with narrow exceptions, notably certain software-development costs).
- **Acquired in a business combination** — recognized separately from goodwill at fair value on the acquisition date if identifiable, otherwise absorbed into goodwill.

After initial recognition, an intangible with a **finite useful life** is amortized over that life (straight-line unless a more representative pattern is supported) and tested for impairment when indicators exist. An intangible with an **indefinite useful life** is never amortized but is tested for impairment at least annually. IFRS additionally permits a revaluation model for intangibles (fair value, only if an active market exists — rare in practice); US GAAP permits only the cost model.

### Original table — the capitalize-versus-expense test for internally generated intangibles

| Cost stage | IFRS treatment | US GAAP treatment |
|---|---|---|
| Research (pure/basic investigation) | Expensed as incurred | Expensed as incurred |
| Development, before feasibility criteria met | Expensed as incurred | Expensed as incurred |
| Development, after feasibility criteria met | Capitalized | Generally still expensed (narrow exceptions, e.g., certain software costs) |

### Worked example 1 — Research and development: IFRS versus US GAAP

Vesper Robotics spends $2,000,000 on research activities and $3,000,000 on development activities during the year; the development spending occurs entirely after technical and commercial feasibility has been established.

Under IFRS: the $2,000,000 of research is expensed; the $3,000,000 of development is capitalized as an intangible asset.

Under US GAAP: both research and development are expensed, for a total expense of $2,000,000 + $3,000,000 = $5,000,000.

The pretax income difference between the two frameworks in the year of spending is $5,000,000 − $2,000,000 = **$3,000,000** — IFRS reports $3,000,000 higher pretax income and $3,000,000 higher total assets in the year the cost is incurred, purely from a classification difference, before either company amortizes the capitalized asset in future periods.

### Worked example 2 — Purchased versus internally generated intangibles

Larkspur Media purchases a customer relationship list from another company for $500,000 in an arm's-length transaction — capitalized at cost, since it was acquired individually with a reliably measurable cost. In the same period, Larkspur Media spends $500,000 on general advertising intended to build its own brand recognition — expensed as incurred, since internally generated brand value (unlike a purchased customer list) is never recognized as an intangible asset under either framework, regardless of how valuable the resulting brand ultimately becomes.

### Worked example 3 — Finite-life amortization versus indefinite-life impairment testing

Windmere Foods holds two intangibles: a trademark with an indefinite useful life, carried at $1,200,000 with no scheduled amortization but tested for impairment at least annually, and a patent with an 8-year finite useful life, carried at $800,000 and amortized straight-line. The patent's annual amortization expense is $800,000 ÷ 8 = **$100,000** per year, while the trademark generates zero amortization expense unless and until an impairment is recognized.

### Worked example 4 — The IFRS revaluation model (rare in practice)

Cascade Pharmaceuticals holds an intangible right that trades in an active market, carried at a cost of $400,000, with a current fair value of $550,000. Under IFRS's revaluation model (available only because an active market exists), the asset is written up to $550,000, with the $550,000 − $400,000 = **$150,000** revaluation surplus recognized in other comprehensive income rather than net income. Under US GAAP, which permits only the cost model for intangibles, the asset would remain at cost (less accumulated amortization), with no revaluation permitted regardless of market evidence.

## Section 2 — Goodwill

Goodwill arises only in a business combination and represents the excess of the purchase price paid over the fair value of the identifiable net assets acquired. Unlike other intangibles, goodwill is never separately identifiable, is never internally generated onto a balance sheet (an acquirer's own organically built reputation is never recognized as goodwill), and is never amortized under current IFRS or US GAAP — instead, it is tested for impairment at least annually and whenever an impairment indicator arises. Once impaired, goodwill can never be written back up, even if the acquired business subsequently recovers in value.

### Original table — goodwill impairment testing at a glance

| Step | IFRS (cash-generating unit) | US GAAP (reporting unit) |
|---|---|---|
| 1 | Compare carrying amount of the CGU (including goodwill) to its recoverable amount (higher of fair value less costs to sell and value in use) | Optional qualitative assessment; if indicated, compare fair value of the reporting unit to its carrying amount |
| 2 | If carrying amount exceeds recoverable amount, recognize impairment, first against goodwill, then pro rata against other CGU assets | If carrying amount exceeds fair value, recognize impairment limited to the goodwill balance |
| Reversal | Never permitted for goodwill | Never permitted |

### Worked example 5 — Calculating goodwill from a business combination

Ironclad Logistics acquires Brightwell Energy's transport division for a purchase price of $50,000,000. An independent valuation determines the fair value of the identifiable net assets acquired (all identifiable tangible and intangible assets, less liabilities assumed) is $38,000,000. Goodwill recognized = $50,000,000 − $38,000,000 = **$12,000,000**.

### Worked example 6 — Goodwill impairment

Thornfield Industries carries a reporting unit with a total carrying amount of $60,000,000, which includes $12,000,000 of goodwill from the acquisition in Worked Example 5's pattern. The reporting unit's fair value falls to $53,000,000. The impairment indicated is $60,000,000 − $53,000,000 = $7,000,000. Since $7,000,000 is less than the $12,000,000 goodwill balance, the full $7,000,000 is recognized as a goodwill impairment loss (limited to, and fully absorbed by, the goodwill balance), leaving a new goodwill carrying amount of $12,000,000 − $7,000,000 = **$5,000,000**. This impairment equals 58.3% of the beginning goodwill balance ($7,000,000 ÷ $12,000,000) — a useful sense check for how severe the write-down is relative to the acquisition's original premium.

### Worked example 7 — Impairment losses are never reversed

The following year, Sablewood Capital's reporting unit fair value recovers to $65,000,000 — well above its post-impairment carrying amount. Despite this recovery, no write-up of goodwill is permitted under either framework; goodwill remains at its impaired carrying value. This is a deliberate asymmetry: goodwill impairment is a one-way ratchet down, unlike the reversal of impairment losses that IFRS permits for certain other long-lived assets (not covered in this module).

### Worked example 8 — Internally generated "goodwill" is never recognized

Quillon Technologies has built a strong brand reputation entirely through its own operations; an internal valuation estimates this reputation is worth $20,000,000, but nothing is recognized on Quillon's balance sheet, since internally generated goodwill is explicitly excluded from recognition under both frameworks. Contrast this with Marrowbay Shipping, which acquires a competitor with a comparably strong reputation and, as part of that acquisition, recognizes $9,000,000 of goodwill — the identical type of underlying economic value is recognized only because it was acquired in a transaction with an observable purchase price, not because it is inherently more "real" than Quillon's self-built reputation.

## Section 3 — Financial instruments

Financial instruments (primarily debt and equity investments held by the reporting company) are classified into one of three measurement categories, and the classification — not the type of instrument itself — determines how gains, losses, and income flow through the financial statements:

- **Amortized cost** — appropriate when the business model is to hold the instrument to collect contractual cash flows and those cash flows are solely payments of principal and interest. No fair-value remeasurement; only interest income (via the effective interest method) and impairment affect net income.
- **Fair value through other comprehensive income (FVOCI)** — appropriate when the business model is to both collect contractual cash flows and sell the instrument. Fair-value changes go to other comprehensive income (not net income); interest/dividend income and (for debt) realized gains/losses upon sale are "recycled" into net income.
- **Fair value through profit or loss (FVPL)** — the default category for anything not meeting the criteria above (including most trading positions and, by default, equity investments). All fair-value changes flow directly through net income.

Equity investments default to FVPL unless the holder makes an **irrevocable election** at initial recognition to classify them as FVOCI — but that election carries a permanent consequence: unlike debt-FVOCI, equity-FVOCI gains and losses are never recycled to net income, even when the investment is sold.

### Original table — the three measurement categories at a glance

| Category | Business model | Fair-value changes go to | Realized gain/loss on sale |
|---|---|---|---|
| Amortized cost | Hold to collect contractual cash flows | Not remeasured | N/A (carrying amount is cost-based) |
| FVOCI (debt) | Hold to collect and sell | Other comprehensive income | Recycled to net income upon sale |
| FVOCI (equity, elected) | Any (strategic holding) | Other comprehensive income | Never recycled to net income |
| FVPL | Trading / default category | Net income | Already in net income; no further recycling needed |

### Worked example 9 — Same instrument, three different net income outcomes

Pemberton Steel holds a $10,000,000 bond investment whose fair value rises to $10,300,000 during the period. If classified at amortized cost, there is no fair-value remeasurement at all — net income is unaffected by the $300,000 price move (only effective-interest income is recognized). If classified FVOCI, the $10,300,000 − $10,000,000 = $300,000 unrealized gain is recognized in other comprehensive income, bypassing net income. If classified FVPL, that same $300,000 gain flows directly into net income. Three identical economic events, three different net income results, driven entirely by classification.

### Worked example 10 — Classification depends on business model, not instrument type

Halcyon Aerospace's treasury desk buys government bonds intending to hold them to collect coupon and principal at maturity, never selling before then — amortized cost is the appropriate classification. Fennwick Retail's investment desk holds economically identical government bonds but actively trades them to profit from price movements — FVPL is the appropriate classification for Fennwick's holding. The instrument is identical; the classification (and therefore the accounting) differs because the business model differs.

### Worked example 11 — The equity-FVOCI election and its permanent consequence

Corvid Analytics buys a $2,000,000 equity stake in a key supplier for strategic reasons (not to trade) and irrevocably elects FVOCI treatment at initial recognition. The investment's value rises to $2,400,000, recognizing a $2,400,000 − $2,000,000 = $400,000 unrealized gain in other comprehensive income. When Corvid later sells the stake for $2,400,000 cash, the realized $400,000 gain is **not** reclassified into net income — it remains permanently within equity (typically moved directly to retained earnings) — a sharp contrast to a debt instrument held at FVOCI, where the equivalent realized gain would be recycled into net income upon sale.

### Worked example 12 — A classification change can move a solvency ratio without any change in debt or cash flow

Stonebridge Manufacturing's business model for its bond portfolio changes (a rare event under the standards, requiring a genuine shift in how the portfolio is managed), triggering reclassification from amortized cost to FVPL. The newly recognized $400,000 unrealized loss on the reclassified bonds reduces both net income and equity, moving Stonebridge's debt-to-equity ratio from 0.85 to 0.91 — even though nothing has changed about Stonebridge's actual debt levels or its cash flows. An analyst who does not read the classification note could misread this as a genuine deterioration in solvency.

## Section 4 — Non-current liabilities

The dominant non-current liability for most companies is long-term debt — bonds payable being the most heavily tested form. At issuance, a bond's proceeds depend on how its stated coupon rate compares with the market rate demanded by investors for bonds of similar risk and maturity:

- Coupon rate = market rate → bonds issue **at par** (proceeds equal face value).
- Coupon rate < market rate → bonds issue **at a discount** (proceeds below face value; investors demand a lower price to earn a market-competitive return from a below-market coupon).
- Coupon rate > market rate → bonds issue **at a premium** (proceeds above face value).

Any discount or premium is amortized over the bond's remaining term so that the liability's carrying amount converges to face value by maturity (the effective interest method is the theoretically preferred approach; straight-line amortization is permitted under US GAAP when the result is not materially different). Bonds are carried at amortized cost by default, though a fair value option exists in limited circumstances. If a company retires debt before maturity, it recognizes a gain or loss equal to the difference between the debt's carrying amount and the amount paid to reacquire it.

Debt agreements typically include covenants, which analysts must monitor independently of the payment schedule: **affirmative covenants** require the borrower to take specific actions (maintain minimum working capital, deliver timely audited financials, maintain insurance), while **negative covenants** restrict the borrower from taking specific actions (exceeding a leverage ratio, paying dividends beyond a threshold, incurring additional debt). Breaching either type can trigger technical default even while the company remains current on interest and principal payments.

### Original table — bond issuance and amortization at a glance

| Relationship | Issuance price vs. face value | Carrying amount over time |
|---|---|---|
| Coupon rate = market rate | At par | Constant at face value |
| Coupon rate < market rate | Discount (below face value) | Rises toward face value by maturity |
| Coupon rate > market rate | Premium (above face value) | Falls toward face value by maturity |

### Worked example 13 — Bonds issued at a discount

Amaranth Biotech issues $10,000,000 face-value bonds at 97.50% of par because the market rate exceeds the bonds' stated coupon rate. Issuance proceeds = $10,000,000 × 0.975 = $9,750,000. The discount is $10,000,000 − $9,750,000 = $250,000. Amortized straight-line over the bond's 5-year term, that discount adds $250,000 ÷ 5 = **$50,000** per year to the liability's carrying amount, so the carrying amount rises from $9,750,000 toward the full $10,000,000 face value by maturity.

### Worked example 14 — Bonds issued at a premium

Yellowridge Mining issues $8,000,000 face-value bonds at 103% of par because the bonds' coupon rate exceeds the market rate. Issuance proceeds = $8,000,000 × 1.03 = $8,240,000. The premium is $8,240,000 − $8,000,000 = $240,000. Amortized straight-line over the bond's 4-year term, that premium reduces the liability's carrying amount by $240,000 ÷ 4 = **$60,000** per year, so the carrying amount falls from $8,240,000 toward the $8,000,000 face value by maturity — the mirror image of Worked Example 13.

### Worked example 15 — Gain on early retirement of debt

Cinderpeak Airlines carries bonds at an amortized-cost carrying amount of $9,750,000 and repurchases them in the open market for $9,500,000 cash to retire the debt ahead of schedule. The gain on retirement = $9,750,000 − $9,500,000 = **$250,000**, recognized in net income in the period of retirement — reacquiring debt for less than its carrying amount is economically favorable to the issuer (often because market rates have risen since issuance, depressing the bonds' current price).

### Original table — non-current liability disclosure essentials

| Disclosure item | What an analyst checks it for |
|---|---|
| Issuance terms (coupon, maturity, discount/premium) | Whether the carrying amount is converging toward face value as expected |
| Fair value of debt (if disclosed) | Whether market-implied credit risk has changed since issuance |
| Affirmative covenants | Required actions the borrower must continue to perform |
| Negative covenants | Prohibited actions/ratio thresholds the borrower must not breach |
| Maturity schedule | Refinancing risk concentration in any single future period |

### Worked example 16 — Reading covenant disclosures, not just the payment schedule

Loamfield Agriculture's credit agreement includes an affirmative covenant (maintain minimum working capital of $2,000,000; deliver audited financial statements within 90 days of year-end) and a negative covenant (do not exceed a 3.0x debt-to-EBITDA ratio). Loamfield has never missed an interest or principal payment, but its debt-to-EBITDA ratio has drifted to 3.4x — a covenant breach that can trigger technical default, accelerated repayment demands, or renegotiated (typically costlier) terms, regardless of the company's unblemished payment history. An analyst who checks only the payment schedule would miss this entirely.

## Section 5 — Common-size balance sheets and balance-sheet ratios

A **common-size balance sheet** restates every line item as a percentage of total assets, which does two things a raw-dollar balance sheet cannot: it makes the balance sheet's internal structure directly comparable across companies of very different sizes, and it isolates genuine shifts in composition from pure scale effects. **Vertical analysis** is this same-period, percent-of-total-assets view; **horizontal analysis** instead tracks how each line item has changed relative to a base period (or restates each period's dollar figures as an index relative to that base), highlighting which specific accounts are growing faster or slower than the balance sheet as a whole.

Beyond common-size percentages, analysts routinely calculate two families of balance-sheet ratios: **liquidity ratios**, which assess a company's ability to meet its current obligations, and **solvency ratios**, which assess a company's use of debt financing and its capacity to meet longer-term obligations.

### Original table — vertical versus horizontal analysis

| Technique | What it holds fixed | What it reveals |
|---|---|---|
| Vertical analysis (common-size) | A single period; every line item ÷ total assets | Internal structure/composition at a point in time; comparable across company size |
| Horizontal analysis | A single line item across periods; percentage change (or index) from a base period | Which specific accounts are growing or shrinking faster than the balance sheet as a whole |

### Original table — balance-sheet ratio summary

| Ratio | Formula | Category | Indicates |
|---|---|---|---|
| Current ratio | Current assets ÷ Current liabilities | Liquidity | Ability to meet current liabilities with current assets |
| Quick (acid-test) ratio | (Cash + Marketable securities + Receivables) ÷ Current liabilities | Liquidity | Ability to meet current liabilities without relying on inventory |
| Cash ratio | (Cash + Marketable securities) ÷ Current liabilities | Liquidity | Ability to meet current liabilities with only the most liquid assets |
| Long-term debt-to-equity | Total long-term debt ÷ Total equity | Solvency | Financial risk and leverage from long-term debt alone |
| Debt-to-equity | Total debt ÷ Total equity | Solvency | Financial risk and leverage from all interest-bearing debt |
| Total debt ratio | Total debt ÷ Total assets | Solvency | Proportion of assets financed with debt |
| Financial leverage | Total assets ÷ Total equity | Solvency | Overall use of leverage (assets supported per dollar of equity) |

### Worked example 17 — Building a common-size balance sheet

Duskwood Timber reports total assets of $40,000,000, comprised of cash $4,000,000, receivables $6,000,000, inventory $10,000,000, and net PP&E $20,000,000. The common-size percentages are cash 10% ($4,000,000 ÷ $40,000,000), receivables 15%, inventory 25%, and PP&E 50% — which sum to exactly 100%, a useful internal check that every asset line item has been captured.

### Worked example 18 — Cross-sectional comparison across very different company sizes

Vesper Robotics (total assets $40,000,000, cash $4,000,000, inventory $10,000,000) and Larkspur Media (total assets $400,000,000, cash $16,000,000, inventory $32,000,000) are ten times apart in raw size, making dollar comparisons nearly meaningless. On a common-size basis, Vesper holds 10% of assets in cash versus Larkspur's 4%, and 25% of assets in inventory versus Larkspur's 8% — revealing that Vesper's balance sheet is structurally far more inventory-intensive and cash-rich, proportionally, than Larkspur's, a comparison that raw dollar figures alone could never surface.

### Worked example 19 — Calculating the three liquidity ratios

Windmere Foods reports current assets of $12,000,000, made up of cash $2,000,000, marketable securities $1,000,000, receivables $3,000,000, and inventory $6,000,000, against current liabilities of $8,000,000. Current ratio = $12,000,000 ÷ $8,000,000 = **1.50**. Quick ratio = ($2,000,000 + $1,000,000 + $3,000,000) ÷ $8,000,000 = $6,000,000 ÷ $8,000,000 = **0.75**. Cash ratio = ($2,000,000 + $1,000,000) ÷ $8,000,000 = $3,000,000 ÷ $8,000,000 = **0.375**. The steep drop from the current ratio to the quick ratio signals that a large share of Windmere's current assets — half of them — sits in inventory, which the quick ratio deliberately excludes.

### Worked example 20 — Calculating the four solvency ratios

Cascade Pharmaceuticals reports total debt of $18,000,000 (of which $15,000,000 is long-term), total equity of $22,000,000, and total assets of $45,000,000. Long-term debt-to-equity = $15,000,000 ÷ $22,000,000 ≈ **0.68**. Debt-to-equity = $18,000,000 ÷ $22,000,000 ≈ **0.82**. Total debt ratio = $18,000,000 ÷ $45,000,000 = **0.40**. Financial leverage = $45,000,000 ÷ $22,000,000 ≈ **2.05**. Financial leverage will always exceed 1.0 for any company with liabilities, since total assets always exceed total equity by the amount of total liabilities.

### Worked example 21 — Horizontal analysis flags a disproportionate change

Ironclad Logistics' total assets grew from $30,000,000 in the base year to $36,000,000 in the current year, a horizontal growth rate of ($36,000,000 − $30,000,000) ÷ $30,000,000 = **20%**. Over the same period, its inventory line grew from $5,000,000 to $8,000,000, a horizontal growth rate of ($8,000,000 − $5,000,000) ÷ $5,000,000 = **60%** — three times the growth rate of total assets. An analyst seeing inventory outpace total-asset growth by this margin would investigate whether Ironclad is genuinely scaling operations or accumulating excess, potentially obsolete, stock.

## Analyst decision workflow

1. Separate acquired-in-a-transaction value (goodwill, purchased intangibles) from internally generated value (never recognized) before judging asset quality.
2. Read the financial-instrument classification note before trusting any reported gain, loss, or ratio that touches investment securities — classification, not instrument type, drives where the number lands.
3. Trace every non-current liability to its issuance terms (discount, premium, or par) and confirm whether the carrying amount is converging toward face value as expected.
4. Check covenant compliance disclosures independently of the payment history — a company can be current on every payment and still be in technical default.
5. Never compare raw balance-sheet dollars across companies of different size; convert to common-size percentages first.
6. Calculate all three liquidity ratios and all four solvency ratios together — a single ratio in isolation can be misleading (Worked Example 19's steep current-to-quick drop is a case in point).

## Glossary

- **Intangible asset** — an identifiable, non-monetary asset without physical substance.
- **Goodwill** — the excess of purchase price over the fair value of identifiable net assets acquired in a business combination; never separately identifiable, never amortized, never internally generated.
- **Amortized cost (financial instrument)** — measurement basis for instruments held to collect contractual cash flows; no fair-value remeasurement.
- **FVOCI** — fair value through other comprehensive income; fair-value changes bypass net income.
- **FVPL** — fair value through profit or loss; fair-value changes flow directly through net income.
- **Discount / premium (bonds)** — the shortfall or excess of issuance proceeds relative to face value, arising when the coupon rate differs from the market rate at issuance.
- **Affirmative / negative covenant** — a required action versus a prohibited action specified in a debt agreement.
- **Common-size balance sheet** — every line item expressed as a percentage of total assets.
- **Vertical analysis** — a same-period, percent-of-total view of a financial statement.
- **Horizontal analysis** — a period-over-period (or base-year-indexed) view of how each line item has changed.

## Interactive tools

Two tools accompany this lesson: a **Common-Size Statement Builder** that converts raw balance-sheet inputs into common-size percentages and flags line items with the largest deviations, and a **Financial Instrument and Intangible Disclosure Explorer** that walks through classification scenarios spanning intangibles, goodwill, financial instruments, and non-current liabilities.

## Common mistakes and exam traps

- Treating an internally generated brand or reputation as goodwill — goodwill only arises in a business combination.
- Forgetting that goodwill impairment, once recognized, is never reversed even if the reporting unit's value later recovers.
- Assuming the type of financial instrument (e.g., "it's a bond, so it must be amortized cost") determines its classification — classification depends on the business model, not the instrument type.
- Forgetting that an equity-FVOCI election is irrevocable and that gains/losses on equity FVOCI are never recycled to net income, unlike debt FVOCI.
- Confusing a discount with a premium — a coupon rate below the market rate produces a discount (lower issuance proceeds), not a premium.
- Reading only the payment history and concluding a borrower is in good standing, while ignoring a covenant breach that has already triggered technical default.
- Comparing companies' balance sheets in raw dollars instead of converting to common-size percentages first.
- Computing only one liquidity or solvency ratio and treating it as the full picture, rather than reviewing the ratio family together.

## Memory aids

- **"Bought it, book it; built it, bill it."** Purchased/acquired identifiable value is capitalized; internally built value (other than qualifying development costs) is expensed.
- **Discount = "the market demanded a discount because the coupon was too low."** Coupon below market rate → issue below par.
- **Quick ratio = current ratio minus inventory's contribution.** If the gap between them is large, current assets are inventory-heavy.
- **Financial leverage is always ≥ 1** for any company with liabilities, since assets = liabilities + equity.

## Exam tips

- LOS5's common-size and ratio calculations are the most calculation-testable part of this module — practice all seven named ratios (three liquidity, four solvency) until the formulas are automatic.
- Expect disclosure-interpretation items (not just calculations) on intangibles, goodwill, financial instruments, and non-current liabilities — read scenario-style questions carefully for the specific accounting fact pattern (purchased vs. internally generated; business-model classification; discount vs. premium).
- Watch for questions that test the *asymmetry* rules: goodwill impairment reversal is never permitted; equity-FVOCI recycling is never permitted.

## One-page revision sheet

- Intangibles: identifiable, non-monetary, no physical substance; purchased = capitalize; internally generated (except qualifying development costs) = expense; finite life = amortize + test if indicators; indefinite life = never amortize, test at least annually.
- Goodwill = purchase price − FV of identifiable net assets acquired; never amortized; impairment-only, never reversed; never internally generated.
- Financial instruments: amortized cost (hold to collect), FVOCI (hold to collect and sell; debt gains recycle, equity gains never recycle), FVPL (default/trading; all gains to net income).
- Non-current liabilities: coupon < market rate → discount, issuance proceeds below face value, carrying amount rises to face value by maturity; coupon > market rate → premium, mirror image; retirement gain/loss = carrying amount − reacquisition price; watch covenant compliance independently of payment history.
- Common-size balance sheet = each line item ÷ total assets; liquidity ratios (current, quick, cash); solvency ratios (long-term debt-to-equity, debt-to-equity, total debt ratio, financial leverage).

## 30-second summary

Balance-sheet analysis is fundamentally about seeing past the reported number to the classification choice behind it — purchased versus internally generated, amortized cost versus fair value, discount versus premium — and then using common-size percentages and the liquidity/solvency ratio family to compare the result across time and across companies of any size.

## Continue studying

Use the Formula Explorer to review all nine formulas from this module, the Flashcards to drill classification rules and ratio definitions, the Practice bank to test disclosure-interpretation and calculation items together, and the Chapter Exam for a full timed assessment of FSA-LM3.

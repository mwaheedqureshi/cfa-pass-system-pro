# Introduction to Financial Statement Analysis

## Chapter overview

Financial statement analysis (FSA) is the discipline of using a company's financial reports — combined with other information — to evaluate its past, current, and likely future performance and financial position. This module is the entry point to the entire FSA topic: it does not teach you how to read a balance sheet line by line (that starts in later modules); instead it teaches you the *process* a competent analyst follows, the *purposes* that process serves, the *regulatory ecosystem* that produces the documents you will analyze, the *reporting-system differences* you must be alert to, and the *other information sources* that supplement the financial statements themselves.

## Why it matters

Every later FSA module assumes you already understand this module's five ideas: the analysis framework, why the analysis is being done, where the documents you rely on actually come from and how trustworthy they are, why a US-listed company's statements are not directly comparable to an IFRS-reporting company's statements, and where to look beyond the annual report. Skipping this module is like learning to use a set of tools without first understanding what job they're for.

## Official 2027 learning outcomes

- describe the steps in the financial statement analysis framework
- describe the roles of financial statement analysis
- describe the importance of regulatory filings, financial statement notes and supplementary information, management's commentary, and audit reports
- describe implications for financial analysis of alternative financial reporting systems and the importance of monitoring developments in financial reporting standards
- describe information sources that analysts use in financial statement analysis besides annual and interim financial reports

## Prerequisites

No prior FSA module is required — this is the first FSA module. General familiarity with the idea that companies publish periodic financial reports is helpful but not assumed. This module does not define the balance sheet, income statement, cash flow statement, or statement of changes in equity individually; those are built up starting in the next few modules. Where this lesson needs to refer to one of those statements by name, it does so only descriptively, without teaching their construction.

## 1. The financial statement analysis framework

Analysts who jump straight into ratio calculations without first defining the question they're trying to answer routinely waste time computing numbers that don't address the decision at hand. The official framework exists to prevent exactly that mistake. It has six sequential phases, though in practice an analyst often cycles back to an earlier phase as new information surfaces.

### Original diagram — the six-phase FSA framework

```
1. ARTICULATE PURPOSE & CONTEXT
   -> what question must be answered, for whom, by when, with what resources?
        |
        v
2. COLLECT DATA
   -> financial statements + industry/economic data + management discussions
      (top-down: macro environment -> industry prospects -> company prospects)
        |
        v
3. PROCESS DATA
   -> ratios, growth rates, common-size statements, comparability adjustments
        |
        v
4. ANALYZE / INTERPRET DATA
   -> turn processed numbers into a reasoned conclusion, not just a number
        |
        v
5. DEVELOP & COMMUNICATE CONCLUSIONS
   -> format depends on audience; must separate opinion from fact and
      disclose limitations (see CFA Institute Standard V(B))
        |
        v
6. FOLLOW-UP
   -> repeat periodically; revise forecasts/recommendations as new
      information arrives -> loops back to step 1 or 2
```

Two features of this framework are easy to overlook and are worth stating explicitly. First, **step 1 is not optional preamble** — it is the step that determines what "processing" in step 3 will even be useful. An analyst who skips straight to step 3 usually ends up computing ratios that don't answer the actual question. Second, **step 6 is not a formality** — it is what turns a one-time analysis into an ongoing monitoring process, and it explicitly loops back to steps 1 or 2 rather than terminating the framework.

### Worked example 1 — Diagnosing a skipped step

An intern is asked to evaluate whether a regional bakery chain is a good acquisition target for a private-equity client. The intern immediately downloads three years of the target's financial statements and computes a full set of profitability and liquidity ratios before asking anyone what the client actually wants to know (a controlling stake? a minority growth investment? a distressed-debt purchase?).

**Diagnosis.** The intern has skipped step 1 (articulate purpose and context) and jumped to step 3 (process data) without first completing step 2 in a purposeful way. Because the intended use of the analysis (controlling buyout vs. minority growth stake vs. distressed debt) changes which ratios and which time horizon matter, the ratios computed may need to be redone once the purpose is clarified. The fix is not to discard the data collection — it's to go back and complete step 1 before deciding which of the already-gathered data is actually relevant.

### Worked example 2 — Matching an activity to its framework step

Classify each of the following analyst activities by framework step: (a) reading the client engagement letter to determine the analysis's required delivery date, (b) adjusting a foreign subsidiary's reported inventory to a comparable cost-flow basis, (c) sending the finished report to the client's investment committee with an explicit statement distinguishing the analyst's opinion from verified fact, (d) revisiting the analysis eighteen months later after the target company issues a profit warning.

**Answer.** (a) is step 1 (articulate purpose and context — the engagement letter defines scope and timeline). (b) is step 3 (process data — an adjustment for comparability is a processing activity, not raw collection). (c) is step 5 (develop and communicate conclusions — the explicit opinion/fact distinction is the Standard V(B) hallmark of this step). (d) is step 6 (follow-up).

### Worked example 3 — Step 4 versus step 3

An analyst computes that a company's current ratio fell from 2.1 to 1.4 year over year (step 3: processing). A second analyst, given the same computed ratio, writes: "The decline is driven primarily by a doubling of short-term debt used to fund an acquisition, not by any deterioration in the company's underlying liquidity position; absent that acquisition-related borrowing, the current ratio would have been roughly unchanged." Which step does the second analyst's statement belong to, and why does the distinction matter?

**Answer.** The second statement belongs to step 4 (analyze/interpret the data). The distinction matters because a client who only sees the step-3 output (the ratio fell) could wrongly conclude the company's core liquidity is deteriorating, when step 4's interpretation shows the decline has an identifiable, non-recurring cause. Presenting a processed number without interpretation risks a materially misleading conclusion.

### Worked example 4 — Where does follow-up loop back to?

A fixed-income analyst issues a hold recommendation on a corporate bond. Fourteen months later, the issuer announces a large debt-funded share buyback. Trace what the analyst should do next in terms of the framework.

**Answer.** The buyback announcement is new information that should trigger step 6 (follow-up), which loops back to step 2 (collect data) to gather the buyback's terms and updated leverage figures, then proceeds again through steps 3-5 to determine whether the hold recommendation still stands. The framework is not a one-pass sequence for any analysis that remains relevant over time — step 6 is designed specifically to reopen it.

## 2. The roles of financial statement analysis

Financial statement analysis serves one core role: using financial reports (together with other information) to evaluate a company's past, current, and potential future performance and financial position, in order to support an economic decision. It is fundamentally an **external, public-information-based** activity — this is what separates the analyst's use of financial statements from a company's own internal management, who have access to non-public operating data and do not need to rely solely on published reports.

Two things are typically being assessed: a company's **profitability** and its **ability to generate cash**. Different decision contexts weight these two differently.

### Original table — six decision contexts for financial statement analysis

| Decision context | Primary question the analysis supports |
|---|---|
| Equity investment selection | Is the security attractively priced relative to the company's prospects? |
| Security valuation for a recommendation | What is a defensible estimate of intrinsic value? |
| Creditworthiness / loan terms | Can the borrower service the proposed debt, and on what terms? |
| Debt / bond rating assignment | What rating category reflects the issuer's credit risk? |
| Venture capital / private equity decisions | Does the business model and financial trajectory support the intended investment thesis? |
| M&A candidate evaluation | Does the target's financial position support the proposed transaction structure and price? |

### Worked example 5 — Same statements, different roles

A single set of financial statements for a mid-sized logistics company is used by three different people: a corporate bond analyst deciding whether to recommend the company's five-year notes, a private-equity associate assessing a leveraged buyout, and the company's own CFO preparing an internal budget. Explain why only two of these three are examples of financial statement analysis in the sense used by this module.

**Answer.** The bond analyst and the private-equity associate are both performing financial statement analysis as defined here: both are external parties using the published financial reports (plus other information) to support an economic decision (a credit recommendation; an investment decision) about a company they do not control. The CFO is not performing financial statement analysis in this sense — as an internal manager, the CFO has access to non-public operating data and is not relying on the published financial statements as the primary information source. The distinction is about the *analyst's relationship to the company* (external vs. internal), not about the type of decision being made.

### Worked example 6 — Profitability versus cash-generation emphasis

A subscription software company reports strong and growing net income but its operating cash flow has been negative for two consecutive years because it aggressively capitalizes commissions paid to its sales team, spreading the expense over the life of each contract while collecting cash from customers in installments that lag the expense recognition. Which of the two things financial statement analysis typically assesses — profitability or cash-generation ability — is the more urgent concern here, and why might a credit analyst weight it differently than an equity analyst?

**Answer.** Cash-generation ability is the more urgent concern: a company can report positive net income while still being unable to meet its near-term cash obligations, and persistent negative operating cash flow despite reported profitability is a classic warning sign. A credit analyst, whose central question is whether the company can service its obligations, would weight the cash-flow shortfall heavily and might view it as a near-term risk. An equity analyst focused on long-run intrinsic value might tolerate the same pattern if convinced it reflects a temporary, scalable customer-acquisition investment rather than a structural problem — the same fact pattern, interpreted through different decision contexts.

### Worked example 7 — Distinguishing forward-looking use from historical reporting

Explain, using the framework from Section 1, why "financial statement analysis" is not simply a description of what has already happened, even though it starts from historical financial statements.

**Answer.** Steps 4 and 5 of the framework (analyze/interpret; develop and communicate conclusions) exist specifically because the point of the exercise is to support a forward-looking economic decision — a valuation, a credit judgment, an investment recommendation — not merely to restate historical results. Historical financial statements (step 2's core data source) are an input; the output the framework is built to produce is a forward-facing conclusion or recommendation grounded in that historical evidence.

### Worked example 8 — Recognizing a non-decision use

A university finance student reads a company's annual report purely to understand how the business model works, with no investment, credit, or advisory decision pending. Is this financial statement analysis in the sense used by this module?

**Answer.** Not in the module's operative sense. The definition centers on evaluating a company to support an economic decision (investment, credit, or similar). Reading financial statements for general understanding, with no decision context, uses the same documents but is not the activity this module and the rest of the FSA topic are built around; the framework in Section 1 (particularly step 1's emphasis on purpose and context) presumes a decision exists to be served.

## 3. Regulatory filings, financial statement notes, management's commentary, and audit reports

This is the broadest section of the module because it covers the entire ecosystem that produces, regulates, and verifies the documents an analyst relies on: who sets the accounting rules, who enforces disclosure, what specific documents a company files, what its footnotes and management commentary add beyond the raw statements, and what an auditor's report actually promises.

### 3.1 Standard-setters and regulators

Two different kinds of institution shape financial reporting, and conflating them is a common early mistake.

- **Standard-setters** write the accounting rules themselves. The **International Accounting Standards Board (IASB)** writes International Financial Reporting Standards (IFRS); the **Financial Accounting Standards Board (FASB)** writes US Generally Accepted Accounting Principles (US GAAP).
- **Regulators** enforce compliance and oversee capital markets. In the United States, the **Securities and Exchange Commission (SEC)** is the primary regulator, operating under authority granted by the **Securities Act of 1933** (governs new securities offerings) and the **Securities Exchange Act of 1934** (governs ongoing reporting and secondary trading). The **Sarbanes–Oxley Act of 2002 (SOX)**, passed after a wave of accounting scandals, created the **Public Company Accounting Oversight Board (PCAOB)**, tightened auditor-independence rules, and required senior-management certification of financial reports and of internal-control effectiveness.
- The **International Organization of Securities Commissions (IOSCO)** is not itself a regulator with enforcement power — it is a coordinating body whose members regulate the vast majority of the world's securities markets. IOSCO's core objectives are to protect investors, ensure markets are fair/efficient/transparent, and reduce systemic risk; it also publishes a set of principles addressed specifically to securities issuers.

### Worked example 9 — Standard-setter versus regulator

A first-year analyst writes in a memo: "The FASB will investigate whether the company complied with its disclosure obligations under the Securities Exchange Act." Identify the error.

**Answer.** The FASB is a standard-setter (it writes US GAAP); it does not investigate compliance or enforce securities law. That role belongs to the SEC, the regulator empowered by the Securities Exchange Act of 1934. The memo conflates rule-writing with rule-enforcement — a distinction the module treats as foundational.

### Worked example 10 — Why SOX matters to an analyst, not just a compliance officer

Explain why an equity analyst, who has no direct interest in corporate-governance law, should still care about the internal-control certification requirement SOX imposes on US-listed companies.

**Answer.** The internal-control certification requirement gives an analyst independent, standardized evidence about the reliability of the financial reporting process itself — not just the numbers it produces. A company with a disclosed material weakness in internal controls presents heightened risk that its reported figures could be materially misstated, which is directly relevant to any analysis built on those figures, regardless of the analyst's specific decision context.

### 3.2 Filed documents

The exact set of documents a company must file depends on its jurisdiction and listing venue. The following are the specific filing types the official curriculum names for the US regulatory regime.

### Original table — named SEC filing types and their purpose

| Filing | Who files it / when | What it contains |
|---|---|---|
| Securities offering registration statement | Company issuing new securities | Discloses the offering's terms and the issuer's business/financials before securities are sold |
| Form 10-K (US issuers) / 20-F (non-US) / 40-F (Canadian) | Annually | The comprehensive annual report filed with the regulator, including audited financial statements |
| Annual report | Annually, voluntary | A company-produced (not SEC-mandated) annual communication to shareholders; often more narrative than the 10-K |
| Proxy statement / Form DEF-14A | Ahead of a shareholder vote | Matters put to shareholder vote, including director elections and executive compensation |
| Form 10-Q (US) / 6-K (non-US) | Quarterly (10-Q) / semiannually (6-K) | Interim, generally unaudited financial statements and updates |
| Form 8-K (US) / 6-K (non-US) | Upon a material event | Disclosure of a specific material event (e.g., a major acquisition, executive departure) |
| Forms 3, 4, 5 | Insider ownership events | Initial and changed beneficial-ownership disclosures by company insiders |
| Form 144 | Prior to a restricted-securities sale | Notice of a proposed sale of restricted securities |
| Form 11-K | Annually | Financial statements of employee benefit/stock-purchase plans |

### Worked example 11 — Choosing the right filing

An analyst wants to know (a) what an executive's total compensation package was last year, and (b) whether a company's CFO sold a large block of personally held shares last month. Identify the correct filing for each question.

**Answer.** (a) The proxy statement (Form DEF-14A) — executive compensation is disclosed there ahead of the shareholder vote. (b) Form 4 — changes in insider beneficial ownership, including sales by executives, are disclosed on Form 4. Neither answer is the 10-K, which is a common wrong guess since it is the most familiar filing, but it is not where either specific item is found.

### Worked example 12 — Interim reporting frequency by jurisdiction

A US-listed company and an otherwise-comparable non-US issuer both file interim reports. Without looking anything up, an analyst assumes both file on the same schedule with the same level of assurance. What is wrong with that assumption?

**Answer.** US issuers file Form 10-Q quarterly; many non-US issuers instead file Form 6-K on a semiannual basis. The assumption of an identical schedule is wrong, and because these interim reports are generally unaudited regardless of jurisdiction, an analyst should not assume a non-US issuer's less-frequent interim disclosure carries a different assurance level — it does not; it is simply less frequent.

### 3.3 The EU regulatory structure

The European Union layers its own institutions on top of individual member-state regulation. Since 2005, EU-listed companies have been required to report under IFRS. A pipeline of EU-level bodies reviews and endorses new IFRS standards before they become mandatory in the EU: the European Financial Reporting Advisory Group provides technical advice, the Standards Advice Review Group and Accounting Regulatory Committee review that advice, and the European Securities and Market Authority (ESMA), working with national regulators coordinated historically through the European Securities Committee, oversees market-level enforcement.

### Worked example 13 — Why "IFRS" is not a single uniform outcome across jurisdictions

An analyst assumes that because both a French company and a Japanese company report "under IFRS," their endorsement and adoption process was identical. Why is this not necessarily a safe assumption from what this module covers?

**Answer.** The module describes the EU's own multi-step endorsement pipeline (EFRAG advice, review by the Standards Advice Review Group and Accounting Regulatory Committee) as specific to how new IFRS standards become mandatory for EU-listed companies. A non-EU jurisdiction that also permits or requires IFRS reporting is not shown to necessarily follow the same endorsement mechanics. The safe conclusion is that "reports under IFRS" describes the accounting standard being applied, not that the adoption process behind it was identical across jurisdictions.

### 3.4 Financial statement notes and segment reporting

Footnotes exist because a single set of summarized statements cannot convey everything relevant to an informed reader. Notes disclose, among other things: the basis of preparation and specific accounting policies, methods, and estimates used (which also highlights the flexibility — and resulting comparability challenge — accounting standards can allow); segment information; acquisitions and disposals; contractual obligations, including those not reflected on the balance sheet; financial instruments and related risk exposures; legal proceedings; related-party transactions; and subsequent events.

**Segment reporting** has the most specific quantitative rule in this module. An operating segment must generally be separately disclosed once it satisfies a **10% threshold** on any one of three measures — revenue, assets, or profit/loss. Even after applying that test, if the segments identified this way do not together account for at least **75% of the company's total external revenue**, additional segments must be broken out until that 75% coverage is reached. For each disclosed segment, the company must generally provide: segment revenue, segment profit or loss, segment assets and liabilities, interest revenue/expense, the cost of segment property/plant/equipment and intangible assets, depreciation and amortization, other material non-cash expenses, income tax expense or benefit, and the entity's share of any equity-method investee's income.

### Worked example 14 — Applying the 10% test

A diversified consumer-products company has four operating segments with the following external revenue as a percentage of total company revenue: Segment A 42%, Segment B 31%, Segment C 9%, Segment D 18%. Which segments must be separately disclosed under the 10% revenue test, and does the 75% external-revenue coverage rule require anything further?

**Answer.** Segments A (42%), B (31%), and D (18%) each exceed the 10% revenue threshold and must be separately disclosed; Segment C (9%) does not meet the threshold on the revenue measure alone (it would still need to be checked against the assets and profit/loss measures before being excluded). The three qualifying segments together account for 42% + 31% + 18% = 91% of external revenue, comfortably above the 75% coverage requirement, so no additional segment needs to be broken out solely to satisfy that rule.

### Worked example 15 — When the 75% rule forces an additional segment

A holding company has six operating segments. Applying the 10% test on revenue, assets, and profit/loss identifies only two segments as separately reportable, and those two segments together represent 58% of total external revenue. What must the company do next, and why?

**Answer.** Because the two qualifying segments cover only 58% of external revenue — below the 75% threshold — the company must identify and separately disclose additional operating segments (even if they individually fail the 10% test) until the disclosed segments together account for at least 75% of total external revenue. The 75% rule exists precisely to prevent a company from satisfying the letter of the 10% test while still leaving most of its business economically opaque to readers.

### 3.5 Management's commentary

Management's commentary on the business — sometimes called Management's Discussion and Analysis (MD&A), an operating and financial review, or similar names depending on jurisdiction — supplements the raw statements with management's own narrative. The IASB's (non-mandatory) Management Commentary Practice Statement identifies five content elements: the nature of the business; management's objectives and strategies; the company's most significant resources, risks, and relationships; the results of operations; and the critical performance measures and indicators management uses. Separately, where the SEC requires MD&A, it must address known trends and uncertainties affecting liquidity, capital resources, and results of operations; the effects of inflation and price changes where material; off-balance-sheet obligations; and critical accounting policies requiring significant management judgment.

### Worked example 16 — Recognizing MD&A content versus footnote content

An analyst finds a paragraph in a company's annual filing describing a known trend of rising input-commodity costs and management's plan to pass a portion of that increase through to customers via price increases in the coming year. Is this content more characteristic of the financial statement notes or of management's commentary, and why?

**Answer.** This is characteristic of management's commentary (MD&A), not the footnotes. Footnotes primarily disclose the basis of preparation, accounting policies, and specific balance/transaction detail; a forward-looking narrative about a known trend (rising input costs) and management's planned response (price increases) is exactly the kind of content the MD&A content requirements describe — known trends affecting future results, discussed in management's own words rather than as a technical accounting disclosure.

### 3.6 Audit reports and opinions

An external auditor's report provides **reasonable assurance, not absolute assurance**, that the financial statements are free of material misstatement and fairly presented in accordance with the applicable accounting framework. There are four opinion types.

### Original table — the four audit opinion types

| Opinion | Meaning |
|---|---|
| Unqualified (also called unmodified, or a "clean" opinion) | The statements are, in the auditor's judgment, fairly presented in all material respects — the preferred and most common outcome |
| Qualified | The statements are fairly presented except for a specific, identified matter (e.g., a scope limitation or a departure from the accounting framework on one item) |
| Adverse | The statements are not fairly presented — a materially pervasive departure from the applicable framework |
| Disclaimer of opinion | The auditor is unable to obtain sufficient evidence to form an opinion at all, and so does not express one |

Beyond the opinion itself, auditors of listed companies are generally required to discuss the matters that involved the most difficult, subjective, or complex auditor judgment — called **Key Audit Matters** internationally and **Critical Audit Matters** under US PCAOB standards. Where SOX applies, the auditor must also opine separately on the effectiveness of the company's internal control over financial reporting.

### Worked example 17 — Distinguishing "no opinion" from "a negative opinion"

A junior analyst reads that an auditor issued a disclaimer of opinion and concludes: "The auditor is saying the financial statements are not fairly presented." Correct the error.

**Answer.** A disclaimer of opinion means the auditor was unable to obtain sufficient appropriate evidence to form any opinion — it is a statement of *inability to conclude*, not a negative conclusion. Saying the statements are "not fairly presented" describes an **adverse** opinion, a different and distinct outcome. Confusing "no opinion expressed" with "a negative opinion expressed" is one of the most common errors at this stage of learning audit vocabulary.

### Worked example 18 — What "reasonable assurance" implies for reliance

An analyst treats an unqualified audit opinion as a guarantee that no misstatement of any kind exists anywhere in the statements. Is this a correct use of the audit opinion?

**Answer.** No. An unqualified opinion provides reasonable assurance — a high, but not absolute, level of confidence that the statements are free of *material* misstatement. It does not guarantee the complete absence of any misstatement, nor does it certify immaterial errors do not exist. Treating an audit opinion as an absolute guarantee overstates what the audit process is designed to provide.

### Worked example 19 — Interpreting a Critical Audit Matter disclosure

An auditor's report for a technology company names "valuation of acquired intangible assets" as a Critical Audit Matter, explaining that the valuation required significant judgment about future cash flows and discount rates. What should an analyst take from this disclosure, beyond the unqualified opinion itself?

**Answer.** The Critical Audit Matter disclosure signals where the auditor exercised the most judgment and applied the most audit effort — not a qualification of the opinion, but a flag for where estimation uncertainty in the financial statements is highest. An analyst should treat the valuation of acquired intangibles as an area warranting closer independent scrutiny (e.g., sensitivity to the discount-rate and cash-flow assumptions), even though the overall opinion remains unqualified.

## 4. Alternative financial reporting systems and monitoring standards developments

Because listed companies around the world report under different accounting frameworks — most consequentially IFRS or US GAAP — an analyst comparing companies across that boundary must adjust for known, systematic differences rather than treat reported figures as directly comparable.

### Original table — selected IFRS / US GAAP differences relevant to an introductory analyst

| Dimension | US GAAP | IFRS |
|---|---|---|
| Developed by | FASB | IASB |
| General approach | More rules-based | More principles-based |
| Inventory cost-flow methods permitted | FIFO, LIFO, and weighted-average | FIFO and weighted-average; LIFO is not permitted |
| Development costs | Generally expensed as incurred | May be capitalized once specific criteria are met |
| Reversal of an inventory write-down | Not permitted | Permitted, up to the amount of the original write-down |

Convergence between the two frameworks stalled on broad conceptual-framework harmonization but has continued on specific major standards (revenue recognition and lease accounting are commonly cited areas where the two frameworks moved closer together in recent years).

Beyond knowing today's differences, the module frames **monitoring developments** in financial reporting standards as an ongoing analyst responsibility, not a one-time study task, because new transaction types (the text specifically flags fintech products and digital/crypto assets as recent examples, along with a caution about the risk of "window dressing" — presenting a transaction's economics more favorably than its substance) regularly outpace existing guidance. Three channels an analyst can monitor: (1) new products and transaction types emerging in practice; (2) the actions of standard-setters and regulators, including exposure drafts and comment letters; (3) company disclosures about critical accounting policies and estimates, which often signal where judgment — and therefore future standard-setting attention — is concentrated. CFA Institute itself participates in this process through volunteer liaison committees and comment letters, and has historically advocated (for example, in a 2007 position paper on a comprehensive business-reporting model) for greater transparency, comparability, and decision-relevance in financial reporting, including preferences for fair-value measurement and direct-method cash flow presentation.

### Worked example 20 — Adjusting a naive cross-framework comparison

An analyst directly compares the gross margin of a US GAAP company using LIFO inventory costing against an IFRS company (which cannot use LIFO) during a period of rising input costs, without adjustment. What is the likely direction of the distortion, and why?

**Answer.** Under rising costs, LIFO assigns the most recently incurred (higher) costs to cost of goods sold, which tends to depress reported gross margin relative to a FIFO or weighted-average method, all else equal. Comparing the LIFO company's margin directly against the IFRS company's margin (computed only under FIFO or weighted-average) would likely make the LIFO company look less profitable than an economically equivalent IFRS company, purely as a costing-method artifact rather than a real operating difference — precisely the kind of comparability trap this section warns about.

### Worked example 21 — Identifying a monitoring channel in practice

A regional bank begins offering a new product that lets customers hold a blended balance of traditional deposits and a tokenized money-market instrument. No existing accounting standard directly addresses how to classify the tokenized portion. Which of the three monitoring channels described in this section is most directly implicated, and what should an analyst do?

**Answer.** This is a new transaction/product type (the first monitoring channel). An analyst should watch for how standard-setters and regulators respond (the second channel — exposure drafts, guidance, or enforcement actions) and pay close attention to how the bank itself discloses its accounting policy judgment for the new product in its critical-accounting-policies disclosure (the third channel), since in the absence of settled guidance, the company's own policy choice is itself a signal of where reporting risk and judgment are concentrated.

## 5. Information sources beyond annual and interim reports

Annual and interim financial reports are necessary but not sufficient. The official scope organizes supplementary information sources into four categories by where they originate.

### Original table — four categories of supplementary information sources

| Category | Examples |
|---|---|
| Issuer sources (non-regulatory) | Earnings calls, investor-day presentations, press releases, direct communication with investor relations, company website and site visits |
| Public third-party sources | Free industry whitepapers and consultancy reports, government and organizational economic/industry indicators, general news outlets, industry-specific news outlets, social media as a customer-sentiment gauge |
| Proprietary third-party sources | Sell-side analyst reports, credit rating agency communications, market-data platforms, industry-specific research consultancies |
| Proprietary primary research | Analyst-commissioned or self-conducted surveys, direct conversations with industry participants, product comparisons and evaluations |

### Worked example 22 — Classifying a source

An analyst reads a competitor's press release, listens to the subject company's own quarterly earnings call, and then commissions a small independent survey of the subject company's retail customers. Classify each source.

**Answer.** The competitor's press release and the subject company's earnings call are both issuer sources (non-regulatory) — company-originated communications, even though one is from a different company than the one being analyzed (a competitor's disclosures are still classified by their own issuer-source origin). The commissioned customer survey is proprietary primary research — information generated specifically for this analysis rather than sourced from an existing public or purchased dataset.

### Worked example 23 — Why "social media" and "a sell-side analyst report" are not the same category despite both being third-party

Explain why general social-media sentiment and a purchased sell-side analyst report are classified differently even though neither is issued by the company itself.

**Answer.** Social media commentary is a public third-party source — freely accessible, unstructured, and primarily useful here as a general sentiment gauge. A sell-side analyst report is a proprietary third-party source — produced by a specific research provider, typically requiring a subscription or brokerage relationship to access, and reflecting that provider's own structured analysis rather than raw public sentiment. The distinguishing feature is proprietary access and structured analytical content, not simply "who is the source" versus "is it about the company."

### Worked example 24 — Building a source checklist for a specific decision

A high-yield credit analyst evaluating a mid-cap manufacturer for a new bond issuance wants to supplement the company's 10-K and 10-Q filings. Using the four categories, propose one specific source from each category that would plausibly add value to this specific decision.

**Answer.** Issuer source: the company's most recent earnings-call transcript, for management's own framing of leverage trends and capital-allocation priorities. Public third-party source: a government industrial-production index relevant to the manufacturer's end markets, to gauge macro/industry headwinds independent of company-specific claims. Proprietary third-party source: a credit rating agency's most recent rationale for the issuer's current rating, since it reflects an independent credit-focused assessment. Proprietary primary research: direct conversations with two or three of the manufacturer's key suppliers or customers, to corroborate (or challenge) management's demand narrative with independent, decision-specific evidence.

## Analyst decision workflow

### Original checklist — before relying on any single source or document

1. Have I completed step 1 of the framework (purpose and context) before deciding which sources actually matter for this analysis?
2. Am I distinguishing a standard-setter's rules from a regulator's enforcement when I cite "why" a disclosure exists?
3. Have I identified the correct filing for the specific fact I need, rather than defaulting to the annual report for everything?
4. If comparing two companies, are they reporting under the same framework (IFRS vs. US GAAP), and if not, what specific, known differences could distort the comparison?
5. Does the audit opinion I'm relying on say what I think it says — unqualified, qualified, adverse, or a disclaimer — and have I checked for any Key/Critical Audit Matters?
6. Have I looked beyond the annual and interim reports to at least one issuer, public third-party, proprietary third-party, or primary-research source relevant to this specific decision?

## Glossary

- **Financial statement analysis (FSA)** — using financial reports, combined with other information, to evaluate a company's past, current, and potential future performance and financial position to support an economic decision.
- **Standard-setter** — an institution that writes accounting rules (e.g., IASB, FASB).
- **Regulator** — an institution that enforces compliance with securities and disclosure law (e.g., the SEC).
- **IOSCO** — a coordinating body of securities regulators, not itself an enforcement regulator.
- **Sarbanes–Oxley Act (SOX)** — 2002 US legislation strengthening auditor independence, management certification, and internal-control reporting; created the PCAOB.
- **10-K / 20-F / 40-F** — the comprehensive annual filing for US, non-US, and Canadian issuers respectively.
- **Proxy statement (DEF-14A)** — the filing covering matters submitted to a shareholder vote, including director elections and executive pay.
- **Operating segment** — a distinct business component; must generally be separately disclosed once it meets a 10% threshold on revenue, assets, or profit/loss, subject to a 75% external-revenue coverage rule across disclosed segments.
- **Management's Discussion and Analysis (MD&A) / management commentary** — management's narrative discussion of the business, trends, and critical accounting judgments, supplementing the raw statements.
- **Reasonable assurance** — the (non-absolute) level of confidence an audit opinion provides regarding freedom from material misstatement.
- **Unqualified / qualified / adverse / disclaimer of opinion** — the four possible audit-opinion outcomes, ranging from a clean opinion to an inability to form one at all.
- **Key Audit Matter / Critical Audit Matter** — matters involving the most significant auditor judgment, required to be discussed in the auditor's report for listed companies (international / US terminology respectively).

## Interactive tools

Use the Financial Statement Analysis Framework Navigator below to practice sequencing the six-phase framework against realistic analyst scenarios and to build a source-selection checklist for a chosen decision context.

## Common mistakes and exam traps

- Treating "reasonable assurance" as "absolute assurance" — an unqualified opinion never guarantees the complete absence of any misstatement.
- Confusing a disclaimer of opinion (no opinion given) with an adverse opinion (a negative opinion given) — these are opposite kinds of outcome, not degrees of the same thing.
- Assuming a standard-setter (IASB, FASB) has enforcement authority — enforcement belongs to regulators (e.g., the SEC), not standard-setters.
- Assuming the 10-K/20-F is the single source for every disclosure need — specific facts (executive pay, insider sales, a single material event) live in specific filings (proxy statement, Form 4, Form 8-K/6-K), not uniformly in the annual report.
- Applying only the 10% segment test and forgetting the 75% external-revenue coverage rule, which can force disclosure of additional segments even after the 10% test is satisfied.
- Skipping framework step 1 (purpose and context) and jumping straight to ratio computation — a recurring exam-style trap and a genuine practice error.
- Assuming IFRS reporting is uniform worldwide without regard to jurisdiction-specific endorsement processes (e.g., the EU's own multi-step endorsement pipeline).
- Treating social media sentiment and a purchased sell-side research report as the same category of source simply because both are "third-party."

## Memory aids

- The six framework steps in order: **P**urpose, **C**ollect, **P**rocess, **A**nalyze, **C**ommunicate, **F**ollow-up — "Please Collect Plenty of Actual Careful Facts."
- Audit opinions from best to worst: **U**nqualified > **Q**ualified > **A**dverse > **D**isclaimer ("UQAD") — remembering that a disclaimer is not "worse than adverse" in a linear sense, but rather a distinct non-opinion outcome, listed last as a reminder it is categorically different.
- The four information-source categories: **I**ssuer, **P**ublic third-party, **P**roprietary third-party, **P**rimary research — "I Prefer Precise Proof."
- Segment reporting: "**10 to qualify, 75 to cover**" — 10% threshold to require a segment, 75% total external-revenue coverage across disclosed segments.

## Exam tips

- Expect classification-style questions (which filing, which opinion type, which source category, which framework step) rather than calculation questions — this module contains no symbolic formula or numeric worked calculation in the official curriculum.
- Watch for questions that test the standard-setter/regulator distinction and the disclaimer/adverse distinction specifically — both are common, well-tested traps.
- When a question describes a scenario and asks "which framework step," look for the verb: articulating a question is step 1; gathering documents is step 2; computing/adjusting is step 3; explaining "why" is step 4; formatting a deliverable for an audience is step 5; revisiting after new information is step 6.
- For IFRS/US GAAP comparison questions, the specific named differences (inventory cost-flow methods, development-cost treatment, inventory write-down reversal) are the most exam-relevant, not a general sense that "the frameworks differ."

## One-page revision sheet

- **Framework**: Purpose -> Collect -> Process -> Analyze -> Communicate -> Follow-up (loops back to Purpose/Collect).
- **Roles**: external, decision-supporting use of financial reports; assesses profitability and cash-generation ability; six example decision contexts (equity selection, valuation, credit, ratings, VC/PE, M&A).
- **Standard-setters vs. regulators**: IASB/FASB write rules; SEC (via the 1933 and 1934 Acts, tightened by SOX) enforces them in the US; IOSCO coordinates regulators internationally without enforcement power of its own.
- **Key US filings**: 10-K/20-F/40-F (annual), DEF-14A (proxy), 10-Q/6-K (interim), 8-K/6-K (material events), Forms 3/4/5/144 (insider activity), 11-K (benefit plans).
- **Segment reporting**: 10% threshold on revenue/assets/profit-or-loss triggers separate disclosure; disclosed segments must together cover at least 75% of external revenue.
- **MD&A**: five IASB content elements (nature of business; objectives/strategies; resources/risks/relationships; results of operations; critical performance measures) plus SEC-specific requirements (trends/uncertainties, inflation effects, off-balance-sheet items, critical accounting policies).
- **Audit opinions**: unqualified (clean) > qualified (specific exception) > adverse (materially not fairly presented) > disclaimer (no opinion formed); Key/Critical Audit Matters flag areas of significant auditor judgment.
- **IFRS vs. US GAAP**: principles-based vs. rules-based; LIFO permitted only under US GAAP; development costs may be capitalized under IFRS but are generally expensed under US GAAP; inventory write-down reversal permitted under IFRS, not under US GAAP.
- **Information sources**: issuer, public third-party, proprietary third-party, proprietary primary research.

## 30-second summary

Financial statement analysis is a six-step, purpose-driven process (not a ratio dump) used externally to support economic decisions by assessing a company's profitability and cash-generating ability. The documents it relies on come from a regulated ecosystem — standard-setters write the rules, regulators enforce disclosure, specific filings serve specific purposes, footnotes and management's commentary add context the raw statements can't, and audit opinions provide reasonable (not absolute) assurance about reliability. Because reporting frameworks differ (most importantly IFRS versus US GAAP) and continue to evolve, a competent analyst adjusts for known differences and actively monitors developments, while also looking beyond the annual and interim reports to issuer, public, proprietary, and primary-research sources.

## Continue studying

This module has no formulas (the official reading is purely conceptual — see the Formula Explorer note on this lesson). Continue to the practice questions and flashcards below, then move on to FSA-LM2 (Analyzing Income Statements) once it is produced.

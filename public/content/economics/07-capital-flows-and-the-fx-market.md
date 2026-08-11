# Capital Flows and the FX Market

## Chapter overview

This chapter explains how the foreign exchange market is organized and who trades in it, how to read and convert a currency quote without inverting it by mistake, the difference between a nominal and a real exchange rate, how exchange rate regimes range from full dollarization to independent floating, how exchange rates connect to a country's trade balance, and why governments restrict capital flows.

## Why it matters

Every cross-border investment return depends on a currency conversion, and every misread quote — reading a quote backward, or assuming a currency's percentage move is the mirror image of its counterpart's — silently corrupts a return calculation. Analysts who can classify a country's exchange rate regime correctly also understand how much independent monetary policy that country's central bank actually has, which shapes every other economic call made about it.

## Official 2027 learning outcomes

The curriculum metadata above contains the authorized outcomes. In practical terms, be ready to:

- describe the foreign exchange market, including its functions and participants, distinguish between nominal and real exchange rates, and calculate and interpret the percentage change in a currency relative to another currency;
- describe exchange rate regimes and explain the effects of exchange rates on countries' international trade and capital flows; and
- describe common objectives of capital restrictions imposed by governments.

## Prerequisites

Comfort with percentage-change arithmetic and ratio notation is assumed throughout this chapter.

## Notation convention used in this lesson — read this first

Every currency quote in this lesson is written **"A/B"**, meaning: *the number of units of currency A that one unit of currency B will buy.*

- **A (written first, the numerator) is the price currency** (also called the quote currency).
- **B (written second, the denominator) is the base currency.** The base currency is always fixed at a quantity of **one**.
- A **direct quote** puts the observer's own (domestic) currency in the price-currency position (A); an **indirect quote** puts it in the base-currency position (B). A direct quote and its matching indirect quote are always **reciprocals** of each other: B/A = 1 ÷ (A/B).
- **A rise in the quote A/B means the base currency (B) has appreciated** (it now buys more of A) **and the price currency (A) has depreciated** against B. A fall means the reverse.

**Worked mini-example.** A quote of CAD/AUD = 0.9150 means 1 Australian dollar (the base currency) buys 0.9150 Canadian dollars (the price currency). If this quote rises to 0.9300, the Australian dollar (base) has appreciated against the Canadian dollar (price currency).

### Original diagram — reading the A/B quote

```text
        CAD  /  AUD   =   0.9150
         │       │            │
         │       │            └── how many units of CAD one unit of AUD buys
         │       └── BASE currency (denominator, fixed at "1")
         └── PRICE currency (numerator, quantity varies)

   Quote rises  →  AUD (base) appreciates,  CAD (price) depreciates
   Quote falls  →  AUD (base) depreciates,  CAD (price) appreciates
```

**The one professional-market wrinkle to know:** interbank traders do not usually say "direct" or "indirect" (those labels depend on which trader's home currency you mean), and market-convention currency-pair *codes* name the base currency **first in the code**, which is the **opposite order** from the actual price/base ratio. For example, the market code **GBPJPY** names GBP first, but the *quoted ratio* itself is JPY/GBP — GBP is still the base currency (denominator), JPY is still the price currency (numerator), even though "GBP" appears first in the code's name. Do not assume code order equals ratio order.

**Every calculation in this lesson states its A/B convention explicitly. When you invert a quote, you must recompute the percentage change from scratch — never simply flip the sign.** This is proven in worked example 4 below.

## 1. The foreign exchange market: functions, participants, and quotations

The foreign exchange (FX) market is where currencies are bought and sold, and it is the world's largest financial market by trading volume. It performs two core economic functions: it lets market participants convert one currency into another to settle cross-border trade and investment, and it lets participants hedge or take on currency risk.

**Market participants** fall into two broad camps: the **sell side** (large commercial and investment banks that make markets, quoting two-way prices to clients) and the **buy side** (everyone who trades with the sell side — asset managers, hedge funds, pension funds, sovereign wealth funds, corporations, retail investors, and central banks). Central banks are a distinctive buy-side participant because they may trade not for profit but to implement monetary policy or to intervene in support of a currency's value.

FX market turnover is dominated by a small number of instrument types and currency pairs, and the market's activity is concentrated among a relatively small number of large financial institutions trading with each other (interbank turnover) and with large financial clients, with non-financial corporate and retail turnover a much smaller share.

### Original table — FX market composition (structure, not exact historical percentages)

| Dimension | What it captures | Typical concentration |
|---|---|---|
| Instrument type | Spot, outright forward, FX swap, FX option | FX swaps are typically the largest single instrument category, followed by spot transactions |
| Counterparty type | Interbank, other financial clients, non-financial clients | Trading between reporting dealers and other financial institutions dominates; non-financial (corporate/retail) turnover is the smallest share |
| Currency pair | Which two currencies are being exchanged | A small number of major-currency pairs account for a large majority of total turnover |

### Worked example 1 — Reading a direct quote

**Problem.** A quote of CAD/AUD = 0.9150 is shown to a trader. Identify the price currency, the base currency, and state what a rise in this quote means for each currency.

**Method.** Apply the A/B convention: A (first, numerator) = price currency; B (second, denominator) = base currency.

**Step-by-step solution.** In CAD/AUD, CAD is written first (A), so CAD is the price currency; AUD is written second (B), so AUD is the base currency. A rise in the quote means the base currency (AUD) buys more CAD than before — AUD has appreciated, and CAD has depreciated.

**Final answer.** Price currency: CAD. Base currency: AUD. A rise means AUD appreciates, CAD depreciates.

**Interpretation.** The base currency is always the "1" being priced; reading which currency sits in the denominator position is the entire skill being tested here.

**Exam insight.** The price currency is always written first in the A/B convention used throughout this lesson — do not confuse this with the market-code-naming convention described above, which orders the other way.

### Worked example 2 — Computing the reciprocal (indirect) quote

**Problem.** The direct quote (from a Canadian observer's perspective) is CAD/AUD = 0.9150. Compute the matching indirect quote and state what it means.

**Method.** Apply the reciprocal relationship: indirect quote = 1 ÷ direct quote.

**Step-by-step solution.** AUD/CAD = 1 ÷ 0.9150 = 1.0929. This means 1 Canadian dollar buys 1.0929 Australian dollars.

**Final answer.** AUD/CAD = 1.0929.

**Interpretation.** The direct and indirect quotes describe exactly the same market price from two different reference points; they are reciprocals, never independent numbers.

**Exam insight.** Always relabel the currencies when you invert a quote — the price and base currency roles swap along with the number.

### Worked example 3 — Why appreciation and depreciation percentages are never equal in magnitude

**Problem.** A SEK/EUR quote (Swedish krona per euro) rises from 11.2000 to 11.5000. Calculate the percentage appreciation of the base currency and the percentage change of the price currency, and confirm they are not equal in magnitude.

**Method.** Base currency (EUR) percentage change = (new quote ÷ old quote) − 1. Price currency (SEK) percentage change: invert both quotes first, then apply the same formula to the inverted values.

**Step-by-step solution.** EUR (base) appreciation = 11.5000/11.2000 − 1 = 2.68%. Inverted quotes: EUR/SEK₀ = 1/11.2000 = 0.089286; EUR/SEK₁ = 1/11.5000 = 0.086957. SEK (price currency) change = 0.086957/0.089286 − 1 = −2.61%.

**Final answer.** EUR appreciates 2.68%; SEK depreciates 2.61%. The magnitudes are close but **not identical** — 2.68% ≠ 2.61%.

**Interpretation.** Mathematically, the appreciation of one side of a currency pair can never exactly equal the depreciation of the other side in percentage terms (except in the limit of an infinitesimally small move); the gap widens as the move gets larger.

**Exam insight.** Never assume "currency A depreciated by X%" implies "currency B appreciated by X%" — always recompute from the inverted quote.

### Worked example 4 — A larger move makes the asymmetry more visible

**Problem.** A NOK/GBP quote (Norwegian krone per British pound) falls from 13.4000 to 11.4000. Calculate the percentage change of the base currency and the price currency.

**Method.** Same two-step process as worked example 3, applied to a larger, more visibly asymmetric move.

**Step-by-step solution.** GBP (base) change = 11.4000/13.4000 − 1 = −14.93% (GBP depreciates). Inverted quotes: GBP/NOK₀ = 1/13.4000 = 0.074627; GBP/NOK₁ = 1/11.4000 = 0.087719. NOK (price currency) change = 0.087719/0.074627 − 1 = +17.54% (NOK appreciates).

**Final answer.** GBP depreciates 14.93%; NOK appreciates 17.54% — a much larger gap than worked example 3's smaller move.

**Interpretation.** The size of the asymmetry between the two percentages grows with the size of the underlying rate move; for small moves the two percentages are close, but they are never exactly equal.

**Exam insight.** A large percentage move is a strong hint that a question is specifically testing whether you invert-and-recompute rather than simply negate the given percentage.

### Worked example 5 — Reading a two-sided (bid/offer) quote

**Problem.** A dealer quotes a two-sided price of 8.9020–8.9050 SEK/USD to a client. The client wants to sell USD to the dealer. How many SEK does the client receive per USD sold, and which of the two numbers applies?

**Method.** In a two-sided quote for the base currency (USD here), the bid is what the dealer pays the client for the base currency; the offer is what the dealer charges the client to buy the base currency. Bid is always the lower number.

**Step-by-step solution.** The client is selling USD (the base currency) to the dealer, so the client receives the bid price: 8.9020 SEK per USD sold.

**Final answer.** 8.9020 SEK per USD.

**Interpretation.** If the client instead wanted to buy USD from the dealer, the client would pay the higher offer price, 8.9050 SEK per USD — the dealer always buys low (bid) and sells high (offer) from its own perspective.

**Exam insight.** Identify which side of the transaction the client is on (buying or selling the base currency) before picking bid or offer — do not default to the first number shown.

### Worked example 6 — Market-code order versus actual ratio order

**Problem.** Given the stated currency hierarchy (major currencies rank EUR highest, then GBP, then USD, with AUD and NZD as base currencies specifically against USD), what is the actual price/base ratio implied by the market code "EURNZD," and which currency is the base currency?

**Method.** Apply the hierarchy rule: the higher-ranked currency in the hierarchy is the base currency in the actual ratio, regardless of which currency's three-letter code is written first in the market-convention code name.

**Step-by-step solution.** EUR outranks every other major currency in the stated hierarchy, including NZD. Even though the code "EURNZD" names EUR first, the actual quoted ratio places EUR as the base currency (denominator) and NZD as the price currency (numerator): the actual ratio is **NZD/EUR**.

**Final answer.** Actual ratio: NZD/EUR. Base currency: EUR.

**Interpretation.** This is the single most common source of quotation-direction errors in professional FX markets — the market code's naming order and the actual price/base ratio order are opposite conventions, and only the currency hierarchy (not code order) determines which currency is the base currency.

**Exam insight.** Never infer the base currency from which code appears first in a pair name; apply the hierarchy rule instead.

### Original table — market-code naming order versus actual ratio order

| Market code | Code names first | Actual ratio (price/base) | Base currency |
|---|---|---|---|
| EURUSD | EUR | USD/EUR | EUR |
| GBPUSD | GBP | USD/GBP | GBP |
| USDAUD (exception pair) | USD | USD/AUD | AUD |
| EURGBP | EUR | GBP/EUR | EUR |
| GBPJPY | GBP | JPY/GBP | GBP |
| EURNZD | EUR | NZD/EUR | EUR |

Notice the code's naming order never determines the base currency; the hierarchy does — and for most major pairs, the currency named first in the code also happens to be the base currency, **except** where a currency higher in the hierarchy is named second (as in GBPJPY, where GBP still outranks JPY despite JPY's position, or when AUD/NZD are quoted against USD, an explicit exception to the general hierarchy).

### Worked example 7 — Real exchange rate calculation

**Problem.** A Canadian investor is comparing purchasing power with the Eurozone. The nominal exchange rate is CAD/EUR = 1.4600 (1 euro buys 1.4600 Canadian dollars). The Eurozone CPI is 118.0 and the Canadian CPI is 112.0 (both indexed to the same base period). Calculate the real exchange rate.

**Method.** Real exchange rate(domestic/foreign) = nominal exchange rate(domestic/foreign) × (foreign price level ÷ domestic price level), where "domestic" is the price currency and "foreign" is the base currency.

**Step-by-step solution.** Real exchange rate(CAD/EUR) = 1.4600 × (118.0/112.0) = 1.4600 × 1.0536 = 1.5382.

**Final answer.** Real exchange rate(CAD/EUR) ≈ 1.5382.

**Interpretation.** The real exchange rate adjusts the nominal quote for the relative price levels in each country, giving a purchasing-power-adjusted measure; unlike the nominal rate, it is never itself quoted or traded in FX markets — it is only an analytical index.

**Exam insight.** Keep the domestic/foreign (price/base) assignment consistent between the nominal rate and the CPI ratio, or the adjustment direction will be backward.

### Worked example 8 — Real exchange rate, percentage-change approximation

**Problem.** Over one year, the CAD/EUR nominal rate rises 8%, Eurozone prices rise 3%, and Canadian prices rise 1%. Approximate the percentage change in the real exchange rate.

**Method.** Apply the approximation: %Δ real exchange rate ≈ %Δ nominal rate + %Δ foreign prices − %Δ domestic prices.

**Step-by-step solution.** %Δ real exchange rate ≈ 8% + 3% − 1% = 10%.

**Final answer.** The real exchange rate rises by approximately 10%.

**Interpretation.** Because the euro's nominal appreciation (8%) is reinforced by relatively higher Eurozone inflation, the real appreciation is even larger than the nominal move alone.

**Exam insight.** This is an approximation (it drops a small cross-product term); do not expect it to match a fully compounded calculation to more than roughly one decimal place.

### Worked example 9 — Interpreting the real exchange rate versus purchasing power parity

**Problem.** After the change in worked example 8, is the euro more or less "expensive" in real, purchasing-power-adjusted terms than before, from the Canadian investor's perspective?

**Method.** A rising real exchange rate (domestic/foreign) means the foreign currency (and the goods it buys) has become more expensive in real terms.

**Step-by-step solution.** The real CAD/EUR rate rose approximately 10%, meaning euro-priced goods now cost Canadian buyers more in real, inflation-adjusted terms, not just in nominal currency terms.

**Final answer.** The euro (and Eurozone goods) became more expensive in real terms.

**Interpretation.** This is the same logic behind indexes like the Big Mac Index: comparing a real exchange rate to its long-run average or to 1.0 is one (imperfect) way analysts gauge whether a currency looks over- or under-valued relative to purchasing-power parity.

**Exam insight.** The real exchange rate is explicitly described as not a reliable short-term predictor of future nominal exchange rate moves — treat it as a valuation gauge, not a forecasting tool.

### Worked example 10 — Classifying market participants

**Problem.** A large pension fund calls its bank to execute a currency trade needed to settle an international bond purchase. Classify the pension fund and the bank by market side.

**Method.** Apply the buy-side/sell-side distinction.

**Step-by-step solution.** The bank, which quotes a two-way price and stands ready to trade, is a sell-side participant; the pension fund, which trades with the bank to meet its own investment need, is a buy-side participant.

**Final answer.** Bank: sell side. Pension fund: buy side.

**Interpretation.** Sell-side institutions make markets; buy-side institutions use those markets to meet an underlying investment or hedging need.

**Exam insight.** A central bank intervening to support its currency is still classified as a buy-side participant, even though its motive (policy, not profit) differs from other buy-side players.

### Worked example 11 — Which instrument dominates turnover?

**Problem.** An analyst is told that FX swaps make up the largest share of daily FX turnover by instrument, larger than spot transactions. Is this consistent with the module's description of the market's composition?

**Method.** Apply the stated ranking of instrument types by turnover share.

**Step-by-step solution.** FX swaps (used heavily for short-term funding and hedging by financial institutions) are described as the largest single instrument category, with spot transactions the next-largest category.

**Final answer.** Yes, this is consistent with the module's description.

**Interpretation.** This reflects how much FX-swap activity is driven by financial institutions managing short-term currency funding needs, rather than by outright currency speculation or trade settlement alone.

**Exam insight.** Do not assume "spot" is the largest turnover category just because it is the most intuitive transaction type for a retail audience.

### Worked example 12 — Solving for an unknown starting rate

**Problem.** A currency pair's base currency is known to have appreciated by exactly 6% over a period, ending at a quote of 1.6200. What was the starting quote?

**Method.** Apply the appreciation formula in reverse: ending quote = starting quote × (1 + appreciation), so starting quote = ending quote ÷ (1 + appreciation).

**Step-by-step solution.** Starting quote = 1.6200 ÷ 1.06 = 1.5283.

**Final answer.** The starting quote was approximately 1.5283.

**Interpretation.** The same formula that computes a percentage change from two quotes can be rearranged to solve for any one of the three unknowns (starting quote, ending quote, or percentage change) given the other two.

**Exam insight.** Watch for problems that give the ending value and the percentage change but ask for the starting value — a common way to disguise the same underlying calculation.

> **Knowledge check 1.** In the quote A/B, which currency is the base currency, and what value is it always fixed at? **Answer:** Currency B (the denominator); it is always fixed at one unit.

## 2. Exchange rate regimes and the trade balance

An "ideal" currency regime would offer three properties at once: a credibly fixed exchange rate, full currency convertibility (free capital flow), and fully independent monetary policy. In practice, **no regime can achieve all three simultaneously** — a country must give up at least one. This trade-off shapes every regime type described below: a regime that fixes the exchange rate and allows free capital flow must sacrifice independent monetary policy; a regime that keeps independent monetary policy and free capital flow must let the exchange rate float; a regime that fixes the exchange rate and keeps independent monetary policy must restrict capital flows.

### Regime spectrum — from no independent currency to fully independent policy

| Regime | Own legal tender? | Rate commitment | Monetary policy independence |
|---|---|---|---|
| Dollarization | No — uses another country's currency | Fixed by definition | None |
| Monetary union | No — shares a jointly created currency | Fixed by definition | None (policy set for the whole union) |
| Currency board | Yes | Legislated fixed parity | None (issuing authority constrained by law) |
| Fixed parity | Yes | Discretionary fixed band (up to ~1%) | Very limited |
| Target zone | Yes | Discretionary wider band (up to ~2%) | Limited |
| Passive crawling peg | Yes | Rate adjusted frequently to track inflation | Limited |
| Active crawling peg | Yes | Rate adjusted in small pre-announced steps | Limited, more predictable |
| Fixed parity with crawling bands | Yes | Fixed parity plus a pre-announced widening band | Limited, with a built-in exit path |
| Managed float | Yes | Intervention without an explicit target | Substantial |
| Independently floating | Yes | Market-determined | Full |

A **currency board system** is distinguished from ordinary dollarization by an explicit *legislative* commitment to exchange domestic currency for a specified foreign currency at a fixed rate, combined with legal restrictions on the issuing authority. A currency board can still earn seigniorage (interest income on its foreign-currency reserve assets while paying close to nothing on its own liabilities), which plain dollarization cannot. Neither a currency board nor a dollarized economy can act as a full lender of last resort to its own banking system, since neither controls the ultimate supply of the currency in circulation.

**Passive versus active crawling pegs**: a passive crawl adjusts the rate frequently (for example, weekly) to track realized inflation after the fact; an active crawl pre-announces small steps intended to manage inflation *expectations* going forward, rather than simply following inflation that has already happened.

**Managed float versus independently floating**: under a managed float, a central bank intervenes based on internal or external targets without an explicit rate target, which can invite other countries to respond in kind and potentially reduce overall stability; under independent floating, the exchange rate is fully market-determined, and the central bank retains complete monetary-policy latitude and lender-of-last-resort capacity.

### Exchange rates and the trade balance

A country's trade balance is linked to its domestic saving-investment gap and its fiscal position through the identity:

**X − M = (S − I) + (T − G)**

where X = exports, M = imports, S = private saving, I = investment spending, T = taxes net of transfers, and G = government expenditure. A trade deficit (X − M < 0) must be exactly offset by a capital account surplus — in other words, a country running a trade deficit is, by construction, a net importer of capital.

### Worked example 13 — Classifying a currency board

**Problem.** A country legislates that its central monetary authority must exchange domestic currency for US dollars at a fixed rate of 4.20, and further legislates that the authority may not issue new domestic currency without matching foreign-reserve backing. Classify this regime.

**Method.** Apply the currency-board definition: legislative commitment plus legal issuance restrictions.

**Step-by-step solution.** The explicit legislative commitment to a fixed exchange rate, combined with a legal restriction on the issuing authority to ensure that commitment is honored, matches the currency board definition exactly.

**Final answer.** Currency board system.

**Interpretation.** The legislative backing (not merely a policy commitment) is what distinguishes a currency board from an ordinary fixed parity.

**Exam insight.** "Legislative" or "legally restricted issuance" language in a scenario is the specific signal for a currency board, not just any fixed-rate description.

### Worked example 14 — Dollarization versus monetary union

**Problem.** Country X adopts the US dollar as its sole legal tender. Country Y joins a group of neighboring countries that jointly create and share a single new currency. Classify each.

**Method.** Apply the dollarization-versus-monetary-union distinction.

**Step-by-step solution.** Country X has adopted an existing foreign currency wholesale — dollarization. Country Y has joined with others to share a jointly created currency — monetary union.

**Final answer.** Country X: dollarization. Country Y: monetary union.

**Interpretation.** Both give up an independent currency entirely, but dollarization borrows another country's existing currency and credibility, while a monetary union creates a new shared currency whose credibility depends on the union's own collective institutions.

**Exam insight.** Neither dollarization nor a monetary union can, by itself, guarantee the adopting country's own creditworthiness — only currency credibility is inherited or shared, not fiscal soundness.

### Worked example 15 — Passive versus active crawling peg

**Problem.** Central Bank A adjusts its currency's parity every week to match the inflation differential realized over the prior month. Central Bank B pre-announces a fixed 0.5%-per-month adjustment path for the next year, intended to shape inflation expectations. Classify each.

**Method.** Apply the passive-versus-active crawl distinction.

**Step-by-step solution.** Central Bank A adjusts reactively, based on already-realized inflation — a passive crawling peg. Central Bank B pre-announces a forward-looking path intended to influence expectations — an active crawling peg.

**Final answer.** Central Bank A: passive crawling peg. Central Bank B: active crawling peg.

**Interpretation.** The key distinction is backward-looking, reactive adjustment (passive) versus forward-looking, pre-announced adjustment intended to shape expectations (active).

**Exam insight.** Look for whether the adjustment schedule is announced in advance — pre-announcement is the active-crawl signal.

### Worked example 16 — Managed float versus independent float

**Problem.** Central Bank C intervenes occasionally to smooth volatility without any explicit rate target, while Central Bank D never intervenes and lets the market fully determine its currency's value. Classify each, and state which retains greater monetary-policy independence.

**Method.** Apply the managed-float-versus-independent-float distinction.

**Step-by-step solution.** Central Bank C's occasional, target-free intervention is a managed float. Central Bank D's complete non-intervention is independent floating. Independent floating preserves full monetary-policy independence and full lender-of-last-resort capacity; a managed float preserves substantial, but not complete, independence.

**Final answer.** Central Bank C: managed float. Central Bank D: independently floating. Independent floating retains greater policy independence.

**Interpretation.** Even a modest, target-free intervention pattern is enough to distinguish a managed float from a pure independent float.

**Exam insight.** "No explicit target" still describes a managed float if any intervention occurs at all; only zero intervention qualifies as independently floating.

### Worked example 17 — Applying the impossible trinity

**Problem.** A country wants to maintain a credibly fixed exchange rate and full freedom of capital movement. What must it give up, according to the impossible-trinity framework?

**Method.** Apply the trilemma: a country can have at most two of (1) fixed exchange rate, (2) free capital flow, and (3) independent monetary policy.

**Step-by-step solution.** Having chosen both a fixed exchange rate and free capital flow, the country cannot simultaneously retain independent monetary policy.

**Final answer.** It must give up independent monetary policy.

**Interpretation.** This is exactly the trade-off a currency board or dollarized economy accepts.

**Exam insight.** Given any two of the three trilemma properties in a scenario, the third is always the one sacrificed — this is a fast way to answer trilemma-style questions.

### Worked example 18 — Applying the trade balance identity

**Problem.** A country's private saving is 20% of GDP, investment spending is 24% of GDP, taxes net of transfers are 18% of GDP, and government expenditure is 21% of GDP. Calculate the trade balance as a percent of GDP.

**Method.** Apply X − M = (S − I) + (T − G).

**Step-by-step solution.** (S − I) = 20% − 24% = −4%. (T − G) = 18% − 21% = −3%. X − M = −4% + (−3%) = −7%.

**Final answer.** The country runs a trade deficit of 7% of GDP.

**Interpretation.** This deficit must be exactly financed by a capital account surplus of the same magnitude — the country is a net capital importer.

**Exam insight.** A negative private saving-investment gap and a negative fiscal balance (government deficit) both push the trade balance in the same, deficit-widening direction.

### Worked example 19 — Regime choice: band width trade-off

**Problem.** A country currently under a fixed parity with a narrow band wants slightly more room to respond to short-term shocks without abandoning a rate target entirely. Which regime type offers this, and what is the trade-off?

**Method.** Compare fixed parity and target zone band widths.

**Step-by-step solution.** A target zone offers a wider discretionary band (up to about 2%, versus about 1% for a fixed parity) while still anchoring the rate to a target — the trade-off is a modest loss of exchange-rate predictability in exchange for slightly more monetary-policy room.

**Final answer.** A target zone.

**Interpretation.** Every step from a currency board toward independent floating trades away exchange-rate certainty in exchange for policy flexibility.

**Exam insight.** Rank the regimes along a single spectrum from "most rate-certain, least policy-flexible" to "least rate-certain, most policy-flexible" to answer trade-off questions quickly.

> **Knowledge check 2.** Name the three properties of the impossible trinity, of which a country may choose at most two. **Answer:** A credibly fixed exchange rate, full capital-flow convertibility, and fully independent monetary policy.

## 3. Capital restrictions

**Capital restrictions** are government-imposed limits on cross-border capital flows, distinct from the trade restrictions on goods and services covered in the prior module. Governments impose them for several possible objectives: avoiding capital flight during a macroeconomic crisis; protecting domestic firms' competitiveness by limiting inflows that might otherwise bid up the domestic currency; supporting fiscal discipline and revenue collection (historically, keeping capital at home to tax wealth, generate interest income, and lower government borrowing costs); protecting strategic or national-security-sensitive industries from foreign ownership; supporting a fixed exchange rate target (capital restrictions and a fixed-rate target are complementary tools, since restricting capital flow is one way to retain some independent monetary policy despite a fixed rate — directly related to the impossible-trinity trade-off); and enabling domestic credit allocation without triggering capital flight.

Governments implement capital restrictions through several mechanisms: **taxes** (special levies on investment returns), **price controls** (such as mandatory reserve requirements held at zero interest), **quantity controls** (ceilings or authorization requirements on foreign borrowing), and **administrative controls** (requiring government-agency approval for specified transactions).

Evidence on effectiveness is mixed: restrictions on capital *inflows* generally need to be comprehensive and forcefully implemented to work; restrictions on capital *outflows* imposed during a crisis have produced mixed results across countries — providing only temporary relief in some cases, but more durable shielding in others. A historical case in point: a Southeast Asian country facing severe capital flight during a regional currency crisis imposed comprehensive outflow restrictions (prohibiting transfers between resident and non-resident accounts, eliminating offshore credit facilities, and fixing its currency), later replaced the strictest controls with an exit-tax system, and fully removed the controls within about three years. The restrictions allowed the country to lower domestic interest rates and restructure its banking and corporate sectors during the crisis, but the episode also carried a longer-run cost: the affected country was removed from a major market index, making it harder to attract capital inflows again afterward.

### Original table — capital restriction mechanisms and objectives

| Mechanism | How it works | Typical objective it serves |
|---|---|---|
| Taxes | Special levies on cross-border investment returns | Fiscal discipline / revenue; discouraging outflows |
| Price controls | Zero-interest mandatory reserve requirements | Discouraging short-term speculative inflows |
| Quantity controls | Ceilings or authorization requirements on foreign borrowing | Avoiding capital flight; supporting a fixed-rate target |
| Administrative controls | Agency approval required for specified transactions | Protecting strategic/national-security industries |

### Worked example 20 — Identifying a capital restriction's objective

**Problem.** A government imposes a special tax on foreign investors' interest income from domestic bonds, explicitly stating the goal of keeping more investment capital and its associated tax revenue inside the country. Which objective does this best illustrate?

**Method.** Match the stated goal to the named objectives for capital restrictions.

**Step-by-step solution.** Keeping capital domestic specifically to raise revenue and support fiscal discipline matches the fiscal-discipline/revenue-raising objective.

**Final answer.** Fiscal discipline and revenue raising.

**Interpretation.** This is the same underlying motivation historically traced to wartime-era capital restrictions.

**Exam insight.** A tax-based mechanism aimed explicitly at revenue is the clearest signal of the fiscal-discipline objective, as opposed to strategic or crisis-driven objectives.

### Worked example 21 — Classifying a capital restriction mechanism

**Problem.** A government requires that any company seeking to borrow abroad first obtain explicit authorization from a government finance ministry. Classify this mechanism.

**Method.** Match the described control to the four named mechanism categories.

**Step-by-step solution.** A ceiling or authorization requirement specifically on foreign borrowing volume is a quantity control.

**Final answer.** Quantity control.

**Interpretation.** This differs from an administrative control, which requires agency approval for a broader range of transaction types, not specifically borrowing volume.

**Exam insight.** Distinguish quantity controls (volume-based limits) from administrative controls (approval-based gatekeeping) by asking whether the restriction targets an amount or a transaction type.

### Worked example 22 — Reasoning through a capital-flight scenario

**Problem.** A country's currency comes under severe selling pressure during a regional financial crisis, threatening its fixed exchange rate target. Its government responds by temporarily restricting the ability of both residents and non-residents to transfer funds out of the country, later replacing the strictest controls with an exit-tax system, and fully removing all controls once market conditions stabilize. What was this episode's short-run policy benefit, and what longer-run cost did it carry?

**Method.** Apply the module's discussion of capital-outflow-restriction effectiveness and its trade-offs.

**Step-by-step solution.** The short-run benefit was breathing room to lower domestic interest rates and restructure the banking and corporate sectors without a currency collapse forcing an even more disruptive adjustment; the longer-run cost was reputational and access-related — being seen as an unreliable destination for capital, which can make attracting new capital inflows harder even after the restrictions are lifted.

**Final answer.** Short-run benefit: policy room to stabilize and restructure without abandoning the currency target. Longer-run cost: reduced investor confidence and harder-to-attract capital inflows afterward.

**Interpretation.** This mirrors the module's own conclusion that capital-outflow restrictions during a crisis can provide real, if temporary, relief, but are not a costless tool.

**Exam insight.** A capital-restrictions scenario question often has two parts — an immediate stabilization benefit and a longer-run credibility cost — expect both to be tested together.

> **Knowledge check 3.** Name the four mechanisms governments use to implement capital restrictions. **Answer:** Taxes, price controls, quantity controls, and administrative controls.

## Glossary

| Term | Definition |
|---|---|
| Price currency (quote currency) | Currency A in the A/B quote convention; the numerator; the currency whose quantity varies. |
| Base currency | Currency B in the A/B quote convention; the denominator; always fixed at one unit. |
| Direct quote | A quote with the observer's own currency as the price currency. |
| Indirect quote | A quote with the observer's own currency as the base currency; the reciprocal of the direct quote. |
| Nominal exchange rate | The quoted, traded market exchange rate. |
| Real exchange rate | An analyst-constructed, purchasing-power-adjusted index; never itself quoted or traded. |
| Sell side | FX market participants (typically large banks) who make markets by quoting two-way prices. |
| Buy side | FX market participants who trade with the sell side to meet an investment, hedging, or settlement need. |
| Impossible trinity (trilemma) | The proposition that a country can have at most two of: a fixed exchange rate, free capital flow, and independent monetary policy. |
| Dollarization | Adopting another country's currency as sole legal tender. |
| Monetary union | Multiple countries sharing one jointly created currency. |
| Currency board | A legislated commitment to a fixed exchange rate with legal restrictions on the issuing authority. |
| Fixed parity | A discretionary, narrow-band fixed exchange rate target without legislative backing. |
| Target zone | A discretionary, wider-band fixed exchange rate target. |
| Crawling peg | A regime where the parity is adjusted over time, either passively (reactive, inflation-tracking) or actively (pre-announced). |
| Managed float | A regime with occasional intervention but no explicit rate target. |
| Independently floating | A regime with a fully market-determined rate and no intervention. |
| Capital restriction | A government-imposed limit on cross-border capital flows. |

## Interactive tools

One tool accompanies this lesson and is available directly below it on the lesson page:

- **FX Quote and Regime Explorer** — enter a starting and ending quote to compute the base currency's percentage appreciation/depreciation and the price currency's percentage change via the reciprocal quote (demonstrating the asymmetry directly), and walk through a short set of regime-defining questions to classify an exchange rate regime among the nine named types.

## Common mistakes and exam traps

- Assuming the currency written first in a quote is the base currency — in the A/B convention used throughout this lesson, the currency written **first** is the **price** currency; the currency written **second** is the **base** currency.
- Assuming a market-convention currency-pair *code*'s naming order (e.g., "GBPJPY") tells you the actual price/base ratio order — it does not; the currency hierarchy determines the base currency, not code order.
- Assuming the percentage depreciation of one currency in a pair equals the percentage appreciation of the other — they are never exactly equal in magnitude except in the limit of an infinitesimally small move.
- Treating the real exchange rate as something that is quoted or traded — it is only an analyst-constructed index.
- Confusing a currency board with plain dollarization — a currency board retains its own currency notes and can earn seigniorage; dollarization does not.
- Assuming any fixed-rate regime grants full monetary-policy independence — the impossible trinity guarantees the opposite.
- Confusing a passive crawling peg (reactive, inflation-tracking) with an active crawling peg (pre-announced, expectations-shaping).
- Treating capital restrictions as always failing or always succeeding — the module's own evidence is explicitly mixed, particularly for outflow restrictions during a crisis.

## Memory aids

- **A/B: first is price, second is base — base is always the "one."**
- **Code order and ratio order are opposite — trust the hierarchy, not the code.**
- **Appreciation and depreciation percentages are never twins.**
- **Real rates are indexes, not tradable prices.**
- **CBS earns seigniorage; dollarization does not.**
- **Fixed rate + free capital flow + independent policy — pick at most two.**
- **Passive crawl looks backward; active crawl looks forward.**

## Exam tips

- For any quotation question, write out which currency is A (price) and which is B (base) before doing any arithmetic.
- For appreciation/depreciation questions, compute both directions independently rather than assuming symmetry — especially when the percentage move is large.
- For regime-classification questions, check for the specific signal words that distinguish neighboring regimes: "legislative" (currency board), "jointly created currency" (monetary union), "pre-announced" (active crawl), "no explicit target" (managed float).
- For trilemma questions, identify which two properties are given and conclude the third is sacrificed.
- For trade-balance questions, compute the saving-investment gap and the fiscal gap separately before summing them.
- For capital-restrictions questions, expect both an objective (why) and a mechanism (how) to be tested, sometimes in the same scenario.

## One-page revision sheet

| Item | Rule or interpretation |
|---|---|
| A/B convention | A (first) = price currency; B (second, denominator) = base currency, fixed at 1 |
| Reciprocal quote | B/A = 1 ÷ (A/B); relabel currencies when inverting |
| Base currency % change | (new quote ÷ old quote) − 1 |
| Price currency % change | Invert both quotes first, then apply the same formula — never just negate |
| Code vs. ratio order | Market-code naming order is opposite the actual price/base ratio order; hierarchy decides the base currency |
| Real exchange rate | Nominal rate × (foreign price level ÷ domestic price level); an index, never traded |
| Real rate % change | ≈ %Δ nominal rate + %Δ foreign prices − %Δ domestic prices |
| Impossible trinity | Fixed rate, free capital flow, independent monetary policy — pick at most two |
| No-legal-tender regimes | Dollarization (borrowed currency) vs. monetary union (jointly created currency) |
| Own-currency regimes, most to least rate-certain | Currency board → fixed parity → target zone → crawling peg/band → managed float → independent float |
| Trade balance identity | X − M = (S − I) + (T − G) |
| Capital restriction mechanisms | Taxes, price controls, quantity controls, administrative controls |

## 30-second summary

Every FX quote follows an A/B convention where the first-written currency is the price currency and the second is the base currency, always fixed at one; direct and indirect quotes are reciprocals, and inverting a quote requires full recomputation, since a currency's appreciation and its counterpart's depreciation are never exactly equal in percentage terms. Nominal exchange rates are quoted and traded; real exchange rates are purchasing-power-adjusted analyst indexes that are never themselves traded. Exchange rate regimes range along a spectrum from no independent currency (dollarization, monetary union) through increasingly flexible fixed-rate arrangements (currency board, fixed parity, target zone, crawling peg and band) to managed and independent floating, with the impossible trinity guaranteeing that no regime can combine a fixed rate, free capital flow, and independent monetary policy all at once. A country's trade balance links directly to its saving-investment gap and fiscal balance, and governments impose capital restrictions — through taxes, price controls, quantity controls, and administrative controls — for objectives ranging from crisis-driven capital-flight prevention to strategic-industry protection, with genuinely mixed evidence on how well outflow restrictions work.

## Continue studying

- [Open this chapter's formulas](/formulas?lesson=economics-07-capital-flows-and-the-fx-market)
- [Review 55 flashcards](/flashcards?lesson=economics-07-capital-flows-and-the-fx-market)
- [Practice all 55 questions](/practice?lesson=economics-07-capital-flows-and-the-fx-market)
- [Start Chapter Exam](/practice?lesson=economics-07-capital-flows-and-the-fx-market&mode=chapter-exam)
- Prerequisite skill: [International Trade](/lessons/economics-06-international-trade)

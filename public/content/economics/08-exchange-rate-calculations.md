# Exchange Rate Calculations

## Chapter overview

This chapter builds directly on the quotation mechanics from the previous chapter to cover two calculation-heavy skills: deriving a currency cross-rate from two other quotes, and calculating a forward exchange rate — and interpreting whether a currency is trading at a forward premium or discount — from the no-arbitrage relationship linking spot rates, forward rates, and interest rates.

## Why it matters

Cross-rates and forward rates are not quoted for every currency pair a portfolio might need, and forward pricing is not arbitrary — it is pinned down by interest-rate differentials. An analyst who can derive a missing cross-rate, price a forward correctly, and recognize when a quoted forward rate is inconsistent with the no-arbitrage relationship can catch mispricing, hedge currency exposure correctly, and avoid a costly sign error on a receivable or payable denominated in a foreign currency.

## Official 2027 learning outcomes

The curriculum metadata above contains the authorized outcomes. In practical terms, be ready to:

- calculate and interpret currency cross-rates; and
- explain the arbitrage relationship between spot and forward exchange rates and interest rates, calculate a forward rate using points or in percentage terms, and interpret a forward discount or premium.

## Prerequisites

This chapter continues directly from [Capital Flows and the FX Market](/lessons/economics-07-capital-flows-and-the-fx-market) and uses the **same A/B quotation convention** established there without restating it from scratch: in a quote "A/B," currency A (first, numerator) is the **price currency** and currency B (second, denominator) is the **base currency**, always fixed at one unit. If any of that is unfamiliar, review the prior chapter's notation section first.

This chapter adds one new labeling layer on top of that same convention: in the arbitrage/forward-rate formulas below, the generic letters are replaced with **f** (foreign — plays the role of the price currency, numerator) and **d** (domestic — plays the role of the base currency, denominator). This is not a new rule; it is the identical price/base structure, just relabeled for the arbitrage argument. A rate written S(f/d) or F(f/d) is still read exactly like any other A/B quote: units of the foreign (price) currency per one unit of the domestic (base) currency.

## 1. Cross-rate calculations

A **cross-rate** is an exchange rate between two currencies derived from their exchange rates against a common third currency, when the direct quote between them is not given. There are two mechanical cases.

**Case 1 — direct multiplication.** If the common currency sits in the denominator (base) position of one quote and the numerator (price) position of the other, the common currency cancels algebraically when the quotes are multiplied:

```text
   NOK/USD   ×   USD/EUR   =   NOK/EUR
      │             │              │
      └── common currency (USD) cancels ──┘
```

**Case 2 — inversion required.** If the common currency sits in the *same* position (both denominators, or both numerators) in the two given quotes, one quote must be inverted first before the common currency will cancel:

```text
   (NOK/USD)⁻¹  ×  CHF/USD  =  USD/NOK  ×  CHF/USD  =  CHF/NOK
        │                          │             │
   inverted so USD becomes    common currency (USD)
   the numerator               now cancels
```

The general rule: given two exchange rates involving three currencies, write both quotes so the shared currency appears once in a numerator and once in a denominator; invert whichever quote is needed to make that true, then multiply and cancel.

**Triangular arbitrage.** A cross-rate quoted directly in the market must be consistent with the cross-rate implied by its two component quotes; if it is not, a riskless profit is available by buying the currency where it is cheap and selling where it is dear — a strategy called triangular arbitrage because it involves three currencies. Such mispricings are rare in practice because they are constantly monitored and corrected, and for the purposes of this chapter, quoted cross-rates can generally be assumed consistent with their component quotes unless a problem specifically describes a misquote.

### Worked example 1 — Cross-rate via direct multiplication

**Problem.** A dealer quotes NOK/USD = 10.5000 and USD/EUR = 1.0800. Calculate the NOK/EUR cross-rate.

**Method.** The common currency (USD) is the base currency in the first quote and the price currency in the second, so it cancels under direct multiplication.

**Step-by-step solution.** NOK/EUR = NOK/USD × USD/EUR = 10.5000 × 1.0800 = 11.3400.

**Final answer.** NOK/EUR = 11.3400.

**Interpretation.** One euro costs 11.3400 Norwegian kroner.

**Exam insight.** Check that the currency being canceled appears once as a denominator and once as a numerator before multiplying — if it appears twice in the same position, direct multiplication will not work.

### Worked example 2 — Cross-rate requiring inversion

**Problem.** A dealer quotes NOK/USD = 10.5000 and CHF/USD = 0.9100. Calculate the CHF/NOK cross-rate.

**Method.** USD is the base currency (denominator) in *both* quotes, so one quote must be inverted before multiplying.

**Step-by-step solution.** Invert the first quote: USD/NOK = 1 ÷ 10.5000 = 0.095238. Then CHF/NOK = USD/NOK × CHF/USD = 0.095238 × 0.9100 = 0.0867.

**Final answer.** CHF/NOK = 0.0867.

**Interpretation.** One Norwegian krone costs 0.0867 Swiss francs.

**Exam insight.** When both given quotes share the same currency in the same position, inversion is unavoidable — do not attempt to multiply them directly.

### Worked example 3 — Identifying a triangular arbitrage opportunity

**Problem.** Using the correct CHF/NOK cross-rate from worked example 2 (0.086667, unrounded), a different dealer quotes CHF/NOK directly at 0.0870. Is there an arbitrage opportunity, and if so, how large is the riskless profit per NOK1?

**Method.** Compare the directly quoted cross-rate to the cross-rate implied by the component quotes.

**Step-by-step solution.** The implied cross-rate is 0.086667; the directly quoted rate is 0.0870, which is higher. An arbitrageur can buy NOK using CHF via the cheaper implied route and simultaneously sell NOK for CHF at the richer direct quote, earning the difference: 0.0870 − 0.086667 = CHF0.000333 per NOK1.

**Final answer.** Yes, an arbitrage opportunity exists, worth CHF0.000333 per NOK1 (before transaction costs).

**Interpretation.** In practice this gap would be closed almost instantly by market participants continuously monitoring cross-rate consistency; the module treats such mispricings as a teaching device rather than a common real-world occurrence.

**Exam insight.** To size a triangular arbitrage profit, always compute the implied cross-rate from the component quotes first, then compare it to the directly quoted rate — the difference (correctly signed) is the profit per unit of the base currency.

### Worked example 4 — Choosing direct multiplication versus inversion

**Problem.** A dealer has SEK/GBP = 13.2000 and SEK/CHF = 11.8000. Determine whether direct multiplication or inversion is needed to find CHF/GBP, and calculate it.

**Method.** Identify where the common currency (SEK) sits in each quote.

**Step-by-step solution.** SEK is the price currency (numerator) in both quotes, so one must be inverted. Invert the second quote: CHF/SEK = 1 ÷ 11.8000 = 0.084746. Then CHF/GBP = CHF/SEK × SEK/GBP = 0.084746 × 13.2000 = 1.1186.

**Final answer.** CHF/GBP = 1.1186 (inversion was required).

**Interpretation.** The pattern-recognition step — locating the shared currency's position in each quote — always comes before any arithmetic.

**Exam insight.** A shared currency appearing as the numerator in both quotes requires exactly the same inversion treatment as a shared currency appearing as the denominator in both quotes; only one of the two quotes needs to be inverted, not both.

### Worked example 5 — Deriving multiple cross-rates from a rate table

**Problem.** A dealer's morning sheet shows: NOK/USD = 10.5000, USD/EUR = 1.0800, USD/GBP = 1.2700. Calculate the NOK/EUR and NOK/GBP cross-rates.

**Method.** Apply direct multiplication to each pair in turn (USD is the base currency in the first quote and the price currency in the other two).

**Step-by-step solution.** NOK/EUR = 10.5000 × 1.0800 = 11.3400. NOK/GBP = 10.5000 × 1.2700 = 13.3350.

**Final answer.** NOK/EUR = 11.3400; NOK/GBP = 13.3350.

**Interpretation.** A single well-organized rate table lets a desk derive every cross-rate among the listed currencies without needing a direct quote for each pair.

**Exam insight.** Work through a rate table systematically, one target cross-rate at a time, rather than trying to hold multiple conversions in your head at once.

### Worked example 6 — Expected currency movement from a rate-forecast table

**Problem.** A research desk publishes today's spot and its one-year expected rate: NOK/USD spot = 10.5000, expected = 10.3600; USD/EUR spot = 1.0800, expected = 1.0850. Is the euro expected to appreciate or depreciate against the Norwegian krone over the year, and by roughly how much in cross-rate terms?

**Method.** Compute today's and the expected NOK/EUR cross-rate, then compare.

**Step-by-step solution.** Today: NOK/EUR = 10.5000 × 1.0800 = 11.3400. Expected: NOK/EUR = 10.3600 × 1.0850 = 11.2406. The expected cross-rate is lower, meaning the euro (base currency in NOK/EUR) is expected to buy fewer kroner.

**Final answer.** The euro is expected to depreciate against the krone, from 11.3400 to approximately 11.2406 NOK per EUR.

**Interpretation.** Even though the euro is expected to strengthen against the US dollar (USD/EUR spot to expected rises), it can still be expected to weaken against a third currency (NOK) once both underlying legs are combined — always recompute the cross-rate rather than reasoning from one leg alone.

**Exam insight.** A currency's expected direction against one counterpart does not by itself tell you its expected direction against a third currency; always work through the full cross-rate.

### Worked example 7 — Cross-rate scaling for a JPY-style pair

**Problem.** A dealer quotes JPY/USD = 148.20 (2 decimal places, per market convention for JPY pairs) and USD/EUR = 1.0800 (4 decimal places). Calculate JPY/EUR.

**Method.** Apply direct multiplication; the differing decimal-place conventions of the two quotes do not affect the arithmetic.

**Step-by-step solution.** JPY/EUR = JPY/USD × USD/EUR = 148.20 × 1.0800 = 160.06 (rounded to 2 decimal places, consistent with JPY-pair convention).

**Final answer.** JPY/EUR ≈ 160.06.

**Interpretation.** The result is expressed to the decimal convention of the JPY-containing pair (2 decimal places), not the 4-decimal convention of the other input quote.

**Exam insight.** Decimal-place conventions differ by currency pair (JPY pairs typically use 2 decimal places; most other major pairs use 4) — round your final cross-rate to the convention appropriate to the resulting pair, not to whichever input happened to have more decimal places.

### Worked example 8 — Solving for an unknown component quote

**Problem.** A dealer's cross-rate sheet shows CHF/NOK = 0.0867 and NOK/USD = 10.5000. Solve for the missing CHF/USD quote.

**Method.** Rearrange the direct-multiplication relationship to isolate the unknown quote.

**Step-by-step solution.** CHF/USD = CHF/NOK × NOK/USD = 0.0867 × 10.5000 = 0.9104.

**Final answer.** CHF/USD ≈ 0.9104 (consistent with worked example 2's inputs, subject to rounding).

**Interpretation.** Any one of the three quotes in a triangular relationship can be solved for algebraically if the other two are known.

**Exam insight.** Write the cross-rate relationship symbolically first (identify which two quotes multiply to the third), then substitute — this avoids guessing which direction to multiply or divide.

### Worked example 9 — Ranking currencies by expected relative strength

**Problem.** Based on worked example 6's data (NOK/USD moving from 10.5000 to 10.3600; USD/EUR moving from 1.0800 to 1.0850), rank the US dollar, the Norwegian krone, and the euro from strongest to weakest expected performer over the year.

**Method.** Compute each currency's expected percentage change against a common reference and compare.

**Step-by-step solution.** NOK/USD falling from 10.5000 to 10.3600 means the US dollar (base currency) is expected to depreciate against the krone — the krone is strengthening against the dollar. USD/EUR rising from 1.0800 to 1.0850 means the euro (base currency) is expected to appreciate against the dollar. Both the krone and the euro are expected to strengthen against the dollar, and worked example 6 showed the euro is expected to weaken against the krone specifically — so the krone is the strongest, the euro is in the middle, and the US dollar is the weakest.

**Final answer.** Strongest to weakest: Norwegian krone, euro, US dollar.

**Interpretation.** Ranking three or more currencies requires comparing every pair, not just each currency against a single reference.

**Exam insight.** Build the ranking from pairwise comparisons systematically; do not assume transitivity without checking it, even though it will hold arithmetically once every rate is correctly computed.

### Worked example 10 — A second triangular arbitrage calculation

**Problem.** Dealer A's implied SGD/AUD cross-rate (from SGD/USD = 1.3400 and AUD/USD = 0.6600, requiring inversion) is compared with Dealer B's direct quote of SGD/AUD = 0.4850. Is there an arbitrage opportunity?

**Method.** Compute the implied cross-rate and compare to the direct quote.

**Step-by-step solution.** SGD/USD (1.3400) and AUD/USD (0.6600) both have USD as the base currency (denominator), so one quote must be inverted before multiplying. Invert the second quote: USD/AUD = 1 ÷ 0.6600 = 1.515152. Then implied SGD/AUD = SGD/USD × USD/AUD = 1.3400 × 1.515152 = 2.0303. Dealer B's direct quote (0.4850) looks completely different from this implied value.

**Final answer.** Implied SGD/AUD ≈ 2.0303, versus Dealer B's quoted 0.4850 — these are close to reciprocals of each other (1 ÷ 2.0303 = 0.4925, near 0.4850 but not exact), which is the actual source of the apparent mismatch: always confirm which currency is the base currency in each dealer's quote before concluding a mispricing exists, since a quote in the opposite direction only *looks* like an arbitrage opportunity.

**Interpretation.** A large apparent gap between two "cross-rate" figures is often a quotation-direction mismatch, not a genuine arbitrage opportunity — always verify both dealers are quoting the same currency as the base currency before comparing.

**Exam insight.** Before declaring a triangular arbitrage opportunity, confirm both quotes describe the pair in the same A/B direction; comparing a rate to its own reciprocal by mistake is a common trap.

> **Knowledge check 1.** When two given quotes share a common currency in the same position (both numerators or both denominators), what must be done before multiplying? **Answer:** Invert one of the two quotes so the shared currency appears once in a numerator and once in a denominator, then multiply.

## 2. Forward rate calculations

A **forward exchange rate** is a rate agreed today for a currency exchange that settles on a specified future date. Forward rates are quoted either as an outright rate or as **forward points** (also called swap points, since an FX swap combines a spot and a forward transaction) — the difference between the forward rate and the spot rate, scaled so the points relate to the last decimal place of the spot quote: multiply (Forward − Spot) by 10,000 for most pairs (quoted to 4 decimal places), or by 100 for JPY pairs (quoted to 2 decimal places).

**Premium and discount.** When the forward rate is higher than the spot rate, the points are positive and the **base currency** is said to be trading at a **forward premium**. When the forward rate is lower than the spot rate, the points are negative and the base currency is trading at a **forward discount**. If the base currency is at a forward premium, the price currency is necessarily at a forward discount, and vice versa.

**Converting between points, rate, and percentage terms:**

- Forward rate from points: F = S + (points ÷ 10,000) [or ÷ 100 for JPY pairs]
- Forward premium/discount in percentage terms: (F ÷ S) − 1
- Converting a percentage back to a rate: S × (1 + % premium/discount) = F

### Original table — sample forward points by maturity (based on the source's Exhibit 1 structure)

| Maturity | Illustrative forward points |
|---|---|
| Spot | — |
| One week | +2.1 |
| One month | +9.8 |
| Three months | +28.4 |
| Six months | +55.6 |
| Twelve months | +108.2 |

Points typically grow with maturity, but — as worked examples 18 and 19 below show — not in exact linear proportion, because of the day-count denominator adjustment.

### The arbitrage relationship (no-arbitrage / "covered" forward pricing)

The forward rate is not set arbitrarily — it is pinned down by a no-arbitrage relationship (commonly called covered interest rate parity by market participants, though this lesson uses the same "arbitrage relationship" language as the underlying source) linking the spot rate to the two currencies' interest rates:

**(1 + r_d) = S(f/d) × (1 + r_f) × [1 ÷ F(f/d)]**

Rearranged to solve directly for the forward rate:

**F(f/d) = S(f/d) × [(1 + r_f) ÷ (1 + r_d)]**

where r_f is the foreign (price-currency-side) interest rate and r_d is the domestic (base-currency-side) interest rate, both measured over the same period as the forward's maturity. Equivalently, the forward rate as a ratio of the spot rate is F(f/d) ÷ S(f/d) = (1 + r_f) ÷ (1 + r_d).

**Which currency ends up at a premium?** The currency with the *higher* interest rate always trades at a forward *discount*, and the currency with the *lower* interest rate always trades at a forward *premium* — this holds regardless of which currency is quoted as the price currency or the base currency.

### Original diagram — the arbitrage (no-arbitrage) cycle

```text
   Borrow 1 unit of domestic     Convert spot to      Invest in the foreign
   currency at r_d          ──►  foreign currency ──►  currency at r_f
                                  at S(f/d)

                                                              │
                                                              ▼
   Compare proceeds to a      ◄──  Convert proceeds     Hedge the foreign-
   domestic-only investment        back to domestic     currency proceeds
   of (1 + r_d)                    currency at F(f/d)    forward at F(f/d)
```

If the quoted forward rate makes the hedged foreign-currency route pay more (or less) than simply investing domestically at (1 + r_d), a riskless arbitrage profit is available — which is exactly what the no-arbitrage relationship above rules out at the "correct" forward rate.

### Worked example 11 — Forward rate from points

**Problem.** The spot rate is DKK/USD = 6.8200. The 90-day forward points are +12.4. Calculate the 90-day forward rate.

**Method.** Apply F = S + (points ÷ 10,000).

**Step-by-step solution.** F = 6.8200 + (12.4 ÷ 10,000) = 6.8200 + 0.00124 = 6.82124.

**Final answer.** 90-day forward rate ≈ 6.8212.

**Interpretation.** The positive points mean the base currency (USD) is trading at a forward premium.

**Exam insight.** Always confirm the scaling factor (10,000 vs. 100) matches the quoted pair's decimal convention before adding the points to the spot rate.

### Worked example 12 — Forward rate from points, JPY-style scaling

**Problem.** The spot rate is JPY/AUD = 96.40. The 6-month forward points are −85. Calculate the 6-month forward rate.

**Method.** Apply F = S + (points ÷ 100), since JPY pairs are quoted to 2 decimal places.

**Step-by-step solution.** F = 96.40 + (−85 ÷ 100) = 96.40 − 0.85 = 95.55.

**Final answer.** 6-month forward rate = 95.55.

**Interpretation.** The negative points mean the base currency (AUD) is trading at a forward discount against the yen.

**Exam insight.** Using the ÷10,000 scaling on a JPY pair by mistake would produce a forward rate almost indistinguishable from the spot rate — a sign that the wrong scaling factor was applied.

### Worked example 13 — Forward premium/discount in percentage terms

**Problem.** Using worked example 11's rates (spot DKK/USD = 6.8200, 90-day forward = 6.82124), express the forward premium in percentage terms.

**Method.** Apply (F ÷ S) − 1.

**Step-by-step solution.** (6.82124 ÷ 6.8200) − 1 = 0.000182, or 0.0182%.

**Final answer.** The base currency (USD) is trading at a 90-day forward premium of approximately 0.0182%.

**Interpretation.** Percentage terms make it easy to compare premiums/discounts of different magnitude across currency pairs quoted at very different price levels.

**Exam insight.** This percentage is for the specific forward horizon (90 days here) — it is not automatically an annualized figure.

### Worked example 14 — Recovering the spot rate from a forward and a percentage premium

**Problem.** A 60-day forward rate is quoted at SEK/GBP = 13.3665, representing a 0.500% premium to the spot rate. Calculate the spot rate.

**Method.** Rearrange S × (1 + % premium) = F to solve for S.

**Step-by-step solution.** S = F ÷ (1 + % premium) = 13.3665 ÷ 1.00500 = 13.3000.

**Final answer.** Spot rate ≈ 13.3000.

**Interpretation.** The same relationship that converts a spot rate and a percentage into a forward rate can be rearranged to recover any one of the three values given the other two.

**Exam insight.** Divide (not subtract) when reversing a percentage premium/discount back to the spot rate — treating it as a simple point subtraction will give the wrong answer.

### Worked example 15 — Solving the core arbitrage relationship for the forward rate

**Problem.** The spot rate is S(f/d) = 1.4200. The domestic 12-month interest rate is 2.50% and the foreign 12-month interest rate is 4.00%. Calculate the no-arbitrage 12-month forward rate.

**Method.** Apply F(f/d) = S(f/d) × [(1 + r_f) ÷ (1 + r_d)].

**Step-by-step solution.** F = 1.4200 × (1.0400 ÷ 1.0250) = 1.4200 × 1.014634 = 1.4408.

**Final answer.** F(f/d) ≈ 1.4408.

**Interpretation.** Since the foreign (price-currency-side) rate exceeds the domestic (base-currency-side) rate, the forward rate is higher than the spot rate — the base currency is at a forward premium, consistent with it having the *lower* interest rate.

**Exam insight.** Always identify which rate belongs in the numerator (foreign/price-currency side) and which in the denominator (domestic/base-currency side) before substituting — swapping them inverts the direction of the premium/discount.

### Worked example 16 — Identifying the discount currency from rates alone, without calculating

**Problem.** Without calculating a forward rate, state which currency in worked example 15's pair (foreign at 4.00%, domestic at 2.50%) is trading at a forward discount.

**Method.** Apply the rule: the currency with the higher interest rate trades at a forward discount.

**Step-by-step solution.** The foreign currency has the higher rate (4.00% versus 2.50%), so the foreign (price) currency is trading at a forward discount; equivalently, the domestic (base) currency is trading at a forward premium.

**Final answer.** The foreign (price) currency is at a forward discount.

**Interpretation.** This qualitative rule lets you sanity-check a computed forward rate's direction before or after doing the arithmetic.

**Exam insight.** This rule holds "regardless of the quoting convention" per the source — memorize it independently of which currency happens to be the numerator in a given problem.

### Worked example 17 — Detecting an arbitrage profit from a misquoted forward

**Problem.** Using worked example 15's inputs (S = 1.4200, r_d = 2.50%, r_f = 4.00%, correct F = 1.4408), a dealer instead quotes a 12-month forward of 1.4250. Is there an arbitrage opportunity, and if so, what is the approximate riskless return advantage per unit of domestic currency?

**Method.** Starting from 1 unit of domestic currency: convert to foreign at spot (S units of foreign currency), invest at r_f, then convert back to domestic at the misquoted forward. This hedged return is S × (1 + r_f) ÷ F(misquoted); compare it to the domestic-only return of (1 + r_d).

**Step-by-step solution.** Hedged return = S × (1 + r_f) ÷ F(misquoted) = 1.4200 × 1.0400 ÷ 1.4250 = 1.4768 ÷ 1.4250 ≈ 1.0364. Domestic-only return = 1.0250. The hedged route returns more, because the misquoted forward (1.4250) is *cheaper* than the correct no-arbitrage forward (1.4408) — a cheaper-than-fair forward makes converting back to domestic currency more favorable.

**Final answer.** Yes — the hedged foreign route returns approximately 3.64% versus 2.50% domestically, an arbitrage advantage of roughly 114 basis points.

**Interpretation.** An investor can borrow domestically at 2.50%, convert to the foreign currency at spot, invest at 4.00%, and lock in the conversion back at the cheap forward rate of 1.4250, capturing the gap as riskless profit. Had the misquoted forward instead been *above* the fair value of 1.4408, this particular hedged route would have returned *less* than the domestic-only return — the profitable arbitrage direction always runs opposite to whichever side of fair value the misquote falls on.

**Exam insight.** To size an arbitrage profit, always compute the actual hedged-route return using the *quoted* (possibly mispriced) forward rate, then compare it to the simple domestic return — do not just compare the two forward rate numbers directly.

### Worked example 18 — Day-count-adjusted forward points, 90 days

**Problem.** The spot rate is S(f/d) = 1.3600. The domestic annualized rate is 3.00% and the foreign annualized rate is 4.50%, both on an actual/360 basis. Calculate the 90-day forward points.

**Method.** Apply F − S = S × [(r_f − r_d) ÷ (1 + r_d·τ)] × τ, where τ = 90/360.

**Step-by-step solution.** τ = 90 ÷ 360 = 0.2500. F − S = 1.3600 × [(0.0450 − 0.0300) ÷ (1 + 0.0300 × 0.2500)] × 0.2500 = 1.3600 × (0.0150 ÷ 1.0075) × 0.2500 ≈ 0.005062. In points: 0.005062 × 10,000 ≈ 50.62.

**Final answer.** 90-day forward points ≈ +50.62.

**Interpretation.** The positive points reflect the foreign (price) currency's higher rate relative to the domestic (base) currency, consistent with the base currency trading at a premium.

**Exam insight.** Do not skip the (1 + r_d·τ) term in the denominator — omitting it gives a close but not exact answer, and exam-level tolerances expect the fully specified formula.

### Worked example 19 — Day-count-adjusted forward points, 180 days (why doubling the horizon doesn't double the points)

**Problem.** Using the same rates as worked example 18 (r_d = 3.00%, r_f = 4.50%, S = 1.3600), calculate the 180-day forward points and compare to twice the 90-day figure.

**Method.** Apply the same day-count-adjusted formula with τ = 180/360.

**Step-by-step solution.** τ = 0.5000. F − S = 1.3600 × (0.0150 ÷ 1.0150) × 0.5000 ≈ 0.010049. In points: ≈ 100.49.

**Final answer.** 180-day forward points ≈ +100.49, which is *not* exactly double the 90-day figure of +50.62 (2 × 50.62 = 101.24).

**Interpretation.** The (1 + r_d·τ) denominator term grows with τ, so points do not scale in exact linear proportion to the number of days, even though the two figures are close.

**Exam insight.** A question asking whether points "double" over double the horizon is testing this exact non-linearity — the correct answer is "approximately, but not exactly."

### Worked example 20 — Effect of a wider rate differential on forward points

**Problem.** Using worked example 18's 90-day setup (S = 1.3600, r_d = 3.00%, τ = 0.25), but with the foreign rate raised to 6.00% instead of 4.50%, recalculate the forward points.

**Method.** Apply the same day-count-adjusted formula with the new, wider differential.

**Step-by-step solution.** F − S = 1.3600 × [(0.0600 − 0.0300) ÷ 1.0075] × 0.2500 ≈ 0.010124. In points: ≈ 101.24.

**Final answer.** 90-day forward points ≈ +101.24, roughly double worked example 18's +50.62 result, since the rate differential itself was doubled (from 1.50 to 3.00 percentage points).

**Interpretation.** Forward points scale approximately in proportion to the size of the interest-rate differential, holding the horizon and the (1 + r_d·τ) denominator term roughly constant.

**Exam insight.** Changing the rate differential and changing the time horizon both affect points, but through different parts of the formula — isolate which one a question is varying before estimating the direction of the answer.

### Worked example 21 — Forward rate as the expected future spot rate

**Problem.** A market participant treats the forward rate as an unbiased predictor of the future spot rate (setting F(f/d) equal to the expected future spot rate). Using worked example 15's rates (r_d = 2.50%, r_f = 4.00%), what percentage change in the spot rate does this imply over the year?

**Method.** Apply %ΔS = (r_f − r_d) ÷ (1 + r_d).

**Step-by-step solution.** %ΔS = (0.0400 − 0.0250) ÷ 1.0250 = 0.0150 ÷ 1.0250 ≈ 1.46%.

**Final answer.** The implied expected appreciation of the base currency is approximately 1.46% over the year.

**Interpretation.** Treating the forward rate as the market's unbiased forecast of the future spot rate is a common interpretation, but the source is explicit that historical evidence shows forward rates are, in practice, poor predictors of actual future spot rates, even if not systematically biased in one direction.

**Exam insight.** "Unbiased" does not mean "accurate" — a forecast can be unbiased (no systematic over- or under-prediction) while still having a very large margin of error on any single occasion.

### Worked example 22 — Solving for an unknown interest rate

**Problem.** The spot rate is S(f/d) = 1.2500 and the 12-month forward rate is F(f/d) = 1.2750. The domestic 12-month rate is 3.00%. Solve for the foreign 12-month interest rate implied by the no-arbitrage relationship.

**Method.** Rearrange F = S × [(1 + r_f) ÷ (1 + r_d)] to isolate r_f.

**Step-by-step solution.** (1 + r_f) = (F ÷ S) × (1 + r_d) = (1.2750 ÷ 1.2500) × 1.0300 = 1.0200 × 1.0300 = 1.0506. r_f = 5.06%.

**Final answer.** The implied foreign 12-month interest rate is approximately 5.06%.

**Interpretation.** Any one of the five inputs to the no-arbitrage relationship (S, F, r_d, r_f, and implicitly the period) can be solved for algebraically if the other four are known.

**Exam insight.** Isolate (1 + r_f) as a single term before subtracting 1 to get the rate itself — subtracting 1 too early is a common arithmetic slip.

### Worked example 23 — Solving for the day-count period

**Problem.** The spot rate is S(f/d) = 1.5000, r_d = 2.00%/year, r_f = 3.50%/year (actual/360 basis), and the observed forward points are +37.5. Approximately how many days does this forward contract cover?

**Method.** Apply F − S = S × [(r_f − r_d) ÷ (1 + r_d·τ)] × τ and solve for τ, then convert to days (τ × 360). Because τ appears in both the numerator and the denominator, solve iteratively or approximately.

**Step-by-step solution.** Points in decimal form: 37.5 ÷ 10,000 = 0.00375. As a first approximation (ignoring the small denominator adjustment), τ ≈ 0.00375 ÷ [1.5000 × (0.0350 − 0.0200)] = 0.00375 ÷ 0.02250 ≈ 0.1667, or about 60 days. Checking: at τ = 0.1667, the denominator (1 + 0.0200 × 0.1667) = 1.00333, which is close enough to 1 that the approximation holds well at this short horizon.

**Final answer.** Approximately 60 days.

**Interpretation.** For short horizons, the (1 + r_d·τ) denominator term stays close to 1, so a first-pass approximation ignoring it is often close enough; for longer horizons (such as the 180-day case in worked example 19), the adjustment matters more and a more careful solution is needed.

**Exam insight.** Recognize when a quick approximation is defensible (short horizons, small rate differentials) versus when the full day-count-adjusted formula must be solved more carefully (longer horizons, larger differentials).

### Worked example 24 — Hedging a foreign-currency receivable

**Problem.** A Norwegian exporter will receive EUR2,000,000 in 90 days. Today's spot rate is NOK/EUR = 11.3400, and the 90-day forward points are +28.5. If the exporter hedges the full receivable using a forward contract, how many Norwegian kroner will it receive in 90 days?

**Method.** Compute the 90-day forward rate, then apply it to the receivable amount.

**Step-by-step solution.** Forward rate = 11.3400 + (28.5 ÷ 10,000) = 11.3400 + 0.00285 = 11.34285. Kroner received = EUR2,000,000 × 11.34285 = NOK22,685,700.

**Final answer.** The exporter locks in NOK22,685,700 for its EUR2,000,000 receivable.

**Interpretation.** Hedging with a forward contract removes the uncertainty of the spot rate prevailing in 90 days; the exporter's krone proceeds are fixed today regardless of how the spot rate actually moves.

**Exam insight.** In a hedging scenario, always identify which currency the company is receiving (its foreign-currency exposure) and multiply by the correctly directioned forward rate to find the domestic-currency proceeds.

> **Knowledge check 2.** Which currency — the one with the higher interest rate or the one with the lower interest rate — always trades at a forward premium? **Answer:** The currency with the lower interest rate.

## Glossary

| Term | Definition |
|---|---|
| Cross-rate | An exchange rate between two currencies derived from their rates against a common third currency. |
| Triangular arbitrage | A riskless profit strategy exploiting an inconsistency between a directly quoted cross-rate and the cross-rate implied by its component quotes. |
| Forward exchange rate | A rate agreed today for a currency exchange settling on a specified future date. |
| Forward points (swap points) | The scaled difference between the forward rate and the spot rate. |
| Forward premium | A currency's forward rate is higher than its spot rate. |
| Forward discount | A currency's forward rate is lower than its spot rate. |
| Arbitrage relationship (no-arbitrage / covered interest rate parity) | The relationship pinning the forward rate to the spot rate and the two currencies' interest rates, such that no riskless profit is available from borrowing, converting, investing, and hedging back. |
| f/d notation | A relabeling of the A/B price/base convention for the arbitrage argument: f (foreign) plays the role of the price currency; d (domestic) plays the role of the base currency. |
| Day-count convention (actual/360) | The market convention for scaling an annualized interest rate to a specific number of days, typically using Libor-quoted deposits. |
| Unbiased predictor | A forecast that does not systematically over- or under-estimate the outcome, even if any single forecast can still be far from the eventual result. |

## Interactive tools

One tool accompanies this lesson and is available directly below it on the lesson page:

- **Cross-Rate and Forward-Rate Calculator** — enter two known quotes to derive a cross-rate (the tool determines automatically whether direct multiplication or inversion is required), or enter a spot rate, the domestic and foreign interest rates, and the day-count period to compute the no-arbitrage forward rate, forward points, and forward premium/discount.

## Common mistakes and exam traps

- Attempting to multiply two quotes directly when the shared currency occupies the same position (both numerators or both denominators) in each — inversion is required first.
- Applying the ÷10,000 point-scaling factor to a JPY pair instead of ÷100, producing a forward rate barely different from spot.
- Assuming forward points scale in exact linear proportion to the time horizon — the (1 + r_d·τ) denominator term prevents exact doubling.
- Forgetting that the currency with the *higher* interest rate trades at a forward *discount*, not a premium.
- Swapping which interest rate belongs in the numerator (foreign/price-currency side) versus the denominator (domestic/base-currency side) of the arbitrage relationship, which inverts the direction of the computed premium/discount.
- Treating "unbiased predictor" as meaning "accurate predictor" — the source is explicit that forward rates are historically poor predictors of future spot rates despite not being systematically biased.
- Comparing two dealers' cross-rate quotes without first confirming both are quoting the pair in the same A/B direction — a reciprocal quote can look like a mispricing when it is not.
- Reversing a percentage premium/discount back to a spot rate by subtracting instead of dividing.

## Memory aids

- **Same position, must invert; different position, just multiply.**
- **Higher rate, forward discount. Lower rate, forward premium.**
- **f is for foreign (price/numerator); d is for domestic (base/denominator) — the same A/B rule, just relabeled.**
- **Points ÷ 10,000 for most pairs; ÷ 100 for JPY pairs.**
- **Unbiased ≠ accurate.**
- **Doubling the horizon almost doubles the points — but not exactly, because of the (1 + r_d·τ) term.**

## Exam tips

- For cross-rate questions, identify the shared currency's position in both quotes before doing any arithmetic.
- For triangular arbitrage questions, compute the implied cross-rate first, then compare to the quoted rate, checking both are quoted in the same direction.
- For forward-points questions, confirm the correct scaling factor (10,000 or 100) before converting to a rate.
- For arbitrage-relationship questions, write out which rate is r_f (foreign, numerator side) and which is r_d (domestic, denominator side) before substituting into the formula.
- For day-count-adjusted questions, always include the (1 + r_d·τ) denominator term — it is a common source of "close but wrong" answers when omitted.
- For hedging scenarios, identify which currency the company is receiving or paying before selecting the correct forward rate and direction.

## One-page revision sheet

| Item | Rule or interpretation |
|---|---|
| Cross-rate, direct multiplication | C/A = C/B × B/A, when the shared currency cancels directly |
| Cross-rate, inversion required | Invert one quote first when the shared currency occupies the same position in both |
| Triangular arbitrage | Compare the implied cross-rate to the directly quoted cross-rate; the difference (correctly signed) is the profit |
| Forward rate from points | F = S + (points ÷ 10,000), or ÷ 100 for JPY pairs |
| Forward premium/discount, % terms | (F ÷ S) − 1; reverse via S × (1 + %) = F |
| Premium/discount direction | Base currency premium ⟺ F > S ⟺ positive points ⟺ base currency has the lower interest rate |
| Core arbitrage relationship | F(f/d) = S(f/d) × [(1 + r_f) ÷ (1 + r_d)] |
| Day-count-adjusted forward points | F − S = S × [(r_f − r_d) ÷ (1 + r_d·τ)] × τ |
| Day-count-adjusted forward rate | F = S × [(1 + r_f·τ) ÷ (1 + r_d·τ)] |
| Forward as expected future spot | %ΔS ≈ (r_f − r_d) ÷ (1 + r_d); an unbiased but historically poor predictor |
| Day-count convention | Actual/360, Libor-quoted deposits |

## 30-second summary

A cross-rate is derived from two quotes sharing a common currency: multiply directly if the shared currency cancels, or invert one quote first if it occupies the same position in both; a directly quoted cross-rate inconsistent with its implied value creates a triangular arbitrage opportunity. Forward rates are quoted as points (scaled by 10,000, or 100 for JPY pairs) added to the spot rate, or as a percentage premium/discount; the base currency is at a forward premium exactly when the forward rate exceeds the spot rate, which happens exactly when the base currency has the lower interest rate. The no-arbitrage relationship F(f/d) = S(f/d) × [(1 + r_f) ÷ (1 + r_d)] pins the forward rate to the spot rate and the interest-rate differential, with a day-count-adjusted version (introducing τ) used for periods other than a full year on an actual/360 Libor basis; a mispriced forward creates a riskless arbitrage profit through borrowing, converting, investing, and hedging back. The forward rate can also be interpreted as the market's unbiased — but historically inaccurate — predictor of the future spot rate.

## Continue studying

- [Open this chapter's formulas](/formulas?lesson=economics-08-exchange-rate-calculations)
- [Review 45 flashcards](/flashcards?lesson=economics-08-exchange-rate-calculations)
- [Practice all 45 questions](/practice?lesson=economics-08-exchange-rate-calculations)
- [Start Chapter Exam](/practice?lesson=economics-08-exchange-rate-calculations&mode=chapter-exam)
- Prerequisite skill: [Capital Flows and the FX Market](/lessons/economics-07-capital-flows-and-the-fx-market)

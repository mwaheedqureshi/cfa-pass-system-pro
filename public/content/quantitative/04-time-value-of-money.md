# Time Value of Money

> [!INFO]
> This is an independently written lesson. Learning outcomes are curriculum references; explanations, examples, calculator guidance, and questions are original.

## Introduction and why TVM matters

A euro today and a euro years from now are not economically equivalent. Today's money can earn a return, inflation can erode purchasing power, and future payment is uncertain. Time value of money (TVM) provides one consistent language for moving cash flows across time.

TVM supports security valuation, capital budgeting, loan analysis, retirement planning, bond pricing, and comparison of opportunities occurring on different dates.

## Learning outcomes

Curriculum references for this lesson involve calculating and interpreting present and future values, effective rates, annuities, perpetuities, and loan payments. The explanations below are independent.

## Cash-flow timelines, interest, and opportunity cost

A cash-flow timeline marks today as `t = 0`, future dates in equal intervals, inflows as positive, and outflows as negative. The discount rate represents opportunity cost: the return forgone on a comparable alternative with similar risk.

```formula
Simple interest: FV = PV(1 + rN)
Compound interest: FV = PV(1 + r)^N
```

| Feature | Simple interest | Compound interest |
|---|---|---|
| Interest earns interest | No | Yes |
| Growth pattern | Linear | Exponential |
| Typical multi-period finance use | Limited | Standard |
| Formula | `PV(1 + rN)` | `PV(1 + r)^N` |

### Worked example 1: simple interest
```example
Problem
Invest 2,000 for three years at 5% simple interest.
Step-by-step solution
1. Interest = 2,000 × 5% × 3 = 300.
2. FV = 2,000 + 300 = 2,300.
Interpretation
Only the original principal earns interest.
Exam insight
Do not compound when “simple interest” is explicit.
```

### Worked example 2: compound interest
```example
Problem
Invest 2,000 for three years at 5% compounded annually.
Step-by-step solution
1. Growth factor = 1.05³ = 1.157625.
2. FV = 2,000 × 1.157625 = 2,315.25.
Interpretation
The extra 15.25 versus simple interest is interest on prior interest.
Exam insight
Match the rate period to N.
```

> [!TIP]
> Knowledge check 1: With a positive rate over multiple periods, which is larger—simple or compound FV? **Compound FV.**

## Present value, future value, discounting, and compounding

Compounding moves value forward; discounting moves value backward. They are inverse operations.

```formula
FV = PV(1 + r)^N
PV = FV / (1 + r)^N
Discount factor = 1 / (1 + r)^N
```

| Feature | Present value | Future value |
|---|---|---|
| Date | Today (`t=0`) | Later date (`t=N`) |
| Operation | Discount | Compound |
| Question | What is future cash worth now? | What will current cash become? |
| Rate effect | Higher rate lowers PV | Higher rate raises FV |

### Worked example 3: future value of one cash flow
```example
Problem
Find FV of 5,000 in four years at 6%.
Step-by-step solution
1. Factor = 1.06⁴ = 1.262477.
2. FV = 5,000 × 1.262477 = 6,312.38.
Interpretation
5,000 today is economically equivalent to 6,312.38 in four years at 6%.
Exam insight
FV should exceed PV when time and rate are positive.
```

### Worked example 4: present value of one cash flow
```example
Problem
Find PV of 10,000 due in six years using 7%.
Step-by-step solution
1. Discount factor = 1 / 1.07⁶ = 0.666342.
2. PV = 10,000 × 0.666342 = 6,663.42.
Interpretation
Investing 6,663.42 at 7% would fund 10,000 in six years.
Exam insight
PV of a positive future amount falls when the discount rate rises.
```

> [!TIP]
> Knowledge check 2: If the discount rate rises, what happens to PV? **It falls.**

## Interest-rate conventions and compounding frequency

A stated annual rate (nominal annual rate) quotes an annual rate with a compounding frequency. The periodic rate is the stated rate divided by periods per year. The effective annual rate (EAR) captures actual one-year compound growth.

```formula
EAR = (1 + stated annual rate / m)^m − 1
Stated annual rate = m[(1 + EAR)^(1/m) − 1]
Continuous FV = PV e^(rN)
Continuous PV = FV e^(−rN)
```

### Worked example 5: stated rate to EAR
```example
Problem
A 12% stated annual rate compounds monthly. Find EAR.
Step-by-step solution
1. Monthly rate = 12% / 12 = 1%.
2. EAR = 1.01¹² − 1 = 12.6825%.
Interpretation
Within-year compounding raises effective growth above 12%.
Exam insight
Do not divide the final EAR by 12; divide the stated rate before compounding.
```

### Worked example 6: EAR to stated rate
```example
Problem
EAR is 10.25% with semiannual compounding. Find the stated annual rate.
Step-by-step solution
1. Semiannual growth = 1.1025^(1/2) = 1.05.
2. Periodic rate = 5%.
3. Stated annual rate = 2 × 5% = 10%.
Interpretation
A 10% stated rate compounded twice produces 10.25% effective growth.
Exam insight
Take the root before multiplying by m.
```

### Worked example 7: continuous compounding
```example
Problem
Find FV of 3,000 after two years at 8% continuously compounded.
Step-by-step solution
1. Exponent = 0.08 × 2 = 0.16.
2. FV = 3,000e^0.16 = 3,520.53.
Interpretation
Continuous compounding treats compounding intervals as infinitesimally short.
Exam insight
Use `e^(rN)`, not `(1+r)^N`.
```

> [!TIP]
> Knowledge check 3: For the same positive stated rate, which listed frequency gives the highest EAR? **Continuous.**

## Multiple cash flows

Value each cash flow at the same focal date, then add. Do not add amounts occurring on different dates before discounting.

```formula
PV of multiple cash flows = Σ[CFt / (1 + r)^t]
```

### Worked example 8: uneven cash flows
```example
Problem
Receive 100 in one year, 200 in two years, and 400 in three years. Discount at 5%.
Step-by-step solution
1. PV₁ = 100/1.05 = 95.24.
2. PV₂ = 200/1.05² = 181.41.
3. PV₃ = 400/1.05³ = 345.54.
4. Total PV = 622.19.
Interpretation
622.19 today is equivalent to the dated stream at 5%.
Exam insight
Each cash flow needs its own exponent.
```

## Ordinary annuity and annuity due

An ordinary annuity pays at each period end. An annuity due pays at each period beginning, so every payment compounds for one additional period.

```formula
PV ordinary annuity = PMT[1 − (1+r)^(−N)] / r
FV ordinary annuity = PMT[(1+r)^N − 1] / r
Annuity due value = Ordinary annuity value × (1+r)
```

| Feature | Ordinary annuity | Annuity due |
|---|---|---|
| Payment timing | End of period | Beginning of period |
| First payment | `t=1` | `t=0` |
| Relative value | Lower, all else equal | Ordinary value × `(1+r)` |
| Example | Bond coupons | Lease paid in advance |

### Worked example 9: PV of ordinary annuity
```example
Problem
Receive 1,000 at each year-end for five years; discount at 6%.
Step-by-step solution
1. Factor = [1 − 1.06^−5] / 0.06 = 4.212364.
2. PV = 1,000 × 4.212364 = 4,212.36.
Interpretation
The stream is worth less than its undiscounted 5,000 total.
Exam insight
END mode corresponds to an ordinary annuity.
```

### Worked example 10: FV of ordinary annuity
```example
Problem
Deposit 2,000 at each year-end for four years at 5%.
Step-by-step solution
1. Factor = (1.05⁴ − 1)/0.05 = 4.310125.
2. FV = 2,000 × 4.310125 = 8,620.25.
Interpretation
Four deposits total 8,000; earnings add 620.25.
Exam insight
The last ordinary payment earns no interest at the valuation date.
```

### Worked example 11: annuity due
```example
Problem
The same four 2,000 deposits occur at each year-beginning. Find FV at 5%.
Step-by-step solution
1. Ordinary FV = 8,620.25.
2. Multiply by 1.05: due FV = 9,051.26.
Interpretation
Each deposit earns one extra period of interest.
Exam insight
Switch calculator to BGN mode or multiply the ordinary result by `(1+r)`, not both.
```

> [!TIP]
> Knowledge check 4: Rent paid at the start of every month resembles an **annuity due**.

## Perpetuity, growing perpetuity, and growing annuity

```formula
PV perpetuity = PMT / r
PV growing perpetuity = CF₁ / (r − g), where r > g
PV growing annuity = CF₁/(r−g) × [1 − ((1+g)/(1+r))^N]
```

### Worked example 12: level perpetuity
```example
Problem
A security pays 50 annually forever; required return is 5%.
Step-by-step solution
1. PV = 50 / 0.05.
2. PV = 1,000.
Interpretation
At 5%, 1,000 can support a perpetual annual payment of 50.
Exam insight
The first payment is one period from today.
```

### Worked example 13: growing perpetuity
```example
Problem
Next year's cash flow is 40, growing 3% forever; required return is 8%.
Step-by-step solution
1. Spread = 8% − 3% = 5%.
2. PV = 40 / 0.05 = 800.
Interpretation
Growth increases value relative to a level 40 perpetuity.
Exam insight
Use next-period CF₁ and require `r > g`.
```

### Worked example 14: growing annuity
```example
Problem
Next year's payment is 1,000, growing 2% for five payments; discount at 7%.
Step-by-step solution
1. Base = 1,000/(0.07−0.02) = 20,000.
2. Adjustment = 1 − (1.02/1.07)^5 = 0.21339.
3. PV ≈ 4,267.80.
Interpretation
The finite growing stream is worth less than a growing perpetuity.
Exam insight
N counts payments, not gaps on the timeline.
```

> [!TIP]
> Knowledge check 5: What condition is essential for a standard growing perpetuity? **r must exceed g.**

## Loan amortization and mortgage basics

An amortizing loan payment covers periodic interest and principal. Early payments usually contain more interest because the outstanding balance is larger.

```formula
Loan payment = PV × r / [1 − (1+r)^(−N)]
Interest portion = Beginning balance × periodic rate
Principal portion = Payment − interest portion
```

### Worked example 15: loan payment
```example
Problem
Borrow 20,000 for four annual payments at 6%.
Step-by-step solution
1. Annuity factor = [1 − 1.06^−4]/0.06 = 3.465106.
2. Payment = 20,000 / 3.465106 = 5,771.83.
Interpretation
Equal payments fully repay principal and interest over four years.
Exam insight
PV and PMT need opposite calculator signs.
```

### Worked example 16: first amortization split
```example
Problem
Using the prior loan, split the first 5,771.83 payment.
Step-by-step solution
1. Interest = 20,000 × 6% = 1,200.
2. Principal = 5,771.83 − 1,200 = 4,571.83.
3. Ending balance = 20,000 − 4,571.83 = 15,428.17.
Interpretation
Later interest falls as principal is repaid.
Exam insight
Interest uses the beginning balance for that period.
```

### Worked example 17: mortgage periodic inputs
```example
Problem
A 240,000 mortgage has a 6% stated rate, monthly payments, and 25-year term. Identify TVM inputs.
Step-by-step solution
1. N = 25 × 12 = 300.
2. Monthly rate = 6% / 12 = 0.5%.
3. PV = 240,000; FV = 0 for full amortization.
4. Solve PMT in END mode.
Interpretation
Rate and period count must use the same monthly unit.
Exam insight
Do not use N=25 with a monthly rate.
```

> [!TIP]
> Knowledge check 6: In a standard fixed-rate amortizing loan, does the interest share rise or fall over time? **It falls.**

## Investment and bond applications

An investment is attractive when the PV of expected benefits exceeds price at the appropriate opportunity cost. A plain fixed-rate bond is the PV of coupon annuity plus principal.

```formula
Bond value = Coupon × [1 − (1+r)^(−N)]/r + Face value/(1+r)^N
```

### Worked example 18: bond value
```example
Problem
A three-year bond pays 50 annually and 1,000 principal; required return is 6%.
Step-by-step solution
1. Coupon PV = 50[1−1.06^−3]/0.06 = 133.65.
2. Principal PV = 1,000/1.06³ = 839.62.
3. Bond value = 973.27.
Interpretation
Value is below par because the 5% coupon rate is below the 6% required return.
Exam insight
Discount coupons and principal using consistent periods.
```

> [!TIP]
> Knowledge check 7: If required return rises, what happens to a fixed bond's PV? **It falls.**

## Retirement and inflation

Retirement planning often has an accumulation phase followed by a withdrawal annuity. Inflation links nominal and real amounts.

```formula
Real amount = Nominal amount / (1 + inflation)^N
Nominal amount needed = Real target × (1 + inflation)^N
```

### Worked example 19: retirement accumulation
```example
Problem
Deposit 6,000 at each year-end for 20 years at 7%.
Step-by-step solution
1. FV annuity factor = (1.07²⁰−1)/0.07 = 40.9955.
2. FV = 6,000 × 40.9955 = 245,973.
Interpretation
Contributions total 120,000; compounding supplies the remainder.
Exam insight
Year-end deposits mean ordinary annuity.
```

### Worked example 20: inflation-adjusted target
```example
Problem
A retiree wants purchasing power equal to 50,000 today in 15 years. Inflation is expected at 2.5%.
Step-by-step solution
1. Inflation factor = 1.025¹⁵ = 1.44830.
2. Nominal target = 50,000 × 1.44830 = 72,415.
Interpretation
About 72,415 in 15 years is needed to match today's 50,000 purchasing power.
Exam insight
Inflate a real target forward; discount a nominal future amount to express today's purchasing power.
```

> [!TIP]
> Knowledge check 8: Is a future retirement target stated in today's purchasing power real or nominal? **Real.**

## BA II Plus complete workflow

The TVM row contains `N`, `I/Y`, `PV`, `PMT`, and `FV`. `CPT` computes the selected unknown. `2nd` + `CLR TVM` clears stored TVM values. Enter the periodic number of periods in `N` and the rate per matching period in `I/Y` unless calculator P/Y settings are deliberately configured.

```calculator
Single cash flow: FV of 1,000 for 5 years at 6%
1. 2nd → CLR TVM.
2. 5 → N.
3. 6 → I/Y.
4. 1000 → +/- → PV.
5. 0 → PMT.
6. CPT → FV. Result: 1,338.23.
```

```calculator
Ordinary annuity: PV of five year-end payments of 1,000 at 6%
1. Confirm END mode; 2nd → CLR TVM.
2. 5 → N; 6 → I/Y.
3. 1000 → PMT; 0 → FV.
4. CPT → PV. Result: −4,212.36 because PV is opposite the payment inflows.
```

Common calculator mistakes include failing to clear old values, mismatching annual and monthly units, leaving an unintended PMT or FV stored, using BGN mode for an ordinary annuity, and giving every cash flow the same sign.

> [!WARNING]
> A sign “error” is often an interpretation issue: the calculator uses opposite signs to represent cash paid and cash received.

> [!TIP]
> Knowledge check 9: Which key computes a missing TVM variable? **CPT.**

> [!TIP]
> Knowledge check 10: What should you do before a new TVM problem? **CLR TVM and verify END/BGN plus period units.**

## Common mistakes and memory aids

- Combining cash flows from different dates before discounting.
- Using an annual rate with monthly N.
- Confusing stated annual rate with EAR.
- Applying an ordinary-annuity formula to beginning payments.
- Using `CF₀` instead of next-period `CF₁` in a growing perpetuity.
- Forgetting principal when valuing a bond.
- Treating a nominal retirement target as real purchasing power.

> [!TIP]
> **Forward multiply, backward divide. END is ordinary; BGN is due. Rate and N must speak the same calendar language.**

## Quick revision sheet

| Need | Formula or action |
|---|---|
| Single FV | `PV(1+r)^N` |
| Single PV | `FV/(1+r)^N` |
| EAR | `(1+stated/m)^m−1` |
| Continuous FV | `PV e^(rN)` |
| Multiple-flow PV | Discount each flow separately and sum |
| Ordinary annuity PV | `PMT[1−(1+r)^−N]/r` |
| Annuity due | Ordinary value × `(1+r)` |
| Perpetuity | `PMT/r` |
| Growing perpetuity | `CF₁/(r−g)` |
| Loan payment | `PVr/[1−(1+r)^−N]` |
| Bond value | PV coupons + PV principal |

## 30-second summary

TVM moves cash flows to a common date. Compounding moves forward and discounting moves backward. Match rate frequency with period count, distinguish stated from effective rates, and place every cash flow correctly on a timeline. Ordinary annuities pay at period-end; annuities due pay at the beginning. Perpetuities continue indefinitely, amortizing payments contain interest plus principal, bonds combine coupon and principal PVs, and inflation separates nominal amounts from purchasing power. Clear the calculator, check signs and mode, then test whether the answer makes economic sense.
+
## Exam tips

Draw the timeline, align the rate with the cash-flow period, apply a consistent sign convention, and distinguish ordinary annuities from annuities due before calculating.
## Finance-specific valuation lab

### Worked Example 21 — implied one-year forward rate
**Problem.** One- and two-year spot rates are 3% and 4%. **Solution.** $(1.04)^2=(1.03)(1+f_{1,1})$, so $f_{1,1}=5.01\%$. **Interpretation.** The forward rate prevents a maturity-based arbitrage. **Exam insight.** Match compounding conventions.

### Worked Example 22 — forward exchange rate
**Problem.** Spot is 1.10 domestic per foreign, domestic rate 5%, foreign rate 2%, one year. **Solution.** $F=1.10(1.05/1.02)=1.1324$. **Interpretation.** Interest-rate parity links currency carry to the no-arbitrage forward. **Exam insight.** Keep the quotation direction consistent.

### Worked Example 23 — implied equity growth
**Problem.** Price is 50, next dividend 2, required return 8%. **Solution.** From $P_0=D_1/(r-g)$, $g=0.08-2/50=4\%$. **Interpretation.** The price implies perpetual dividend growth under the model assumptions. **Exam insight.** $D_1$ is next period’s dividend.

### Worked Example 24 — option cash-flow additivity
**Problem.** At expiration, a share plus a put and minus a call, with common strike 100, always pays 100. **Solution.** By put–call parity the protected position equals the present value of the strike. **Interpretation.** Matching state-contingent cash flows enforces equal value. **Exam insight.** Compare payoff patterns before manipulating formulas.

> **Knowledge Check 11.** What principle allows values of separate cash-flow components to be added? **Answer:** Cash-flow additivity.
> **Knowledge Check 12.** Why must identical future cash flows have identical present values? **Answer:** Otherwise a no-arbitrage trade exists.

## Supplementary — beyond the verified official 2027 scope

Generic mortgage, retirement, and personal-savings exercises are useful TVM practice but are not part of the finance-specific official outcome set. They must remain excluded from official chapter and comprehensive assessments.

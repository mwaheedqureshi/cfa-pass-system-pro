# Analysis of Inventories

Inventory accounting connects purchasing and production decisions to the balance sheet, cost of sales, profit, cash taxes, and many analytical ratios. The analyst's job is to separate economic inventory performance from effects created by the chosen cost-flow assumption.

## 1. Lower of cost and net realisable value

Under IFRS, inventory is carried at the lower of cost and net realisable value (NRV). NRV is the estimated ordinary-course selling price less costs of completion and costs necessary to sell. Assessment is generally item by item or by groups of similar items. A decline below cost creates an expense and lowers inventory. If NRV later recovers, IFRS requires a reversal, limited to the original write-down.

US GAAP applies lower of cost and NRV to inventory measured by methods other than LIFO and retail. It prohibits later reversals. For LIFO and retail inventory, US GAAP retains lower of cost or market: replacement cost is constrained by an NRV ceiling and an NRV-less-normal-profit floor.

### Worked example 1: IFRS write-down

Cost is 120, expected selling price is 128, completion costs are 9, and selling costs are 7. NRV is 112, so inventory is written down by 8 to 112.

### Worked example 2: IFRS reversal

The next period's NRV rises to 118. The company reverses 6 of the prior 8 write-down. Carrying value becomes 118, never more than original cost of 120.

### Worked example 3: US GAAP non-LIFO inventory

Cost is 90 and NRV is 84. Carrying value becomes 84 and the 6 reduction cannot later be reversed.

### Worked example 4: US GAAP market bounds

NRV is 100, normal profit margin is 14, and replacement cost is 80. The floor is 86, so market is 86. If cost is 92, the write-down is 6.

### Original table 1: subsequent-measurement decision map

| Framework/method | Comparison | Reversal |
|---|---|---|
| IFRS | Lower of cost and NRV | Required on recovery, limited to original loss |
| US GAAP, non-LIFO/non-retail | Lower of cost and NRV | Prohibited |
| US GAAP, LIFO/retail | Lower of cost or bounded market | Prohibited |

### Original diagram 2: ratio direction after a write-down

```text
Inventory down -> assets down -> current ratio usually down
              \-> expense up -> profit and equity down
              \-> smaller inventory base -> turnover mechanically up
```

A write-down normally weakens profitability, liquidity, and solvency measures, while mechanically improving activity ratios whose denominator falls. That apparent turnover improvement is not operational progress.

## 2. Cost-flow assumptions

Specific identification assigns actual cost to identifiable items. FIFO assigns the earliest costs to cost of goods sold (COGS), leaving recent costs in ending inventory. LIFO assigns recent costs to COGS, leaving older layers in inventory; it is permitted under US GAAP but not IFRS. Weighted average applies one average cost to units sold and remaining.

Cost of goods available for sale equals beginning inventory plus purchases. COGS equals goods available minus ending inventory. The cost-flow assumption need not describe the physical movement of goods.

### Worked example 5: FIFO in rising prices

Purchase layers are 100 units at 10, 100 at 12, and 100 at 14. If 180 units sell, FIFO COGS is 1,960 and ending inventory is 1,640.

### Worked example 6: LIFO in rising prices

Using the same data, LIFO COGS is 2,360 and ending inventory is 1,240.

### Worked example 7: weighted average

Average cost is 3,600 / 300 = 12. COGS is 2,160 and ending inventory is 1,440.

### Original table 3: rising-cost effects

| Measure | FIFO relative to LIFO | Why |
|---|---|---|
| Ending inventory | Higher | Recent high costs remain |
| COGS | Lower | Older low costs flow to expense |
| Gross profit and pretax income | Higher | COGS is lower |
| Income taxes | Usually higher | Taxable income is usually higher |

In falling prices, these FIFO/LIFO directions reverse. Weighted-average outcomes normally lie between them. If quantities and costs are stable, method differences shrink.

### Worked example 8: deflation

If successive unit costs are 14, 12, and 10, FIFO sends older high costs to COGS. FIFO therefore reports higher COGS and lower ending inventory and profit than LIFO.

### Original table 4: inflation/deflation compass

| Cost trend | FIFO COGS vs LIFO | FIFO inventory vs LIFO | FIFO profit vs LIFO |
|---|---:|---:|---:|
| Rising | Lower | Higher | Higher |
| Falling | Higher | Lower | Lower |

## 3. LIFO reserve, liquidation, and comparability

A US GAAP LIFO reporter discloses the LIFO reserve, the excess of FIFO inventory over LIFO inventory. Add it to LIFO inventory to estimate FIFO inventory. The change in the reserve adjusts COGS: FIFO COGS equals LIFO COGS minus the increase in the reserve. For after-tax balance-sheet comparisons, increase assets by the reserve and equity by the reserve multiplied by one minus the tax rate; the remainder represents the deferred tax effect.

### Worked example 9: converting inventory and COGS

LIFO inventory is 500, the reserve rises from 70 to 82, and LIFO COGS is 760. Estimated FIFO inventory is 582 and FIFO COGS is 748.

### Worked example 10: after-tax equity adjustment

With an 82 reserve and a 25% tax rate, the approximate equity increase is 61.5 and the deferred tax component is 20.5.

### Original checklist 5: comparison normalization

1. Identify each company's method and costing convention.
2. Add the LIFO reserve to LIFO inventory.
3. Subtract the reserve increase from LIFO COGS.
4. Recompute gross profit, taxes, assets, equity, and affected ratios.
5. Separate recurring operations from layer liquidation.

A LIFO liquidation occurs when sales draw down older layers. In rising prices, old low costs reduce current COGS and temporarily inflate gross profit. The effect is unsustainable unless old layers can continue to be liquidated.

### Worked example 11: LIFO liquidation warning

Unit sales exceed purchases and the LIFO reserve falls sharply. Reported gross margin improves even though selling economics are unchanged. The reserve decline indicates that old costs boosted profit.

## 4. Presentation, disclosure, and analysis

Inventories are normally current assets and are often classified as raw materials, work in process, finished goods, and merchandise. Notes disclose measurement policies, cost formulas, carrying amounts by classification, inventory recognized as expense, write-downs, reversals under IFRS, pledged inventory, and relevant LIFO information under US GAAP.

### Original table 6: disclosure-to-question bridge

| Signal | Analyst's follow-up |
|---|---|
| Finished goods rise faster than sales | Is demand weakening or a launch building stock? |
| Raw materials rise | Is production expected to expand, or are inputs obsolete? |
| Write-downs recur | Are forecasts or purchasing controls weak? |
| Inventory is pledged | How constrained is financial flexibility? |
| LIFO reserve falls as quantities fall | Did liquidation inflate margin? |

### Worked example 12: turnover and days

COGS is 900 and average inventory is 150. Turnover is 6.0 times and days inventory on hand is 365 / 6 = 60.8 days.

### Worked example 13: gross margin

Revenue is 1,200 and COGS is 900. Gross profit margin is 25%. A higher margin can reflect pricing power, favorable input costs, inventory method effects, or a temporary LIFO liquidation.

### Original diagram 7: analytical triangulation

```text
Financial statements + inventory note + MD&A/industry evidence
                         |
                         v
       demand, purchasing, obsolescence, method, and margin judgment
```

Turnover rising alongside fewer stockouts can indicate better management. Turnover rising because of a write-down, shortages, or liquidation may be adverse. Days inventory is the inverse expression of turnover, so interpret the two consistently. Compare trends with peers only after method normalization.

### Worked example 14: composition signal

Sales grow 5% while finished goods grow 28% and raw materials decline. The mix is consistent with unsold output rather than preparation for increased production and deserves investigation.

### Original checklist 8: exam-day inventory review

- Compute NRV before choosing the measurement rule.
- Distinguish US GAAP non-LIFO inventory from LIFO/retail inventory.
- Reverse the FIFO/LIFO directions when costs fall.
- Treat weighted average as a smoothing method, not automatically the midpoint in every dataset.
- Normalize LIFO reporters with the reserve and its change.
- Do not call a write-down-driven turnover increase an operating improvement.
- Read inventory classifications, write-downs, pledges, and management commentary together.

## Formula recap

1. **NRV** = selling price − completion costs − selling costs.
2. **US GAAP market floor** = NRV − normal profit margin; replacement cost is bounded by floor and NRV.
3. **Goods available** = beginning inventory + purchases.
4. **COGS** = goods available − ending inventory.
5. **Weighted-average unit cost** = cost of goods available / units available.
6. **LIFO reserve** = FIFO inventory − LIFO inventory; FIFO COGS = LIFO COGS − change in reserve.
7. **Inventory turnover** = COGS / average inventory; **days inventory** = 365 / turnover.
8. **Gross profit margin** = (revenue − COGS) / revenue.

The central discipline is causal: first determine the accounting method and price environment, then normalize where possible, and only then interpret reported performance.

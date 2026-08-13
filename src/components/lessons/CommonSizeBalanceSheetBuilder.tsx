import {useState} from 'react';

export type BalanceSheetLineItem = {name: string; amount: number};
export type CommonSizeResult = {name: string; amount: number; percentOfAssets: number};

export function calculateCommonSize(lineItems: BalanceSheetLineItem[], totalAssets: number): CommonSizeResult[] {
 if (!Number.isFinite(totalAssets) || totalAssets <= 0) throw new Error('Total assets must be a positive finite number');
 if (!lineItems.length) throw new Error('At least one line item is required');
 return lineItems.map(item => {
  if (!Number.isFinite(item.amount)) throw new Error(`Amount for "${item.name}" must be a finite number`);
  return {name: item.name, amount: item.amount, percentOfAssets: (item.amount / totalAssets) * 100};
 });
}

export type DeviationFlag = {name: string; currentPercent: number; comparisonPercent: number; deltaPct: number; flagged: boolean};

export function flagDeviations(current: CommonSizeResult[], comparison: CommonSizeResult[], thresholdPct = 5): DeviationFlag[] {
 if (!Number.isFinite(thresholdPct) || thresholdPct < 0) throw new Error('Threshold must be a non-negative finite number');
 return current.map(c => {
  const match = comparison.find(p => p.name === c.name);
  const comparisonPercent = match ? match.percentOfAssets : 0;
  const deltaPct = c.percentOfAssets - comparisonPercent;
  return {name: c.name, currentPercent: c.percentOfAssets, comparisonPercent, deltaPct, flagged: Math.abs(deltaPct) >= thresholdPct};
 });
}

export type HorizontalResult = {name: string; baseAmount: number; currentAmount: number; growthPct: number};

export function calculateHorizontalAnalysis(base: BalanceSheetLineItem[], current: BalanceSheetLineItem[]): HorizontalResult[] {
 if (!current.length) throw new Error('At least one current-period line item is required');
 return current.map(c => {
  const b = base.find(x => x.name === c.name);
  if (!b) throw new Error(`No base-period amount found for "${c.name}"`);
  if (!Number.isFinite(b.amount) || b.amount === 0) throw new Error(`Base amount for "${c.name}" must be a nonzero finite number`);
  if (!Number.isFinite(c.amount)) throw new Error(`Current amount for "${c.name}" must be a finite number`);
  return {name: c.name, baseAmount: b.amount, currentAmount: c.amount, growthPct: ((c.amount - b.amount) / b.amount) * 100};
 });
}

const defaultRows: BalanceSheetLineItem[] = [
 {name: 'Cash', amount: 4000000},
 {name: 'Receivables', amount: 6000000},
 {name: 'Inventory', amount: 10000000},
 {name: 'Net PP&E', amount: 20000000},
];
const defaultPrior: BalanceSheetLineItem[] = [
 {name: 'Cash', amount: 6000000},
 {name: 'Receivables', amount: 5500000},
 {name: 'Inventory', amount: 8000000},
 {name: 'Net PP&E', amount: 18500000},
];

export function CommonSizeBalanceSheetBuilder() {
 const [rows, setRows] = useState(defaultRows);
 const [priorRows, setPriorRows] = useState(defaultPrior);
 const [threshold, setThreshold] = useState(5);
 const totalAssets = rows.reduce((sum, r) => sum + (Number.isFinite(r.amount) ? r.amount : 0), 0);
 const priorTotalAssets = priorRows.reduce((sum, r) => sum + (Number.isFinite(r.amount) ? r.amount : 0), 0);

 let deviations: DeviationFlag[] = [];
 let error = '';
 try {
  const commonSize = calculateCommonSize(rows, totalAssets);
  const priorCommonSize = calculateCommonSize(priorRows, priorTotalAssets);
  deviations = flagDeviations(commonSize, priorCommonSize, threshold);
 } catch (e) {
  error = e instanceof Error ? e.message : 'Invalid input';
 }

 function updateRow(index: number, field: 'name' | 'amount', value: string) {
  setRows(prev => prev.map((r, i) => i === index ? {...r, [field]: field === 'amount' ? Number(value) : value} : r));
 }
 function updatePrior(index: number, field: 'name' | 'amount', value: string) {
  setPriorRows(prev => prev.map((r, i) => i === index ? {...r, [field]: field === 'amount' ? Number(value) : value} : r));
 }

 return (
  <section className="card mt-6" aria-labelledby="common-size-builder-heading">
   <h2 id="common-size-builder-heading">Common-Size Statement Builder</h2>
   <p className="muted mt-1 text-sm">Enter current- and prior-period balance-sheet line items to build a common-size balance sheet and flag the line items that shifted the most.</p>
   <div className="mt-4 grid gap-6 sm:grid-cols-2">
    <div>
     <h3 className="text-sm font-semibold">Current period</h3>
     {rows.map((row, i) => (
      <div key={i} className="mt-2 flex gap-2">
       <label className="sr-only" htmlFor={`current-name-${i}`}>Current period line item name {i + 1}</label>
       <input id={`current-name-${i}`} className="w-1/2 rounded border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={row.name} onChange={e => updateRow(i, 'name', e.target.value)} />
       <label className="sr-only" htmlFor={`current-amount-${i}`}>Current period amount for {row.name}</label>
       <input id={`current-amount-${i}`} type="number" className="w-1/2 rounded border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={row.amount} onChange={e => updateRow(i, 'amount', e.target.value)} />
      </div>
     ))}
     <p className="mt-2 text-sm">Total assets: {totalAssets.toLocaleString()}</p>
    </div>
    <div>
     <h3 className="text-sm font-semibold">Prior period (comparison)</h3>
     {priorRows.map((row, i) => (
      <div key={i} className="mt-2 flex gap-2">
       <label className="sr-only" htmlFor={`prior-name-${i}`}>Prior period line item name {i + 1}</label>
       <input id={`prior-name-${i}`} className="w-1/2 rounded border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={row.name} onChange={e => updatePrior(i, 'name', e.target.value)} />
       <label className="sr-only" htmlFor={`prior-amount-${i}`}>Prior period amount for {row.name}</label>
       <input id={`prior-amount-${i}`} type="number" className="w-1/2 rounded border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={row.amount} onChange={e => updatePrior(i, 'amount', e.target.value)} />
      </div>
     ))}
     <p className="mt-2 text-sm">Total assets: {priorTotalAssets.toLocaleString()}</p>
    </div>
   </div>
   <label className="label mt-4 block max-w-xs" htmlFor="deviation-threshold">Deviation flag threshold (percentage points)
    <input id="deviation-threshold" type="number" min={0} className="mt-1 w-full rounded border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={threshold} onChange={e => setThreshold(Number(e.target.value))} />
   </label>
   {error ? <p role="status" className="mt-4 font-medium">{error}</p> : (
    <div className="mt-4 overflow-x-auto">
     <table className="w-full text-sm">
      <thead>
       <tr className="text-left">
        <th scope="col">Line item</th>
        <th scope="col">Current %</th>
        <th scope="col">Prior %</th>
        <th scope="col">Change (pp)</th>
        <th scope="col">Status</th>
       </tr>
      </thead>
      <tbody>
       {deviations.map(d => (
        <tr key={d.name}>
         <td>{d.name}</td>
         <td>{d.currentPercent.toFixed(1)}%</td>
         <td>{d.comparisonPercent.toFixed(1)}%</td>
         <td>{d.deltaPct >= 0 ? '+' : ''}{d.deltaPct.toFixed(1)}</td>
         <td role="status">{d.flagged ? 'Flagged: material shift' : 'Within threshold'}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   )}
  </section>
 );
}

import { useState } from 'react';

export type AccountingChoice='extend-life'|'capitalize-cost'|'reduce-allowance'|'early-revenue'|'increase-reserve';
export function accountingChoiceImpact(choice:AccountingChoice,amount:number){
 const aggressive=choice!=='increase-reserve';
 const effects:{earnings:number;assets:number;liabilities:number;cfo:number;futureEarnings:number}={earnings:0,assets:0,liabilities:0,cfo:0,futureEarnings:0};
 if(choice==='extend-life'||choice==='capitalize-cost'){effects.earnings=amount;effects.assets=amount;effects.futureEarnings=-amount;}
 if(choice==='reduce-allowance'){effects.earnings=amount;effects.assets=amount;effects.futureEarnings=-amount;}
 if(choice==='early-revenue'){effects.earnings=amount;effects.assets=amount;effects.futureEarnings=-amount;}
 if(choice==='increase-reserve'){effects.earnings=-amount;effects.liabilities=amount;effects.futureEarnings=amount;}
 return{classification:aggressive?'aggressive':'conservative',effects,note:'Illustrative timing effect: cash is unchanged at recognition and future reversal depends on subsequent events.'};
}
const labels:Record<AccountingChoice,string>={'extend-life':'Extend useful life','capitalize-cost':'Capitalize a cost peers expense','reduce-allowance':'Reduce receivable allowance','early-revenue':'Recognize revenue early','increase-reserve':'Increase a reserve'};
export function AccountingBiasImpactExplorer(){const[choice,setChoice]=useState<AccountingChoice>('capitalize-cost'),[amount,setAmount]=useState(20);const r=accountingChoiceImpact(choice,amount);return <section className="card"><h3 className="text-lg font-semibold">Conservative vs Aggressive Accounting Impact Explorer</h3><div className="mt-4 grid gap-3 md:grid-cols-2"><label className="text-sm">Choice<select className="mt-1 w-full rounded border p-2" value={choice} onChange={e=>setChoice(e.target.value as AccountingChoice)}>{Object.entries(labels).map(([v,l])=><option key={v} value={v}>{l}</option>)}</select></label><label className="text-sm">Illustrative amount<input className="mt-1 w-full rounded border p-2" type="number" min="0" value={amount} onChange={e=>setAmount(Number(e.target.value))}/></label></div><div className="mt-4 rounded bg-slate-50 p-3"><p><strong>Current classification:</strong> {r.classification}</p><div className="mt-2 grid grid-cols-2 gap-2 text-sm md:grid-cols-5">{Object.entries(r.effects).map(([k,v])=><div key={k}><span className="block text-slate-500">{k}</span><strong>{v>0?'+':''}{v}</strong></div>)}</div><p className="mt-2 text-sm">{r.note} “Aggressive” does not automatically mean fraudulent, and “conservative” does not automatically mean neutral.</p></div></section>}
export default AccountingBiasImpactExplorer;

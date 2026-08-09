import {useState} from 'react';
type Outcome={quantity:number;price:number;totalRevenue:number};
export function compareMarketStructureOutcomes({demandIntercept,demandSlope,marginalCost}:{demandIntercept:number;demandSlope:number;marginalCost:number}){
 if(![demandIntercept,demandSlope,marginalCost].every(Number.isFinite))return{error:'Enter finite numbers for every field.'};
 if(demandSlope<=0)return{error:'Demand slope must be positive so that price falls as quantity rises.'};
 if(marginalCost<0)return{error:'Marginal cost cannot be negative.'};
 if(demandIntercept<=marginalCost)return{error:'Demand intercept must exceed marginal cost for a positive equilibrium output.'};
 const perfectQuantity=(demandIntercept-marginalCost)/demandSlope;
 const perfect:Outcome={quantity:perfectQuantity,price:marginalCost,totalRevenue:marginalCost*perfectQuantity};
 const imperfectQuantity=(demandIntercept-marginalCost)/(2*demandSlope);
 const imperfectPrice=demandIntercept-demandSlope*imperfectQuantity;
 const imperfect:Outcome={quantity:imperfectQuantity,price:imperfectPrice,totalRevenue:imperfectPrice*imperfectQuantity};
 return{perfect,imperfect};
}
type Field='demandIntercept'|'demandSlope'|'marginalCost';
const labels:Record<Field,string>={demandIntercept:'Demand intercept (a)',demandSlope:'Demand slope (b)',marginalCost:'Marginal cost (constant)'};
export function MarketStructureSupplyExplorer(){
 const[values,setValues]=useState<Record<Field,string>>({demandIntercept:'90',demandSlope:'0.5',marginalCost:'30'});
 const numeric={demandIntercept:Number(values.demandIntercept),demandSlope:Number(values.demandSlope),marginalCost:Number(values.marginalCost)};
 const result=compareMarketStructureOutcomes(numeric);
 return <section className="card">
  <h2>Supply, cost, and market structure explorer</h2>
  <p className="muted mt-2 text-sm">Set a linear demand curve P = a − bQ and a constant marginal cost, then compare the perfectly competitive outcome (P = MC) with the imperfect-competition outcome (MR = MC, price read from demand).</p>
  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
   {(Object.keys(labels) as Field[]).map(key=><label className="label" key={key}>{labels[key]}<input aria-label={labels[key]} value={values[key]} onChange={e=>setValues({...values,[key]:e.target.value})} inputMode="decimal"/></label>)}
  </div>
  {'error' in result?<output className="mt-4 block font-semibold" aria-live="polite">{result.error}</output>:<div className="mt-4" aria-live="polite">
   <table className="w-full text-sm">
    <thead><tr><th className="text-left">Structure</th><th className="text-right">Quantity</th><th className="text-right">Price</th><th className="text-right">Total revenue</th></tr></thead>
    <tbody>
     <tr><td>Perfect competition (P = MC)</td><td className="text-right">{result.perfect.quantity.toFixed(2)}</td><td className="text-right">{result.perfect.price.toFixed(2)}</td><td className="text-right">{result.perfect.totalRevenue.toFixed(2)}</td></tr>
     <tr><td>Imperfect competition (MR = MC)</td><td className="text-right">{result.imperfect.quantity.toFixed(2)}</td><td className="text-right">{result.imperfect.price.toFixed(2)}</td><td className="text-right">{result.imperfect.totalRevenue.toFixed(2)}</td></tr>
    </tbody>
   </table>
   <p className="muted mt-2 text-sm">With the same demand and cost, the imperfect competitor sells a smaller quantity at a higher price than the perfectly competitive outcome — the price gap is {(result.imperfect.price-result.perfect.price).toFixed(2)} and the quantity gap is {(result.perfect.quantity-result.imperfect.quantity).toFixed(2)}.</p>
   <svg viewBox="0 0 400 160" className="mt-3 w-full" role="img" aria-label={`Demand line from price ${numeric.demandIntercept} at zero quantity, with perfect-competition point at quantity ${result.perfect.quantity.toFixed(1)}, price ${result.perfect.price.toFixed(1)}, and imperfect-competition point at quantity ${result.imperfect.quantity.toFixed(1)}, price ${result.imperfect.price.toFixed(1)}`}>
    <title>Demand line with two equilibrium points</title>
    <line x1="30" y1="140" x2="380" y2="140" stroke="currentColor"/>
    <line x1="30" y1="10" x2="30" y2="140" stroke="currentColor"/>
    <line x1="30" y1="15" x2="370" y2="135" stroke="#2563eb" strokeWidth="3"/>
    <circle cx={30+Math.min(340,(result.perfect.quantity/(numeric.demandIntercept/numeric.demandSlope))*340)} cy={140-Math.min(125,(result.perfect.price/numeric.demandIntercept)*125)} r="5" fill="#059669"/>
    <text x={30+Math.min(340,(result.perfect.quantity/(numeric.demandIntercept/numeric.demandSlope))*340)} y={140-Math.min(125,(result.perfect.price/numeric.demandIntercept)*125)-10} fontSize="11" textAnchor="middle">Perfect</text>
    <circle cx={30+Math.min(340,(result.imperfect.quantity/(numeric.demandIntercept/numeric.demandSlope))*340)} cy={140-Math.min(125,(result.imperfect.price/numeric.demandIntercept)*125)} r="5" fill="#b45309"/>
    <text x={30+Math.min(340,(result.imperfect.quantity/(numeric.demandIntercept/numeric.demandSlope))*340)} y={140-Math.min(125,(result.imperfect.price/numeric.demandIntercept)*125)-10} fontSize="11" textAnchor="middle">Imperfect</text>
   </svg>
  </div>}
 </section>;
}

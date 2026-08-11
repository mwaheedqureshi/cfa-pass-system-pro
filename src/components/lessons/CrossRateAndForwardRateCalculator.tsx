import {useState} from 'react';
export type Quote={priceCurrency:string;baseCurrency:string;value:number};
const clean=(code:string)=>code.trim().toUpperCase();
export function calculateCrossRate(quote1:Quote,quote2:Quote){
 const q1={priceCurrency:clean(quote1.priceCurrency),baseCurrency:clean(quote1.baseCurrency),value:quote1.value};
 const q2={priceCurrency:clean(quote2.priceCurrency),baseCurrency:clean(quote2.baseCurrency),value:quote2.value};
 if(!Number.isFinite(q1.value)||!Number.isFinite(q2.value))return{error:'Enter finite numbers for both quotes.'};
 if(q1.value<=0||q2.value<=0)return{error:'Quotes must be positive.'};
 if(!q1.priceCurrency||!q1.baseCurrency||!q2.priceCurrency||!q2.baseCurrency)return{error:'Enter a currency code for every price and base field.'};
 if(q1.priceCurrency===q1.baseCurrency||q2.priceCurrency===q2.baseCurrency)return{error:'A quote cannot have the same currency as both its price and base currency.'};
 if(q1.baseCurrency===q2.priceCurrency)return{crossRate:q1.value*q2.value,priceCurrency:q1.priceCurrency,baseCurrency:q2.baseCurrency,method:'direct' as const};
 if(q2.baseCurrency===q1.priceCurrency)return{crossRate:q2.value*q1.value,priceCurrency:q2.priceCurrency,baseCurrency:q1.baseCurrency,method:'direct' as const};
 if(q1.baseCurrency===q2.baseCurrency){const invertedQ1value=1/q1.value;return{crossRate:q2.value*invertedQ1value,priceCurrency:q2.priceCurrency,baseCurrency:q1.priceCurrency,method:'inversion' as const};}
 if(q1.priceCurrency===q2.priceCurrency){const invertedQ2value=1/q2.value;return{crossRate:invertedQ2value*q1.value,priceCurrency:q2.baseCurrency,baseCurrency:q1.baseCurrency,method:'inversion' as const};}
 return{error:'These two quotes do not share a common currency; a cross-rate cannot be derived from them.'};
}
export function calculateForwardRate(spot:number,domesticRate:number,foreignRate:number,days:number,basis=360,scalingFactor=10000){
 if(![spot,domesticRate,foreignRate,days,basis,scalingFactor].every(Number.isFinite))return{error:'Enter finite numbers for every field.'};
 if(spot<=0)return{error:'The spot rate must be positive.'};
 if(days<=0)return{error:'The number of days must be positive.'};
 if(basis<=0)return{error:'The day-count basis must be positive.'};
 if(domesticRate<=-1||foreignRate<=-1)return{error:'Interest rates cannot be −100% or lower.'};
 if(scalingFactor<=0)return{error:'The points scaling factor must be positive.'};
 const tau=days/basis;
 const forwardRate=spot*((1+foreignRate*tau)/(1+domesticRate*tau));
 const points=(forwardRate-spot)*scalingFactor;
 const pctPremiumDiscount=(forwardRate/spot-1)*100;
 const direction=forwardRate>spot?'premium':forwardRate<spot?'discount':'flat';
 return{forwardRate,points,pctPremiumDiscount,direction,tau};
}
export function CrossRateAndForwardRateCalculator(){
 const[q1Price,setQ1Price]=useState('NOK');
 const[q1Base,setQ1Base]=useState('USD');
 const[q1Value,setQ1Value]=useState('10.5000');
 const[q2Price,setQ2Price]=useState('USD');
 const[q2Base,setQ2Base]=useState('EUR');
 const[q2Value,setQ2Value]=useState('1.0800');
 const crossResult=calculateCrossRate({priceCurrency:q1Price,baseCurrency:q1Base,value:Number(q1Value)},{priceCurrency:q2Price,baseCurrency:q2Base,value:Number(q2Value)});
 const[spot,setSpot]=useState('1.4200');
 const[domesticRate,setDomesticRate]=useState('2.50');
 const[foreignRate,setForeignRate]=useState('4.00');
 const[days,setDays]=useState('360');
 const[basis,setBasis]=useState('360');
 const[jpyScaling,setJpyScaling]=useState(false);
 const forwardResult=calculateForwardRate(Number(spot),Number(domesticRate)/100,Number(foreignRate)/100,Number(days),Number(basis),jpyScaling?100:10000);
 return <section className="card">
  <h2>Cross-rate and forward-rate calculator</h2>
  <p className="muted mt-2 text-sm">Both panels use the A/B convention from this and the prior lesson: the first-written currency is the price currency, the second is the base currency.</p>
  <div className="mt-4">
   <h3>Cross-rate panel</h3>
   <p className="muted mt-1 text-sm">Enter two quotes that share a common currency. The tool detects automatically whether direct multiplication or inversion is required.</p>
   <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
    <div className="flex gap-2"><input aria-label="Quote 1 price currency" className="w-20 rounded-lg border px-2 py-2 dark:border-slate-600 dark:bg-slate-800" value={q1Price} onChange={e=>setQ1Price(e.target.value)}/><span className="self-center">/</span><input aria-label="Quote 1 base currency" className="w-20 rounded-lg border px-2 py-2 dark:border-slate-600 dark:bg-slate-800" value={q1Base} onChange={e=>setQ1Base(e.target.value)}/><input aria-label="Quote 1 value" className="flex-1 rounded-lg border px-2 py-2 dark:border-slate-600 dark:bg-slate-800" value={q1Value} onChange={e=>setQ1Value(e.target.value)} inputMode="decimal"/></div>
    <div className="flex gap-2"><input aria-label="Quote 2 price currency" className="w-20 rounded-lg border px-2 py-2 dark:border-slate-600 dark:bg-slate-800" value={q2Price} onChange={e=>setQ2Price(e.target.value)}/><span className="self-center">/</span><input aria-label="Quote 2 base currency" className="w-20 rounded-lg border px-2 py-2 dark:border-slate-600 dark:bg-slate-800" value={q2Base} onChange={e=>setQ2Base(e.target.value)}/><input aria-label="Quote 2 value" className="flex-1 rounded-lg border px-2 py-2 dark:border-slate-600 dark:bg-slate-800" value={q2Value} onChange={e=>setQ2Value(e.target.value)} inputMode="decimal"/></div>
   </div>
   {'error' in crossResult?<output className="mt-3 block font-semibold" aria-live="polite">{crossResult.error}</output>:<div className="mt-3 space-y-1" aria-live="polite">
    <p><strong>{crossResult.priceCurrency}/{crossResult.baseCurrency}</strong> = {crossResult.crossRate.toLocaleString(undefined,{maximumFractionDigits:6})}</p>
    <p className="muted text-sm">Method used: {crossResult.method==='direct'?'direct multiplication (the shared currency canceled directly)':'inversion (one quote was inverted before the shared currency canceled)'}</p>
   </div>}
  </div>
  <div className="mt-5 border-t pt-4 dark:border-slate-700">
   <h3>Forward-rate panel</h3>
   <p className="muted mt-1 text-sm">Enter the spot rate S(f/d), the domestic and foreign annualized interest rates, and the day-count period to compute the no-arbitrage forward rate.</p>
   <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
    <label className="label">Spot rate S(f/d)<input aria-label="Spot rate" value={spot} onChange={e=>setSpot(e.target.value)} inputMode="decimal"/></label>
    <label className="label">Domestic rate r_d (%/yr)<input aria-label="Domestic annualized interest rate percent" value={domesticRate} onChange={e=>setDomesticRate(e.target.value)} inputMode="decimal"/></label>
    <label className="label">Foreign rate r_f (%/yr)<input aria-label="Foreign annualized interest rate percent" value={foreignRate} onChange={e=>setForeignRate(e.target.value)} inputMode="decimal"/></label>
    <label className="label">Days<input aria-label="Number of days" value={days} onChange={e=>setDays(e.target.value)} inputMode="numeric"/></label>
    <label className="label">Day-count basis<input aria-label="Day count basis" value={basis} onChange={e=>setBasis(e.target.value)} inputMode="numeric"/></label>
    <label className="flex items-center gap-2 self-end pb-2"><input type="checkbox" aria-label="Use JPY-style points scaling (divide by 100 instead of 10,000)" checked={jpyScaling} onChange={e=>setJpyScaling(e.target.checked)}/> JPY-style scaling (÷100)</label>
   </div>
   {'error' in forwardResult?<output className="mt-3 block font-semibold" aria-live="polite">{forwardResult.error}</output>:<div className="mt-3 space-y-1" aria-live="polite">
    <p><strong>Forward rate:</strong> {forwardResult.forwardRate.toLocaleString(undefined,{maximumFractionDigits:6})}</p>
    <p>Forward points: {forwardResult.points>=0?'+':''}{forwardResult.points.toFixed(2)}</p>
    <p>Premium/discount: {forwardResult.pctPremiumDiscount>=0?'+':''}{forwardResult.pctPremiumDiscount.toFixed(4)}%</p>
    <p className="muted text-sm">The base currency is trading at a forward <strong>{forwardResult.direction}</strong>{forwardResult.direction!=='flat'&&` (the ${forwardResult.direction==='premium'?'domestic (base)':'foreign (price)'} currency has the lower interest rate)`}.</p>
   </div>}
  </div>
 </section>;
}

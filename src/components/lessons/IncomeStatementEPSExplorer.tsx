import {useMemo,useState} from 'react';

export type EpsInputs={netIncome:number;preferredDividends:number;weightedAverageShares:number};

export function calculateBasicEPS(inputs:EpsInputs):number{
 const{netIncome,preferredDividends,weightedAverageShares}=inputs;
 if(!Number.isFinite(netIncome)||!Number.isFinite(preferredDividends)||!Number.isFinite(weightedAverageShares))throw new Error('All basic EPS inputs must be finite numbers.');
 if(weightedAverageShares<=0)throw new Error('Weighted average shares outstanding must be greater than zero.');
 return (netIncome-preferredDividends)/weightedAverageShares;
}

export type ConvertiblePreferred={type:'convertiblePreferred';name:string;totalDividends:number;asConvertedShares:number};
export type ConvertibleDebt={type:'convertibleDebt';name:string;annualInterest:number;taxRate:number;asConvertedShares:number};
export type OptionsWarrants={type:'options';name:string;sharesIssuable:number;exercisePrice:number;averageMarketPrice:number};
export type DilutiveSecurity=ConvertiblePreferred|ConvertibleDebt|OptionsWarrants;

export type SecurityEffect={name:string;numeratorEffect:number;denominatorEffect:number;perShareEffect:number;inTheMoney:boolean};

/** Computes a single potentially dilutive security's numerator/denominator effect and its own per-share dilution test value. */
export function securityEffect(security:DilutiveSecurity):SecurityEffect{
 if(security.type==='convertiblePreferred'){
  if(security.asConvertedShares<=0)throw new Error(`${security.name}: as-converted shares must be greater than zero.`);
  const numeratorEffect=security.totalDividends,denominatorEffect=security.asConvertedShares;
  return{name:security.name,numeratorEffect,denominatorEffect,perShareEffect:numeratorEffect/denominatorEffect,inTheMoney:true};
 }
 if(security.type==='convertibleDebt'){
  if(security.asConvertedShares<=0)throw new Error(`${security.name}: as-converted shares must be greater than zero.`);
  if(security.taxRate<0||security.taxRate>=1)throw new Error(`${security.name}: tax rate must be between 0 and 1.`);
  const numeratorEffect=security.annualInterest*(1-security.taxRate),denominatorEffect=security.asConvertedShares;
  return{name:security.name,numeratorEffect,denominatorEffect,perShareEffect:numeratorEffect/denominatorEffect,inTheMoney:true};
 }
 // options / warrants: treasury-stock method
 if(security.sharesIssuable<=0)throw new Error(`${security.name}: shares issuable must be greater than zero.`);
 if(security.exercisePrice<=0||security.averageMarketPrice<=0)throw new Error(`${security.name}: prices must be greater than zero.`);
 if(security.exercisePrice>=security.averageMarketPrice)return{name:security.name,numeratorEffect:0,denominatorEffect:0,perShareEffect:Infinity,inTheMoney:false};
 const proceeds=security.sharesIssuable*security.exercisePrice;
 const repurchasable=proceeds/security.averageMarketPrice;
 const denominatorEffect=security.sharesIssuable-repurchasable;
 return{name:security.name,numeratorEffect:0,denominatorEffect,perShareEffect:0,inTheMoney:true};
}

export type DilutedEpsStep={name:string;cumulativeNumerator:number;cumulativeDenominator:number;cumulativeEPS:number;included:boolean;reason:string};
export type DilutedEpsResult={basicEPS:number;dilutedEPS:number;includedSecurities:string[];excludedSecurities:string[];steps:DilutedEpsStep[]};

/** Applies the if-converted method (convertible debt/preferred) and treasury-stock method (options), testing each
 * potentially dilutive security sequentially in order of its own per-share effect (most dilutive first), excluding
 * any security whose inclusion would raise the running cumulative EPS (antidilutive). */
export function calculateDilutedEPS(inputs:EpsInputs,securities:DilutiveSecurity[]):DilutedEpsResult{
 const basicEPS=calculateBasicEPS(inputs);
 const effects=securities.map(securityEffect);
 const inTheMoney=effects.filter(e=>e.inTheMoney).sort((a,b)=>a.perShareEffect-b.perShareEffect);
 const outOfTheMoney=effects.filter(e=>!e.inTheMoney);
 let numerator=inputs.netIncome-inputs.preferredDividends,denominator=inputs.weightedAverageShares,cumulativeEPS=basicEPS;
 const included:string[]=[],excluded:string[]=[];
 const steps:DilutedEpsStep[]=[{name:'Basic EPS',cumulativeNumerator:numerator,cumulativeDenominator:denominator,cumulativeEPS,included:true,reason:'starting point'}];
 for(const effect of inTheMoney){
  const newNumerator=numerator+effect.numeratorEffect,newDenominator=denominator+effect.denominatorEffect;
  const newEPS=newNumerator/newDenominator;
  if(newEPS<=cumulativeEPS){
   numerator=newNumerator;denominator=newDenominator;cumulativeEPS=newEPS;
   included.push(effect.name);
   steps.push({name:effect.name,cumulativeNumerator:numerator,cumulativeDenominator:denominator,cumulativeEPS,included:true,reason:'dilutive: lowers cumulative EPS'});
  }else{
   excluded.push(effect.name);
   steps.push({name:effect.name,cumulativeNumerator:newNumerator,cumulativeDenominator:newDenominator,cumulativeEPS:newEPS,included:false,reason:'antidilutive: would raise cumulative EPS'});
  }
 }
 for(const effect of outOfTheMoney){excluded.push(effect.name);steps.push({name:effect.name,cumulativeNumerator:numerator,cumulativeDenominator:denominator,cumulativeEPS,included:false,reason:'out of the money: exercise price at or above average market price'})}
 return{basicEPS,dilutedEPS:cumulativeEPS,includedSecurities:included,excludedSecurities:excluded,steps};
}

export function IncomeStatementEPSExplorer(){
 const[netIncome,setNetIncome]=useState(12000000);
 const[preferredDividends,setPreferredDividends]=useState(0);
 const[weightedAverageShares,setWeightedAverageShares]=useState(5000000);
 const[securities,setSecurities]=useState<DilutiveSecurity[]>([
  {type:'options',name:'Employee options',sharesIssuable:50000,exercisePrice:20,averageMarketPrice:35},
  {type:'convertibleDebt',name:'Convertible bonds',annualInterest:1500000,taxRate:0.25,asConvertedShares:300000},
  {type:'convertiblePreferred',name:'Convertible preferred',totalDividends:250000,asConvertedShares:100000},
 ]);
 const result=useMemo(():DilutedEpsResult|{error:string}=>{
  try{return calculateDilutedEPS({netIncome,preferredDividends,weightedAverageShares},securities)}
  catch(err){return{error:err instanceof Error?err.message:'Invalid inputs.'}}
 },[netIncome,preferredDividends,weightedAverageShares,securities]);

 const updateSecurity=(index:number,patch:Partial<DilutiveSecurity>)=>setSecurities(prev=>prev.map((s,i)=>i===index?{...s,...patch} as DilutiveSecurity:s));

 return <div className="card mt-6 space-y-6">
  <section aria-labelledby="eps-inputs-heading">
   <h3 id="eps-inputs-heading">Basic EPS inputs</h3>
   <div className="mt-3 grid gap-3 sm:grid-cols-3">
    <label className="label" htmlFor="eps-net-income">Net income<input id="eps-net-income" type="number" className="mt-1 w-full rounded-lg border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={netIncome} onChange={e=>setNetIncome(Number(e.target.value))}/></label>
    <label className="label" htmlFor="eps-preferred-div">Preferred dividends<input id="eps-preferred-div" type="number" className="mt-1 w-full rounded-lg border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={preferredDividends} onChange={e=>setPreferredDividends(Number(e.target.value))}/></label>
    <label className="label" htmlFor="eps-shares">Weighted average shares<input id="eps-shares" type="number" className="mt-1 w-full rounded-lg border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={weightedAverageShares} onChange={e=>setWeightedAverageShares(Number(e.target.value))}/></label>
   </div>
  </section>
  <section aria-labelledby="eps-securities-heading">
   <h3 id="eps-securities-heading">Potentially dilutive securities</h3>
   <p className="muted mt-1 text-sm">Each security is tested individually, most-dilutive-first, against the running cumulative diluted EPS.</p>
   <div className="mt-3 space-y-3">
    {securities.map((s,i)=><div key={i} className="rounded-lg border p-3 dark:border-slate-600">
     <strong>{s.name}</strong> <span className="muted text-sm">({s.type==='convertiblePreferred'?'convertible preferred':s.type==='convertibleDebt'?'convertible debt':'options/warrants'})</span>
     <div className="mt-2 grid gap-2 sm:grid-cols-3">
      {s.type==='convertiblePreferred'&&<>
       <label className="label text-sm">Total dividends<input type="number" className="mt-1 w-full rounded-lg border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={s.totalDividends} onChange={e=>updateSecurity(i,{totalDividends:Number(e.target.value)})}/></label>
       <label className="label text-sm">As-converted shares<input type="number" className="mt-1 w-full rounded-lg border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={s.asConvertedShares} onChange={e=>updateSecurity(i,{asConvertedShares:Number(e.target.value)})}/></label>
      </>}
      {s.type==='convertibleDebt'&&<>
       <label className="label text-sm">Annual interest<input type="number" className="mt-1 w-full rounded-lg border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={s.annualInterest} onChange={e=>updateSecurity(i,{annualInterest:Number(e.target.value)})}/></label>
       <label className="label text-sm">Tax rate (0-1)<input type="number" step="0.01" className="mt-1 w-full rounded-lg border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={s.taxRate} onChange={e=>updateSecurity(i,{taxRate:Number(e.target.value)})}/></label>
       <label className="label text-sm">As-converted shares<input type="number" className="mt-1 w-full rounded-lg border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={s.asConvertedShares} onChange={e=>updateSecurity(i,{asConvertedShares:Number(e.target.value)})}/></label>
      </>}
      {s.type==='options'&&<>
       <label className="label text-sm">Shares issuable<input type="number" className="mt-1 w-full rounded-lg border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={s.sharesIssuable} onChange={e=>updateSecurity(i,{sharesIssuable:Number(e.target.value)})}/></label>
       <label className="label text-sm">Exercise price<input type="number" className="mt-1 w-full rounded-lg border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={s.exercisePrice} onChange={e=>updateSecurity(i,{exercisePrice:Number(e.target.value)})}/></label>
       <label className="label text-sm">Average market price<input type="number" className="mt-1 w-full rounded-lg border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={s.averageMarketPrice} onChange={e=>updateSecurity(i,{averageMarketPrice:Number(e.target.value)})}/></label>
      </>}
     </div>
    </div>)}
   </div>
  </section>
  <section aria-labelledby="eps-result-heading">
   <h3 id="eps-result-heading">Result</h3>
   <div role="status" className="mt-2">
    {'error' in result?<p className="text-red-700 dark:text-red-400">{result.error}</p>:<>
     <p><strong>Basic EPS:</strong> {result.basicEPS.toFixed(2)}</p>
     <p><strong>Diluted EPS:</strong> {result.dilutedEPS.toFixed(2)}</p>
     <p><strong>Included (dilutive):</strong> {result.includedSecurities.length?result.includedSecurities.join(', '):'none'}</p>
     <p><strong>Excluded (antidilutive or out of the money):</strong> {result.excludedSecurities.length?result.excludedSecurities.join(', '):'none'}</p>
     <table className="mt-3 w-full text-left text-sm">
      <thead><tr><th scope="col">Step</th><th scope="col">Cumulative EPS</th><th scope="col">Included?</th></tr></thead>
      <tbody>{result.steps.map((step,i)=><tr key={i}><td>{step.name}</td><td>{step.cumulativeEPS.toFixed(4)}</td><td>{step.included?'Yes':`No — ${step.reason}`}</td></tr>)}</tbody>
     </table>
    </>}
   </div>
  </section>
 </div>;
}

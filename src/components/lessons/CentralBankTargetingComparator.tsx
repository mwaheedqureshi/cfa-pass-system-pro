import {useState} from 'react';
export type TargetingRegime='inflation'|'exchangeRate'|'interestRate';
export function describeRegime(regime:TargetingRegime){
 if(regime==='inflation')return{label:'Inflation targeting',anchor:'Explicit inflation target, commonly near 2%',mechanism:'The central bank sets its policy rate to steer forecast inflation toward the published target over a medium-term horizon.',keyQualities:['Independence','Credibility','Transparency'],typicalLimitation:'Requires credible communication and functioning financial markets; harder in economies without a liquid bond market.'};
 if(regime==='exchangeRate')return{label:'Exchange rate targeting',anchor:'Fixed or banded exchange rate versus a reference currency',mechanism:'The central bank buys and sells foreign-exchange reserves and its own currency to defend the target, subordinating domestic interest rates to the peg.',keyQualities:['Credibility of the peg','Adequate FX reserves'],typicalLimitation:'Vulnerable to speculative attack if reserves or credibility are judged insufficient by markets.'};
 return{label:'Interest-rate (neutral-rate) stance reading',anchor:'Policy rate compared with the neutral rate',mechanism:'Stance is classified as contractionary, expansionary, or neutral by comparing the policy rate with the neutral rate (real trend growth plus long-run expected inflation).',keyQualities:['Accurate estimate of trend growth and long-run inflation'],typicalLimitation:'Not a dedicated targeting framework in its own right; used as a general stance lens applicable across regimes.'};
}
export function assessCentralBankQualities(operationallyIndependent:boolean,targetIndependent:boolean,transparent:boolean){
 if(![operationallyIndependent,targetIndependent,transparent].every(v=>typeof v==='boolean'))return{error:'Provide a yes/no value for each quality.'};
 const score=[operationallyIndependent,targetIndependent,transparent].filter(Boolean).length;
 const rating=score===3?'Strong: fully independent and transparent':score===2?'Solid, but missing one supporting quality':score===1?'Weak: most supporting qualities absent':'Very weak: none of the supporting qualities present';
 const independenceType=operationallyIndependent&&targetIndependent?'Operational and target independence':operationallyIndependent?'Operational independence only':targetIndependent?'Target independence only (unusual)':'No independence';
 return{score,rating,independenceType};
}
export function CentralBankTargetingComparator(){
 const[regime,setRegime]=useState<TargetingRegime>('inflation');
 const info=describeRegime(regime);
 const[operational,setOperational]=useState(true);
 const[target,setTarget]=useState(false);
 const[transparent,setTransparent]=useState(true);
 const assessment=assessCentralBankQualities(operational,target,transparent);
 return <section className="card">
  <h2>Central bank targeting comparator</h2>
  <p className="muted mt-2 text-sm">Compare inflation targeting, exchange rate targeting, and the neutral-rate-based reading of interest-rate stance, then assess a central bank's independence and transparency profile.</p>
  <label className="label max-w-xs">Targeting regime<select aria-label="Targeting regime" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={regime} onChange={e=>setRegime(e.target.value as TargetingRegime)}><option value="inflation">Inflation targeting</option><option value="exchangeRate">Exchange rate targeting</option><option value="interestRate">Interest-rate (neutral-rate) stance</option></select></label>
  <div className="mt-3 space-y-1 text-sm" aria-live="polite">
   <p><strong>{info.label}</strong></p>
   <p><strong>Anchor:</strong> {info.anchor}</p>
   <p><strong>Mechanism:</strong> {info.mechanism}</p>
   <p><strong>Key qualities:</strong> {info.keyQualities.join(', ')}</p>
   <p><strong>Typical limitation:</strong> {info.typicalLimitation}</p>
  </div>
  <div className="mt-5 border-t pt-4 dark:border-slate-700">
   <h3>Central bank quality assessment</h3>
   <div className="mt-2 flex flex-wrap gap-4 text-sm">
    <label className="flex items-center gap-2"><input type="checkbox" checked={operational} onChange={e=>setOperational(e.target.checked)}/> Operationally independent</label>
    <label className="flex items-center gap-2"><input type="checkbox" checked={target} onChange={e=>setTarget(e.target.checked)}/> Target independent</label>
    <label className="flex items-center gap-2"><input type="checkbox" checked={transparent} onChange={e=>setTransparent(e.target.checked)}/> Transparent (regular structured reporting)</label>
   </div>
   {'error' in assessment?<output className="mt-3 block font-semibold" aria-live="polite">{assessment.error}</output>:<>
    <p className="mt-3" aria-live="polite"><strong>{assessment.independenceType}.</strong> {assessment.rating}.</p>
    <svg viewBox="0 0 400 60" className="mt-2 w-full" role="img" aria-label={`Quality bar chart: score ${assessment.score} of 3`}>
     <title>Central bank quality score</title>
     {[operational,target,transparent].map((v,i)=><g key={i}><rect x={20+i*130} y={v?15:45} width="100" height={v?35:5} fill={v?'#1d4ed8':'#94a3b8'}/><text x={70+i*130} y="58" fontSize="10" textAnchor="middle">{['Operational','Target','Transparent'][i]}</text></g>)}
    </svg>
   </>}
  </div>
 </section>;
}

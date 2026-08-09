import {useState} from 'react';
export function classifyFiscalStance(priorBalancePctGdp:number,currentBalancePctGdp:number,neutralThresholdPct=0.1){
 if(!Number.isFinite(priorBalancePctGdp)||!Number.isFinite(currentBalancePctGdp))return{error:'Enter finite values for both budget balances.'};
 if(!Number.isFinite(neutralThresholdPct)||neutralThresholdPct<0)return{error:'Neutral threshold must be zero or a positive number.'};
 const change=currentBalancePctGdp-priorBalancePctGdp;
 const stance=Math.abs(change)<neutralThresholdPct?'Neutral':change<0?'Expansionary':'Contractionary';
 return{change,stance};
}
export function estimateStructuralBalance(headlineBalancePctGdp:number,outputGapPct:number,cyclicalSensitivity=0.5){
 if(![headlineBalancePctGdp,outputGapPct,cyclicalSensitivity].every(Number.isFinite))return{error:'Enter finite values for the headline balance, output gap, and cyclical sensitivity.'};
 if(cyclicalSensitivity<0)return{error:'Cyclical sensitivity cannot be negative.'};
 const cyclicalComponent=cyclicalSensitivity*outputGapPct;
 const structuralBalancePctGdp=headlineBalancePctGdp-cyclicalComponent;
 return{cyclicalComponent,structuralBalancePctGdp};
}
export function FiscalPolicyStanceComparator(){
 const[prior,setPrior]=useState('-2.0');
 const[current,setCurrent]=useState('-5.0');
 const stanceResult=classifyFiscalStance(Number(prior),Number(current));
 const[headline,setHeadline]=useState('-5.0');
 const[outputGap,setOutputGap]=useState('-6.0');
 const[sensitivity,setSensitivity]=useState('0.5');
 const structuralResult=estimateStructuralBalance(Number(headline),Number(outputGap),Number(sensitivity));
 return <section className="card">
  <h2>Fiscal policy stance comparator</h2>
  <p className="muted mt-2 text-sm">Enter a prior and current budget balance (as a percent of GDP; negative is a deficit) to classify the headline fiscal stance, then compare it with an illustrative structural-balance estimate that strips out the cyclical effect of the output gap.</p>
  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
   <label className="label">Prior balance (% of GDP)<input aria-label="Prior budget balance as percent of GDP" value={prior} onChange={e=>setPrior(e.target.value)} inputMode="decimal"/></label>
   <label className="label">Current balance (% of GDP)<input aria-label="Current budget balance as percent of GDP" value={current} onChange={e=>setCurrent(e.target.value)} inputMode="decimal"/></label>
  </div>
  {'error' in stanceResult?<output className="mt-4 block font-semibold" aria-live="polite">{stanceResult.error}</output>:<p className="mt-4" aria-live="polite"><strong>Headline stance:</strong> {stanceResult.stance} (balance changed by {stanceResult.change>=0?'+':''}{stanceResult.change.toFixed(2)} percentage points of GDP)</p>}
  <div className="mt-5 border-t pt-4 dark:border-slate-700">
   <h3>Headline versus structural balance</h3>
   <p className="muted mt-1 text-sm">The structural (cyclically adjusted) balance estimate below is an original, illustrative teaching model — not an official CFA-stated formula — built to show how much of a headline balance can reflect the business cycle rather than a discretionary policy choice.</p>
   <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
    <label className="label">Headline balance (% of GDP)<input aria-label="Headline budget balance as percent of GDP" value={headline} onChange={e=>setHeadline(e.target.value)} inputMode="decimal"/></label>
    <label className="label">Output gap (% of potential GDP)<input aria-label="Output gap as percent of potential GDP" value={outputGap} onChange={e=>setOutputGap(e.target.value)} inputMode="decimal"/></label>
    <label className="label">Cyclical sensitivity<input aria-label="Cyclical sensitivity of the budget balance to the output gap" value={sensitivity} onChange={e=>setSensitivity(e.target.value)} inputMode="decimal"/></label>
   </div>
   {'error' in structuralResult?<output className="mt-3 block font-semibold" aria-live="polite">{structuralResult.error}</output>:<div className="mt-3 space-y-1" aria-live="polite">
    <p>Cyclical component: {structuralResult.cyclicalComponent.toFixed(2)} pp of GDP</p>
    <p><strong>Estimated structural balance:</strong> {structuralResult.structuralBalancePctGdp.toFixed(2)}% of GDP (versus a headline balance of {Number(headline).toFixed(2)}%)</p>
    <svg viewBox="0 0 400 60" className="mt-1 w-full" role="img" aria-label={`Bar chart comparing headline balance of ${Number(headline).toFixed(2)} percent and structural balance of ${structuralResult.structuralBalancePctGdp.toFixed(2)} percent of GDP`}>
     <title>Headline versus estimated structural balance</title>
     <line x1="10" y1="30" x2="390" y2="30" stroke="currentColor" strokeOpacity="0.3"/>
     <rect x="60" y={Number(headline)>=0?30-Number(headline)*3:30} width="80" height={Math.abs(Number(headline))*3} fill="#94a3b8"/>
     <text x="100" y="55" fontSize="10" textAnchor="middle">Headline</text>
     <rect x="240" y={structuralResult.structuralBalancePctGdp>=0?30-structuralResult.structuralBalancePctGdp*3:30} width="80" height={Math.abs(structuralResult.structuralBalancePctGdp)*3} fill="#1d4ed8"/>
     <text x="280" y="55" fontSize="10" textAnchor="middle">Structural</text>
    </svg>
   </div>}
  </div>
 </section>;
}

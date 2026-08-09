import {useState} from 'react';
export function computeMultipliers(mpc:number,taxRate:number){
 if(!Number.isFinite(mpc)||!Number.isFinite(taxRate))return{error:'Enter finite values for MPC and the tax rate.'};
 if(mpc<=0||mpc>=1)return{error:'MPC must be between 0 and 1 (exclusive).'};
 if(taxRate<0||taxRate>=1)return{error:'Tax rate must be at least 0 and less than 1 (0% up to just under 100%).'};
 const effectiveRatio=mpc*(1-taxRate);
 if(effectiveRatio>=1)return{error:'This MPC and tax-rate combination does not produce a convergent multiplier.'};
 const simpleMultiplier=1/(1-mpc);
 const fiscalMultiplier=1/(1-effectiveRatio);
 return{simpleMultiplier,fiscalMultiplier,effectiveRatio};
}
export function computeBalancedBudgetImpact(mpc:number,deltaG:number){
 if(!Number.isFinite(mpc)||!Number.isFinite(deltaG))return{error:'Enter finite values for MPC and the spending change.'};
 if(mpc<=0||mpc>=1)return{error:'MPC must be between 0 and 1 (exclusive).'};
 const consumptionReduction=mpc*deltaG;
 const netInitialImpact=deltaG-consumptionReduction;
 const simpleMultiplier=1/(1-mpc);
 const totalImpact=netInitialImpact*simpleMultiplier;
 return{consumptionReduction,netInitialImpact,simpleMultiplier,totalImpact};
}
export function FiscalMultiplierExplorer(){
 const[mpcText,setMpcText]=useState('0.9');
 const[taxRateText,setTaxRateText]=useState('0.2');
 const result=computeMultipliers(Number(mpcText),Number(taxRateText));
 const[bbMpcText,setBbMpcText]=useState('0.9');
 const[deltaGText,setDeltaGText]=useState('200');
 const bb=computeBalancedBudgetImpact(Number(bbMpcText),Number(deltaGText));
 return <section className="card">
  <h2>Fiscal multiplier explorer</h2>
  <p className="muted mt-2 text-sm">Set the marginal propensity to consume (MPC) and the net tax rate to compute the simple multiplier and the fiscal multiplier, then run a balanced budget scenario to confirm it always equals one.</p>
  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
   <label className="label">MPC (0 to 1)<input aria-label="Marginal propensity to consume" value={mpcText} onChange={e=>setMpcText(e.target.value)} inputMode="decimal"/></label>
   <label className="label">Net tax rate (0 to just under 1)<input aria-label="Net tax rate" value={taxRateText} onChange={e=>setTaxRateText(e.target.value)} inputMode="decimal"/></label>
  </div>
  {'error' in result?<output className="mt-4 block font-semibold" aria-live="polite">{result.error}</output>:<div className="mt-4 space-y-2" aria-live="polite">
   <p><strong>Simple multiplier (t=0):</strong> {result.simpleMultiplier.toFixed(2)} · <strong>Fiscal multiplier:</strong> {result.fiscalMultiplier.toFixed(2)}</p>
   <p className="muted text-sm">Effective spending ratio each round is c(1−t) = {result.effectiveRatio.toFixed(3)}. Setting the tax rate to 0 collapses the fiscal multiplier to the simple multiplier.</p>
   <svg viewBox="0 0 400 60" className="mt-1 w-full" role="img" aria-label={`Bar chart comparing the simple multiplier of ${result.simpleMultiplier.toFixed(2)} and the fiscal multiplier of ${result.fiscalMultiplier.toFixed(2)}`}>
    <title>Simple multiplier versus fiscal multiplier</title>
    <rect x="60" y={55-Math.min(result.simpleMultiplier,12)*4} width="80" height={Math.min(result.simpleMultiplier,12)*4} fill="#94a3b8"/>
    <text x="100" y="58" fontSize="10" textAnchor="middle">Simple</text>
    <rect x="240" y={55-Math.min(result.fiscalMultiplier,12)*4} width="80" height={Math.min(result.fiscalMultiplier,12)*4} fill="#1d4ed8"/>
    <text x="280" y="58" fontSize="10" textAnchor="middle">Fiscal</text>
   </svg>
  </div>}
  <div className="mt-5 border-t pt-4 dark:border-slate-700">
   <h3>Balanced budget scenario</h3>
   <p className="muted mt-1 text-sm">Enter MPC and a balanced spending/tax increase (ΔG = ΔT) to see the initial net impact and the total compounded effect.</p>
   <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
    <label className="label">MPC (0 to 1)<input aria-label="Balanced budget MPC" value={bbMpcText} onChange={e=>setBbMpcText(e.target.value)} inputMode="decimal"/></label>
    <label className="label">ΔG = ΔT<input aria-label="Balanced change in spending and taxes" value={deltaGText} onChange={e=>setDeltaGText(e.target.value)} inputMode="decimal"/></label>
   </div>
   {'error' in bb?<output className="mt-3 block font-semibold" aria-live="polite">{bb.error}</output>:<div className="mt-3 space-y-1" aria-live="polite">
    <p>Direct ΔG effect: {Number(deltaGText).toFixed(1)} · Consumption reduction (c×ΔT): {bb.consumptionReduction.toFixed(1)} · Net initial impact: {bb.netInitialImpact.toFixed(1)}</p>
    <p><strong>Total compounded effect:</strong> {bb.totalImpact.toFixed(1)} (always equal to ΔG — the balanced budget multiplier is exactly 1)</p>
   </div>}
  </div>
 </section>;
}

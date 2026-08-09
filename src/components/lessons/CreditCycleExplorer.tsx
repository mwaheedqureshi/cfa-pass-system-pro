import {useState} from 'react';
export function computeCreditCycle(creditStart:number,creditEnd:number,gdpStart:number,gdpEnd:number){
 const values=[creditStart,creditEnd,gdpStart,gdpEnd];
 if(!values.every(Number.isFinite))return{error:'Enter finite values for all four inputs.'};
 if(values.some(v=>v<=0))return{error:'All values must be positive.'};
 const ratioStart=creditStart/gdpStart,ratioEnd=creditEnd/gdpEnd;
 const creditGrowth=(creditEnd-creditStart)/creditStart*100;
 const gdpGrowth=(gdpEnd-gdpStart)/gdpStart*100;
 const ratioChangePp=(ratioEnd-ratioStart)*100;
 const stage=ratioChangePp>2?'Loosening: credit is expanding faster than the economy':ratioChangePp<-2?'Tightening: credit is contracting relative to the economy':'Broadly stable relative to the size of the economy';
 const elevatedRisk=ratioChangePp>10;
 return{ratioStart,ratioEnd,creditGrowth,gdpGrowth,ratioChangePp,stage,elevatedRisk};
}
export function CreditCycleExplorer(){
 const[creditStart,setCreditStart]=useState('148');
 const[creditEnd,setCreditEnd]=useState('168');
 const[gdpStart,setGdpStart]=useState('200');
 const[gdpEnd,setGdpEnd]=useState('206');
 const result=computeCreditCycle(Number(creditStart),Number(creditEnd),Number(gdpStart),Number(gdpEnd));
 return <section className="card">
  <h2>Credit cycle explorer</h2>
  <p className="muted mt-2 text-sm">Enter outstanding private-sector credit and nominal GDP for a starting and an ending period to compute the credit-to-GDP ratio, credit and GDP growth, and an illustrative read on whether credit conditions are loosening or tightening relative to the real economy.</p>
  <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
   <label className="label">Credit — start<input aria-label="Outstanding private-sector credit, starting period" value={creditStart} onChange={e=>setCreditStart(e.target.value)} inputMode="decimal"/></label>
   <label className="label">Credit — end<input aria-label="Outstanding private-sector credit, ending period" value={creditEnd} onChange={e=>setCreditEnd(e.target.value)} inputMode="decimal"/></label>
   <label className="label">Nominal GDP — start<input aria-label="Nominal GDP, starting period" value={gdpStart} onChange={e=>setGdpStart(e.target.value)} inputMode="decimal"/></label>
   <label className="label">Nominal GDP — end<input aria-label="Nominal GDP, ending period" value={gdpEnd} onChange={e=>setGdpEnd(e.target.value)} inputMode="decimal"/></label>
  </div>
  {'error' in result?<output className="mt-4 block font-semibold" aria-live="polite">{result.error}</output>:<div className="mt-4 space-y-2" aria-live="polite">
   <p><strong>Credit-to-GDP:</strong> {(result.ratioStart*100).toFixed(1)}% → {(result.ratioEnd*100).toFixed(1)}% ({result.ratioChangePp>=0?'+':''}{result.ratioChangePp.toFixed(1)} pp)</p>
   <p><strong>Credit growth:</strong> {result.creditGrowth.toFixed(1)}% · <strong>GDP growth:</strong> {result.gdpGrowth.toFixed(1)}%</p>
   <p><strong>Illustrative credit-cycle read:</strong> {result.stage}.</p>
   {result.elevatedRisk&&<p className="text-sm text-amber-700 dark:text-amber-300">A credit-to-GDP ratio rising this quickly resembles the kind of strong credit-cycle peak the reading associates with elevated later risk — an illustrative flag, not an official CFA threshold.</p>}
   <svg viewBox="0 0 400 60" className="mt-1 w-full" role="img" aria-label={`Bar chart comparing starting and ending credit-to-GDP ratio: ${(result.ratioStart*100).toFixed(1)} percent to ${(result.ratioEnd*100).toFixed(1)} percent`}>
    <title>Credit-to-GDP ratio, start versus end</title>
    <rect x="60" y={50-result.ratioStart*40} width="80" height={result.ratioStart*40} fill="#94a3b8"/>
    <text x="100" y="58" fontSize="10" textAnchor="middle">Start</text>
    <rect x="240" y={50-result.ratioEnd*40} width="80" height={result.ratioEnd*40} fill="#1d4ed8"/>
    <text x="280" y="58" fontSize="10" textAnchor="middle">End</text>
   </svg>
   <p className="muted text-sm">Classification bands (loosening/stable/tightening) and the elevated-risk flag are illustrative interpretive aids built on the module's qualitative description of credit-cycle behavior, not asserted as precise official CFA thresholds.</p>
  </div>}
 </section>;
}

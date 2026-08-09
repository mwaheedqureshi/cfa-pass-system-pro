import {useState} from 'react';
export function computeConcentration(shares:number[],topN:number){
 if(!shares.every(Number.isFinite)||shares.length<2)return{error:'Enter at least two finite market shares.'};
 if(shares.some(s=>s<0))return{error:'Market shares cannot be negative.'};
 const total=shares.reduce((sum,s)=>sum+s,0);
 if(total>100.0001)return{error:'Market shares cannot sum to more than 100.'};
 if(!Number.isInteger(topN)||topN<1)return{error:'Choose a whole-number N of at least 1.'};
 const sorted=[...shares].sort((a,b)=>b-a);
 const n=Math.min(topN,sorted.length);
 const concentrationRatio=sorted.slice(0,n).reduce((sum,s)=>sum+s,0);
 const hhi=sorted.reduce((sum,s)=>sum+s*s,0);
 const classification=hhi<1500?'Unconcentrated':hhi<=2500?'Moderately concentrated':'Highly concentrated';
 return{sorted,concentrationRatio,n,hhi,classification,total};
}
export function simulateMerger(shares:number[],i:number,j:number){
 if(i===j||i<0||j<0||i>=shares.length||j>=shares.length)return{error:'Choose two different firms to merge.'};
 const a=shares[i],b=shares[j];
 const deltaHHI=2*a*b;
 const merged=[...shares];
 const lo=Math.min(i,j),hi=Math.max(i,j);
 merged[lo]=a+b;
 merged.splice(hi,1);
 return{deltaHHI,merged};
}
export function ConcentrationMeasureExplorer(){
 const[shareText,setShareText]=useState('32,24,18,14,12');
 const[topN,setTopN]=useState('4');
 const shares=shareText.split(',').map(s=>Number(s.trim())).filter(s=>!Number.isNaN(s));
 const result=computeConcentration(shares,Number(topN));
 const[mergeA,setMergeA]=useState('0');
 const[mergeB,setMergeB]=useState('1');
 const merger=simulateMerger(shares,Number(mergeA),Number(mergeB));
 return <section className="card">
  <h2>Concentration measure explorer</h2>
  <p className="muted mt-2 text-sm">Enter comma-separated market shares as percentages (2 to 8 firms) to compute the N-firm concentration ratio and the Herfindahl–Hirschman Index, then simulate a two-firm merger.</p>
  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
   <label className="label">Market shares (%)<input aria-label="Market shares as comma-separated percentages" value={shareText} onChange={e=>setShareText(e.target.value)}/></label>
   <label className="label">N for concentration ratio<input aria-label="N for concentration ratio" value={topN} onChange={e=>setTopN(e.target.value)} inputMode="numeric"/></label>
  </div>
  {'error' in result?<output className="mt-4 block font-semibold" aria-live="polite">{result.error}</output>:<div className="mt-4 space-y-2" aria-live="polite">
   <p><strong>CR{result.n}:</strong> {result.concentrationRatio.toFixed(1)}% · <strong>HHI:</strong> {result.hhi.toFixed(0)} · <strong>Classification:</strong> {result.classification}</p>
   <p className="muted text-sm">Classification uses illustrative reference bands (HHI below 1,500 unconcentrated; 1,500–2,500 moderately concentrated; above 2,500 highly concentrated) and is not itself an official CFA learning outcome.</p>
   <svg viewBox="0 0 400 60" className="mt-1 w-full" role="img" aria-label={`Bar chart of sorted market shares: ${result.sorted.map(s=>s.toFixed(1)).join(', ')} percent`}>
    <title>Sorted market shares</title>
    {result.sorted.map((s,i)=><g key={i}><rect x={10+i*48} y={50-s*0.4} width="36" height={s*0.4} fill={i<result.n?'#1d4ed8':'#94a3b8'}/><text x={28+i*48} y="58" fontSize="10" textAnchor="middle">{s.toFixed(0)}%</text></g>)}
   </svg>
   <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
    <label className="label">Merge firm index A<input aria-label="Merge firm index A" value={mergeA} onChange={e=>setMergeA(e.target.value)} inputMode="numeric"/></label>
    <label className="label">Merge firm index B<input aria-label="Merge firm index B" value={mergeB} onChange={e=>setMergeB(e.target.value)} inputMode="numeric"/></label>
   </div>
   {'error' in merger?<output className="mt-2 block" aria-live="polite">{merger.error}</output>:<p className="mt-2" aria-live="polite"><strong>Merger effect:</strong> ΔHHI = {merger.deltaHHI.toFixed(1)}; new HHI ≈ {(result.hhi+merger.deltaHHI).toFixed(0)}.</p>}
  </div>}
 </section>;
}

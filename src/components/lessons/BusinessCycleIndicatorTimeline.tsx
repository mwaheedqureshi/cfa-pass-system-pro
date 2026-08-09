import {useState} from 'react';
export function classifyComponent(percentChange:number,threshold=0.05):number{
 if(percentChange>threshold)return 1;
 if(percentChange<-threshold)return 0;
 return 0.5;
}
export function computeDiffusionIndex(percentChanges:number[],threshold=0.05){
 if(!percentChanges.length||!percentChanges.every(Number.isFinite))return{error:'Enter at least one finite percent change for each component.'};
 const scores=percentChanges.map(p=>classifyComponent(p,threshold));
 const sum=scores.reduce((a,b)=>a+b,0);
 const index=(sum/percentChanges.length)*100;
 const rising=scores.filter(s=>s===1).length,flat=scores.filter(s=>s===0.5).length,falling=scores.filter(s=>s===0).length;
 return{index,rising,flat,falling,scores};
}
export type IndicatorCategory='leading'|'coincident'|'lagging';
export function indicatorTiming(category:IndicatorCategory){
 if(category==='leading')return{offsetMonths:-6,label:'Typically turns before the economy'};
 if(category==='lagging')return{offsetMonths:6,label:'Typically turns after the economy'};
 return{offsetMonths:0,label:'Typically turns with the economy'};
}
export function BusinessCycleIndicatorTimeline(){
 const[changeText,setChangeText]=useState('1.2,-0.3,0.4,0.02,2.1');
 const[threshold,setThreshold]=useState('0.05');
 const changes=changeText.split(',').map(s=>Number(s.trim())).filter(s=>!Number.isNaN(s));
 const result=computeDiffusionIndex(changes,Number(threshold));
 const[category,setCategory]=useState<IndicatorCategory>('leading');
 const timing=indicatorTiming(category);
 return <section className="card">
  <h2>Business cycle indicator timeline</h2>
  <p className="muted mt-2 text-sm">Enter comma-separated percent changes for a composite index's components to calculate a diffusion index, then explore how leading, coincident, and lagging indicators are expected to sequence around a turning point.</p>
  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
   <label className="label">Component percent changes<input aria-label="Component percent changes, comma-separated" value={changeText} onChange={e=>setChangeText(e.target.value)}/></label>
   <label className="label">Flat threshold (%)<input aria-label="Flat threshold percent" value={threshold} onChange={e=>setThreshold(e.target.value)} inputMode="decimal"/></label>
  </div>
  {'error' in result?<output className="mt-4 block font-semibold" aria-live="polite">{result.error}</output>:<div className="mt-4 space-y-2" aria-live="polite">
   <p><strong>Diffusion index:</strong> {result.index.toFixed(1)} · <strong>Rising:</strong> {result.rising} · <strong>Flat:</strong> {result.flat} · <strong>Falling:</strong> {result.falling}</p>
   <p className="muted text-sm">The diffusion index measures how many components are moving in the same direction as the overall index — breadth, not magnitude.</p>
   <svg viewBox="0 0 400 60" className="mt-1 w-full" role="img" aria-label={`Bar chart of component percent changes: ${changes.map(c=>c.toFixed(2)).join(', ')}`}>
    <title>Component percent changes</title>
    {result.scores.map((score,i)=><g key={i}><rect x={10+i*48} y={score===1?10:score===0.5?25:40} width="36" height={score===1?40:score===0.5?25:10} fill={score===1?'#15803d':score===0.5?'#94a3b8':'#b91c1c'}/><text x={28+i*48} y="58" fontSize="10" textAnchor="middle">{changes[i].toFixed(1)}%</text></g>)}
   </svg>
  </div>}
  <div className="mt-5 border-t pt-4 dark:border-slate-700">
   <label className="label max-w-xs">Indicator category<select aria-label="Indicator category" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={category} onChange={e=>setCategory(e.target.value as IndicatorCategory)}><option value="leading">Leading</option><option value="coincident">Coincident</option><option value="lagging">Lagging</option></select></label>
   <p className="mt-3" aria-live="polite"><strong>{category[0].toUpperCase()+category.slice(1)} indicator:</strong> {timing.label}.</p>
   <svg viewBox="0 0 400 50" className="mt-2 w-full" role="img" aria-label={`Timeline showing a ${category} indicator turning ${timing.offsetMonths===0?'with':timing.offsetMonths<0?'before':'after'} the economy`}>
    <title>Illustrative indicator timing relative to a turning point</title>
    <line x1="10" y1="25" x2="390" y2="25" stroke="currentColor" strokeOpacity="0.3"/>
    <circle cx="200" cy="25" r="5" fill="#1d4ed8"/>
    <text x="200" y="45" fontSize="10" textAnchor="middle">Economic turning point</text>
    <circle cx={200+timing.offsetMonths*15} cy="25" r="5" fill="#b91c1c"/>
    <text x={200+timing.offsetMonths*15} y="12" fontSize="10" textAnchor="middle">{category}</text>
   </svg>
   <p className="muted mt-2 text-sm">The illustrated lead/lag spacing is a teaching approximation to show relative sequencing, not an official CFA-specified time offset.</p>
  </div>
 </section>;
}

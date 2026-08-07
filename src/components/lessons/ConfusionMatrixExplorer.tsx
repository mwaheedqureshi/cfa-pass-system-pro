import {useMemo,useState} from 'react';
import {confusionMetrics} from '../../services/mlMetricsService';

const show=(x:number|null)=>x===null?'undefined':`${(x*100).toFixed(1)}%`;

export function ConfusionMatrixExplorer(){
 const[tp,setTp]=useState(40),[fp,setFp]=useState(10),[tn,setTn]=useState(30),[fn,setFn]=useState(20);
 const result=useMemo(()=>confusionMetrics({tp,fp,tn,fn}),[tp,fp,tn,fn]);
 const fields=[['True positives',tp,setTp],['False positives',fp,setFp],['True negatives',tn,setTn],['False negatives',fn,setFn]] as const;
 return <section className="card" aria-labelledby="confusion-title">
  <h2 id="confusion-title">Confusion matrix explorer <span className="text-xs font-normal">(supplementary)</span></h2>
  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">{fields.map(([label,value,set])=><label className="label" key={label}>{label}<input type="number" min="0" step="1" inputMode="numeric" value={value} onChange={event=>set(Number(event.target.value))}/></label>)}</div>
  {'error'in result?<p role="alert" className="text-red-600">{result.error}</p>:<p className="mt-3" aria-live="polite">Accuracy {show(result.accuracy)} · Precision {show(result.precision)} · Recall {show(result.recall)} · Specificity {show(result.specificity)} · F1 {show(result.f1)}</p>}
  <p className="muted mt-2 text-xs">With rare positive classes, high accuracy can coexist with poor detection. Undefined metrics require explicit handling.</p>
 </section>;
}

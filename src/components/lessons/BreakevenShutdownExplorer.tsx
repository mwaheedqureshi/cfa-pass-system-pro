import {useState} from 'react';
export function evaluateBreakevenShutdown({price,variableCost,fixedCost,quantity}:{price:number;variableCost:number;fixedCost:number;quantity:number}){
 if(![price,variableCost,fixedCost,quantity].every(Number.isFinite))return{error:'Enter finite numbers for every field.'};
 if(fixedCost<0||quantity<0)return{error:'Fixed cost and quantity cannot be negative.'};
 if(price<0||variableCost<0)return{error:'Price and variable cost cannot be negative.'};
 const contribution=price-variableCost;
 const shutdown=price<variableCost;
 const breakevenQuantity=contribution>0?fixedCost/contribution:null;
 const totalRevenue=price*quantity;
 const totalVariableCost=variableCost*quantity;
 const totalCost=fixedCost+totalVariableCost;
 const profit=totalRevenue-totalCost;
 let status:string;
 if(shutdown)status='Shut down: price is below variable cost per unit, so operating would lose more than fixed cost alone.';
 else if(contribution===0)status='Indifferent: price exactly equals variable cost, so operating neither adds to nor reduces the fixed-cost loss.';
 else if(profit>=0)status='Operate profitably: revenue covers total cost at this quantity.';
 else status='Operate at a smaller loss than shutdown: revenue covers variable cost and part of fixed cost.';
 return{contribution,breakevenQuantity,totalRevenue,totalVariableCost,totalCost,profit,shutdown,status};
}
type Field='price'|'variableCost'|'fixedCost'|'quantity';
const labels:Record<Field,string>={price:'Price per unit',variableCost:'Variable cost per unit',fixedCost:'Fixed cost',quantity:'Current quantity'};
export function BreakevenShutdownExplorer(){
 const[values,setValues]=useState<Record<Field,string>>({price:'75',variableCost:'45',fixedCost:'180000',quantity:'5000'});
 const numeric={price:Number(values.price),variableCost:Number(values.variableCost),fixedCost:Number(values.fixedCost),quantity:Number(values.quantity)};
 const result=evaluateBreakevenShutdown(numeric);
 return <section className="card">
  <h2>Breakeven and shutdown explorer</h2>
  <p className="muted mt-2 text-sm">Enter a linear price and cost structure to find the breakeven quantity and the short-run operate-or-shut-down decision.</p>
  <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
   {(Object.keys(labels) as Field[]).map(key=><label className="label" key={key}>{labels[key]}<input aria-label={labels[key]} value={values[key]} onChange={e=>setValues({...values,[key]:e.target.value})} inputMode="decimal"/></label>)}
  </div>
  {'error' in result?<output className="mt-4 block font-semibold" aria-live="polite">{result.error}</output>:<div className="mt-4 space-y-2" aria-live="polite">
   <p><strong>Unit contribution:</strong> {result.contribution.toFixed(2)}</p>
   <p><strong>Breakeven quantity:</strong> {result.breakevenQuantity===null?'Not defined (price does not exceed variable cost)':result.breakevenQuantity.toFixed(0)}</p>
   <p><strong>Total revenue:</strong> {result.totalRevenue.toFixed(0)} · <strong>Total cost:</strong> {result.totalCost.toFixed(0)} · <strong>Profit:</strong> {result.profit.toFixed(0)}</p>
   <p className="font-semibold">{result.status}</p>
   <svg viewBox="0 0 400 90" className="mt-2 w-full" role="img" aria-label={`Number line comparing current quantity ${numeric.quantity} with breakeven quantity ${result.breakevenQuantity===null?'undefined':result.breakevenQuantity.toFixed(0)}`}>
    <title>Quantity versus breakeven</title>
    <line x1="20" y1="45" x2="380" y2="45" stroke="currentColor"/>
    {result.breakevenQuantity!==null&&result.breakevenQuantity>0&&<>
     <line x1={20+Math.min(360,(result.breakevenQuantity/Math.max(numeric.quantity,result.breakevenQuantity,1))*360)} y1="30" x2={20+Math.min(360,(result.breakevenQuantity/Math.max(numeric.quantity,result.breakevenQuantity,1))*360)} y2="60" stroke="#1d4ed8" strokeWidth="3"/>
     <text x={20+Math.min(360,(result.breakevenQuantity/Math.max(numeric.quantity,result.breakevenQuantity,1))*360)} y="22" textAnchor="middle" fontSize="12">Breakeven</text>
    </>}
    <line x1={20+Math.min(360,(numeric.quantity/Math.max(numeric.quantity,result.breakevenQuantity??numeric.quantity,1))*360)} y1="30" x2={20+Math.min(360,(numeric.quantity/Math.max(numeric.quantity,result.breakevenQuantity??numeric.quantity,1))*360)} y2="60" stroke="#b45309" strokeWidth="3" strokeDasharray="4 3"/>
    <text x={20+Math.min(360,(numeric.quantity/Math.max(numeric.quantity,result.breakevenQuantity??numeric.quantity,1))*360)} y="80" textAnchor="middle" fontSize="12">Current Q</text>
   </svg>
  </div>}
 </section>;
}

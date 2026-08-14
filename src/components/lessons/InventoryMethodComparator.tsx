import{useMemo,useState}from'react';

export type InventoryLayer={units:number;unitCost:number};
const exampleLayers:InventoryLayer[]=[{units:100,unitCost:10},{units:100,unitCost:12},{units:100,unitCost:14}];
export function compareInventoryMethods(layers:InventoryLayer[],unitsSold:number){
 const totalUnits=layers.reduce((s,x)=>s+x.units,0),totalCost=layers.reduce((s,x)=>s+x.units*x.unitCost,0),sold=Math.max(0,Math.min(unitsSold,totalUnits));
 const consume=(ordered:InventoryLayer[])=>{let remaining=sold,cogs=0;for(const x of ordered){const used=Math.min(remaining,x.units);cogs+=used*x.unitCost;remaining-=used}return cogs};
 const fifoCogs=consume(layers),lifoCogs=consume([...layers].reverse()),averageCost=totalUnits?totalCost/totalUnits:0;
 return{totalUnits,totalCost,fifo:{cogs:fifoCogs,ending:totalCost-fifoCogs},lifo:{cogs:lifoCogs,ending:totalCost-lifoCogs},weightedAverage:{unitCost:averageCost,cogs:sold*averageCost,ending:totalCost-sold*averageCost}};
}
export function InventoryMethodComparator(){const[unitsSold,setUnitsSold]=useState(180);const result=useMemo(()=>compareInventoryMethods(exampleLayers,unitsSold),[unitsSold]);return <div className="card"><h3>Inventory method comparator</h3><p className="muted mt-1 text-sm">Compare periodic FIFO, LIFO, and weighted-average allocations for rising purchase costs.</p><label className="label mt-3 block" htmlFor="inventory-units-sold">Units sold: {unitsSold}</label><input id="inventory-units-sold" type="range" min="0" max="300" step="10" value={unitsSold} onChange={e=>setUnitsSold(Number(e.target.value))} className="w-full"/><div className="mt-3 overflow-x-auto"><table className="w-full text-sm"><thead><tr><th>Method</th><th>COGS</th><th>Ending inventory</th></tr></thead><tbody>{[['FIFO',result.fifo],['LIFO',result.lifo],['Weighted average',result.weightedAverage]].map(([name,value])=><tr key={String(name)}><td>{String(name)}</td><td>{(value as {cogs:number}).cogs.toFixed(2)}</td><td>{(value as {ending:number}).ending.toFixed(2)}</td></tr>)}</tbody></table></div></div>}

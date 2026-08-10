import {useState} from 'react';
export type RestrictionType='tariff'|'quota';
export function calculateTradeRestrictionWelfare(worldPrice:number,restrictedPrice:number,freeTradeSupply:number,restrictedSupply:number,restrictedDemand:number,freeTradeDemand:number,restrictionType:RestrictionType){
 const inputs=[worldPrice,restrictedPrice,freeTradeSupply,restrictedSupply,restrictedDemand,freeTradeDemand];
 if(!inputs.every(Number.isFinite))return{error:'Enter finite numbers for the price and quantity fields.'};
 if(worldPrice<=0||restrictedPrice<=0)return{error:'Prices must be positive.'};
 if(restrictedPrice<=worldPrice)return{error:'The restricted price must be higher than the world price (a tariff or quota raises the domestic price).'};
 if(freeTradeSupply<0||restrictedSupply<0||restrictedDemand<0||freeTradeDemand<0)return{error:'Quantities cannot be negative.'};
 if(restrictedSupply<freeTradeSupply)return{error:'Restricted-price domestic supply cannot be lower than free-trade domestic supply (a higher price should not reduce domestic production).'};
 if(restrictedDemand>freeTradeDemand)return{error:'Restricted-price domestic demand cannot be higher than free-trade domestic demand (a higher price should not raise domestic consumption).'};
 if(restrictedSupply>restrictedDemand)return{error:'Restricted-price domestic supply cannot exceed restricted-price domestic demand (imports cannot be negative).'};
 if(freeTradeSupply>freeTradeDemand)return{error:'Free-trade domestic supply cannot exceed free-trade domestic demand (there must be positive imports before the restriction).'};
 const deltaP=restrictedPrice-worldPrice;
 const csLoss=deltaP*restrictedDemand+0.5*deltaP*(freeTradeDemand-restrictedDemand);
 const psGain=deltaP*freeTradeSupply+0.5*deltaP*(restrictedSupply-freeTradeSupply);
 const revenueOrRent=deltaP*(restrictedDemand-restrictedSupply);
 const deadweightLoss=0.5*deltaP*(restrictedSupply-freeTradeSupply)+0.5*deltaP*(freeTradeDemand-restrictedDemand);
 const revenueOrRentLabel=restrictionType==='tariff'?'Government tariff revenue':'Quota rent (may be captured domestically or by the foreign exporter)';
 return{csLoss,psGain,revenueOrRent,revenueOrRentLabel,deadweightLoss,nationalWelfareChange:-deadweightLoss};
}
export function TradeRestrictionWelfareDiagram(){
 const[restrictionType,setRestrictionType]=useState<RestrictionType>('tariff');
 const[worldPrice,setWorldPrice]=useState('2.00');
 const[restrictedPrice,setRestrictedPrice]=useState('2.50');
 const[freeTradeSupply,setFreeTradeSupply]=useState('400000');
 const[restrictedSupply,setRestrictedSupply]=useState('460000');
 const[restrictedDemand,setRestrictedDemand]=useState('640000');
 const[freeTradeDemand,setFreeTradeDemand]=useState('700000');
 const result=calculateTradeRestrictionWelfare(Number(worldPrice),Number(restrictedPrice),Number(freeTradeSupply),Number(restrictedSupply),Number(restrictedDemand),Number(freeTradeDemand),restrictionType);
 return <section className="card">
  <h2>Trade restriction welfare diagram</h2>
  <p className="muted mt-2 text-sm">Enter the world price, the domestic price after a tariff or equivalent quota, and the four quantity points to compute the welfare effect on consumer surplus, producer surplus, government revenue or quota rent, and deadweight loss.</p>
  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
   <label className="label">Restriction type<select aria-label="Restriction type" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={restrictionType} onChange={e=>setRestrictionType(e.target.value as RestrictionType)}><option value="tariff">Tariff</option><option value="quota">Quota</option></select></label>
   <label className="label">World price (P*)<input aria-label="World price" value={worldPrice} onChange={e=>setWorldPrice(e.target.value)} inputMode="decimal"/></label>
   <label className="label">Restricted domestic price (Pt)<input aria-label="Restricted domestic price" value={restrictedPrice} onChange={e=>setRestrictedPrice(e.target.value)} inputMode="decimal"/></label>
   <label className="label">Free-trade domestic supply (Qs at P*)<input aria-label="Free trade domestic supply" value={freeTradeSupply} onChange={e=>setFreeTradeSupply(e.target.value)} inputMode="decimal"/></label>
   <label className="label">Restricted domestic supply (Qs at Pt)<input aria-label="Restricted domestic supply" value={restrictedSupply} onChange={e=>setRestrictedSupply(e.target.value)} inputMode="decimal"/></label>
   <label className="label">Restricted domestic demand (Qd at Pt)<input aria-label="Restricted domestic demand" value={restrictedDemand} onChange={e=>setRestrictedDemand(e.target.value)} inputMode="decimal"/></label>
   <label className="label">Free-trade domestic demand (Qd at P*)<input aria-label="Free trade domestic demand" value={freeTradeDemand} onChange={e=>setFreeTradeDemand(e.target.value)} inputMode="decimal"/></label>
  </div>
  {'error' in result?<output className="mt-4 block font-semibold" aria-live="polite">{result.error}</output>:<div className="mt-4 space-y-2" aria-live="polite">
   <p>Consumer surplus loss: {result.csLoss.toLocaleString(undefined,{maximumFractionDigits:2})}</p>
   <p>Producer surplus gain: {result.psGain.toLocaleString(undefined,{maximumFractionDigits:2})}</p>
   <p>{result.revenueOrRentLabel}: {result.revenueOrRent.toLocaleString(undefined,{maximumFractionDigits:2})}</p>
   <p><strong>Deadweight loss:</strong> {result.deadweightLoss.toLocaleString(undefined,{maximumFractionDigits:2})}</p>
   <p className="muted text-sm">National welfare change: {result.nationalWelfareChange.toLocaleString(undefined,{maximumFractionDigits:2})} (equal to −deadweight loss, regardless of who captures the revenue or rent)</p>
   <svg viewBox="0 0 220 160" className="mt-2 w-full max-w-sm" role="img" aria-label="Supply and demand diagram showing the four welfare regions A, B, C, and D between the world price and the restricted domestic price">
    <title>Welfare effects of a tariff or quota</title>
    <line x1="20" y1="10" x2="20" y2="140" stroke="currentColor" strokeOpacity="0.5"/>
    <line x1="20" y1="140" x2="210" y2="140" stroke="currentColor" strokeOpacity="0.5"/>
    <line x1="30" y1="20" x2="120" y2="130" stroke="#1d4ed8" strokeWidth="2"/>
    <line x1="30" y1="130" x2="200" y2="20" stroke="#b91c1c" strokeWidth="2"/>
    <rect x="60" y="60" width="25" height="40" fill="#1d4ed8" fillOpacity="0.3"/>
    <text x="72" y="82" fontSize="9" textAnchor="middle">A</text>
    <rect x="85" y="60" width="15" height="40" fill="#f59e0b" fillOpacity="0.3"/>
    <text x="92" y="82" fontSize="9" textAnchor="middle">B</text>
    <rect x="100" y="60" width="30" height="40" fill="#16a34a" fillOpacity="0.3"/>
    <text x="115" y="82" fontSize="9" textAnchor="middle">C</text>
    <rect x="130" y="60" width="15" height="40" fill="#f59e0b" fillOpacity="0.3"/>
    <text x="137" y="82" fontSize="9" textAnchor="middle">D</text>
    <text x="18" y="58" fontSize="8" textAnchor="end">Pt</text>
    <text x="18" y="102" fontSize="8" textAnchor="end">P*</text>
    <text x="115" y="152" fontSize="8" textAnchor="middle">Quantity</text>
   </svg>
   <p className="muted text-sm">A = producer surplus gain. B + D = deadweight loss. C = government revenue (tariff) or quota rent (quota).</p>
  </div>}
 </section>;
}

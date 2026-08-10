import {useState} from 'react';
export function classifyTradingBloc(commonExternalTariff:boolean,freeFactorMobility:boolean,commonEconomicPolicy:boolean,commonCurrency:boolean){
 if(freeFactorMobility&&!commonExternalTariff)return{error:'Free movement of factors of production without a common external tariff is not a standard integration level: a common market builds on a customs union, so a common external tariff must come first.'};
 if(commonEconomicPolicy&&!freeFactorMobility)return{error:'Common economic institutions and policy coordination without free factor mobility is not a standard integration level: an economic union builds on a common market, so free factor mobility must come first.'};
 if(commonCurrency&&!commonEconomicPolicy)return{error:'A shared currency without common economic institutions and policy coordination is not a standard integration level: a monetary union builds on an economic union, so common economic policy must come first.'};
 if(commonCurrency)return{blocType:'Monetary union',features:['Free trade among members','Common external tariff','Free factor mobility','Common economic institutions and policy','Shared common currency'],description:'The deepest integration level: members share a common currency on top of common economic institutions and policy coordination, free factor mobility, and a common external tariff. Individual members no longer control monetary policy or exchange-rate adjustment.'};
 if(commonEconomicPolicy)return{blocType:'Economic union',features:['Free trade among members','Common external tariff','Free factor mobility','Common economic institutions and policy'],description:'Members share common economic institutions and coordinate economic policy on top of a common market’s free factor mobility and a customs union’s common external tariff, but retain separate currencies.'};
 if(freeFactorMobility)return{blocType:'Common market',features:['Free trade among members','Common external tariff','Free factor mobility'],description:'Members allow free movement of labor and capital among themselves on top of a customs union’s common external tariff, but do not yet share common economic institutions or policy coordination.'};
 if(commonExternalTariff)return{blocType:'Customs union',features:['Free trade among members','Common external tariff'],description:'Members eliminate barriers to trade among themselves and additionally adopt a common trade policy toward non-members, but do not allow free movement of factors of production among members.'};
 return{blocType:'Free trade area',features:['Free trade among members'],description:'Members eliminate barriers to goods and services trade among themselves, but each member keeps its own independent trade policy toward non-members.'};
}
export function TradingBlocComparator(){
 const[commonExternalTariff,setCommonExternalTariff]=useState(false);
 const[freeFactorMobility,setFreeFactorMobility]=useState(false);
 const[commonEconomicPolicy,setCommonEconomicPolicy]=useState(false);
 const[commonCurrency,setCommonCurrency]=useState(false);
 const result=classifyTradingBloc(commonExternalTariff,freeFactorMobility,commonEconomicPolicy,commonCurrency);
 return <section className="card">
  <h2>Trading bloc comparator</h2>
  <p className="muted mt-2 text-sm">Every regional trading bloc starts from free trade among its members. Add integration features one at a time, in order, to see how the classification moves up the integration ladder.</p>
  <div className="mt-4 space-y-2">
   <label className="flex items-center gap-2"><input type="checkbox" aria-label="Common external tariff toward non-members" checked={commonExternalTariff} onChange={e=>setCommonExternalTariff(e.target.checked)}/> Common external tariff toward non-members</label>
   <label className="flex items-center gap-2"><input type="checkbox" aria-label="Free movement of factors of production among members" checked={freeFactorMobility} onChange={e=>setFreeFactorMobility(e.target.checked)}/> Free movement of factors of production (labor, capital) among members</label>
   <label className="flex items-center gap-2"><input type="checkbox" aria-label="Common economic institutions and coordinated policy" checked={commonEconomicPolicy} onChange={e=>setCommonEconomicPolicy(e.target.checked)}/> Common economic institutions and coordinated economic policy</label>
   <label className="flex items-center gap-2"><input type="checkbox" aria-label="Shared common currency" checked={commonCurrency} onChange={e=>setCommonCurrency(e.target.checked)}/> Shared common currency</label>
  </div>
  {'error' in result?<output className="mt-4 block font-semibold" aria-live="polite">{result.error}</output>:<div className="mt-4 space-y-2" aria-live="polite">
   <p><strong>Classification:</strong> {result.blocType}</p>
   <p className="muted text-sm">{result.description}</p>
   <svg viewBox="0 0 320 60" className="mt-1 w-full" role="img" aria-label={`Integration ladder with the current selection at the ${result.blocType} level`}>
    <title>Trading bloc integration ladder</title>
    <line x1="10" y1="30" x2="310" y2="30" stroke="currentColor" strokeOpacity="0.3"/>
    {['Free trade area','Customs union','Common market','Economic union','Monetary union'].map((level,i)=>{const x=30+i*65;const active=level===result.blocType;return <g key={level}><circle cx={x} cy="30" r={active?8:5} fill={active?'#1d4ed8':'currentColor'} fillOpacity={active?1:0.3}/><text x={x} y="48" fontSize="7" textAnchor="middle">{level.split(' ')[0]}</text></g>;})}
   </svg>
   <ul className="mt-1 list-disc pl-5 text-sm">
    {result.features.map(feature=><li key={feature}>{feature}</li>)}
   </ul>
  </div>}
 </section>;
}

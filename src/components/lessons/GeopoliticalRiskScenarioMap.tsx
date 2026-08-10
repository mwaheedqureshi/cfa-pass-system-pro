import {useState} from 'react';
export type Cooperation='cooperative'|'non-cooperative';
export type Globalization='globalized'|'nationalist';
export function classifyArchetype(cooperation:Cooperation,globalization:Globalization){
 if(cooperation!=='cooperative'&&cooperation!=='non-cooperative')return{error:'Choose either cooperative or non-cooperative.'};
 if(globalization!=='globalized'&&globalization!=='nationalist')return{error:'Choose either globalized or nationalist.'};
 if(cooperation==='cooperative'&&globalization==='globalized')return{archetype:'Multilateralism',description:'Extensive rules harmonization; firms fully integrated into global supply chains.',toolExamples:['Multilateral trade agreements','Economic and monetary unions','Common markets']};
 if(cooperation==='non-cooperative'&&globalization==='globalized')return{archetype:'Hegemony',description:'A regional or global leader uses its influence to control access to resources or markets.',toolExamples:['Nationalization of key export firms','Foreign investment restrictions','Economic/financial sanctions','Export subsidies']};
 if(cooperation==='cooperative'&&globalization==='nationalist')return{archetype:'Bilateralism',description:'Agreements pursued one counterparty at a time rather than through broad multilateral participation.',toolExamples:['Trading blocs','Military/security alliances']};
 return{archetype:'Autarky',description:'Political and economic self-sufficiency, with little external trade or finance.',toolExamples:['Tariffs and quotas','Voluntary export restraints','Domestic content requirements']};
}
export type RiskType='event'|'exogenous'|'thematic';
export type RiskVelocity='high'|'medium'|'low';
export function assessRiskTransmission(riskType:RiskType,velocity:RiskVelocity){
 if(!['event','exogenous','thematic'].includes(riskType))return{error:'Choose a valid risk type: event, exogenous, or thematic.'};
 if(!['high','medium','low'].includes(velocity))return{error:'Choose a valid velocity: high, medium, or low.'};
 const channels=velocity==='high'?['Commodities','Foreign exchange','Equities','Bond prices (via interest rates)']:velocity==='medium'?['Company costs, processes, and valuations','Sector-concentrated impact']:['Discount rate / risk premium','Asset-allocation-level effects'];
 const marketWide=velocity==='high';
 const typeNote=riskType==='event'?'Tied to a known, scheduled date — predictability affects preparation time, not necessarily impact size.':riskType==='exogenous'?'Sudden and unanticipated — often triggers the high-velocity, market-wide pattern.':'Develops gradually over time — often aligns with the low/long-term velocity pattern.';
 return{channels,marketWide,typeNote};
}
export function GeopoliticalRiskScenarioMap(){
 const[cooperation,setCooperation]=useState<Cooperation>('cooperative');
 const[globalization,setGlobalization]=useState<Globalization>('globalized');
 const archetype=classifyArchetype(cooperation,globalization);
 const[riskType,setRiskType]=useState<RiskType>('exogenous');
 const[velocity,setVelocity]=useState<RiskVelocity>('high');
 const risk=assessRiskTransmission(riskType,velocity);
 return <section className="card">
  <h2>Geopolitical risk scenario map</h2>
  <p className="muted mt-2 text-sm">Classify a country's archetype from its cooperation and globalization posture, then classify a risk scenario by type and velocity to see its likely market-transmission channels. Both panels use generic, illustrative settings only — no current, real-world country or event is asserted.</p>
  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
   <label className="label">Cooperation posture<select aria-label="Cooperation posture" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={cooperation} onChange={e=>setCooperation(e.target.value as Cooperation)}><option value="cooperative">Cooperative</option><option value="non-cooperative">Non-cooperative</option></select></label>
   <label className="label">Globalization posture<select aria-label="Globalization posture" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={globalization} onChange={e=>setGlobalization(e.target.value as Globalization)}><option value="globalized">Globalized</option><option value="nationalist">Nationalist</option></select></label>
  </div>
  {'error' in archetype?<output className="mt-4 block font-semibold" aria-live="polite">{archetype.error}</output>:<div className="mt-4 space-y-2" aria-live="polite">
   <p><strong>Archetype:</strong> {archetype.archetype}</p>
   <p className="muted text-sm">{archetype.description}</p>
   <p className="text-sm"><strong>Associated tools:</strong> {archetype.toolExamples.join(', ')}</p>
   <svg viewBox="0 0 200 200" className="mt-1 w-full max-w-xs" role="img" aria-label={`2 by 2 archetype grid highlighting the ${archetype.archetype} quadrant`}>
    <title>Archetype quadrant grid</title>
    <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeOpacity="0.3"/>
    <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeOpacity="0.3"/>
    <rect x={globalization==='globalized'?10:100} y={cooperation==='cooperative'?10:100} width="90" height="90" fill="#1d4ed8" fillOpacity="0.25"/>
    <text x="55" y="55" fontSize="9" textAnchor="middle">Multilateralism</text>
    <text x="145" y="55" fontSize="9" textAnchor="middle">Hegemony</text>
    <text x="55" y="145" fontSize="9" textAnchor="middle">Bilateralism</text>
    <text x="145" y="145" fontSize="9" textAnchor="middle">Autarky</text>
   </svg>
   <p className="muted text-sm">Both axes represent a spectrum in practice; countries rarely sit at a full extreme, and a country's position can shift over time. This grid is a teaching simplification, not a value judgment about any country.</p>
  </div>}
  <div className="mt-5 border-t pt-4 dark:border-slate-700">
   <h3>Risk type and velocity</h3>
   <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
    <label className="label">Risk type<select aria-label="Geopolitical risk type" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={riskType} onChange={e=>setRiskType(e.target.value as RiskType)}><option value="event">Event</option><option value="exogenous">Exogenous</option><option value="thematic">Thematic</option></select></label>
    <label className="label">Velocity<select aria-label="Risk velocity" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={velocity} onChange={e=>setVelocity(e.target.value as RiskVelocity)}><option value="high">High / short-term</option><option value="medium">Medium-term</option><option value="low">Low / long-term</option></select></label>
   </div>
   {'error' in risk?<output className="mt-3 block font-semibold" aria-live="polite">{risk.error}</output>:<div className="mt-3 space-y-1" aria-live="polite">
    <p className="text-sm">{risk.typeNote}</p>
    <p><strong>Likely transmission channels:</strong> {risk.channels.join(', ')}</p>
    <svg viewBox="0 0 400 40" className="mt-1 w-full" role="img" aria-label={`Velocity spectrum with the current selection at the ${velocity} band`}>
     <title>Risk velocity spectrum</title>
     <line x1="10" y1="20" x2="390" y2="20" stroke="currentColor" strokeOpacity="0.3"/>
     <circle cx={velocity==='high'?60:velocity==='medium'?200:340} cy="20" r="7" fill="#b91c1c"/>
     <text x="60" y="35" fontSize="9" textAnchor="middle">High</text>
     <text x="200" y="35" fontSize="9" textAnchor="middle">Medium</text>
     <text x="340" y="35" fontSize="9" textAnchor="middle">Low</text>
    </svg>
   </div>}
  </div>
 </section>;
}

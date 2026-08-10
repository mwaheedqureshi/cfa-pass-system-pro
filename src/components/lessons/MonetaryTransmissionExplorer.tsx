import {useState} from 'react';
export function computeNeutralRateStance(trendGrowth:number,inflationTarget:number,policyRate:number){
 if(![trendGrowth,inflationTarget,policyRate].every(Number.isFinite))return{error:'Enter finite values for trend growth, the inflation target, and the policy rate.'};
 const neutralRate=trendGrowth+inflationTarget;
 const gap=policyRate-neutralRate;
 const stance=Math.abs(gap)<0.05?'Neutral':gap>0?'Contractionary':'Expansionary';
 return{neutralRate,gap,stance};
}
export type PolicyDirection='raise'|'lower';
export function transmissionChannelEffects(direction:PolicyDirection){
 if(direction!=='raise'&&direction!=='lower')return{error:'Choose either raise or lower.'};
 const raising=direction==='raise';
 return{
  interestRates:raising?'Market rates rise; borrowing costs increase':'Market rates fall; borrowing costs decrease',
  assetPrices:raising?'Asset prices tend to fall (higher discount rate)':'Asset prices tend to rise (lower discount rate)',
  exchangeRate:raising?'Currency tends to appreciate; exports less competitive':'Currency tends to depreciate; exports more competitive',
  expectations:raising?'Confidence and spending expectations tend to soften':'Confidence and spending expectations tend to firm',
  demandDirection:raising?'down':'up',
  inflationDirection:raising?'down':'up'
 };
}
export function MonetaryTransmissionExplorer(){
 const[trendGrowth,setTrendGrowth]=useState('2.5');
 const[inflationTarget,setInflationTarget]=useState('2.0');
 const[policyRate,setPolicyRate]=useState('5.0');
 const stanceResult=computeNeutralRateStance(Number(trendGrowth),Number(inflationTarget),Number(policyRate));
 const[direction,setDirection]=useState<PolicyDirection>('raise');
 const channels=transmissionChannelEffects(direction);
 return <section className="card">
  <h2>Monetary transmission explorer</h2>
  <p className="muted mt-2 text-sm">Compute the neutral policy rate to classify a policy rate as expansionary, contractionary, or neutral, then choose a policy-rate direction to see how the four transmission channels typically respond.</p>
  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
   <label className="label">Real trend growth (%)<input aria-label="Real trend rate of growth, percent" value={trendGrowth} onChange={e=>setTrendGrowth(e.target.value)} inputMode="decimal"/></label>
   <label className="label">Long-run inflation target (%)<input aria-label="Long-run expected inflation, percent" value={inflationTarget} onChange={e=>setInflationTarget(e.target.value)} inputMode="decimal"/></label>
   <label className="label">Current policy rate (%)<input aria-label="Current policy rate, percent" value={policyRate} onChange={e=>setPolicyRate(e.target.value)} inputMode="decimal"/></label>
  </div>
  {'error' in stanceResult?<output className="mt-4 block font-semibold" aria-live="polite">{stanceResult.error}</output>:<div className="mt-4 space-y-1" aria-live="polite">
   <p><strong>Neutral rate:</strong> {stanceResult.neutralRate.toFixed(2)}% · <strong>Gap:</strong> {stanceResult.gap>=0?'+':''}{stanceResult.gap.toFixed(2)} pp · <strong>Stance:</strong> {stanceResult.stance}</p>
  </div>}
  <div className="mt-5 border-t pt-4 dark:border-slate-700">
   <h3>Transmission channels</h3>
   <label className="label mt-2 max-w-xs">Policy-rate action<select aria-label="Policy rate action" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={direction} onChange={e=>setDirection(e.target.value as PolicyDirection)}><option value="raise">Raise the policy rate</option><option value="lower">Lower the policy rate</option></select></label>
   {'error' in channels?<output className="mt-3 block font-semibold" aria-live="polite">{channels.error}</output>:<ul className="mt-3 space-y-1 text-sm" aria-live="polite">
    <li><strong>Interest rates:</strong> {channels.interestRates}</li>
    <li><strong>Asset prices:</strong> {channels.assetPrices}</li>
    <li><strong>Exchange rate:</strong> {channels.exchangeRate}</li>
    <li><strong>Expectations:</strong> {channels.expectations}</li>
    <li><strong>Net effect:</strong> domestic and net external demand move {channels.demandDirection}, and inflationary pressure moves {channels.inflationDirection}.</li>
   </ul>}
   {!('error' in channels)&&<svg viewBox="0 0 400 120" className="mt-3 w-full" role="img" aria-label={`Transmission diagram: policy rate ${direction==='raise'?'increase':'decrease'} flowing through interest rates, asset prices, exchange rate, and expectations to total demand and inflation, moving ${channels.demandDirection}`}>
    <title>Transmission mechanism diagram</title>
    <rect x="10" y="45" width="90" height="30" rx="4" fill="#1d4ed8"/><text x="55" y="64" fontSize="10" fill="#fff" textAnchor="middle">Policy rate {direction==='raise'?'↑':'↓'}</text>
    {['Interest rates','Asset prices','Exchange rate','Expectations'].map((label,i)=><g key={label}><line x1="100" y1="60" x2="150" y2={20+i*28} stroke="currentColor" strokeOpacity="0.4"/><rect x="150" y={5+i*28} width="100" height="24" rx="4" fill="#94a3b8"/><text x="200" y={21+i*28} fontSize="9" textAnchor="middle">{label}</text></g>)}
    <line x1="250" y1="60" x2="300" y2="60" stroke="currentColor" strokeOpacity="0.4"/>
    <rect x="300" y="45" width="90" height="30" rx="4" fill={channels.demandDirection==='up'?'#15803d':'#b91c1c'}/><text x="345" y="64" fontSize="10" fill="#fff" textAnchor="middle">Demand {channels.demandDirection==='up'?'↑':'↓'}</text>
   </svg>}
   <p className="muted mt-3 text-sm">These four channels are not independent — they interact and reinforce or offset each other rather than operating in isolation.</p>
  </div>
 </section>;
}

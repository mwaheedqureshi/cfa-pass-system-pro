import {useState} from 'react';
export function calculateQuoteAppreciation(startingQuote:number,endingQuote:number){
 if(!Number.isFinite(startingQuote)||!Number.isFinite(endingQuote))return{error:'Enter finite numbers for both quotes.'};
 if(startingQuote<=0||endingQuote<=0)return{error:'Quotes must be positive (a quote of zero or less is not a valid exchange rate).'};
 const baseCurrencyChangePct=(endingQuote/startingQuote-1)*100;
 const reciprocalStart=1/startingQuote;
 const reciprocalEnd=1/endingQuote;
 const priceCurrencyChangePct=(reciprocalEnd/reciprocalStart-1)*100;
 const direction=endingQuote>startingQuote?'appreciated':endingQuote<startingQuote?'depreciated':'unchanged';
 return{baseCurrencyChangePct,priceCurrencyChangePct,reciprocalStart,reciprocalEnd,direction};
}
export type LegalTenderStatus='ownCurrency'|'sharedCurrency'|'foreignCurrency';
export type RateCommitment='legislativeFixed'|'discretionaryNarrowBand'|'discretionaryWiderBand'|'crawlingAdjustment'|'crawlingBandAroundFixedParity'|'managedIntervention'|'marketDetermined';
export type CrawlStyle='passive'|'active';
export function classifyExchangeRateRegime(legalTenderStatus:LegalTenderStatus,rateCommitment?:RateCommitment,crawlStyle?:CrawlStyle){
 if(legalTenderStatus==='foreignCurrency')return{regimeType:'Dollarization',monetaryPolicyIndependence:'None',description:'The country has adopted another country’s currency as its sole legal tender. It inherits that currency’s credibility but not the adopting country’s own creditworthiness, and gives up independent monetary policy entirely.'};
 if(legalTenderStatus==='sharedCurrency')return{regimeType:'Monetary union',monetaryPolicyIndependence:'None (set for the whole union)',description:'The country shares a single, jointly created currency with other member countries. Monetary policy is set for the union as a whole, not by any individual member.'};
 if(legalTenderStatus!=='ownCurrency')return{error:'Choose a valid legal-tender status: own currency, shared currency, or foreign currency.'};
 if(!rateCommitment)return{error:'Choose a rate-commitment type for a country with its own currency.'};
 if(rateCommitment==='legislativeFixed')return{regimeType:'Currency board',monetaryPolicyIndependence:'None (issuing authority is legally constrained)',description:'An explicit legislative commitment to exchange domestic currency for a specified foreign currency at a fixed rate, with legal restrictions on the issuing authority. Unlike dollarization, a currency board can still earn seigniorage, but neither can act as a full lender of last resort.'};
 if(rateCommitment==='discretionaryNarrowBand')return{regimeType:'Fixed parity',monetaryPolicyIndependence:'Very limited',description:'A discretionary fixed-rate target with a narrow band (up to roughly 1%), without the legislative backing of a currency board.'};
 if(rateCommitment==='discretionaryWiderBand')return{regimeType:'Target zone',monetaryPolicyIndependence:'Limited',description:'A discretionary fixed-rate target with a wider band (up to roughly 2%), trading some rate certainty for additional policy room versus a fixed parity.'};
 if(rateCommitment==='crawlingAdjustment'){
  if(!crawlStyle)return{error:'Choose passive or active for a crawling-adjustment regime.'};
  if(crawlStyle==='passive')return{regimeType:'Passive crawling peg',monetaryPolicyIndependence:'Limited',description:'The parity is adjusted frequently (e.g., weekly) to track inflation that has already occurred — a reactive, backward-looking adjustment.'};
  if(crawlStyle==='active')return{regimeType:'Active crawling peg',monetaryPolicyIndependence:'Limited, more predictable',description:'The parity is adjusted in small, pre-announced steps intended to shape inflation expectations going forward — a forward-looking adjustment.'};
  return{error:'Choose a valid crawl style: passive or active.'};
 }
 if(rateCommitment==='crawlingBandAroundFixedParity')return{regimeType:'Fixed parity with crawling bands',monetaryPolicyIndependence:'Limited, with a built-in exit path',description:'A fixed central parity combined with a pre-announced widening band, giving a gradual exit path away from a strict fixed parity.'};
 if(rateCommitment==='managedIntervention')return{regimeType:'Managed float',monetaryPolicyIndependence:'Substantial',description:'The central bank intervenes occasionally based on internal or external considerations, without an explicit rate target. This can invite other countries to respond in kind, potentially reducing overall stability.'};
 if(rateCommitment==='marketDetermined')return{regimeType:'Independently floating',monetaryPolicyIndependence:'Full',description:'The exchange rate is fully market-determined. The central bank retains complete monetary-policy latitude and full lender-of-last-resort capacity.'};
 return{error:'Choose a valid rate-commitment type.'};
}
export function FXQuoteAndRegimeExplorer(){
 const[startingQuote,setStartingQuote]=useState('11.2000');
 const[endingQuote,setEndingQuote]=useState('11.5000');
 const quoteResult=calculateQuoteAppreciation(Number(startingQuote),Number(endingQuote));
 const[legalTenderStatus,setLegalTenderStatus]=useState<LegalTenderStatus>('ownCurrency');
 const[rateCommitment,setRateCommitment]=useState<RateCommitment>('marketDetermined');
 const[crawlStyle,setCrawlStyle]=useState<CrawlStyle>('active');
 const regimeResult=classifyExchangeRateRegime(legalTenderStatus,legalTenderStatus==='ownCurrency'?rateCommitment:undefined,rateCommitment==='crawlingAdjustment'?crawlStyle:undefined);
 return <section className="card">
  <h2>FX quote and regime explorer</h2>
  <p className="muted mt-2 text-sm">Both panels use the A/B convention from this lesson: the first-written currency is the price currency, the second is the base currency, fixed at one unit.</p>
  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
   <label className="label">Starting quote (A/B)<input aria-label="Starting quote" value={startingQuote} onChange={e=>setStartingQuote(e.target.value)} inputMode="decimal"/></label>
   <label className="label">Ending quote (A/B)<input aria-label="Ending quote" value={endingQuote} onChange={e=>setEndingQuote(e.target.value)} inputMode="decimal"/></label>
  </div>
  {'error' in quoteResult?<output className="mt-4 block font-semibold" aria-live="polite">{quoteResult.error}</output>:<div className="mt-4 space-y-2" aria-live="polite">
   <p>Base currency (B) has <strong>{quoteResult.direction}</strong>: {quoteResult.baseCurrencyChangePct>=0?'+':''}{quoteResult.baseCurrencyChangePct.toFixed(2)}%</p>
   <p>Reciprocal quotes (B/A): {quoteResult.reciprocalStart.toFixed(6)} → {quoteResult.reciprocalEnd.toFixed(6)}</p>
   <p>Price currency (A) change, computed from the reciprocal quotes: {quoteResult.priceCurrencyChangePct>=0?'+':''}{quoteResult.priceCurrencyChangePct.toFixed(2)}%</p>
   <p className="muted text-sm">Notice the two percentages above are not equal in magnitude — this is expected, not an error.</p>
  </div>}
  <div className="mt-5 border-t pt-4 dark:border-slate-700">
   <h3>Exchange rate regime classifier</h3>
   <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
    <label className="label">Legal tender status<select aria-label="Legal tender status" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={legalTenderStatus} onChange={e=>setLegalTenderStatus(e.target.value as LegalTenderStatus)}><option value="ownCurrency">Has its own currency</option><option value="sharedCurrency">Shares a jointly created currency</option><option value="foreignCurrency">Uses another country's currency</option></select></label>
    {legalTenderStatus==='ownCurrency'&&<label className="label">Rate commitment<select aria-label="Rate commitment" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={rateCommitment} onChange={e=>setRateCommitment(e.target.value as RateCommitment)}><option value="legislativeFixed">Legislated fixed rate</option><option value="discretionaryNarrowBand">Discretionary fixed rate, narrow band</option><option value="discretionaryWiderBand">Discretionary fixed rate, wider band</option><option value="crawlingAdjustment">Adjusted over time (crawling)</option><option value="crawlingBandAroundFixedParity">Fixed parity plus a widening band</option><option value="managedIntervention">Occasional intervention, no explicit target</option><option value="marketDetermined">Fully market-determined</option></select></label>}
    {legalTenderStatus==='ownCurrency'&&rateCommitment==='crawlingAdjustment'&&<label className="label">Crawl style<select aria-label="Crawl style" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={crawlStyle} onChange={e=>setCrawlStyle(e.target.value as CrawlStyle)}><option value="passive">Passive (reactive, tracks past inflation)</option><option value="active">Active (pre-announced steps)</option></select></label>}
   </div>
   {'error' in regimeResult?<output className="mt-3 block font-semibold" aria-live="polite">{regimeResult.error}</output>:<div className="mt-3 space-y-1" aria-live="polite">
    <p><strong>Classification:</strong> {regimeResult.regimeType}</p>
    <p className="text-sm">Monetary policy independence: {regimeResult.monetaryPolicyIndependence}</p>
    <p className="muted mt-1 text-sm">{regimeResult.description}</p>
    <svg viewBox="0 0 400 40" className="mt-2 w-full" role="img" aria-label={`Regime spectrum with the current selection at ${regimeResult.regimeType}`}>
     <title>Exchange rate regime spectrum</title>
     <line x1="10" y1="20" x2="390" y2="20" stroke="currentColor" strokeOpacity="0.3"/>
     <text x="10" y="35" fontSize="8" textAnchor="start">No independent currency</text>
     <text x="390" y="35" fontSize="8" textAnchor="end">Independently floating</text>
     <circle cx={legalTenderStatus!=='ownCurrency'?30:rateCommitment==='legislativeFixed'?90:rateCommitment==='discretionaryNarrowBand'?150:rateCommitment==='discretionaryWiderBand'?200:rateCommitment==='crawlingAdjustment'||rateCommitment==='crawlingBandAroundFixedParity'?260:rateCommitment==='managedIntervention'?320:370} cy="20" r="7" fill="#1d4ed8"/>
    </svg>
   </div>}
  </div>
 </section>;
}

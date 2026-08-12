import {useMemo,useState} from 'react';

export type RecognitionScenario={
 id:string;
 label:string;
 category:'revenue'|'expense';
 classification:string;
 explanation:string;
 statementImpact:string;
};

export const scenarios:RecognitionScenario[]=[
 {id:'principal-sale',label:'A company sells goods it owns and controls before transferring them to the customer',category:'revenue',classification:'Principal — recognize gross revenue and related cost of goods sold',explanation:'Because the company controls the goods before transfer and bears inventory risk, it reports the full transaction price as revenue and the related cost as COGS.',statementImpact:'Higher revenue and COGS; gross margin reflects the markup on the full transaction.'},
 {id:'agent-arrangement',label:'A company arranges a sale on another party’s behalf and earns a commission',category:'revenue',classification:'Agent — recognize only the net commission as revenue',explanation:'An agent does not control the goods before transfer, so only its fee or commission is revenue, with no associated cost of goods sold.',statementImpact:'Lower revenue than the gross transaction value, but a much higher revenue margin on that smaller base.'},
 {id:'perpetual-license',label:'A software company sells a perpetual license with control transferring at delivery',category:'revenue',classification:'Point-in-time recognition — recognize the full transaction price at delivery',explanation:'Control of a distinct good or service transfers at a single moment, so the entire transaction price is recognized then.',statementImpact:'A large one-time revenue recognition in the delivery period, with no revenue in future periods from this contract.'},
 {id:'saas-subscription',label:'A software company sells a 3-year cloud subscription',category:'revenue',classification:'Over-time recognition — recognize revenue ratably over the subscription term',explanation:'The customer simultaneously receives and consumes the benefit throughout the term, so revenue is recognized as the service is delivered, not upfront.',statementImpact:'Smaller, steadier revenue recognized each period over the full contract term instead of a single upfront amount.'},
 {id:'long-term-construction',label:'A company builds a custom asset under a long-term contract, with performance enhancing a customer-controlled asset',category:'revenue',classification:'Over-time recognition — recognize revenue based on percentage of completion',explanation:'When the criteria for over-time recognition are met, revenue and profit are recognized progressively using a measure of progress such as costs incurred relative to total estimated costs.',statementImpact:'Revenue and profit are recognized across multiple periods as the contract progresses, rather than in one lump sum at completion.'},
 {id:'bill-and-hold',label:'A customer asks the seller to hold finished, invoiced goods in the seller’s warehouse before shipment',category:'revenue',classification:'Point-in-time recognition permitted only if all bill-and-hold criteria are met',explanation:'Revenue may be recognized before physical delivery only if there is a substantive reason for the arrangement, the goods are separately identified as the customer’s, they are ready for transfer, and the seller cannot use or redirect them.',statementImpact:'If criteria are met, revenue is recognized before shipment; if not, recognition must wait until delivery.'},
 {id:'equipment-future-benefit',label:'A company purchases equipment expected to generate revenue for several future years',category:'expense',classification:'Capitalize — record as an asset and depreciate over its useful life',explanation:'A cost that creates an asset with expected future economic benefit is capitalized, not expensed immediately, and is instead recognized gradually through depreciation.',statementImpact:'Higher near-term net income and total assets than immediate expensing; expense recognized gradually over the asset’s useful life.'},
 {id:'admin-salaries',label:'A company pays administrative salaries with no clear link to future revenue',category:'expense',classification:'Expense as incurred',explanation:'Period costs with no identifiable future economic benefit are expensed in the period they are incurred rather than capitalized.',statementImpact:'Full expense hits net income immediately in the period incurred; no asset is created.'},
 {id:'capitalized-interest',label:'A company incurs interest costs while constructing an asset for its own use',category:'expense',classification:'Capitalize the interest into the asset’s cost',explanation:'Interest directly attributable to constructing a qualifying asset is capitalized into that asset’s cost rather than expensed as incurred, and is later depreciated (for own-use assets) or included in inventory cost (for assets built for sale).',statementImpact:'Capitalized interest does not appear in reported interest expense, which can overstate as-reported interest coverage unless the analyst adjusts for it.'},
 {id:'software-pre-feasibility',label:'A company incurs software development costs before establishing technological feasibility',category:'expense',classification:'Expense as incurred',explanation:'Costs incurred before technological feasibility is established are considered research-stage costs and must be expensed; only costs incurred after feasibility is established are eligible for capitalization.',statementImpact:'Lower near-term operating margin than a company that capitalizes a larger share of its development spend.'},
];

export function classifyScenario(id:string):RecognitionScenario|undefined{
 return scenarios.find(s=>s.id===id);
}

export function RevenueExpenseRecognitionClassifier(){
 const[scenarioId,setScenarioId]=useState(scenarios[0].id);
 const scenario=useMemo(()=>classifyScenario(scenarioId),[scenarioId]);
 return <div className="card mt-6">
  <h3>Revenue and expense recognition classifier</h3>
  <p className="muted mt-1 text-sm">Select a scenario to see its correct recognition classification and financial-statement impact.</p>
  <label className="label mt-3 block" htmlFor="recognition-scenario-select">Scenario</label>
  <select id="recognition-scenario-select" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={scenarioId} onChange={e=>setScenarioId(e.target.value)}>
   {scenarios.map(s=><option key={s.id} value={s.id}>{s.label}</option>)}
  </select>
  {scenario&&<div className="mt-3" role="status">
   <p><strong>Category:</strong> {scenario.category==='revenue'?'Revenue recognition':'Expense recognition'}</p>
   <p className="mt-2"><strong>Classification:</strong> {scenario.classification}</p>
   <p className="mt-2">{scenario.explanation}</p>
   <p className="mt-2 muted"><strong>Statement impact:</strong> {scenario.statementImpact}</p>
  </div>}
 </div>;
}

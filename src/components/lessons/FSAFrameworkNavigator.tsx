import {useMemo,useState} from 'react';

export type FrameworkStep=1|2|3|4|5|6;
export const frameworkSteps:{step:FrameworkStep;name:string}[]=[
 {step:1,name:'Articulate the purpose and context'},
 {step:2,name:'Collect data'},
 {step:3,name:'Process data'},
 {step:4,name:'Analyze and interpret data'},
 {step:5,name:'Develop and communicate conclusions'},
 {step:6,name:'Follow-up'},
];

export type Activity={id:string;label:string;step:FrameworkStep;explanation:string};
export const activities:Activity[]=[
 {id:'engagement-letter',label:'Reading the client engagement letter to determine the analysis’s required scope and delivery date',step:1,explanation:'Defining the question, audience, and timeline is step 1, before any data is gathered.'},
 {id:'gather-filings',label:'Downloading the target company’s last three years of annual filings',step:2,explanation:'Collecting the raw financial statements and other data is step 2.'},
 {id:'site-visit',label:'Conducting a management discussion and a facility site visit',step:2,explanation:'Direct data-gathering activities, including discussions and site visits, belong to step 2.'},
 {id:'compute-ratios',label:'Computing liquidity and profitability ratios from the gathered statements',step:3,explanation:'Turning raw data into ratios and common-size figures is step 3 (processing), not yet interpretation.'},
 {id:'adjust-comparability',label:'Adjusting a foreign subsidiary’s inventory costing basis for comparability',step:3,explanation:'A comparability adjustment is a processing activity: step 3.'},
 {id:'explain-driver',label:'Explaining that a ratio decline was driven by one-time acquisition financing, not core deterioration',step:4,explanation:'Turning a processed number into a reasoned conclusion is step 4 (analyze/interpret).',},
 {id:'write-report',label:'Delivering a report to the investment committee that separates opinion from verified fact',step:5,explanation:'Formatting and communicating a conclusion for a specific audience, consistent with Standard V(B), is step 5.'},
 {id:'revisit-after-news',label:'Revisiting a hold recommendation after the company announces a large debt-funded buyback',step:6,explanation:'Reopening the analysis after new information arrives is step 6 (follow-up), which loops back to step 1 or 2.'},
];

export function classifyActivity(activityId:string):Activity|undefined{
 return activities.find(a=>a.id===activityId);
}

export type Segment={name:string;revenuePct:number};
export type SegmentDisclosureResult={
 qualifying:string[];
 totalCoveragePct:number;
 meetsCoverageRule:boolean;
 additionalSegmentsNeeded:boolean;
 error?:string;
};

/** Applies the 10% revenue threshold test and the 75% external-revenue coverage rule. */
export function checkSegmentDisclosure(segments:Segment[]):SegmentDisclosureResult{
 if(!segments.length)return{qualifying:[],totalCoveragePct:0,meetsCoverageRule:false,additionalSegmentsNeeded:false,error:'Add at least one segment.'};
 for(const s of segments){
  if(!Number.isFinite(s.revenuePct)||s.revenuePct<0||s.revenuePct>100)return{qualifying:[],totalCoveragePct:0,meetsCoverageRule:false,additionalSegmentsNeeded:false,error:`${s.name||'A segment'} has an invalid revenue percentage; each must be between 0 and 100.`};
 }
 const total=segments.reduce((sum,s)=>sum+s.revenuePct,0);
 if(total>100.0001)return{qualifying:[],totalCoveragePct:0,meetsCoverageRule:false,additionalSegmentsNeeded:false,error:'Segment revenue percentages sum to more than 100%; check your inputs.'};
 const qualifying=segments.filter(s=>s.revenuePct>=10).map(s=>s.name);
 const totalCoveragePct=segments.filter(s=>s.revenuePct>=10).reduce((sum,s)=>sum+s.revenuePct,0);
 const meetsCoverageRule=totalCoveragePct>=75;
 return{qualifying,totalCoveragePct,meetsCoverageRule,additionalSegmentsNeeded:!meetsCoverageRule&&qualifying.length>0};
}

export function FSAFrameworkNavigator(){
 const[activityId,setActivityId]=useState(activities[0].id);
 const activity=useMemo(()=>classifyActivity(activityId),[activityId]);

 const[segments,setSegments]=useState<Segment[]>([{name:'Segment A',revenuePct:42},{name:'Segment B',revenuePct:31},{name:'Segment C',revenuePct:9},{name:'Segment D',revenuePct:18}]);
 const result=useMemo(()=>checkSegmentDisclosure(segments),[segments]);
 const updateSegment=(index:number,field:'name'|'revenuePct',value:string)=>{
  setSegments(prev=>prev.map((s,i)=>i===index?{...s,[field]:field==='revenuePct'?Number(value):value}:s));
 };
 const addSegment=()=>setSegments(prev=>[...prev,{name:`Segment ${String.fromCharCode(65+prev.length)}`,revenuePct:0}]);
 const removeSegment=(index:number)=>setSegments(prev=>prev.filter((_,i)=>i!==index));

 return <div className="card mt-6 space-y-8">
  <section aria-labelledby="fsa-step-identifier-heading">
   <h3 id="fsa-step-identifier-heading">Framework step identifier</h3>
   <p className="muted mt-1 text-sm">Select an analyst activity and see which of the six framework steps it belongs to.</p>
   <label className="label mt-3 block" htmlFor="fsa-activity-select">Activity</label>
   <select id="fsa-activity-select" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={activityId} onChange={e=>setActivityId(e.target.value)}>
    {activities.map(a=><option key={a.id} value={a.id}>{a.label}</option>)}
   </select>
   {activity&&<p className="mt-3" role="status"><strong>Step {activity.step} — {frameworkSteps.find(s=>s.step===activity.step)?.name}.</strong> {activity.explanation}</p>}
  </section>
  <section aria-labelledby="fsa-segment-heading">
   <h3 id="fsa-segment-heading">Segment disclosure checker</h3>
   <p className="muted mt-1 text-sm">Enter each operating segment’s share of total external revenue to apply the 10% disclosure threshold and the 75% coverage rule.</p>
   <div className="mt-3 space-y-2">
    {segments.map((s,i)=><div key={i} className="flex flex-wrap items-center gap-2">
     <label className="sr-only" htmlFor={`fsa-segment-name-${i}`}>Segment {i+1} name</label>
     <input id={`fsa-segment-name-${i}`} className="w-40 rounded-lg border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={s.name} onChange={e=>updateSegment(i,'name',e.target.value)}/>
     <label className="sr-only" htmlFor={`fsa-segment-pct-${i}`}>Segment {i+1} revenue percentage</label>
     <input id={`fsa-segment-pct-${i}`} type="number" min={0} max={100} className="w-24 rounded-lg border px-2 py-1 dark:border-slate-600 dark:bg-slate-800" value={s.revenuePct} onChange={e=>updateSegment(i,'revenuePct',e.target.value)}/>
     <span aria-hidden="true">%</span>
     <button type="button" className="btn" onClick={()=>removeSegment(i)} disabled={segments.length<=1}>Remove</button>
    </div>)}
   </div>
   <button type="button" className="btn mt-3" onClick={addSegment}>Add segment</button>
   <div className="mt-4" role="status">
    {result.error?<p className="text-red-700 dark:text-red-400">{result.error}</p>:<>
     <p><strong>Qualifying segments (≥10% test):</strong> {result.qualifying.length?result.qualifying.join(', '):'none'}</p>
     <p><strong>Total external-revenue coverage:</strong> {result.totalCoveragePct.toFixed(1)}%</p>
     <p><strong>Meets the 75% coverage rule:</strong> {result.meetsCoverageRule?'Yes':'No'}</p>
     {result.additionalSegmentsNeeded&&<p>Additional segments must be disclosed until coverage reaches at least 75%.</p>}
    </>}
   </div>
  </section>
 </div>;
}

import { useMemo, useState } from 'react';

export type ReportingInputs={revenueGrowth:number;receivablesGrowth:number;cfo:number;netIncome:number;recurringAdjustments:boolean;estimateChange:boolean;qualitativeFlags:number};
export function analyzeReportingFlags(x:ReportingInputs){
 const flags:string[]=[];
 if(x.receivablesGrowth-x.revenueGrowth>=10)flags.push('Receivables are growing materially faster than revenue; investigate collection terms, cut-off, and allowance assumptions.');
 const cashConversion=x.netIncome===0?null:x.cfo/x.netIncome;
 if(cashConversion!==null&&cashConversion<1)flags.push('CFO is below net income; determine whether working capital or aggressive accruals explain weak cash conversion.');
 if(x.recurringAdjustments)flags.push('Repeated adjusted-earnings exclusions may represent recurring economics.');
 if(x.estimateChange)flags.push('An estimate change requires its rationale, current effect, peer comparison, and future reversal to be assessed.');
 if(x.qualitativeFlags>0)flags.push(`${x.qualitativeFlags} qualitative warning sign${x.qualitativeFlags===1?'':'s'} require corroboration across governance and disclosures.`);
 return{cashConversion,flags,conclusion:flags.length===0?'No configured warning signal is triggered; this does not guarantee high-quality reporting.':`${flags.length} signal${flags.length===1?'':'s'} triggered. Investigate; signals are not proof of manipulation.`};
}
export function FinancialReportingRedFlagAnalyzer(){
 const[revenueGrowth,setRevenueGrowth]=useState(10),[receivablesGrowth,setReceivablesGrowth]=useState(25),[cfo,setCfo]=useState(75),[netIncome,setNetIncome]=useState(100),[recurringAdjustments,setRecurringAdjustments]=useState(true),[estimateChange,setEstimateChange]=useState(false),[qualitativeFlags,setQualitativeFlags]=useState(1);
 const result=useMemo(()=>analyzeReportingFlags({revenueGrowth,receivablesGrowth,cfo,netIncome,recurringAdjustments,estimateChange,qualitativeFlags}),[revenueGrowth,receivablesGrowth,cfo,netIncome,recurringAdjustments,estimateChange,qualitativeFlags]);
 const number=(label:string,value:number,setter:(n:number)=>void)=><label className="block text-sm">{label}<input className="mt-1 w-full rounded border p-2" type="number" value={value} onChange={e=>setter(Number(e.target.value))}/></label>;
 return <section className="card"><h3 className="text-lg font-semibold">Financial Reporting Quality Red-Flag Analyzer</h3><p className="text-sm text-slate-600">Combine signals; never treat this diagnostic as a fraud score.</p><div className="mt-4 grid gap-3 md:grid-cols-2">{number('Revenue growth (%)',revenueGrowth,setRevenueGrowth)}{number('Receivables growth (%)',receivablesGrowth,setReceivablesGrowth)}{number('Cash flow from operations',cfo,setCfo)}{number('Net income',netIncome,setNetIncome)}{number('Qualitative warning signs',qualitativeFlags,setQualitativeFlags)}<div className="space-y-2 text-sm"><label className="block"><input type="checkbox" checked={recurringAdjustments} onChange={e=>setRecurringAdjustments(e.target.checked)}/> Recurring “one-time” adjustments</label><label className="block"><input type="checkbox" checked={estimateChange} onChange={e=>setEstimateChange(e.target.checked)}/> Material estimate change</label></div></div><div className="mt-4 rounded bg-slate-50 p-3"><p><strong>CFO/net income:</strong> {result.cashConversion===null?'not meaningful':result.cashConversion.toFixed(2)}</p><p className="mt-1 font-medium">{result.conclusion}</p><ul className="mt-2 list-disc pl-5 text-sm">{result.flags.map(f=><li key={f}>{f}</li>)}</ul></div></section>;
}
export default FinancialReportingRedFlagAnalyzer;

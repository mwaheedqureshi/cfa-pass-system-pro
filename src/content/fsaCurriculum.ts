export type OfficialFsaModule={id:string;order:number;title:string;studyLessonId:string|null;status:'verified'|'pending'};
export const officialFsaModules:OfficialFsaModule[]=[
 {id:'FSA-LM1',order:1,title:'Introduction to Financial Statement Analysis',studyLessonId:'fsa-01-introduction-to-financial-statement-analysis',status:'verified'},
 {id:'FSA-LM2',order:2,title:'Analyzing Income Statements',studyLessonId:'fsa-02-analyzing-income-statements',status:'verified'},
 {id:'FSA-LM3',order:3,title:'Analyzing Balance Sheets',studyLessonId:'fsa-03-analyzing-balance-sheets',status:'verified'},
 {id:'FSA-LM4',order:4,title:'Analyzing Statements of Cash Flows I',studyLessonId:null,status:'pending'},
 {id:'FSA-LM5',order:5,title:'Analyzing Statements of Cash Flows II',studyLessonId:null,status:'pending'},
 {id:'FSA-LM6',order:6,title:'Analysis of Inventories',studyLessonId:null,status:'pending'},
 {id:'FSA-LM7',order:7,title:'Analysis of Long-Term Assets',studyLessonId:null,status:'pending'},
 {id:'FSA-LM8',order:8,title:'Topics in Long-Term Liabilities and Equity',studyLessonId:null,status:'pending'},
 {id:'FSA-LM9',order:9,title:'Analysis of Income Taxes',studyLessonId:null,status:'pending'},
 {id:'FSA-LM10',order:10,title:'Financial Reporting Quality',studyLessonId:null,status:'pending'},
 {id:'FSA-LM11',order:11,title:'Financial Analysis Techniques',studyLessonId:null,status:'pending'},
 {id:'FSA-LM12',order:12,title:'Introduction to Financial Statement Modeling',studyLessonId:null,status:'pending'}
];
export const officialFsaModuleCount=officialFsaModules.length;
export const verifiedOfficialFsaModules=officialFsaModules.filter(m=>m.status==='verified');
export const fsaLessonIds=officialFsaModules.map(m=>m.studyLessonId).filter((id):id is string=>id!==null);
export const officialModuleForLesson=(lessonId:string)=>officialFsaModules.find(module=>module.studyLessonId===lessonId);

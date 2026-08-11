export type OfficialEconomicsModule={id:string;order:number;title:string;studyLessonId:string|null;status:'verified'|'pending'};
export const officialEconomicsModules:OfficialEconomicsModule[]=[
 {id:'ECO-LM1',order:1,title:'The Firm and Market Structures',studyLessonId:'economics-firm-market-01',status:'verified'},
 {id:'ECO-LM2',order:2,title:'Understanding Business Cycles',studyLessonId:'economics-02-understanding-business-cycles',status:'verified'},
 {id:'ECO-LM3',order:3,title:'Fiscal Policy',studyLessonId:'economics-03-fiscal-policy',status:'verified'},
 {id:'ECO-LM4',order:4,title:'Monetary Policy',studyLessonId:'economics-04-monetary-policy',status:'verified'},
 {id:'ECO-LM5',order:5,title:'Introduction to Geopolitics',studyLessonId:'economics-05-introduction-to-geopolitics',status:'verified'},
 {id:'ECO-LM6',order:6,title:'International Trade',studyLessonId:'economics-06-international-trade',status:'verified'},
 {id:'ECO-LM7',order:7,title:'Capital Flows and the FX Market',studyLessonId:'economics-07-capital-flows-and-the-fx-market',status:'verified'},
 {id:'ECO-LM8',order:8,title:'Exchange Rate Calculations',studyLessonId:'economics-08-exchange-rate-calculations',status:'verified'}
];
export const officialEconomicsModuleCount=officialEconomicsModules.length;
export const verifiedOfficialEconomicsModules=officialEconomicsModules.filter(m=>m.status==='verified');
export const economicsLessonIds=officialEconomicsModules.map(m=>m.studyLessonId).filter((id):id is string=>id!==null);

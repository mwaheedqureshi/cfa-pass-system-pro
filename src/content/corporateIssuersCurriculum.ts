export type OfficialCorporateIssuersModule={id:string;order:number;title:string;studyLessonId:string|null;status:'verified'|'pending'};
export const officialCorporateIssuersModules:OfficialCorporateIssuersModule[]=[
 {id:'CI-LM1',order:1,title:'Organizational Forms, Corporate Issuer Features, and Ownership',studyLessonId:'corporate-issuers-01-organizational-forms-corporate-issuer-features-and-ownership',status:'verified'},
 {id:'CI-LM2',order:2,title:'Investors and Other Stakeholders',studyLessonId:'corporate-issuers-02-investors-and-other-stakeholders',status:'verified'},
 {id:'CI-LM3',order:3,title:'Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits',studyLessonId:'corporate-issuers-03-corporate-governance-conflicts-mechanisms-risks-and-benefits',status:'verified'},
 {id:'CI-LM4',order:4,title:'Working Capital and Liquidity',studyLessonId:'corporate-issuers-04-working-capital-and-liquidity',status:'verified'},
 {id:'CI-LM5',order:5,title:'Capital Investments and Capital Allocation',studyLessonId:'corporate-issuers-05-capital-investments-and-capital-allocation',status:'verified'},
 {id:'CI-LM6',order:6,title:'Capital Structure',studyLessonId:null,status:'pending'},
 {id:'CI-LM7',order:7,title:'Business Models',studyLessonId:null,status:'pending'}
];
export const officialCorporateIssuersModuleCount=officialCorporateIssuersModules.length;
export const verifiedOfficialCorporateIssuersModules=officialCorporateIssuersModules.filter(module=>module.status==='verified');
export const corporateIssuersLessonIds=officialCorporateIssuersModules.map(module=>module.studyLessonId).filter((id):id is string=>id!==null);
export const officialCorporateIssuersModuleForLesson=(lessonId:string)=>officialCorporateIssuersModules.find(module=>module.studyLessonId===lessonId);

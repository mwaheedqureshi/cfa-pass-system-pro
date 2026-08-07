export type OfficialQuantModule={id:string;order:number;title:string;studyLessonIds:string[]};
export const officialQuantModules:OfficialQuantModule[]=[
 {id:'QM-LM1',order:1,title:'Returns of Financial Assets and Instruments',studyLessonIds:['quant-returns-01']},
 {id:'QM-LM2',order:2,title:'Types of Financial Returns',studyLessonIds:['quant-returns-02']},
 {id:'QM-LM3',order:3,title:'Benchmarking Returns',studyLessonIds:['quant-benchmarking-03']},
 {id:'QM-LM4',order:4,title:'The Time Value of Money in Finance',studyLessonIds:['quant-tvm-04']},
 {id:'QM-LM5',order:5,title:'Statistical Characteristics of Asset Returns',studyLessonIds:['quant-statistics-05']},
 {id:'QM-LM6',order:6,title:'Statistical Distributions for Financial Asset Prices and Returns',studyLessonIds:['quant-probability-06']},
 {id:'QM-LM7',order:7,title:'Estimation and Hypothesis Testing',studyLessonIds:['quant-sampling-08','quant-hypothesis-09']},
 {id:'QM-LM8',order:8,title:'The Return and Risk of a Financial Portfolio',studyLessonIds:['quant-distributions-07']},
 {id:'QM-LM9',order:9,title:'Simulation of Financial Asset Prices and Returns',studyLessonIds:['quant-simulation-11']},
 {id:'QM-LM10',order:10,title:'Applications of Simple Linear Regression in Finance',studyLessonIds:['quant-regression-10']},
 {id:'QM-LM11',order:11,title:'Introduction to Financial Data Science',studyLessonIds:['quant-data-ai-12']}
];
export const quantStudyLessonOrder=officialQuantModules.flatMap(module=>module.studyLessonIds);
export const officialModuleForLesson=(lessonId:string)=>officialQuantModules.find(module=>module.studyLessonIds.includes(lessonId));
export const completedOfficialQuantModules=(completedLessons:string[])=>officialQuantModules.filter(module=>module.studyLessonIds.every(id=>completedLessons.includes(id)));

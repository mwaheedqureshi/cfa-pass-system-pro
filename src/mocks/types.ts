import type {Confidence} from '../data/types';
export type MappingConfidence='high'|'medium'|'low'|'unmapped';
export type MockQuestion={id:string;mockId:string;sourceQuestionNumber:number;session?:number;topic:string;officialModuleId?:string;studyLessonId?:string;stem:string;choices:string[];correctChoiceIndex:number;explanation?:string;sourceExplanation?:boolean;extractionConfidence:'high'|'medium'|'low';needsManualReview:boolean;mappingConfidence:MappingConfidence;relatedFormulaIds:string[];exhibitUrl?:string};
export type MockExam={id:string;title:string;provider:string;year:number;sourceFile:string;sourceFolder:string;session?:string;questionCount:number;timeLimitMinutes:number;timeLimitProvenance?:string;questions:MockQuestion[]};
export type MockLibrary={version:1;generatedAt:string;mocks:MockExam[];warnings?:Array<{sourceFile:string;reason:string}>};
export type MockMode='exam'|'practice';export type MockStatus='in-progress'|'completed';
export type MockAttempt={id:string;mockId:string;year?:number;mode:MockMode;status:MockStatus;answers:Record<string,number>;flags:string[];confidence:Record<string,Confidence>;currentIndex:number;remainingSeconds:number;elapsedSeconds:number;paused:boolean;startedAt:string;updatedAt:string;completedAt?:string};
export type WeakHistory={questionId:string;mockId:string;topic:string;officialModuleId?:string;totalAttempts:number;incorrectAttempts:number;correctAttempts:number;latestCorrect:boolean;masteryStatus:'unresolved'|'improving'|'mastered'};
export type MockProgress={version:1;attempts:MockAttempt[];weakHistory:Record<string,WeakHistory>;persistentFlags:string[]};

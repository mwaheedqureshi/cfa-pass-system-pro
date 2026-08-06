export type Topic={id:string;title:string;description:string;lessonCount:number;status:'available'|'pending'};
export type Lesson={id:string;topicId:string;title:string;filePath:string;officialModuleTitle:string;estimatedMinutes:number;difficulty:'Foundation'|'Intermediate'|'Advanced';order:number;status:'available'|'pending';questionSetId:string;flashcardSetId:string;formulaIds:string[];officialLearningOutcomes:string[]};
export type Question={id:string;lessonId:string;topicId:string;officialLearningOutcome:string;difficulty:'easy'|'medium'|'hard';estimatedSeconds:number;stem:string;choices:[string,string,string];correctChoiceIndex:number;explanation:string;incorrectChoiceExplanations:[string,string,string];relatedFormulaIds:string[];tags:string[]};
export type Formula={id:string;name:string;expression:string;meaning:string;variables:Record<string,string>;workedExample:string;commonMistake:string;relatedLessonId:string};
export type Flashcard={id:string;lessonId:string;front:string;back:string;tags:string[]};
export type Confidence='confident'|'unsure'|'guess'; export type FlashcardRating='again'|'hard'|'good';
export type QuizAttempt={questionId:string;lessonId:string;correct:boolean;selectedIndex:number;confidence:Confidence;answeredAt:string};
export type Activity={id:string;type:'lesson'|'quiz'|'flashcard'|'note';label:string;timestamp:string};
export type ProgressState={version:1;completedLessons:string[];bookmarkedLessons:string[];notes:Record<string,string>;quizAttempts:QuizAttempt[];flashcardReviews:Record<string,{rating:FlashcardRating;reviewedAt:string}>;lastOpenedLesson:string|null;examDate:string;dailyQuestionGoal:number;theme:'light'|'dark';recentActivity:Activity[]};

import type {Activity,Confidence,FlashcardRating,ProgressState,QuizAttempt} from '../data/types';
export const STORAGE_KEY='cfa-pass-progress';
export const defaultProgress=():ProgressState=>({version:1,completedLessons:[],bookmarkedLessons:[],notes:{},quizAttempts:[],flashcardReviews:{},lastOpenedLesson:null,examDate:'',dailyQuestionGoal:10,theme:'light',recentActivity:[]});
const strings=(v:unknown):v is string[]=>Array.isArray(v)&&v.every(x=>typeof x==='string');
export function parseProgress(raw:string|null):ProgressState{if(!raw)return defaultProgress();try{const x:unknown=JSON.parse(raw);if(!x||typeof x!=='object')return defaultProgress();const p=x as Partial<ProgressState>;if(p.version!==1||!strings(p.completedLessons)||!strings(p.bookmarkedLessons))return defaultProgress();return{...defaultProgress(),...p,notes:p.notes&&typeof p.notes==='object'?p.notes:{},quizAttempts:Array.isArray(p.quizAttempts)?p.quizAttempts:[],recentActivity:Array.isArray(p.recentActivity)?p.recentActivity:[]};}catch{return defaultProgress();}}
export const loadProgress=()=>parseProgress(localStorage.getItem(STORAGE_KEY));
export const saveProgress=(state:ProgressState)=>localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
export const completionPercent=(completed:string[],total:number)=>total<=0?0:Math.round(Math.min(completed.length,total)/total*100);
export const quizScore=(attempts:Pick<QuizAttempt,'correct'>[])=>attempts.length?Math.round(attempts.filter(a=>a.correct).length/attempts.length*100):0;
export function activity(type:Activity['type'],label:string):Activity{return{id:crypto.randomUUID(),type,label,timestamp:new Date().toISOString()};}
export function recordAnswer(state:ProgressState,input:{questionId:string;lessonId:string;correct:boolean;selectedIndex:number;confidence:Confidence}):ProgressState{return{...state,quizAttempts:[...state.quizAttempts,{...input,answeredAt:new Date().toISOString()}],recentActivity:[activity('quiz',input.correct?'Answered correctly':'Reviewed an incorrect answer'),...state.recentActivity].slice(0,12)};}
export function rateCard(state:ProgressState,id:string,rating:FlashcardRating):ProgressState{return{...state,flashcardReviews:{...state.flashcardReviews,[id]:{rating,reviewedAt:new Date().toISOString()}},recentActivity:[activity('flashcard',`Reviewed a flashcard: ${rating}`),...state.recentActivity].slice(0,12)};}

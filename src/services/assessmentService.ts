import type {Confidence,Question} from '../data/types';
import {officialModuleForLesson} from '../content/quantitativeCurriculum';

export type AssessmentAnswer={questionId:string;lessonId:string;correct:boolean;confidence:Confidence};
const seededRandom=(seed:number)=>()=>((seed=Math.imul(48271,seed)%2147483647)&2147483647)/2147483647;
const moduleId=(q:Question)=>q.officialModuleId??officialModuleForLesson(q.lessonId)?.id??q.lessonId;

/** Selects official questions evenly across official modules. LM7 alternates both study subdivisions. */
export function selectBalancedAssessment(questions:Question[],count=90,seed=2027,includeSupplementary=false){
 const eligible=questions.filter(q=>includeSupplementary||q.supplementary!==true),groups=new Map<string,Question[]>();
 for(const q of eligible){const id=moduleId(q);groups.set(id,[...(groups.get(id)??[]),q])}
 const ids=[...groups.keys()].sort(),random=seededRandom(seed);
 if(!ids.length||count<ids.length)return[];
 const shuffle=<T,>(xs:T[])=>{const out=[...xs];for(let i=out.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[out[i],out[j]]=[out[j],out[i]]}return out};
 const base=Math.floor(count/ids.length),extra=count%ids.length,result:Question[]=[];
 ids.forEach((id,index)=>{const target=base+(index<extra?1:0),pool=groups.get(id)!;
  if(id==='QM-LM7'){
   const a=shuffle(pool.filter(q=>(q.subdivision??(q.lessonId==='quant-sampling-08'?'A':'B'))==='A'));
   const b=shuffle(pool.filter(q=>(q.subdivision??(q.lessonId==='quant-sampling-08'?'A':'B'))==='B'));
   for(let i=0;i<target;i++){const source=i%2===0?a:b;const candidate=source.shift()??(a.shift()||b.shift());if(candidate)result.push(candidate)}
  }else result.push(...shuffle(pool).slice(0,target));
 });
 return shuffle(result);
}
export const assessmentScore=(answers:AssessmentAnswer[])=>answers.length?answers.filter(a=>a.correct).length/answers.length:0;
export function moduleBreakdown(answers:AssessmentAnswer[]){return answers.reduce<Record<string,{answered:number;correct:number}>>((out,a)=>{const id=officialModuleForLesson(a.lessonId)?.id??a.lessonId;out[id]??={answered:0,correct:0};out[id].answered++;if(a.correct)out[id].correct++;return out},{})}
export function confidenceBreakdown(answers:AssessmentAnswer[]){return answers.reduce<Record<Confidence,{answered:number;correct:number}>>((out,a)=>{out[a.confidence].answered++;if(a.correct)out[a.confidence].correct++;return out},{guess:{answered:0,correct:0},unsure:{answered:0,correct:0},confident:{answered:0,correct:0}})}

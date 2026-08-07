import {Link} from 'react-router-dom';
import {useEffect,useMemo,useState} from 'react';
import type {Confidence,Question} from '../../data/types';
import {assessmentScore,confidenceBreakdown,type AssessmentAnswer} from '../../services/assessmentService';
import {recordAnswer} from '../../services/progressService';
import {useProgress} from '../../hooks/useProgress';
import {QuestionCard} from './QuestionCard';
import {AnswerExplanation} from './AnswerExplanation';
import {ConfidenceSelector} from './ConfidenceSelector';
import {Button} from '../common/Button';

type Mode='timed'|'untimed';
type Saved={ids:string[];index:number;answers:AssessmentAnswer[];remaining:number;paused:boolean;mode:Mode};
const shuffle=<T,>(items:T[])=>{const out=[...items];for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]]}return out};

export function ChapterExam({questions,lessonId}:{questions:Question[];lessonId:string}){
 const officialQuestions=useMemo(()=>questions.filter(question=>!question.supplementary),[questions]);
 const key=`cfa-pass-chapter-exam-v1-${lessonId}`;
 const saved=useMemo(()=>{try{const value=JSON.parse(localStorage.getItem(key)??'null') as Saved|null;if(value?.ids?.length)return value}catch{localStorage.removeItem(key)}return null},[key]);
 const[mode,setMode]=useState<Mode>(saved?.mode??'timed'),[started,setStarted]=useState(Boolean(saved));
 const[list,setList]=useState(()=>saved?saved.ids.map(id=>officialQuestions.find(q=>q.id===id)!).filter(Boolean):shuffle(officialQuestions).slice(0,30));
 const[index,setIndex]=useState(saved?.index??0),[answers,setAnswers]=useState<AssessmentAnswer[]>(saved?.answers??[]),[remaining,setRemaining]=useState(saved?.remaining??45*60),[paused,setPaused]=useState(saved?.paused??false),[selected,setSelected]=useState<number|null>(null),[confidence,setConfidence]=useState<Confidence|null>(null);
 const{update}=useProgress();
 useEffect(()=>{if(started)localStorage.setItem(key,JSON.stringify({ids:list.map(q=>q.id),index,answers,remaining,paused,mode}))},[answers,index,key,list,mode,paused,remaining,started]);
 useEffect(()=>{if(!started||mode==='untimed'||paused||index>=list.length||remaining===0)return;const timer=setInterval(()=>setRemaining(x=>Math.max(0,x-1)),1000);return()=>clearInterval(timer)},[index,list.length,mode,paused,remaining,started]);
 if(!started)return <section className="card"><h2>Chapter exam</h2><p className="muted mt-2">30 randomized questions. Timed mode allows 45 minutes; untimed mode retains review and persistence.</p><div className="mt-4 flex flex-wrap gap-2"><Button className={mode==='timed'?'btn-primary':''} onClick={()=>setMode('timed')}>Timed · 45 minutes</Button><Button className={mode==='untimed'?'btn-primary':''} onClick={()=>setMode('untimed')}>Untimed</Button></div><Button className="btn-primary mt-5" onClick={()=>setStarted(true)}>Start chapter exam</Button></section>;
 const finished=index>=list.length||remaining===0;
 if(finished){
  const outcomes=Object.fromEntries([...new Set(answers.map(a=>list.find(q=>q.id===a.questionId)?.officialLearningOutcome??'Unmapped'))].map(outcome=>{const subset=answers.filter(a=>(list.find(q=>q.id===a.questionId)?.officialLearningOutcome??'Unmapped')===outcome);return[outcome,{answered:subset.length,correct:subset.filter(a=>a.correct).length}]}));
  const conf=confidenceBreakdown(answers),wrong=answers.filter(a=>!a.correct).map(a=>list.find(q=>q.id===a.questionId)).filter(Boolean) as Question[];
  return <section className="card"><h2>Chapter exam complete</h2><p className="mt-2 text-3xl font-bold">{(assessmentScore(answers)*100).toFixed(1)}%</p><h3 className="mt-5">Outcome breakdown</h3><ul className="mt-2 space-y-2">{Object.entries(outcomes).map(([name,value])=><li key={name}><strong>{value.correct}/{value.answered}</strong> — {name}</li>)}</ul><h3 className="mt-5">Confidence breakdown</h3><ul>{Object.entries(conf).map(([name,value])=><li key={name}>{name}: {value.correct}/{value.answered}</li>)}</ul><h3 className="mt-5">Incorrect-answer review</h3>{wrong.length?<ul className="mt-2 space-y-3">{wrong.map(q=><li key={q.id}><Link className="text-blue-700 underline dark:text-blue-300" to={`/lessons/${q.lessonId}`}>{q.stem}</Link>{q.relatedFormulaIds.map(id=><Link key={id} className="ml-2 text-blue-700 underline dark:text-blue-300" to={`/formulas#${id}`}>{id}</Link>)}</li>)}</ul>:<p className="muted mt-2">No incorrect answers.</p>}<div className="mt-5 flex flex-wrap gap-2">{wrong.length>0&&<Button className="btn-primary" onClick={()=>{setList(shuffle(wrong));setIndex(0);setAnswers([]);setRemaining(45*60);setPaused(false)}}>Retry incorrect</Button>}<Button onClick={()=>{localStorage.removeItem(key);location.reload()}}>Start a new exam</Button><Link className="btn" to={`/lessons/${lessonId}`}>Return to lesson</Link></div></section>
 }
 const q=list[index],revealed=selected!==null;
 function next(){if(selected===null||confidence===null)return;const correct=selected===q.correctChoiceIndex;const answer={questionId:q.id,lessonId:q.lessonId,correct,confidence};setAnswers(a=>[...a,answer]);update(p=>recordAnswer(p,{...answer,selectedIndex:selected}));setIndex(i=>i+1);setSelected(null);setConfidence(null)}
 return <section className="card"><div className="flex flex-wrap items-center justify-between gap-2"><strong>Chapter exam · {index+1}/{list.length}</strong>{mode==='timed'&&<span aria-live="polite">{Math.floor(remaining/60)}:{String(remaining%60).padStart(2,'0')} remaining</span>}<Button onClick={()=>setPaused(x=>!x)}>{paused?'Resume':'Pause'}</Button></div>{paused?<p role="status" className="mt-6 text-center">Exam paused. Progress is saved on this device.</p>:<div className="mt-5"><QuestionCard question={q} selected={selected} onSelect={setSelected} revealed={revealed}/>{revealed&&<><AnswerExplanation question={q} selected={selected}/><ConfidenceSelector value={confidence} onChange={setConfidence}/><Button className="btn-primary mt-4" disabled={!confidence} onClick={next}>Next question</Button></>}</div>}</section>
}

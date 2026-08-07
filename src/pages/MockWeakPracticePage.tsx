import {useMemo,useState} from 'react';
import {Link,useSearchParams} from 'react-router-dom';
import {MockExamPlayer} from '../components/mocks/MockExamPlayer';
import {MockExamResults} from '../components/mocks/MockExamResults';
import {useMockLibrary} from '../hooks/useMockLibrary';
import {finishAttempt,loadMockProgress,newAttempt,saveMockProgress,selectWeakBy,updatePersistentFlags,weakQuestions} from '../mocks/mockService';
import type {MockAttempt,MockExam,MockProgress,MockQuestion} from '../mocks/types';

function PracticeSession({questions,title}:{questions:MockQuestion[];title:string}){
  const mock=useMemo<MockExam>(()=>({id:`practice-${questions.map(q=>q.id).join('-')}`,title,provider:'Private weak-question bank',year:new Date().getFullYear(),sourceFile:'',sourceFolder:'',questionCount:questions.length,timeLimitMinutes:Math.max(1,Math.ceil(questions.length*1.5)),questions}),[questions,title]);
  const[progress,setProgress]=useState(loadMockProgress);
  const[attempt,setAttempt]=useState<MockAttempt>(()=>({...newAttempt(mock,'practice'),flags:progress.persistentFlags.filter(id=>questions.some(q=>q.id===id))}));
  function save(a:MockAttempt){setAttempt(a);let next:MockProgress={...progress,attempts:[...progress.attempts.filter(x=>x.id!==a.id),a]};for(const q of questions)next=updatePersistentFlags(next,q.id,a.flags.includes(q.id));setProgress(next);saveMockProgress(next)}
  function finish(a:MockAttempt){const next=finishAttempt(progress,mock,a);setProgress(next);saveMockProgress(next);setAttempt(next.attempts.find(x=>x.id===a.id)!)}
  return attempt.status==='completed'?<MockExamResults mock={mock} attempt={attempt}/>:<><h1>{title}</h1><MockExamPlayer mock={mock} initial={attempt} onSave={save} onFinish={finish}/></>;
}

export function MockWeakPracticePage(){
  const library=useMockLibrary(),[params]=useSearchParams(),progress=loadMockProgress();
  if(library===undefined)return <p role="status" className="card">Loading private mock library…</p>;
  if(!library)return <><h1>Question practice</h1><p className="card mt-6">Private mock library not installed.</p></>;
  const flagged=params.get('flags')==='1';
  const filter=params.get('filter')==='repeated'?'repeated':params.get('filter')==='all'?'all':'unresolved';
  const eligibleIds=new Set(weakQuestions(progress,library,filter).map(q=>q.id));
  const selected=flagged?library.mocks.flatMap(m=>m.questions).filter(q=>progress.persistentFlags.includes(q.id)):selectWeakBy(progress,library,{mockId:params.get('mockId')||undefined,topic:params.get('topic')||undefined,officialModuleId:params.get('officialModuleId')||undefined}).filter(q=>eligibleIds.has(q.id));
  if(!selected.length)return <><h1>{flagged?'Flagged Questions':'Incorrect Answers'}</h1><section className="card mt-6"><p>No questions match this practice filter yet.</p><Link className="btn mt-4" to="/mocks">Back to Mock Exams</Link></section></>;
  return <PracticeSession questions={selected} title={flagged?'Flagged Questions Practice':'Incorrect Answers Practice'}/>;
}

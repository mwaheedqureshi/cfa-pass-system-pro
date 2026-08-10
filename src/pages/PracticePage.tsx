import {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import returnsQuestions from '../data/questions/quantitative.json';
import benchmarkQuestions from '../data/questions/quantitative-benchmarking.json';
import tvmQuestions from '../data/questions/quantitative-tvm.json';
import statisticsQuestions from '../data/questions/quantitative-statistics.json';
import probabilityQuestions from '../data/questions/quantitative-probability.json';
import distributionQuestions from '../data/questions/quantitative-distributions.json';
import samplingQuestions from '../data/questions/quantitative-sampling.json';
import hypothesisQuestions from '../data/questions/quantitative-hypothesis.json';
import regressionQuestions from '../data/questions/quantitative-regression.json';
import simulationQuestions from '../data/questions/quantitative-simulation.json';
import dataAiQuestions from '../data/questions/quantitative-data-ai.json';
import economicsQuestions from '../data/questions/economics-firm-market-01.json';
import economicsQuestions02 from '../data/questions/economics-02-understanding-business-cycles.json';
import economicsQuestions03 from '../data/questions/economics-03-fiscal-policy.json';
import economicsQuestions04 from '../data/questions/economics-04-monetary-policy.json';
import {ComprehensiveAssessment} from '../components/practice/ComprehensiveAssessment';
import {ChapterExam} from '../components/practice/ChapterExam';
import {QuizEngine} from '../components/practice/QuizEngine';
import {lessons} from '../content/lessonManifest';
import type {Question} from '../data/types';

const quantitative=[...returnsQuestions,...benchmarkQuestions,...tvmQuestions,...statisticsQuestions,...probabilityQuestions,...distributionQuestions,...samplingQuestions,...hypothesisQuestions,...regressionQuestions,...simulationQuestions,...dataAiQuestions] as unknown as Question[];
const questions=[...quantitative,...economicsQuestions,...economicsQuestions02,...economicsQuestions03,...economicsQuestions04] as Question[];

export function PracticePage(){
 const[params]=useSearchParams();
 const[lessonId,setLessonId]=useState(params.get('lesson')??'all');
 if(params.get('mode')==='quantitative')return <><h1>Quantitative comprehensive assessment</h1><p className="muted mt-2">90 official-scope questions balanced across 11 official modules, with both LM7 study subdivisions represented. Your timer and progress persist locally.</p><div className="mt-6"><ComprehensiveAssessment questions={quantitative}/></div></>;
 if(params.get('mode')==='chapter-exam'&&lessonId!=='all'){const chapterQuestions=questions.filter(q=>q.lessonId===lessonId);return <><h1>{lessons.find(l=>l.id===lessonId)?.title} chapter exam</h1><p className="muted mt-2">A persistent 30-question assessment with outcome and confidence diagnostics.</p><div className="mt-6"><ChapterExam questions={chapterQuestions} lessonId={lessonId}/></div></>}
 const filtered=lessonId==='all'?questions:questions.filter(q=>q.lessonId===lessonId);
 return <><h1>Practice centre</h1><p className="muted mt-2">Original questions covering every available learning module.</p><label className="label mt-5 max-w-md" htmlFor="practice-module">Question module<select id="practice-module" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={lessonId} onChange={e=>setLessonId(e.target.value)}><option value="all">All modules ({questions.length})</option>{lessons.map(l=><option key={l.id} value={l.id}>{l.title} ({questions.filter(q=>q.lessonId===l.id).length})</option>)}</select></label><div className="mt-6" key={lessonId}><QuizEngine questions={filtered}/></div></>
}

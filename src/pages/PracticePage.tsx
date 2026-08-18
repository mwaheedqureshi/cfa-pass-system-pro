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
import economicsQuestions05 from '../data/questions/economics-05-introduction-to-geopolitics.json';
import economicsQuestions06 from '../data/questions/economics-06-international-trade.json';
import economicsQuestions07 from '../data/questions/economics-07-capital-flows-and-the-fx-market.json';
import economicsQuestions08 from '../data/questions/economics-08-exchange-rate-calculations.json';
import fsaQuestions01 from '../data/questions/fsa-01-introduction-to-financial-statement-analysis.json';
import fsaQuestions02 from '../data/questions/fsa-02-analyzing-income-statements.json';
import fsaQuestions03 from '../data/questions/fsa-03-analyzing-balance-sheets.json';
import fsaQuestions04 from '../data/questions/fsa-04-analyzing-statements-of-cash-flows-i.json';
import fsaQuestions05 from '../data/questions/fsa-05-analyzing-statements-of-cash-flows-ii.json';
import fsaQuestions06 from '../data/questions/fsa-06-analysis-of-inventories.json';
import fsaQuestions07 from '../data/questions/fsa-07-analysis-of-long-term-assets.json';
import fsaQuestions08 from '../data/questions/fsa-08-topics-in-long-term-liabilities-and-equity.json';
import fsaQuestions09 from '../data/questions/fsa-09-analysis-of-income-taxes.json';
import fsaQuestions10 from '../data/questions/fsa-10-financial-reporting-quality.json';
import fsaQuestions11 from '../data/questions/fsa-11-financial-analysis-techniques.json';
import fsaQuestions12 from '../data/questions/fsa-12-introduction-to-financial-statement-modeling.json';
import corporateIssuersQuestions01 from '../data/questions/corporate-issuers-01-organizational-forms-corporate-issuer-features-and-ownership.json';
import corporateIssuersQuestions02 from '../data/questions/corporate-issuers-02-investors-and-other-stakeholders.json';
import corporateIssuersQuestions03 from '../data/questions/corporate-issuers-03-corporate-governance-conflicts-mechanisms-risks-and-benefits.json';
import corporateIssuersQuestions04 from '../data/questions/corporate-issuers-04-working-capital-and-liquidity.json';
import corporateIssuersQuestions05 from '../data/questions/corporate-issuers-05-capital-investments-and-capital-allocation.json';
import corporateIssuersQuestions06 from '../data/questions/corporate-issuers-06-capital-structure.json';
import corporateIssuersQuestions07 from '../data/questions/corporate-issuers-07-business-models.json';
import {ComprehensiveAssessment} from '../components/practice/ComprehensiveAssessment';
import {EconomicsComprehensiveAssessment} from '../components/practice/EconomicsComprehensiveAssessment';
import {ChapterExam} from '../components/practice/ChapterExam';
import {QuizEngine} from '../components/practice/QuizEngine';
import {lessons} from '../content/lessonManifest';
import type {Question} from '../data/types';

const quantitative=[...returnsQuestions,...benchmarkQuestions,...tvmQuestions,...statisticsQuestions,...probabilityQuestions,...distributionQuestions,...samplingQuestions,...hypothesisQuestions,...regressionQuestions,...simulationQuestions,...dataAiQuestions] as unknown as Question[];
const economics=[...economicsQuestions,...economicsQuestions02,...economicsQuestions03,...economicsQuestions04,...economicsQuestions05,...economicsQuestions06,...economicsQuestions07,...economicsQuestions08] as Question[];
const fsa=[...fsaQuestions01,...fsaQuestions02,...fsaQuestions03,...fsaQuestions04,...fsaQuestions05,...fsaQuestions06,...fsaQuestions07,...fsaQuestions08,...fsaQuestions09,...fsaQuestions10,...fsaQuestions11,...fsaQuestions12] as unknown as Question[];
const corporateIssuers=[...corporateIssuersQuestions01,...corporateIssuersQuestions02,...corporateIssuersQuestions03,...corporateIssuersQuestions04,...corporateIssuersQuestions05,...corporateIssuersQuestions06,...corporateIssuersQuestions07] as unknown as Question[];
const questions=[...quantitative,...economics,...fsa,...corporateIssuers] as Question[];

export function PracticePage(){
 const[params]=useSearchParams();
 const[lessonId,setLessonId]=useState(params.get('lesson')??'all');
 if(params.get('mode')==='quantitative')return <><h1>Quantitative comprehensive assessment</h1><p className="muted mt-2">90 official-scope questions balanced across 11 official modules, with both LM7 study subdivisions represented. Your timer and progress persist locally.</p><div className="mt-6"><ComprehensiveAssessment questions={quantitative}/></div></>;
 if(params.get('mode')==='economics')return <><h1>Economics comprehensive assessment</h1><p className="muted mt-2">60 official-scope questions balanced across all 8 official Economics modules. Your timer and progress persist locally.</p><div className="mt-6"><EconomicsComprehensiveAssessment questions={economics}/></div></>;
 if(params.get('mode')==='chapter-exam'&&lessonId!=='all'){const chapterQuestions=questions.filter(q=>q.lessonId===lessonId);return <><h1>{lessons.find(l=>l.id===lessonId)?.title} chapter exam</h1><p className="muted mt-2">A persistent 30-question assessment with outcome and confidence diagnostics.</p><div className="mt-6"><ChapterExam questions={chapterQuestions} lessonId={lessonId}/></div></>}
 const filtered=lessonId==='all'?questions:questions.filter(q=>q.lessonId===lessonId);
 return <><h1>Practice centre</h1><p className="muted mt-2">Original questions covering every available learning module.</p><label className="label mt-5 max-w-md" htmlFor="practice-module">Question module<select id="practice-module" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={lessonId} onChange={e=>setLessonId(e.target.value)}><option value="all">All modules ({questions.length})</option>{lessons.map(l=><option key={l.id} value={l.id}>{l.title} ({questions.filter(q=>q.lessonId===l.id).length})</option>)}</select></label><div className="mt-6" key={lessonId}><QuizEngine questions={filtered}/></div></>
}

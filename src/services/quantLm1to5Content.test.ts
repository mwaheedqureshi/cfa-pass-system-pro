import {describe,expect,it} from 'vitest';
import returnsQuestions from '../data/questions/quantitative.json';
import benchmarkQuestions from '../data/questions/quantitative-benchmarking.json';
import tvmQuestions from '../data/questions/quantitative-tvm.json';
import statisticsQuestions from '../data/questions/quantitative-statistics.json';
import returnsCards from '../data/flashcards/quantitative.json';
import modules34Cards from '../data/flashcards/quantitative-modules-3-4.json';
import statisticsCards from '../data/flashcards/quantitative-statistics.json';
import returnsFormulas from '../data/formulas/quantitative.json';
import modules34Formulas from '../data/formulas/quantitative-modules-3-4.json';
import modules56Formulas from '../data/formulas/quantitative-modules-5-6.json';

const questions=[...returnsQuestions,...benchmarkQuestions,...tvmQuestions,...statisticsQuestions];
const cards=[...returnsCards,...modules34Cards,...statisticsCards];
const formulas=[...returnsFormulas,...modules34Formulas,...modules56Formulas];
const targets={'quant-returns-01':40,'quant-returns-02':40,'quant-benchmarking-03':45,'quant-tvm-04':50,'quant-statistics-05':45} as const;

describe('v1.6.4 Quantitative LM1-LM5 remediation',()=>{
 it('meets the exact assessment and flashcard targets with official classification',()=>{
  for(const[lessonId,target]of Object.entries(targets)){
   const lessonQuestions=questions.filter(item=>item.lessonId===lessonId);
   const lessonCards=cards.filter(item=>item.lessonId===lessonId);
   expect(lessonQuestions).toHaveLength(target);
   expect(lessonCards).toHaveLength(target);
   expect(lessonQuestions.every(item=>item.officialModuleId&&item.studyLessonId===lessonId&&item.supplementary===false)).toBe(true);
   expect(lessonCards.every(item=>item.officialModuleId&&item.studyLessonId===lessonId&&item.supplementary===false)).toBe(true);
   expect(lessonQuestions.filter(item=>item.tags.includes('mock-style')).length).toBeGreaterThanOrEqual(10);
  }
 });

 it('keeps formula metadata complete and resolvable',()=>{
  const ids=new Set(formulas.map(item=>item.id));
  for(const question of questions.filter(item=>item.lessonId in targets))
   expect(question.relatedFormulaIds.every(id=>ids.has(id))).toBe(true);
  for(const formula of formulas.filter(item=>item.relatedLessonId in targets)){
   expect(formula.expression).toBeTruthy();expect(formula.variables).toBeTruthy();expect(formula.meaning).toBeTruthy();
   expect(formula.workedExample).toBeTruthy();expect(formula.commonMistake).toBeTruthy();expect(formula.supplementary).toBe(false);
  }
 });

 it('excludes generic personal-finance assessment scope from LM4',()=>{
  const lm4=questions.filter(item=>item.lessonId==='quant-tvm-04');
  expect(lm4.some(item=>/(mortgage|retirement|personal loan)/i.test(`${item.stem} ${item.tags.join(' ')}`))).toBe(false);
 });
});

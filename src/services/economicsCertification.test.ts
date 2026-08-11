import {describe,expect,it} from 'vitest';
import lm1 from '../data/questions/economics-firm-market-01.json';
import lm2 from '../data/questions/economics-02-understanding-business-cycles.json';
import lm3 from '../data/questions/economics-03-fiscal-policy.json';
import lm4 from '../data/questions/economics-04-monetary-policy.json';
import lm5 from '../data/questions/economics-05-introduction-to-geopolitics.json';
import lm6 from '../data/questions/economics-06-international-trade.json';
import lm7 from '../data/questions/economics-07-capital-flows-and-the-fx-market.json';
import lm8 from '../data/questions/economics-08-exchange-rate-calculations.json';
import {assessmentScore,confidenceBreakdown,moduleBreakdown,selectBalancedAssessment} from './assessmentService';
import type {Question} from '../data/types';

const questions=[...lm1,...lm2,...lm3,...lm4,...lm5,...lm6,...lm7,...lm8] as unknown as Question[];
const SEED=2708,COUNT=60;

describe('v1.7.9 Economics comprehensive assessment certification',()=>{
 const selected=selectBalancedAssessment(questions,COUNT,SEED);

 it('builds the real 60-question official comprehensive assessment across all 8 official modules',()=>{
  expect(selected).toHaveLength(COUNT);
  expect(selected.every(q=>!q.supplementary)).toBe(true);
  const moduleIds=new Set(selected.map(q=>q.lessonId));
  expect(moduleIds.size).toBe(8);
 });

 it('balances module allocation by no more than 1 question across the 8 modules', () => {
  const counts=[...new Set(selected.map(q=>q.lessonId))].map(id=>selected.filter(q=>q.lessonId===id).length);
  expect(counts).toHaveLength(8);
  expect(Math.max(...counts)-Math.min(...counts)).toBeLessThanOrEqual(1);
 });

 it('excludes supplementary content entirely from the selection pool', () => {
  const supplementaryIds=new Set(questions.filter(q=>q.supplementary).map(q=>q.id));
  expect(selected.some(q=>supplementaryIds.has(q.id))).toBe(false);
 });

 it('is deterministic given the same seed and question pool', () => {
  const again=selectBalancedAssessment(questions,COUNT,SEED);
  expect(again.map(q=>q.id)).toEqual(selected.map(q=>q.id));
 });

 it('produces a different, still-balanced selection under a different seed', () => {
  const other=selectBalancedAssessment(questions,COUNT,SEED+1);
  expect(other.map(q=>q.id)).not.toEqual(selected.map(q=>q.id));
  expect(other).toHaveLength(COUNT);
 });

 it('scores and reports a module breakdown across all 8 official Economics modules', () => {
  const answers=selected.map(q=>({questionId:q.id,lessonId:q.lessonId,correct:true,confidence:'confident' as const}));
  expect(assessmentScore(answers)).toBe(1);
  const modules=moduleBreakdown(answers);
  expect(Object.keys(modules)).toHaveLength(8);
  expect(Object.keys(modules).sort()).toEqual(['ECO-LM1','ECO-LM2','ECO-LM3','ECO-LM4','ECO-LM5','ECO-LM6','ECO-LM7','ECO-LM8']);
  const total=Object.values(modules).reduce((sum,m)=>sum+m.answered,0);
  expect(total).toBe(COUNT);
 });

 it('reports a confidence breakdown', () => {
  const answers=selected.slice(0,10).map((q,i)=>({questionId:q.id,lessonId:q.lessonId,correct:i%2===0,confidence:(['guess','unsure','confident'] as const)[i%3]}));
  const conf=confidenceBreakdown(answers);
  expect(conf.guess.answered+conf.unsure.answered+conf.confident.answered).toBe(10);
 });
});

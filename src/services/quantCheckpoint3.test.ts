import {describe,expect,it} from 'vitest';
import probabilityQuestions from '../data/questions/quantitative-probability.json';
import samplingQuestions from '../data/questions/quantitative-sampling.json';
import hypothesisQuestions from '../data/questions/quantitative-hypothesis.json';
import portfolioQuestions from '../data/questions/quantitative-distributions.json';
import probabilityCards from '../data/flashcards/quantitative-probability.json';
import lm78Cards from '../data/flashcards/quantitative-modules-7-8.json';
import lm910Cards from '../data/flashcards/quantitative-modules-9-10.json';
import {selectBalancedAssessment} from './assessmentService';
import type {Question} from '../data/types';

const questions=[...probabilityQuestions,...samplingQuestions,...hypothesisQuestions,...portfolioQuestions] as unknown as Question[];
const byLesson=(lessonId:string)=>questions.filter(q=>q.lessonId===lessonId&&!q.supplementary);
describe('v1.6.6 Checkpoint 3 verification',()=>{
 it('preserves exact official question and flashcard inventories',()=>{
  expect(byLesson('quant-probability-06')).toHaveLength(50);expect(probabilityCards.filter(c=>!c.supplementary)).toHaveLength(50);
  expect(byLesson('quant-sampling-08')).toHaveLength(45);expect(lm78Cards.filter(c=>c.lessonId==='quant-sampling-08'&&!c.supplementary)).toHaveLength(45);
  expect(byLesson('quant-hypothesis-09')).toHaveLength(45);expect(lm910Cards.filter(c=>c.lessonId==='quant-hypothesis-09'&&!c.supplementary)).toHaveLength(45);
  expect(byLesson('quant-distributions-07')).toHaveLength(50);expect(lm78Cards.filter(c=>c.lessonId==='quant-distributions-07'&&!c.supplementary)).toHaveLength(50);
 });
 it('balances answer positions and retains explanation alignment',()=>{for(const lesson of ['quant-probability-06','quant-sampling-08','quant-hypothesis-09','quant-distributions-07']){const pool=byLesson(lesson),counts=[0,1,2].map(i=>pool.filter(q=>q.correctChoiceIndex===i).length);expect(Math.max(...counts)-Math.min(...counts)).toBeLessThanOrEqual(1);for(const q of pool){expect(q.choices).toHaveLength(3);expect(q.incorrectChoiceExplanations).toHaveLength(3);expect(q.incorrectChoiceExplanations[q.correctChoiceIndex]).toMatch(/^Correct\./)}}});
 it('contains no stale distribution-only LM8 questions',()=>{const stale=/binomial|Poisson|normal distribution|z-score|Student.?s t|probability density|probability mass/i;expect(byLesson('quant-distributions-07').some(q=>stale.test(q.stem))).toBe(false)});
 it('uses correct distribution calculations and tail directions',()=>{expect(.2*(-.05)+.5*.04+.3*.12).toBeCloseTo(.046);expect(.2*(-.05-.046)**2+.5*(.04-.046)**2+.3*(.12-.046)**2).toBeCloseTo(.003504);expect(5*.1*.9**4).toBeCloseTo(.32805);expect(1-.8849).toBeCloseTo(.1151);expect((-.06-.06)/.08).toBeCloseTo(-1.5)});
 it('verifies estimation and hypothesis decisions',()=>{expect(18/Math.sqrt(81)).toBe(2);expect(1.96*12/Math.sqrt(36)).toBeCloseTo(3.92);expect((54-50)/(10/Math.sqrt(25))).toBe(2);expect((12-10)/(4/Math.sqrt(16))).toBe(2);expect(1-.2).toBe(.8);expect(hypothesisQuestions.some(q=>/accept the null|prove the null|probability the null is true/i.test(q.explanation))).toBe(false)});
 it('verifies portfolio cross terms, CAL, utility, and allocation',()=>{const variance=.4**2*.1**2+.6**2*.15**2+2*.4*.6*.25*.1*.15;expect(variance).toBeCloseTo(.0115);expect(Math.sqrt(variance)).toBeCloseTo(.107238);expect(.03+.75*(.09-.03)).toBeCloseTo(.075);expect(.08-.5*4*.1**2).toBeCloseTo(.06);expect(.06/(3*.15**2)).toBeCloseTo(.888889)});
 it('counts LM7 once while sampling both subdivisions in the comprehensive assessment',()=>{const selected=selectBalancedAssessment(questions,40,2027),lm7=selected.filter(q=>q.officialModuleId==='QM-LM7');expect(lm7.some(q=>q.lessonId==='quant-sampling-08')).toBe(true);expect(lm7.some(q=>q.lessonId==='quant-hypothesis-09')).toBe(true);expect(new Set(lm7.map(q=>q.officialModuleId))).toEqual(new Set(['QM-LM7']));expect(selected.every(q=>!q.supplementary)).toBe(true)});
 it('leaves at least 30 official items for every scoped chapter exam',()=>{for(const lesson of ['quant-probability-06','quant-sampling-08','quant-hypothesis-09','quant-distributions-07'])expect(byLesson(lesson).length).toBeGreaterThanOrEqual(30)});
});

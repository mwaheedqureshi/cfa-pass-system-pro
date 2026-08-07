import {describe,expect,it} from 'vitest';
import returnsQuestions from '../data/questions/quantitative.json';
import lm3Questions from '../data/questions/quantitative-benchmarking.json';
import returnsFormulas from '../data/formulas/quantitative.json';
import lm3Formulas from '../data/formulas/quantitative-modules-3-4.json';

const questions=[...returnsQuestions,...lm3Questions];
const formulas=new Set([...returnsFormulas,...lm3Formulas].map(x=>x.id));
const moduleQuestions=(id:string)=>questions.filter(q=>q.officialModuleId===id&&!q.supplementary);
const replacements=questions.filter(q=>/^q-lm(?:1r|2r|3r|3v)-/.test(q.id));

describe('v1.6.6 Checkpoint 1 verification',()=>{
 it('has exact LM1-LM3 official counts and all replacement IDs',()=>{
  expect(moduleQuestions('QM-LM1')).toHaveLength(40);
  expect(moduleQuestions('QM-LM2')).toHaveLength(40);
  expect(moduleQuestions('QM-LM3')).toHaveLength(45);
  for(const[prefix,count]of [['q-lm1r-',20],['q-lm2r-',15],['q-lm3r-',15],['q-lm3v-',30]] as const)
   for(let i=1;i<=count;i++)expect(questions.some(q=>q.id===`${prefix}${String(i).padStart(2,'0')}`)).toBe(true);
  expect(questions.some(q=>/^q03-/.test(q.id))).toBe(false);
 });

 it('keeps answers balanced, formula links valid, and replacements substantive',()=>{
  for(const id of ['QM-LM1','QM-LM2','QM-LM3']){
   const counts=[0,0,0];moduleQuestions(id).forEach(q=>counts[q.correctChoiceIndex]++);
   expect(Math.max(...counts)-Math.min(...counts)).toBeLessThanOrEqual(1);
  }
  for(const q of moduleQuestions('QM-LM1').concat(moduleQuestions('QM-LM2'),moduleQuestions('QM-LM3'))){
   expect(q.choices).toHaveLength(3);expect(new Set(q.choices).size).toBe(3);
   expect(q.relatedFormulaIds.every(id=>formulas.has(id))).toBe(true);
   expect(q.lessonSectionId).toBeTruthy();expect(q.incorrectChoiceExplanations).toHaveLength(3);
  }
  expect(replacements.some(q=>/Which application of|Apply .* using/i.test(`${q.stem} ${q.choices.join(' ')}`))).toBe(false);
 });

 it('independently checks representative answer-key calculations',()=>{
  const keyed=(id:string)=>{const q=questions.find(x=>x.id===id);if(!q)throw new Error(id);return q.choices[q.correctChoiceIndex]};
  expect(keyed('q-lm1r-01')).toBe('10.00%');
  expect((86-80+2)/80).toBeCloseTo(.10,10);
  expect(keyed('q-lm1r-06')).toBe('4.81%');
  expect(1.09/1.04-1).toBeCloseTo(.0480769,6);
  expect(keyed('q-lm1r-13')).toBe('11.33%');
  expect((.08*150-.03*60)/90).toBeCloseTo(.113333,6);
  expect(keyed('q-lm2r-02')).toBe('5.10%');
  expect((99-98+4)/98).toBeCloseTo(.0510204,6);
  expect(keyed('q-lm2r-09')).toBe('−2.24%');
  expect(1.04*.94-1).toBeCloseTo(-.0224,10);
  expect(keyed('q-lm3r-03')).toBe('2.90%');
  expect(1.05*.98-1).toBeCloseTo(.029,10);
  expect(keyed('q-lm3v-08')).toBe('−39.50%');
  expect(.5*1.1*1.1-1).toBeCloseTo(-.395,10);
  expect(keyed('q-lm3v-20')).toBe('450 million');
  expect(30*20*.75).toBe(450);
 });

});

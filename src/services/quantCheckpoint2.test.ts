import {describe,expect,it} from 'vitest';
import lm4Questions from '../data/questions/quantitative-tvm.json';
import lm5Questions from '../data/questions/quantitative-statistics.json';
import lm4Formulas from '../data/formulas/quantitative-modules-3-4.json';
import lm5Formulas from '../data/formulas/quantitative-modules-5-6.json';

const questions=[...lm4Questions,...lm5Questions];
const formulas=new Set([...lm4Formulas,...lm5Formulas].map(x=>x.id));
const moduleQuestions=(id:string)=>questions.filter(q=>q.officialModuleId===id&&!q.supplementary);
const replacements=questions.filter(q=>/^q-lm(?:4x|4r|5r)-/.test(q.id));

describe('v1.6.6 Checkpoint 2 verification',()=>{
 it('has exact LM4-LM5 official counts and every replacement ID',()=>{
  expect(moduleQuestions('QM-LM4')).toHaveLength(50);
  expect(moduleQuestions('QM-LM5')).toHaveLength(45);
  for(const[prefix,count]of [['q-lm4x-',7],['q-lm4r-',10],['q-lm5r-',10]] as const)
   for(let i=1;i<=count;i++)expect(questions.some(q=>q.id===`${prefix}${String(i).padStart(2,'0')}`)).toBe(true);
 });

 it('keeps answers balanced, links formulas, and uses substantive prompts',()=>{
  for(const id of ['QM-LM4','QM-LM5']){
   const counts=[0,0,0];moduleQuestions(id).forEach(q=>counts[q.correctChoiceIndex]++);
   expect(Math.max(...counts)-Math.min(...counts)).toBeLessThanOrEqual(1);
   for(const q of moduleQuestions(id)){
    expect(q.choices).toHaveLength(3);expect(new Set(q.choices).size).toBe(3);
    expect(q.relatedFormulaIds.every(formulaId=>formulas.has(formulaId))).toBe(true);
    expect(q.lessonSectionId).toBeTruthy();expect(q.incorrectChoiceExplanations).toHaveLength(3);
   }
  }
  expect(replacements).toHaveLength(27);
  expect(replacements.some(q=>/Which application of|Apply .* using/i.test(`${q.stem} ${q.choices.join(' ')}`))).toBe(false);
 });

 it('independently checks representative answer-key calculations',()=>{
  const keyed=(id:string)=>{const q=questions.find(x=>x.id===id);if(!q)throw new Error(id);return q.choices[q.correctChoiceIndex]};
  expect(keyed('q-lm4x-01')).toBe('890.00');expect(1000/1.06**2).toBeCloseTo(889.9964,4);
  expect(keyed('q-lm4x-07')).toBe('5.01%');expect(1.04**2/1.03-1).toBeCloseTo(.0500971,6);
  expect(keyed('q-lm4r-07')).toBe('1.2353');expect(1.2*1.05/1.02).toBeCloseTo(1.235294,6);
  expect(keyed('q-lm4r-09')).toBe('0.50');expect((12-0)/(60-36)).toBe(.5);
  expect(keyed('q-lm5r-04')).toBe('2.67');expect(((1-3)**2+(3-3)**2+(5-3)**2)/3).toBeCloseTo(2.666667,6);
  expect(keyed('q-lm5r-08')).toBe('0.06');expect(.0012/(.1*.2)).toBeCloseTo(.06,10);
  expect(keyed('q-lm5r-09')).toBe('2.58%');expect(Math.sqrt((.04**2+.02**2)/3)).toBeCloseTo(.0258199,6);
 });

 it('contains the verified LM5 shape and downside formulas',()=>{
  expect(formulas.has('skewness-05')).toBe(true);
  expect(formulas.has('excess-kurtosis-05')).toBe(true);
  const target=lm5Formulas.find(x=>x.id==='target-semideviation-05');
  expect(target?.expression).toContain('n − 1');
 });
});

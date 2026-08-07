import {describe,expect,it} from 'vitest';
import questions from '../data/questions/quantitative-simulation.json';
import cards from '../data/flashcards/quantitative-modules-11-12.json';
import formulas from '../data/formulas/quantitative-modules-11-12.json';
import {selectBalancedAssessment} from './assessmentService';
import type {Question} from '../data/types';

describe('v1.6.6 Checkpoint 4A LM9 verification',()=>{
  const official=questions.filter(q=>!q.supplementary) as unknown as Question[];
  const lm9Cards=cards.filter(c=>c.officialModuleId==='QM-LM9'&&!c.supplementary);
  const lm9Formulas=formulas.filter(f=>f.officialModuleId==='QM-LM9'&&!f.supplementary);
  it('contains exactly 45 official questions and 45 official flashcards',()=>{expect(official).toHaveLength(45);expect(lm9Cards).toHaveLength(45)});
  it('keeps every official question in LM9 with three choices and complete explanations',()=>{for(const q of official){expect(q.officialModuleId).toBe('QM-LM9');expect(q.choices).toHaveLength(3);expect(q.incorrectChoiceExplanations).toHaveLength(3);expect(q.explanation.trim()).not.toBe('')}});
  it('balances answer positions exactly',()=>expect([0,1,2].map(index=>official.filter(q=>q.correctChoiceIndex===index).length)).toEqual([15,15,15]));
  it('separates official LM9 from supplementary content',()=>{expect(official.some(q=>q.supplementary)).toBe(false);expect(lm9Cards.some(c=>c.supplementary)).toBe(false)});
  it('provides a 30-question official chapter-exam pool',()=>{const sample=selectBalancedAssessment(official,30,409);expect(sample).toHaveLength(30);expect(sample.every(q=>q.officialModuleId==='QM-LM9'&&!q.supplementary)).toBe(true)});
  it('links verified application formulas without orphans',()=>{const ids=new Set(lm9Formulas.map(f=>f.id));for(const q of official)for(const id of q.relatedFormulaIds)expect(ids.has(id)).toBe(true)});
});

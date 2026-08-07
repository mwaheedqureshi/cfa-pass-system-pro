import {describe,expect,it} from 'vitest';
import questions from '../data/questions/quantitative-data-ai.json';
import cards from '../data/flashcards/quantitative-modules-11-12.json';
import formulas from '../data/formulas/quantitative-modules-11-12.json';
import {selectBalancedAssessment} from './assessmentService';
import type {Question} from '../data/types';

describe('v1.6.6 Checkpoint 5 LM11 verification',()=>{
 const official=questions.filter(q=>q.officialModuleId==='QM-LM11'&&!q.supplementary) as unknown as Question[];
 const supplementary=questions.filter(q=>q.officialModuleId==='QM-LM11'&&q.supplementary);
 const officialCards=cards.filter(c=>c.officialModuleId==='QM-LM11'&&!c.supplementary);
 const supplementaryCards=cards.filter(c=>c.officialModuleId==='QM-LM11'&&c.supplementary);
 it('maintains the required official and supplementary inventories',()=>{expect(official).toHaveLength(40);expect(supplementary).toHaveLength(10);expect(officialCards).toHaveLength(40);expect(supplementaryCards).toHaveLength(10)});
 it('uses three choices, full explanations, and balanced official answer positions',()=>{expect([0,1,2].map(i=>official.filter(q=>q.correctChoiceIndex===i).length)).toEqual([14,13,13]);for(const q of questions){expect(q.choices).toHaveLength(3);expect(q.incorrectChoiceExplanations).toHaveLength(3);expect(q.explanation.length).toBeGreaterThan(25)}});
 it('keeps every extended metric supplementary',()=>{expect(formulas.filter(f=>f.officialModuleId==='QM-LM11')).toHaveLength(10);expect(formulas.filter(f=>f.officialModuleId==='QM-LM11').every(f=>f.supplementary&&f.scopeStatement.startsWith('DAI-18'))).toBe(true);expect(supplementary.every(q=>q.stem.startsWith('SUPPLEMENTARY:'))).toBe(true)});
 it('builds a 30-question official-only chapter exam',()=>{const exam=selectBalancedAssessment(official,30,511);expect(exam).toHaveLength(30);expect(exam.every(q=>!q.supplementary&&q.officialModuleId==='QM-LM11')).toBe(true)});
 it('allows LM11 official integration without supplementary leakage',()=>{const integrated=selectBalancedAssessment(official,10,1111);expect(integrated).toHaveLength(10);expect(integrated.some(q=>q.tags.includes('mock-style'))).toBe(true);expect(integrated.every(q=>!q.supplementary)).toBe(true)});
});

import {describe,expect,it} from 'vitest';
import questions from '../data/questions/quantitative-regression.json';
import cards from '../data/flashcards/quantitative-modules-9-10.json';
import formulas from '../data/formulas/quantitative-modules-9-10.json';
import {selectBalancedAssessment} from './assessmentService';
import type {Question} from '../data/types';

describe('v1.6.6 Checkpoint 4B LM10 verification',()=>{
 const official=questions.filter(q=>q.officialModuleId==='QM-LM10'&&!q.supplementary) as unknown as Question[];
 const lm10Cards=cards.filter(c=>c.officialModuleId==='QM-LM10'&&!c.supplementary);
 const lm10Formulas=formulas.filter(f=>f.officialModuleId==='QM-LM10'&&!f.supplementary);
 it('contains exactly 50 official questions and flashcards',()=>{expect(official).toHaveLength(50);expect(lm10Cards).toHaveLength(50)});
 it('has balanced answer positions and complete three-choice explanations',()=>{expect([0,1,2].map(i=>official.filter(q=>q.correctChoiceIndex===i).length)).toEqual([17,17,16]);for(const q of official){expect(q.choices).toHaveLength(3);expect(q.incorrectChoiceExplanations).toHaveLength(3);expect(q.explanation.length).toBeGreaterThan(30)}});
 it('links every referenced formula and has complete Formula Explorer fields',()=>{const ids=new Set(lm10Formulas.map(f=>f.id));for(const q of official)for(const id of q.relatedFormulaIds)expect(ids.has(id)).toBe(true);for(const f of lm10Formulas){expect(f.expression).not.toBe('');expect(Object.keys(f.variables).length).toBeGreaterThan(0);expect(f.workedExample).not.toBe('');expect(f.commonMistake).not.toBe('');expect(f.relatedLessonId).toBe('quant-regression-10')}});
 it('provides a 30-question official chapter exam',()=>{const exam=selectBalancedAssessment(official,30,410);expect(exam).toHaveLength(30);expect(exam.every(q=>q.officialModuleId==='QM-LM10'&&!q.supplementary)).toBe(true)});
});

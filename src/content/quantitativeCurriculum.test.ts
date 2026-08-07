import {describe,expect,it} from 'vitest';
import {completedOfficialQuantModules,officialQuantModules,officialModuleForLesson,quantStudyLessonOrder} from './quantitativeCurriculum';
describe('2027 Quantitative curriculum map',()=>{
 it('contains exactly 11 official modules and 12 study lessons',()=>{expect(officialQuantModules).toHaveLength(11);expect(quantStudyLessonOrder).toHaveLength(12);expect(new Set(quantStudyLessonOrder).size).toBe(12)});
 it('groups both LM7 subdivisions once',()=>{expect(officialQuantModules.find(x=>x.id==='QM-LM7')?.studyLessonIds).toEqual(['quant-sampling-08','quant-hypothesis-09']);expect(officialModuleForLesson('quant-hypothesis-09')?.id).toBe('QM-LM7')});
 it('requires both study lessons to complete LM7',()=>{expect(completedOfficialQuantModules(['quant-sampling-08']).some(x=>x.id==='QM-LM7')).toBe(false);expect(completedOfficialQuantModules(['quant-sampling-08','quant-hypothesis-09']).some(x=>x.id==='QM-LM7')).toBe(true)});
 it('maps the preserved distribution route to portfolio LM8',()=>expect(officialModuleForLesson('quant-distributions-07')?.id).toBe('QM-LM8'));
});

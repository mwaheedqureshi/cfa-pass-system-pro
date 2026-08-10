import {describe,expect,it} from 'vitest';
import {officialEconomicsModules,officialEconomicsModuleCount,verifiedOfficialEconomicsModules,economicsLessonIds} from './economicsCurriculum';
import {lessons} from './lessonManifest';
describe('2027 Economics curriculum map',()=>{
 it('contains exactly 8 official modules in order',()=>{
  expect(officialEconomicsModules).toHaveLength(8);
  expect(officialEconomicsModuleCount).toBe(8);
  expect(officialEconomicsModules.map(m=>m.order)).toEqual([1,2,3,4,5,6,7,8]);
 });
 it('marks exactly ECO-LM1 through ECO-LM5 as verified after this release',()=>{
  expect(verifiedOfficialEconomicsModules.map(m=>m.id)).toEqual(['ECO-LM1','ECO-LM2','ECO-LM3','ECO-LM4','ECO-LM5']);
 });
 it('every verified module has a study lesson id that resolves to a published lesson',()=>{
  for(const module of verifiedOfficialEconomicsModules){
   expect(module.studyLessonId).not.toBeNull();
   expect(lessons.some(lesson=>lesson.id===module.studyLessonId)).toBe(true);
  }
 });
 it('every pending module has no study lesson id yet',()=>{
  for(const module of officialEconomicsModules)if(module.status==='pending')expect(module.studyLessonId).toBeNull();
 });
 it('derives economics lesson ids only from published modules',()=>{
  expect(economicsLessonIds).toEqual(['economics-firm-market-01','economics-02-understanding-business-cycles','economics-03-fiscal-policy','economics-04-monetary-policy','economics-05-introduction-to-geopolitics']);
 });
});

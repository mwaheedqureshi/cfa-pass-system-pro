import {describe,expect,it} from 'vitest';import {lessons} from './lessonManifest';
// economics-05-introduction-to-geopolitics and fsa-01-introduction-to-financial-statement-analysis are exempt
// from the formulaIds check: source verification confirmed the official 2027 reading contains zero symbolic
// formulas for these modules (purely conceptual/framework-based readings), and project policy forbids
// inventing a formula to satisfy a check.
const lessonsWithNoOfficialFormulas=new Set(['economics-05-introduction-to-geopolitics','fsa-01-introduction-to-financial-statement-analysis']);
describe('lesson manifest',()=>{it('has twenty-eight unique, complete lessons ordered within each topic',()=>{expect(lessons).toHaveLength(28);expect(new Set(lessons.map(x=>x.id)).size).toBe(lessons.length);for(const topicId of new Set(lessons.map(x=>x.topicId))){const topicLessons=lessons.filter(x=>x.topicId===topicId);expect(topicLessons.map(x=>x.order)).toEqual(topicLessons.map((_,index)=>index+1))}for(const lesson of lessons){expect(lesson.filePath.endsWith('.md')).toBe(true);expect((lesson.officialLearningOutcomes??lesson.scopeStatements??[]).length).toBeGreaterThan(0);if(!lessonsWithNoOfficialFormulas.has(lesson.id))expect(lesson.formulaIds.length).toBeGreaterThan(0);else expect(lesson.formulaIds).toEqual([])}})});

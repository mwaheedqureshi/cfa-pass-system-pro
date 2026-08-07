import {describe,expect,it} from 'vitest';
import {emptyMockProgress,filterMocksByYear,finishAttempt,mockYearForAttempt,newAttempt,sortMocks,weakQuestions} from './mockService';
import type {MockExam,MockLibrary} from './types';

const question=(mockId:string,id:string)=>({id,mockId,sourceQuestionNumber:1,topic:'Quantitative Methods',stem:'A complete source question?',choices:['A','B','C'],correctChoiceIndex:1,extractionConfidence:'high' as const,needsManualReview:false,mappingConfidence:'medium' as const,relatedFormulaIds:[]});
const mock=(year:number,number:number,id=`cfa-l1-${year}-mock-${number}`):MockExam=>({id,title:`CFA Level I ${year} Mock ${number}`,provider:'CFA Institute',year,sourceFile:'private.pdf',sourceFolder:'private',questionCount:1,timeLimitMinutes:270,questions:[question(id,`${id}-s1-q001`)]});
const mock2025=mock(2025,1,'cfa-2025-mock-1'),mock2026=mock(2026,1),library:MockLibrary={version:1,generatedAt:'x',mocks:[mock2025,mock2026]};

describe('year-aware private mock integration',()=>{
  it('keeps 2025 and 2026 stable IDs distinct',()=>expect(new Set(library.mocks.map(item=>item.id)).size).toBe(2));
  it('filters by year and defaults to all',()=>{expect(filterMocksByYear(library.mocks,'all')).toHaveLength(2);expect(filterMocksByYear(library.mocks,2026)).toEqual([mock2026])});
  it('sorts year descending and mock number ascending',()=>expect(sortMocks([mock(2025,2),mock(2026,2),mock2025,mock2026]).map(item=>item.title)).toEqual(['CFA Level I 2026 Mock 1','CFA Level I 2026 Mock 2','CFA Level I 2025 Mock 1','CFA Level I 2025 Mock 2']));
  it('isolates progress and incorrect history by cross-year question ID',()=>{let progress=finishAttempt(emptyMockProgress(),mock2025,{...newAttempt(mock2025,'exam'),answers:{[mock2025.questions[0].id]:0}});progress=finishAttempt(progress,mock2026,{...newAttempt(mock2026,'exam'),answers:{[mock2026.questions[0].id]:0}});expect(progress.attempts.map(item=>item.mockId)).toContain(mock2025.id);expect(weakQuestions(progress,library)).toHaveLength(2)});
  it('stores year on new attempts',()=>expect(newAttempt(mock2026,'exam').year).toBe(2026));
  it('infers the year for legacy attempts from the manifest',()=>{const legacy={...newAttempt(mock2025,'exam')};delete legacy.year;expect(mockYearForAttempt(legacy,library)).toBe(2025)});
});

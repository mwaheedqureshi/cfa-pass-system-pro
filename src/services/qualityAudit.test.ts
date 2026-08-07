
import {describe,expect,it,vi} from 'vitest';import {buildSearchIndex,matchSearch,queryTerms} from './searchService';import {completionPercent,defaultProgress,parseProgress,quizScore,rateCard,recordAnswer} from './progressService';import {headingsFromMarkdown,slug} from './contentService';import {criticalValues,hypothesisDecision,testPValue} from './hypothesisService';import {parsePairs,simpleRegression} from './regressionService';import type {Lesson,Topic} from '../data/types';
const topic:Topic={id:'quantitative-methods',title:'Quantitative Methods',description:'Finance statistics',lessonCount:1,status:'available'};const lesson:Lesson={id:'quant-tvm-04',topicId:topic.id,title:'Time Value of Money',filePath:'x.md',officialModuleTitle:'TVM',estimatedMinutes:10,difficulty:'Intermediate',order:4,status:'available',questionSetId:'q',flashcardSetId:'f',formulaIds:[],officialLearningOutcomes:['Calculate PV and FV']};
describe('quality audit coverage',()=>{
it('expands TVM abbreviation',()=>expect(queryTerms('TVM')).toEqual(expect.arrayContaining(['tvm','time','value','money'])));
it('expands PV and FV abbreviations',()=>expect(queryTerms('PV FV')).toEqual(expect.arrayContaining(['present','future','value'])));
it('ranks title matches ahead of body matches',()=>{const items=[{category:'Lessons' as const,title:'Other',excerpt:'',to:'/',searchText:'regression'},{category:'Lessons' as const,title:'Regression',excerpt:'',to:'/',searchText:''}];expect(matchSearch(items,'regression')[0].title).toBe('Regression')});
it('indexes each lesson markdown separately',()=>{const second={...lesson,id:'other',title:'Other'};const index=buildSearchIndex([topic],[lesson,second],[],[],{[lesson.id]:'present value',[second.id]:'correlation'},[]);const results=matchSearch(index,'correlation').filter(x=>x.category==='Lessons');expect(results).toHaveLength(1);expect(results[0].title).toBe('Other')});
it('indexes calculator names',()=>expect(matchSearch(buildSearchIndex([topic],[lesson],[],[]),'TVM Calculator').some(x=>x.category==='Tools')).toBe(true));
it('returns no results for blank search',()=>expect(matchSearch([],'  ')).toEqual([]));
it('creates stable heading slugs',()=>expect(slug('R-squared & Tests')).toBe('r-squared-tests'));
it('extracts h2 and h3 headings only',()=>expect(headingsFromMarkdown('# A\n## B\n### C\n#### D')).toHaveLength(2));
it('migrates old progress without losing completion',()=>{const old={...defaultProgress(),completedLessons:['a']};delete (old as Partial<typeof old>).recentlyViewedLessons;const parsed=parseProgress(JSON.stringify(old));expect(parsed.completedLessons).toEqual(['a']);expect(parsed.recentlyViewedLessons).toEqual([])});
it('sanitizes malformed recent lesson history',()=>{const raw={...defaultProgress(),recentlyViewedLessons:[1]};expect(parseProgress(JSON.stringify(raw)).recentlyViewedLessons).toEqual([])});
it('calculates bounded completion',()=>expect(completionPercent(['a','b','c'],2)).toBe(100));
it('calculates quiz score',()=>expect(quizScore([{correct:true},{correct:false}])).toBe(50));
it('records a quiz answer',()=>{vi.stubGlobal('crypto',{randomUUID:()=> 'id'});expect(recordAnswer(defaultProgress(),{questionId:'q',lessonId:'l',correct:true,selectedIndex:0,confidence:'confident'}).quizAttempts).toHaveLength(1)});
it('records a flashcard rating',()=>{vi.stubGlobal('crypto',{randomUUID:()=> 'id'});expect(rateCard(defaultProgress(),'c','good').flashcardReviews.c.rating).toBe('good')});
it('validates extreme alpha',()=>expect(criticalValues(1,'two','normal')).toHaveProperty('error'));
it('preserves lower-tail direction',()=>expect(hypothesisDecision({statistic:-3,alpha:.05,tail:'lower',distribution:'normal'})).toMatchObject({reject:true}));
it('caps two-tail p-values at one',()=>expect(testPValue(0,'two','normal')).toMatchObject({value:expect.closeTo(1,8)}));
it('handles constant Y regression',()=>{const r=simpleRegression([1,2,3],[4,4,4]);expect(r).not.toHaveProperty('error');if(!('error'in r))expect(r.rSquared).toBe(1)});
it('rejects empty regression tokens',()=>expect(parsePairs('1,','2,3')).toHaveProperty('error'));
});

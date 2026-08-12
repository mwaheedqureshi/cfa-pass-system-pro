import {describe,expect,it} from 'vitest';
import questions from '../data/questions/fsa-01-introduction-to-financial-statement-analysis.json';
import cards from '../data/flashcards/fsa-01-introduction-to-financial-statement-analysis.json';
import {lessons} from '../content/lessonManifest';
import {officialFsaModules,verifiedOfficialFsaModules,fsaLessonIds} from '../content/fsaCurriculum';
import {checkSegmentDisclosure} from '../components/lessons/FSAFrameworkNavigator';

describe('FSA introduction to financial statement analysis content',()=>{
 it('meets chapter asset counts',()=>{
  expect(questions).toHaveLength(45);expect(cards).toHaveLength(45);
  expect(questions.every(q=>q.choices.length===3)).toBe(true);
 });
 it('splits official and supplementary assets 35/10, and excludes supplementary from official targets',()=>{
  expect(questions.filter(q=>q.supplementary)).toHaveLength(10);
  expect(questions.filter(q=>!q.supplementary)).toHaveLength(35);
  expect(cards.filter(c=>c.supplementary)).toHaveLength(10);
  expect(cards.filter(c=>!c.supplementary)).toHaveLength(35);
 });
 it('keeps answer positions reasonably balanced across the full bank',()=>{
  const counts=[0,1,2].map(index=>questions.filter(q=>q.correctChoiceIndex===index).length);
  expect(counts.every(n=>n>=9)).toBe(true);
 });
 it('has no duplicate question ids, flashcard ids, or normalized stems/fronts',()=>{
  expect(new Set(questions.map(q=>q.id)).size).toBe(questions.length);
  expect(new Set(cards.map(c=>c.id)).size).toBe(cards.length);
  const normalize=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  expect(new Set(questions.map(q=>normalize(q.stem))).size).toBe(questions.length);
  expect(new Set(cards.map(c=>normalize(c.front))).size).toBe(cards.length);
 });
 it('references only the five official learning outcomes for this module, all represented',()=>{
  const outcomes=[
   'describe the steps in the financial statement analysis framework',
   'describe the roles of financial statement analysis',
   "describe the importance of regulatory filings, financial statement notes and supplementary information, management's commentary, and audit reports",
   'describe implications for financial analysis of alternative financial reporting systems and the importance of monitoring developments in financial reporting standards',
   'describe information sources that analysts use in financial statement analysis besides annual and interim financial reports',
  ];
  const outcomeSet=new Set(outcomes);
  expect(questions.every(q=>outcomeSet.has(q.officialLearningOutcome))).toBe(true);
  for(const outcome of outcomes)expect(questions.some(q=>q.officialLearningOutcome===outcome)).toBe(true);
 });
 it('has zero formulas, an honest downward revision from the mapping-stage target of 2, since the official source contains no symbolic formula', () => {
  expect(questions.every(q=>(q.relatedFormulaIds??[]).length===0)).toBe(true);
 });
 it('reproduces the lesson\'s segment-reporting worked examples via the interactive tool\'s pure function (10% test and 75% coverage rule)',()=>{
  const we14=checkSegmentDisclosure([
   {name:'Segment A',revenuePct:42},{name:'Segment B',revenuePct:31},{name:'Segment C',revenuePct:9},{name:'Segment D',revenuePct:18},
  ]);
  expect(we14.qualifying).toEqual(['Segment A','Segment B','Segment D']);
  expect(we14.totalCoveragePct).toBeCloseTo(91,5);
  expect(we14.meetsCoverageRule).toBe(true);
  const we15=checkSegmentDisclosure([
   {name:'X',revenuePct:33},{name:'Y',revenuePct:25},{name:'Z',revenuePct:9},{name:'W',revenuePct:9},{name:'V',revenuePct:9},{name:'U',revenuePct:9},{name:'T',revenuePct:6},
  ]);
  expect(we15.totalCoveragePct).toBeCloseTo(58,5);
  expect(we15.meetsCoverageRule).toBe(false);
  expect(we15.additionalSegmentsNeeded).toBe(true);
 });
 it('is registered in the lesson manifest with the stable id, route, and empty formulaIds',()=>{
  const lesson=lessons.find(l=>l.id==='fsa-01-introduction-to-financial-statement-analysis');
  expect(lesson).toBeDefined();
  expect(lesson?.filePath).toBe('content/fsa/01-introduction-to-financial-statement-analysis.md');
  expect(lesson?.formulaIds).toEqual([]);
  expect(lesson?.topicId).toBe('financial-statement-analysis');
 });
 it('marks FSA-LM1 verified, with FSA-LM1 content remaining unchanged now that FSA-LM2 is also produced',()=>{
  expect(verifiedOfficialFsaModules.map(m=>m.id)).toContain('FSA-LM1');
  const lm1=officialFsaModules.find(m=>m.id==='FSA-LM1');
  expect(lm1?.studyLessonId).toBe('fsa-01-introduction-to-financial-statement-analysis');
  expect(lm1?.status).toBe('verified');
  expect(fsaLessonIds).toContain('fsa-01-introduction-to-financial-statement-analysis');
 });
});

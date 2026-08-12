import {describe,expect,it} from 'vitest';
import questions from '../data/questions/fsa-02-analyzing-income-statements.json';
import cards from '../data/flashcards/fsa-02-analyzing-income-statements.json';
import formulas from '../data/formulas/fsa-02-analyzing-income-statements.json';
import {lessons} from '../content/lessonManifest';
import {officialFsaModules,verifiedOfficialFsaModules,fsaLessonIds} from '../content/fsaCurriculum';
import {calculateBasicEPS,calculateDilutedEPS} from '../components/lessons/IncomeStatementEPSExplorer';
import {classifyScenario} from '../components/lessons/RevenueExpenseRecognitionClassifier';

describe('FSA analyzing income statements content',()=>{
 it('meets chapter asset counts',()=>{
  expect(questions).toHaveLength(60);expect(cards).toHaveLength(60);
  expect(questions.every(q=>q.choices.length===3)).toBe(true);
 });
 it('splits official and supplementary assets 50/10, and excludes supplementary from official targets',()=>{
  expect(questions.filter(q=>q.supplementary)).toHaveLength(10);
  expect(questions.filter(q=>!q.supplementary)).toHaveLength(50);
  expect(cards.filter(c=>c.supplementary)).toHaveLength(10);
  expect(cards.filter(c=>!c.supplementary)).toHaveLength(50);
 });
 it('keeps answer positions reasonably balanced across the full bank',()=>{
  const counts=[0,1,2].map(index=>questions.filter(q=>q.correctChoiceIndex===index).length);
  expect(counts.every(n=>n>=12)).toBe(true);
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
   'describe general principles of revenue recognition, specific revenue recognition applications, and implications of revenue recognition choices for financial analysis',
   'describe general principles of expense recognition, specific expense recognition applications, implications of expense recognition choices for financial analysis and contrast costs that are capitalized versus those that are expensed in the period in which they are incurred',
   'describe the financial reporting treatment and analysis of non-recurring items (including discontinued operations, unusual or infrequent items) and changes in accounting policies',
   "describe how earnings per share is calculated and calculate and interpret a company's basic and diluted earnings per share for companies with simple and complex capital structures including those with antidilutive securities",
   "evaluate a company's financial performance using common-size income statements and financial ratios based on the income statement",
  ];
  const outcomeSet=new Set(outcomes);
  expect(questions.every(q=>outcomeSet.has(q.officialLearningOutcome))).toBe(true);
  for(const outcome of outcomes)expect(questions.some(q=>q.officialLearningOutcome===outcome)).toBe(true);
 });
 it('has exactly 10 formulas, matching the mapping-stage target, all pointing at this lesson',()=>{
  expect(formulas).toHaveLength(10);
  expect(formulas.every(f=>f.relatedLessonId==='fsa-02-analyzing-income-statements')).toBe(true);
 });
 it('reproduces the lesson\'s basic EPS worked example (WE15, Palisade Corp, mid-year issuance)',()=>{
  const eps=calculateBasicEPS({netIncome:9000000,preferredDividends:500000,weightedAverageShares:4750000});
  expect(eps).toBeCloseTo(1.7895,4);
 });
 it('reproduces the lesson\'s sequential complex-capital-structure worked example (WE21, Ashford Capital Partners)',()=>{
  const ashford=calculateDilutedEPS(
   {netIncome:12000000,preferredDividends:0,weightedAverageShares:5000000},
   [
    {type:'convertibleDebt',name:'Convertible bonds',annualInterest:450000/0.7,taxRate:0.3,asConvertedShares:300000},
    {type:'convertiblePreferred',name:'Convertible preferred',totalDividends:250000,asConvertedShares:100000},
    {type:'options',name:'Options',sharesIssuable:100000,exercisePrice:20,averageMarketPrice:40},
   ],
  );
  expect(ashford.basicEPS).toBeCloseTo(2.40,2);
  expect(ashford.includedSecurities).toEqual(['Options','Convertible bonds']);
  expect(ashford.excludedSecurities).toEqual(['Convertible preferred']);
  expect(ashford.dilutedEPS).toBeCloseTo(2.3271,3);
 });
 it('classifies the lesson\'s revenue/expense recognition scenarios via the interactive tool',()=>{
  expect(classifyScenario('long-term-construction')?.category).toBe('revenue');
  expect(classifyScenario('capitalized-interest')?.category).toBe('expense');
  expect(classifyScenario('not-a-real-scenario')).toBeUndefined();
 });
 it('is registered in the lesson manifest with the stable id, route, and 10 formula ids',()=>{
  const lesson=lessons.find(l=>l.id==='fsa-02-analyzing-income-statements');
  expect(lesson).toBeDefined();
  expect(lesson?.filePath).toBe('content/fsa/02-analyzing-income-statements.md');
  expect(lesson?.formulaIds).toHaveLength(10);
  expect(lesson?.topicId).toBe('financial-statement-analysis');
 });
 it('marks FSA-LM1 and FSA-LM2 verified, with FSA-LM3 through FSA-LM12 remaining pending, and completion at 2 of 12',()=>{
  expect(verifiedOfficialFsaModules.map(m=>m.id).sort()).toEqual(['FSA-LM1','FSA-LM2']);
  const lm2=officialFsaModules.find(m=>m.id==='FSA-LM2');
  expect(lm2?.studyLessonId).toBe('fsa-02-analyzing-income-statements');
  expect(lm2?.status).toBe('verified');
  expect(officialFsaModules.filter(m=>m.status==='pending')).toHaveLength(10);
  expect(fsaLessonIds.slice().sort()).toEqual(['fsa-01-introduction-to-financial-statement-analysis','fsa-02-analyzing-income-statements']);
 });
});

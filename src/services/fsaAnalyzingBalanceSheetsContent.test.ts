import {describe, expect, it} from 'vitest';
import questions from '../data/questions/fsa-03-analyzing-balance-sheets.json';
import cards from '../data/flashcards/fsa-03-analyzing-balance-sheets.json';
import formulas from '../data/formulas/fsa-03-analyzing-balance-sheets.json';
import {lessons} from '../content/lessonManifest';
import {officialFsaModules, verifiedOfficialFsaModules, fsaLessonIds} from '../content/fsaCurriculum';
import {calculateCommonSize, calculateHorizontalAnalysis} from '../components/lessons/CommonSizeBalanceSheetBuilder';
import {classifyDisclosureScenario} from '../components/lessons/FinancialInstrumentAndIntangibleDisclosureExplorer';

describe('FSA analyzing balance sheets content', () => {
 it('meets chapter asset counts', () => {
  expect(questions).toHaveLength(50); expect(cards).toHaveLength(50);
  expect(questions.every(q => q.choices.length === 3)).toBe(true);
 });
 it('splits official and supplementary assets 40/10, and excludes supplementary from official targets', () => {
  expect(questions.filter(q => q.supplementary)).toHaveLength(10);
  expect(questions.filter(q => !q.supplementary)).toHaveLength(40);
  expect(cards.filter(c => c.supplementary)).toHaveLength(10);
  expect(cards.filter(c => !c.supplementary)).toHaveLength(40);
 });
 it('keeps answer positions reasonably balanced across the full bank', () => {
  const counts = [0, 1, 2].map(index => questions.filter(q => q.correctChoiceIndex === index).length);
  expect(counts.every(n => n >= 10)).toBe(true);
 });
 it('has no duplicate question ids, flashcard ids, or normalized stems/fronts', () => {
  expect(new Set(questions.map(q => q.id)).size).toBe(questions.length);
  expect(new Set(cards.map(c => c.id)).size).toBe(cards.length);
  const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  expect(new Set(questions.map(q => normalize(q.stem))).size).toBe(questions.length);
  expect(new Set(cards.map(c => normalize(c.front))).size).toBe(cards.length);
 });
 it('references only the five official learning outcomes for this module, all represented evenly', () => {
  const outcomes = [
   'explain the financial reporting and disclosures related to intangible assets',
   'explain the financial reporting and disclosures related to goodwill',
   'explain the financial reporting and disclosures related to financial instruments',
   'explain the financial reporting and disclosures related to non-current liabilities',
   'calculate and interpret common-size balance sheets and related financial ratios',
  ];
  const outcomeSet = new Set(outcomes);
  expect(questions.every(q => outcomeSet.has(q.officialLearningOutcome))).toBe(true);
  for (const outcome of outcomes) {
   expect(questions.filter(q => q.officialLearningOutcome === outcome && !q.supplementary)).toHaveLength(8);
   expect(questions.filter(q => q.officialLearningOutcome === outcome && q.supplementary)).toHaveLength(2);
  }
 });
 it('has exactly 9 formulas, an organic overage over the 6-item mapping-stage target, all pointing at this lesson', () => {
  expect(formulas).toHaveLength(9);
  expect(formulas.every(f => f.relatedLessonId === 'fsa-03-analyzing-balance-sheets')).toBe(true);
 });
 it('reproduces the lesson\'s goodwill worked example (WE5, Ironclad Logistics)', () => {
  const purchasePrice = 50000000, fairValueNetAssets = 38000000;
  expect(purchasePrice - fairValueNetAssets).toBe(12000000);
 });
 it('reproduces the lesson\'s common-size worked example (WE17, Duskwood Timber) via the interactive tool', () => {
  const result = calculateCommonSize(
   [{name: 'Cash', amount: 4000000}, {name: 'Receivables', amount: 6000000}, {name: 'Inventory', amount: 10000000}, {name: 'Net PP&E', amount: 20000000}],
   40000000,
  );
  expect(result.map(r => r.percentOfAssets)).toEqual([10, 15, 25, 50]);
 });
 it('reproduces the lesson\'s horizontal analysis worked example (WE21, Ironclad Logistics) via the interactive tool', () => {
  const result = calculateHorizontalAnalysis(
   [{name: 'Total assets', amount: 30000000}, {name: 'Inventory', amount: 5000000}],
   [{name: 'Total assets', amount: 36000000}, {name: 'Inventory', amount: 8000000}],
  );
  expect(result[0].growthPct).toBeCloseTo(20, 5);
  expect(result[1].growthPct).toBeCloseTo(60, 5);
 });
 it('classifies the lesson\'s disclosure scenarios via the interactive tool', () => {
  expect(classifyDisclosureScenario('business-combination-goodwill')?.category).toBe('goodwill');
  expect(classifyDisclosureScenario('hold-to-collect-bond')?.classification).toBe('Amortized cost');
  expect(classifyDisclosureScenario('not-a-real-scenario')).toBeUndefined();
 });
 it('is registered in the lesson manifest with the stable id, route, and 9 formula ids', () => {
  const lesson = lessons.find(l => l.id === 'fsa-03-analyzing-balance-sheets');
  expect(lesson).toBeDefined();
  expect(lesson?.filePath).toBe('content/fsa/03-analyzing-balance-sheets.md');
  expect(lesson?.formulaIds).toHaveLength(9);
  expect(lesson?.topicId).toBe('financial-statement-analysis');
 });
 it('preserves earlier FSA modules while recognizing LM6 as verified', () => {
  expect(verifiedOfficialFsaModules.map(m => m.id).sort()).toEqual(['FSA-LM1', 'FSA-LM2', 'FSA-LM3', 'FSA-LM4', 'FSA-LM5', 'FSA-LM6']);
  const lm3 = officialFsaModules.find(m => m.id === 'FSA-LM3');
  expect(lm3?.studyLessonId).toBe('fsa-03-analyzing-balance-sheets');
  expect(lm3?.status).toBe('verified');
  expect(officialFsaModules.filter(m => m.status === 'pending')).toHaveLength(6);
  expect(fsaLessonIds.slice().sort()).toEqual([
   'fsa-01-introduction-to-financial-statement-analysis',
   'fsa-02-analyzing-income-statements',
   'fsa-03-analyzing-balance-sheets',
   'fsa-04-analyzing-statements-of-cash-flows-i',
   'fsa-05-analyzing-statements-of-cash-flows-ii',
   'fsa-06-analysis-of-inventories',
  ]);
 });
});

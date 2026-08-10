import {describe,expect,it} from 'vitest';import questions from '../data/questions/economics-05-introduction-to-geopolitics.json';import cards from '../data/flashcards/economics-05-introduction-to-geopolitics.json';
describe('Economics introduction to geopolitics content',()=>{
 it('meets chapter asset counts, with zero official formulas for this conceptual module',()=>{
  expect(questions).toHaveLength(50);expect(cards).toHaveLength(50);
  expect(questions.every(q=>q.choices.length===3)).toBe(true);
  expect(questions.every(q=>q.relatedFormulaIds.length===0)).toBe(true);
 });
 it('splits official and supplementary assets 40/10, and excludes supplementary from official targets',()=>{
  expect(questions.filter(q=>q.supplementary)).toHaveLength(10);
  expect(questions.filter(q=>!q.supplementary)).toHaveLength(40);
  expect(cards.filter(c=>c.supplementary)).toHaveLength(10);
  expect(cards.filter(c=>!c.supplementary)).toHaveLength(40);
 });
 it('keeps answer positions reasonably balanced across the full bank',()=>{
  const counts=[0,1,2].map(index=>questions.filter(q=>q.correctChoiceIndex===index).length);
  expect(counts.every(n=>n>=10)).toBe(true);
 });
 it('has no duplicate question ids, flashcard ids, or normalized stems',()=>{
  expect(new Set(questions.map(q=>q.id)).size).toBe(questions.length);
  expect(new Set(cards.map(c=>c.id)).size).toBe(cards.length);
  const normalize=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  expect(new Set(questions.map(q=>normalize(q.stem))).size).toBe(questions.length);
  expect(new Set(cards.map(c=>normalize(c.front))).size).toBe(cards.length);
 });
 it('references only the six official learning outcomes for this module',()=>{
  const outcomes=new Set(['describe geopolitics from a cooperation versus competition perspective','describe geopolitics and its relationship with globalization','describe functions and objectives of the international organizations that facilitate trade, including the World Bank, the International Monetary Fund, and the World Trade Organization','describe geopolitical risk','describe tools of geopolitics and their impact on regions and economies','describe the impact of geopolitical risk on investments']);
  expect(questions.every(q=>outcomes.has(q.officialLearningOutcome))).toBe(true);
 });
});

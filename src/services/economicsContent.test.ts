import {describe,expect,it} from 'vitest';import questions from '../data/questions/economics-firm-market-01.json';import cards from '../data/flashcards/economics-firm-market-01.json';import formulas from '../data/formulas/economics-firm-market-01.json';
describe('Economics firm and market structures content',()=>{
 it('meets chapter asset counts and challenge balance',()=>{
  expect(questions).toHaveLength(60);expect(cards).toHaveLength(60);expect(formulas).toHaveLength(12);
  expect(questions.filter(q=>q.tags.includes('mock-style'))).toHaveLength(25);
  expect(questions.every(q=>q.choices.length===3)).toBe(true);
 });
 it('splits official and supplementary assets 45/15, and excludes supplementary from official targets',()=>{
  expect(questions.filter(q=>q.supplementary)).toHaveLength(15);
  expect(questions.filter(q=>!q.supplementary)).toHaveLength(45);
  expect(cards.filter(c=>c.supplementary)).toHaveLength(15);
  expect(cards.filter(c=>!c.supplementary)).toHaveLength(45);
 });
 it('uses only declared chapter formula references',()=>{const ids=new Set(formulas.map(f=>f.id));expect(questions.flatMap(q=>q.relatedFormulaIds).every(id=>ids.has(id))).toBe(true)});
 it('keeps answer positions reasonably balanced across the full bank',()=>{
  const counts=[0,1,2].map(index=>questions.filter(q=>q.correctChoiceIndex===index).length);
  expect(counts.every(n=>n>=12)).toBe(true);
 });
});

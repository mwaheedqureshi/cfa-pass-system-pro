import {describe,expect,it} from 'vitest';import questions from '../data/questions/economics-02-understanding-business-cycles.json';import cards from '../data/flashcards/economics-02-understanding-business-cycles.json';import formulas from '../data/formulas/economics-02-understanding-business-cycles.json';
describe('Economics understanding business cycles content',()=>{
 it('meets chapter asset counts',()=>{
  expect(questions).toHaveLength(50);expect(cards).toHaveLength(50);expect(formulas).toHaveLength(4);
  expect(questions.every(q=>q.choices.length===3)).toBe(true);
 });
 it('splits official and supplementary assets 40/10, and excludes supplementary from official targets',()=>{
  expect(questions.filter(q=>q.supplementary)).toHaveLength(10);
  expect(questions.filter(q=>!q.supplementary)).toHaveLength(40);
  expect(cards.filter(c=>c.supplementary)).toHaveLength(10);
  expect(cards.filter(c=>!c.supplementary)).toHaveLength(40);
 });
 it('uses only declared chapter formula references',()=>{const ids=new Set(formulas.map(f=>f.id));expect(questions.flatMap(q=>q.relatedFormulaIds).every(id=>ids.has(id))).toBe(true)});
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
 it('references only the three official learning outcomes for this module',()=>{
  const outcomes=new Set(['describe the business cycle and its phases','describe credit cycles','describe how resource use, consumer and business activity, housing sector activity, and external trade sector activity vary over the business cycle and describe their measurement using economic indicators']);
  expect(questions.every(q=>outcomes.has(q.officialLearningOutcome))).toBe(true);
 });
});

import {describe,expect,it} from 'vitest';import questions from '../data/questions/economics-04-monetary-policy.json';import cards from '../data/flashcards/economics-04-monetary-policy.json';import formulas from '../data/formulas/economics-04-monetary-policy.json';
describe('Economics monetary policy content',()=>{
 it('meets chapter asset counts',()=>{
  expect(questions).toHaveLength(55);expect(cards).toHaveLength(55);expect(formulas).toHaveLength(2);
  expect(questions.every(q=>q.choices.length===3)).toBe(true);
 });
 it('splits official and supplementary assets 45/10, and excludes supplementary from official targets',()=>{
  expect(questions.filter(q=>q.supplementary)).toHaveLength(10);
  expect(questions.filter(q=>!q.supplementary)).toHaveLength(45);
  expect(cards.filter(c=>c.supplementary)).toHaveLength(10);
  expect(cards.filter(c=>!c.supplementary)).toHaveLength(45);
 });
 it('uses only declared chapter formula references',()=>{const ids=new Set(formulas.map(f=>f.id));expect(questions.flatMap(q=>q.relatedFormulaIds).every(id=>ids.has(id))).toBe(true)});
 it('keeps answer positions reasonably balanced across the full bank',()=>{
  const counts=[0,1,2].map(index=>questions.filter(q=>q.correctChoiceIndex===index).length);
  expect(counts.every(n=>n>=11)).toBe(true);
 });
 it('has no duplicate question ids, flashcard ids, or normalized stems',()=>{
  expect(new Set(questions.map(q=>q.id)).size).toBe(questions.length);
  expect(new Set(cards.map(c=>c.id)).size).toBe(cards.length);
  const normalize=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  expect(new Set(questions.map(q=>normalize(q.stem))).size).toBe(questions.length);
  expect(new Set(cards.map(c=>normalize(c.front))).size).toBe(cards.length);
 });
 it('references only the four official learning outcomes for this module',()=>{
  const outcomes=new Set(['describe the roles and objectives of central banks','describe tools used to implement monetary policy tools and the monetary transmission mechanism, and explain the relationships between monetary policy and economic growth, inflation, interest, and exchange rates','describe qualities of effective central banks; contrast their use of inflation, interest rate, and exchange rate targeting in expansionary or contractionary monetary policy; and describe the limitations of monetary policy','explain the interaction of monetary and fiscal policy']);
  expect(questions.every(q=>outcomes.has(q.officialLearningOutcome))).toBe(true);
 });
 it('confirms the neutral policy rate formula matches the module worked example',()=>{
  const formula=formulas.find(f=>f.id==='neutral-policy-rate-eco-04');
  expect(formula?.workedExample).toContain('4.5');
 });
});

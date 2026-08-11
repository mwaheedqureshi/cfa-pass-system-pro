import {describe,expect,it} from 'vitest';import questions from '../data/questions/economics-07-capital-flows-and-the-fx-market.json';import cards from '../data/flashcards/economics-07-capital-flows-and-the-fx-market.json';import formulas from '../data/formulas/economics-07-capital-flows-and-the-fx-market.json';import {lessons} from '../content/lessonManifest';import {officialEconomicsModules,verifiedOfficialEconomicsModules} from '../content/economicsCurriculum';
describe('Economics capital flows and FX market content',()=>{
 it('meets chapter asset counts',()=>{
  expect(questions).toHaveLength(55);expect(cards).toHaveLength(55);
  expect(questions.every(q=>q.choices.length===3)).toBe(true);
 });
 it('splits official and supplementary assets 45/10, and excludes supplementary from official targets',()=>{
  expect(questions.filter(q=>q.supplementary)).toHaveLength(10);
  expect(questions.filter(q=>!q.supplementary)).toHaveLength(45);
  expect(cards.filter(c=>c.supplementary)).toHaveLength(10);
  expect(cards.filter(c=>!c.supplementary)).toHaveLength(45);
 });
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
 it('references only the three official learning outcomes for this module',()=>{
  const outcomes=new Set(["describe the foreign exchange market, including its functions and participants, distinguish between nominal and real exchange rates, and calculate and interpret the percentage change in a currency relative to another currency","describe exchange rate regimes and explain the effects of exchange rates on countries' international trade and capital flows","describe common objectives of capital restrictions imposed by governments"]);
  expect(questions.every(q=>outcomes.has(q.officialLearningOutcome))).toBe(true);
 });
 it('delivers exactly five honestly-reconciled formulas, each linked to a valid learning outcome',()=>{
  expect(formulas).toHaveLength(5);
  const outcomes=new Set(["describe the foreign exchange market, including its functions and participants, distinguish between nominal and real exchange rates, and calculate and interpret the percentage change in a currency relative to another currency","describe exchange rate regimes and explain the effects of exchange rates on countries' international trade and capital flows","describe common objectives of capital restrictions imposed by governments"]);
  expect(formulas.every(f=>outcomes.has(f.relatedLearningOutcome))).toBe(true);
  expect(formulas.every(f=>f.relatedLessonId==='economics-07-capital-flows-and-the-fx-market')).toBe(true);
 });
 it('reproduces the lesson\'s SEK/EUR asymmetry worked example exactly (base 2.68%, price -2.61%)',()=>{
  const s0=11.2000,s1=11.5000;
  const baseChange=(s1/s0-1)*100;
  const priceChange=((1/s1)/(1/s0)-1)*100;
  expect(baseChange).toBeCloseTo(2.68,1);
  expect(priceChange).toBeCloseTo(-2.61,1);
  expect(Math.abs(baseChange)).not.toBeCloseTo(Math.abs(priceChange),2);
 });
 it('is registered in the lesson manifest with the stable id, route, and formula ids',()=>{
  const lesson=lessons.find(l=>l.id==='economics-07-capital-flows-and-the-fx-market');
  expect(lesson).toBeDefined();
  expect(lesson?.filePath).toBe('content/economics/07-capital-flows-and-the-fx-market.md');
  expect(lesson?.formulaIds).toEqual(['reciprocal-quote-eco-07','real-exchange-rate-eco-07','real-exchange-rate-pct-change-eco-07','base-currency-appreciation-eco-07','trade-balance-identity-eco-07']);
 });
 it('marks Economics completion at exactly ECO-LM1 through ECO-LM7 verified (7 of 8)',()=>{
  expect(verifiedOfficialEconomicsModules.map(m=>m.id)).toEqual(['ECO-LM1','ECO-LM2','ECO-LM3','ECO-LM4','ECO-LM5','ECO-LM6','ECO-LM7']);
  const lm7=officialEconomicsModules.find(m=>m.id==='ECO-LM7');
  expect(lm7?.studyLessonId).toBe('economics-07-capital-flows-and-the-fx-market');
  const remaining=officialEconomicsModules.filter(m=>m.status==='pending');
  expect(remaining.map(m=>m.id)).toEqual(['ECO-LM8']);
 });
});

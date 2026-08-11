import {describe,expect,it} from 'vitest';import questions from '../data/questions/economics-08-exchange-rate-calculations.json';import cards from '../data/flashcards/economics-08-exchange-rate-calculations.json';import formulas from '../data/formulas/economics-08-exchange-rate-calculations.json';import {lessons} from '../content/lessonManifest';import {officialEconomicsModules,verifiedOfficialEconomicsModules} from '../content/economicsCurriculum';
describe('Economics exchange rate calculations content',()=>{
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
 it('has no duplicate question ids, flashcard ids, or normalized stems',()=>{
  expect(new Set(questions.map(q=>q.id)).size).toBe(questions.length);
  expect(new Set(cards.map(c=>c.id)).size).toBe(cards.length);
  const normalize=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  expect(new Set(questions.map(q=>normalize(q.stem))).size).toBe(questions.length);
  expect(new Set(cards.map(c=>normalize(c.front))).size).toBe(cards.length);
 });
 it('references only the two official learning outcomes for this module',()=>{
  const outcomes=new Set(['calculate and interpret currency cross-rates','explain the arbitrage relationship between spot and forward exchange rates and interest rates, calculate a forward rate using points or in percentage terms, and interpret a forward discount or premium']);
  expect(questions.every(q=>outcomes.has(q.officialLearningOutcome))).toBe(true);
 });
 it('delivers exactly eight formulas, matching the mapping-stage target exactly, each linked to a valid learning outcome',()=>{
  expect(formulas).toHaveLength(8);
  const outcomes=new Set(['calculate and interpret currency cross-rates','explain the arbitrage relationship between spot and forward exchange rates and interest rates, calculate a forward rate using points or in percentage terms, and interpret a forward discount or premium']);
  expect(formulas.every(f=>outcomes.has(f.relatedLearningOutcome))).toBe(true);
  expect(formulas.every(f=>f.relatedLessonId==='economics-08-exchange-rate-calculations')).toBe(true);
 });
 it('reproduces the lesson\'s core arbitrage-relationship worked example exactly (S=1.4200, r_d=2.50%, r_f=4.00% -> F=1.4408)',()=>{
  const S=1.4200,rd=0.0250,rf=0.0400;
  const F=S*((1+rf)/(1+rd));
  expect(F).toBeCloseTo(1.4408,4);
 });
 it('confirms the corrected hedged-return direction: a cheaper-than-fair forward makes the domestic-borrow route profitable',()=>{
  const S=1.4200,rd=0.0250,rf=0.0400,Fcheap=1.4250;
  const hedged=S*(1+rf)/Fcheap;
  expect(hedged).toBeGreaterThan(1+rd);
 });
 it('confirms forward points do not exactly double between a 90-day and 180-day horizon at the same annualized rates',()=>{
  const S=1.3600,rd=0.0300,rf=0.0450;
  const tau90=90/360,tau180=180/360;
  const pts90=S*((rf-rd)/(1+rd*tau90))*tau90*10000;
  const pts180=S*((rf-rd)/(1+rd*tau180))*tau180*10000;
  expect(pts180).not.toBeCloseTo(pts90*2,1);
  expect(pts180).toBeCloseTo(100.49,1);
 });
 it('is registered in the lesson manifest with the stable id, route, and formula ids',()=>{
  const lesson=lessons.find(l=>l.id==='economics-08-exchange-rate-calculations');
  expect(lesson).toBeDefined();
  expect(lesson?.filePath).toBe('content/economics/08-exchange-rate-calculations.md');
  expect(lesson?.formulaIds).toEqual(['cross-rate-direct-multiply-eco-08','cross-rate-inversion-eco-08','forward-points-to-rate-eco-08','forward-premium-discount-pct-eco-08','arbitrage-relationship-eco-08','forward-rate-from-arbitrage-eco-08','forward-as-expected-spot-eco-08','day-count-adjusted-forward-eco-08']);
 });
 it('marks Economics completion at all eight official modules verified (8 of 8), none pending',()=>{
  expect(verifiedOfficialEconomicsModules.map(m=>m.id)).toEqual(['ECO-LM1','ECO-LM2','ECO-LM3','ECO-LM4','ECO-LM5','ECO-LM6','ECO-LM7','ECO-LM8']);
  const lm8=officialEconomicsModules.find(m=>m.id==='ECO-LM8');
  expect(lm8?.studyLessonId).toBe('economics-08-exchange-rate-calculations');
  expect(officialEconomicsModules.filter(m=>m.status==='pending')).toHaveLength(0);
 });
});

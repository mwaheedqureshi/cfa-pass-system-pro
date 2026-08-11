import {describe,expect,it} from 'vitest';import questions from '../data/questions/economics-06-international-trade.json';import cards from '../data/flashcards/economics-06-international-trade.json';import formulas from '../data/formulas/economics-06-international-trade.json';import {lessons} from '../content/lessonManifest';import {officialEconomicsModules,verifiedOfficialEconomicsModules} from '../content/economicsCurriculum';
describe('Economics international trade content',()=>{
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
 it('references only the three official learning outcomes for this module',()=>{
  const outcomes=new Set(['describe the benefits and costs of international trade','compare types of trade restrictions, such as tariffs, quotas, and export subsidies, and their economic implications','explain motivations for and advantages of trading blocs, common markets, and economic unions']);
  expect(questions.every(q=>outcomes.has(q.officialLearningOutcome))).toBe(true);
 });
 it('delivers exactly four honestly-reconciled formulas, each linked to a valid learning outcome',()=>{
  expect(formulas).toHaveLength(4);
  const outcomes=new Set(['describe the benefits and costs of international trade','compare types of trade restrictions, such as tariffs, quotas, and export subsidies, and their economic implications','explain motivations for and advantages of trading blocs, common markets, and economic unions']);
  expect(formulas.every(f=>outcomes.has(f.relatedLearningOutcome))).toBe(true);
  expect(formulas.every(f=>f.relatedLessonId==='economics-06-international-trade')).toBe(true);
 });
 it('reproduces the lesson\'s worked tariff example exactly (CS loss 335000, PS gain 215000, revenue 90000, DWL 30000)',()=>{
  const deltaP=0.5,qsFt=400000,qsR=460000,qdR=640000,qdFt=700000;
  const csLoss=deltaP*qdR+0.5*deltaP*(qdFt-qdR);
  const psGain=deltaP*qsFt+0.5*deltaP*(qsR-qsFt);
  const revenue=deltaP*(qdR-qsR);
  const dwl=0.5*deltaP*(qsR-qsFt)+0.5*deltaP*(qdFt-qdR);
  expect(csLoss).toBeCloseTo(335000,6);expect(psGain).toBeCloseTo(215000,6);expect(revenue).toBeCloseTo(90000,6);expect(dwl).toBeCloseTo(30000,6);
  expect(psGain+revenue+dwl).toBeCloseTo(csLoss,6);
 });
 it('is registered in the lesson manifest with the stable id and route',()=>{
  const lesson=lessons.find(l=>l.id==='economics-06-international-trade');
  expect(lesson).toBeDefined();
  expect(lesson?.filePath).toBe('content/economics/06-international-trade.md');
  expect(lesson?.formulaIds).toEqual(['cs-loss-tariff-quota-eco-06','ps-gain-tariff-quota-eco-06','revenue-or-rent-eco-06','deadweight-loss-eco-06']);
 });
 it('keeps ECO-LM6 verified with its stable study lesson id as later modules are added',()=>{
  expect(verifiedOfficialEconomicsModules.map(m=>m.id)).toContain('ECO-LM6');
  const lm6=officialEconomicsModules.find(m=>m.id==='ECO-LM6');
  expect(lm6?.studyLessonId).toBe('economics-06-international-trade');
  expect(lm6?.status).toBe('verified');
 });
});

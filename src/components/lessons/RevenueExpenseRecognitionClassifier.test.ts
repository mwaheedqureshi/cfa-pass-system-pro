import {describe,expect,it} from 'vitest';
import {scenarios,classifyScenario} from './RevenueExpenseRecognitionClassifier';

describe('classifyScenario',()=>{
 it('classifies a principal arrangement as gross revenue recognition',()=>{
  expect(classifyScenario('principal-sale')?.classification).toMatch(/Principal/);
 });
 it('classifies an agent arrangement as net commission recognition',()=>{
  expect(classifyScenario('agent-arrangement')?.classification).toMatch(/Agent/);
 });
 it('classifies a perpetual license as point-in-time recognition',()=>{
  expect(classifyScenario('perpetual-license')?.classification).toMatch(/Point-in-time/);
 });
 it('classifies a SaaS subscription as over-time recognition',()=>{
  expect(classifyScenario('saas-subscription')?.classification).toMatch(/Over-time/);
 });
 it('classifies a long-term construction contract as percentage-of-completion, over-time recognition',()=>{
  expect(classifyScenario('long-term-construction')?.classification).toMatch(/Over-time/);
 });
 it('classifies equipment with future economic benefit as capitalize',()=>{
  expect(classifyScenario('equipment-future-benefit')?.classification).toMatch(/Capitalize/);
 });
 it('classifies administrative salaries as expense as incurred',()=>{
  expect(classifyScenario('admin-salaries')?.classification).toMatch(/Expense as incurred/);
 });
 it('classifies pre-feasibility software costs as expense as incurred',()=>{
  expect(classifyScenario('software-pre-feasibility')?.classification).toMatch(/Expense as incurred/);
 });
 it('returns undefined for an unknown scenario id',()=>{
  expect(classifyScenario('not-a-real-scenario')).toBeUndefined();
 });
 it('every scenario has a non-empty classification, explanation, and statement impact',()=>{
  for(const s of scenarios){
   expect(s.classification.length).toBeGreaterThan(0);
   expect(s.explanation.length).toBeGreaterThan(0);
   expect(s.statementImpact.length).toBeGreaterThan(0);
   expect(['revenue','expense']).toContain(s.category);
  }
 });
 it('has at least 8 scenarios covering both revenue and expense recognition',()=>{
  expect(scenarios.length).toBeGreaterThanOrEqual(8);
  expect(scenarios.some(s=>s.category==='revenue')).toBe(true);
  expect(scenarios.some(s=>s.category==='expense')).toBe(true);
 });
});

import {describe,expect,it} from 'vitest';
import {computeCreditCycle} from './CreditCycleExplorer';
describe('credit cycle explorer calculations',()=>{
 it('computes the credit-to-GDP ratio in both periods and its change',()=>{
  const result=computeCreditCycle(148,168,200,206);
  expect(result.error).toBeUndefined();
  expect(result.ratioStart).toBeCloseTo(0.74,6);
  expect(result.ratioEnd).toBeCloseTo(168/206,6);
  expect(result.ratioChangePp).toBeCloseTo((168/206-0.74)*100,6);
 });
 it('computes credit and GDP growth rates',()=>{
  const result=computeCreditCycle(148,168,200,206);
  expect(result.creditGrowth).toBeCloseTo((168-148)/148*100,6);
  expect(result.gdpGrowth).toBeCloseTo((206-200)/200*100,6);
 });
 it('classifies a loosening credit cycle',()=>{
  const result=computeCreditCycle(100,140,200,204);
  expect(result.stage).toContain('Loosening');
 });
 it('classifies a tightening credit cycle',()=>{
  const result=computeCreditCycle(140,120,200,208);
  expect(result.stage).toContain('Tightening');
 });
 it('classifies a broadly stable credit cycle',()=>{
  const result=computeCreditCycle(100,103,200,206);
  expect(result.stage).toContain('stable');
 });
 it('flags elevated risk for a sharply rising credit-to-GDP ratio',()=>{
  const result=computeCreditCycle(140,190,200,204);
  expect(result.elevatedRisk).toBe(true);
 });
 it('does not flag elevated risk for a modest change',()=>{
  const result=computeCreditCycle(148,168,200,206);
  expect(result.elevatedRisk).toBe(false);
 });
 it('rejects non-positive or non-finite inputs',()=>{
  expect(computeCreditCycle(0,100,200,200).error).toBeTruthy();
  expect(computeCreditCycle(100,100,-200,200).error).toBeTruthy();
  expect(computeCreditCycle(Number.NaN,100,200,200).error).toBeTruthy();
 });
});

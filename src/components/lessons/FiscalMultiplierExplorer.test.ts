import {describe,expect,it} from 'vitest';
import {computeMultipliers,computeBalancedBudgetImpact} from './FiscalMultiplierExplorer';
describe('fiscal multiplier calculations',()=>{
 it('matches the module worked example: c=0.9, t=0.2 gives a fiscal multiplier near 3.57',()=>{
  const result=computeMultipliers(0.9,0.2);
  expect(result.error).toBeUndefined();
  expect(result.fiscalMultiplier).toBeCloseTo(3.5714,3);
  expect(result.simpleMultiplier).toBeCloseTo(10,6);
 });
 it('matches the alternate parameter set: c=0.5, t=0.2 gives a fiscal multiplier near 1.67',()=>{
  const result=computeMultipliers(0.5,0.2);
  expect(result.fiscalMultiplier).toBeCloseTo(1.6667,3);
 });
 it('collapses to the simple multiplier when the tax rate is zero',()=>{
  const result=computeMultipliers(0.8,0);
  if('error' in result)throw new Error(result.error);
  expect(result.fiscalMultiplier).toBeCloseTo(result.simpleMultiplier,6);
  expect(result.fiscalMultiplier).toBeCloseTo(5,6);
 });
 it('produces a lower multiplier at a higher tax rate for a fixed MPC',()=>{
  const low=computeMultipliers(0.8,0.1),high=computeMultipliers(0.8,0.3);
  if('error' in low||'error' in high)throw new Error('unexpected error');
  expect(high.fiscalMultiplier).toBeLessThan(low.fiscalMultiplier);
 });
 it('rejects MPC or tax rate outside the valid range',()=>{
  expect(computeMultipliers(0,0.2).error).toBeTruthy();
  expect(computeMultipliers(1,0.2).error).toBeTruthy();
  expect(computeMultipliers(0.9,-0.1).error).toBeTruthy();
  expect(computeMultipliers(0.9,1).error).toBeTruthy();
 });
 it('rejects non-finite input',()=>{
  expect(computeMultipliers(Number.NaN,0.2).error).toBeTruthy();
 });
 it('computes the balanced budget scenario matching the module worked example',()=>{
  const result=computeBalancedBudgetImpact(0.9,200);
  expect(result.error).toBeUndefined();
  expect(result.consumptionReduction).toBeCloseTo(180,6);
  expect(result.netInitialImpact).toBeCloseTo(20,6);
  expect(result.totalImpact).toBeCloseTo(200,6);
 });
 it('confirms the balanced budget multiplier always equals one regardless of MPC',()=>{
  for(const mpc of [0.3,0.5,0.75,0.9]){
   const result=computeBalancedBudgetImpact(mpc,100);
   expect(result.totalImpact).toBeCloseTo(100,6);
  }
 });
 it('rejects invalid balanced budget inputs',()=>{
  expect(computeBalancedBudgetImpact(0,100).error).toBeTruthy();
  expect(computeBalancedBudgetImpact(0.9,Number.NaN).error).toBeTruthy();
 });
});

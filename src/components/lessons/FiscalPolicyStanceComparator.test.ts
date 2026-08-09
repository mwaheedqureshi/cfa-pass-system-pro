import {describe,expect,it} from 'vitest';
import {classifyFiscalStance,estimateStructuralBalance} from './FiscalPolicyStanceComparator';
describe('fiscal policy stance comparator calculations',()=>{
 it('classifies a widening deficit as expansionary',()=>{
  const result=classifyFiscalStance(-2,-5);
  expect(result.error).toBeUndefined();
  expect(result.stance).toBe('Expansionary');
  expect(result.change).toBeCloseTo(-3,6);
 });
 it('classifies a narrowing deficit as contractionary',()=>{
  const result=classifyFiscalStance(-5,-2);
  expect(result.stance).toBe('Contractionary');
 });
 it('classifies an unchanged balance as neutral',()=>{
  const result=classifyFiscalStance(-3,-3.02);
  expect(result.stance).toBe('Neutral');
 });
 it('respects a custom neutral threshold',()=>{
  const result=classifyFiscalStance(-3,-3.5,1);
  expect(result.stance).toBe('Neutral');
 });
 it('rejects non-finite balance inputs',()=>{
  expect(classifyFiscalStance(Number.NaN,-2).error).toBeTruthy();
 });
 it('estimates a structural balance below the headline during a boom (positive output gap)',()=>{
  const result=estimateStructuralBalance(-1,4,0.5);
  expect(result.error).toBeUndefined();
  expect(result.cyclicalComponent).toBeCloseTo(2,6);
  expect(result.structuralBalancePctGdp).toBeCloseTo(-3,6);
 });
 it('estimates a structural balance above the headline during a recession (negative output gap)',()=>{
  const result=estimateStructuralBalance(-5,-6,0.5);
  expect(result.cyclicalComponent).toBeCloseTo(-3,6);
  expect(result.structuralBalancePctGdp).toBeCloseTo(-2,6);
 });
 it('leaves the structural balance equal to the headline when the output gap is zero',()=>{
  const result=estimateStructuralBalance(-2,0,0.5);
  expect(result.structuralBalancePctGdp).toBeCloseTo(-2,6);
 });
 it('rejects negative cyclical sensitivity and non-finite inputs',()=>{
  expect(estimateStructuralBalance(-2,1,-0.1).error).toBeTruthy();
  expect(estimateStructuralBalance(Number.NaN,1,0.5).error).toBeTruthy();
 });
});

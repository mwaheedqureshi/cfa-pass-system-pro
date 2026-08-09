import {describe,expect,it} from 'vitest';
import {classifyComponent,computeDiffusionIndex,indicatorTiming} from './BusinessCycleIndicatorTimeline';
describe('business cycle indicator timeline calculations',()=>{
 it('classifies rising, flat, and falling components against a threshold',()=>{
  expect(classifyComponent(1.2)).toBe(1);
  expect(classifyComponent(0.02)).toBe(0.5);
  expect(classifyComponent(-0.3)).toBe(0);
  expect(classifyComponent(0.05)).toBe(0.5);
 });
 it('computes the diffusion index for a five-component composite',()=>{
  const result=computeDiffusionIndex([1.2,-0.3,0.4,0.02,2.1]);
  expect(result.error).toBeUndefined();
  expect(result.rising).toBe(3);
  expect(result.flat).toBe(1);
  expect(result.falling).toBe(1);
  expect(result.index).toBeCloseTo(70,6);
 });
 it('matches the module worked example of a diffusion index of 70',()=>{
  const result=computeDiffusionIndex([1,1,1,0.01,-1]);
  expect(result.index).toBeCloseTo(70,6);
 });
 it('computes 100 when every component rises and 0 when every component falls',()=>{
  expect(computeDiffusionIndex([1,2,3]).index).toBeCloseTo(100,6);
  expect(computeDiffusionIndex([-1,-2,-3]).index).toBeCloseTo(0,6);
 });
 it('respects a custom threshold',()=>{
  const result=computeDiffusionIndex([0.2,0.2,0.2],0.5);
  expect(result.flat).toBe(3);
  expect(result.index).toBeCloseTo(50,6);
 });
 it('rejects empty or non-finite input',()=>{
  expect(computeDiffusionIndex([]).error).toBeTruthy();
  expect(computeDiffusionIndex([Number.NaN]).error).toBeTruthy();
 });
 it('returns illustrative timing offsets for each indicator category',()=>{
  expect(indicatorTiming('leading').offsetMonths).toBeLessThan(0);
  expect(indicatorTiming('coincident').offsetMonths).toBe(0);
  expect(indicatorTiming('lagging').offsetMonths).toBeGreaterThan(0);
 });
});

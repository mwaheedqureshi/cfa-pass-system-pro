import {describe,expect,it} from 'vitest';
import {computeConcentration,simulateMerger} from './ConcentrationMeasureExplorer';
describe('concentration measure calculations',()=>{
 it('computes CR4 and HHI for a five-firm market',()=>{
  const result=computeConcentration([35,25,18,12,10],4);
  expect(result.error).toBeUndefined();
  expect(result.concentrationRatio).toBeCloseTo(90,6);
  expect(result.hhi).toBeCloseTo(2418,6);
 });
 it('classifies a highly concentrated market',()=>{
  const result=computeConcentration([70,10,10,10],4);
  expect(result.hhi).toBeCloseTo(5200,6);
  expect(result.classification).toBe('Highly concentrated');
 });
 it('classifies an unconcentrated equal-share market',()=>{
  const result=computeConcentration([10,10,10,10,10,10,10,10,10,10].slice(0,8),4);
  expect(result.classification).toBe('Unconcentrated');
 });
 it('caps N at the number of firms supplied',()=>{
  const result=computeConcentration([60,40],5);
  expect(result.n).toBe(2);
  expect(result.concentrationRatio).toBeCloseTo(100,6);
 });
 it('rejects shares summing above 100',()=>{
  expect(computeConcentration([60,60],2).error).toBeTruthy();
 });
 it('rejects negative shares and fewer than two firms',()=>{
  expect(computeConcentration([-10,50],2).error).toBeTruthy();
  expect(computeConcentration([50],1).error).toBeTruthy();
 });
 it('computes the two-firm merger HHI shortcut',()=>{
  const merger=simulateMerger([35,25,18,12,10],3,4);
  if('error' in merger)throw new Error(merger.error);
  expect(merger.deltaHHI).toBeCloseTo(240,6);
  expect(merger.merged.reduce((a,b)=>a+b,0)).toBeCloseTo(100,6);
  expect(merger.merged).toHaveLength(4);
 });
 it('rejects merging a firm with itself or an out-of-range index',()=>{
  expect(simulateMerger([35,25],0,0).error).toBeTruthy();
  expect(simulateMerger([35,25],0,5).error).toBeTruthy();
 });
});

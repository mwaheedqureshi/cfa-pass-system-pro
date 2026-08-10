import {describe,expect,it} from 'vitest';
import {computeNeutralRateStance,transmissionChannelEffects} from './MonetaryTransmissionExplorer';
describe('monetary transmission explorer calculations',()=>{
 it('matches the module worked example: trend 2.5%, target 2.0%, rate 5.0% -> contractionary',()=>{
  const result=computeNeutralRateStance(2.5,2.0,5.0);
  expect(result.error).toBeUndefined();
  expect(result.neutralRate).toBeCloseTo(4.5,6);
  expect(result.gap).toBeCloseTo(0.5,6);
  expect(result.stance).toBe('Contractionary');
 });
 it('matches the embedded-question example: trend 3%, target 2%, rate 4% -> expansionary',()=>{
  const result=computeNeutralRateStance(3,2,4);
  expect(result.neutralRate).toBeCloseTo(5,6);
  expect(result.stance).toBe('Expansionary');
 });
 it('classifies an exactly-neutral policy rate as neutral',()=>{
  const result=computeNeutralRateStance(2.5,2.0,4.5);
  expect(result.stance).toBe('Neutral');
  expect(result.gap).toBeCloseTo(0,6);
 });
 it('rejects non-finite inputs',()=>{
  expect(computeNeutralRateStance(Number.NaN,2,4).error).toBeTruthy();
 });
 it('describes transmission channels for a rate increase',()=>{
  const result=transmissionChannelEffects('raise');
  expect(result.error).toBeUndefined();
  expect(result.demandDirection).toBe('down');
  expect(result.inflationDirection).toBe('down');
 });
 it('describes transmission channels for a rate decrease',()=>{
  const result=transmissionChannelEffects('lower');
  expect(result.demandDirection).toBe('up');
  expect(result.inflationDirection).toBe('up');
 });
 it('rejects an invalid direction',()=>{
  // @ts-expect-error intentional invalid input for validation testing
  expect(transmissionChannelEffects('hold').error).toBeTruthy();
 });
});

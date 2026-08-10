import {describe,expect,it} from 'vitest';
import {classifyArchetype,assessRiskTransmission} from './GeopoliticalRiskScenarioMap';
describe('geopolitical risk scenario map calculations',()=>{
 it('classifies Multilateralism for cooperative + globalized',()=>{
  const result=classifyArchetype('cooperative','globalized');
  if('error' in result)throw new Error(result.error);
  expect(result.archetype).toBe('Multilateralism');
 });
 it('classifies Hegemony for non-cooperative + globalized',()=>{
  expect(classifyArchetype('non-cooperative','globalized').archetype).toBe('Hegemony');
 });
 it('classifies Bilateralism for cooperative + nationalist',()=>{
  expect(classifyArchetype('cooperative','nationalist').archetype).toBe('Bilateralism');
 });
 it('classifies Autarky for non-cooperative + nationalist',()=>{
  expect(classifyArchetype('non-cooperative','nationalist').archetype).toBe('Autarky');
 });
 it('rejects invalid cooperation or globalization values',()=>{
  // @ts-expect-error intentional invalid input for validation testing
  expect(classifyArchetype('unsure','globalized').error).toBeTruthy();
  // @ts-expect-error intentional invalid input for validation testing
  expect(classifyArchetype('cooperative','unsure').error).toBeTruthy();
 });
 it('returns the four high-velocity transmission channels', () => {
  const result=assessRiskTransmission('exogenous','high');
  if('error' in result)throw new Error(result.error);
  expect(result.channels).toEqual(['Commodities','Foreign exchange','Equities','Bond prices (via interest rates)']);
  expect(result.marketWide).toBe(true);
 });
 it('returns medium-velocity channels distinct from high-velocity channels',()=>{
  const result=assessRiskTransmission('thematic','medium');
  const highResult=assessRiskTransmission('event','high');
  if('error' in result)throw new Error(result.error);
  if('error' in highResult)throw new Error(highResult.error);
  expect(result.marketWide).toBe(false);
  expect(result.channels).not.toEqual(highResult.channels);
 });
 it('returns low-velocity channels emphasizing the discount rate',()=>{
  const result=assessRiskTransmission('thematic','low');
  if('error' in result)throw new Error(result.error);
  expect(result.channels.join(' ').toLowerCase()).toContain('discount rate');
 });
 it('rejects invalid risk type or velocity values',()=>{
  // @ts-expect-error intentional invalid input for validation testing
  expect(assessRiskTransmission('invalid','high').error).toBeTruthy();
  // @ts-expect-error intentional invalid input for validation testing
  expect(assessRiskTransmission('event','invalid').error).toBeTruthy();
 });
});

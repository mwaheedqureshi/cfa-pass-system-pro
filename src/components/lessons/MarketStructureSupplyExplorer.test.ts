import {describe,expect,it} from 'vitest';
import {compareMarketStructureOutcomes} from './MarketStructureSupplyExplorer';
describe('market structure comparison',()=>{
 it('matches the official worked example: demand P=450-Q, MC=30',()=>{
  const result=compareMarketStructureOutcomes({demandIntercept:450,demandSlope:1,marginalCost:30});
  if('error' in result)throw new Error(result.error);
  expect(result.perfect.quantity).toBeCloseTo(420,6);
  expect(result.perfect.price).toBeCloseTo(30,6);
  expect(result.imperfect.quantity).toBeCloseTo(210,6);
  expect(result.imperfect.price).toBeCloseTo(240,6);
 });
 it('always shows the imperfect competitor selling less at a higher price than perfect competition', ()=>{
  const result=compareMarketStructureOutcomes({demandIntercept:90,demandSlope:0.5,marginalCost:30});
  if('error' in result)throw new Error(result.error);
  expect(result.imperfect.quantity).toBeLessThan(result.perfect.quantity);
  expect(result.imperfect.price).toBeGreaterThan(result.perfect.price);
 });
 it('rejects a non-positive demand slope',()=>{
  expect(compareMarketStructureOutcomes({demandIntercept:90,demandSlope:0,marginalCost:30}).error).toBeTruthy();
  expect(compareMarketStructureOutcomes({demandIntercept:90,demandSlope:-1,marginalCost:30}).error).toBeTruthy();
 });
 it('rejects a demand intercept at or below marginal cost',()=>{
  expect(compareMarketStructureOutcomes({demandIntercept:30,demandSlope:0.5,marginalCost:30}).error).toBeTruthy();
 });
 it('rejects negative marginal cost',()=>{
  expect(compareMarketStructureOutcomes({demandIntercept:90,demandSlope:0.5,marginalCost:-5}).error).toBeTruthy();
 });
});

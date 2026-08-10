import {describe,expect,it} from 'vitest';
import {calculateTradeRestrictionWelfare} from './TradeRestrictionWelfareDiagram';
describe('trade restriction welfare calculations',()=>{
 it('computes the tariff welfare effects from the worked lesson example',()=>{
  const result=calculateTradeRestrictionWelfare(2.00,2.50,400000,460000,640000,700000,'tariff');
  if('error' in result)throw new Error(result.error);
  expect(result.csLoss).toBeCloseTo(335000,6);
  expect(result.psGain).toBeCloseTo(215000,6);
  expect(result.revenueOrRent).toBeCloseTo(90000,6);
  expect(result.deadweightLoss).toBeCloseTo(30000,6);
  expect(result.nationalWelfareChange).toBeCloseTo(-30000,6);
 });
 it('checks that CS loss equals PS gain plus revenue plus deadweight loss',()=>{
  const result=calculateTradeRestrictionWelfare(2.00,2.50,400000,460000,640000,700000,'tariff');
  if('error' in result)throw new Error(result.error);
  expect(result.psGain+result.revenueOrRent+result.deadweightLoss).toBeCloseTo(result.csLoss,6);
 });
 it('labels the revenue-or-rent term differently for a tariff versus a quota with identical numbers',()=>{
  const tariffResult=calculateTradeRestrictionWelfare(2.00,2.50,400000,460000,640000,700000,'tariff');
  const quotaResult=calculateTradeRestrictionWelfare(2.00,2.50,400000,460000,640000,700000,'quota');
  if('error' in tariffResult)throw new Error(tariffResult.error);
  if('error' in quotaResult)throw new Error(quotaResult.error);
  expect(tariffResult.revenueOrRent).toBeCloseTo(quotaResult.revenueOrRent,6);
  expect(tariffResult.revenueOrRentLabel).not.toEqual(quotaResult.revenueOrRentLabel);
 });
 it('rejects a restricted price that is not higher than the world price',()=>{
  const result=calculateTradeRestrictionWelfare(2.00,2.00,400000,460000,640000,700000,'tariff');
  expect('error' in result).toBe(true);
 });
 it('rejects a restricted supply lower than free-trade supply',()=>{
  const result=calculateTradeRestrictionWelfare(2.00,2.50,400000,380000,640000,700000,'tariff');
  expect('error' in result).toBe(true);
 });
 it('rejects a restricted demand higher than free-trade demand',()=>{
  const result=calculateTradeRestrictionWelfare(2.00,2.50,400000,460000,720000,700000,'tariff');
  expect('error' in result).toBe(true);
 });
 it('rejects restricted supply exceeding restricted demand (negative imports)',()=>{
  const result=calculateTradeRestrictionWelfare(2.00,2.50,400000,650000,640000,700000,'tariff');
  expect('error' in result).toBe(true);
 });
 it('rejects non-finite inputs',()=>{
  const result=calculateTradeRestrictionWelfare(NaN,2.50,400000,460000,640000,700000,'tariff');
  expect('error' in result).toBe(true);
 });
});

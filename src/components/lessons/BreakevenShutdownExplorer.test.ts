import {describe,expect,it} from 'vitest';
import {evaluateBreakevenShutdown} from './BreakevenShutdownExplorer';
describe('breakeven and shutdown evaluator',()=>{
 it('computes breakeven quantity and a profitable operating decision above breakeven',()=>{
  const result=evaluateBreakevenShutdown({price:75,variableCost:45,fixedCost:180000,quantity:7000});
  expect(result.error).toBeUndefined();
  expect(result.breakevenQuantity).toBeCloseTo(6000,6);
  expect(result.profit).toBeCloseTo(30000,6);
  expect(result.shutdown).toBe(false);
 });
 it('recommends operating at a smaller loss than shutdown when AVC < P < ATC',()=>{
  const result=evaluateBreakevenShutdown({price:16,variableCost:12,fixedCost:55000,quantity:5000});
  expect(result.shutdown).toBe(false);
  expect(result.profit).toBeLessThan(0);
  expect(result.status).toMatch(/smaller loss/);
 });
 it('recommends shutdown when price is below variable cost',()=>{
  const result=evaluateBreakevenShutdown({price:9,variableCost:11,fixedCost:40000,quantity:3000});
  expect(result.shutdown).toBe(true);
  expect(result.breakevenQuantity).toBeNull();
  expect(result.status).toMatch(/Shut down/);
 });
 it('treats price exactly equal to variable cost as indifferent, not shutdown',()=>{
  const result=evaluateBreakevenShutdown({price:20,variableCost:20,fixedCost:10000,quantity:1000});
  expect(result.shutdown).toBe(false);
  expect(result.status).toMatch(/Indifferent/);
 });
 it('rejects negative fixed cost or quantity',()=>{
  expect(evaluateBreakevenShutdown({price:10,variableCost:5,fixedCost:-1,quantity:100}).error).toBeTruthy();
  expect(evaluateBreakevenShutdown({price:10,variableCost:5,fixedCost:100,quantity:-1}).error).toBeTruthy();
 });
 it('rejects non-finite input',()=>{
  expect(evaluateBreakevenShutdown({price:NaN,variableCost:5,fixedCost:100,quantity:10}).error).toBeTruthy();
 });
});

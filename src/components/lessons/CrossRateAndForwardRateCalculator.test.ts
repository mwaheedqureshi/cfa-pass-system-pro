import {describe,expect,it} from 'vitest';
import {calculateCrossRate,calculateForwardRate} from './CrossRateAndForwardRateCalculator';
describe('cross-rate calculations',()=>{
 it('computes a cross-rate via direct multiplication when the shared currency cancels',()=>{
  const result=calculateCrossRate({priceCurrency:'NOK',baseCurrency:'USD',value:10.5000},{priceCurrency:'USD',baseCurrency:'EUR',value:1.0800});
  if('error' in result)throw new Error(result.error);
  expect(result.crossRate).toBeCloseTo(11.3400,4);
  expect(result.priceCurrency).toBe('NOK');expect(result.baseCurrency).toBe('EUR');
  expect(result.method).toBe('direct');
 });
 it('computes a cross-rate via inversion when the shared currency is the base of both quotes',()=>{
  const result=calculateCrossRate({priceCurrency:'NOK',baseCurrency:'USD',value:10.5000},{priceCurrency:'CHF',baseCurrency:'USD',value:0.9100});
  if('error' in result)throw new Error(result.error);
  expect(result.crossRate).toBeCloseTo(0.0867,4);
  expect(result.priceCurrency).toBe('CHF');expect(result.baseCurrency).toBe('NOK');
  expect(result.method).toBe('inversion');
 });
 it('computes a cross-rate via inversion when the shared currency is the price of both quotes',()=>{
  const result=calculateCrossRate({priceCurrency:'SEK',baseCurrency:'GBP',value:13.2000},{priceCurrency:'SEK',baseCurrency:'CHF',value:11.8000});
  if('error' in result)throw new Error(result.error);
  expect(result.crossRate).toBeCloseTo(1.1186,4);
  expect(result.priceCurrency).toBe('CHF');expect(result.baseCurrency).toBe('GBP');
 });
 it('is order-independent: swapping the two input quotes yields the reciprocal-consistent result',()=>{
  const forward=calculateCrossRate({priceCurrency:'NOK',baseCurrency:'USD',value:10.5000},{priceCurrency:'USD',baseCurrency:'EUR',value:1.0800});
  const swapped=calculateCrossRate({priceCurrency:'USD',baseCurrency:'EUR',value:1.0800},{priceCurrency:'NOK',baseCurrency:'USD',value:10.5000});
  if('error' in forward||'error' in swapped)throw new Error('unexpected error');
  expect(swapped.crossRate).toBeCloseTo(forward.crossRate,6);
  expect(swapped.priceCurrency).toBe(forward.priceCurrency);expect(swapped.baseCurrency).toBe(forward.baseCurrency);
 });
 it('rejects two quotes with no shared currency',()=>{
  const result=calculateCrossRate({priceCurrency:'NOK',baseCurrency:'USD',value:10.5000},{priceCurrency:'CHF',baseCurrency:'GBP',value:1.1500});
  expect('error' in result).toBe(true);
 });
 it('rejects a quote with the same currency as price and base',()=>{
  const result=calculateCrossRate({priceCurrency:'USD',baseCurrency:'USD',value:1},{priceCurrency:'USD',baseCurrency:'EUR',value:1.08});
  expect('error' in result).toBe(true);
 });
 it('rejects non-positive or non-finite quote values',()=>{
  expect('error' in calculateCrossRate({priceCurrency:'NOK',baseCurrency:'USD',value:0},{priceCurrency:'USD',baseCurrency:'EUR',value:1.08})).toBe(true);
  expect('error' in calculateCrossRate({priceCurrency:'NOK',baseCurrency:'USD',value:NaN},{priceCurrency:'USD',baseCurrency:'EUR',value:1.08})).toBe(true);
 });
 it('is case-insensitive on currency codes',()=>{
  const result=calculateCrossRate({priceCurrency:'nok',baseCurrency:'usd',value:10.5000},{priceCurrency:'USD',baseCurrency:'EUR',value:1.0800});
  if('error' in result)throw new Error(result.error);
  expect(result.priceCurrency).toBe('NOK');
 });
});
describe('forward rate calculations',()=>{
 it('reproduces the lesson\'s annual arbitrage-relationship worked example exactly',()=>{
  const result=calculateForwardRate(1.4200,0.0250,0.0400,360,360);
  if('error' in result)throw new Error(result.error);
  expect(result.forwardRate).toBeCloseTo(1.4408,4);
  expect(result.direction).toBe('premium');
 });
 it('reproduces the lesson\'s 90-day day-count-adjusted worked example exactly',()=>{
  const result=calculateForwardRate(1.3600,0.0300,0.0450,90,360);
  if('error' in result)throw new Error(result.error);
  expect(result.points).toBeCloseTo(50.62,1);
 });
 it('reproduces the lesson\'s 180-day worked example and confirms points do not exactly double',()=>{
  const result90=calculateForwardRate(1.3600,0.0300,0.0450,90,360);
  const result180=calculateForwardRate(1.3600,0.0300,0.0450,180,360);
  if('error' in result90||'error' in result180)throw new Error('unexpected error');
  expect(result180.points).toBeCloseTo(100.49,1);
  expect(result180.points).not.toBeCloseTo(result90.points*2,1);
 });
 it('applies JPY-style ÷100 points scaling when requested',()=>{
  const standard=calculateForwardRate(1.3600,0.0300,0.0450,90,360,10000);
  const jpyStyle=calculateForwardRate(1.3600,0.0300,0.0450,90,360,100);
  if('error' in standard||'error' in jpyStyle)throw new Error('unexpected error');
  expect(jpyStyle.points).toBeCloseTo(standard.points/100,4);
  expect(jpyStyle.forwardRate).toBeCloseTo(standard.forwardRate,6);
 });
 it('classifies discount correctly when the domestic (base) currency has the higher rate',()=>{
  const result=calculateForwardRate(1.4200,0.0500,0.0250,360,360);
  if('error' in result)throw new Error(result.error);
  expect(result.direction).toBe('discount');
  expect(result.forwardRate).toBeLessThan(1.4200);
 });
 it('detects a flat (zero-point) forward when rates are equal',()=>{
  const result=calculateForwardRate(1.4200,0.0300,0.0300,360,360);
  if('error' in result)throw new Error(result.error);
  expect(result.direction).toBe('flat');
  expect(result.points).toBeCloseTo(0,6);
 });
 it('rejects a non-positive spot rate, non-positive days, or non-positive basis',()=>{
  expect('error' in calculateForwardRate(0,0.03,0.04,90,360)).toBe(true);
  expect('error' in calculateForwardRate(1.42,0.03,0.04,0,360)).toBe(true);
  expect('error' in calculateForwardRate(1.42,0.03,0.04,90,0)).toBe(true);
 });
 it('rejects an interest rate at or below -100%',()=>{
  expect('error' in calculateForwardRate(1.42,-1,0.04,90,360)).toBe(true);
 });
 it('rejects non-finite inputs',()=>{
  expect('error' in calculateForwardRate(NaN,0.03,0.04,90,360)).toBe(true);
 });
});

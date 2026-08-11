import {describe,expect,it} from 'vitest';
import {calculateQuoteAppreciation,classifyExchangeRateRegime} from './FXQuoteAndRegimeExplorer';
describe('FX quote appreciation calculations',()=>{
 it('reproduces the lesson\'s SEK/EUR worked example exactly',()=>{
  const result=calculateQuoteAppreciation(11.2000,11.5000);
  if('error' in result)throw new Error(result.error);
  expect(result.baseCurrencyChangePct).toBeCloseTo(2.68,1);
  expect(result.priceCurrencyChangePct).toBeCloseTo(-2.61,1);
  expect(result.direction).toBe('appreciated');
 });
 it('reproduces the lesson\'s NOK/GBP worked example exactly (larger, more visible asymmetry)',()=>{
  const result=calculateQuoteAppreciation(13.4000,11.4000);
  if('error' in result)throw new Error(result.error);
  expect(result.baseCurrencyChangePct).toBeCloseTo(-14.93,1);
  expect(result.priceCurrencyChangePct).toBeCloseTo(17.54,1);
  expect(result.direction).toBe('depreciated');
 });
 it('confirms base and price currency percentage changes are never equal in magnitude for a real move',()=>{
  const result=calculateQuoteAppreciation(1.1500,1.2000);
  if('error' in result)throw new Error(result.error);
  expect(Math.abs(result.baseCurrencyChangePct)).not.toBeCloseTo(Math.abs(result.priceCurrencyChangePct),2);
 });
 it('computes correct reciprocal quotes for both starting and ending values',()=>{
  const result=calculateQuoteAppreciation(0.9150,0.9300);
  if('error' in result)throw new Error(result.error);
  expect(result.reciprocalStart).toBeCloseTo(1/0.9150,6);
  expect(result.reciprocalEnd).toBeCloseTo(1/0.9300,6);
 });
 it('detects an unchanged quote correctly (zero appreciation, not an inversion error)',()=>{
  const result=calculateQuoteAppreciation(1.5000,1.5000);
  if('error' in result)throw new Error(result.error);
  expect(result.baseCurrencyChangePct).toBeCloseTo(0,6);
  expect(result.priceCurrencyChangePct).toBeCloseTo(0,6);
  expect(result.direction).toBe('unchanged');
 });
 it('rejects a zero or negative quote',()=>{
  expect('error' in calculateQuoteAppreciation(0,1.2)).toBe(true);
  expect('error' in calculateQuoteAppreciation(1.2,-1)).toBe(true);
 });
 it('rejects non-finite inputs',()=>{
  expect('error' in calculateQuoteAppreciation(NaN,1.2)).toBe(true);
  expect('error' in calculateQuoteAppreciation(1.2,Infinity)).toBe(true);
 });
 it('inverting the input order flips which currency is measured as appreciating (explicit inverted-quote check)',()=>{
  const forward=calculateQuoteAppreciation(11.2000,11.5000);
  const inverted=calculateQuoteAppreciation(1/11.2000,1/11.5000);
  if('error' in forward||'error' in inverted)throw new Error('unexpected error');
  expect(inverted.baseCurrencyChangePct).toBeCloseTo(forward.priceCurrencyChangePct,4);
  expect(inverted.priceCurrencyChangePct).toBeCloseTo(forward.baseCurrencyChangePct,4);
 });
});
describe('exchange rate regime classification',()=>{
 it('classifies dollarization for a foreign-currency legal-tender status',()=>{
  const result=classifyExchangeRateRegime('foreignCurrency');
  if('error' in result)throw new Error(result.error);
  expect(result.regimeType).toBe('Dollarization');
  expect(result.monetaryPolicyIndependence).toBe('None');
 });
 it('classifies monetary union for a shared-currency legal-tender status',()=>{
  const result=classifyExchangeRateRegime('sharedCurrency');
  if('error' in result)throw new Error(result.error);
  expect(result.regimeType).toBe('Monetary union');
 });
 it('classifies a currency board for a legislated fixed rate',()=>{
  const result=classifyExchangeRateRegime('ownCurrency','legislativeFixed');
  if('error' in result)throw new Error(result.error);
  expect(result.regimeType).toBe('Currency board');
 });
 it('classifies fixed parity and target zone by band width',()=>{
  const narrow=classifyExchangeRateRegime('ownCurrency','discretionaryNarrowBand');
  const wide=classifyExchangeRateRegime('ownCurrency','discretionaryWiderBand');
  if('error' in narrow||'error' in wide)throw new Error('unexpected error');
  expect(narrow.regimeType).toBe('Fixed parity');
  expect(wide.regimeType).toBe('Target zone');
 });
 it('distinguishes passive from active crawling pegs',()=>{
  const passive=classifyExchangeRateRegime('ownCurrency','crawlingAdjustment','passive');
  const active=classifyExchangeRateRegime('ownCurrency','crawlingAdjustment','active');
  if('error' in passive||'error' in active)throw new Error('unexpected error');
  expect(passive.regimeType).toBe('Passive crawling peg');
  expect(active.regimeType).toBe('Active crawling peg');
 });
 it('requires a crawl style when rate commitment is crawling adjustment',()=>{
  const result=classifyExchangeRateRegime('ownCurrency','crawlingAdjustment');
  expect('error' in result).toBe(true);
 });
 it('classifies fixed parity with crawling bands distinctly from a plain crawling peg',()=>{
  const result=classifyExchangeRateRegime('ownCurrency','crawlingBandAroundFixedParity');
  if('error' in result)throw new Error(result.error);
  expect(result.regimeType).toBe('Fixed parity with crawling bands');
 });
 it('classifies managed float and independently floating with full policy independence only for the latter',()=>{
  const managed=classifyExchangeRateRegime('ownCurrency','managedIntervention');
  const independent=classifyExchangeRateRegime('ownCurrency','marketDetermined');
  if('error' in managed||'error' in independent)throw new Error('unexpected error');
  expect(managed.regimeType).toBe('Managed float');
  expect(independent.regimeType).toBe('Independently floating');
  expect(independent.monetaryPolicyIndependence).toBe('Full');
 });
 it('requires a rate commitment when legal tender status is own currency',()=>{
  const result=classifyExchangeRateRegime('ownCurrency');
  expect('error' in result).toBe(true);
 });
});

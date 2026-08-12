import {describe,expect,it} from 'vitest';
import {calculateBasicEPS,calculateDilutedEPS,securityEffect} from './IncomeStatementEPSExplorer';

describe('calculateBasicEPS',()=>{
 it('reproduces the lesson\'s worked example 15 (Palisade Corp, mid-year issuance)',()=>{
  // WASO = 4,000,000*(3/12) + 5,000,000*(9/12) = 4,750,000
  const eps=calculateBasicEPS({netIncome:9000000,preferredDividends:500000,weightedAverageShares:4750000});
  expect(eps).toBeCloseTo(1.7895,4);
 });
 it('reproduces worked example 16 (Wintergreen Foods, retroactive stock split)',()=>{
  expect(calculateBasicEPS({netIncome:6000000,preferredDividends:0,weightedAverageShares:4000000})).toBeCloseTo(1.5,5);
 });
 it('rejects zero or negative weighted average shares',()=>{
  expect(()=>calculateBasicEPS({netIncome:1000,preferredDividends:0,weightedAverageShares:0})).toThrow();
  expect(()=>calculateBasicEPS({netIncome:1000,preferredDividends:0,weightedAverageShares:-5})).toThrow();
 });
 it('rejects non-finite inputs',()=>{
  expect(()=>calculateBasicEPS({netIncome:NaN,preferredDividends:0,weightedAverageShares:100})).toThrow();
 });
});

describe('securityEffect',()=>{
 it('computes the if-converted effect for convertible preferred (worked example 17, Cobalt Mining Co)',()=>{
  const effect=securityEffect({type:'convertiblePreferred',name:'Convertible preferred',totalDividends:200000,asConvertedShares:300000});
  expect(effect.numeratorEffect).toBe(200000);
  expect(effect.denominatorEffect).toBe(300000);
  expect(effect.perShareEffect).toBeCloseTo(0.6667,4);
 });
 it('computes the after-tax if-converted effect for convertible debt (worked example 18, Driftwood Airlines)',()=>{
  const effect=securityEffect({type:'convertibleDebt',name:'Convertible bonds',annualInterest:1200000,taxRate:0.30,asConvertedShares:500000});
  expect(effect.numeratorEffect).toBeCloseTo(840000,2);
  expect(effect.denominatorEffect).toBe(500000);
  expect(effect.perShareEffect).toBeCloseTo(1.68,2);
 });
 it('computes the treasury-stock method incremental shares (worked example 19, Solander Tech)',()=>{
  const effect=securityEffect({type:'options',name:'Options',sharesIssuable:100000,exercisePrice:20,averageMarketPrice:32});
  expect(effect.numeratorEffect).toBe(0);
  expect(effect.denominatorEffect).toBeCloseTo(37500,1);
  expect(effect.inTheMoney).toBe(true);
 });
 it('marks out-of-the-money options as not dilutive (exercise price at or above average market price)',()=>{
  const atMoney=securityEffect({type:'options',name:'Options',sharesIssuable:100000,exercisePrice:40,averageMarketPrice:40});
  expect(atMoney.inTheMoney).toBe(false);
  const outOfMoney=securityEffect({type:'options',name:'Options',sharesIssuable:100000,exercisePrice:50,averageMarketPrice:40});
  expect(outOfMoney.inTheMoney).toBe(false);
 });
 it('rejects a convertible security with zero as-converted shares',()=>{
  expect(()=>securityEffect({type:'convertiblePreferred',name:'Bad',totalDividends:1000,asConvertedShares:0})).toThrow();
 });
 it('rejects an invalid tax rate for convertible debt',()=>{
  expect(()=>securityEffect({type:'convertibleDebt',name:'Bad',annualInterest:1000,taxRate:1.5,asConvertedShares:100})).toThrow();
 });
});

describe('calculateDilutedEPS',()=>{
 it('reproduces worked example 17 (Cobalt Mining Co, if-converted preferred, dilutive)',()=>{
  const result=calculateDilutedEPS(
   {netIncome:5000000,preferredDividends:200000,weightedAverageShares:2000000},
   [{type:'convertiblePreferred',name:'Convertible preferred',totalDividends:200000,asConvertedShares:300000}],
  );
  expect(result.basicEPS).toBeCloseTo(2.40,2);
  expect(result.dilutedEPS).toBeCloseTo(2.1739,4);
  expect(result.includedSecurities).toEqual(['Convertible preferred']);
 });
 it('reproduces worked example 18 (Driftwood Airlines, if-converted debt, dilutive)',()=>{
  const result=calculateDilutedEPS(
   {netIncome:8000000,preferredDividends:0,weightedAverageShares:3000000},
   [{type:'convertibleDebt',name:'Convertible bonds',annualInterest:1200000,taxRate:0.30,asConvertedShares:500000}],
  );
  expect(result.basicEPS).toBeCloseTo(2.6667,4);
  expect(result.dilutedEPS).toBeCloseTo(2.5257,4);
 });
 it('reproduces worked example 19 (Solander Tech, treasury-stock method, dilutive)',()=>{
  const result=calculateDilutedEPS(
   {netIncome:4000000,preferredDividends:0,weightedAverageShares:1800000},
   [{type:'options',name:'Options',sharesIssuable:100000,exercisePrice:20,averageMarketPrice:32}],
  );
  expect(result.basicEPS).toBeCloseTo(2.2222,4);
  expect(result.dilutedEPS).toBeCloseTo(2.1769,4);
 });
 it('reproduces worked example 20 (Marchbanks Group, antidilutive security excluded, diluted EPS equals basic EPS)',()=>{
  const result=calculateDilutedEPS(
   {netIncome:6000000,preferredDividends:0,weightedAverageShares:2500000},
   [{type:'convertiblePreferred',name:'Convertible preferred',totalDividends:600000,asConvertedShares:200000}],
  );
  expect(result.basicEPS).toBeCloseTo(2.40,2);
  expect(result.dilutedEPS).toBeCloseTo(2.40,2);
  expect(result.excludedSecurities).toEqual(['Convertible preferred']);
  expect(result.includedSecurities).toEqual([]);
 });
 it('reproduces worked example 21 (Ashford Capital Partners, sequential complex capital structure)',()=>{
  // Bonds: after-tax interest effect must equal $450,000 on 300,000 shares; with a 30% tax rate,
  // pretax annual interest = 450,000 / (1 - 0.30) = 642,857.142857...
  const ashford=calculateDilutedEPS(
   {netIncome:12000000,preferredDividends:0,weightedAverageShares:5000000},
   [
    {type:'convertibleDebt',name:'Convertible bonds',annualInterest:450000/0.7,taxRate:0.3,asConvertedShares:300000},
    {type:'convertiblePreferred',name:'Convertible preferred',totalDividends:250000,asConvertedShares:100000},
    // sharesIssuable=100,000, exercisePrice=$20, averageMarketPrice=$40 -> incremental shares = 100,000 - (100,000*20/40) = 50,000
    {type:'options',name:'Options',sharesIssuable:100000,exercisePrice:20,averageMarketPrice:40},
   ],
  );
  expect(ashford.basicEPS).toBeCloseTo(2.40,2);
  // Options (0 effect) and bonds (1.50 effect) are dilutive; preferred (2.50 effect) is antidilutive at the margin.
  expect(ashford.includedSecurities).toEqual(['Options','Convertible bonds']);
  expect(ashford.excludedSecurities).toEqual(['Convertible preferred']);
  expect(ashford.dilutedEPS).toBeCloseTo(2.3271,3);
 });
 it('returns basic EPS as diluted EPS when there are no potentially dilutive securities',()=>{
  const result=calculateDilutedEPS({netIncome:1000000,preferredDividends:0,weightedAverageShares:500000},[]);
  expect(result.dilutedEPS).toBe(result.basicEPS);
  expect(result.includedSecurities).toEqual([]);
 });
 it('excludes an out-of-the-money option entirely',()=>{
  const result=calculateDilutedEPS(
   {netIncome:1000000,preferredDividends:0,weightedAverageShares:500000},
   [{type:'options',name:'Out of money options',sharesIssuable:10000,exercisePrice:50,averageMarketPrice:40}],
  );
  expect(result.dilutedEPS).toBe(result.basicEPS);
  expect(result.excludedSecurities).toEqual(['Out of money options']);
 });
});

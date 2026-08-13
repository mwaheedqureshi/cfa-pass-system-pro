import {describe, expect, it} from 'vitest';
import {calculateCommonSize, calculateHorizontalAnalysis, flagDeviations} from './CommonSizeBalanceSheetBuilder';

describe('calculateCommonSize', () => {
 it('reproduces worked example 17 (Duskwood Timber)', () => {
  const result = calculateCommonSize(
   [{name: 'Cash', amount: 4000000}, {name: 'Receivables', amount: 6000000}, {name: 'Inventory', amount: 10000000}, {name: 'Net PP&E', amount: 20000000}],
   40000000,
  );
  expect(result.map(r => r.percentOfAssets)).toEqual([10, 15, 25, 50]);
  expect(result.reduce((sum, r) => sum + r.percentOfAssets, 0)).toBeCloseTo(100, 5);
 });
 it('reproduces worked example 18 (Vesper Robotics vs Larkspur Media cross-section)', () => {
  const vesper = calculateCommonSize([{name: 'Cash', amount: 4000000}, {name: 'Inventory', amount: 10000000}], 40000000);
  const larkspur = calculateCommonSize([{name: 'Cash', amount: 16000000}, {name: 'Inventory', amount: 32000000}], 400000000);
  expect(vesper.map(r => r.percentOfAssets)).toEqual([10, 25]);
  expect(larkspur.map(r => r.percentOfAssets)).toEqual([4, 8]);
 });
 it('rejects zero or negative total assets', () => {
  expect(() => calculateCommonSize([{name: 'Cash', amount: 100}], 0)).toThrow();
  expect(() => calculateCommonSize([{name: 'Cash', amount: 100}], -50)).toThrow();
 });
 it('rejects an empty line-item list', () => {
  expect(() => calculateCommonSize([], 1000)).toThrow();
 });
 it('rejects a non-finite line-item amount', () => {
  expect(() => calculateCommonSize([{name: 'Cash', amount: NaN}], 1000)).toThrow();
 });
});

describe('flagDeviations', () => {
 it('flags a line item that moved beyond the threshold', () => {
  const current = [{name: 'Inventory', amount: 10000000, percentOfAssets: 25}];
  const prior = [{name: 'Inventory', amount: 8000000, percentOfAssets: 18}];
  const result = flagDeviations(current, prior, 5);
  expect(result[0].deltaPct).toBeCloseTo(7, 5);
  expect(result[0].flagged).toBe(true);
 });
 it('does not flag a line item within the threshold', () => {
  const current = [{name: 'Cash', amount: 4000000, percentOfAssets: 10}];
  const prior = [{name: 'Cash', amount: 3800000, percentOfAssets: 9}];
  const result = flagDeviations(current, prior, 5);
  expect(result[0].flagged).toBe(false);
 });
 it('treats a line item absent from the comparison period as a 0% baseline', () => {
  const current = [{name: 'New intangible', amount: 1000000, percentOfAssets: 10}];
  const result = flagDeviations(current, [], 5);
  expect(result[0].comparisonPercent).toBe(0);
  expect(result[0].flagged).toBe(true);
 });
 it('rejects a negative threshold', () => {
  expect(() => flagDeviations([], [], -1)).toThrow();
 });
});

describe('calculateHorizontalAnalysis', () => {
 it('reproduces worked example 21 (Ironclad Logistics)', () => {
  const result = calculateHorizontalAnalysis(
   [{name: 'Total assets', amount: 30000000}, {name: 'Inventory', amount: 5000000}],
   [{name: 'Total assets', amount: 36000000}, {name: 'Inventory', amount: 8000000}],
  );
  expect(result[0].growthPct).toBeCloseTo(20, 5);
  expect(result[1].growthPct).toBeCloseTo(60, 5);
 });
 it('rejects a missing base-period match', () => {
  expect(() => calculateHorizontalAnalysis([], [{name: 'Cash', amount: 100}])).toThrow();
 });
 it('rejects a zero base amount', () => {
  expect(() => calculateHorizontalAnalysis([{name: 'Cash', amount: 0}], [{name: 'Cash', amount: 100}])).toThrow();
 });
 it('rejects an empty current-period list', () => {
  expect(() => calculateHorizontalAnalysis([{name: 'Cash', amount: 100}], [])).toThrow();
 });
});

import {describe, expect, it} from 'vitest';
import {classifyDisclosureScenario, scenarios} from './FinancialInstrumentAndIntangibleDisclosureExplorer';

describe('classifyDisclosureScenario', () => {
 it('has exactly 10 scenarios, each with a non-empty explanation and statement impact', () => {
  expect(scenarios).toHaveLength(10);
  expect(scenarios.every(s => s.explanation.trim().length > 0)).toBe(true);
  expect(scenarios.every(s => s.statementImpact.trim().length > 0)).toBe(true);
 });
 it('has unique scenario ids', () => {
  expect(new Set(scenarios.map(s => s.id)).size).toBe(scenarios.length);
 });
 it('classifies a purchased intangible as capitalized', () => {
  expect(classifyDisclosureScenario('purchased-customer-list')?.classification).toMatch(/Capitalize/);
 });
 it('classifies an internally built brand as expensed', () => {
  expect(classifyDisclosureScenario('internally-built-brand')?.classification).toMatch(/Expense/);
 });
 it('classifies an indefinite-life intangible as non-amortized with annual impairment testing', () => {
  const result = classifyDisclosureScenario('indefinite-life-intangible');
  expect(result?.classification).toMatch(/No amortization/);
  expect(result?.category).toBe('intangible');
 });
 it('classifies a business-combination excess as goodwill', () => {
  expect(classifyDisclosureScenario('business-combination-goodwill')?.category).toBe('goodwill');
 });
 it('classifies internally generated reputation as not recognized', () => {
  expect(classifyDisclosureScenario('internally-generated-reputation')?.classification).toBe('Not recognized');
 });
 it('classifies a hold-to-collect bond as amortized cost', () => {
  expect(classifyDisclosureScenario('hold-to-collect-bond')?.classification).toBe('Amortized cost');
 });
 it('classifies a trading portfolio as FVPL', () => {
  expect(classifyDisclosureScenario('trading-bond-portfolio')?.classification).toMatch(/FVPL/);
 });
 it('classifies a strategic equity FVOCI election correctly, including non-recycling', () => {
  const result = classifyDisclosureScenario('strategic-equity-fvoci-election');
  expect(result?.classification).toMatch(/FVOCI/);
  expect(result?.explanation).toMatch(/never recycled/);
 });
 it('classifies a bond issued below face value as a discount', () => {
  expect(classifyDisclosureScenario('bond-issued-at-discount')?.classification).toMatch(/discount/);
 });
 it('flags a covenant breach as default risk despite a clean payment history', () => {
  const result = classifyDisclosureScenario('debt-covenant-breach');
  expect(result?.category).toBe('nonCurrentLiability');
  expect(result?.classification).toMatch(/Technical default/);
 });
 it('returns undefined for an unknown scenario id', () => {
  expect(classifyDisclosureScenario('not-a-real-scenario')).toBeUndefined();
 });
});

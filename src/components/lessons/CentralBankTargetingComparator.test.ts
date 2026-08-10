import {describe,expect,it} from 'vitest';
import {describeRegime,assessCentralBankQualities} from './CentralBankTargetingComparator';
describe('central bank targeting comparator calculations',()=>{
 it('describes the inflation targeting regime with its key qualities',()=>{
  const result=describeRegime('inflation');
  expect(result.label).toContain('Inflation targeting');
  expect(result.keyQualities).toEqual(['Independence','Credibility','Transparency']);
 });
 it('describes the exchange rate targeting regime',()=>{
  const result=describeRegime('exchangeRate');
  expect(result.label).toContain('Exchange rate targeting');
  expect(result.mechanism.toLowerCase()).toContain('reserves');
 });
 it('describes the interest-rate (neutral-rate) regime',()=>{
  const result=describeRegime('interestRate');
  expect(result.mechanism.toLowerCase()).toContain('neutral rate');
 });
 it('rates a fully independent and transparent central bank as strong',()=>{
  const result=assessCentralBankQualities(true,true,true);
  expect(result.error).toBeUndefined();
  expect(result.score).toBe(3);
  expect(result.rating).toContain('Strong');
  expect(result.independenceType).toBe('Operational and target independence');
 });
 it('classifies operational-only independence, matching the New Zealand/Sweden/UK pattern',()=>{
  const result=assessCentralBankQualities(true,false,true);
  expect(result.independenceType).toBe('Operational independence only');
 });
 it('rates a central bank with none of the qualities as very weak',()=>{
  const result=assessCentralBankQualities(false,false,false);
  expect(result.score).toBe(0);
  expect(result.rating).toContain('Very weak');
 });
 it('rejects non-boolean input',()=>{
  // @ts-expect-error intentional invalid input for validation testing
  expect(assessCentralBankQualities('yes',true,true).error).toBeTruthy();
 });
});

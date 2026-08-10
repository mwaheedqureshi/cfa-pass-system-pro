import {describe,expect,it} from 'vitest';
import {classifyTradingBloc} from './TradingBlocComparator';
describe('trading bloc classification',()=>{
 it('classifies a free trade area when no further features are present',()=>{
  const result=classifyTradingBloc(false,false,false,false);
  if('error' in result)throw new Error(result.error);
  expect(result.blocType).toBe('Free trade area');
 });
 it('classifies a customs union with a common external tariff only',()=>{
  const result=classifyTradingBloc(true,false,false,false);
  if('error' in result)throw new Error(result.error);
  expect(result.blocType).toBe('Customs union');
 });
 it('classifies a common market with a tariff and free factor mobility',()=>{
  const result=classifyTradingBloc(true,true,false,false);
  if('error' in result)throw new Error(result.error);
  expect(result.blocType).toBe('Common market');
 });
 it('classifies an economic union with institutions and policy coordination added',()=>{
  const result=classifyTradingBloc(true,true,true,false);
  if('error' in result)throw new Error(result.error);
  expect(result.blocType).toBe('Economic union');
 });
 it('classifies a monetary union with a shared currency added',()=>{
  const result=classifyTradingBloc(true,true,true,true);
  if('error' in result)throw new Error(result.error);
  expect(result.blocType).toBe('Monetary union');
 });
 it('rejects free factor mobility without a common external tariff',()=>{
  const result=classifyTradingBloc(false,true,false,false);
  expect('error' in result).toBe(true);
 });
 it('rejects common economic policy without free factor mobility',()=>{
  const result=classifyTradingBloc(true,false,true,false);
  expect('error' in result).toBe(true);
 });
 it('rejects a shared currency without common economic policy',()=>{
  const result=classifyTradingBloc(true,true,false,true);
  expect('error' in result).toBe(true);
 });
 it('includes the cumulative feature list matching the classified level',()=>{
  const result=classifyTradingBloc(true,true,false,false);
  if('error' in result)throw new Error(result.error);
  expect(result.features).toContain('Common external tariff');
  expect(result.features).toContain('Free factor mobility');
  expect(result.features).not.toContain('Common economic institutions and policy');
 });
});

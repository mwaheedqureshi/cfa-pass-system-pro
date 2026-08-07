import {describe,expect,it} from 'vitest';import {solveTVM} from './TVMCalculator';
describe('TVM calculator',()=>{
 it('solves PV, FV, and PMT with consistent cash-flow signs',()=>{
  expect(solveTVM({PV:'-1000',FV:'',PMT:'0',N:'5','I/Y':'6'}).value).toBeCloseTo(1338.2256,3);
  expect(solveTVM({PV:'',FV:'1000',PMT:'0',N:'2','I/Y':'6'}).value).toBeCloseTo(-889.9964,3);
  expect(solveTVM({PV:'-20000',FV:'0',PMT:'',N:'4','I/Y':'6'}).value).toBeCloseTo(5771.8298,3);
 });
 it('solves period count and rate for a single cash flow',()=>{
  expect(solveTVM({PV:'-1000',FV:'1338.2255776',PMT:'0',N:'','I/Y':'6'}).value).toBeCloseTo(5,6);
  expect(solveTVM({PV:'-1000',FV:'1338.2255776',PMT:'0',N:'5','I/Y':''}).value).toBeCloseTo(6,6);
 });
 it('handles a zero rate and rejects invalid domains',()=>{
  expect(solveTVM({PV:'-1000',FV:'0',PMT:'',N:'5','I/Y':'0'}).value).toBe(200);
  expect(solveTVM({PV:'',FV:'1000',PMT:'0',N:'0','I/Y':'6'}).error).toContain('greater than zero');
  expect(solveTVM({PV:'',FV:'1000',PMT:'0',N:'2','I/Y':'-100'}).error).toContain('greater than -100%');
  expect(solveTVM({PV:'abc',FV:'',PMT:'0',N:'5','I/Y':'6'}).error).toContain('finite');
 });
 it('requires exactly one missing variable',()=>expect(solveTVM({PV:'',FV:'',PMT:'0',N:'5','I/Y':'6'}).error).toBeTruthy());
});

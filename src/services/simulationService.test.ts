import {describe,expect,it} from 'vitest';
import {bootstrapMeans,correlatedNormalDraw,parseObservations,percentile,seededRandom,simulatePortfolio} from './simulationService';

describe('verified LM9 simulation utilities',()=>{
  const input={initialValue:100,expectedReturn:.05,volatility:.1,periods:3,simulations:1000,contribution:0,seed:42};
  it('reproduces pseudorandom draws for a fixed seed',()=>{const a=seededRandom(27),b=seededRandom(27);expect([a(),a(),a()]).toEqual([b(),b(),b()])});
  it('is deterministic for a seed',()=>expect(simulatePortfolio(input)).toEqual(simulatePortfolio(input)));
  it('calculates a zero-volatility geometric terminal value',()=>expect(simulatePortfolio({...input,volatility:0,simulations:100}).terminalValues?.[0]).toBeCloseTo(100*Math.exp(.15)));
  it('compounds a contribution after each simulated return',()=>expect(simulatePortfolio({...input,expectedReturn:0,volatility:0,periods:3,simulations:100,contribution:10}).terminalValues?.[0]).toBe(130));
  it('interpolates percentiles without mutating input',()=>{const values=[4,1,3,2];expect(percentile(values,.5)).toBe(2.5);expect(values).toEqual([4,1,3,2])});
  it('rejects malformed percentile input',()=>{expect(percentile([1,Number.NaN],.5)).toBeNaN();expect(percentile([1,2],1.1)).toBeNaN()});
  it('calculates the official two-variable correlated draw example',()=>expect(correlatedNormalDraw(.015,.02,.3,.4,-1.2)?.x2).toBeCloseTo(-.0204945,6));
  it('rejects invalid correlation and volatility',()=>{expect(correlatedNormalDraw(.1,.2,1.1,0,0)).toBeNull();expect(correlatedNormalDraw(-.1,.2,0,0,0)).toBeNull()});
  it('caps simulation counts',()=>expect(simulatePortfolio({...input,simulations:20001})).toHaveProperty('error'));
  it('rejects malformed simulation inputs',()=>{expect(simulatePortfolio({...input,expectedReturn:Number.NaN})).toHaveProperty('error');expect(simulatePortfolio({...input,volatility:-1})).toHaveProperty('error');expect(simulatePortfolio({...input,periods:0})).toHaveProperty('error')});
  it('bootstraps with replacement reproducibly',()=>expect(bootstrapMeans([1,2,3],3,100,7)).toEqual(bootstrapMeans([1,2,3],3,100,7)));
  it('calculates bootstrap standard error and percentile interval',()=>{const r=bootstrapMeans([1,2,3,4],4,1000,9);if('error'in r)throw Error(r.error);expect(r.standardError).toBeGreaterThan(0);expect(r.lower).toBeLessThan(r.originalMean);expect(r.upper).toBeGreaterThan(r.originalMean)});
  it('enforces bootstrap performance limits',()=>expect(bootstrapMeans([1,2],10001,100,1)).toHaveProperty('error'));
  it('rejects malformed observations',()=>expect(parseObservations('1,bad,3')).toBeNull());
});

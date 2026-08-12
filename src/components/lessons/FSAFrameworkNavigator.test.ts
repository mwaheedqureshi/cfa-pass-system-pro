import {describe,expect,it} from 'vitest';
import {activities,classifyActivity,checkSegmentDisclosure} from './FSAFrameworkNavigator';

describe('classifyActivity',()=>{
 it('classifies purpose/context activities as step 1',()=>{
  expect(classifyActivity('engagement-letter')?.step).toBe(1);
 });
 it('classifies data-gathering activities as step 2',()=>{
  expect(classifyActivity('gather-filings')?.step).toBe(2);
  expect(classifyActivity('site-visit')?.step).toBe(2);
 });
 it('classifies processing activities as step 3',()=>{
  expect(classifyActivity('compute-ratios')?.step).toBe(3);
  expect(classifyActivity('adjust-comparability')?.step).toBe(3);
 });
 it('classifies interpretation activities as step 4',()=>{
  expect(classifyActivity('explain-driver')?.step).toBe(4);
 });
 it('classifies communication activities as step 5',()=>{
  expect(classifyActivity('write-report')?.step).toBe(5);
 });
 it('classifies re-engagement after new information as step 6',()=>{
  expect(classifyActivity('revisit-after-news')?.step).toBe(6);
 });
 it('returns undefined for an unknown activity id',()=>{
  expect(classifyActivity('not-a-real-activity')).toBeUndefined();
 });
 it('every activity has a valid step between 1 and 6 and a non-empty explanation',()=>{
  for(const a of activities){
   expect(a.step).toBeGreaterThanOrEqual(1);
   expect(a.step).toBeLessThanOrEqual(6);
   expect(a.explanation.length).toBeGreaterThan(0);
  }
 });
});

describe('checkSegmentDisclosure',()=>{
 it('reproduces the lesson\'s worked example 14 (A42/B31/C9/D18 -> A,B,D qualify, 91% coverage, rule met)',()=>{
  const result=checkSegmentDisclosure([
   {name:'Segment A',revenuePct:42},
   {name:'Segment B',revenuePct:31},
   {name:'Segment C',revenuePct:9},
   {name:'Segment D',revenuePct:18},
  ]);
  expect(result.qualifying).toEqual(['Segment A','Segment B','Segment D']);
  expect(result.totalCoveragePct).toBeCloseTo(91,5);
  expect(result.meetsCoverageRule).toBe(true);
  expect(result.additionalSegmentsNeeded).toBe(false);
 });
 it('reproduces the lesson\'s worked example 15 (two qualifying segments covering only 58% -> additional segments required)',()=>{
  const result=checkSegmentDisclosure([
   {name:'Segment X',revenuePct:33},
   {name:'Segment Y',revenuePct:25},
   {name:'Segment Z',revenuePct:9},
   {name:'Segment W',revenuePct:9},
   {name:'Segment V',revenuePct:9},
   {name:'Segment U',revenuePct:9},
   {name:'Segment T',revenuePct:6},
  ]);
  expect(result.qualifying).toEqual(['Segment X','Segment Y']);
  expect(result.totalCoveragePct).toBeCloseTo(58,5);
  expect(result.meetsCoverageRule).toBe(false);
  expect(result.additionalSegmentsNeeded).toBe(true);
 });
 it('excludes a segment exactly at the boundary correctly (10% qualifies, 9.99% does not)',()=>{
  const result=checkSegmentDisclosure([{name:'Exactly ten',revenuePct:10},{name:'Just under',revenuePct:9.99},{name:'Rest',revenuePct:80.01}]);
  expect(result.qualifying).toContain('Exactly ten');
  expect(result.qualifying).not.toContain('Just under');
 });
 it('rejects an empty segment list',()=>{
  expect(checkSegmentDisclosure([]).error).toBeTruthy();
 });
 it('rejects a negative or out-of-range percentage',()=>{
  expect(checkSegmentDisclosure([{name:'Bad',revenuePct:-5}]).error).toBeTruthy();
  expect(checkSegmentDisclosure([{name:'Bad',revenuePct:150}]).error).toBeTruthy();
 });
 it('rejects percentages summing to more than 100%',()=>{
  expect(checkSegmentDisclosure([{name:'A',revenuePct:60},{name:'B',revenuePct:60}]).error).toBeTruthy();
 });
 it('reports no additional segments needed when zero segments qualify (nothing to disclose yet)',()=>{
  const result=checkSegmentDisclosure([{name:'Tiny 1',revenuePct:5},{name:'Tiny 2',revenuePct:5}]);
  expect(result.qualifying).toEqual([]);
  expect(result.additionalSegmentsNeeded).toBe(false);
 });
});

import {describe,expect,it} from 'vitest';
import probabilityQuestions from '../data/questions/quantitative-probability.json';
import samplingQuestions from '../data/questions/quantitative-sampling.json';
import hypothesisQuestions from '../data/questions/quantitative-hypothesis.json';
import portfolioQuestions from '../data/questions/quantitative-distributions.json';
import simulationQuestions from '../data/questions/quantitative-simulation.json';
import regressionQuestions from '../data/questions/quantitative-regression.json';
import dataAiQuestions from '../data/questions/quantitative-data-ai.json';
import returnsQuestions from '../data/questions/quantitative.json';
import benchmarkingQuestions from '../data/questions/quantitative-benchmarking.json';
import tvmQuestions from '../data/questions/quantitative-tvm.json';
import statisticsQuestions from '../data/questions/quantitative-statistics.json';
import probabilityCards from '../data/flashcards/quantitative-probability.json';
import modules78Cards from '../data/flashcards/quantitative-modules-7-8.json';
import modules910Cards from '../data/flashcards/quantitative-modules-9-10.json';
import modules1112Cards from '../data/flashcards/quantitative-modules-11-12.json';
import {completedOfficialQuantModules,officialQuantModules,quantStudyLessonOrder} from '../content/quantitativeCurriculum';
import {selectBalancedAssessment} from './assessmentService';
import type {Question} from '../data/types';

const questions=[...returnsQuestions,...benchmarkingQuestions,...tvmQuestions,...statisticsQuestions,...probabilityQuestions,...samplingQuestions,...hypothesisQuestions,...portfolioQuestions,...simulationQuestions,...regressionQuestions,...dataAiQuestions] as unknown as Question[];
const cards=[...probabilityCards,...modules78Cards,...modules910Cards,...modules1112Cards];
const targets={'quant-probability-06':50,'quant-sampling-08':45,'quant-hypothesis-09':45,'quant-distributions-07':50,'quant-simulation-11':45,'quant-regression-10':50,'quant-data-ai-12':40} as const;

describe('v1.6.5 Quantitative structural remediation',()=>{
 it('represents 11 official modules through 12 study lessons and groups LM7 once',()=>{expect(officialQuantModules).toHaveLength(11);expect(quantStudyLessonOrder).toHaveLength(12);expect(officialQuantModules.find(x=>x.id==='QM-LM7')?.studyLessonIds).toEqual(['quant-sampling-08','quant-hypothesis-09']);expect(completedOfficialQuantModules(['quant-sampling-08'])).not.toContainEqual(expect.objectContaining({id:'QM-LM7'}));expect(completedOfficialQuantModules(['quant-sampling-08','quant-hypothesis-09'])).toContainEqual(expect.objectContaining({id:'QM-LM7'}))});
 it('meets exact official question and card targets',()=>{for(const[id,target]of Object.entries(targets)){expect(questions.filter(x=>x.lessonId===id&&!x.supplementary)).toHaveLength(target);expect(cards.filter(x=>x.lessonId===id&&!x.supplementary)).toHaveLength(target);expect(questions.filter(x=>x.lessonId===id&&!x.supplementary).every(x=>x.officialModuleId&&x.studyLessonId===id)).toBe(true)}});
 it('keeps LM8 portfolio-only and separates LM11 enrichment',()=>{const lm8=questions.filter(x=>x.lessonId==='quant-distributions-07'&&!x.supplementary);expect(lm8).toHaveLength(50);expect(lm8.some(x=>/binomial|lognormal|student.?s t/i.test(`${x.stem} ${x.tags.join(' ')}`))).toBe(false);expect(questions.filter(x=>x.lessonId==='quant-data-ai-12'&&x.supplementary)).toHaveLength(10);expect(cards.filter(x=>x.lessonId==='quant-data-ai-12'&&x.supplementary)).toHaveLength(10)});
 it('selects 90 official questions balanced across all 11 modules',()=>{const selected=selectBalancedAssessment(questions,90,165);expect(selected).toHaveLength(90);expect(selected.some(x=>x.supplementary)).toBe(false);expect(new Set(selected.map(x=>x.officialModuleId)).size).toBe(11);const lm7=selected.filter(x=>x.officialModuleId==='QM-LM7');expect(new Set(lm7.map(x=>x.subdivision))).toEqual(new Set(['A','B']))});
});

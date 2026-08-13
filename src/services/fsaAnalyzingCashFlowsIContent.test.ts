import {describe,expect,it} from 'vitest';
import questions from '../data/questions/fsa-04-analyzing-statements-of-cash-flows-i.json';
import cards from '../data/flashcards/fsa-04-analyzing-statements-of-cash-flows-i.json';
import formulas from '../data/formulas/fsa-04-analyzing-statements-of-cash-flows-i.json';
import {lessons} from '../content/lessonManifest';
import {officialFsaModules,verifiedOfficialFsaModules} from '../content/fsaCurriculum';
const outcomes=[
'describe how the cash flow statement is linked to the income statement and the balance sheet',
'describe the steps in the preparation of direct and indirect cash flow statements, including how cash flows can be computed using income statement and balance sheet data',
'demonstrate the conversion of cash flows from the indirect to direct method',
'contrast cash flow statements prepared under International Financial Reporting Standards (IFRS) and US generally accepted accounting principles (US GAAP)'];
describe('FSA analyzing statements of cash flows I content',()=>{
 it('delivers 45 official plus 10 supplementary questions and flashcards',()=>{expect(questions).toHaveLength(55);expect(cards).toHaveLength(55);expect(questions.filter(q=>!q.supplementary)).toHaveLength(45);expect(cards.filter(c=>!c.supplementary)).toHaveLength(45)});
 it('assigns answer positions deterministically and maximally evenly',()=>expect([0,1,2].map(i=>questions.filter(q=>q.correctChoiceIndex===i).length)).toEqual([19,18,18]));
 it('covers every official LOS in both asset types',()=>{for(const outcome of outcomes){expect(questions.some(q=>q.officialLearningOutcome===outcome&&!q.supplementary)).toBe(true);expect(cards.some(c=>c.officialLearningOutcome===outcome&&!c.supplementary)).toBe(true)}});
 it('contains exactly eight source-grounded conversion formulas',()=>{expect(formulas).toHaveLength(8);expect(formulas.every(f=>f.relatedLessonId==='fsa-04-analyzing-statements-of-cash-flows-i')).toBe(true)});
 it('registers the stable lesson and marks four of twelve modules verified',()=>{const lesson=lessons.find(l=>l.id==='fsa-04-analyzing-statements-of-cash-flows-i');expect(lesson?.formulaIds).toHaveLength(8);expect(verifiedOfficialFsaModules).toHaveLength(4);expect(officialFsaModules.filter(m=>m.status==='pending')).toHaveLength(8)});
});

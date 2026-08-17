import{describe,expect,it}from'vitest';
import questions from'../data/questions/fsa-08-topics-in-long-term-liabilities-and-equity.json';
import cards from'../data/flashcards/fsa-08-topics-in-long-term-liabilities-and-equity.json';
import formulas from'../data/formulas/fsa-08-topics-in-long-term-liabilities-and-equity.json';
import{lessons}from'../content/lessonManifest';
import{verifiedOfficialFsaModules}from'../content/fsaCurriculum';
const los=['explain the financial reporting of leases from the perspectives of lessors and lessees','explain the financial reporting of defined contribution, defined benefit, and stock-based compensation plans','describe the financial statement presentation of and disclosures relating to long-term liabilities and share-based compensation'];
describe('FSA topics in long-term liabilities and equity',()=>{
 it('delivers 35 official and 10 supplementary assets',()=>{expect(questions).toHaveLength(45);expect(cards).toHaveLength(45);expect(questions.filter(q=>!q.supplementary)).toHaveLength(35);expect(cards.filter(c=>!c.supplementary)).toHaveLength(35)});
 it('has the mandated deterministic answer balance',()=>expect([0,1,2].map(i=>questions.filter(q=>q.correctChoiceIndex===i).length)).toEqual([15,15,15]));
 it('covers all three LOS in official assets',()=>{for(const l of los){expect(questions.some(q=>q.officialLearningOutcome===l&&!q.supplementary)).toBe(true);expect(cards.some(c=>c.officialLearningOutcome===l&&!c.supplementary)).toBe(true)}});
 it('retains all eleven source-supported relationships',()=>expect(formulas).toHaveLength(11));
 it('registers LM8 as the eighth verified FSA module',()=>{expect(lessons.find(l=>l.id==='fsa-08-topics-in-long-term-liabilities-and-equity')?.formulaIds).toHaveLength(11);expect(verifiedOfficialFsaModules).toHaveLength(9)});
});

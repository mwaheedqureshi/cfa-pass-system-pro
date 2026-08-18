import {describe,expect,it} from 'vitest';
import questions from '../data/questions/corporate-issuers-01-organizational-forms-corporate-issuer-features-and-ownership.json';
import cards from '../data/flashcards/corporate-issuers-01-organizational-forms-corporate-issuer-features-and-ownership.json';
import {lessons} from '../content/lessonManifest';
import {officialCorporateIssuersModules,verifiedOfficialCorporateIssuersModules} from '../content/corporateIssuersCurriculum';

const lessonId='corporate-issuers-01-organizational-forms-corporate-issuer-features-and-ownership';
describe('Corporate Issuers LM1 organizational forms and ownership',()=>{
 it('delivers 35 official and 10 supplementary questions and flashcards',()=>{expect(questions).toHaveLength(45);expect(cards).toHaveLength(45);expect(questions.filter(question=>!question.supplementary)).toHaveLength(35);expect(cards.filter(card=>!card.supplementary)).toHaveLength(35)});
 it('assigns exactly balanced answer positions during initial generation',()=>expect([0,1,2].map(index=>questions.filter(question=>question.correctChoiceIndex===index).length)).toEqual([15,15,15]));
 it('covers all three official LOS evenly',()=>{const outcomes=lessons.find(lesson=>lesson.id===lessonId)?.officialLearningOutcomes??[];expect(outcomes).toHaveLength(3);expect(outcomes.map(outcome=>questions.filter(question=>question.officialLearningOutcome===outcome).length)).toEqual([15,15,15]);expect(outcomes.map(outcome=>cards.filter(card=>card.officialLearningOutcome===outcome).length)).toEqual([15,15,15])});
 it('owns no production formulas',()=>expect(lessons.find(lesson=>lesson.id===lessonId)?.formulaIds).toEqual([]));
 it('preserves LM1 while LM2 through LM5 are published and LM6 through LM7 remain pending',()=>{expect(officialCorporateIssuersModules).toHaveLength(7);expect(verifiedOfficialCorporateIssuersModules).toHaveLength(5);expect(officialCorporateIssuersModules.filter(module=>module.status==='pending')).toHaveLength(2)});
});

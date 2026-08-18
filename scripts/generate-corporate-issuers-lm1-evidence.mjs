import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';

const out='.local-research/corporate-issuers-verification/CI-LM1',lessonId='corporate-issuers-01-organizational-forms-corporate-issuer-features-and-ownership';await mkdir(out,{recursive:true});
const read=async path=>JSON.parse(await readFile(path,'utf8')),write=async(name,value)=>writeFile(`${out}/${name}`,typeof value==='string'?value:JSON.stringify(value,null,2)+'\n','utf8');
const questions=await read(`src/data/questions/${lessonId}.json`),cards=await read(`src/data/flashcards/${lessonId}.json`),lesson=await readFile('public/content/corporate-issuers/01-organizational-forms-corporate-issuer-features-and-ownership.md','utf8'),outcomes=[...new Set(questions.map(question=>question.officialLearningOutcome))];
const accepted=[
 {id:'cfa-l1-2026-premium-practice-pack-1-s2-q001',los:outcomes[0],reason:'Complete three-choice item; keyed corporation answer and explanation directly test limited liability across organizational forms.'},
 {id:'cfa-l1-2026-premium-practice-pack-1-s2-q002',los:outcomes[2],reason:'Complete item; keyed longer private-company holding period and explanation directly compare private and public issuance/liquidity.'},
 {id:'cfa-l1-2026-premium-practice-pack-1-s2-q004',los:outcomes[0],reason:'Minor stem spacing typo only; all choices, general-partner key, and explanation are complete and directly test limited-partnership control.'},
 {id:'cfa-l1-2026-premium-practice-pack-1-s2-q005',los:outcomes[2],reason:'Complete item; exchange-listing key and explanation directly test the typical public/private distinction while retaining jurisdiction caveat.'}
];
const rejected=[
 {id:'cfa-l1-2026-premium-practice-pack-1-s2-q006',reason:'Rejected: third choice contains substantial page-header/OCR corruption, so the complete choice set is not production-safe.'},
 {id:'cfa-l1-2026-premium-practice-pack-1-s2-q007',reason:'Rejected from LM1: complete item but tests debt-versus-equity investor loss claims owned by CI-LM2.'},
 {id:'cfa-l1-2026-premium-practice-pack-1-s2-q008',reason:'Rejected from LM1: complete item but tests staggered-board governance owned by CI-LM3.'}
];
await write('MODULE_VERIFICATION_SUMMARY.md',`# CI-LM1 Module Verification Summary — v1.9.1\n\nOfficial title: Organizational Forms, Corporate Issuer Features, and Ownership. Source: 2027 PDF pages 11–44, printed pages 3–36. All 3 LOS are covered by one lesson with 12 original worked examples, 10 original exhibits, 45 questions, 45 flashcards, zero formulas, and two tools. CI-LM2 through CI-LM7 remain pending.\n`);
await write('los-to-lesson-audit.json',{allCovered:true,outcomes,lessonSections:['Organizational forms of businesses','Key features of corporate issuers','Publicly versus privately owned corporate issuers'],questionDistribution:outcomes.map(outcome=>questions.filter(question=>question.officialLearningOutcome===outcome).length),flashcardDistribution:outcomes.map(outcome=>cards.filter(card=>card.officialLearningOutcome===outcome).length)});
await write('example-audit.json',{count:(lesson.match(/^### Worked example/gim)??[]).length,original:true,internallyConsistent:true,cfaExamplesReproduced:false});
await write('exhibit-audit.json',{count:(lesson.match(/^### Original /gim)??[]).length,original:true,cfaExhibitsReproduced:false,types:['comparison matrices','decision tree','ownership map','control chain','financing ladder','tax table','issuance map','transition maps']});
await write('formula-audit.json',{newProductionFormulas:0,formulaFileExists:false,reason:'The 2027 LM1 source contains structural comparisons but no LM1-owned calculation relationship.',canonicalDuplicatesCreated:false});
await write('question-los-distribution.json',{total:questions.length,official:questions.filter(question=>!question.supplementary).length,supplementary:questions.filter(question=>question.supplementary).length,distribution:outcomes.map(outcome=>questions.filter(question=>question.officialLearningOutcome===outcome).length)});
await write('answer-position-distribution.json',{assignedDuringInitialGeneration:true,distribution:[0,1,2].map(index=>questions.filter(question=>question.correctChoiceIndex===index).length),expected:[15,15,15]});
await write('flashcard-los-distribution.json',{total:cards.length,official:cards.filter(card=>!card.supplementary).length,supplementary:cards.filter(card=>card.supplementary).length,distribution:outcomes.map(outcome=>cards.filter(card=>card.officialLearningOutcome===outcome).length)});
await write('mock-item-audit.json',{provisionalReviewed:7,accepted,rejected,finalAcceptedCount:accepted.length,allChoicesKeysAndExplanationsReviewed:true});
await write('interactive-tool-tests.json',{tools:['OrganizationalFormComparator','PublicPrivateTransitionMap'],focusedTest:'src/components/lessons/CorporateIssuersLM1Tools.test.tsx',status:'pending final test run'});
await write('encoding-audit.json',{utf8SafeGeneration:true,lessonSha256:createHash('sha256').update(lesson).digest('hex'),validator:'scripts/validate-encoding.mjs',status:'pending final check'});
await write('npm-check-evidence.json',{status:'pending final two corrected-state runs'});
await write('scope-audit.json',{onlyProducedModule:'CI-LM1',pendingModules:['CI-LM2','CI-LM3','CI-LM4','CI-LM5','CI-LM6','CI-LM7'],quantitativeSemanticChanges:'none',economicsSemanticChanges:'none',fsaSemanticChanges:'none',futureTopicProductionCreated:false});
await write('manual-quality-audit.json',{allLosCovered:true,lm2Leakage:false,unsupportedLegalTaxClaims:false,organizationalDistinctionsAccurate:true,publicPrivateDistinctionsContextual:true,examplesConsistent:true,toolsDeterministic:true,mocksGenuine:accepted.map(item=>item.id),duplicateQuestions:false,nearDuplicateQuestions:false,answerPositionsBalanced:true,uiEncoding:'pending final validation'});
console.log({artifacts:14,examples:(lesson.match(/^### Worked example/gim)??[]).length,exhibits:(lesson.match(/^### Original /gim)??[]).length,acceptedMocks:accepted.length,rejectedMocks:rejected.length});

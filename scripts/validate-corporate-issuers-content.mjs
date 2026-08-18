import {access,readFile} from 'node:fs/promises';

const lessonId='corporate-issuers-01-organizational-forms-corporate-issuer-features-and-ownership',failures=[];
const fail=message=>failures.push(message),read=async path=>JSON.parse(await readFile(path,'utf8'));
const questions=await read(`src/data/questions/${lessonId}.json`),cards=await read(`src/data/flashcards/${lessonId}.json`),lesson=await readFile(`public/content/corporate-issuers/01-organizational-forms-corporate-issuer-features-and-ownership.md`,'utf8');
const outcomes=['compare the organizational forms of businesses','describe key features of corporate issuers','compare publicly and privately owned corporate issuers'];
if(questions.length!==45||questions.filter(item=>!item.supplementary).length!==35||questions.filter(item=>item.supplementary).length!==10)fail('CI-LM1 questions must total 45 with a 35/10 split');
if(cards.length!==45||cards.filter(item=>!item.supplementary).length!==35||cards.filter(item=>item.supplementary).length!==10)fail('CI-LM1 flashcards must total 45 with a 35/10 split');
for(const outcome of outcomes){if(questions.filter(item=>item.officialLearningOutcome===outcome).length!==15)fail(`Question LOS distribution is not 15 for ${outcome}`);if(cards.filter(item=>item.officialLearningOutcome===outcome).length!==15)fail(`Flashcard LOS distribution is not 15 for ${outcome}`)}
const positions=[0,1,2].map(index=>questions.filter(item=>item.correctChoiceIndex===index).length);if(positions.join('/')!=='15/15/15')fail(`Answer positions must be 15/15/15, found ${positions.join('/')}`);
const normalize=value=>value.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(),unique=(items,key,label)=>{const seen=new Map();for(const item of items){const value=normalize(item[key]);if(seen.has(value))fail(`${label} duplicate: ${item.id} / ${seen.get(value)}`);seen.set(value,item.id)}};
unique(questions,'stem','question stem');unique(cards,'front','flashcard front');
for(const question of questions){if(question.lessonId!==lessonId||question.topicId!=='corporate-issuers'||question.officialModuleId!=='CI-LM1')fail(`${question.id}: invalid ownership metadata`);if(question.choices.length!==3||question.incorrectChoiceExplanations.length!==3||question.correctChoiceIndex<0||question.correctChoiceIndex>2)fail(`${question.id}: invalid answer structure`);if(question.relatedFormulaIds.length)fail(`${question.id}: LM1 must not reference an owned formula`)}
for(const card of cards)if(card.lessonId!==lessonId||card.officialModuleId!=='CI-LM1')fail(`${card.id}: invalid ownership metadata`);
if((lesson.match(/^### Worked example/gim)??[]).length!==12)fail('Lesson must contain exactly 12 worked examples');
if((lesson.match(/^### Original /gim)??[]).length!==10)fail('Lesson must contain exactly 10 original synthesis exhibits');
for(const heading of ['## Learning outcomes','## Exam tips and distinctions','## Common mistakes','## 30-second summary'])if(!lesson.includes(heading))fail(`Lesson missing ${heading}`);
try{await access(`src/data/formulas/${lessonId}.json`);fail('CI-LM1 must not have a production formula file')}catch{/* expected */}
const manifest=await readFile('src/content/lessonManifest.ts','utf8'),curriculum=await readFile('src/content/corporateIssuersCurriculum.ts','utf8'),practice=await readFile('src/pages/PracticePage.tsx','utf8'),flashcards=await readFile('src/pages/FlashcardsPage.tsx','utf8'),search=await readFile('src/hooks/useSearch.ts','utf8'),resources=await readFile('src/components/lessons/LessonResources.tsx','utf8'),tools=await readFile('src/components/lessons/LessonInteractiveTools.tsx','utf8'),topic=await readFile('src/pages/TopicPage.tsx','utf8');
for(const [name,text] of Object.entries({manifest,curriculum,practice,flashcards,search,resources,tools,topic}))if(!text.includes(lessonId))fail(`${name}: CI-LM1 is not reachable`);
for(const tool of ['OrganizationalFormComparator','PublicPrivateTransitionMap'])if(!tools.includes(tool))fail(`Tool registry missing ${tool}`);
if((curriculum.match(/\{id:'CI-LM\d'.*status:'verified'/g)??[]).length!==2||(curriculum.match(/\{id:'CI-LM\d'.*status:'pending'/g)??[]).length!==5)fail('Corporate Issuers must be 2 verified / 5 pending');
const evidence=await read('.local-research/corporate-issuers-verification/CI-LM1/mock-item-audit.json');if(evidence.accepted.length!==4||evidence.rejected.length!==3)fail('Mock audit must record 4 accepted and 3 rejected candidates');
const lm2='corporate-issuers-02-investors-and-other-stakeholders',lm2Outcomes=['compare the financial claims and motivations of lenders and shareholders','describe a company’s stakeholder groups and compare their interests','describe environmental, social, and governance factors of corporate issuers considered by investors'];
const lm2Questions=await read(`src/data/questions/${lm2}.json`),lm2Cards=await read(`src/data/flashcards/${lm2}.json`),lm2Lesson=await readFile('public/content/corporate-issuers/02-investors-and-other-stakeholders.md','utf8');
if(lm2Questions.length!==45||lm2Questions.filter(x=>!x.supplementary).length!==35||lm2Questions.filter(x=>x.supplementary).length!==10)fail('CI-LM2 questions must total 45 with a 35/10 split');
if(lm2Cards.length!==45||lm2Cards.filter(x=>!x.supplementary).length!==35||lm2Cards.filter(x=>x.supplementary).length!==10)fail('CI-LM2 flashcards must total 45 with a 35/10 split');
for(const outcome of lm2Outcomes){if(lm2Questions.filter(x=>x.officialLearningOutcome===outcome).length!==15)fail(`CI-LM2 question LOS count must be 15: ${outcome}`);if(lm2Cards.filter(x=>x.officialLearningOutcome===outcome).length!==15)fail(`CI-LM2 card LOS count must be 15: ${outcome}`)}
if([0,1,2].map(i=>lm2Questions.filter(x=>x.correctChoiceIndex===i).length).join('/')!=='15/15/15')fail('CI-LM2 answer positions must be 15/15/15');
for(const item of lm2Questions)if(item.lessonId!==lm2||item.officialModuleId!=='CI-LM2'||item.relatedFormulaIds.length)fail(`${item.id}: invalid LM2 ownership/formula metadata`);
for(const item of lm2Cards)if(item.lessonId!==lm2||item.officialModuleId!=='CI-LM2')fail(`${item.id}: invalid LM2 ownership metadata`);
unique(lm2Questions,'stem','LM2 question stem');unique(lm2Cards,'front','LM2 flashcard front');
if((lm2Lesson.match(/^### Worked example/gim)??[]).length!==10)fail('CI-LM2 must contain 10 worked examples');if((lm2Lesson.match(/^### Original /gim)??[]).length!==10)fail('CI-LM2 must contain 10 original exhibits');
try{await access(`src/data/formulas/${lm2}.json`);fail('CI-LM2 must not have a production formula file')}catch{/* expected */}
for(const [name,text] of Object.entries({manifest,curriculum,practice,flashcards,search,resources,tools,topic}))if(!text.includes(lm2))fail(`${name}: CI-LM2 is not reachable`);
for(const tool of ['StakeholderClaimPriorityExplorer','ESGRiskOpportunityClassifier'])if(!tools.includes(tool))fail(`Tool registry missing ${tool}`);
const lm2Evidence=await read('.local-research/corporate-issuers-verification/CI-LM2/mock-item-audit.json');if(lm2Evidence.accepted.length!==2||lm2Evidence.rejected.length!==2)fail('LM2 mock audit must record 2 accepted and 2 rejected candidates');
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log('Corporate Issuers content valid: CI-LM1 and CI-LM2 verified; each has 3/3 LOS, 45 questions (35/10), 45 flashcards (35/10), 0 formulas, and 2 tools; CI-LM3–LM7 pending.');

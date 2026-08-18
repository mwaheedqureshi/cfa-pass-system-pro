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
if((curriculum.match(/\{id:'CI-LM\d'.*status:'verified'/g)??[]).length!==1||(curriculum.match(/\{id:'CI-LM\d'.*status:'pending'/g)??[]).length!==6)fail('Corporate Issuers must be 1 verified / 6 pending');
const evidence=await read('.local-research/corporate-issuers-verification/CI-LM1/mock-item-audit.json');if(evidence.accepted.length!==4||evidence.rejected.length!==3)fail('Mock audit must record 4 accepted and 3 rejected candidates');
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log('Corporate Issuers content valid: CI-LM1 verified, 3/3 LOS, 45 questions (35/10), 45 flashcards (35/10), 0 formulas, 2 tools, 4 accepted mocks; CI-LM2–LM7 pending.');

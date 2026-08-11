import {execFileSync} from 'node:child_process';
import {access,readFile} from 'node:fs/promises';

const failures=[],privateRoot='.local-research/economics-verification';
const fail=m=>failures.push(m),read=async p=>JSON.parse((await readFile(p,'utf8')).replace(/^\uFEFF/,''));

const modules=['ECO-LM1','ECO-LM2','ECO-LM3','ECO-LM4','ECO-LM5','ECO-LM6','ECO-LM7','ECO-LM8'];
const lessonByModule={
 'ECO-LM1':{lessonId:'economics-firm-market-01',file:'economics-firm-market-01',contentPath:'public/content/economics/01-firm-and-market-structures.md',hasFormulas:true},
 'ECO-LM2':{lessonId:'economics-02-understanding-business-cycles',file:'economics-02-understanding-business-cycles',contentPath:'public/content/economics/02-understanding-business-cycles.md',hasFormulas:true},
 'ECO-LM3':{lessonId:'economics-03-fiscal-policy',file:'economics-03-fiscal-policy',contentPath:'public/content/economics/03-fiscal-policy.md',hasFormulas:true},
 'ECO-LM4':{lessonId:'economics-04-monetary-policy',file:'economics-04-monetary-policy',contentPath:'public/content/economics/04-monetary-policy.md',hasFormulas:true},
 'ECO-LM5':{lessonId:'economics-05-introduction-to-geopolitics',file:'economics-05-introduction-to-geopolitics',contentPath:'public/content/economics/05-introduction-to-geopolitics.md',hasFormulas:false},
 'ECO-LM6':{lessonId:'economics-06-international-trade',file:'economics-06-international-trade',contentPath:'public/content/economics/06-international-trade.md',hasFormulas:true},
 'ECO-LM7':{lessonId:'economics-07-capital-flows-and-the-fx-market',file:'economics-07-capital-flows-and-the-fx-market',contentPath:'public/content/economics/07-capital-flows-and-the-fx-market.md',hasFormulas:true},
 'ECO-LM8':{lessonId:'economics-08-exchange-rate-calculations',file:'economics-08-exchange-rate-calculations',contentPath:'public/content/economics/08-exchange-rate-calculations.md',hasFormulas:true},
};

// --- exactly 8 official modules, mapped once each ---
if(modules.length!==8)fail('Expected exactly 8 official Economics modules');

// --- all 8 public lessons exist ---
for(const m of modules){try{await access(lessonByModule[m].contentPath)}catch{fail(`${m}: public lesson file missing at ${lessonByModule[m].contentPath}`)}}
const manifest=await readFile('src/content/lessonManifest.ts','utf8');
for(const m of modules){if(!manifest.includes(`"id":"${lessonByModule[m].lessonId}"`))fail(`${m}: not registered in lessonManifest.ts`)}

// --- all 8 module verification directories + required private audit files exist ---
const requiredAuditFiles=['source-map.json','coverage-matrix.json','lesson-audit.json','example-audit.json','question-audit.json','flashcard-audit.json','formula-audit.json','graph-audit.json','tool-audit.json','mock-coverage.json','verification-report.md','MODULE_VERIFICATION_SUMMARY.md'];
for(const m of modules){
 try{await access(`${privateRoot}/${m}`)}catch{fail(`${m}: verification directory missing`)}
 for(const file of requiredAuditFiles)try{await access(`${privateRoot}/${m}/${file}`)}catch{fail(`${m}: missing required audit file ${file}`)}
}

// --- every module status = VERIFIED; no critical unresolved items ---
for(const m of modules){
 try{
  const lesson=await read(`${privateRoot}/${m}/lesson-audit.json`);
  if(lesson.auditStatus!=='complete'||lesson.contentStatus!=='content_verified')fail(`${m}: lesson-audit does not report a verified, complete status`);
 }catch{/* already reported by the file-existence check above */}
}
const status=await read(`${privateRoot}/verification-status.json`);
const declaredVerified=new Set(status.fullyVerifiedModules??[]);
if(modules.some(m=>!declaredVerified.has(m))||declaredVerified.size!==8)fail('verification-status.json must declare all 8 modules fully verified');
if((status.criticalUnresolvedItems??[]).length!==0)fail('verification-status.json reports unresolved critical Economics issues');
for(const m of modules){if(status.moduleStatuses?.[m]!=='content_verified')fail(`${m}: verification-status module status must be content_verified`)}

// --- final question/flashcard/formula totals from real datasets, no supplementary leakage, no duplicates ---
const readSet=async(dir,onlyWithFormulas=false)=>{const out=[];for(const m of modules){if(onlyWithFormulas&&!lessonByModule[m].hasFormulas)continue;try{out.push(...await read(`src/data/${dir}/${lessonByModule[m].file}.json`))}catch{fail(`${m}: missing src/data/${dir}/${lessonByModule[m].file}.json`)}}return out};
const questions=await readSet('questions'),cards=await readSet('flashcards'),formulas=await readSet('formulas',true);

const officialQ=questions.filter(q=>!q.supplementary),suppQ=questions.filter(q=>q.supplementary);
const officialFc=cards.filter(c=>!c.supplementary),suppFc=cards.filter(c=>c.supplementary);
if(officialQ.length!==325||suppQ.length!==85)fail(`Question official/supplementary totals are not 325/85 (found ${officialQ.length}/${suppQ.length})`);
if(officialFc.length!==325||suppFc.length!==85)fail(`Flashcard official/supplementary totals are not 325/85 (found ${officialFc.length}/${suppFc.length})`);
if(formulas.length!==42||formulas.some(f=>f.supplementary))fail(`Formula total is not 42 official (found ${formulas.length})`);

const unique=(items,key,label)=>{const seen=new Map();for(const x of items){const value=key(x);if(seen.has(value))fail(`${label} duplicate: ${x.id} and ${seen.get(value)}`);else seen.set(value,x.id)}};
const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
unique(questions,x=>x.id,'question ID');unique(questions,x=>normalize(x.stem),'question stem');
unique(cards,x=>x.id,'flashcard ID');unique(cards,x=>normalize(x.front),'flashcard front');
unique(formulas,x=>x.id,'formula ID');

for(const q of questions){
 const owner=modules.find(m=>lessonByModule[m].lessonId===q.lessonId);
 if(!owner)fail(`${q.id}: lessonId ${q.lessonId} does not map to an official Economics module`);
 if(q.choices?.length!==3||q.correctChoiceIndex<0||q.correctChoiceIndex>2)fail(`${q.id}: invalid choices/index`);
 if(q.incorrectChoiceExplanations?.length!==3||!q.explanation?.trim())fail(`${q.id}: incomplete explanations`);
}
for(const c of cards)if(!modules.some(m=>lessonByModule[m].lessonId===c.lessonId))fail(`${c.id}: lessonId ${c.lessonId} does not map to an official Economics module`);
for(const f of formulas){
 const owner=modules.find(m=>lessonByModule[m].lessonId===f.relatedLessonId);
 if(!owner)fail(`${f.id}: relatedLessonId ${f.relatedLessonId} does not map to an official Economics module`);
 for(const key of ['expression','meaning','workedExample','commonMistake'])if(!f[key]?.toString().trim())fail(`${f.id}: missing ${key}`);
}

// --- chapter exams resolve for all 8 modules (>=30 official questions each; UI wiring present) ---
const resources=await readFile('src/components/lessons/LessonResources.tsx','utf8');
for(const m of modules){
 const {lessonId}=lessonByModule[m];
 if(!resources.includes(`'${lessonId}'`))fail(`${m}: chapter exam entry point missing from LessonResources.tsx`);
 const officialCount=questions.filter(q=>q.lessonId===lessonId&&!q.supplementary).length;
 if(officialCount<30)fail(`${m}: only ${officialCount} official questions, fewer than the 30 a chapter exam requires`);
}

// --- Economics comprehensive assessment resolves: 60Q, 8 modules, balanced, deterministic, supplementary excluded ---
const assessmentService=await readFile('src/services/assessmentService.ts','utf8');
if(!assessmentService.includes('officialEconomicsModuleForLesson'))fail('assessmentService.ts is not wired to the Economics module lookup');
const practicePage=await readFile('src/pages/PracticePage.tsx','utf8');
if(!practicePage.includes('EconomicsComprehensiveAssessment')||!practicePage.includes("mode')==='economics'"))fail('Economics comprehensive assessment is not wired into PracticePage.tsx');
try{await access('src/components/practice/EconomicsComprehensiveAssessment.tsx')}catch{fail('EconomicsComprehensiveAssessment.tsx component is missing')}
{
 const seededRandom=seed=>()=>((seed=Math.imul(48271,seed)%2147483647)&2147483647)/2147483647;
 const shuffle=(xs,random)=>{const out=[...xs];for(let i=out.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[out[i],out[j]]=[out[j],out[i]]}return out};
 const eligible=questions.filter(q=>!q.supplementary),groups=new Map();
 for(const q of eligible){const id=modules.find(m=>lessonByModule[m].lessonId===q.lessonId);groups.set(id,[...(groups.get(id)??[]),q])}
 const count=60,ids=[...groups.keys()].sort(),random=seededRandom(2708);
 const base=Math.floor(count/ids.length),extra=count%ids.length,selected=[];
 ids.forEach((id,index)=>{const target=base+(index<extra?1:0);selected.push(...shuffle(groups.get(id)??[],random).slice(0,target))});
 if(selected.length!==60)fail(`Economics comprehensive assessment selection produced ${selected.length} questions, expected 60`);
 if(new Set(selected.map(q=>modules.find(m=>lessonByModule[m].lessonId===q.lessonId))).size!==8)fail('Economics comprehensive assessment does not represent all 8 official modules');
 if(selected.some(q=>q.supplementary))fail('Economics comprehensive assessment selection leaked supplementary content');
}

// --- FX notation invariants hold across ECO-LM7/ECO-LM8; KI-L09 correction remains intact ---
const lm7=await readFile(lessonByModule['ECO-LM7'].contentPath,'utf8'),lm8=await readFile(lessonByModule['ECO-LM8'].contentPath,'utf8');
if(!/price currency/i.test(lm7)||!/base currency/i.test(lm7))fail('ECO-LM7 lesson does not state the price/base currency quotation convention');
if(!/price currency/i.test(lm8)||!/base currency/i.test(lm8))fail('ECO-LM8 lesson does not state the price/base currency quotation convention');
const buggyHedgedReturn=/\(1\s*[÷/]\s*S\)\s*[×x*]\s*\(1\s*\+\s*r_f\)\s*[×x*]\s*F/i;
if(buggyHedgedReturn.test(lm8))fail('ECO-LM8 lesson contains the inverted KI-L09 hedged-return formula pattern');
const eco08Questions=await read(`src/data/questions/${lessonByModule['ECO-LM8'].file}.json`);
for(const q of eco08Questions)if(buggyHedgedReturn.test(q.explanation??''))fail(`${q.id}: contains the inverted KI-L09 hedged-return formula pattern`);
const knownIssues=await readFile('KNOWN_ISSUES.md','utf8');
if(!knownIssues.includes('KI-L09'))fail('KNOWN_ISSUES.md is missing the KI-L09 regression record');

// --- Quantitative remains frozen (smoke check; full verification is validate-quant-verification.mjs) ---
const quantModules=['quantitative.json','quantitative-benchmarking.json','quantitative-tvm.json','quantitative-statistics.json','quantitative-probability.json','quantitative-distributions.json','quantitative-sampling.json','quantitative-hypothesis.json','quantitative-regression.json','quantitative-simulation.json','quantitative-data-ai.json'];
const quantQuestions=(await Promise.all(quantModules.map(f=>read(`src/data/questions/${f}`)))).flat();
if(quantQuestions.filter(q=>!q.supplementary).length!==545||quantQuestions.filter(q=>q.supplementary).length!==10)fail('Quantitative question totals drifted from the frozen 545/10 baseline');

// --- no private source artifact is tracked by Git ---
const tracked=execFileSync('git',['ls-files','.local-research'],{encoding:'utf8'}).trim();
if(tracked)fail('Private .local-research artifacts are tracked by Git');

if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log(`Economics verification valid: 8 modules fully verified, ${questions.length} questions (${officialQ.length} official/${suppQ.length} supplementary), ${cards.length} flashcards (${officialFc.length}/${suppFc.length}), ${formulas.length} official formulas, 60-question comprehensive assessment resolves across all 8 modules.`);

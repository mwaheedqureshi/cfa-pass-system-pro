import {execFileSync} from 'node:child_process';import {access,readFile} from 'node:fs/promises';
const failures=[],fail=x=>failures.push(x),read=async p=>JSON.parse((await readFile(p,'utf8')).replace(/^\uFEFF/,''));

const producedModules=[
 {officialModuleId:'FSA-LM1',lessonId:'fsa-01-introduction-to-financial-statement-analysis',contentPath:'public/content/fsa/01-introduction-to-financial-statement-analysis.md',hasFormulas:false,officialQuestionCount:35,supplementaryQuestionCount:10,tools:['FSAFrameworkNavigator']},
 {officialModuleId:'FSA-LM2',lessonId:'fsa-02-analyzing-income-statements',contentPath:'public/content/fsa/02-analyzing-income-statements.md',hasFormulas:true,formulaCount:10,officialQuestionCount:50,supplementaryQuestionCount:10,tools:['IncomeStatementEPSExplorer','RevenueExpenseRecognitionClassifier']},
 {officialModuleId:'FSA-LM3',lessonId:'fsa-03-analyzing-balance-sheets',contentPath:'public/content/fsa/03-analyzing-balance-sheets.md',hasFormulas:true,formulaCount:9,officialQuestionCount:40,supplementaryQuestionCount:10,tools:['CommonSizeBalanceSheetBuilder','FinancialInstrumentAndIntangibleDisclosureExplorer']},
 {officialModuleId:'FSA-LM4',lessonId:'fsa-04-analyzing-statements-of-cash-flows-i',contentPath:'public/content/fsa/04-analyzing-statements-of-cash-flows-i.md',hasFormulas:true,formulaCount:8,officialQuestionCount:45,supplementaryQuestionCount:10,tools:['FinancialStatementLinkageExplorer','DirectIndirectCashFlowTrainer']},
 {officialModuleId:'FSA-LM5',lessonId:'fsa-05-analyzing-statements-of-cash-flows-ii',contentPath:'public/content/fsa/05-analyzing-statements-of-cash-flows-ii.md',hasFormulas:true,formulaCount:16,officialQuestionCount:35,supplementaryQuestionCount:10,tools:['FreeCashFlowCoverageCalculator']},
];
const allModules=await read('.local-research/fsa-verification/official-module-map.json');
const unproducedLessonIds=allModules.modules.map(m=>m.futureStudyLessonId).filter(id=>!producedModules.some(p=>p.lessonId===id));

// --- FSA-LM1 lesson exists ---
for(const m of producedModules){try{await access(m.contentPath)}catch{fail(`${m.officialModuleId}: public lesson file missing at ${m.contentPath}`)}}
const manifest=await readFile('src/content/lessonManifest.ts','utf8');
for(const m of producedModules)if(!manifest.includes(`"id":"${m.lessonId}"`))fail(`${m.officialModuleId}: not registered in lessonManifest.ts`);

// --- official mapping valid: LOS in lessonManifest match official-module-map.json exactly ---
for(const m of producedModules){
 const officialModule=allModules.modules.find(x=>x.officialModuleId===m.officialModuleId);
 for(const outcome of officialModule.officialLearningOutcomes)if(!manifest.includes(outcome.replace(/'/g,"\\'")) && !manifest.includes(outcome))fail(`${m.officialModuleId}: lessonManifest.ts is missing official LOS text: "${outcome.slice(0,40)}..."`);
}

// --- load datasets for produced modules ---
const questions=[],cards=[],formulas=[];
for(const m of producedModules){
 try{questions.push(...await read(`src/data/questions/${m.lessonId}.json`))}catch{fail(`${m.officialModuleId}: missing questions dataset`)}
 try{cards.push(...await read(`src/data/flashcards/${m.lessonId}.json`))}catch{fail(`${m.officialModuleId}: missing flashcards dataset`)}
 if(m.hasFormulas){try{formulas.push(...await read(`src/data/formulas/${m.lessonId}.json`))}catch{fail(`${m.officialModuleId}: missing formulas dataset`)}}
 else{try{await access(`src/data/formulas/${m.lessonId}.json`);fail(`${m.officialModuleId}: a formulas file exists but this module is documented as zero-formula`)}catch{/* expected: no formula file for a zero-formula module */}}
}

// --- all LOS represented in the question bank for each produced module ---
for(const m of producedModules){
 const officialModule=allModules.modules.find(x=>x.officialModuleId===m.officialModuleId);
 const moduleQuestions=questions.filter(q=>q.lessonId===m.lessonId);
 for(const outcome of officialModule.officialLearningOutcomes)if(!moduleQuestions.some(q=>q.officialLearningOutcome===outcome))fail(`${m.officialModuleId}: no question references LOS "${outcome.slice(0,40)}..."`);
}

// --- exact official/supplementary counts (per module) ---
for(const m of producedModules){
 const mq=questions.filter(q=>q.lessonId===m.lessonId),mc=cards.filter(c=>c.lessonId===m.lessonId);
 const officialQ=mq.filter(q=>!q.supplementary),suppQ=mq.filter(q=>q.supplementary);
 const officialFc=mc.filter(c=>!c.supplementary),suppFc=mc.filter(c=>c.supplementary);
 if(officialQ.length!==m.officialQuestionCount||suppQ.length!==m.supplementaryQuestionCount)fail(`${m.officialModuleId}: question official/supplementary totals are not ${m.officialQuestionCount}/${m.supplementaryQuestionCount} (found ${officialQ.length}/${suppQ.length})`);
 if(officialFc.length!==m.officialQuestionCount||suppFc.length!==m.supplementaryQuestionCount)fail(`${m.officialModuleId}: flashcard official/supplementary totals are not ${m.officialQuestionCount}/${m.supplementaryQuestionCount} (found ${officialFc.length}/${suppFc.length})`);
 const mf=formulas.filter(f=>f.relatedLessonId===m.lessonId);
 if(!m.hasFormulas&&mf.length!==0)fail(`${m.officialModuleId} is documented as zero-formula; formulas array should be empty`);
 if(m.hasFormulas&&mf.length!==m.formulaCount)fail(`${m.officialModuleId}: expected exactly ${m.formulaCount} formulas (found ${mf.length})`);
 const answerCounts=[0,1,2].map(index=>mq.filter(q=>q.correctChoiceIndex===index).length);
 if(Math.max(...answerCounts)-Math.min(...answerCounts)>3)fail(`${m.officialModuleId}: answer-position distribution is materially imbalanced (${answerCounts.join('/')})`);
}

// --- no duplicate IDs / stems / fronts; exactly 3 choices; valid indexes; explanations present ---
const unique=(items,key,label)=>{const seen=new Map();for(const x of items){const value=key(x);if(seen.has(value))fail(`${label} duplicate: ${x.id} and ${seen.get(value)}`);else seen.set(value,x.id)}};
const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
unique(questions,x=>x.id,'FSA question ID');unique(questions,x=>normalize(x.stem),'FSA question stem');
unique(cards,x=>x.id,'FSA flashcard ID');unique(cards,x=>normalize(x.front),'FSA flashcard front');
for(const q of questions){
 if(q.choices?.length!==3||q.correctChoiceIndex<0||q.correctChoiceIndex>2)fail(`${q.id}: invalid choices/index`);
 if(!q.incorrectChoiceExplanations||q.incorrectChoiceExplanations.length!==q.choices.length)fail(`${q.id}: explanation count does not match choice count`);
 if(!q.explanation?.trim())fail(`${q.id}: missing correct-answer explanation`);
 const owningModule=producedModules.find(m=>m.lessonId===q.lessonId);
 if(owningModule&&!owningModule.hasFormulas&&(q.relatedFormulaIds??[]).length!==0)fail(`${q.id}: ${owningModule.officialModuleId} has zero formulas, so relatedFormulaIds must be empty`);
}

// --- project-wide flashcard-front duplicate check (defense-in-depth, mirrors validate-content.mjs) ---
{
 const fs=await import('node:fs/promises');
 const files=await fs.readdir('src/data/flashcards');
 const seen=new Map();
 for(const file of files){
  const list=await read(`src/data/flashcards/${file}`);
  for(const c of list){const key=normalize(c.front);if(seen.has(key)&&seen.get(key)!==file)fail(`Project-wide duplicate flashcard front: ${file}:${c.id} vs ${seen.get(key)}`);seen.set(key,file)}
 }
}

// --- chapter exam uses official questions only ---
const chapterExam=await readFile('src/components/practice/ChapterExam.tsx','utf8');
for(const token of ['question.supplementary','slice(0,30)'])if(!chapterExam.includes(token))fail(`Chapter exam missing expected configuration: ${token}`);
const lessonResources=await readFile('src/components/lessons/LessonResources.tsx','utf8');
for(const m of producedModules)if(!lessonResources.includes(`'${m.lessonId}'`))fail(`${m.officialModuleId}: chapter exam entry point missing from LessonResources.tsx`);

// --- interactive tools registered ---
const toolRegistry=await readFile('src/components/lessons/LessonInteractiveTools.tsx','utf8');
for(const m of producedModules){
 for(const tool of m.tools)if(!toolRegistry.includes(tool))fail(`${m.officialModuleId}: interactive tool ${tool} is not registered in LessonInteractiveTools.tsx`);
 if(!toolRegistry.includes(`lessonId==='${m.lessonId}'`))fail(`${m.officialModuleId}: interactive tools are not conditionally rendered for ${m.lessonId}`);
}

// --- exhibit references: lesson markdown must contain at least the documented original exhibit count ---
for(const m of producedModules){
 const markdown=await readFile(m.contentPath,'utf8');
 const originalMarkers=(markdown.match(/^### Original (diagram|table|checklist)/gim)??[]).length;
 if(originalMarkers<6)fail(`${m.officialModuleId}: fewer than 6 original exhibit markers found in the lesson (found ${originalMarkers})`);
}

// --- remaining FSA modules stay unpublished ---
for(const lessonId of unproducedLessonIds)if(manifest.includes(`"id":"${lessonId}"`))fail(`${lessonId}: must remain unpublished; only ${producedModules.map(m=>m.officialModuleId).join(', ')} are authorized for production in this release`);

// --- Quantitative and Economics remain frozen (smoke check) ---
const quantModules=['quantitative.json','quantitative-benchmarking.json','quantitative-tvm.json','quantitative-statistics.json','quantitative-probability.json','quantitative-distributions.json','quantitative-sampling.json','quantitative-hypothesis.json','quantitative-regression.json','quantitative-simulation.json','quantitative-data-ai.json'];
const quantQuestions=(await Promise.all(quantModules.map(f=>read(`src/data/questions/${f}`)))).flat();
if(quantQuestions.filter(q=>!q.supplementary).length!==545||quantQuestions.filter(q=>q.supplementary).length!==10)fail('Quantitative question totals drifted from the frozen 545/10 baseline');
const econModules=['economics-firm-market-01.json','economics-02-understanding-business-cycles.json','economics-03-fiscal-policy.json','economics-04-monetary-policy.json','economics-05-introduction-to-geopolitics.json','economics-06-international-trade.json','economics-07-capital-flows-and-the-fx-market.json','economics-08-exchange-rate-calculations.json'];
const econQuestions=(await Promise.all(econModules.map(f=>read(`src/data/questions/${f}`)))).flat();
if(econQuestions.filter(q=>!q.supplementary).length!==325||econQuestions.filter(q=>q.supplementary).length!==85)fail('Economics question totals drifted from the frozen 325/85 baseline');
const quantStatus=await read('.local-research/quantitative-verification/verification-status.json');
if(quantStatus.status!=='verified_and_content_frozen')fail('Quantitative must remain verified_and_content_frozen');
const econStatus=await read('.local-research/economics-verification/verification-status.json');
if(econStatus.status!=='verified_and_content_frozen')fail('Economics must remain verified_and_content_frozen');

// --- no private source artifact is tracked by Git ---
const tracked=execFileSync('git',['ls-files','.local-research'],{encoding:'utf8'}).trim();
if(tracked)fail('Private .local-research artifacts are tracked by Git');

if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log(`FSA content valid: ${producedModules.map(m=>m.officialModuleId).join(', ')} verified (${questions.length} questions [${questions.filter(q=>!q.supplementary).length} official/${questions.filter(q=>q.supplementary).length} supplementary], ${cards.length} flashcards, ${formulas.length} formulas), remaining FSA modules unpublished, Quantitative and Economics remain frozen.`);

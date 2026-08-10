import {execFileSync} from 'node:child_process';import {access,readFile} from 'node:fs/promises';
const failures=[],root='.local-research/economics-verification',fail=x=>failures.push(x),read=async p=>JSON.parse(await readFile(p,'utf8'));
const map=await read(`${root}/official-module-map.json`),expected=8;if(map.officialModuleCount!==expected||map.modules?.length!==expected)fail('Official Economics module count must be 8');
const unique=(xs,label)=>{if(new Set(xs).size!==xs.length)fail(`${label} contains duplicates`)};unique(map.modules.map(x=>x.officialModuleId),'Module IDs');unique(map.modules.map(x=>x.officialModuleNumber),'Module numbers');
try{await access(map.sourceFile)}catch{fail('Official 2027 Economics source does not exist')}
const manifest=await readFile('docs/ECONOMICS_2027_TARGET_MANIFEST.md','utf8');
const producedModules=new Set(['ECO-LM1','ECO-LM2','ECO-LM3','ECO-LM4','ECO-LM5']);
for(const m of map.modules){for(const key of ['officialModuleId','officialModuleNumber','officialModuleTitle','officialPdfStartPage','officialPdfEndPage','printedStartPage','printedEndPage','futureStudyLessonId','questionTarget','flashcardTarget','formulaTarget','graphTarget'])if(m[key]===undefined||m[key]===null||m[key]==='')fail(`${m.officialModuleId}: missing ${key}`);if(!m.officialLearningOutcomes?.length)fail(`${m.officialModuleId}: missing outcomes`);if(!manifest.includes(m.futureStudyLessonId))fail(`${m.officialModuleId}: missing future lesson plan`);for(const name of ['source-map.json','coverage-matrix.json','lesson-audit.json','example-audit.json','question-audit.json','flashcard-audit.json','formula-audit.json','tool-audit.json','verification-report.md'])try{await access(`${root}/${m.officialModuleId}/${name}`)}catch{fail(`${m.officialModuleId}: missing scaffold ${name}`)}
 const lesson=await read(`${root}/${m.officialModuleId}/lesson-audit.json`);
 if(producedModules.has(m.officialModuleId)){if(lesson.auditStatus!=='complete'||lesson.contentStatus!=='content_verified')fail(`${m.officialModuleId}: expected verified production content for an authorized production release`)}
 else if(lesson.auditStatus!=='not_started'||lesson.contentStatus!=='content_pending')fail(`${m.officialModuleId}: unsupported content marked verified`);
}
for(const file of ['2026-2027-change-map.json','provider-coverage-map.json','mock-coverage-map.json','formula-target-map.json','graph-target-map.json','verification-status.json','master-source-inventory.json'])try{await access(`${root}/${file}`)}catch{fail(`Missing private map ${file}`)}
for(const file of ['docs/ECONOMICS_2027_TARGET_MANIFEST.md','docs/ECONOMICS_INTERACTIVE_PLAN.md','docs/ECONOMICS_ASSESSMENT_PLAN.md','docs/ECONOMICS_RELEASE_PLAN.md','CURRICULUM_MASTER.md'])try{await access(file)}catch{fail(`Missing public planning file ${file}`)}
const formulas=await read(`${root}/formula-target-map.json`),graphs=await read(`${root}/graph-target-map.json`);if(formulas.count!==map.modules.reduce((n,m)=>n+m.formulaTarget,0))fail('Formula targets do not match module plans');if(graphs.count!==map.modules.reduce((n,m)=>n+m.graphTarget,0))fail('Graph targets do not match module plans');
const status=await read(`${root}/verification-status.json`);
const declaredVerified=new Set(status.fullyVerifiedModules??[]);
if(declaredVerified.size!==producedModules.size||[...producedModules].some(id=>!declaredVerified.has(id)))fail('Economics fullyVerifiedModules must exactly match the modules with verified production content for this release');
if(status.contentGenerated!==(producedModules.size>0))fail('Economics contentGenerated flag must reflect whether any module has verified production content');
for(const m of map.modules){const expectedModuleStatus=producedModules.has(m.officialModuleId)?'content_verified':'mapping_verified';if(status.moduleStatuses?.[m.officialModuleId]!==expectedModuleStatus)fail(`${m.officialModuleId}: verification-status module status must be '${expectedModuleStatus}'`)}
if(!['mapping_verified','production_in_progress'].includes(status.status))fail('Economics overall status must be mapping_verified or production_in_progress');
const tracked=execFileSync('git',['ls-files','.local-research'],{encoding:'utf8'}).trim();if(tracked)fail('Private source artifacts are tracked by Git');
if(failures.length){console.error(failures.join('\n'));process.exit(1)}console.log(`Economics mapping valid: ${expected} official modules, 8 planned lessons, ${formulas.count} formula targets, ${graphs.count} graph targets.`);

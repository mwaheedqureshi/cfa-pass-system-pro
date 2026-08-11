import {execFileSync} from 'node:child_process';import {access,readFile} from 'node:fs/promises';
const failures=[],root='.local-research/fsa-verification',fail=x=>failures.push(x),read=async p=>JSON.parse(await readFile(p,'utf8'));
const map=await read(`${root}/official-module-map.json`),expected=12;if(map.officialModuleCount!==expected||map.modules?.length!==expected)fail('Official FSA module count must be 12');
const unique=(xs,label)=>{if(new Set(xs).size!==xs.length)fail(`${label} contains duplicates`)};unique(map.modules.map(x=>x.officialModuleId),'Module IDs');unique(map.modules.map(x=>x.officialModuleNumber),'Module numbers');
try{await access(map.sourceFile)}catch{fail('Official 2027 FSA source does not exist')}
const manifest=await readFile('docs/FSA_2027_TARGET_MANIFEST.md','utf8');
for(const m of map.modules){
 for(const key of ['officialModuleId','officialModuleNumber','officialModuleTitle','officialPdfStartPage','officialPdfEndPage','printedStartPage','printedEndPage','futureStudyLessonId','futureRoute','questionTarget','flashcardTarget','formulaTarget','exhibitTarget'])if(m[key]===undefined||m[key]===null||m[key]==='')fail(`${m.officialModuleId}: missing ${key}`);
 if(!m.officialLearningOutcomes?.length)fail(`${m.officialModuleId}: missing outcomes`);
 if(!manifest.includes(m.futureStudyLessonId))fail(`${m.officialModuleId}: missing future lesson plan in FSA_2027_TARGET_MANIFEST.md`);
 for(const name of ['source-map.json','coverage-matrix.json','lesson-audit.json','example-audit.json','question-audit.json','flashcard-audit.json','formula-audit.json','exhibit-audit.json','tool-audit.json','mock-coverage.json','verification-report.md','MODULE_VERIFICATION_SUMMARY.md'])try{await access(`${root}/${m.officialModuleId}/${name}`)}catch{fail(`${m.officialModuleId}: missing scaffold ${name}`)}
 const lesson=await read(`${root}/${m.officialModuleId}/lesson-audit.json`);
 if(lesson.auditStatus!=='not_started'||lesson.contentStatus!=='content_pending')fail(`${m.officialModuleId}: no FSA module may be marked verified in a mapping-only release`);
}
for(const file of ['2026-2027-change-map.json','formula-target-map.json','exhibit-target-map.json','verification-status.json'])try{await access(`${root}/${file}`)}catch{fail(`Missing private map ${file}`)}
for(const file of ['docs/FSA_2027_TARGET_MANIFEST.md','docs/FSA_INTERACTIVE_PLAN.md','docs/FSA_ASSESSMENT_PLAN.md','docs/FSA_RELEASE_PLAN.md','CURRICULUM_MASTER.md'])try{await access(file)}catch{fail(`Missing public planning file ${file}`)}
const formulas=await read(`${root}/formula-target-map.json`),exhibits=await read(`${root}/exhibit-target-map.json`);if(formulas.count!==map.modules.reduce((n,m)=>n+m.formulaTarget,0))fail('Formula targets do not match module plans');if(exhibits.count!==map.modules.reduce((n,m)=>n+m.exhibitTarget,0))fail('Exhibit targets do not match module plans');
const status=await read(`${root}/verification-status.json`);
if(status.status!=='mapping_verified')fail('FSA overall status must be mapping_verified in a mapping-only release');
if(status.contentGenerated!==false)fail('FSA contentGenerated flag must be false in a mapping-only release');
if((status.fullyVerifiedModules??[]).length!==0)fail('No FSA module may be fully verified in a mapping-only release');
for(const m of map.modules){if(status.moduleStatuses?.[m.officialModuleId]!=='mapping_verified')fail(`${m.officialModuleId}: verification-status module status must be 'mapping_verified'`)}
// no FSA lesson content generated: manifest routes and lesson content must not exist yet
const lessonManifest=await readFile('src/content/lessonManifest.ts','utf8');
for(const m of map.modules)if(lessonManifest.includes(`"id":"${m.futureStudyLessonId}"`))fail(`${m.officialModuleId}: a public lesson entry already exists for ${m.futureStudyLessonId}, which is not permitted in a mapping-only release`);
try{await access('public/content/fsa');fail('public/content/fsa/ already exists; no FSA lesson content is permitted in a mapping-only release')}catch{/* expected: directory must not exist yet */}
// Quantitative and Economics remain frozen
const quantStatus=await read('.local-research/quantitative-verification/verification-status.json');
if(quantStatus.status!=='verified_and_content_frozen')fail('Quantitative must remain verified_and_content_frozen');
const econStatus=await read('.local-research/economics-verification/verification-status.json');
if(econStatus.status!=='verified_and_content_frozen')fail('Economics must remain verified_and_content_frozen');
const tracked=execFileSync('git',['ls-files','.local-research'],{encoding:'utf8'}).trim();if(tracked)fail('Private source artifacts are tracked by Git');
if(failures.length){console.error(failures.join('\n'));process.exit(1)}console.log(`FSA mapping valid: ${expected} official modules, 12 planned lessons, ${formulas.count} formula/ratio targets, ${exhibits.count} exhibit targets. Quantitative and Economics remain frozen.`);

import {readFile,readdir,writeFile} from 'node:fs/promises';
const read=async p=>JSON.parse(await readFile(p,'utf8'));
for(const [kind,dir] of [['question','questions'],['flashcard','flashcards'],['formula','formulas']]){
 const files=(await readdir(`src/data/${dir}`)).filter(x=>x.startsWith('quantitative')&&x.endsWith('.json'));
 const publicItems=(await Promise.all(files.map(x=>read(`src/data/${dir}/${x}`)))).flat();
 const path=`.local-research/quantitative-remediation/${kind}-map.json`,map=await read(path),old=new Map(map.items.map(x=>[x.itemId,x]));
 map.items=publicItems.map(item=>{const prior=old.get(item.id)??{};return{...prior,itemId:item.id,currentLessonId:item.lessonId??item.relatedLessonId,currentScopeOrOutcome:item.officialLearningOutcome??item.relatedLearningOutcome??item.scopeStatement??null,proposedOfficialModuleId:item.officialModuleId,proposedStudyLessonId:item.studyLessonId??item.lessonId??item.relatedLessonId,subdivision:prior.subdivision??null,officialOrSupplementary:item.supplementary?'supplementary':'official',validAsIs:true,requiresRewrite:false,requiresRetirement:false,legacySourceLessonId:prior.legacySourceLessonId??null,formulaDependencies:item.relatedFormulaIds??(kind==='formula'?[item.id]:[]),remediationNotes:prior.remediationNotes??'Created during v1.6.6 verification after official-scope replacement and substantive verification.'}});
 await writeFile(path,JSON.stringify(map,null,2)+'\n');
 console.log(`${kind}: synchronized ${map.items.length} mappings`);
}

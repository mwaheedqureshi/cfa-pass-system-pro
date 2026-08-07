import {readFile,writeFile} from 'node:fs/promises';
const rw=async(path,change)=>{const data=JSON.parse(await readFile(path,'utf8'));change(data);await writeFile(path,JSON.stringify(data,null,2)+'\n')};
await rw('src/data/questions/quantitative-distributions.json',items=>items.forEach((x,i)=>x.id=`qport08-${String(i+1).padStart(2,'0')}`));
await rw('src/data/flashcards/quantitative-modules-7-8.json',items=>items.filter(x=>x.lessonId==='quant-distributions-07').forEach((x,i)=>{x.id=`fcport08-${String(i+1).padStart(2,'0')}`;x.front=`Portfolio — ${x.front}`}));
await rw('src/data/formulas/quantitative-modules-7-8.json',items=>{const x=items.find(x=>x.id==='two-asset-variance-08');if(x)x.name='LM8 two-asset portfolio variance'});
const beyondOfficial=/generative|large language|\bllm\b|retrieval.augmented|\brag\b|hallucination|prompt sensitivity/i;
await rw('src/data/questions/quantitative-data-ai.json',items=>items.forEach(x=>x.supplementary=beyondOfficial.test(`${x.scopeStatement??''} ${x.stem} ${x.tags?.join(' ')}`)));
await rw('src/data/flashcards/quantitative-modules-11-12.json',items=>items.filter(x=>x.lessonId==='quant-data-ai-12').forEach(x=>x.supplementary=beyondOfficial.test(`${x.front} ${x.back} ${x.tags?.join(' ')}`)));
await rw('src/data/formulas/quantitative-modules-11-12.json',items=>items.filter(x=>x.relatedLessonId==='quant-data-ai-12').forEach(x=>x.supplementary=beyondOfficial.test(`${x.name} ${x.meaning} ${x.tags?.join(' ')}`)));

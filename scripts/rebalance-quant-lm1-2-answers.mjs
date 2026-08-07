import { readFile, writeFile } from 'node:fs/promises';
const file='src/data/questions/quantitative.json',questions=JSON.parse(await readFile(file,'utf8'));
function move(question,target){const shift=(question.correctChoiceIndex-target+3)%3;question.choices=[...question.choices.slice(shift),...question.choices.slice(0,shift)];if(question.incorrectChoiceExplanations)question.incorrectChoiceExplanations=[...question.incorrectChoiceExplanations.slice(shift),...question.incorrectChoiceExplanations.slice(0,shift)];question.correctChoiceIndex=target;}
for(const id of ['q04','q05'])move(questions.find(q=>q.id===id),2);
for(const id of ['q08','q10','q12','q16'])move(questions.find(q=>q.id===id),2);
move(questions.find(q=>q.id==='q21'),0);
for(const id of ['q22','q25','q30','q33','q37','q44'])move(questions.find(q=>q.id===id),2);
for(const id of ['q23','q24','q26'])move(questions.find(q=>q.id===id),0);
move(questions.find(q=>q.id==='q28'),2);
await writeFile(file,JSON.stringify(questions,null,2)+'\n');
console.log('Balanced LM1 and LM2 answer positions.');

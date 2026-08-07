import {useEffect,useState} from 'react';
const questionModules=import.meta.glob('../data/questions/*.json');
const cardModules=import.meta.glob('../data/flashcards/*.json');
const formulaModules=import.meta.glob('../data/formulas/*.json');
type Classified={officialModuleId?:string;supplementary?:boolean};
async function load(modules:Record<string,()=>Promise<unknown>>){const loaded=await Promise.all(Object.values(modules).map(fn=>fn()));return loaded.flatMap(module=>(module as {default:Classified[]}).default??[])}
export function useContentStats(){const[state,setState]=useState({questions:0,flashcards:0,formulas:0,officialQuantQuestions:0,officialQuantFlashcards:0,officialQuantFormulas:0,loading:true});useEffect(()=>{let active=true;Promise.all([load(questionModules),load(cardModules),load(formulaModules)]).then(([questions,flashcards,formulas])=>{if(!active)return;const official=(items:Classified[])=>items.filter(item=>item.officialModuleId?.startsWith('QM-LM')&&item.supplementary!==true).length;setState({questions:questions.length,flashcards:flashcards.length,formulas:formulas.length,officialQuantQuestions:official(questions),officialQuantFlashcards:official(flashcards),officialQuantFormulas:official(formulas),loading:false})});return()=>{active=false}},[]);return state}

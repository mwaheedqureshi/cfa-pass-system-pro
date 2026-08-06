import type {Lesson} from '../data/types'; export async function loadLessonMarkdown(lesson:Lesson){const response=await fetch(`${import.meta.env.BASE_URL}${lesson.filePath}`);if(!response.ok)throw new Error(`Missing lesson: ${lesson.filePath}`);return response.text();}
export function headingsFromMarkdown(md:string){return md.split('\n').flatMap(line=>{const m=/^(#{2,3})\s+(.+)$/.exec(line);return m?[{level:m[1].length,text:m[2],id:slug(m[2])}]:[]});}
export const slug=(text:string)=>text.toLowerCase().replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-');

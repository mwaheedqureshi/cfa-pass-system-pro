import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const privateMocksDevPlugin={name:'private-mocks-dev-only',configureServer(server:{middlewares:{use:(route:string,handler:(request:unknown,response:{statusCode:number;setHeader:(name:string,value:string)=>void;end:(body:string)=>void})=>void)=>void}}){server.middlewares.use('/__private_mocks/library',async(_request,response)=>{try{const data=await readFile(path.resolve('.local-research/mock-exams/data/mock-library.json'),'utf8');response.setHeader('Content-Type','application/json; charset=utf-8');response.setHeader('Cache-Control','no-store');response.end(data)}catch{response.statusCode=404;response.end(JSON.stringify({error:'Private mock library not installed.'}))}})}};
export default defineConfig({base: process.env.VITE_BASE_PATH ?? '/cfa-pass-system-pro/',plugins:[react(),privateMocksDevPlugin],build:{chunkSizeWarningLimit:700},test:{environment:'jsdom',setupFiles:['./src/test/setup.ts'],globals:true}});
export default defineConfig({
  base: '/cfa-pass-system-pro/',
  // ...
})

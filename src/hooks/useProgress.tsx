import {createContext,useContext,useEffect,useMemo,useState} from 'react'; import type {PropsWithChildren} from 'react'; import type {ProgressState} from '../data/types'; import {loadProgress,saveProgress} from '../services/progressService';
type Ctx={progress:ProgressState;update:(fn:(p:ProgressState)=>ProgressState)=>void}; const ProgressContext=createContext<Ctx|null>(null);
export function ProgressProvider({children}:PropsWithChildren){const[progress,setProgress]=useState(loadProgress);useEffect(()=>saveProgress(progress),[progress]);useEffect(()=>{document.documentElement.classList.toggle('dark',progress.theme==='dark')},[progress.theme]);const value=useMemo(()=>({progress,update:(fn:(p:ProgressState)=>ProgressState)=>setProgress(fn)}),[progress]);return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>}
// The hook intentionally shares its provider's module so they use one private context.
// eslint-disable-next-line react-refresh/only-export-components
export function useProgress(){const c=useContext(ProgressContext);if(!c)throw new Error('useProgress requires ProgressProvider');return c;}

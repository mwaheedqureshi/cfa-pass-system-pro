


import {Link} from 'react-router-dom';import {Lock} from 'lucide-react';import {topics} from '../content/curriculum';export function TopicsPage(){return <><h1>Study topics</h1><p className="muted mt-2">The engine supports the full Level I topic structure. Twelve Quantitative Methods lessons are currently available.</p><div className="mt-6 grid gap-4 md:grid-cols-2">{topics.map(t=><Link to={`/topics/${t.id}`} className="card card-hover" key={t.id}><div className="flex justify-between"><h2>{t.title}</h2>{t.status==='pending'&&<Lock size={18}/>}</div><p className="muted mt-2">{t.description}</p><span className="badge mt-4">{t.status==='available'?`${t.lessonCount} lessons available`:'Content pending'}</span></Link>)}</div></>}

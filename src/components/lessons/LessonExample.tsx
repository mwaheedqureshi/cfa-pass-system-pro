export function LessonExample({children,type='Worked example'}:{children:string;type?:string}){return <figure className="example"><figcaption>{type}</figcaption><pre>{children}</pre></figure>}

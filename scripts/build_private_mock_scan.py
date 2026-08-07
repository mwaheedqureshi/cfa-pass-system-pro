"""Build the private library-wide candidate inventory from cached first-page OCR."""
from __future__ import annotations
import hashlib,json,re
from datetime import datetime,timezone
from pathlib import Path

ROOT=Path(r'C:\Users\Z4 G4\Documents\CFA')
OUT=Path('.local-research/mock-exams/library-rescan')
TEXT=OUT/'first-pages'
files=sorted(path for path in ROOT.rglob('*') if path.is_file())
directories=sorted(path for path in ROOT.rglob('*') if path.is_dir())
records=[]
for path in files:
    first='';title=author=subject=None;pages=None
    if path.suffix.lower()=='.pdf':
        key=hashlib.sha256(str(path).encode()).hexdigest().upper()[:16]
        text_path=TEXT/f'{key}.txt'
        first=text_path.read_text(encoding='utf-8',errors='replace') if text_path.exists() else '[first-page OCR unavailable]'
        raw=path.open('rb').read(1_048_576).decode('latin1',errors='ignore')
        def meta(name):
            match=re.search(rf'/{name}\s*\(([^)]{{1,500}})\)',raw,re.I)
            return match.group(1) if match else None
        title,author,subject=meta('Title'),meta('Author'),meta('Subject')
        pages=len(re.findall(rb'/Type\s*/Page\b',path.open('rb').read()))
    search='\n'.join(filter(None,[str(path),title,author,subject,first]))
    signals=[]
    if re.search(r'2026',search,re.I):signals.append('2026')
    if re.search(r'mock',search,re.I):signals.append('mock')
    if re.search(r'practice|question.?bank|topicwise questions',search,re.I):signals.append('practice')
    if re.search(r'answer|solution',search,re.I):signals.append('answer-or-solution')
    if re.search(r'level\s*(?:i|1)',search,re.I):signals.append('level-i')
    records.append({'path':str(path),'folder':str(path.parent),'filename':path.name,'extension':path.suffix.lower(),'bytes':path.stat().st_size,'pages':pages,'pdfTitle':title,'pdfAuthor':author,'pdfSubject':subject,'firstPageText':first,'candidateSignals':signals,'candidate':'2026' in signals and ('mock' in signals or 'practice' in signals)})
result={'scannedAt':datetime.now(timezone.utc).isoformat(),'root':str(ROOT),'directoryCount':len(directories),'fileCount':len(files),'pdfCount':sum(x['extension']=='.pdf' for x in records),'directories':[str(x) for x in directories],'files':records,'candidates':[x for x in records if x['candidate']]}
(OUT/'complete-scan.json').write_text(json.dumps(result,indent=2),encoding='utf-8')
print(f"Scanned {len(directories)} directories, {len(files)} files, {result['pdfCount']} PDFs. Candidates: {len(result['candidates'])}.")

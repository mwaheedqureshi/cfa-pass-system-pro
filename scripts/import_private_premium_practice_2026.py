"""Import verified 2026 CFA Institute Premium Practice Packs into the private mock library."""
from __future__ import annotations
import json,re
from datetime import datetime,timezone
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1];OCR=ROOT/'.local-research/mock-exams/library-rescan/premium-pages';AUDIT=ROOT/'.local-research/mock-exams';LIB=AUDIT/'data/mock-library.json';SOURCE=Path(r'C:\Users\Z4 G4\Documents\CFA\CFA Premium pack\CFA Premium pack (2026)')
PACKS=[
 (1,'AI-CI-premium-pack','AI&CI premium pack.pdf',['Alternative Investment','Corporate Issuers']),
 (2,'Derivatives-Economics-premium-pack-1','Derivatives&Economics premium pack-1.pdf',['Derivatives','Economics']),
 (3,'Equity-Ethics-premium-pack','Equity&Ethics premium pack.pdf',['Equity Investments','Ethical and Professional Standards']),
 (4,'FSA-and-Fixed-Income','FSA and Fixed Income.pdf',['Fixed Income','FSA']),
 (5,'PM-Quants-premium-pack','PM&Quants premium pack.pdf',['Portfolio Management','Quantitative Methods']),
]
QUESTION_RE=re.compile(r'(?im)^\s*[‘\'|]?[QO]uestion\s+(\d{1,3})[^A-Za-z0-9\n]*$');ANSWER_RE=re.compile(r'(?im)^\s*[‘\'|]?Answers?\s+(\d{1,3})[^A-Za-z0-9\n]*$');CHOICE_RE=re.compile(r'(?im)^\s*[‘\'|]?(A{1,2}|B|8|C|[€¢©])\s*[.,)]\s*')
TOPICS={'Alternative Investment':'Alternative Investments','Corporate Issuers':'Corporate Issuers','Derivatives':'Derivatives','Economics':'Economics','Equity Investments':'Equity Investments','Ethical and Professional Standards':'Ethical and Professional Standards','Fixed Income':'Fixed Income','FSA':'Financial Statement Analysis','Portfolio Management':'Portfolio Management','Quantitative Methods':'Quantitative Methods'}
def clean(text):
 for a,b in {'|':'I','“':'"','”':'"','’':"'",'‘':"'",'\u00ad':''}.items():text=text.replace(a,b)
 return re.sub(r'[ \t]+',' ',text).strip()
def blocks(text,pattern):
 matches=list(pattern.finditer(text));return {int(m.group(1)):text[m.end():matches[i+1].start() if i+1<len(matches) else len(text)] for i,m in enumerate(matches)}
def parse_question(block):
 choices=list(CHOICE_RE.finditer(block))
 if len(choices)!=3:return None
 stem=clean(block[:choices[0].start()]);values=[clean(block[m.end():choices[i+1].start() if i+1<3 else len(block)]) for i,m in enumerate(choices)]
 return (stem,values) if len(stem)>=15 and all(values) else None
def answer(block):
 match=CHOICE_RE.search(block)
 if not match:return None
 token=match.group(1).upper();return 0 if token.startswith('A') else 1 if token in {'B','8'} else 2
def pages(slug):return sorted(OCR.glob(f'{slug}-page-*.txt'),key=lambda p:int(re.search(r'page-(\d+)',p.name).group(1)))
def sections(slug,topics):
 result={};current=None
 for path in pages(slug):
  text=path.read_text(encoding='utf8',errors='replace')
  if re.search(r'(?i)INDEX|Sr\.?\s*No',text):continue
  for topic in topics:
   if re.search(rf'(?i){re.escape(topic)}\s*-?\s*Questions',text):current=(topic,'questions');break
   if re.search(rf'(?i){re.escape(topic)}\s*-?\s*Answers',text):current=(topic,'answers');break
  if current:result.setdefault(current,[]).append(text)
 return {key:'\n'.join(value) for key,value in result.items()}
def main():
 library=json.loads(LIB.read_text(encoding='utf8'));library['mocks']=[m for m in library['mocks'] if not m['id'].startswith('cfa-l1-2026-premium-practice-pack-')];imports=[]
 for pack_no,slug,filename,topics in PACKS:
  sec=sections(slug,topics);questions=[];manual=[];detected=answers_found=explanations=0
  for session,topic in enumerate(topics,1):
   qb=blocks(sec.get((topic,'questions'),''),QUESTION_RE);ab=blocks(sec.get((topic,'answers'),''),ANSWER_RE);detected+=len(qb)
   for number,body in sorted(qb.items()):
    parsed=parse_question(body);correct=answer(ab.get(number,''))
    if not parsed or correct is None:
     manual.append({'topic':topic,'sourceQuestionNumber':number,'reason':'Question, choices, or answer could not be matched reliably.'});continue
    stem,choices=parsed;answer_body=clean(ab[number]);explanation=re.sub(r'^[ABC8€¢©]+\s*[.,)]\s*','',answer_body,flags=re.I).strip();answers_found+=1;explanations+=int('Correct because' in explanation or 'Feedback' in explanation)
    mock_id=f'cfa-l1-2026-premium-practice-pack-{pack_no}';qid=f'{mock_id}-s{session}-q{number:03d}'
    questions.append({'id':qid,'mockId':mock_id,'sourceQuestionNumber':number,'session':session,'topic':TOPICS[topic],'stem':stem,'choices':choices,'correctChoiceIndex':correct,'explanation':explanation or f'The verified source answer key identifies choice {chr(65+correct)}.','sourceExplanation':bool(explanation),'extractionConfidence':'high','needsManualReview':False,'mappingConfidence':'medium','relatedFormulaIds':[]})
  mock_id=f'cfa-l1-2026-premium-practice-pack-{pack_no}';mock={'id':mock_id,'title':f'CFA Level I 2026 Premium Practice Pack {pack_no}','provider':'CFA Institute','year':2026,'sourceFile':str(SOURCE/filename),'sourceFolder':str(SOURCE),'session':'Two topic sections','questionCount':len(questions),'timeLimitMinutes':270,'timeLimitProvenance':'Existing mock-engine fallback; the source practice pack does not state a time limit.','questions':questions};imports.append(mock)
  audit={'mockId':mock_id,'sourcePDF':str(SOURCE/filename),'topics':topics,'questionsDetected':detected,'questionsExtracted':len(questions),'answersMatched':answers_found,'explanationsMatched':explanations,'questionsRequiringManualReview':len(manual),'manualReviewItems':manual,'ocrPages':len(pages(slug)),'renderedPages':len(pages(slug))};(AUDIT/f'cfa-2026-premium-practice-pack-{pack_no}.json').write_text(json.dumps(audit,indent=2),encoding='utf8')
 library['mocks'].extend(imports);library['mocks'].sort(key=lambda m:(-m['year'],0 if '-mock-' in m['id'] else 1,m['title']));library['generatedAt']=datetime.now(timezone.utc).isoformat();LIB.write_text(json.dumps(library,ensure_ascii=False),encoding='utf8');print(f"Imported {len(imports)} premium practice packs with {sum(m['questionCount'] for m in imports)} playable questions.")
if __name__=='__main__':main()

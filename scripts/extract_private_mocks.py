"""Local-only CFA mock extractor. Outputs are gitignored; inventory never stores question text."""
from __future__ import annotations
import json,re,subprocess,tempfile,fitz
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime,timezone
from pathlib import Path

LIB=Path(r'C:\Users\Z4 G4\Documents\CFA\Mocks'); AUDIT=Path('.local-research/mock-exams');OUT=AUDIT/'data'; MANIFEST=Path(r'C:\Users\Z4 G4\Documents\CFA_PROCESSED\manifests\mock-library.json'); TESS=Path(r'C:\Program Files\Tesseract-OCR\tesseract.exe')
def classify(pdf):
 d=fitz.open(pdf);native=sum(len(p.get_text().strip())>=80 for p in d);images=sum(bool(p.get_images(full=True)) for p in d);pages=len(d);d.close();return 'native' if native==pages else 'scanned' if native==0 and images==pages else 'mixed',pages
def parse_questions(pdf):
 d=fitz.open(pdf);text='\n'.join(p.get_text() for p in d);d.close();parts=re.split(r'(?m)^Q(\d+)\.\s*',text);out=[]
 for i in range(1,len(parts),2):
  number=int(parts[i]);body=parts[i+1].strip();matches=list(re.finditer(r'(?m)^([A-D])\.\s+',body));
  if len(matches)<3:continue
  stem=body[:matches[0].start()].strip();choices=[]
  for j,m in enumerate(matches):choices.append(body[m.end():matches[j+1].start() if j+1<len(matches) else len(body)].strip())
  out.append((number,stem,choices))
 return out
def ocr_answers(pdf):
 def page(index):
  d=fitz.open(pdf);pix=d[index].get_pixmap(dpi=145,alpha=False);d.close()
  with tempfile.TemporaryDirectory(dir=AUDIT) as td:
   png=Path(td)/'p.png';pix.save(png);r=subprocess.run([TESS,str(png),'stdout','-l','eng'],capture_output=True,text=True,encoding='utf-8',errors='replace')
  text=r.stdout;num=re.search(r'Question\s+(\d+)\s+of\s+\d+',text,re.I);correct=re.search(r'(?m)^\s*([A-D])\.\s*Correct\b',text)
  if not correct:
   correct=re.search(r'(?m)^\s*([A-D])\s*\.\s*Correct\b',text)
  solution=text.split('Solution',1)[1].strip() if 'Solution' in text else ''
  return (int(num.group(1)),ord(correct.group(1))-65,solution) if num and correct else None
 d=fitz.open(pdf);count=len(d);d.close()
 with ThreadPoolExecutor(max_workers=5) as pool: rows=list(pool.map(page,range(count)))
 return {x[0]:(x[1],x[2]) for x in rows if x}
def topic(stem):
 s=stem.lower();rules=[('Ethical and Professional Standards',['standards','gips','cfa institute','charterholder']),('Quantitative Methods',['probability','variance','regression','hypothesis','standard deviation']),('Economics',['gdp','inflation','monetary','fiscal','currency']),('Financial Statement Analysis',['financial statement','inventory','depreciation','cash flow statement']),('Corporate Issuers',['capital budgeting','corporate governance','wacc']),('Equity Investments',['equity','stock valuation','dividend discount']),('Fixed Income',['bond','duration','yield curve']),('Derivatives',['option','forward contract','swap']),('Alternative Investments',['real estate','private equity','hedge fund']),('Portfolio Management',['portfolio','risk aversion','investment policy'])]
 for name,words in rules:
  if any(w in s for w in words):return name,'medium'
 return 'Unmapped','unmapped'
def main():
 OUT.mkdir(parents=True,exist_ok=True);AUDIT.mkdir(parents=True,exist_ok=True);inventory=[];mocks=[];warnings=[]
 roots=[LIB/'Mocks (2025)',LIB/'Mocks (2026)']
 for root in roots:
  for pdf in sorted(root.rglob('*.pdf')):
   cls,pages=classify(pdf);name=pdf.stem;inventory.append({'sourceFolder':str(root),'filename':pdf.name,'year':int(re.search(r'20\d{2}',str(root)).group()),'provider':'CFA Institute' if 'Mock' in name else None,'mockNumber':int(re.search(r'MOCK\s*(\d+)',name,re.I).group(1)) if re.search(r'MOCK\s*(\d+)',name,re.I) else None,'session':int(re.search(r'SS(\d)',name,re.I).group(1)) if re.search(r'SS(\d)',name,re.I) else None,'answerKeyPresent':'ANS' in name.upper() or root.name.endswith('2026)'),'explanationsPresent':'ANS' in name.upper() or root.name.endswith('2026)'),'classification':cls,'extractionQuality':'high' if cls=='native' else 'ocr-required','ocrRequirement':cls!='native','pages':pages,'likelyExamFile':True})
 for n in range(1,7):
  allq=[];sources=[];review=0;explanations=0;ocr_pages=0
  for session in (1,2):
   qpdf=roots[0]/f'MOCK {n} SS{session}.pdf';
   if not qpdf.exists():qpdf=roots[0]/f'Mock {n} SS{session}.pdf'
   apdf=roots[0]/f'MOCK {n} SS{session} ANS.pdf';answers=ocr_answers(apdf);ocr_pages+=classify(apdf)[1];sources.extend([str(qpdf),str(apdf)])
   for number,stem,choices in parse_questions(qpdf):
    answer=answers.get(number);needs=answer is None or len(choices)<2 or len(choices)>5 or any(not choice.strip() for choice in choices) or (answer is not None and answer[0]>=len(choices));review+=int(needs);explanation=answer[1] if answer else 'Source explanation not available.';explanations+=int(bool(answer and answer[1]));t,confidence=topic(stem);qid=f'cfa-2025-mock-{n}-s{session}-q{number:03d}'
    allq.append({'id':qid,'mockId':f'cfa-2025-mock-{n}','sourceQuestionNumber':number,'session':session,'topic':t,'mappingConfidence':confidence,'stem':stem,'choices':choices,'correctChoiceIndex':answer[0] if answer else None,'explanation':explanation,'sourceExplanation':bool(answer and answer[1]),'extractionConfidence':'high' if not needs else 'low','needsManualReview':needs,'relatedFormulaIds':[]})
  playable=[q for q in allq if not q['needsManualReview']];mocks.append({'id':f'cfa-2025-mock-{n}','title':f'CFA Level I 2025 Mock {n}','provider':'CFA Institute','year':2025,'sourceFile':' + '.join(sources),'sourceFolder':str(roots[0]),'session':'Two sessions','questionCount':len(playable),'timeLimitMinutes':270,'questions':playable})
  record={'mockId':f'cfa-2025-mock-{n}','sourcePDFs':sources,'questionsDetected':len(allq),'questionsExtracted':len(playable),'answersMatched':len(playable),'explanationsMatched':explanations,'questionsRequiringManualReview':review,'ocrPages':ocr_pages,'renderedPages':0,'extractionWarnings':[]};(AUDIT/f'cfa-2025-mock-{n}.json').write_text(json.dumps(record,indent=2),encoding='utf-8')
 # 2026 files remain inventoried but excluded until reliable OCR answer matching is complete.
 for n in range(1,7):
  pdf=roots[1]/f'Mock {n}.pdf';warnings.append({'sourceFile':str(pdf),'reason':'Scanned combined question/answer PDF requires manual layout verification before playability.'});(AUDIT/f'cfa-2026-mock-{n}.json').write_text(json.dumps({'mockId':f'cfa-2026-mock-{n}','sourcePDF':str(pdf),'questionsDetected':None,'questionsExtracted':0,'answersMatched':0,'explanationsMatched':0,'questionsRequiringManualReview':True,'ocrPages':0,'renderedPages':3 if n==1 else 0,'extractionWarnings':[warnings[-1]['reason']]},indent=2),encoding='utf-8')
 library={'version':1,'generatedAt':datetime.now(timezone.utc).isoformat(),'mocks':mocks,'warnings':warnings};(OUT/'mock-library.json').write_text(json.dumps(library,ensure_ascii=False),encoding='utf-8');MANIFEST.parent.mkdir(parents=True,exist_ok=True);MANIFEST.write_text(json.dumps({'generatedAt':library['generatedAt'],'selectedFolders':[str(x) for x in roots],'selectionDecision':'The year-specific Mocks (2025) and Mocks (2026) directories are the two dedicated collections; their parent is only a container.','pdfCount':len(inventory),'items':inventory},indent=2),encoding='utf-8');print(json.dumps({'mocks':len(mocks),'playableQuestions':sum(x['questionCount'] for x in mocks),'manualReview':sum(1 for x in warnings),'inventoryPdfs':len(inventory)},indent=2))
if __name__=='__main__':main()

import { readFile, writeFile, mkdir } from 'node:fs/promises';

const source = 'C:/Users/Z4 G4/Documents/CFA_PROCESSED/inventory/library-inventory.json';
const outputDir = '.local-research/quantitative-verification/QM-LM10';
const raw = JSON.parse(await readFile(source, 'utf8'));
const records = Array.isArray(raw) ? raw : raw.records ?? raw.files ?? [];

const infer = (record) => {
  const text = `${record.relative_path ?? ''} ${record.filename ?? ''} ${record.title ?? ''}`.toLowerCase();
  const year = [...text.matchAll(/20(?:2[4-9]|3\d)/g)].map(m => Number(m[0])).sort((a,b)=>b-a)[0] ?? null;
  const provider = text.includes('schweser') ? 'Kaplan Schweser' : text.includes('ift') ? 'IFT' : text.includes('fintree') ? 'FinTree' : text.includes('zell') ? 'Zell' : text.includes('curriculum') || text.includes('premium') ? 'CFA Institute' : 'Unclassified';
  const regression = /regression|quant|portfolio management|pm&quants/.test(text);
  const module = /simple linear regression|regression/.test(text) ? 'QM-LM10 candidate' : regression ? 'Quantitative Methods candidate' : null;
  const documentType = /solution|answer|explanation/.test(text) ? 'answer key / solutions' : /mock/.test(text) ? 'mock exam' : /practice|question/.test(text) ? 'practice questions' : /curriculum|volume|book|quants/.test(text) ? 'curriculum / study text' : 'other';
  const confidence = module ? 'high' : regression ? 'medium' : 'low';
  return {
    absolutePath: record.absolute_source_path ?? record.absolutePath ?? null,
    relativePath: record.relative_path ?? null,
    folder: (record.relative_path ?? '').replace(/[\\/][^\\/]+$/, ''),
    filename: record.filename ?? null,
    extension: record.extension ?? null,
    sizeBytes: record.file_size ?? null,
    modifiedTime: record.modified_time ?? null,
    pageCount: record.page_count ?? null,
    year,
    provider,
    topic: regression ? 'Quantitative Methods' : null,
    module,
    documentType,
    ocrClassification: record.ocr_classification ?? record.classification ?? record.ocr_status ?? null,
    confidence,
  };
};

const files = records.map(infer);
const candidates = files.filter(f => f.topic === 'Quantitative Methods');
const accepted = candidates.filter(f => f.provider === 'CFA Institute' && f.year === 2027);
await mkdir(outputDir, { recursive: true });
await writeFile(`${outputDir}/source-inventory.json`, JSON.stringify({
  generatedAt: new Date().toISOString(),
  sourceInventory: source,
  scope: 'Complete recursive local CFA library inventory filtered and enriched for QM-LM10 verification',
  totals: { files: files.length, pdfs: files.filter(f => f.extension?.toLowerCase() === '.pdf').length },
  files,
  lm10Candidates: candidates,
  acceptedPrimarySources: accepted,
  selectionRule: 'Official 2027 curriculum controls. Earlier official editions and provider texts are corroborative only.',
}, null, 2) + '\n');
console.log(`Inventoried ${files.length} files; ${candidates.length} quantitative candidates; ${accepted.length} official 2027 candidates.`);

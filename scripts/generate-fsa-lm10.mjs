import { writeFile } from 'node:fs/promises';

const lessonId = 'fsa-10-financial-reporting-quality';
const topicId = 'financial-statement-analysis';
const los = [
  'compare financial reporting quality with the quality of reported results (including quality of earnings, cash flow, and balance sheet items)',
  'describe a spectrum for assessing financial reporting quality',
  'explain the difference between conservative and aggressive accounting',
  'describe motivations that might cause management to issue financial reports that are not high quality and conditions that are conducive to issuing low-quality, or even fraudulent, financial reports',
  'describe mechanisms that discipline financial reporting quality and the potential limitations of those mechanisms',
  "describe presentation choices, including non-GAAP measures, that could be used to influence an analyst's opinion",
  'describe accounting methods (choices and estimates) that could be used to manage earnings, cash flow, and balance sheet items',
  'describe accounting warning signs and methods for detecting manipulation of information in financial reports',
];

// [LOS index, stem, correct, distractor 1, distractor 2, explanation, supplementary]
const q = [
  [0,'A company reports faithfully but earns an inadequate return from unsustainable activities. Its reporting quality and results quality are, respectively:','high and low.','low and high.','both high.','Faithful information can be high quality even when the underlying results are weak or unsustainable.',0],
  [0,'High-quality earnings are most closely associated with earnings that are:','sustainable and provide an adequate return.','always higher than cash flow from operations.','produced using conservative bias.','Results quality concerns sustainability and return, not accounting bias.',0],
  [0,'Which observation most directly concerns cash-flow quality?','Operating cash flow depends repeatedly on stretching supplier payments.','The audit opinion is unmodified.','The company uses an enacted tax rate.','Temporary working-capital tactics can make operating cash flow less sustainable.',0],
  [0,'A balance sheet may be low quality even when reported profit is high if:','asset values do not faithfully represent economic resources.','cash equals net income.','the company follows neutral estimates.','Quality of balance-sheet items concerns faithful measurement of assets and liabilities.',0],
  [0,'Why do high reported earnings not necessarily imply high-quality reporting?','Earnings may be unsustainable or produced using biased reporting choices.','High earnings automatically violate GAAP.','Reporting quality depends only on the auditor.','Magnitude alone says nothing about sustainability or faithful representation.',1],

  [1,'At the top of the reporting-quality spectrum are reports that are:','GAAP-compliant, decision-useful, and reflective of sustainable adequate returns.','outside GAAP but conservative.','compliant but intentionally biased.','The highest category combines useful reporting with high-quality results.',0],
  [1,'Compliant reporting that uses biased choices is best classified as:','lower quality than neutral compliant reporting.','fraudulent by definition.','the highest-quality reporting.','Bias reduces decision usefulness but does not automatically mean non-compliance or fraud.',0],
  [1,'The lowest point on the quality spectrum most likely involves:','fictitious transactions or events.','a transparent non-GAAP reconciliation.','a neutral estimate within a reasonable range.','Invented events are beyond biased application and represent the lowest reporting quality.',0],
  [1,'Moving down the quality spectrum generally means information becomes:','less decision-useful and less faithful to economic reality.','more conservative and therefore always better.','more sustainable despite weaker disclosure.','The spectrum evaluates usefulness and faithful representation.',0],
  [1,'Which statement about non-compliant reporting is most accurate?','It is low quality, but the severity can range from misapplication to fraud.','It is always caused by theft.','It is acceptable if earnings are sustainable.','Non-compliance is low quality without proving a specific motive or fraudulent act.',1],

  [2,'Extending an asset’s useful life, all else equal, is generally aggressive because it:','reduces current depreciation and raises current earnings and assets.','raises current depreciation and lowers earnings.','changes total cash flow immediately.','A longer life shifts depreciation expense into future periods.',0],
  [2,'A conservative estimate in the current period most likely:','depresses current reported performance and may increase later-period performance.','guarantees neutral reporting.','raises current assets and delays expenses.','Conservatism generally shifts reported performance away from the current period.',0],
  [2,'Aggressive accounting is distinguished from fraud because aggressive choices:','may remain within GAAP even though they bias current results upward.','always involve fictitious transactions.','must understate current earnings.','Bias within permitted discretion is not automatically fraudulent.',0],
  [2,'Recognizing an allowance earlier than a neutral best estimate most likely:','lowers current earnings and can increase future earnings when the allowance is released.','raises current earnings and assets.','increases cash receipts.','An extra current expense creates a possible later reversal benefit.',0],
  [2,'Calling conservative accounting “good” without qualification is inappropriate because conservatism:','is itself a bias and may reduce neutrality.','always violates GAAP.','always raises litigation costs.','Prudence may have benefits, but systematic understatement is not neutral reporting.',1],

  [3,'Compensation tied to share price most directly creates:','motivation to meet market expectations.','an opportunity caused by weak controls.','proof that manipulation occurred.','An incentive is motivation, not opportunity or evidence of misconduct.',0],
  [3,'Poor internal controls most directly create:','opportunity for low-quality reporting.','rationalization.','sustainable earnings.','Weak controls make manipulation easier to execute or conceal.',0],
  [3,'A manager seeks multiple approvals to feel a questionable treatment is acceptable. This most closely reflects:','rationalization.','market discipline.','cash-flow quality.','Seeking justification is a rationalization condition.',0],
  [3,'Risk of violating a debt covenant most likely creates pressure to:','inflate current earnings or assets.','understate every liability permanently.','improve reporting quality automatically.','Covenant pressure can motivate upward bias but does not prove it occurred.',0],
  [3,'Unexpectedly strong results may motivate managers to accelerate expenses in order to:','bank earnings for a future period.','maximize current-period earnings.','increase current operating cash flow.','Managers may smooth results by shifting some strong-period earnings forward.',0],
  [3,'Which combination most heightens concern without proving manipulation?','Strong incentives, weak oversight, and a plausible rationalization','High CFO and neutral estimates','Independent directors and transparent reconciliation','Multiple conducive conditions raise risk but remain signals rather than proof.',1],

  [4,'An external audit primarily provides:','reasonable assurance that statements are fairly presented.','a guarantee that no fraud exists.','an assessment of earnings sustainability.','Audits provide reasonable, not absolute, assurance and are not investment-quality opinions.',0],
  [4,'Why can an independent board still fail to discipline reporting quality?','Members may lack expertise, information, or willingness to challenge management.','Independence eliminates all agency conflicts.','Boards prepare every accounting estimate.','Formal independence does not ensure effective oversight.',0],
  [4,'A loan covenant can discipline reporting because lenders:','have contractual incentives to monitor reported amounts.','replace the external auditor.','eliminate management motivation.','Contractual exposure motivates scrutiny, although covenant pressure can also motivate bias.',0],
  [4,'Which limitation applies to market discipline by analysts?','Analysts may rely on the same incomplete or biased disclosures they assess.','Analysts possess subpoena power.','Analysts guarantee GAAP compliance.','External analysis is constrained by available information and incentives.',0],
  [4,'Regulation most directly improves quality by setting and enforcing requirements, but it cannot:','eliminate judgment or prevent every misstatement.','require issuer disclosures.','sanction non-compliance.','Rules and enforcement reduce risk but cannot remove estimates, incentives, or all misconduct.',1],

  [5,'A non-GAAP measure is most useful when management:','defines it clearly, reconciles it to GAAP, and applies it consistently.','gives it greater prominence and omits reconciliation.','excludes every unfavorable recurring cost.','Transparency and consistency let analysts assess the adjustment.',0],
  [5,'Repeatedly excluding the same restructuring cost from adjusted earnings most likely suggests:','the item may be part of recurring economics.','the exclusion is automatically fraudulent.','GAAP earnings should also exclude it.','Recurring “one-time” exclusions deserve normalization but are not proof of fraud.',0],
  [5,'Cherry-picking in non-GAAP reporting most likely occurs when management:','excludes unfavorable items but retains comparable favorable items.','reconciles every adjustment.','uses the same definition each period.','Asymmetric selection can create an unduly favorable presentation.',0],
  [5,'Greater prominence for an adjusted measure than its GAAP counterpart most directly raises concern about:','presentation bias.','cash theft.','inventory ownership.','Prominence can steer attention even when the underlying calculation is disclosed.',0],
  [5,'EBITDA should be interpreted as:','a management-used performance measure requiring reconciliation and context.','cash flow from operations.','fraudulent whenever disclosed.','EBITDA may be useful, but it is neither GAAP net income nor operating cash flow.',0],
  [5,'An analyst evaluating an exclusion should first ask whether the item is:','economically recurring and consistently treated across periods.','negative in the current period.','approved by management compensation plans.','Economic recurrence and consistency determine whether normalization is warranted.',1],

  [6,'Capitalizing a cost that peers expense most likely causes current-period:','earnings and assets to be higher, with expenses shifted to later periods.','earnings and assets to be lower.','total cash flow to increase.','Capitalization delays income-statement recognition but does not create cash.',0],
  [6,'Lowering the allowance for doubtful accounts, all else equal, most likely:','raises current earnings and receivables.','lowers current earnings and receivables.','raises cash collections.','A smaller allowance reduces bad-debt expense and increases net receivables.',0],
  [6,'Premature revenue recognition most likely produces which early warning pattern?','Receivables grow faster than sales and DSO rises.','CFO grows faster than net income indefinitely.','Inventory and payables both vanish.','Uncollected recognized revenue can cause receivables to outrun sales.',0],
  [6,'Classifying an operating cash outflow as investing most directly:','raises reported CFO but leaves total cash flow unchanged.','raises total cash flow.','raises net income automatically.','Classification changes subtotals, not the total change in cash.',0],
  [6,'A large reserve created in a strong year and released in a weak year is most consistent with:','earnings smoothing across periods.','a permanent cash-flow improvement.','automatic fraud.','Reserve timing can shift earnings, but intent and reasonableness require investigation.',0],
  [6,'Shortening an asset’s useful life in a strong year can create what reversal pattern?','Lower current earnings and potentially higher later earnings.','Higher earnings in every period.','Higher current CFO from depreciation.','Accelerated expense recognition reduces the later expense burden.',1],
  [6,'Which treatment most directly manages balance-sheet presentation without changing total cash?','Classifying a financing obligation outside reported debt through an unsupported structure','Collecting a valid receivable','Issuing shares for cash with full disclosure','Unsupported classification can obscure leverage even when cash economics remain.',1],

  [7,'Net income rises while CFO declines for three consecutive years. The best conclusion is:','accrual quality warrants investigation, not that fraud is proven.','fraud is certain.','earnings quality is automatically high.','Persistent divergence is a warning signal requiring explanation.',0],
  [7,'A company’s CFO/net income ratios are 1.12, 0.96, 0.78, and 0.61. The pattern most likely indicates:','deteriorating cash conversion.','improving accrual quality.','a mathematical increase in CFO.','Repeated decline below one suggests reported earnings are converting poorly to operating cash.',0],
  [7,'Gross margins far above peers should be treated as:','a signal to investigate operating advantage and accounting choices together.','proof of manipulation.','irrelevant when audited.','Unusual margins can reflect superior economics or reporting choices.',0],
  [7,'Frequent auditor changes are most appropriately viewed as:','a warning sign requiring context about disagreements and governance.','conclusive evidence of fraud.','proof of conservative accounting.','Auditor turnover can have benign or concerning explanations.',0],
  [7,'Acquisition-driven complexity increases reporting risk primarily because it:','creates valuation judgments, integration pressure, and opportunities to obscure trends.','makes every acquisition fraudulent.','eliminates estimates.','Complex transactions and controls complicate faithful reporting.',1],
  [7,'The strongest manipulation assessment usually comes from:','a coherent pattern across statements, disclosures, incentives, and peers.','one isolated ratio.','management’s adjusted earnings alone.','Warning signs should be evaluated collectively and contextually.',1],
];

const questions = q.map((item, index) => {
  const [losIndex, stem, correct, wrong1, wrong2, explanation, supplementary] = item;
  const correctChoiceIndex = index % 3;
  const choices = [wrong1, wrong2];
  choices.splice(correctChoiceIndex, 0, correct);
  return {
    id: `fsa-lm10-q-${String(index + 1).padStart(3, '0')}`,
    lessonId, topicId, officialLearningOutcome: los[losIndex],
    difficulty: index % 5 === 0 ? 'hard' : index % 3 === 0 ? 'easy' : 'medium',
    estimatedSeconds: 60 + (index % 3) * 15,
    stem, choices, correctChoiceIndex, explanation,
    incorrectChoiceExplanations: choices.map((choice, i) => i === correctChoiceIndex ? `Correct: ${explanation}` : `Incorrect: ${choice} does not apply the reporting-quality distinction or evidence standard in the scenario.`),
    relatedFormulaIds: stem.includes('CFO/net income') ? ['cfo-net-income-quality-fsa-10'] : [],
    tags: ['financial reporting quality', `LOS ${losIndex + 1}`],
    ...(supplementary ? {supplementary:true,supplementaryReason:'Additional application and synthesis within verified LM10 scope.'} : {}),
  };
});

const cards = [
  [0,'Financial reporting quality','The decision-usefulness and faithful representation of information in financial reports.'],[0,'Quality of earnings','The sustainability of earnings and whether they provide an adequate return.'],[0,'Quality of cash flow','The sustainability and economic substance of reported cash generation.'],[0,'Quality of balance-sheet items','How faithfully reported assets and liabilities represent economic resources and obligations.'],[0,'High earnings versus high-quality reporting','High earnings can be unsustainable or produced through biased choices; magnitude is not quality.'],
  [1,'Top of the quality spectrum','GAAP-compliant, decision-useful reporting paired with sustainable, adequate results.'],[1,'Compliant but biased reporting','Within GAAP discretion but less neutral and therefore lower quality.'],[1,'Non-compliant reporting','Reporting that violates applicable standards; low quality but not automatically proof of fraud.'],[1,'Lowest spectrum category','Fictitious transactions or events that misrepresent performance or conceal misuse of assets.'],[1,'Spectrum analysis','Assess compliance, decision-usefulness, bias, sustainability, and economic substance together.'],
  [2,'Aggressive accounting','Choices that increase current reported performance or position, often shifting pressure into future periods.'],[2,'Conservative accounting','Choices that decrease current reported performance or position and may raise later-period results.'],[2,'Conservatism caveat','Conservatism can reduce litigation or protect creditors but remains a bias, not synonymous with neutrality.'],[2,'Aggressive accounting versus fraud','Aggressive choices can remain within GAAP; fraud entails intentional deception or fictitious/misrepresented events.'],[2,'Cross-period reversal','Many timing choices reverse: current-period benefit commonly creates future-period expense or weaker results.'],
  [3,'Motivation','Pressure or incentive to achieve a personal or corporate reporting outcome.'],[3,'Opportunity','Weak controls, oversight, or complexity that makes manipulation possible.'],[3,'Rationalization','A justification that allows a decision-maker to regard questionable reporting as acceptable.'],[3,'Common motivations','Compensation, market expectations, financing needs, covenant pressure, and career concerns.'],[3,'Conditions are not proof','Motivation and opportunity increase risk but do not establish that manipulation occurred.'],[3,'Banking earnings','Using conservative current choices during a strong period to make future targets easier to meet.'],
  [4,'External audit role','Provides reasonable assurance of fair presentation; it does not guarantee no fraud.'],[4,'Board and audit committee','Oversee reporting, controls, and auditors, subject to expertise, independence, and information limitations.'],[4,'Regulatory discipline','Standards, filing requirements, review, enforcement, and sanctions constrain reporting behavior.'],[4,'Private-contract discipline','Lenders and investors monitor reporting because contractual outcomes depend on reported amounts.'],[4,'Discipline paradox','A covenant can motivate lender monitoring while also motivating management to bias results.'],
  [5,'Non-GAAP measure','A performance measure not defined by GAAP; potentially useful when transparent, reconciled, and consistent.'],[5,'Non-GAAP reconciliation','Bridge each adjustment between the management-defined measure and the nearest GAAP measure.'],[5,'Cherry-picking','Excluding unfavorable items while retaining economically comparable favorable items.'],[5,'Recurring “one-time” items','Repeated exclusions may belong in normalized performance even if management labels them special.'],[5,'Prominence warning','Giving adjusted results more emphasis than GAAP results can steer users toward a preferred narrative.'],[5,'Non-GAAP is not automatically misleading','Usefulness depends on definition, reconciliation, consistency, symmetry, and economic relevance.'],
  [6,'Capitalization versus expensing','Capitalization raises current assets and earnings but shifts expense recognition to later periods.'],[6,'Allowance reduction','A lower allowance can raise current earnings and net receivables without improving cash collection.'],[6,'Premature revenue pattern','Receivables may grow faster than revenue, DSO may rise, and cash conversion may weaken.'],[6,'Cash-flow classification management','Reclassification can raise CFO without changing total cash flow.'],[6,'Cookie-jar reserve','An excessive reserve built in a strong period and released later to smooth earnings.'],[6,'Estimate-change analysis','Assess rationale, peer consistency, disclosure, current effect, and expected future reversal.'],[6,'Balance-sheet management','Classification, valuation, or omission choices can obscure leverage, asset quality, or obligations.'],
  [7,'CFO/net income quality metric','Track CFO divided by net income; persistent values below one or repeated declines warrant accrual investigation.'],[7,'Receivables warning','Revenue growth accompanied by faster receivables growth or rising DSO can signal premature recognition.'],[7,'Margin outlier','May reflect superior economics or accounting bias; investigate rather than presume guilt.'],[7,'Auditor-change warning','Seek the reason, timing, disagreements, and governance context; turnover alone is not proof.'],[7,'Acquisition complexity','Raises valuation, integration, control, and trend-obscuring risks.'],[7,'Warning-sign synthesis','Use patterns across statements, disclosures, incentives, peers, and time; no isolated signal proves manipulation.']
];

const supplementaryCardIndexes = new Set([4,9,14,20,25,31,37,38,43,44]);
const flashcards = cards.map((item,index)=>({
  id:`fsa-lm10-fc-${String(index+1).padStart(3,'0')}`,lessonId,topicId,
  front:item[1],back:item[2],officialLearningOutcome:los[item[0]],tags:['financial reporting quality',`LOS ${item[0]+1}`],
  ...(supplementaryCardIndexes.has(index)?{supplementary:true,supplementaryReason:'Additional analytical reinforcement within verified LM10 scope.'}:{})
}));

const formulas = [{
  id:'cfo-net-income-quality-fsa-10',name:'Cash conversion quality ratio',expression:'Cash flow from operations ÷ Net income',
  meaning:'Compares operating cash generation with reported accrual earnings.',
  variables:{'Cash flow from operations':'Cash generated by operating activities','Net income':'Reported profit after tax'},
  intuition:'Persistent values below 1.0 or repeated declines can indicate that reported earnings are not converting into operating cash and warrant investigation.',
  workedExample:'CFO of 61 and net income of 100 produce 0.61; a multi-year fall from above 1.0 to 0.61 is a warning signal, not proof of manipulation.',
  commonMistake:'Treating one low observation as conclusive fraud evidence or confusing CFO with total cash flow.',
  relatedLessonId:lessonId,relatedLearningOutcome:los[7],tags:['reporting quality','cash conversion','warning signs']
}];

await writeFile(`src/data/questions/${lessonId}.json`,JSON.stringify(questions,null,2)+'\n');
await writeFile(`src/data/flashcards/${lessonId}.json`,JSON.stringify(flashcards,null,2)+'\n');
await writeFile(`src/data/formulas/${lessonId}.json`,JSON.stringify(formulas,null,2)+'\n');
console.log({questions:questions.length,official:questions.filter(x=>!x.supplementary).length,supplementary:questions.filter(x=>x.supplementary).length,answers:[0,1,2].map(n=>questions.filter(x=>x.correctChoiceIndex===n).length),questionLos:los.map(l=>questions.filter(x=>x.officialLearningOutcome===l).length),cards:flashcards.length,officialCards:flashcards.filter(x=>!x.supplementary).length,cardLos:los.map(l=>flashcards.filter(x=>x.officialLearningOutcome===l).length),formulas:formulas.length});

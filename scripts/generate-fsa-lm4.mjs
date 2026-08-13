import {writeFileSync} from 'node:fs';
const lessonId='fsa-04-analyzing-statements-of-cash-flows-i';
const los=[
'describe how the cash flow statement is linked to the income statement and the balance sheet',
'describe the steps in the preparation of direct and indirect cash flow statements, including how cash flows can be computed using income statement and balance sheet data',
'demonstrate the conversion of cash flows from the indirect to direct method',
'contrast cash flow statements prepared under International Financial Reporting Standards (IFRS) and US generally accepted accounting principles (US GAAP)'];
const concepts=[
['Aster sells goods on account. Revenue exceeds cash collected by $12 million. Which balance-sheet change completes the linkage?','Accounts receivable increases by $12 million.','Accounts payable increases by $12 million.','Inventory increases by $12 million.','Accrual revenue not yet collected increases receivables.'],
['Beginning cash is $18 million, CFO is $24 million, CFI is −$31 million, and CFF is $9 million. Ending cash is:','$20 million.','$2 million.','$82 million.','Ending cash equals beginning cash plus CFO, CFI, and CFF: 18 + 24 − 31 + 9 = 20.'],
['A company records depreciation expense. Its immediate cash-flow-statement consequence is best described as:','no cash flow; the expense is added back under the indirect method.','an investing cash outflow.','a financing cash outflow.','Depreciation reduces accrual income but does not itself use cash.'],
['Sales on account rise sharply while collections do not. Which pattern is most concerning?','Net income rises while CFO lags and receivables expand.','CFO rises faster than revenue while receivables fall.','Cash and retained earnings both remain unchanged.','The divergence may signal weak collection or aggressive revenue recognition.'],
['Cash received before a service is provided initially creates:','cash and deferred revenue.','revenue and accounts receivable.','an investing inflow and retained earnings.','The advance is cash received with a liability until performance occurs.'],
['Net income links most directly to ending retained earnings through:','beginning retained earnings + net income − dividends.','beginning cash + net income − dividends.','revenue − CFO + dividends.','The statement of changes in equity bridges retained earnings.'],
['Equipment purchased for cash affects the statements by:','increasing equipment and reducing cash, with a CFI outflow.','reducing net income immediately and creating CFO.','increasing debt and producing CFF automatically.','A cash asset purchase is investing; it is not an immediate expense.'],
['Borrowing $40 million from a bank most directly produces:','a $40 million financing inflow and a $40 million liability increase.','a $40 million operating inflow and revenue.','a $40 million investing inflow and gain.','Debt proceeds are financing cash and increase borrowings.'],
['A cash dividend of $6 million most directly:','reduces cash and retained earnings.','reduces cash and net income.','increases CFO and reduces revenue.','Dividends are distributions, not income-statement expenses.'],
['A decrease in an operating current asset is generally:','added to net income in the indirect CFO reconciliation.','deducted from net income in all cases.','reported as CFI.','The decrease releases cash tied up in the operating asset.'],
['An increase in an operating current liability is generally:','added to net income in the indirect CFO reconciliation.','deducted because liabilities always consume cash.','excluded from the cash flow statement.','The increase represents expense not yet paid in cash.'],
['The cash flow statement reconciles:','beginning cash and cash equivalents to ending cash and cash equivalents.','beginning revenue to ending revenue.','gross profit to retained earnings.','Its bottom-line bridge explains the period change in cash.'],
['Revenue is $86 million and accounts receivable increases by $7 million. Cash collected is:','$79 million.','$93 million.','$86 million.','Cash collected = revenue − increase in receivables = 79.'],
['COGS is $52 million, inventory increases $5 million, and accounts payable increases $3 million. Cash paid to suppliers is:','$54 million.','$50 million.','$60 million.','Purchases are 57; the $3 payable increase was not paid, so cash paid is 54.'],
['Wage expense is $18 million and wages payable decreases by $2 million. Cash paid to employees is:','$20 million.','$16 million.','$18 million.','Paying down the accrued liability makes cash paid exceed expense by 2.'],
['Interest expense is $9 million and interest payable increases by $1 million. Interest paid is:','$8 million.','$10 million.','$9 million.','The payable increase is expense not yet paid: 9 − 1 = 8.'],
['Tax expense is $14 million and taxes payable decreases by $3 million. Cash taxes paid are:','$17 million.','$11 million.','$14 million.','A liability decrease means cash paid exceeded expense: 14 + 3 = 17.'],
['Other operating expense is $30 million; prepaid expense rises $4 million and accrued expense rises $2 million. Cash paid is:','$32 million.','$24 million.','$36 million.','Cash paid = expense + increase in prepaid − increase in accrued = 32.'],
['Under the direct method, CFO is presented primarily as:','major classes of operating cash receipts and payments.','net income followed only by depreciation.','investing and financing flows netted together.','The direct format displays gross operating cash sources and uses.'],
['Under the indirect method, the starting point is generally:','net income.','cash received from customers.','ending cash.','Indirect CFO reconciles accrual net income to operating cash.'],
['Which item is added back to net income under the indirect method?','Depreciation expense.','A gain on sale of equipment.','An increase in accounts receivable.','Depreciation is a noncash expense and is added back.'],
['Which item is deducted from net income under the indirect method?','A gain on sale of equipment.','Depreciation expense.','A decrease in inventory.','The cash proceeds belong in CFI, so the included gain is removed from CFO.'],
['A loss on sale of equipment in net income is:','added back in indirect CFO.','reported as a CFO cash payment.','deducted twice from CFO.','The non-operating loss is removed from the CFO reconciliation by adding it back.'],
['Cash paid to acquire a building is normally:','an investing outflow.','an operating outflow.','a financing outflow.','Purchasing a long-lived asset is investing activity.'],
['Cash proceeds from issuing ordinary shares are normally:','a financing inflow.','an operating inflow.','an investing inflow.','Transactions with capital providers are financing.'],
['A noncash exchange of debt for equity is:','disclosed separately, not included in the three cash-flow totals.','included in both CFI and CFF.','included in CFO.','A material noncash transaction is disclosed but does not enter cash totals.'],
['The direct and indirect methods differ in presentation of:','operating activities only.','investing activities only.','financing activities only.','CFI and CFF use direct presentation under either choice.'],
['A complete cash-flow preparation should first:','identify balance-sheet changes and classify cash effects.','force every balance-sheet change into CFO.','ignore noncash transactions.','Changes, supporting details, and classifications are the preparation foundation.'],
['Net income is $40 million, depreciation $8 million, receivables increase $5 million, inventory falls $3 million, and payables rise $2 million. CFO is:','$48 million.','$42 million.','$58 million.','40 + 8 − 5 + 3 + 2 = 48.'],
['A $12 million equipment sale includes a $2 million gain. Under indirect reporting, the company should:','deduct the $2 million gain from CFO and report $12 million CFI inflow.','report $10 million CFI inflow only.','add $12 million to CFO.','The gain is removed from CFO; total cash proceeds appear in CFI.'],
['To convert indirect CFO to direct format, an analyst should first:','aggregate all revenue and expense accounts.','reclassify all CFI as CFO.','replace cash with net income.','The official three-step process begins with aggregating income-statement accounts.'],
['The second conversion step is to:','remove noncash items and separate remaining operating items.','add investing proceeds to revenue.','eliminate working-capital information.','Noncash items must be stripped from the aggregated accrual accounts.'],
['The final conversion step uses:','related balance-sheet changes to derive cash receipts and payments.','only retained earnings.','only the ending cash balance.','Working-capital account changes convert accrual lines to cash lines.'],
['Revenue is $120 million, receivables decrease $9 million, and deferred revenue increases $4 million. Cash received from customers is:','$133 million.','$115 million.','$125 million.','Cash received = revenue + AR decrease + deferred-revenue increase = 133.'],
['COGS is $75 million, inventory decreases $6 million, and payables decrease $2 million. Cash paid to suppliers is:','$71 million.','$83 million.','$67 million.','Purchases = 75 − 6 = 69; paying down payables adds 2, giving 71.'],
['Salary expense is $25 million and salary payable increases $4 million. Direct-method cash paid to employees is:','$21 million.','$29 million.','$25 million.','The $4 million increase remains unpaid: cash paid = 25 − 4.'],
['If the indirect reconciliation arrives at CFO of $36 million, the converted direct receipts less direct payments must equal:','$36 million.','net income, regardless of adjustments.','ending cash.','Presentation changes, but total CFO cannot change.'],
['Why might an analyst prefer the direct format?','It reveals trends in gross operating receipts and payments.','It changes the economic CFO total.','It eliminates classification judgment.','Gross cash lines provide information hidden by the net reconciliation.'],
['A rise in prepaid expenses is treated in converting expense to cash paid by:','adding the rise to expense.','subtracting the rise from expense.','ignoring it.','Buying more prepaid benefits uses cash beyond current-period expense.'],
['A rise in accrued operating liabilities is treated in converting expense to cash paid by:','subtracting the rise from expense.','adding the rise to expense.','classifying it as investing.','The accrued increase is current expense not yet paid.'],
['Under US GAAP, interest paid is classified as:','operating.','financing.','investing.','US GAAP requires operating classification for interest paid.'],
['Under IFRS, interest paid may be classified consistently as:','operating or financing.','operating or investing.','financing only.','IFRS permits operating or financing classification.'],
['Under US GAAP, dividends paid are classified as:','financing.','operating.','investing.','US GAAP treats distributions to owners as financing.'],
['Under IFRS, dividends paid may be classified consistently as:','operating or financing.','operating or investing.','investing only.','IFRS permits operating or financing classification.'],
['Under US GAAP, interest and dividends received are generally:','operating cash flows.','financing cash flows.','excluded from cash flows.','US GAAP classifies both as operating.'],
['Under IFRS, interest and dividends received may be classified consistently as:','operating or investing.','operating or financing.','financing only.','IFRS permits operating or investing classification.'],
['Income taxes under IFRS are normally operating unless:','specifically identifiable with an investing or financing transaction.','management prefers financing.','the direct method is used.','IFRS allows classification with the related transaction when specifically identifiable.'],
['Under US GAAP, income taxes are generally:','operating, with specific allocation rules for certain identifiable effects.','always financing.','always investing.','Operating is the general classification under US GAAP.'],
['An IFRS bank overdraft repayable on demand and integral to cash management may be:','included in cash and cash equivalents.','reported as revenue.','excluded from every statement.','IFRS can include qualifying overdrafts in cash equivalents.'],
['Under US GAAP, a bank overdraft is generally:','a financing liability rather than a cash equivalent.','part of cash equivalents.','an investing asset.','US GAAP does not net the overdraft into cash equivalents.'],
['Which standards comparison is correct?','IFRS generally offers more classification flexibility than US GAAP.','US GAAP permits every IFRS alternative plus more.','The standards never differ on cash-flow classification.','IFRS permits alternatives for interest and dividends that US GAAP fixes.'],
['A company switching its IFRS interest-paid classification each year would violate:','the consistency requirement.','the direct-method requirement.','the prohibition on financing cash flows.','Permitted IFRS alternatives must be applied consistently.'],
['Under US GAAP, cash paid to acquire an interest in an associate is most likely:','investing.','operating.','financing.','Acquiring an investment is an investing use of cash.'],
['Under both standards, cash proceeds from issuing debt are normally:','financing inflows.','operating inflows.','investing inflows.','Borrowing from capital providers is financing.'],
['When comparing IFRS and US GAAP CFO, an analyst should first:','normalize classification choices before interpreting operating performance.','assume reported CFO is automatically comparable.','move all interest to investing.','Different permitted classifications can create artificial CFO differences.']
];
const counts=[15,15,15,10]; let cursor=0,questions=[],cards=[];
for(let l=0;l<4;l++)for(let j=0;j<counts[l];j++){
 const n=cursor+1,[stem,correct,w1,w2,explanation]=concepts[cursor++]; const idx=(n-1)%3;
 const choices=[w1,w2]; choices.splice(idx,0,correct);
 const supplementary=j>=counts[l]-(l<2?3:2);
 questions.push({id:`fsa-lm4-q-${String(n).padStart(3,'0')}`,lessonId,topicId:'financial-statement-analysis',officialLearningOutcome:los[l],difficulty:j%5===0?'hard':j%2?'medium':'easy',estimatedSeconds:60+(j%3)*15,stem,choices,correctChoiceIndex:idx,explanation,incorrectChoiceExplanations:choices.map((c,k)=>k===idx?`Correct: ${explanation}`:`Incorrect: ${c} does not follow the applicable cash-flow linkage or classification rule.`),relatedFormulaIds:[],tags:['cash flow statement',`LOS ${l+1}`],...(supplementary?{supplementary:true}:{})});
 cards.push({id:`fsa-lm4-fc-${String(n).padStart(3,'0')}`,lessonId,topicId:'financial-statement-analysis',front:stem,back:`${correct} ${explanation}`,tags:['cash flow statement',`LOS ${l+1}`],officialLearningOutcome:los[l],...(supplementary?{supplementary:true}:{})});
}
const formulaData=[
['cash-received-customers-fsa-04','Cash received from customers','Cash received = Revenue − Increase in accounts receivable + Increase in deferred revenue'],
['purchases-from-suppliers-fsa-04','Purchases from suppliers','Purchases = Cost of goods sold + Increase in inventory'],
['cash-paid-suppliers-fsa-04','Cash paid to suppliers','Cash paid = Purchases − Increase in accounts payable'],
['cash-paid-employees-fsa-04','Cash paid to employees','Cash paid = Wage expense − Increase in wages payable'],
['cash-paid-other-operating-fsa-04','Cash paid for other operating expenses','Cash paid = Expense + Increase in prepaid expenses − Increase in accrued liabilities'],
['cash-interest-paid-fsa-04','Cash interest paid','Cash interest paid = Interest expense − Increase in interest payable'],
['cash-taxes-paid-fsa-04','Cash taxes paid','Cash taxes paid = Tax expense − Increase in taxes payable'],
['indirect-cfo-fsa-04','Indirect-method operating cash flow','CFO = Net income + Noncash charges − Non-operating gains + Non-operating losses − Increase in operating assets + Increase in operating liabilities']];
const formulas=formulaData.map(([id,name,expression],i)=>({id,name,expression,meaning:'Converts an accrual-accounting amount into its cash-flow equivalent using the related balance-sheet change.',variables:{'Increase':'Ending balance minus beginning balance'},intuition:'Asset increases generally consume cash; operating-liability increases generally preserve cash.',workedExample:concepts[12+i]?.[0]??'Apply the signed balance-sheet change consistently.',commonMistake:'Reversing the sign of the related working-capital change.',relatedLessonId:lessonId,relatedLearningOutcome:los[i===7?2:1],tags:['cash flow','conversion']}));
writeFileSync(`src/data/questions/${lessonId}.json`,JSON.stringify(questions,null,2)+'\n');
writeFileSync(`src/data/flashcards/${lessonId}.json`,JSON.stringify(cards,null,2)+'\n');
writeFileSync(`src/data/formulas/${lessonId}.json`,JSON.stringify(formulas,null,2)+'\n');
console.log({questions:questions.length,cards:cards.length,formulas:formulas.length,answers:[0,1,2].map(i=>questions.filter(q=>q.correctChoiceIndex===i).length),official:questions.filter(q=>!q.supplementary).length});

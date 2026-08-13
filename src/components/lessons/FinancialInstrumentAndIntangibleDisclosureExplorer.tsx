import {useState} from 'react';

export type DisclosureCategory = 'intangible' | 'goodwill' | 'financialInstrument' | 'nonCurrentLiability';
export type DisclosureScenario = {
 id: string;
 label: string;
 category: DisclosureCategory;
 classification: string;
 explanation: string;
 statementImpact: string;
};

export const scenarios: DisclosureScenario[] = [
 {id: 'purchased-customer-list', label: 'A company purchases a customer relationship list from another company for cash', category: 'intangible', classification: 'Capitalize at cost', explanation: 'A separately purchased intangible with a reliably measurable cost is capitalized, regardless of how the acquirer intends to use it.', statementImpact: 'Increases intangible assets on the balance sheet; no immediate income-statement effect beyond future amortization.'},
 {id: 'internally-built-brand', label: 'A company spends on general advertising intended to build its own brand recognition', category: 'intangible', classification: 'Expense as incurred', explanation: 'Internally generated brand value is never recognized as an intangible asset under either IFRS or US GAAP, regardless of the resulting brand strength.', statementImpact: 'Reduces net income in the period incurred; no asset is recognized.'},
 {id: 'indefinite-life-intangible', label: 'A company holds a trademark with an indefinite useful life', category: 'intangible', classification: 'No amortization; test for impairment at least annually', explanation: 'An intangible with an indefinite useful life is never amortized, but must be tested for impairment at least once a year and whenever indicators arise.', statementImpact: 'No scheduled amortization expense; potential impairment loss if the annual test indicates the carrying amount is not recoverable.'},
 {id: 'business-combination-goodwill', label: 'An acquirer pays more than the fair value of the identifiable net assets it acquires in a business combination', category: 'goodwill', classification: 'Recognize goodwill for the excess', explanation: 'Goodwill equals the purchase price minus the fair value of identifiable net assets acquired, and is recognized only in a business combination.', statementImpact: 'Increases goodwill on the balance sheet; not amortized, but tested for impairment at least annually.'},
 {id: 'internally-generated-reputation', label: 'A company has built a strong reputation entirely through its own operations, with no acquisition involved', category: 'goodwill', classification: 'Not recognized', explanation: 'Internally generated goodwill is explicitly excluded from recognition under both IFRS and US GAAP, no matter how valuable an internal valuation estimates it to be.', statementImpact: 'No asset or income-statement effect; the value is simply not reflected on the balance sheet.'},
 {id: 'hold-to-collect-bond', label: 'A company buys a bond intending to hold it to collect coupon and principal at maturity, never selling before then', category: 'financialInstrument', classification: 'Amortized cost', explanation: 'A debt instrument held under a hold-to-collect business model with cash flows that are solely payments of principal and interest is measured at amortized cost.', statementImpact: 'No fair-value remeasurement; only effective-interest income affects net income.'},
 {id: 'trading-bond-portfolio', label: 'A company actively trades a bond portfolio to profit from short-term price movements', category: 'financialInstrument', classification: 'Fair value through profit or loss (FVPL)', explanation: 'A trading business model, regardless of the instrument type, results in FVPL classification.', statementImpact: 'All fair-value changes flow directly through net income each period.'},
 {id: 'strategic-equity-fvoci-election', label: 'A company buys an equity stake in a supplier for strategic reasons and irrevocably elects FVOCI treatment', category: 'financialInstrument', classification: 'Fair value through other comprehensive income (FVOCI), equity election', explanation: 'Equity investments default to FVPL unless an irrevocable FVOCI election is made at initial recognition; unlike debt FVOCI, equity FVOCI gains and losses are never recycled to net income, even upon sale.', statementImpact: 'Fair-value changes go to other comprehensive income; realized gains/losses on sale remain permanently in equity, never reaching net income.'},
 {id: 'bond-issued-at-discount', label: 'A company issues bonds at 97.50% of face value because the market rate exceeds the stated coupon rate', category: 'nonCurrentLiability', classification: 'Bonds payable at a discount', explanation: 'When the coupon rate is below the market rate, bonds issue below face value; the discount is amortized over the bond’s term so the carrying amount rises to face value by maturity.', statementImpact: 'Issuance proceeds are below face value; interest expense recognized each period exceeds the cash coupon paid, as the discount amortizes into expense.'},
 {id: 'debt-covenant-breach', label: 'A company has never missed a debt payment, but its debt-to-EBITDA ratio has drifted above the covenant limit', category: 'nonCurrentLiability', classification: 'Technical default risk despite a clean payment history', explanation: 'Breaching a negative covenant (such as a maximum leverage ratio) can trigger technical default and accelerated repayment demands, independent of whether scheduled payments have been made.', statementImpact: 'May require reclassifying the debt as current, disclosing default risk, or renegotiating terms, even with no missed cash payments.'},
];

export function classifyDisclosureScenario(id: string): DisclosureScenario | undefined {
 return scenarios.find(s => s.id === id);
}

const categoryLabels: Record<DisclosureCategory, string> = {
 intangible: 'Intangible assets',
 goodwill: 'Goodwill',
 financialInstrument: 'Financial instruments',
 nonCurrentLiability: 'Non-current liabilities',
};

export function FinancialInstrumentAndIntangibleDisclosureExplorer() {
 const [scenarioId, setScenarioId] = useState(scenarios[0].id);
 const scenario = classifyDisclosureScenario(scenarioId);

 return (
  <section className="card mt-6" aria-labelledby="disclosure-explorer-heading">
   <h2 id="disclosure-explorer-heading">Financial Instrument and Intangible Disclosure Explorer</h2>
   <p className="muted mt-1 text-sm">Select a scenario spanning intangible assets, goodwill, financial instruments, and non-current liabilities to see the correct classification and its statement impact.</p>
   <label className="label mt-4 block max-w-xl" htmlFor="disclosure-scenario-select">Scenario
    <select id="disclosure-scenario-select" className="mt-1 w-full rounded-lg border bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800" value={scenarioId} onChange={e => setScenarioId(e.target.value)}>
     {scenarios.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
    </select>
   </label>
   {scenario && (
    <div className="mt-4">
     <p className="text-sm font-semibold">Category: {categoryLabels[scenario.category]}</p>
     <p role="status" className="mt-2 font-medium">{scenario.classification}</p>
     <p className="mt-2 text-sm">{scenario.explanation}</p>
     <p className="mt-2 text-sm"><span className="font-semibold">Statement impact: </span>{scenario.statementImpact}</p>
    </div>
   )}
  </section>
 );
}

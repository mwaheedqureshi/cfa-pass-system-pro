import { readFile, writeFile } from 'node:fs/promises';

const files = ['src/data/flashcards/quantitative.json', 'src/data/flashcards/quantitative-modules-3-4.json'];
const answers = {
  'holding-period-total-return': 'Total return equals the price change plus cash distributions, divided by beginning value. The beginning value is the investment base.',
  'price-and-income-return-decomposition': 'Price return is the price change divided by beginning value; income return is cash income divided by the same beginning value. Their sum is total return.',
  'arithmetic-mean-return': 'Add the periodic returns and divide by the number of observations. It estimates a one-period expected return but does not describe compound growth.',
  'geometric-compound-return': 'Multiply the wealth relatives, take the nth root, and subtract one. It is the constant periodic rate that reproduces terminal wealth.',
  'annualized-return': 'For a holding period of T years, annualized return is (1 + holding-period return)^(1/T) − 1. Annualization assumes a repeatable compound rate.',
  'continuously-compounded-return': 'The continuously compounded return is ln(ending value / beginning value). Log returns add across time.',
  'required-return': 'Required return compensates for the real risk-free rate, expected inflation, and relevant risk premiums. It is an opportunity-cost threshold, not a realized result.',
  'risk-free-rate': 'A nominal risk-free rate combines compensation for time value and expected inflation, with no default-risk premium for the chosen horizon and currency.',
  'risk-premium': 'A risk premium is the extra required return above a comparable risk-free rate for bearing a specified risk.',
  'exact-real-return': 'Exact real return is (1 + nominal return)/(1 + inflation) − 1. Subtraction is only an approximation.',
  'gross-versus-net-return': 'Gross return is measured before specified fees or costs; net return is measured after them. Always identify which costs the convention includes.',
  'pre-tax-versus-after-tax-return': 'Pre-tax return ignores taxes. After-tax return applies the relevant tax treatment separately to taxable income and realized gains when rates differ.',
  'leveraged-return': 'Leverage magnifies the residual return to equity: asset profit less financing cost is divided by the smaller equity base. It magnifies losses as well as gains.',
  'multi-period-compounding': 'Link sequential returns by multiplying (1 + r_t), then subtract one. Adding returns ignores compounding.',
  'negative-holding-period-return': 'A holding-period return is negative when distributions do not offset the price loss. Keep the distribution positive and the price change signed.',
  'income-timing': 'Return measurement assigns income to the period in which the investor earns or receives it under the stated convention; inconsistent timing distorts comparisons.',
  'annualization-limits': 'Annualization standardizes horizon, but it does not make a short, unusual return repeatable or remove volatility and path dependence.',
  'inflation-premium': 'The inflation premium compensates for expected loss of purchasing power. Unexpected inflation can still change the realized real return.',
  'liquidity-premium': 'A liquidity premium compensates investors for the cost and uncertainty of selling an asset quickly near fair value.',
  'maturity-premium': 'A maturity premium compensates for greater price sensitivity and uncertainty associated with longer horizons, holding other risks constant.',
  'equity-dividend-and-price-return': 'An equity total return combines dividend income and the signed share-price change, each measured relative to beginning price.',
  'bond-coupon-and-price-return': 'A bond holding-period return combines coupon income and the bond-price change, divided by beginning full price under the stated convention.',
  'money-market-discount-yield': 'A discount yield often uses face value and a 360-day convention, so it is not directly comparable with an investment return based on price paid and a 365-day year.',
  'bank-deposit-return': 'A deposit return is primarily credited interest relative to the deposited principal; quote conventions and compounding frequency must match the comparison basis.',
  'commodity-collateral-and-price-return': 'A commodity position may combine spot-price change, collateral income, and roll effects. State which components the reported return includes.',
  'foreign-asset-local-return': 'Local return measures the asset in its local currency and excludes the investor’s currency translation effect.',
  'currency-translation-return': 'Domestic-currency return compounds local asset return with currency return: (1 + local)(1 + FX) − 1.',
  'price-return-index': 'A price-return index reflects constituent price changes and excludes cash distributions.',
  'total-return-index': 'A total-return index includes constituent distributions, ordinarily with a stated reinvestment assumption.',
  'real-asset-income-return': 'Real assets can generate income such as rent in addition to price appreciation; total return includes both on a consistent beginning-value base.',
  'nominal-versus-real-comparison': 'Use real returns to compare purchasing-power growth when inflation differs; use nominal returns only when the price-level basis is comparable.',
  'gross-versus-net-comparison': 'Compare portfolios on the same fee basis. A gross series and a net series are not directly comparable without adjusting the convention.',
  'pre-tax-versus-after-tax-comparison': 'Tax-aware comparisons require the same investor tax assumptions and treatment of income, gains, and timing.',
  'leveraged-versus-unleveraged-return': 'Unleveraged return measures the asset; leveraged return measures the residual to equity after financing cost. Different equity bases make them non-interchangeable.',
  'asset-class-long-run-return-interpretation': 'Long-run historical averages describe a sample and return convention; they are not guaranteed forecasts and must be compared on consistent horizons and bases.',
  'money-weighted-return-cash-flow-sensitivity': 'MWR is the IRR of investor cash flows, so periods with more capital invested have more influence on the result.',
  'time-weighted-subperiod-linking': 'Split at external cash flows, calculate each subperiod return, multiply the wealth relatives, and subtract one. Annualize separately if required.',
  'external-cash-flow-timing': 'External contributions and withdrawals affect MWR because they change invested capital; properly calculated TWR neutralizes their timing.',
  'price-weighted-index-divisor': 'A price-weighted index sums constituent prices and divides by a continuity-adjusted divisor. Splits require divisor adjustment to avoid an artificial jump.',
  'equal-weighted-index-return': 'An equal-weighted index return is the arithmetic average of constituent returns at the rebalance point; weights drift afterward.',
  'market-capitalization-weighting': 'Market-cap weights are proportional to price times shares outstanding, so the largest companies have the greatest effect.',
  'float-adjusted-market-capitalization': 'Float-adjusted capitalization multiplies market value by the fraction available to public investors, excluding strategic or restricted holdings.',
  'index-rebalancing': 'Rebalancing restores target constituent weights without necessarily changing membership.',
  'index-reconstitution': 'Reconstitution applies eligibility rules to change index membership; it is distinct from merely restoring weights.',
  'constituent-addition': 'Adding a constituent requires weights and, where relevant, the divisor to be adjusted so the membership change alone does not create a return.',
  'benchmark-comparability': 'A useful benchmark matches the portfolio’s mandate, investable universe, currency, risk exposure, and return convention and is specified in advance.',
  'index-concentration': 'Concentration means a small number of constituents drive more of index risk and return; capitalization weighting can increase this exposure.',
  'MWR-versus-TWR-selection': 'Use TWR to assess a manager who does not control external cash flows; use MWR to describe the investor experience or a strategy that controls cash-flow timing.'
};

let changed = 0;
for (const file of files) {
  const cards = JSON.parse(await readFile(file, 'utf8'));
  for (const card of cards) {
    if (!/^fc-lm[123]r-/.test(card.id)) continue;
    const key = card.tags.find(tag => tag !== 'checkpoint-1-verified' && !/^qm-lm\d$/.test(tag));
    if (!answers[key]) throw new Error(`Missing replacement for ${card.id}: ${key}`);
    card.front = card.front.replace(/^QM-LM\d: How should an analyst interpret /, '').replace(/\?$/, '').replace(/^./, c => c.toUpperCase()) + '?';
    if (card.id === 'fc-lm3r-08') card.front = 'What does a price-return index exclude?';
    if (card.id === 'fc-lm3r-09') card.front = 'What reinvestment feature distinguishes a total-return index?';
    card.back = answers[key];
    card.tags = [...new Set([...card.tags, 'checkpoint-1-verified'])];
    changed++;
  }
  await writeFile(file, JSON.stringify(cards, null, 2) + '\n');
}
if (changed !== 50) throw new Error(`Expected 50 cards, changed ${changed}`);
console.log(`Replaced ${changed} weak flashcards.`);

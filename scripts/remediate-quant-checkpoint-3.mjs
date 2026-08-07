import {readFile,writeFile} from 'node:fs/promises';
const read=async p=>JSON.parse(await readFile(p,'utf8')),write=(p,x)=>writeFile(p,JSON.stringify(x,null,2)+'\n');
const spec=(stem,correct,w1,w2,explanation,formulas=[])=>({stem,answers:[correct,w1,w2],explanation,formulas});
const outcomes={
 lm6:'calculate, interpret, and evaluate principal moments and conditional properties of statistical distributions used in finance',
 lm7a:'explain the central limit theorem and the application of confidence intervals and sampling methodologies',
 lm7b:'explain hypothesis testing, construct appropriate tests, and interpret statistical and economic significance',
 lm8:'calculate and interpret portfolio return and risk, minimum-variance portfolios, efficient frontiers, and optimal capital allocation'
};
const lm6=[
 spec('A discrete rating has values 1, 2, and 3 with probabilities 0.20, 0.50, and 0.30. Its expected value is:','2.10','2.00','2.30','E(X)=1(.20)+2(.50)+3(.30)=2.10.',['expected-value-06']),
 spec('For a continuous return X, F(0.04)=0.70 and F(−0.02)=0.25. P(−2%<X≤4%) is:','0.45','0.70','0.95','An interval probability is F(.04)−F(−.02)=.45.'),
 spec('A continuous density is constant at 0.20 from 0 through 5. P(1<X<3.5) is:','0.50','0.20','0.70','Probability is area: (3.5−1)(.20)=.50.'),
 spec('A discrete uniform variable takes values 2, 4, 6, and 8. Its variance is:','5.00','2.50','20.00','The mean is 5 and the average squared deviation is (9+1+1+9)/4=5.'),
 spec('A Bernoulli default indicator has p=0.04. Its variance is:','0.0384','0.0400','0.0016','Bernoulli variance is p(1−p)=.04(.96)=.0384.',['bernoulli-variance-07']),
 spec('Five independent loans each default with probability 0.10. The probability of exactly one default is closest to:','32.81%','40.95%','59.05%','C(5,1)(.10)(.90)^4=.32805.',['binomial-probability-07']),
 spec('For a binomial variable with n=20 and p=0.30, its mean and variance are:','6.0 and 4.2','6.0 and 6.0','14.0 and 4.2','Mean=np=6 and variance=np(1−p)=4.2.',['binomial-mean-07','binomial-variance-07']),
 spec('A Poisson count has λ=3. Its probability of zero events is closest to:','4.98%','14.94%','95.02%','P(X=0)=e^(−3)=.0498.'),
 spec('For a Poisson distribution with λ=7, the mean and variance are:','7 and 7','7 and 49','49 and 7','Both the mean and variance of a Poisson distribution equal λ.'),
 spec('A bond has a constant annual hazard rate λ=0.03. Its five-year cumulative default probability is closest to:','13.93%','15.00%','16.18%','1−e^(−.03×5)=.1393.'),
 spec('A continuous uniform return ranges from −4% to 8%. Its expected return is:','2.0%','4.0%','1.0%','Uniform mean=(a+b)/2=(−4%+8%)/2=2%.',['continuous-uniform-mean-07']),
 spec('Normal returns have mean 6% and standard deviation 8%. A return of −6% has z-score:','−1.50','1.50','−0.75','z=(−.06−.06)/.08=−1.5.',['z-score-07']),
 spec('For a standard normal variable, Φ(1.20)=0.8849. P(Z>1.20) is:','0.1151','0.8849','0.7698','The right tail is 1−Φ(1.20)=.1151.',['normal-probability-07']),
 spec('If a continuously compounded return is normal, the corresponding ending price is commonly modeled as:','lognormal and bounded below by zero','normal and able to be negative','uniform over a fixed interval','Exponentiating a normal log return produces a positive lognormal price.',['lognormal-transform-07']),
 spec('A joint CDF F(x,y) directly reports the probability that:','X≤x and Y≤y','X=x and Y=y','X>x and Y>y','A joint CDF cumulates probability through both stated upper bounds.'),
 spec('Given two market regimes, a conditional expected return differs from an unconditional expected return because it:','uses probabilities and outcomes conditional on the specified regime','must equal one of the realized returns','ignores the probability of the regime','Conditional expectation uses the relevant conditional distribution.')
];
const lm7a=[
 spec('A systematic sample starts at record 7 and selects every 20th record. A hidden 20-record reporting cycle mainly creates risk of:','periodicity bias','cluster sampling error','stratification bias','A sampling interval matching a data cycle can systematically distort selection.'),
 spec('A population standard deviation is 18 and n=81. The standard error of the sample mean is:','2.0','0.222','18.0','SE=18/√81=2.',['standard-error-08']),
 spec('A sample mean is 50, known σ=12, n=36, and z*=1.96. The 95% interval is:','[46.08, 53.92]','[38.00, 62.00]','[48.04, 51.96]','SE=12/6=2; margin=1.96(2)=3.92.',['z-confidence-interval-08']),
 spec('A normal sample has n=25 and unknown population variance. The one-sample mean interval uses:','Student’s t with 24 degrees of freedom','standard normal with 25 degrees of freedom','chi-square with 24 degrees of freedom','Unknown variance estimated by s calls for t with n−1=24 df.',['degrees-freedom-08','t-confidence-interval-08']),
 spec('Holding confidence and variability fixed, reducing a confidence-interval margin by half requires approximately:','four times the sample size','twice the sample size','half the sample size','Margin varies with 1/√n, so halving it requires quadrupling n.',['margin-of-error-08'])
];
const lm7b=[
 spec('A manager claims mean excess return is positive. The appropriate alternative hypothesis is:','H₁: μ>0','H₁: μ≠0','H₁: μ<0','A directional positive claim requires an upper-tailed alternative.'),
 spec('With known σ=10, n=25, sample mean 54, and H₀: μ=50, the z statistic is:','2.00','0.40','10.00','z=(54−50)/(10/√25)=2.',['z-mean-test-09']),
 spec('For an upper-tail 5% z test, z=1.72 leads to:','reject H₀','fail to reject H₀','accept H₀ as true','1.72 exceeds the 1.645 critical value.'),
 spec('For a two-tailed 5% z test, z=−1.80 leads to:','fail to reject H₀','reject H₀','prove H₀','|−1.80| is below 1.96, so evidence is insufficient to reject.'),
 spec('A test produces p=0.032 at α=0.05. The correct decision is:','reject H₀','fail to reject H₀','assign 3.2% probability to H₀','Because p<α, reject H₀; the p-value is not P(H₀ true).',['p-decision-09']),
 spec('A test produces p=0.08 at α=0.05. The correct conclusion is:','fail to reject H₀','accept H₀','prove no effect exists','p>α means insufficient evidence to reject, not proof of the null.'),
 spec('A two-sided test has one-tail area 0.018 beyond |t|. Its p-value is:','0.036','0.018','0.982','For a symmetric two-sided test, double the one-tail area.'),
 spec('A normal sample has n=16, unknown σ, x̄=12, s=4, and μ₀=10. The t statistic is:','2.00','0.50','8.00','t=(12−10)/(4/√16)=2 with 15 df.',['t-mean-test-09']),
 spec('Rejecting a true null hypothesis is:','a Type I error','a Type II error','power','Type I error is a false rejection.'),
 spec('Failing to reject a false null hypothesis is:','a Type II error','a Type I error','statistical power','Type II error is a missed real effect.'),
 spec('If β=0.20, statistical power equals:','0.80','0.20','1.20','Power=1−β=.80.',['power-09']),
 spec('All else equal, increasing sample size generally:','raises power by reducing standard error','raises Type I error above α automatically','makes economic significance certain','A smaller standard error improves detection of a real effect.'),
 spec('A 95% confidence interval for μ−μ₀ excludes zero. The corresponding two-sided 5% test should:','reject H₀','fail to reject H₀','switch to a one-sided test','Exclusion of the null value matches rejection at the corresponding level.',['ci-test-link-09']),
 spec('A tiny return difference is statistically significant in a huge sample but smaller than trading costs. It is:','not necessarily economically significant','proof of a profitable strategy','evidence that α was too small','Statistical detection does not establish practical profitability.'),
 spec('An analyst chooses a one-tailed test only after seeing the sign of the sample result. This mainly:','invalidates the pre-specified error control','increases degrees of freedom','proves the alternative','Tail direction must follow the research hypothesis, not the observed result.')
];
const lm8=[
 spec('A 30% position returns −5% and a 70% position returns 9%. Portfolio return is:','4.8%','2.0%','6.3%','0.30(−5%)+0.70(9%)=4.8%.',['portfolio-expected-return-08']),
 spec('Weights are 20%, 50%, and 30%; returns are 10%, −2%, and 8%. The second asset’s contribution is:','−1.0 percentage point','−2.0 percentage points','5.0 percentage points','Contribution=0.50(−2%)=−1 percentage point.'),
 spec('Standard deviations are 10% and 15%, and covariance is 0.006. Correlation is:','0.40','0.04','2.50','ρ=.006/(.10×.15)=.40.',['correlation-08']),
 spec('Standard deviations are 12% and 18%, and correlation is −0.25. Covariance is:','−0.0054','0.0054','−0.0540','Cov=−.25(.12)(.18)=−.0054.',['covariance-08']),
 spec('A 40/60 portfolio has risks 10% and 15% and correlation 0.25. Variance is:','0.0115','0.0106','0.1072','Variance=.4²(.1²)+.6²(.15²)+2(.4)(.6)(.25)(.1)(.15)=.0115.',['two-asset-variance-08']),
 spec('A portfolio variance of 0.0144 corresponds to standard deviation:','12.0%','1.44%','14.4%','√.0144=.12.',['portfolio-standard-deviation-08']),
 spec('Two long-only assets have correlation +1. Portfolio risk equals:','the weighted average of their standard deviations','zero for some positive weights','the weighted average of their variances','At +1, risks add linearly for long-only weights.'),
 spec('With correlation −1, risks 10% and 15%, the zero-risk weight in the 10%-risk asset is:','60%','40%','50%','Solve .10w=.15(1−w), giving w=.60.'),
 spec('Two 20%-risk assets are equally weighted. At correlation zero, portfolio risk is:','14.14%','20.00%','10.00%','Variance=.25(.04)+.25(.04)=.02; risk=14.14%.'),
 spec('For positive portfolio weights, lowering pairwise correlation while holding other inputs fixed generally:','reduces portfolio variance','raises expected return','raises each asset’s variance','Correlation affects cross terms, not expected returns or standalone risks.'),
 spec('A covariance matrix used for portfolio variance must be:','symmetric with nonnegative diagonal variances','asymmetric with zero diagonal','bounded between −1 and +1 in every cell','Cov(i,j)=Cov(j,i), and diagonal entries are variances.'),
 spec('A three-asset variance calculation includes each unique covariance term:','twice','once with no multiplier','three times','The full double sum contains ij and ji, so unique pair terms are doubled.'),
 spec('A portfolio modeled at 10% risk rises to 13% under stressed correlations. The relative increase is:','30%','3%','23.08%','(13−10)/10=30%; the absolute increase is 3 percentage points.'),
 spec('Variances are .01 and .04 and covariance is zero. The GMV weight in the first asset is:','80%','20%','50%','wA=.04/(.01+.04)=.80.',['minimum-variance-weight-08']),
 spec('The global minimum-variance portfolio is the portfolio with:','the lowest variance in the feasible set','the highest expected return','the highest Sharpe ratio necessarily','GMV minimizes variance without requiring a return target.'),
 spec('Portfolio A returns 9% at 12% risk; B returns 9% at 15% risk. Relative to B, A is:','dominant','dominated','equivalent','Equal return with lower risk dominates.'),
 spec('Portfolio A returns 8% at 10% risk; B returns 10% at 10% risk. Relative to A, B is:','dominant','dominated','minimum variance by definition','Equal risk with higher return dominates.'),
 spec('The efficient frontier is:','the upper non-dominated part of the minimum-variance frontier','every feasible portfolio','only the global minimum-variance portfolio','Efficient portfolios maximize return for risk or minimize risk for return.'),
 spec('Assets return 5% and 13%. A fully invested portfolio targeting 9% uses the first asset weight:','50%','40%','60%','.09=.05w+.13(1−w), so w=.50.'),
 spec('Rf=2%, risky return=8%, and y=0.60. Complete-portfolio return is:','5.6%','4.8%','6.8%','2%+.60(8%−2%)=5.6%.',['cal-return-08']),
 spec('A risky portfolio has 16% risk and y=0.60. Complete-portfolio risk is:','9.6%','16.0%','6.4%','Risk=|y|σP=.60(16%)=9.6%.',['cal-risk-08']),
 spec('If y=1.25 on a CAL, the risk-free weight is:','−25%','25%','125%','1−y=−.25, indicating borrowing.'),
 spec('Rf=3%, risky return=11%, and risky risk=16%. CAL slope is:','0.50','0.6875','0.08','Slope=(11%−3%)/16%=.50.'),
 spec('Two feasible risky portfolios have Sharpe ratios 0.45 and 0.60. The better CAL uses:','the 0.60 portfolio','the 0.45 portfolio','either, because slopes do not matter','A higher Sharpe ratio produces a steeper CAL.'),
 spec('The capital market line is the CAL that uses:','the market portfolio as its risky portfolio','the global minimum-variance portfolio in every case','one individual security','The CML is the market-portfolio special case.'),
 spec('For U=E(R)−0.5Aσ², E(R)=9%, σ=15%, and A=4, utility is:','4.5%','6.0%','0.0%','.09−.5(4)(.15²)=.045.',['portfolio-utility-08']),
 spec('Risky excess return is 6%, variance is .0225, and A=4. Optimal risky weight is:','66.67%','26.67%','150.00%','y*=.06/[4(.0225)]=.6667.'),
 spec('Holding the investment opportunity set fixed, doubling risk aversion causes optimal risky weight to:','halve','double','remain unchanged','The optimal risky fraction is inversely proportional to A.'),
 spec('An investor’s risk aversion changes the standard tangency portfolio itself:','no; it changes the complete-portfolio allocation','yes; it changes every asset covariance','yes; it changes the risk-free rate','Separation first identifies the tangency portfolio, then preferences determine y.'),
 spec('A negative portfolio weight most directly indicates:','a short position','a calculation error in every case','a negative expected return','Negative weights are permitted when short selling is allowed.'),
 spec('A portfolio weight above one combined with a negative risk-free weight indicates:','leveraged exposure','an infeasible covariance','zero variance','Borrowing finances risky exposure above 100%.'),
 spec('Historical correlations are least reliable when:','market relationships change sharply under stress','the sample includes more observations','returns are stated in decimals','Regime shifts can make backward-looking dependence estimates unstable.'),
 spec('Diversification can substantially reduce:','asset-specific risk','all systematic risk','the expected return mechanically','Common shocks remain even in broad portfolios.'),
 spec('An asset with high standalone volatility can still improve a portfolio if it has:','sufficiently low covariance with existing holdings','the highest standalone return only','correlation above +1','Portfolio contribution depends on co-movement as well as standalone risk.'),
 spec('Expected portfolio return requires which inputs?','weights and expected asset returns','correlations only','variances and covariances only','Return is linear in weights and expected returns; dependence enters risk.')
];
function replace(file,ids,specs,lesson,module,outcome){if(ids.length!==specs.length)throw new Error(`${module} ${ids.length}/${specs.length}`);return read(file).then(items=>{const map=new Map(ids.map((id,i)=>{const s=specs[i],shift=i%3,choices=[...s.answers.slice(shift),...s.answers.slice(0,shift)],correctChoiceIndex=(3-shift)%3,replacement={...items.find(x=>x.id===id),stem:s.stem,choices,correctChoiceIndex,explanation:s.explanation,incorrectChoiceExplanations:choices.map((c,j)=>j===correctChoiceIndex?`Correct. ${s.explanation}`:`Incorrect. ${c} does not satisfy the stated calculation or interpretation. ${s.explanation}`),relatedFormulaIds:s.formulas,lessonSectionId:'checkpoint-3-verified-application-lab',difficulty:i%5===0?'hard':'medium',estimatedSeconds:i%5===0?105:75,tags:[module.toLowerCase(),'checkpoint-3-verified',...(i%5===0?['mock-style']:[])]};if(lesson==='quant-hypothesis-09')delete replacement.officialLearningOutcome;else replacement.officialLearningOutcome=outcome;return[id,replacement]}));return write(file,items.map(x=>map.get(x.id)??x))})}
await replace('src/data/questions/quantitative-probability.json',['q06-01','q06-02','q06-03','q06-04','q06-05','q06-06','q06-07','q06-08','q06-33','q06-34','q06-35','q06-36','q06-37','q06-38','q06-39','q06-40'],lm6,'quant-probability-06','QM-LM6',outcomes.lm6);
await replace('src/data/questions/quantitative-sampling.json',Array.from({length:5},(_,i)=>`q-v165-qm-lm7a-${41+i}`),lm7a,'quant-sampling-08','QM-LM7',outcomes.lm7a);
await replace('src/data/questions/quantitative-hypothesis.json',Array.from({length:15},(_,i)=>`q09-${String(i+1).padStart(2,'0')}`),lm7b,'quant-hypothesis-09','QM-LM7',outcomes.lm7b);
const lm8Ids=[];for(let start=1;start<=43;start+=3)lm8Ids.push(`qport08-${String(start+1).padStart(2,'0')}`,`qport08-${String(start+2).padStart(2,'0')}`);lm8Ids.push(...Array.from({length:5},(_,i)=>`q-v165-qm-lm8-${46+i}`));await replace('src/data/questions/quantitative-distributions.json',lm8Ids,lm8,'quant-distributions-07','QM-LM8',outcomes.lm8);
async function balance(file,lesson){const items=await read(file),pool=items.filter(x=>x.lessonId===lesson&&!x.supplementary),base=Math.floor(pool.length/3),target=[base+(pool.length%3>0?1:0),base+(pool.length%3>1?1:0),base];while(true){const counts=[0,1,2].map(i=>pool.filter(q=>q.correctChoiceIndex===i).length),from=counts.findIndex((n,i)=>n>target[i]),to=counts.findIndex((n,i)=>n<target[i]);if(from<0||to<0)break;const q=pool.find(x=>x.correctChoiceIndex===from),pairs=q.choices.map((choice,i)=>({choice,why:q.incorrectChoiceExplanations[i]})),correct=pairs.splice(from,1)[0];pairs.splice(to,0,correct);q.choices=pairs.map(x=>x.choice);q.incorrectChoiceExplanations=pairs.map(x=>x.why);q.correctChoiceIndex=to}await write(file,items)}
await balance('src/data/questions/quantitative-probability.json','quant-probability-06');await balance('src/data/questions/quantitative-sampling.json','quant-sampling-08');await balance('src/data/questions/quantitative-hypothesis.json','quant-hypothesis-09');await balance('src/data/questions/quantitative-distributions.json','quant-distributions-07');
async function ensureMockCount(file,lesson,count){const items=await read(file),pool=items.filter(x=>x.lessonId===lesson&&!x.supplementary);for(const q of pool){q.tags=q.tags??[];if(pool.filter(x=>x.tags?.includes('mock-style')).length>=count)break;if(!q.tags.includes('mock-style'))q.tags.push('mock-style')}await write(file,items)}
await ensureMockCount('src/data/questions/quantitative-sampling.json','quant-sampling-08',10);await ensureMockCount('src/data/questions/quantitative-distributions.json','quant-distributions-07',15);
const cardJobs=[
 ['src/data/flashcards/quantitative-probability.json',['fc06-01','fc06-02','fc06-03','fc06-04','fc06-05','fc06-06','fc06-07','fc06-08','fc06-33','fc06-34','fc06-35','fc06-36','fc06-37','fc06-38','fc06-39','fc06-40'],lm6],
 ['src/data/flashcards/quantitative-modules-7-8.json',Array.from({length:5},(_,i)=>`fc-v165-qm-lm7a-${41+i}`),lm7a],
 ['src/data/flashcards/quantitative-modules-9-10.json',Array.from({length:15},(_,i)=>`fc09-${String(i+1).padStart(2,'0')}`),lm7b],
 ['src/data/flashcards/quantitative-modules-7-8.json',lm8Ids.map(id=>id.replace('qport08','fcport08').replace('q-v165','fc-v165')),lm8]
];
for(const[file,ids,specs]of cardJobs){const cards=await read(file);for(let i=0;i<ids.length;i++){const card=cards.find(x=>x.id===ids[i]);if(!card)throw new Error(`missing card ${ids[i]}`);card.front=specs[i].stem;card.back=specs[i].explanation;card.tags=[...new Set([...card.tags,'checkpoint-3-verified'])]}await write(file,cards)}
const f56='src/data/formulas/quantitative-modules-5-6.json',formulas56=(await read(f56)).filter(x=>!['portfolio-expected-return-06','two-asset-variance-06'].includes(x.id)),common6={relatedLessonId:'quant-probability-06',studyLessonId:'quant-probability-06',officialModuleId:'QM-LM6',supplementary:false,relatedLearningOutcome:outcomes.lm6,tags:['qm-lm6','checkpoint-3-verified']};
if(!formulas56.some(x=>x.id==='poisson-probability-06'))formulas56.push({id:'poisson-probability-06',name:'Poisson probability mass',expression:'P(X=x)=e^(−λ)λ^x/x!',variables:{x:'nonnegative event count',λ:'expected event count over the interval'},meaning:'Gives the probability of x independent rare-event arrivals in a fixed interval.',intuition:'The rate parameter controls both center and dispersion.',workedExample:'With λ=3, P(X=0)=e^(−3)=4.98%.',commonMistake:'Using a Poisson model when the event rate is not stable over the interval.',...common6});
if(!formulas56.some(x=>x.id==='poisson-moments-06'))formulas56.push({id:'poisson-moments-06',name:'Poisson mean and variance',expression:'E(X)=Var(X)=λ',variables:{λ:'expected event count over the interval'},meaning:'The Poisson mean and variance both equal its rate parameter.',intuition:'A higher event rate shifts the count distribution right and increases dispersion.',workedExample:'For λ=7, the mean and variance are both 7.',commonMistake:'Using λ² as the variance.',...common6});await write(f56,formulas56);
const f78='src/data/formulas/quantitative-modules-7-8.json',formulas78=await read(f78),student=formulas78.find(x=>x.id==='student-t-statistic-07');if(student){student.relatedLessonId='quant-sampling-08';student.studyLessonId='quant-sampling-08';student.officialModuleId='QM-LM7';student.relatedLearningOutcome=outcomes.lm7a;student.tags=[...new Set([...student.tags,'qm-lm7','checkpoint-3-verified'])]}await write(f78,formulas78);
console.log('Checkpoint 3: replaced 71 weak questions and 71 weak flashcards.');

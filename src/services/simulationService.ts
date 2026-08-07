export function seededRandom(seed:number){
  if(!Number.isInteger(seed)||seed<0)throw new Error('Random seed must be a non-negative integer.');
  let state=(seed||1)>>>0;
  return()=>{state=(1664525*state+1013904223)>>>0;return state/4294967296};
}

export function percentile(values:number[],p:number){
  if(!values.length||values.some(v=>!Number.isFinite(v))||!Number.isFinite(p)||p<0||p>1)return NaN;
  const sorted=[...values].sort((a,b)=>a-b),position=(sorted.length-1)*p,lo=Math.floor(position),hi=Math.ceil(position);
  return sorted[lo]+(sorted[hi]-sorted[lo])*(position-lo);
}

function normalDraw(random:()=>number){const u1=Math.max(Number.EPSILON,random()),u2=random();return Math.sqrt(-2*Math.log(u1))*Math.cos(2*Math.PI*u2)}

export function correlatedNormalDraw(sigma1:number,sigma2:number,rho:number,z1:number,z2:number){
  if([sigma1,sigma2,rho,z1,z2].some(v=>!Number.isFinite(v))||sigma1<0||sigma2<0||Math.abs(rho)>1)return null;
  return{x1:sigma1*z1,x2:sigma2*(rho*z1+Math.sqrt(1-rho*rho)*z2)};
}

export type SimulationInput={initialValue:number;expectedReturn:number;volatility:number;periods:number;simulations:number;contribution:number;seed:number};

export function simulatePortfolio(input:SimulationInput){
  if(!Number.isFinite(input.initialValue)||input.initialValue<=0)return{error:'Initial value must be greater than zero.'};
  if(!Number.isFinite(input.expectedReturn))return{error:'Drift must be a finite number.'};
  if(!Number.isFinite(input.volatility)||input.volatility<0)return{error:'Volatility cannot be negative.'};
  if(!Number.isFinite(input.contribution))return{error:'Contribution must be a finite number.'};
  if(!Number.isInteger(input.periods)||input.periods<1||input.periods>600)return{error:'Periods must be an integer from 1 to 600.'};
  if(!Number.isInteger(input.simulations)||input.simulations<100||input.simulations>20000)return{error:'Simulations must be an integer from 100 to 20,000.'};
  if(!Number.isInteger(input.seed)||input.seed<0)return{error:'Random seed must be a non-negative integer.'};
  const random=seededRandom(input.seed),terminalValues:number[]=[];
  for(let i=0;i<input.simulations;i++){
    let value=input.initialValue;
    for(let t=0;t<input.periods;t++)value=value*Math.exp(input.expectedReturn-input.volatility**2/2+input.volatility*normalDraw(random))+input.contribution;
    terminalValues.push(value);
  }
  const mean=terminalValues.reduce((a,b)=>a+b,0)/terminalValues.length;
  return{terminalValues,mean,median:percentile(terminalValues,.5),p5:percentile(terminalValues,.05),p95:percentile(terminalValues,.95),probabilityBelowInitial:terminalValues.filter(v=>v<input.initialValue).length/terminalValues.length};
}

export function parseObservations(text:string){const values=text.split(',').map(x=>x.trim()).map(x=>x===''?NaN:Number(x));return values.length&&values.every(Number.isFinite)?values:null}

export function bootstrapMeans(values:number[],resampleSize:number,samples:number,seed:number){
  if(values.length<2||values.some(v=>!Number.isFinite(v)))return{error:'Provide at least two valid observations.'};
  if(!Number.isInteger(resampleSize)||resampleSize<1||resampleSize>10000)return{error:'Resample size must be an integer from 1 to 10,000.'};
  if(!Number.isInteger(samples)||samples<100||samples>20000)return{error:'Bootstrap samples must be from 100 to 20,000.'};
  if(!Number.isInteger(seed)||seed<0)return{error:'Random seed must be a non-negative integer.'};
  const random=seededRandom(seed),means:number[]=[];
  for(let i=0;i<samples;i++){let sum=0;for(let j=0;j<resampleSize;j++)sum+=values[Math.floor(random()*values.length)];means.push(sum/resampleSize)}
  const originalMean=values.reduce((a,b)=>a+b,0)/values.length,meanOfMeans=means.reduce((a,b)=>a+b,0)/means.length,standardError=Math.sqrt(means.reduce((a,b)=>a+(b-meanOfMeans)**2,0)/(means.length-1));
  return{means,originalMean,standardError,lower:percentile(means,.025),upper:percentile(means,.975)};
}

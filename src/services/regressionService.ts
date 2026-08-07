export type RegressionResult={n:number;meanX:number;meanY:number;covariance:number;correlation:number;slope:number;intercept:number;predicted:(x:number)=>number;residuals:number[];sse:number;sst:number;ssr:number;rSquared:number;standardErrorEstimate:number|null;slopeStandardError:number|null;slopeTStatistic:number|null};
export function mean(values:number[]){if(!values.length||values.some(v=>!Number.isFinite(v)))return NaN;return values.reduce((a,b)=>a+b,0)/values.length}
export function simpleRegression(x:number[],y:number[]):RegressionResult|{error:string}{if(x.length!==y.length)return{error:'X and Y must contain the same number of observations.'};if(x.length<2)return{error:'At least two paired observations are required.'};if([...x,...y].some(v=>!Number.isFinite(v)))return{error:'Every observation must be a finite number.'};const n=x.length,mx=mean(x),my=mean(y);let sxx=0,syy=0,sxy=0;for(let i=0;i<n;i++){sxx+=(x[i]-mx)**2;syy+=(y[i]-my)**2;sxy+=(x[i]-mx)*(y[i]-my)}if(sxx===0)return{error:'X must have non-zero variance.'};const covariance=sxy/(n-1),correlation=syy===0?0:sxy/Math.sqrt(sxx*syy),slope=sxy/sxx,intercept=my-slope*mx,predicted=(v:number)=>intercept+slope*v,residuals=y.map((v,i)=>v-predicted(x[i])),sse=residuals.reduce((a,b)=>a+b*b,0),sst=syy,ssr=syy-sse,rSquared=syy===0?1:1-sse/syy;const standardErrorEstimate=n>2?Math.sqrt(sse/(n-2)):null;const slopeStandardError=standardErrorEstimate===null?null:standardErrorEstimate/Math.sqrt(sxx);const slopeTStatistic=slopeStandardError===null||slopeStandardError===0?null:slope/slopeStandardError;return{n,meanX:mx,meanY:my,covariance,correlation,slope,intercept,predicted,residuals,sse,sst,ssr,rSquared,standardErrorEstimate,slopeStandardError,slopeTStatistic}}
export function parsePairs(xText:string,yText:string){const parse=(s:string)=>s.split(',').map(v=>v.trim()).map(v=>v===''?NaN:Number(v));const x=parse(xText),y=parse(yText);return simpleRegression(x,y)}

export type RegressionInterval={estimate:number;standardError:number;margin:number;lower:number;upper:number};

/** Interval for the conditional mean or one future observation at x0. */
export function regressionInterval(result:RegressionResult,xValues:number[],x0:number,criticalT:number,kind:'mean'|'prediction'='prediction'):RegressionInterval|{error:string}{
 if(xValues.length!==result.n||!Number.isFinite(x0)||!Number.isFinite(criticalT)||criticalT<=0)return{error:'Valid X data, prediction value, and positive critical t are required.'};
 if(result.standardErrorEstimate===null)return{error:'At least three observations are required for an interval.'};
 const sxx=xValues.reduce((sum,x)=>sum+(x-result.meanX)**2,0);
 if(sxx===0)return{error:'X must have non-zero variance.'};
 const leverage=1/result.n+(x0-result.meanX)**2/sxx;
 const standardError=result.standardErrorEstimate*Math.sqrt(leverage+(kind==='prediction'?1:0));
 const estimate=result.predicted(x0),margin=criticalT*standardError;
 return{estimate,standardError,margin,lower:estimate-margin,upper:estimate+margin};
}

export function capmRegression(assetReturns:number[],marketReturns:number[],riskFreeRates:number[]|number){
 const rf=typeof riskFreeRates==='number'?assetReturns.map(()=>riskFreeRates):riskFreeRates;
 if(rf.length!==assetReturns.length)return{error:'Risk-free rates must align with returns.'};
 return simpleRegression(marketReturns.map((v,i)=>v-rf[i]),assetReturns.map((v,i)=>v-rf[i]));
}

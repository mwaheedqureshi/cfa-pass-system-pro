
import type {Topic} from '../data/types';
export const topics:Topic[]=[
{id:'quantitative-methods',title:'Quantitative Methods',description:'Returns, financial mathematics, probability, inference, correlation, and regression.',lessonCount:12,status:'available'},
{id:'economics',title:'Economics',description:'Microeconomics, macroeconomics, and international trade.',lessonCount:8,status:'available'},
{id:'corporate-issuers',title:'Corporate Issuers',description:'Governance, capital budgeting, and financing decisions.',lessonCount:0,status:'pending'},
{id:'financial-statement-analysis',title:'Financial Statement Analysis',description:'Financial reporting and analytical techniques.',lessonCount:0,status:'pending'},
{id:'equity-investments',title:'Equity Investments',description:'Markets, industries, and equity valuation.',lessonCount:0,status:'pending'},
{id:'fixed-income',title:'Fixed Income',description:'Bond features, valuation, and risk.',lessonCount:0,status:'pending'},
{id:'derivatives',title:'Derivatives',description:'Forwards, futures, swaps, and options.',lessonCount:0,status:'pending'},
{id:'alternative-investments',title:'Alternative Investments',description:'Real estate, private capital, and commodities.',lessonCount:0,status:'pending'},
{id:'portfolio-management',title:'Portfolio Management',description:'Portfolio risk, return, and planning.',lessonCount:0,status:'pending'},
{id:'ethical-professional-standards',title:'Ethical and Professional Standards',description:'Ethical decision-making and professional conduct.',lessonCount:0,status:'pending'}];
export const getTopic=(id:string)=>topics.find(t=>t.id===id);

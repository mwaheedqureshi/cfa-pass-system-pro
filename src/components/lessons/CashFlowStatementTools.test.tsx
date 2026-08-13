import {describe,expect,it} from 'vitest';
import {calculateIndirectCfo} from './FinancialStatementLinkageExplorer';
import {classification,convertToDirect} from './DirectIndirectCashFlowTrainer';
describe('FSA LM4 cash-flow tools',()=>{
 it('reproduces the indirect worked example',()=>expect(calculateIndirectCfo({netIncome:40,depreciation:8,gainOnSale:0,receivablesChange:5,inventoryChange:-3,payablesChange:2})).toBe(48));
 it('reproduces the direct conversion worked example',()=>expect(convertToDirect({revenue:100,receivablesChange:6,cogs:55,inventoryChange:4,payablesChange:3,wageExpense:18,wagesPayableChange:-1,otherCashPayments:7})).toEqual({customerCash:94,purchases:59,supplierCash:56,employeeCash:19,cfo:12}));
 it('classifies IFRS and US GAAP items',()=>{expect(classification('interest-paid','IFRS')).toBe('Operating or financing');expect(classification('interest-paid','US GAAP')).toBe('Operating');expect(classification('dividends-paid','US GAAP')).toBe('Financing')});
});

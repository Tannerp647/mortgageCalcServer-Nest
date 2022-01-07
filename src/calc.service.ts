import { Injectable } from '@nestjs/common';
import { Output } from './calc.output';

@Injectable()
export class CalcService {
  //output: Output[] = [];

  calcNums(loanTerm: number, loanAmount: number, interestRate: number) {
    const loanMonths = loanTerm * 12;
    const interestRateDecimal = interestRate / 100 / 12;
    const interestRatePlusOne = interestRateDecimal + 1;
    const calcOne = 1 - Math.pow(interestRatePlusOne, - loanMonths);
    const calcTwo = interestRateDecimal / calcOne;
    const monthlyPayment = calcTwo * loanAmount;
    //const annualPayment0interest = loanAmount / loanTerm;
    const totalInterest = (monthlyPayment * loanMonths) - loanAmount;
    const annualPayment =  monthlyPayment * 12;
    const totalPayment = monthlyPayment * loanMonths;

    const finishedCalc = new Output(monthlyPayment, totalPayment, totalInterest, annualPayment);
    //this.output.push(finishedCalc);
    return finishedCalc;
  }
};
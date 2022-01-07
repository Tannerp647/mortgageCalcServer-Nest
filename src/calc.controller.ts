import { Controller, Get, Post, Body } from '@nestjs/common';
import { CalcService } from './calc.service';
import { Output } from './calc.output';


@Controller('calculate-mortgage')
export class CalculateMortgageController {
    constructor(public calcService: CalcService) {}

    @Post()
        calculateMortgage(
          @Body() body: {loanTerm: number, loanAmount: number, interestRate: number}
        ): Output {
          console.log(body);
    return this.calcService.calcNums(body.loanTerm, body.loanAmount, body.interestRate);
  }
}
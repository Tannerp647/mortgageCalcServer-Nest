import { Module } from '@nestjs/common';
import { CalculateMortgageController } from './calc.controller';
import { CalcService } from './calc.service';



@Module({
  imports: [],
  controllers: [CalculateMortgageController],
  providers: [CalcService],
})
export class CalcModule {}
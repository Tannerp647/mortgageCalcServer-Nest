import { NestFactory } from '@nestjs/core';
//import { AppModule } from './app.module';
import { CalcModule } from './calc.module'

async function bootstrap() {
  const app = await NestFactory.create(CalcModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

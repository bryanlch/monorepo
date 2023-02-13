import { NestFactory } from '@nestjs/core';
import { SecurityAppModule } from './security-app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  //const app = await NestFactory.create(SecurityAppModule);
  //await app.listen(3040);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SecurityAppModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();


}
bootstrap();



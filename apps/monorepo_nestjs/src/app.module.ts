import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'SECURITY_SERVICE', transport: Transport.TCP },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { SecurityAppController } from './controller/security-app.controller';
import { SecurityAppService } from './service/security-app.service';

@Module({
  imports: [],
  controllers: [SecurityAppController],
  providers: [SecurityAppService],
})
export class SecurityAppModule { }

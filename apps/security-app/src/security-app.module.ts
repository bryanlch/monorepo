import { Module } from '@nestjs/common';
import { SecurityAppController } from './security-app.controller';
import { SecurityAppService } from './security-app.service';

@Module({
  imports: [],
  controllers: [SecurityAppController],
  providers: [SecurityAppService],
})
export class SecurityAppModule {}

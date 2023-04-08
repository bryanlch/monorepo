import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/db/prisma.module';
import { GuaranteeService } from './guarantee.service';
import { GuaranteesController } from './guarantee.controller';

@Module({
  imports: [PrismaModule],
  controllers: [GuaranteesController],
  providers: [GuaranteeService],
})
export class GuaranteeModule {}
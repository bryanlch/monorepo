import { PrismaClient } from '@prisma/client';
import { Injectable, Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';

@Injectable()
export class PrismaService extends PrismaClient {}

@Module({
  imports: [PrismaModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DbModule {}

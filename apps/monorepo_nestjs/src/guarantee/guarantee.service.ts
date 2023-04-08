import { Injectable } from '@nestjs/common';
import { Prisma, guarantee } from '@prisma/client';
import { PrismaService } from '../prisma/db/db.service';

@Injectable()
export class GuaranteeService {
  constructor(private prisma: PrismaService) {}

  async createguarantee(data: Prisma.guaranteeCreateInput): Promise<guarantee> {
    return this.prisma.client.guarantee.create({ data });
  }

  async getAllguarantees(): Promise<guarantee[]> {
    return this.prisma.client.guarantee.findMany();
  }

  async getguaranteeById(id: number): Promise<guarantee> {
    return this.prisma.client.guarantee.findUnique({ where: { id } });
  }

  async updateguarantee(id: number, data: Prisma.guaranteeUpdateInput): Promise<guarantee> {
    return this.prisma.client.guarantee.update({ where: { id }, data });
  }

  async deleteguarantee(id: number): Promise<guarantee> {
    return this.prisma.client.guarantee.delete({ where: { id } });
  }
}



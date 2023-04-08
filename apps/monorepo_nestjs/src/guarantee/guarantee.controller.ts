import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateGuaranteeDto } from './dto/create-guarantee.dto';
import { UpdateGuaranteeDto } from './dto/update-guarantee.dto';
import { GuaranteeService } from './guarantee.service';

@Controller('guarantees')
export class GuaranteesController {
  constructor(private guaranteesService: GuaranteeService) {}

  @Get()
  async getAllguarantees() {
    return this.guaranteesService.getAllguarantees();
  }

  @Get(':id')
  async getguaranteeById(@Param('id') id: number) {
    return this.guaranteesService.getguaranteeById(id);
  }

  @Post()
  async createguarantee(@Body() createGuaranteeDto: CreateGuaranteeDto) {
    return this.guaranteesService.createguarantee(createGuaranteeDto);
  }

  @Put(':id')
  async updateguarantee(@Param('id') id: number, @Body() updateGuaranteeDto: UpdateGuaranteeDto) {
    return this.guaranteesService.updateguarantee(id, updateGuaranteeDto);
  }

  @Delete(':id')
  async deleteguarantee(@Param('id') id: number) {
    return this.guaranteesService.deleteguarantee(id);
  }
}

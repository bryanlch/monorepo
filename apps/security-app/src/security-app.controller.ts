import { Controller, Get } from '@nestjs/common';
import { SecurityAppService } from './security-app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class SecurityAppController {
  constructor(private readonly securityAppService: SecurityAppService) { }

  @Get()
  getHello(): string {
    return this.securityAppService.getHello();
  }

  @EventPattern('new_user')
  handleUserCreated(data: any) {
    // business logic
    console.log(`Data entrante`, data);
  }


}

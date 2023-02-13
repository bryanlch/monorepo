import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  //'/api/security/user/new'
  @Post()
  newUser(@Body() body: any): string {
    console.log(`Here `);
    return this.appService.newUser(body);
  }
}

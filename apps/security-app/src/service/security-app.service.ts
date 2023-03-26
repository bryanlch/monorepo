import { Injectable } from '@nestjs/common';

@Injectable()
export class SecurityAppService {
  getHello(): string {
    return 'Hello World! I am microservice security';
  }
}

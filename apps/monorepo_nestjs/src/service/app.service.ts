import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(
    @Inject('SECURITY_SERVICE') private clientSecurity: ClientProxy,
  ) { }

  getHello(): string {
    return 'Hello World! I am the microservice main';
  }

  newUser(user: any) {
    this.clientSecurity.emit('new_user', user)
    return `send_queue=>${user}`
  }
}

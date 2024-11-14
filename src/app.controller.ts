import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('check')
  getHello(): string {
    return 'Hello World!';
  }
}

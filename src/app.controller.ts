import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  getHelloById(): string {
    return this.appService.getHelloById();
  }

  @Post()
  createHello(): string {
    return this.appService.createHello();
  }

  @Put(':id')
  updateHello(
    @Param('id') id:string
  ): string {
    return this.appService.updateHello(id);
  }

  @Delete()
  deleteHello(): string {
    return this.appService.deleteHello();
  }

}

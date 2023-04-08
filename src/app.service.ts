import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Insafee Online Store | Powered by NestJs';
  }
}

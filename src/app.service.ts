import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Get all information';
  }

  getHelloById(): string {
    return 'Get specific hello';
  }

  createHello(): string {
    return 'Inserted';
  }

  updateHello(id): string {
    return 'Updated'+id;
  }

  deleteHello(): string {
    return 'Deleted';
  }
}

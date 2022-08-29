import { Injectable, Render } from '@nestjs/common';
import { WsResponse } from '@nestjs/websockets';
import { EventsGateway } from './socket/event.gateway';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

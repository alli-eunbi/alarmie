import { Injectable, Render } from '@nestjs/common';
import { WsResponse } from '@nestjs/websockets';

@Injectable()
export class EventsService {

  enterChat(data) {
    console.log(data, "?")
    return 
  }
}

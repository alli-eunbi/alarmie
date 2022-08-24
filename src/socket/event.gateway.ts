import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway{
  @WebSocketServer()
  server: Server;

    @SubscribeMessage('message')
    handleEvent(@MessageBody() data: string): void {
      this.server.emit('message', data)
  }
}
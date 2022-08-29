import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Socket } from 'dgram';
import { Server } from 'socket.io';

@WebSocketGateway(8080, { cors: true})
export class EventsGateway{
  @WebSocketServer()
  server: Server;
 
 
   @SubscribeMessage("events")
   handleEvent(
    @ConnectedSocket() client : Socket, 
    @MessageBody() data: string
    ) {
    const message = data
    const event = "events";
    return {event, message};
   }
   
}
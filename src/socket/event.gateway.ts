import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(8080, { cors: true, path:"/chat"})
export class EventsGateway{
  @WebSocketServer()
  server: Server;
 
 
   @SubscribeMessage("events")
   handleEvent(client, data: unknown): WsResponse<unknown> {
    console.log(data)
    const event = "events";
    return {event, data};
   }
   
}
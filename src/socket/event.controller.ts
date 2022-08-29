import { Controller, Get, Res, Render } from '@nestjs/common';
import { Response } from 'express';
import { EventsGateway } from './event.gateway';
import { EventsService } from './event.service';

@Controller()
export class EventsController{
    constructor(
      private readonly eventsGateway : EventsGateway,
      private readonly eventsService : EventsService   
      ) {}

    @Get("/chat")
    @Render('index')
    enterChat(@Res() res:Response) {
        this.eventsGateway.server
        const data = this.eventsGateway.handleEvent
        this.eventsService.enterChat(data)
        return {message : data}
      }
}

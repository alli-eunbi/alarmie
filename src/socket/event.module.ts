import { Controller, Module } from '@nestjs/common';
import { EventsController } from './event.controller';
import { EventsGateway } from './event.gateway';
import { EventsService } from './event.service';

@Module({
    providers: [EventsGateway, EventsService],
    controllers: [EventsController],
  })
  export class EventsModule {}
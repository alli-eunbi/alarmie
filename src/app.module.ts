import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsGateway } from './socket/event.gateway';
import { EventsModule } from './socket/event.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'example',
      entities: [],
      synchronize: true,
    }),EventsModule
  ],
  controllers: [AppController],
  providers: [AppService, EventsModule],

})
export class AppModule {}

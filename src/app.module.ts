import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import "./env.ts"

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABADATABASE_PASSWORDSE_HOST,
      database: process.env.DATABASE_DATABASE_NAME,
      entities: [],
      synchronize: true,
      keepConnectionAlive: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}

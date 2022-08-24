// import { Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
// import { AlarmService } from './alarm.service';
// import { Request } from 'express';

// @Controller()
// export class AlarmController {
//   constructor(private readonly usersService: AlarmService) {}

//   @Get("/alarm/:id")
//   findAlarm(@Param('id') id:string) {
//     return this.usersService.findOne(id)
//   }

//   @Post("/alarm/:id")
//   saveAlarm(@Param('id') id:string) {
//     return this.usersService.saveOne(id)
//   }

//   @Put("/alarm/:id")
//   updateAlarm(@Param('id') id:string) {
//     return this.usersService.updateOne(id)
//   }

//   @Delete("/alarm/:id")
//   deleteAlarm(@Param('id') id:string) {
//     return this.usersService.deleteOne(id)
//   }
// }

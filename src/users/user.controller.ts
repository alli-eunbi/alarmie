import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from 'express';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findOne(@Param('id') id:string) {
    return this.usersService.findOne(id)
  }
}

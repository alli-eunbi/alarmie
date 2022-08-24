// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Alarm } from '../alarm/alarm.entity';

// @Injectable()
// export class AlarmService {
//   constructor(
//     @InjectRepository(Alarm)
//     private AlarmRepository: Repository<Alarm>,
//   ) {}

//   findAll(): Promise<Alarm[]> {
//     return this.AlarmRepository.find();
//   }

//   findOne(id: string): Promise<Alarm> {
//     return this.AlarmRepository.findOneBy({ id });
//   }

//   async saveAlarm(id: string): Promise<Alarm> {
//     return this.AlarmRepository.save({ id });
//   }
  
//   async remove(id: string): Promise<void> {
//     await this.AlarmRepository.delete(id);
//   }
// }
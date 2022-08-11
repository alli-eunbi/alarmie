
import { User } from 'src/users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Alarm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hour: number;

  @Column()
  minute: number;
  
  @ManyToOne(
    (type) => User,
    (User) => User.id,
  )
  user_id: User;

}
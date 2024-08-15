import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum RolesEnum {
  USER = 'users',
  ADMIN = 'admin',
}

@Entity()
export class UsersModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    default: RolesEnum.USER,
  })
  RolesEnum: RolesEnum;
}

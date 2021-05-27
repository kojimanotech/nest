import { Injectable } from '@nestjs/common';
import {
  getRepository,
  InsertResult,
  UpdateResult,
  DeleteResult,
} from 'typeorm';
import { Users } from '../entities/users.entity';
import { requestUserDto } from './dto/users.request';
// import { base64 } from 'base-64';
// import { utf8 } from 'utf8';

export type User = any;
@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'Y2hhbmdlbWU=',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async getUsers(): Promise<Users[]> {
    return getRepository(Users).find();
  }

  async getUser(userId: number): Promise<Users[]> {
    return getRepository(Users).find({ id: userId });
  }

  async craeteUser(user: requestUserDto): Promise<InsertResult> {
    return getRepository(Users).insert(user);
  }

  async updateUser(
    userId: number,
    user: requestUserDto,
  ): Promise<UpdateResult> {
    return getRepository(Users).update(userId, user);
  }
  async deleteUser(userId: number): Promise<DeleteResult> {
    return getRepository(Users).delete({ id: userId });
  }
}

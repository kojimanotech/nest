import { Injectable } from '@nestjs/common';
import {
  getRepository,
  InsertResult,
  UpdateResult,
  DeleteResult,
} from 'typeorm';
import { Users } from '../entities/users.entity';
import { requestUserDto } from './dto/users.request';

@Injectable()
export class UsersService {
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

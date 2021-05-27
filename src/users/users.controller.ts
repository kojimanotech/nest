import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
} from '@nestjs/common';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { UsersService } from './users.service';
import { Users } from '../entities/users.entity';
import { requestUserDto } from './dto/users.request';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<Users[]> {
    return this.usersService.getUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<Users[]> {
    return this.usersService.getUser(Number(id));
  }

  @Post()
  async createUser(@Body() user: requestUserDto): Promise<InsertResult> {
    return this.usersService.craeteUser(user);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: requestUserDto,
  ): Promise<UpdateResult> {
    return this.usersService.updateUser(Number(id), user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<DeleteResult> {
    return this.usersService.deleteUser(Number(id));
  }
}

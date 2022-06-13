import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService) {}

  @ApiOperation({summary: 'Получение всех пользователей'})
  @ApiResponse({status: 200, type: [User]})
  // @UseGuards(JwtAuthGuard)
  @Get()
  public getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @ApiOperation({summary: 'Получение пользователя по id'})
  @ApiResponse({status: 200, type: User})
  // @UseGuards(JwtAuthGuard)
  @Get('/user/:id')
  public getUserById (@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }

  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status: 200, type: User})
  // @UseGuards(JwtAuthGuard)
  @Post('/create-user')
  public createUser(@Body() userDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({summary: 'Удаление пользователя по id'})
  @ApiResponse({status: 200, type: User})
  // @UseGuards(JwtAuthGuard)
  @Delete('/user/:id')
  public removeUserById(@Param('id') id: string): Promise<number> {
    return this.userService.removeUserById(id);
  }

}

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService) {}

  @ApiOperation({summary: 'Получение всех пользователей'})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  public getAllUsers() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({summary: 'Получение пользователя по id'})
  @ApiResponse({status: 200, type: User})
  @Get('/user/:id')
  public getUserById (@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status: 200, type: User})
  @Post('/create-user')
  public createUser(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({summary: 'Удаление пользователя по id'})
  @ApiResponse({status: 200, type: User})
  @Delete('/user/:id')
  public removeUserById(@Param('id') id: string) {
    return this.userService.removeUserById(id);
  }

}

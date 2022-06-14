import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { User } from '../users/users.model';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) { }

  @ApiOperation({summary: 'Авторизация'})
  @ApiResponse({status: 200, type: User})
  @Post('/login')
  public login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({summary: 'Регистрация'})
  @ApiResponse({status: 200, type: User})
  @Post('/registration')
  public registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}

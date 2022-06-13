import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'

import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/users.model';

@Injectable()
export class AuthService {

  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  public async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generationToken(user)
  }

  public async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);

    if (candidate) {
      throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({...userDto, password: hashPassword});

    return this.generationToken(user);
  }

  private async generationToken(user: User) {
    const payload = {
      email: user.email,
      id: user.id,
    }
    return {
      token: this.jwtService.sign(payload)
    }
  } 

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    const passwordEquals = await bcrypt.compare(userDto.password, user.password);

    if (user && passwordEquals) {
      return user;
    }

    throw new UnauthorizedException({message: "Не корректный email или пароль"})
  }
}

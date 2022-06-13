import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User) private userRepositoty: typeof User,
  ) {}

  public async createUser(userDto: CreateUserDto): Promise<User> {
    const user = await this.userRepositoty.create(userDto);
    return user;
  }

  public async getAllUsers(): Promise<User[]> {
    const users = await this.userRepositoty.findAll({include: {all: true}});
    return users;
  }

  public async getUserById(id: string): Promise<User> {
    const userId = await this.userRepositoty.findOne({where: {id}});
    return userId;
  }

  public async removeUserById(id: string): Promise<number> {
    const removeUserId = await this.userRepositoty.destroy({where: {id}});
    return removeUserId;
  }
  // TODO 
  public async updateUser(id: string, userDto: CreateUserDto): Promise<any> {
    const updateUser = await this.userRepositoty
    return updateUser;
  }

  public async getUserByEmail(email: string): Promise<User> {
    const user = await this.userRepositoty.findOne({where: {email}, include: {all: true}});
    return user;
  }
}

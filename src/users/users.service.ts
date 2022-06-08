import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { RolesService } from '../roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User) private userRepositoty: typeof User,
    private rolesService: RolesService,
  ) {}

  public async createUser(userDto: CreateUserDto): Promise<User> {
    const user = await this.userRepositoty.create(userDto);
    const role = await this.rolesService.getRoleByValue("USER");
    await user.$set('roles', [role.id])
    return user;
  }

  public async getAllUsers(): Promise<User[]> {
    const users = await this.userRepositoty.findAll({include: {all: true}});
    return users;
  }

  public async getUserById(id: string) {
    const userId = await this.userRepositoty.findOne({where: {id}});
    return userId;
  }

  public async removeUserById(id: string) {
    const removeUserId = await this.userRepositoty.destroy({where: {id}});
    return removeUserId;
  }
}

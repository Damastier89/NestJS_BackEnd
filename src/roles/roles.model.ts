import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";

import { User } from "../users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: string;

  @ApiProperty({example: 'ADMIN', description: 'Роль пользователя'})
  @Column({type: DataType.STRING, unique: true, allowNull: false}) // allowNull - поле не может быть пустым
  value: string;

  @ApiProperty({example: 'Администратор', description: 'Описание ролиы'})
  @Column({type: DataType.STRING, allowNull: false})
  description: string;

  // Связываем таблицу Users с Roles (связь => многие ко многим)
  @BelongsToMany(() => User, () => UserRoles) 
  users: User[];
}
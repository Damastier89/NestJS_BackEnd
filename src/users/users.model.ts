import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";

import { Post } from "../posts/posts.model";

interface UserCreationAttrs {
  email: string,
  password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({
    type: DataType.INTEGER, // поле является числовым
    unique: true, // поле всегда уникально
    autoIncrement: true, // с каждым последующим записыванием  в базу поле будет инкреминтироваться
    primaryKey: true, // первичный ключ
  })
  id: number;

  @ApiProperty({example: 'exemple@mail.com', description: 'email'})
  @Column({type: DataType.STRING, unique: true, allowNull: false}) // allowNull - поле не может быть пустым
  email: string;

  @ApiProperty({example: '12345', description: 'password'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @HasMany(() => Post)
  posts: Post[];
}
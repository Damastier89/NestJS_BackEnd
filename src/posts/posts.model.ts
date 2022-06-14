import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { User } from "../users/users.model";

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'Angular', description: 'Angular'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  title: string;

  @ApiProperty({example: 'Content', description: 'Content'})
  @Column({type: DataType.STRING, allowNull: false})
  content: string;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
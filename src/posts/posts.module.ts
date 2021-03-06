import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { User } from '../users/users.model';
import { Post } from './posts.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Post]),
  ],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule {}

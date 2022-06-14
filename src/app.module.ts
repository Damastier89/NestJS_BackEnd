import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/posts.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env` // путь до файла конфигурации с системными переменными. Задается динимичести при старте ("start:dev", "start" и т.д)
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres', // тип БД с которой работает приложение
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT), // порт по default
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Post], // модели для ДБ
      autoLoadModels: true, // для того чтобы sequelize создавал таблици, на основе заданных моделей 
    }),
    UsersModule,
    AuthModule,
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

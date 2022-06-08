import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

// import { ProductsModule } from './_test/products.module';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';

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
      models: [User, Role, UserRoles], // модели для ДБ
      autoLoadModels: true, // для того чтобы sequelize создавал таблици, на основе заданных моделей 
    }),
    UsersModule,
    RolesModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

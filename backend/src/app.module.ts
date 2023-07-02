import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrmConfig from './config/orm.config';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(OrmConfig)],
})
export class AppModule {}

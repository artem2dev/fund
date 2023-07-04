import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrmConfig from './config/orm.config';
import { AuthModule } from './modules/auth/auth.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(OrmConfig)],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}

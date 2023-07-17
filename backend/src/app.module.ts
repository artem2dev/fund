import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import OrmConfig from './config/orm.config';
import { AuthModule } from './modules/auth/auth.module';
import { MediaModule } from './modules/media/media.module';

@Module({
  imports: [AuthModule, MediaModule, TypeOrmModule.forRoot(OrmConfig)],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}

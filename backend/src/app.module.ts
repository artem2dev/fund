import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccessTokenStrategy } from './common/strategies/accessToken.strategy';
import OrmConfig from './config/orm.config';
import { AuthModule } from './modules/auth/auth.module';
import { MediaModule } from './modules/media/media.module';
import { NewModule } from './modules/news/new.module';

@Module({
  imports: [
    AuthModule,
    MediaModule,
    NewModule,
    TypeOrmModule.forRoot(OrmConfig),
  ],
  providers: [AppService, AccessTokenStrategy, JwtService],
  controllers: [AppController],
})
export class AppModule {}

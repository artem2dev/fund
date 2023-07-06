import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrmConfig from './config/orm.config';
import { AuthModule } from './modules/auth/auth.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'media'),
      renderPath: '/media',
    }),
    AuthModule, 
    TypeOrmModule.forRoot(OrmConfig)],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}

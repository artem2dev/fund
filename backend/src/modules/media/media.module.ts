import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { MediaController } from './media.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [],
  controllers: [MediaController],
})
export class MediaModule {}

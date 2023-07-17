import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { New } from 'src/entities/new.entity';
import { Repository } from 'typeorm';
import { CreateNewDto } from './create.new.dto';

@Injectable()
export class NewService {
  constructor(
    @InjectRepository(New)
    private newRepository: Repository<New>,
  ) {}

  async createNew(createNewDto: CreateNewDto) {
    return await this.newRepository.save(
      this.newRepository.create(createNewDto),
    );
  }

  async deleteNew(newId: string) {
    return await this.newRepository.delete(newId);
  }
}

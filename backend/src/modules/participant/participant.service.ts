import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Participant } from 'src/entities/participant.entity';
import { Repository } from 'typeorm';
import { CreateParticipantDto } from './create.participant.dto';
import { UpdateParticipantDto } from './update.participant.dto';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(Participant)
    private participantRepository: Repository<Participant>,
  ) {}

  async getParticipants() {
    return await this.participantRepository.find({
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async createParticipant(createParticipantDto: CreateParticipantDto) {
    return await this.participantRepository.save(
      this.participantRepository.create(createParticipantDto),
    );
  }

  async updateParticipant(updateParticipantDto: UpdateParticipantDto) {
    return await this.participantRepository.save(updateParticipantDto);
  }

  async deleteParticipant(id: string) {
    return await this.participantRepository.delete(id);
  }
}

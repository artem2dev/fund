import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { CreateNewDto } from './create.new.dto';
import { NewService } from './new.service';

@Controller('news')
@UseGuards(AccessTokenGuard)
export class NewController {
  constructor(private newService: NewService) {}

  @Get()
  async getNews() {
    return await this.newService.getNews();
  }

  @Get(':newId')
  async getNew(@Param('newId') newId: string) {
    return await this.newService.getNew(newId);
  }

  @Post()
  async createNew(@Body() createNewDto: CreateNewDto) {
    return await this.newService.createNew(createNewDto);
  }

  @Delete(':newId')
  async deleteNew(@Param('newId') newId: string) {
    return await this.newService.deleteNew(newId);
  }
}

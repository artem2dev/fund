import {
  Controller,
  Delete,
  Param,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { config } from 'src/config/app.config';

const { MEDIA_FOLDER_PATH } = config;

@Controller('media')
@UseGuards(AccessTokenGuard)
export class MediaController {
  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      storage: diskStorage({
        destination: '../media',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');

          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  upload(@UploadedFiles() files: any) {
    return files.length > 0 ? files.map((file: any) => file.filename) : [];
  }

  @Delete(':filename')
  async deletePicture(@Param('filename') filename: string) {
    fs.unlink(join(__dirname, MEDIA_FOLDER_PATH, filename), (err) => {
      if (err) {
        console.error(err);
        return err;
      }
    });
  }
}

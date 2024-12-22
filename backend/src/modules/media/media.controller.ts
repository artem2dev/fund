import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import * as fs from 'fs';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { config } from 'src/config/app.config';
const { MEDIA_FOLDER_PATH } = config;

export const deleteFiles = (files: string[]) => {
  files.forEach((filename) => {
    fs.unlink(join(__dirname, MEDIA_FOLDER_PATH, filename), (err) => {
      if (err) {
        console.error(err);
        return err;
      }
    });
  });
};

@Controller('media')
export class MediaController {
  @Post('upload')
  @UseGuards(AccessTokenGuard)
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      storage: diskStorage({
        destination: join(__dirname, MEDIA_FOLDER_PATH),
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

  @Get(':filename')
  async getPicture(@Param('filename') filename: string, @Res() res: Response) {
    const file = fs.createReadStream(
      join(__dirname, MEDIA_FOLDER_PATH, filename),
    );

    file.pipe(res);
  }

  @Delete(':filename')
  @UseGuards(AccessTokenGuard)
  async deletePicture(@Param('filename') filename: string) {
    fs.unlink(join(__dirname, MEDIA_FOLDER_PATH, filename), (err) => {
      if (err) {
        console.error(err);
        return err;
      }
    });
  }
}

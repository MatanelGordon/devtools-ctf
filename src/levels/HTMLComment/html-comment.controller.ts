import { Controller } from '@nestjs/common';
import { LevelController } from 'src/levels/core';

@Controller('html-comment')
export class HtmlCommentController extends LevelController {
  getLevel(): string {
    return '';
  }
}

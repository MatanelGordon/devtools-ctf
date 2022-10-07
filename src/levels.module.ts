import { Module } from '@nestjs/common';
import { BasicController, CssController } from './controllers';

@Module({
	controllers: [CssController, BasicController],
})
export class LevelsModule {}

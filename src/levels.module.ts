import { Module } from '@nestjs/common';
import { BasicController, InlineStyleController } from './controllers';

@Module({
	controllers: [InlineStyleController, BasicController],
})
export class LevelsModule {}

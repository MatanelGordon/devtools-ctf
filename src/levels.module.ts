import { Module } from '@nestjs/common';
import {
	BasicController,
	InlineStyleController,
	PreserveLogController,
} from './controllers';

@Module({
	controllers: [
		BasicController,
		InlineStyleController,
		PreserveLogController,
	],
})
export class LevelsModule {}

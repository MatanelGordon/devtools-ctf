import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LevelsModule } from './levels.module';

@Module({
	controllers: [AppController],
	providers: [AppService],
	imports: [LevelsModule],
})
export class AppModule {}

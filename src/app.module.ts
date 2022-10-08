import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LevelsModule } from './levels.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
	controllers: [AppController],
	providers: [AppService],
	imports: [
		LevelsModule,
		ServeStaticModule.forRoot({
			serveRoot: '/public',
			rootPath: path.join(__dirname, '..', 'public'),
		}),
	],
})
export class AppModule {}

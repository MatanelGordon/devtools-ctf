import * as path from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SourcesBasicController } from './controllers/sources-basic.controller';
import { BasicController } from '~/controllers/basic.controller';
import { InlineStyleController } from '~/controllers/inline-style.controller';
import { PreserveLogController } from '~/controllers/preserve-log.controller';
import { NetworkBasicController } from '~/controllers/network-basic.controller';
import { LocalstorageBasicController } from '~/controllers/localstorage-basic.controller';
import { DebuggerController } from './controllers/debugger.controller';

@Module({
	controllers: [
		AppController,
		BasicController,
		InlineStyleController,
		PreserveLogController,
		NetworkBasicController,
		SourcesBasicController,
		LocalstorageBasicController,
		DebuggerController,
	],
	providers: [AppService],
	imports: [
		ServeStaticModule.forRoot({
			serveRoot: '/public',
			rootPath: path.join(__dirname, '..', 'public'),
		}),
	],
})
export class AppModule {}

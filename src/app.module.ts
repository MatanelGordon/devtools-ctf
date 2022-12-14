import * as path from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SourcesBasicController } from './controllers/sources-basic.controller';
import { BasicController } from '~/controllers/basic.controller';
import { InlineStyleController } from '~/controllers/inline-style.controller';
import { PreserveLogController } from '~/controllers/preserve-log.controller';
import { NetworkBasicController } from '~/controllers/network-basic.controller';
import { LocalstorageBasicController } from '~/controllers/localstorage-basic.controller';
import { DebuggerController } from './controllers/debugger.controller';
import { CookieBasicController } from './controllers/cookie-basic.controller';
import { IndexedDBBasicController } from './controllers/indexedDB-basic.controller';
import { UserAgentController } from './controllers/user-agent.controller';
import { ElementsManipulationController } from './controllers/elements-manipulation.controller';
import { PerformanceController } from './controllers/performance.controller';

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
		CookieBasicController,
		IndexedDBBasicController,
		UserAgentController,
		ElementsManipulationController,
		PerformanceController,
	],
	providers: [],
	imports: [
		ServeStaticModule.forRoot({
			serveRoot: '/public',
			rootPath: path.join(__dirname, '..', 'public'),
		}),
	],
})
export class AppModule {}

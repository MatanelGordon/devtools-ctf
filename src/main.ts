import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { LoggerInterceptor } from './interceptors';
import { MainFilter } from './filters';
import config from '~/config';
import { createHandlebarsInstance } from '~/logic/createHandlebarsInstance';

const PAGES_PATH = path.join(__dirname, 'pages');

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter()
	);

	app.useGlobalInterceptors(new LoggerInterceptor());

	app.useGlobalFilters(new MainFilter());

	const handlebars = await createHandlebarsInstance({
		partialsDir: 'core',
		rootDir: PAGES_PATH,
	});

	app.setViewEngine({
		engine: {
			handlebars,
		},
		templates: PAGES_PATH,
	});

	await app.listen(config.server.port);
	console.log('Listening on port 3000');
}

void bootstrap();

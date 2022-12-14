import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifyCookie from '@fastify/cookie';
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

	await app.register(fastifyCookie, {
		secret: config.server.cookieSecret,
	});

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

	await app.listen(config.server.port, '0.0.0.0');
	console.log(`Listening on port ${config.server.port}`);
}

void bootstrap();

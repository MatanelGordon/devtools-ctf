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
import handlebars = require('handlebars');

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter()
	);
	app.useGlobalInterceptors(new LoggerInterceptor());

	app.useGlobalFilters(new MainFilter());

	app.setViewEngine({
		engine: {
			handlebars,
		},
		templates: path.join(__dirname, 'pages'),
	});

	await app.listen(config.server.port);
	console.log('Listening on port 3000');
}

void bootstrap();

import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { LoggerInterceptor } from './interceptors';
import { MainFilter } from './filters';

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter()
	);

	app.useGlobalFilters(new MainFilter());
	app.useGlobalInterceptors(new LoggerInterceptor());
	console.log('Listening on port 3000');
	await app.listen(3000);
}

void bootstrap();

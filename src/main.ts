import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerInterceptor } from './interceptors';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalInterceptors(new LoggerInterceptor());
	console.log('Listening on port 3000');
	await app.listen(3000);
}
void bootstrap();

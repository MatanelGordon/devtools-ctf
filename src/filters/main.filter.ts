import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException,
	HttpStatus,
} from '@nestjs/common';

@Catch()
export class MainFilter implements ExceptionFilter {
	catch(exception: unknown, host: ArgumentsHost): void {
		// In certain situations `httpAdapter` might not be available in the
		// constructor method, thus we should resolve it here.
		const ctx = host.switchToHttp();
		const req = ctx.getRequest();
		const res = ctx.getResponse();
		console.log(exception);
		const httpStatus =
			exception instanceof HttpException
				? exception.getStatus()
				: HttpStatus.INTERNAL_SERVER_ERROR;

		const responseBody = {
			statusCode: httpStatus,
			timestamp: new Date().toISOString(),
			path: req.url,
		};

		res.status(httpStatus).send(responseBody);
	}
}

import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable, tap } from 'rxjs';
import chalk = require('chalk');

const METHOD_STR_COLOR = {
	GET: chalk.cyan,
	POST: chalk.blue,
};

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
	private static getStatusCodeColor(statusCode: number) {
		return statusCode >= 400 ? chalk.red : chalk.green;
	}

	private static getElapsedTimeColor(elapsedTime) {
		if (elapsedTime < 1000) {
			return chalk.hex('#58ff5a');
		} else if (elapsedTime < 3000) {
			return chalk.hex('#d68819');
		} else {
			return chalk.red;
		}
	}

	private static createStatusCodeStr(code: number) {
		return LoggerInterceptor.getStatusCodeColor(code)`(status: ${code})`;
	}

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		try {
			const ctx = context.switchToHttp();
			const req = ctx.getRequest();
			const res = ctx.getResponse();
			const path = req.url;
			const code = res.statusCode;
			const method: string = req.method.toUpperCase();
			const methodStr = METHOD_STR_COLOR[method]`[${method}]`;
			const pathStr = chalk.green(`"${path}"`);
			const now = new Date().getTime();

			return next.handle().pipe(
				tap(() => {
					const statusCodeStr =
						LoggerInterceptor.createStatusCodeStr(code);
					const elapsedTime = new Date().getTime() - now;
					const timeColor =
						LoggerInterceptor.getElapsedTimeColor(elapsedTime);
					const timeStr = timeColor`(time: ${elapsedTime}ms)`;
					console.log(
						`${methodStr} ${pathStr} ${statusCodeStr} ${timeStr}`
					);
				}),
				catchError(i => {
					const statusCodeStr = LoggerInterceptor.createStatusCodeStr(
						i.status
					);
					const errorStr = chalk.red`(error: ${i.response})`;
					console.log(
						`${methodStr} ${pathStr} ${statusCodeStr} ${errorStr}`
					);
					throw i;
				})
			);
		} catch (e) {
			console.error('LoggerInterceptor failed:', e);
			throw e;
		}
	}
}

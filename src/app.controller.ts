import { Controller, Get, HttpException, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello() {
		return this.appService.getHello();
	}

	@Get('/long')
	async getLongHello(): Promise<string> {
		await new Promise<void>(res =>
			setTimeout(() => {
				res();
			}, 4000)
		);
		return this.appService.getHello();
	}

	@Get('/html')
	@Render('test.hbs')
	async getHTML() {
		return { flag: 'matanel' };
	}

	@Get('/error')
	getError() {
		throw new HttpException('I AM A TEA POT', 417);
	}
}

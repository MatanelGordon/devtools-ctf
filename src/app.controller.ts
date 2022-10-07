import { Controller, Get, Header, HttpException, Render } from '@nestjs/common';
import { AppService } from './app.service';
import * as path from 'path';
import { readFile } from 'fs/promises';
import * as pug from 'pug';

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
	// @Header('Content-Type', 'text/html')
	@Render('test.pug')
	async getHTML() {
		// const filePath = path.resolve('src', './test.pug');
		// const pugFile = await readFile(filePath);
		// const pugFileContent = pugFile.toString();
		// const toHtml = pug.render(pugFileContent, {
		// 	self: true,
		// 	flag: 'matanel',
		// });
		// return toHtml;

		return { flag: 'matanel' };
	}

	@Get('/error')
	getError() {
		throw new HttpException('I AM A TEA POT', 417);
	}
}

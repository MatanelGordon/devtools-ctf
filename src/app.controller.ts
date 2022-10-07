import { Controller, Get, Header, HttpException, Res } from "@nestjs/common";
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
	@Header('Content-Type', 'text/html')
	getHTML() {
		return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!---#FLAG_INSERT-->
    <div>where is the flag?</div>
</body>
</html>
		`
	}

	@Get('/error')
	getError() {
		throw new HttpException('I AM A TEA POT', 417);
	}
}

import { Controller, Get, Render, Res } from '@nestjs/common';
import config from '~/config';

const levelConfig = config.levels.cookieBasic;

@Controller(levelConfig.url)
export class CookieBasicController {
	@Get()
	@Render('cookie-basics.hbs')
	render(@Res() res) {
		res.setCookie('challenge-flag', levelConfig.flag, {
			encode(val: string): string {
				return val;
			},
			maxAge: 3_600_000,
		});
		return {};
	}
}

import { Controller, Get, Render, Res } from '@nestjs/common';
import config from '~/config';

const levelConfig = config.levels.cookieBasic;

@Controller(levelConfig.url)
export class CookieBasicController {
	@Get()
	@Render('cookie-basics.hbs')
	render(@Res() res) {
		res.setCookie('is this the flag?', levelConfig.flag);
		return {};
	}
}

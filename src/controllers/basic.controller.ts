import { Controller, Get, Render } from '@nestjs/common';
import config from '~/config';

const levelConfig = config.levels.basic;

@Controller(levelConfig.url)
export class BasicController {
	@Get()
	@Render('basic.hbs')
	render() {
		return { flag: levelConfig.flag };
	}
}

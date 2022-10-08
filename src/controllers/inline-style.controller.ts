import { Controller, Get, Render } from '@nestjs/common';
import config from '~/config';

const levelConfig = config.levels.inlineStyle;

@Controller(levelConfig.url)
export class InlineStyleController {
	@Get()
	@Render('inline-style.hbs')
	render() {
		return { flag: levelConfig.flag };
	}
}

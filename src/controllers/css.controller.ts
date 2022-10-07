import { Controller, Get, Render } from '@nestjs/common';
import config from './config';
import { createFlag } from '~/utils';

@Controller(config.css.url)
export class CssController {
	@Get()
	@Render('css.pug')
	render() {
		return { flag: createFlag('OkNiceOne') };
	}
}

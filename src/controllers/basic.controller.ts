import { Controller, Get, Render } from '@nestjs/common';
import config from './config';
import { createFlag } from '~/utils';

@Controller(config.basic.url)
export class BasicController {
	@Get()
	@Render('basic.pug')
	render() {
		return { flag: createFlag('Matanel') };
	}
}

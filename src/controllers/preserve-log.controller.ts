import { Controller, Get, Render } from '@nestjs/common';
import config from '~/config';

const levelConfig = config.levels.preserveLog;

@Controller(levelConfig.url)
export class PreserveLogController {
	@Get()
	@Render('preserve-log.hbs')
	render() {
		return {
			flag: levelConfig.flag,
			flagUrl: `${levelConfig.url}/flag`,
		};
	}

	@Get('/flag')
	getFlag() {
		return {
			flag: levelConfig.flag,
		};
	}
}

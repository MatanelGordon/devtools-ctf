import { Controller, Get, Header, HttpCode, Render } from '@nestjs/common';
import config from '~/config';

const levelConfig = config.levels.preserveLog;
const flagRoute = 'flag';

@Controller(levelConfig.url)
export class PreserveLogController {
	@Get()
	@Render('preserve-log.hbs')
	render() {
		return {
			flag: levelConfig.flag,
			flagUrl: `${levelConfig.url}/${flagRoute}`,
		};
	}

	@Get(flagRoute)
	@HttpCode(200)
	@Header('X-Flag', levelConfig.flag)
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	getFlag() {}
}

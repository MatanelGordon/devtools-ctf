import { Controller, Get, Render } from '@nestjs/common';
import config from '~/config';

const levelConfig = config.levels.networkBasic;
const flagRoute = 'flag';
@Controller(levelConfig.url)
export class NetworkBasicController {
	@Get()
	@Render('network-basic.hbs')
	render() {
		return {
			flagUrl: `${levelConfig.url}/${flagRoute}`,
		};
	}

	@Get(flagRoute)
	getFlag() {
		const flag = levelConfig.flag;
		return { flag };
	}
}

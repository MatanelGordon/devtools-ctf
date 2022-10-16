import { Controller, Get, Render, Req } from '@nestjs/common';
import { UAParser } from 'ua-parser-js';
import config from '~/config';

const levelConfig = config.levels.userAgentBasic;

@Controller(levelConfig.url)
export class UserAgentController {
	@Get()
	@Render('user-agent-basic.hbs')
	render(@Req() req) {
		const userAgent = new UAParser(req.headers['user-agent']).getResult();
		const isApple =
			(userAgent.device.vendor?.toUpperCase() ?? 'NONE') === 'APPLE';
		const isTablet =
			(userAgent.device.type?.toUpperCase() ?? 'NONE') === 'TABLET';

		return UserAgentController.determineContent(
			isApple,
			isTablet,
			levelConfig.flag
		);
	}

	private static determineContent(isApple, isTablet, flag) {
		if (isApple && !isTablet)
			return {
				content: 'OOPS! I meant apple tablets',
				flag: 'sorry...',
			};

		if (isApple && isTablet)
			return {
				content: 'Congratulations',
				flag,
			};

		return {
			content: 'This site works only on mobile',
			flag: 'tested on IPhones',
		};
	}
}

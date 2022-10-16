import { Controller, Get, Render } from '@nestjs/common';
import config from '~/config';

const levelConfig = config.levels.performance;
const even = levelConfig.flag
	.split('')
	.filter((_, i) => i % 2 === 0)
	.join('');
const odd = levelConfig.flag
	.split('')
	.filter((_, i) => i % 2 === 1)
	.join('');

@Controller(levelConfig.url)
export class PerformanceController {
	@Get()
	@Render('performance.hbs')
	render() {
		return {
			flag1: even,
			flag2: odd,
		};
	}
}

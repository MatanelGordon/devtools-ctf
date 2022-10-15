import { Controller, Get, Render } from '@nestjs/common';
import config from '~/config';
import { toBase64 } from '~/utils/toBase64';

const levelConfig = config.levels.indexedDbBasic;

@Controller(levelConfig.url)
export class IndexedDBBasicController {
	@Get()
	@Render('indexedDB-basic.hbs')
	render() {
		const flag = levelConfig.flag;
		const halfLen = (flag.length / 2) | 0;
		const part1 = encodeURIComponent(toBase64(flag.substring(0, halfLen)));
		const part2 = encodeURIComponent(toBase64(flag.substring(halfLen)));

		return {
			part1,
			part2,
		};
	}
}

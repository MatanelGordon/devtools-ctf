import { Controller, Get, Render } from '@nestjs/common';
import config from '~/config';

const levelConfig = config.levels.localStorageBasic;
const FLAG_PARTIALS = 5;
@Controller(levelConfig.url)
export class LocalstorageBasicController {
	@Get()
	@Render('localStorage-basic.hbs')
	render() {
		const encodedFlag = Buffer.from(levelConfig.flag, 'utf8').toString(
			'base64'
		);

		const size = encodedFlag.length / FLAG_PARTIALS;

		const flags = Object.fromEntries(
			new Array(FLAG_PARTIALS)
				.fill(null)
				.map((_, i) => [
					`flag${i + 1}`,
					encodedFlag.slice(i * size, (i + 1) * size),
				])
		);

		return {
			...flags,
			parts: FLAG_PARTIALS,
		};
	}
}

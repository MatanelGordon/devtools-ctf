import { Controller, Get, Render } from '@nestjs/common';
import config from '~/config';
import { toBase64 } from '~/utils/toBase64';
import { chunkParts } from '~/utils/chunkParts';

const levelConfig = config.levels.debugger;
const FLAG_PARTIALS = 3;

@Controller(levelConfig.url)
export class DebuggerController {
	@Get()
	@Render('debugger.hbs')
	render() {
		const encoded = toBase64(encodeURIComponent(`${levelConfig.url}/flag`));
		const chunks = chunkParts(encoded, FLAG_PARTIALS);
		const flags = Object.fromEntries(
			chunks.map((partial, i) => [`flag${i + 1}`, partial])
		);

		return {
			...flags,
		};
	}

	@Get('flag')
	getFlag() {
		return {
			flag: toBase64(levelConfig.flag),
		};
	}
}

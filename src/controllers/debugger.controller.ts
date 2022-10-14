import { Controller, Get, Param, Render } from '@nestjs/common';
import config from '~/config';
import { toBase64 } from '~/utils/toBase64';
import { chunkParts } from '~/utils/chunkParts';

const levelConfig = config.levels.debugger;
const FLAG_PARTIALS = (levelConfig.flag.length / 4) | 0;
const URL_PARTIALS = 5;
const b64Flag = encodeURIComponent(toBase64(levelConfig.flag));
const b64FlagChunks = chunkParts(b64Flag, FLAG_PARTIALS);
const b64url = encodeURIComponent(toBase64(levelConfig.url));
const b64UrlChunks = chunkParts(b64url, URL_PARTIALS);
@Controller(levelConfig.url)
export class DebuggerController {
	@Get()
	@Render('debugger.hbs')
	render() {
		const urls = Object.fromEntries(
			b64UrlChunks.map((b64, i) => [`url${i + 1}`, b64])
		);

		return {
			...urls,
		};
	}

	@Get(':id')
	getFlag(@Param('id') idStr: string) {
		return {
			flag: b64FlagChunks[+idStr],
			inc: +(+idStr < b64FlagChunks.length),
		};
	}
}

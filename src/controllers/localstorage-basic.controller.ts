import { Controller, Get, Render } from '@nestjs/common';
import config from '~/config';
import { toBase64 } from '~/utils/toBase64';
import { chunkParts } from '~/utils/chunkParts';

const levelConfig = config.levels.localStorageBasic;
const FLAG_PARTIALS = 5;

@Controller(levelConfig.url)
export class LocalstorageBasicController {
	@Get()
	@Render('localStorage-basic.hbs')
	render() {
		const encodedFlag = toBase64(levelConfig.flag);
		const chunks = chunkParts(encodedFlag, FLAG_PARTIALS);
		const flags = chunks.reduce(
			(acc, curr, index) => ({
				...acc,
				[`flag${index + 1}`]: curr,
			}),
			{}
		);

		return {
			...flags,
			parts: FLAG_PARTIALS,
		};
	}
}

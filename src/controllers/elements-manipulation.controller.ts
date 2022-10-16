import { Controller, Get, Render } from '@nestjs/common';
import config from '~/config';
import { toBase64 } from '~/utils/toBase64';
import { chunkParts } from '~/utils/chunkParts';

const levelConfig = config.levels.elementsManipulation;
const FLAG_PARTIALS = 3;
const encoded = encodeURIComponent(toBase64(levelConfig.flag));
const chunkedFlag = chunkParts(encoded, FLAG_PARTIALS);

@Controller(levelConfig.url)
export class ElementsManipulationController {
	@Get()
	@Render('elements-manipulation.hbs')
	render() {
		return Object.fromEntries(
			chunkedFlag.map((chunk, i) => [`flag${i + 1}`, chunk])
		);
	}
}

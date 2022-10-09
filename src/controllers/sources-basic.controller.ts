import {
	Controller,
	Get,
	Header,
	HttpCode,
	HttpStatus,
	Render,
} from '@nestjs/common';
import config from '~/config';

const levelConfig = config.levels.sourcesBasic;
const cssFileName = 'flag-file.css';

@Controller(levelConfig.url)
export class SourcesBasicController {
	@Get()
	@Render('sources-basic.hbs')
	render() {
		return {
			cssFilePath: `${levelConfig.url}/${cssFileName}`,
		};
	}

	@Get(cssFileName)
	@Header('Content-Type', 'text/css; charset=UTF-8')
	getFile() {
		return `
/* ${levelConfig.flag} */
body{
	background: crimson;
}
`;
	}
}

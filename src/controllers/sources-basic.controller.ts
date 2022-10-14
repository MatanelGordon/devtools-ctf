import { Controller, Get, Header, Render } from '@nestjs/common';
import config from '~/config';

const levelConfig = config.levels.sourcesBasic;
const cssFileName = 'styles.css';

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

import { createFlag, envWithDefault } from './utils';

const createLevelConfig = (
	name: string,
	defaults: { url: string; flag: string }
) => {
	const namePrefix = `${name.toUpperCase()}_LEVEL_`;

	return {
		url: envWithDefault(`${namePrefix}_URL`, defaults.url),
		flag: envWithDefault(`${namePrefix}_FLAG`, defaults.flag),
	};
};

export default {
	levels: {
		basic: createLevelConfig('BASIC', {
			url: 'level-02eaf04d',
			flag: createFlag('W3llD0ne'),
		}),
		inlineStyle: createLevelConfig('INLINE_STYLE', {
			url: 'level-ae4d020f',
			flag: createFlag('CssIsTricky'),
		}),
		preserveLog: createLevelConfig('PRESERVE_LOG', {
			url: 'level-ce5ed9ff',
			flag: createFlag('Y0uG0tM3'),
		}),
	},
	server: {
		port: envWithDefault<number>('PORT', 3000),
	},
} as const;

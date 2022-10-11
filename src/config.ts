import { createLevelConfig, envWithDefault } from './utils/config';
import { createFlag } from './logic/flagDecorator';

const config = {
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
		networkBasic: createLevelConfig('NETWORK_BASIC', {
			url: 'level-99606d6a',
			flag: createFlag('N3tW0rkB4S1CS'),
		}),
		sourcesBasic: createLevelConfig('SOURCES_BASIC', {
			url: 'level-9ad478b3',
			flag: createFlag('Y0ureAW1zardHarry'),
		}),
		localStorageBasic: createLevelConfig('LOCALSTORAGE_BASIC', {
			url: 'level-c231787c',
			flag: createFlag('L0calSt0rageIsAwesome'),
		}),
		debugger: createLevelConfig('CONSOLE_LOG', {
			url: 'level-b195d810',
			flag: createFlag('D3BUGG3R_M4$T3R'),
		}),
	},
	server: {
		port: +envWithDefault<number>('PORT', 3000),
		secretKey: envWithDefault('SECRET_KEY', 'SecretKeyIsGood!'),
		initialVector: envWithDefault('KEY_INITIAL_VECTOR', 'secretInitialVec'),
	},
} as const;

const key = config.server.secretKey;
if (key.length !== 16) {
	throw new Error('SECRET_KEY length must be 16 exactly');
}

export default config;

import { stripFlag } from './flagDecorator';

const PAD_START = 'encrypted{';
const PAD_END = '}';

export const encryptFlag = (flag: string) => {
	const flagContent = stripFlag(flag);
	
};

export const decryptFlag = (encryptedFlag: string) => {};

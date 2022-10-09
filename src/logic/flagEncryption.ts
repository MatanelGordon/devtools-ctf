import { stripFlag } from '@logic/flagDecorator';

const PAD_START = 'encrypted{';
const PAD_END = '}';

export const encryptFlag = (flag: string) => {
	const flagContent = stripFlag(flag);

	return ;
};

export const decryptFlag = (encryptedFlag: string) => {};

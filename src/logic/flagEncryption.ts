import { createFlag, Flag, stripFlag } from './flagDecorator';
import { decrypt, encrypt } from './aes';
import { addPadding, removePadding } from '~/utils/padding';

const PAD_START = 'flag-encrypted{';
const PAD_END = '}';

export const encryptFlag = (flag: Flag): string => {
	const flagContent = stripFlag(flag);
	const encrypted = encrypt(flagContent);
	return addPadding(encrypted, PAD_START, PAD_END);
};

export const decryptFlag = (encryptedFlag: string): Flag => {
	const flagContent = removePadding(encryptedFlag, PAD_START, PAD_END);
	const decrypted = decrypt(flagContent);
	return createFlag(decrypted);
};

export {
	PAD_START as FLAG_ENCRYPTION_PAD_START,
	PAD_END as FLAG_ENCRYPTION_PAD_END,
};

import { createFlag, isFlag } from '~/logic/flagDecorator';
import {
	decryptFlag,
	encryptFlag,
	FLAG_ENCRYPTION_PAD_END,
	FLAG_ENCRYPTION_PAD_START,
} from '~/logic/flagEncryption';

describe('flagEncryption', () => {
	it('should add padding', () => {
		const flag = createFlag('test');
		const encrypted = encryptFlag(flag);
		expect(encrypted).toMatch(FLAG_ENCRYPTION_PAD_START);
		expect(encrypted).toMatch(FLAG_ENCRYPTION_PAD_END);
	});

	it('should decorate to flag shape after decrypt', () => {
		const flag = createFlag('test');
		const encrypted = encryptFlag(flag);
		const decrypted = decryptFlag(encrypted);
		expect(isFlag(decrypted)).toBeTruthy();
	});

	it('should decrypt without mistakes', () => {
		const flag = createFlag('test');
		const encrypted = encryptFlag(flag);
		const decrypted = decryptFlag(encrypted);
		expect(decrypted).toEqual(flag);
	});
});

import { decrypt, encrypt } from '~/logic/aes';

describe('aes testing', () => {
	it('should decrypt the encryption', () => {
		const content = 'flag{matanel}';
		const x = encrypt(content);
		const dx = decrypt(x);
		expect(dx).toEqual(content);
	});
});

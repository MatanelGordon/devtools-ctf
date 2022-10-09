import * as crypto from 'crypto';
import config from '~/config';
import { CipherGCMTypes } from 'crypto';

const CONFIG_KEY = Buffer.from(config.server.secretKey);
const CONFIG_IV = Buffer.from(config.server.initialVector);
const ALGORITHM: CipherGCMTypes = 'aes-128-gcm';
const AUTH_TAG_LEN = 8;
const INPUT_ENCODING: crypto.Encoding = 'utf8';
const OUTPUT_ENCODING: crypto.Encoding = 'base64url';

export const encrypt = (
	content: string,
	key = CONFIG_KEY,
	iv = CONFIG_IV
): string => {
	const cipher = crypto.createCipheriv(ALGORITHM, key, iv, {
		authTagLength: AUTH_TAG_LEN,
	});

	const encrypted = Buffer.from(
		cipher.update(content, INPUT_ENCODING, 'hex'),
		'hex'
	);

	const final = cipher.final();
	const authTag = cipher.getAuthTag();

	return Buffer.concat([encrypted, final, authTag]).toString(OUTPUT_ENCODING);
};

export const decrypt = (
	content: string,
	key = CONFIG_KEY,
	iv = CONFIG_IV
): string => {
	const decipher = crypto.createDecipheriv(ALGORITHM, key, iv, {
		authTagLength: AUTH_TAG_LEN,
	});

	const buff = Buffer.from(content, OUTPUT_ENCODING);
	const authTag = buff.slice(-AUTH_TAG_LEN);
	const contentBuff = buff.slice(0, -AUTH_TAG_LEN).toString(OUTPUT_ENCODING);

	decipher.setAuthTag(authTag);
	const dec = decipher.update(contentBuff, OUTPUT_ENCODING, INPUT_ENCODING);

	return dec + decipher.final(INPUT_ENCODING);
};

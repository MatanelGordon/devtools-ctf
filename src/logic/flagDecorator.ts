import { removePadding } from '@utils/padding';

export type Flag = `flag{${string}}`;

export const createFlag = (content: string): Flag => `flag{${content}}`;

export const isFlag = (str: string): str is Flag =>
	str.startsWith('flag{') && str.endsWith('}');

export const stripFlag = (flag: string) => {
	if (!isFlag(flag))
		throw new Error(`StripFlagError - invalid flag - ${flag}`);

	return removePadding(flag, 'flag{', '}');
};

import { Flag, isFlag } from '~/logic/flagDecorator';

export function envWithDefault<T = string>(key: string, defaultValue: T) {
	return process.env?.[key as string]?.trim?.() ?? defaultValue.toString();
}

export const createLevelConfig = (
	name: string,
	defaults: { url: string; flag: Flag }
): { url: string; flag: Flag } => {
	const namePrefix = `${name.toUpperCase()}_LEVEL_`;
	const flag = envWithDefault<Flag>(`${namePrefix}_FLAG`, defaults.flag);

	if (!isFlag(flag)) {
		throw new Error(`value for ${namePrefix}_FLAG is not of type Flag`);
	}

	return {
		flag,
		url: envWithDefault(`${namePrefix}_URL`, defaults.url),
	};
};

export function envWithDefault<T = string>(key: string, defaultValue: T) {
	return process.env?.[key as string]?.trim?.() ?? defaultValue.toString();
}

export const createLevelConfig = (
	name: string,
	defaults: { url: string; flag: string }
) => {
	const namePrefix = `${name.toUpperCase()}_LEVEL_`;

	return {
		url: envWithDefault(`${namePrefix}_URL`, defaults.url),
		flag: envWithDefault(`${namePrefix}_FLAG`, defaults.flag),
	};
};

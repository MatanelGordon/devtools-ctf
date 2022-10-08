export function envWithDefault<T = string>(key: string, defaultValue: T) {
	return process.env?.[key as string] ?? defaultValue;
}

export function envWithDefault(key: string, defaultValue: string) {
	return process.env?.[key as string] ?? defaultValue;
}

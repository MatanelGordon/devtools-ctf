export const toBase64 = (content: string) =>
	Buffer.from(content, 'utf-8').toString('base64');

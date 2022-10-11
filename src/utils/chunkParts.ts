export const chunkParts = (content: string, parts: number) => {
	const size = content.length / parts;
	return new Array(parts)
		.fill(null)
		.map((_, i) => content.slice(i * size, (i + 1) * size));
};

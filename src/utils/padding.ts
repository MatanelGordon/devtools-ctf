export const addPadding = (str: string, start: string, end: string) =>
	`${start}${str}${end}`;

export const removePadding = (str: string, start: string, end: string) => {
	const startIndex = str.indexOf(start) + start.length;
	const endIndex = str.lastIndexOf(end);
	return str.slice(startIndex, endIndex);
};

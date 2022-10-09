export type OneOrMany<T> = T | T[];

export const resolveOneOrMany = <T>(oneOrManyInstance: OneOrMany<T>): T[] =>
	oneOrManyInstance instanceof Array
		? oneOrManyInstance
		: [oneOrManyInstance];

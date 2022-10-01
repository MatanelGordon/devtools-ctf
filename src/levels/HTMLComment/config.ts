import { envWithDefault } from '~/utils';

export default {
	flag: envWithDefault('HTML_COMMENT_FLAG', 'flag{G00dJ0bMyFr1end}'),
} as const;

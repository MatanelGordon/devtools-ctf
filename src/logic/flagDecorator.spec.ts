import { createFlag, stripFlag } from './flagDecorator';

describe('Flag Decorator', () => {
	it('should strip flag and leave the content', () => {
		const flag = createFlag('test');
		expect(stripFlag(flag)).toEqual('test');
	});

	it('should throw error for splitting invalid flag', () => {
		const flag = 'test';
		expect(() => stripFlag(flag)).toThrow();
	});
});

import { Test, TestingModule } from '@nestjs/testing';
import { HtmlCommentController } from './html-comment.controller';

describe('HtmlCommentController', () => {
	let controller: HtmlCommentController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [HtmlCommentController],
		}).compile();

		controller = module.get<HtmlCommentController>(HtmlCommentController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});

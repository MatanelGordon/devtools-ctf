import { Get, Request, Response } from '@nestjs/common';

export abstract class LevelController {
	abstract getLevel(): string;

	@Get()
	getLevelWithToken(@Request() req, @Response() res) {
		const path = this.getLevel();
	}
}

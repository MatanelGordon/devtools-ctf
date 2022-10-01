import { Get } from "@nestjs/common";

export abstract class LevelController{
    abstract getLevel(): string;

    @Get()
    getLevelWithToken(){
        const path = this.getLevel();
        
    }
}
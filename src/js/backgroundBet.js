import { Actor, Color, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class BackgroundBetting extends Actor {
    constructor(game){
        super()
    }
        onInitialize(){
            const sprite = Resources.BettingBackground.toSprite();
            this.graphics.use(sprite);
            this.pos = new Vector(720, 450)
    }
}
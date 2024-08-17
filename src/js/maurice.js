import { Actor, Color } from "excalibur"
import { Resources } from "./resources";

export class Maurice extends Actor {
    constructor(x, y, type, value) {
        super({
            x: x,
            y: y,
            width: 20,
            height: 20,
            color: Color.Yellow,
        });
        this.type = type;
        this.value = value;
         const sprite = Resources.Maurice.toSprite();
        sprite.scale.setTo(.4, .4);
        this.graphics.use(sprite)
    }


}
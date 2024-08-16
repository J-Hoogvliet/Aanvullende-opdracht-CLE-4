import { Actor, Color } from "excalibur"
import { Resources } from "./resources";

export class Explosion extends Actor {
    constructor(x, y, type, value) {
        super({
            x: x,
            y: y,
            width: 50,
            height: 50,
            color: Color.Blue,
        });
        this.type = type;
        this.value = value;
        const sprite = Resources.Explosion.toSprite();
        sprite.scale.setTo(.3, .3);
        this.graphics.use(sprite)

    }
}
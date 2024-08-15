import { Actor, Color } from "excalibur"

export class Icon extends Actor {
    constructor(x, y, type, value) {
        super({
            x: x,
            y: y,
            width: 70,
            height: 60,
            color: Color.Blue,
        });
        this.type = type;
        this.value = value;
    }


}
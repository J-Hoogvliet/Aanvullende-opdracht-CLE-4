import { Actor, Color } from "excalibur"

export class Gold extends Actor {
    constructor(x, y, type, value) {
        super({
            x: x,
            y: y,
            width: 20,
            height: 20,
            color: Color.Gold
        });
        this.type = type;
        this.value = value;
    }


}
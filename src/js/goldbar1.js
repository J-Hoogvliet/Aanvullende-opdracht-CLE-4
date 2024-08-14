import { Actor, Color } from "excalibur"

export class Goldbar1 extends Actor {
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
    }


}
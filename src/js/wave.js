import {Actor, Color} from "excalibur";

export class Wave extends Actor {
    constructor(x, y, type, value) {
        super({
            x: x,
            y: y,
            width: 20,
            height: 20,
        });
        this.type = type;
        this.value = value;
    }


}
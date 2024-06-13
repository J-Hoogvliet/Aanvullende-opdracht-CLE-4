import { Actor, Color, CollisionType } from 'excalibur';
import { Player } from './player.js'

export class Sea extends Actor {
    constructor(x, y) {
        super({
            x: x,
            y: y,
            width: 1800,
            height: 200,
            color: Color.Blue,
        });
        this.body.collisionType = CollisionType.Fixed;
        this.on('precollision', this.onPreCollision);
    }
    onPreCollision(evt) {
        if (evt.other instanceof Player) {
            console.log("U heeft de zee geraakt");
        }
    }
}

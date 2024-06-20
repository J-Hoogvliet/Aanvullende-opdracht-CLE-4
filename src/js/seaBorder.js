import { Actor, Color, CollisionType } from 'excalibur';
import { Player } from './player.js';

export class SeaBorder extends Actor {
    constructor(x, y, width, height) {
        super({
            x: x,
            y: y,
            width: width,
            height: height,
            color: Color.Black,
        });
        this.body.collisionType = CollisionType.Passive; // Set collision type to Passive
        this.on('precollision', this.onPreCollision.bind(this)); // Bind the event handler
    }

    onPreCollision(evt) {
        if (evt.other instanceof Player) {
            console.log("You can fish here");
        }
    }
}

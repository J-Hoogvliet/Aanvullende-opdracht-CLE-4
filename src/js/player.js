import { Actor, Color, Input, CollisionType } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js'

export class Player extends Actor {
    constructor(x, y) {
        super({
            x: x,
            y: y,
            width: 50,
            height: 50,
            collisionType: CollisionType.Active
        });
        this.speed = 200;
        const sprite = Resources.Player.toSprite();
        this.graphics.use(sprite);
        
    }

    onInitialize(engine) {
        this.on('postupdate', () => {
            this.vel.x = 0;
            this.vel.y = 0;

            if (engine.input.keyboard.isHeld(Input.Keys.W)) {
                this.vel.y = -this.speed;
            }
            if (engine.input.keyboard.isHeld(Input.Keys.S)) {
                this.vel.y = this.speed;
            }
            if (engine.input.keyboard.isHeld(Input.Keys.A)) {
                this.vel.x = -this.speed;
            }
            if (engine.input.keyboard.isHeld(Input.Keys.D)) {
                this.vel.x = this.speed;
            }
        });
    }
    
}

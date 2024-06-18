import { Actor, Color, Input, CollisionType } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js'

export class Player extends Actor {
    constructor(x, y, game) {
        super({
            x: x,
            y: y,
            width: 50,
            height: 50,
            collisionType: CollisionType.Active,
        });
        this.z = 60;
        this.speed = 200;
        const sprite = Resources.Player.toSprite();
        sprite.scale.setTo(0.5, 0.5);
        this.graphics.use(sprite);
        this.game = game;
        
    }

    onInitialize(engine, delta) {
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
    
};

    }
    


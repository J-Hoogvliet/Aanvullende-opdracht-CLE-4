import { Actor, Input, CollisionType } from 'excalibur';
import { Resources } from './resources.js'; // Adjust import path as necessary
import { DialogueManager } from './managers/dialogueManager.js';

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
        this.speed = 100;
        const sprite = Resources.Player.toSprite(); // Assuming Resources.Player is defined properly
        sprite.scale.setTo(0.03, 0.03);
        this.graphics.use(sprite);
        this.game = game;
        this.canFish = false; // Flag to determine if player can fish
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

    enableFishing() {
        this.canFish = true; // Enable fishing
    }

    disableFishing() {
        this.canFish = false; // Disable fishing
    }

    fish() {
        if (this.canFish) {
            const outcomes = ['trash', 'nothing', 'gold'];
            const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];

            switch (randomOutcome) {
                case 'trash':
                    // Display dialogue when catching trash
                    const dialogueManager = new DialogueManager(this.pos.x - 50, this.pos.y + 200, this.game); // Pass game instance
                    const dialogues = ['Je hebt afval gevangen!'];
                    dialogueManager.start(dialogues);

                    // Handle space key press to advance dialogue
                    this.game.input.keyboard.on('press', (evt) => {
                        if (evt.key === Input.Keys.Space || evt.key === Input.Keys.W || evt.key === Input.Keys.S && dialogueManager.isActive) {
                            dialogueManager.nextDialogue();
                        }
                    });
                    break;
                case 'nothing':
                    // Display dialogue when catching Nothing
                    const dialoguesManager = new DialogueManager(this.pos.x - 50, this.pos.y + 200, this.game); // Pass game instance
                    const dialoguess = ['Je hebt niks gevangen!'];
                    dialoguesManager.start(dialoguess);

                    // Handle space key press to advance dialogue
                    this.game.input.keyboard.on('press', (evt) => {
                        if (evt.key === Input.Keys.Space || evt.key === Input.Keys.W || evt.key === Input.Keys.S && dialoguesManager.isActive) {
                            dialoguesManager.nextDialogue();
                        }
                    });
                    break;
                case 'gold':
                    const dialoguessManager = new DialogueManager(this.pos.x - 50, this.pos.y + 200, this.game); // Pass game instance
                    const dialoguesss = ['Je hebt niks gevangen!'];
                    dialoguessManager.start(dialoguesss);

                    // Handle space key press to advance dialogue
                    this.game.input.keyboard.on('press', (evt) => {
                        if (evt.key === Input.Keys.Space || evt.key === Input.Keys.W || evt.key === Input.Keys.S && dialoguessManager.isActive) {
                            dialoguessManager.nextDialogue();
                        }
                    });
                    break;
            }
        } else {
            console.log('Je kan hier niet vissen, ei');
        }
    }
}

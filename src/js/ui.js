import { ScreenElement, FontUnit, Font, Vector, Label, Color, Input } from "excalibur";
import { Resources } from "./resources";
import { DialogueManager } from "./managers/dialogueManager";
import { Caught } from "./caught";

export class UI extends ScreenElement {
    constructor(game) {
        super();
        this.hasLoggedMessage = false;
        this.goldfish = 0;
        this.cash = 0;
        this.game = game;
        this.caught = "niks"
        this.goldLabel = new Label({
            text: "Goldfish: 0",
            color: Color.White,
            pos: new Vector(100, 100),
            font: new Font({
                family: "impact",
                size: 24,
                unit: FontUnit.Px,
            }),
        });
         this.cashLabel = new Label({
            text: "Cash: 0",
            color: Color.White,
            pos: new Vector(100, 150),
            font: new Font({
                family: "impact",
                size: 24,
                unit: FontUnit.Px,
            }),
        });
         this.caughtLabel = new Label({
            text: "Last Caught:",
            color: Color.White,
            pos: new Vector(100, 200),
            font: new Font({
                family: "impact",
                size: 24,
                unit: FontUnit.Px,
            }),
        });
        this.caught = new Caught(250,210)
        this.catchLabel = new Label({
        pos: new Vector(10, 10), // Position of the label
        font: new Font({ size: 16, unit: FontUnit.Px }),
        text: 'Caught: ', // Initial text
        color: Color.White
    });
    }

    onInitialize(engine) {
        this.goldLabel.z = 1000;
        this.cashLabel.z = 1000;
        this.caughtLabel.z = 1000;
        this.caught.z = 1000;
        this.addChild(this.goldLabel);
        this.addChild(this.cashLabel);
        this.addChild(this.caughtLabel);
        this.addChild(this.caught);
    }

    onPreUpdate(game) {
    // Check if the player has caught 10 goldfish and the message hasn't been logged yet
    if (this.goldfish === 5 && this.hasLoggedMessage === false) {
        try {
            // Debug: Check the game instance and goldfish count
            console.log('Goldfish count:', this.goldfish);
            console.log('Game instance:', this.game);
            this.goldfish = this.goldfish + 5;
            this.goldLabel.text = `Goldfish: ${this.goldfish}`;

            // Create an instance of DialogueManager with specified coordinates and the game instance
            const dialogueManager = new DialogueManager(720, 800, this.game);

            // Define the dialogue messages
            const dialogues = [
                'Je hebt 5 goudvissen gevangen!',
                'hier heb je 5 goudvisjes oekel'
            ];

            // Debug: Check the dialogues array
            console.log('Dialogues:', dialogues);
            this.addChild(dialogueManager.dialogueBox);
            this.addChild(dialogueManager.dialogueText);

            // Start the dialogue sequence
            dialogueManager.start(dialogues);

             this.game.input.keyboard.on('press', (evt) => {
                        if (evt.key === Input.Keys.Space || evt.key === Input.Keys.W || evt.key === Input.Keys.S && dialogueManager.isActive) {
                            dialogueManager.nextDialogue();
                        }
                    });
        

            // Set hasLoggedMessage to true to prevent re-logging
            this.hasLoggedMessage = true;
        } catch (error) {
            // Log or handle the error if any occurs
            console.error('Failed to initiate dialogue manager:', error);
        }
    }
}


    

   addPoint() {
    this.goldfish++;
    this.goldLabel.text = `Goldfish: ${this.goldfish}`;
}
    removePoint(){
       if (this.goldfish > 0) {
        this.goldfish--;
        this.goldLabel.text = `Goldfish: ${this.goldfish}`;
    }
    }
    addCash(amount){
        this.cash = this.cash + amount;
        this.cashLabel.text = `Cash: ${this.cash}`;
    }

     removeCash(amount){
        this.cash = this.cash - amount;
        this.cashLabel.text = `Cash: ${this.cash}`;
    }

    changeText(text){
        this.caughtLabel.text = `Last Caught:`;
    }
}

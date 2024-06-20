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

    onPreUpdate(engine){
        if(this.goldfish === 10 && this.hasLoggedMessage === false){
            const dialogueManager = new DialogueManager(1340, 800, this.game); // Pass game instance
            const dialogues = ['Je hebt 10 goudvissen gevangen!'];
            dialogueManager.start(dialogues);
            this.hasLoggedMessage = true;
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

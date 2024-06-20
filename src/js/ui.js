import { ScreenElement, FontUnit, Font, Vector, Label, Color, Input } from "excalibur";
import { Resources } from "./resources";
import { DialogueManager } from "./managers/dialogueManager";

export class UI extends ScreenElement {
    constructor() {
        super();
        this.goldfish = 0;
        this.cash = 0;
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
        this.addChild(this.goldLabel);
        this.addChild(this.cashLabel);
        this.addChild(this.catchLabel)
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

    updateCatchLabel(catchText) {
        this.catchLabel.text = `Caught: ${catchText}`; // Update the label text
    }
}

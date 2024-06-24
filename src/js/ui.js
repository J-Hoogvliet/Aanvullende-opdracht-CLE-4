import { ScreenElement, FontUnit, Font, Vector, Label, Color, Input } from "excalibur";
import { Resources,ResourceLoader } from "./resources";
import { DialogueManager } from "./managers/dialogueManager";
import { Caught } from "./caught";
import { Trophy } from "./trophy";
import { TrophyCount } from "./trophycount";
import { smithScene } from "./smithScene";

export class UI extends ScreenElement {
    constructor(goldfish, cash, game) {
        super();
        this.hasLoggedMessage = false;
        let storedValue = localStorage.getItem('gold');
        this.goldfish = storedValue !== null ? parseInt(storedValue) : 0;
        if (isNaN(this.goldfish)) {
    console.error('Failed to parse goldfish count from localStorage.');
    // Handle the error or provide a default value
        }
        let storedValue2 = localStorage.getItem('cash');
        this.cash = storedValue2 !== null ? parseInt(storedValue2) : 0;
        if (isNaN(this.cash)) {
            console.error('Failed to parse goldfish count from localStorage.');
    // Handle the error or provide a default value
    }
        this.game = game;
        this.caught = "niks"
        this.goldLabel = new Label({
            text: `Goldfish: ${this.goldfish}`,
            color: Color.White,
            pos: new Vector(170, 140),
            font: new Font({
                family: "impact",
                size: 24,
                unit: FontUnit.Px,
            }),
        });
         this.cashLabel = new Label({
            text: `Cash: ${this.cash}`,
            color: Color.White,
            pos: new Vector(170, 190),
            font: new Font({
                family: "impact",
                size: 24,
                unit: FontUnit.Px,
            }),
        });
         this.caughtLabel = new Label({
            text: "Last Caught:",
            color: Color.White,
            pos: new Vector(170, 240),
            font: new Font({
                family: "impact",
                size: 24,
                unit: FontUnit.Px,
            }),
        });
        this.caught = new Caught(325,255)
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
            const dialogueManager = new DialogueManager(1000, 800, this.game);

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

onPostUpdate(){
    let storedValue = localStorage.getItem('gold');
        this.goldfish = storedValue !== null ? parseInt(storedValue) : 0;
        this.goldLabel.text = `Goldfish: ${this.goldfish}`
        if (isNaN(this.goldfish)) {
    console.error('Failed to parse goldfish count from localStorage.');
    // Handle the error or provide a default value
        }
        let storedValue2 = localStorage.getItem('cash');
        this.cash = storedValue2 !== null ? parseInt(storedValue2) : 0;
        this.cashLabel.text = `Cash: ${this.cash}`
        if (isNaN(this.cash)) {
            console.error('Failed to parse goldfish count from localStorage.');
    // Handle the error or provide a default value
    }
}

   addPoint() {
    this.goldfish++;
    this.goldLabel.text = `Goldfish: ${this.goldfish}`;
    localStorage.setItem('gold', this.goldfish.toString());
    console.log(this.getCash())
}
    removePoint(){
       if (this.goldfish > 0) {
        this.goldfish--;
        this.goldLabel.text = `Goldfish: ${this.goldfish}`;
        localStorage.setItem('gold', this.goldfish.toString());
    }
    }
    addCash(amount){
        this.cash = this.cash + amount;
        this.cashLabel.text = `Cash: ${this.cash}`;
        localStorage.setItem('cash', this.cash.toString());
    }

     removeCash(amount){
        this.cash = this.cash - amount;
        this.cashLabel.text = `Cash: ${this.cash}`;
    }

    getCash(){
        return this.cash;
    }

    changeText(text){
        this.caughtLabel.text = `Last Caught:`;
    }
    updateLocalStorage() {
        localStorage.setItem("gold", this.goldfish.toString());
        localStorage.setItem("cash", this.cash.toString());
      }
   
}

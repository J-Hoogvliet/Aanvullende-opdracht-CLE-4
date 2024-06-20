import { Actor, Color, Font, FontUnit, Label, Vector, Engine } from "excalibur";

export class DialogueManager {
    constructor(x, y, game) {
        this.game = game; // Ensure game is properly initialized
        this.dialogues = [];
        this.currentDialogueIndex = 0;
        this.isActive = false;
        this.z = 99;
        this.scene = this.game.currentScene;
        // Dialogue box setup
        this.dialogueBox = new Actor({
            pos: new Vector(x, y),
            width: 100,
            height: 20,
            color: Color.Gray
        });
        
        // Dialogue text setup
        this.dialogueText = new Label({
            pos: new Vector(x - 100, y - 5),
            font: new Font({ size: 16, unit: FontUnit.Px }),
            text: '',
            color: Color.White
        });
    }
    
    start(dialogues) {
        this.dialogues = dialogues;
        this.currentDialogueIndex = 0;
        this.isActive = true;
        this.showDialogue();
    }
    
    showDialogue(text) {
        if (this.currentDialogueIndex < this.dialogues.length) {
            this.dialogueText.text = text;
            if (this.game) {
                this.game.add(this.dialogueBox); // Add dialogue box to game
                this.game.add(this.dialogueText); // Add dialogue text to game
            } else {
                console.error('Game instance is not defined.');
            }
        } else {
            this.endDialogue();
        }
    }
    
    nextDialogue() {
        this.currentDialogueIndex++;
        this.showDialogue();
    }
    
    endDialogue() {
        this.isActive = false;
        if (this.game) {
            this.game.remove(this.dialogueBox); // Remove dialogue box from game
            this.game.remove(this.dialogueText); // Remove dialogue text from game
        }
    }
    catchItem(itemName) {
        this.scene.ui.updateCatchLabel(itemName); // Update the catch label
        this.showDialogue(`You caught a ${itemName}!`); // Show a dialogue message
  }
}

import { Actor, Color, Font, FontUnit, Label, Vector, Engine } from "excalibur";

export class DialogueManager {
    constructor(x, y, game) {
        this.game = game; // Ensure game is properly initialized
        this.dialogues = [];
        this.currentDialogueIndex = 0;
        this.isActive = false;
        // Dialogue box setup
        this.dialogueBox = new Actor({
            pos: new Vector(x, y),
            width: 300, // Adjusted for better visibility
            height: 50, // Adjusted for better visibility
            color: Color.Gray
        });
        
        // Dialogue text setup
        this.dialogueText = new Label({
            pos: new Vector(x - 140, y ), // Adjusted for better positioning
            font: new Font({ size: 16, unit: FontUnit.Px }),
            text: '',
            color: Color.White
        });

        this.dialogueBox.z = 1000;
        this.dialogueText.z = 1000;
    }
    
    start(dialogues) {
        this.dialogues = dialogues;
        this.currentDialogueIndex = 0;
        this.isActive = true;
        this.showDialogue();
    }
    
    showDialogue() {
        if (this.currentDialogueIndex < this.dialogues.length) {
            this.dialogueText.text = this.dialogues[this.currentDialogueIndex];
            if (this.game) {
                this.game.add(this.dialogueBox); // Add dialogue box to game
                this.game.add(this.dialogueText); // Add dialogue text to game
                console.log('Dialogue box position:', this.dialogueBox.pos);
                console.log('Dialogue text position:', this.dialogueText.pos);
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
}

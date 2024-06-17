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
            width: 490,
            height: 80,
            color: Color.Gray
        });
        
        // Dialogue text setup
        this.dialogueText = new Label({
            pos: new Vector(x - 200, y - 10),
            font: new Font({ size: 24, unit: FontUnit.Px }),
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
    
    showDialogue() {
        if (this.currentDialogueIndex < this.dialogues.length) {
            this.dialogueText.text = this.dialogues[this.currentDialogueIndex];
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
}

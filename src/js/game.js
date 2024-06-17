import '../css/style.css'
import { Engine, ScreenElement, BoundingBox, Input} from 'excalibur';
import { Player } from './player.js';
import { Path } from './path.js';
import { Sea } from './sea.js';
import { Background } from './background.js';
import { ResourceLoader, Resources } from './resources.js';
import { House } from './house.js';
import { DialogueManager } from './managers/dialogueManager.js';
import { Smith } from './smith.js';
import { Border } from './border.js';


export class game extends Engine {
    constructor() {
        super({
            width: 1440,
            height: 900,
            fixedUpdateFps: 60,
        });
    

        this.start(ResourceLoader).then(()=> this.startGame());
    }
    startGame(){
        const player = new Player(this.drawWidth / 2, this.drawHeight / 2, this);
        this.currentScene.camera.strategy.lockToActor(player);
        this.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 1980, 1088))
        const path = new Path(100, 300);
        const house = new House(500, 100);
        const sea = new Sea(960, 1000);
        const land = Resources.Land;
        const smith = new Smith(700, 200);
        this.add(land);
        this.add(path);
        this.add(smith);
        this.add(house); // HOUSEYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
        this.add(sea);
        this.add(player);
        
        // Borders
       const leftBorder = new Border(0, this.drawHeight / 2, 10, this.drawHeight);
       const rightBorder = new Border(1440, this.drawHeight / 2, 10, this.drawHeight);
       const topBorder = new Border(this.drawWidth / 2, 0, this.drawWidth, 10)

       this.add(leftBorder)
       this.add(rightBorder)
       this.add(topBorder)


        
        const dialogueManager = new DialogueManager(800, 440, this)
        
        const dialoguesStart = [
            "Welkom bij de game!",
            "Ga vissen voor goud.",
            "Smelt het goud om bij de smid.",
            "En vergok het vervolgens bij het Casino."
        ];

        dialogueManager.start(dialoguesStart);

        this.input.keyboard.on('press', (evt) =>{
            if (evt.key === Input.Keys.Space && dialogueManager.isActive){
                dialogueManager.nextDialogue();
            };
        })
    }
}
new game()




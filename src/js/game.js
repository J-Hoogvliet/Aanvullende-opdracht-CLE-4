import '../css/style.css'
import { Engine, ScreenElement, BoundingBox} from 'excalibur';
import { Player } from './player.js';
import { Cruise } from './cruise.js';
import { Sea } from './sea.js';
import { Background } from './background.js';
import { ResourceLoader, Resources } from './resources.js';


export class Game extends Engine {
    constructor() {
        super({
            width: 1440,
            height: 900,
        });
    

        this.start(ResourceLoader).then(()=> this.startGame());
    }
    startGame(){
        const player = new Player(this.drawWidth / 2, this.drawHeight / 2);
        this.currentScene.camera.strategy.lockToActor(player);
        this.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 2000, 1200))
        const cruise = new Cruise(300, 300);
        const sea = new Sea(680, 900);
        const land = new Background();
        this.add(land);
        this.add(cruise);
        this.add(sea);
        this.add(player);
    }
}
new Game()




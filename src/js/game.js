import '../css/style.css'
import { Engine, ScreenElement, BoundingBox} from 'excalibur';
import { Player } from './player.js';
import { Cruise } from './cruise.js';
import { Sea } from './sea.js';
import { Background } from './background.js';
import { ResourceLoader, Resources } from './resources.js';
import { House } from './house.js';


export class Game extends Engine {
    constructor() {
        super({
            width: 1440,
            height: 900,
            fixedUpdateFps: 60,
        });
    

        this.start(ResourceLoader).then(()=> this.startGame());
    }
    startGame(){
        const player = new Player(this.drawWidth / 2, this.drawHeight / 2);
        this.currentScene.camera.strategy.lockToActor(player);
        this.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 1440, 2000))
        const cruise = new Cruise(100, 300);
        const house = new House(500, 100);
        const sea = new Sea(680, 900);
        const land = new Background();
        this.add(land);
        this.add(cruise);
        this.add(house);
        this.add(sea);
        this.add(player);
    }
}
new Game()




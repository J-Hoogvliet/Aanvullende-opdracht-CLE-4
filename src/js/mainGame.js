import { BoundingBox, Input, Scene } from 'excalibur';
import { Player } from './player.js';
import { SeaBorder } from './seaBorder.js';
import { House } from './house.js';
import { Sea } from './sea.js';
import { Border } from './border.js';
import { Resources } from './resources.js';
import { UI } from './ui.js';
import { smithScene } from './smithScene.js';

export class GameScene extends Scene {
    constructor(engine) {
        super();
    }

    onInitialize(engine) {
        Resources.tiledMap.addToScene(this);
        const initialZoomLevel = 2;
        this.camera.zoom = initialZoomLevel;

       
        const player = new Player(engine.drawWidth / 2, engine.drawHeight / 2, this);
        this.player = player;
        engine.currentScene.camera.strategy.lockToActor(player);
        engine.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 1980, 1088));

  
        const house = new House(1096, 219);
        const sea = new Sea(960, 1050, 3000, 200);
        const sea1 = new Sea(0, 850, 600, 3000);
        const sea2 = new Sea(1930, 945, 1000, 1250);
        const sea3 = new Sea(1985, 315, 440, 800);
        const border = new Border(0, -20, 5000, 10, this);

       
        const seaBorder = new SeaBorder(960, 1050, 3040, 220);
        const seaBorder1 = new SeaBorder(0, 850, 620, 3020);
        const seaBorder2 = new SeaBorder(1930, 945, 1040, 1250);
        const seaBorder3 = new SeaBorder(1985, 315, 480, 800);

       
        this.add(house);
        this.add(sea);
        this.add(sea1);
        this.add(sea2);
        this.add(sea3);
        this.add(border);
        this.add(player);
        this.add(seaBorder);
        this.add(seaBorder1);
        this.add(seaBorder2);
        this.add(seaBorder3);

        this.ui = new UI(this);
        this.add(this.ui);

       
        this.engine.input.keyboard.on('press', (event) => {
            if (event.key === Input.Keys.Enter) {
                player.fish(); 
            }
        });

     
        player.on('collisionstart', (evt) => {
            if (evt.other instanceof SeaBorder) {
                player.enableFishing(); 
            }
        });

        player.on('collisionend', (evt) => {
            if (evt.other instanceof SeaBorder) {
                player.disableFishing();
            }
        });

        
        player.on('collisionstart', (evt) => {
            if (evt.other instanceof House) {
                engine.goToScene('smithScene'); 
            }
        });
    }
}

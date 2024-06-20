import { BoundingBox, Input, Loader, Scene } from 'excalibur';
import { Player } from './player.js';
import { Path } from './path.js';
import { Sea } from './sea.js';
import { Background } from './background.js';
import { House } from './house.js';
import { Smith } from './smith.js';
import { Border } from './border.js';
import { DialogueManager } from './managers/dialogueManager.js';
import { Resources } from './resources.js';

export class GameScene extends Scene {
  constructor() {
    super();
    this.dialogueManager = null;
  }

  onInitialize(engine) {
    Resources.tiledMap.addToScene(this);
    const initialZoomLevel = 2;
    this.camera.zoom = initialZoomLevel;
    const player = new Player(engine.drawWidth / 2, engine.drawHeight / 2, this);
    this.player = player;
    engine.currentScene.camera.strategy.lockToActor(player);
    engine.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 1980, 1088));

    
    const path = new Path(100, 300);
    const house = new House(1096,219);
    const sea = new Sea(960, 1050, 3000, 200);
    const sea1 = new Sea(0, 850, 700, 3000);
    const sea2 = new Sea(1930,945, 1000, 1250);
    const sea3 = new Sea(1985,315, 500, 800);

    this.add(path);
    this.add(house);
    this.add(sea);
    this.add(sea1);
    this.add(sea2);
    this.add(sea3);
    this.add(player);

  
    

    const dialoguesStart = [
      "Welkom bij de game!",
      "Ga vissen voor goud.",
      "Smelt het goud om bij de smid.",
      "En vergok het vervolgens bij het Casino.",
      "hoe meer meer je gokt hoe meer punten je kan krijgen."
    ];

    this.dialogueManager = new DialogueManager(800, 440, this);
    this.dialogueManager.start(dialoguesStart);

      this.engine.input.keyboard.on('press', (evt) => {
  if (evt.key === Input.Keys.Space && this.dialogueManager?.isActive) {
      this.dialogueManager?.nextDialogue();
    };
});
  }
}
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
    const player = new Player(engine.drawWidth / 2, engine.drawHeight / 2, this);
    this.player = player;
    engine.currentScene.camera.strategy.lockToActor(player);
    engine.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 1980, 1088));

    
    const path = new Path(100, 300);
    const house = new House(500, 100);
    const sea = new Sea(960, 1000);
    const smith = new Smith(700, 200);

    this.add(path);
    this.add(smith);
    this.add(house);
    this.add(sea);
    this.add(player);
    

    // Borders
    const leftBorder = new Border(0, engine.drawHeight / 2, 10, engine.drawHeight);
    const rightBorder = new Border(1440, engine.drawHeight / 2, 10, engine.drawHeight);
    const topBorder = new Border(engine.drawWidth / 2, 0, engine.drawWidth, 10);

    this.add(leftBorder);
    this.add(rightBorder);
    this.add(topBorder);
    Resources.tiledMap.addToScene(this);

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
import { GameScene } from './mainGame.js';
import { Engine } from 'excalibur';
import { ResourceLoader, Resources } from './resources.js';

export class Game extends Engine {
  constructor() {
    super({
      width: 1440,
      height: 900,
      fixedUpdateFps: 60,
    });

    this.start(ResourceLoader).then(() => this.startGame());
  }

 startGame() {
    const gameScene = new GameScene();
    this.addScene('GameScene', gameScene);
    this.goToScene('GameScene');
}
}

new Game();

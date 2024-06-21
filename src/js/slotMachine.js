import { Engine, Actor, Vector, Color } from 'excalibur';

const engine = new Engine({
  width: 800,
  height: 600
});

engine.start();

// Define the 6 different symbols
const symbols = [
  { name: 'Cherry', image: 'cherry.png' },
  { name: 'Lemon', image: 'lemon.png' },
  { name: 'Orange', image: 'orange.png' },
  { name: 'Plum', image: 'plum.png' },
  { name: 'Bell', image: 'bell.png' },
  { name: 'Bar', image: 'bar.png' }
];

// Create the slot machine actor
class SlotMachine extends Actor {
  private reels: Actor[] = [];
  private arm: Actor;
  private spinning: boolean = false;

  constructor() {
    super({
      x: 400,
      y: 300
    });

    // Create the reels
    for (let i = 0; i < 3; i++) {
      const reel = new Actor({
        x: 100 + i * 200,
        y: 300
      });
      reel.graphics.use(new Sprite(symbols[0].image));
      this.reels.push(reel);
      engine.add(reel);
    }

    // Create the arm
    this.arm = new Actor({
      x: 400,
      y: 500
    });
    this.arm.graphics.use(new Sprite('arm.png'));
    engine.add(this.arm);
  }

  spin() {
    if (!this.spinning) {
      this.spinning = true;
      this.arm.graphics.opacity = 0;
      this.arm.actions.easeTo(0, 500, 500, 'easeOutQuad');
      this.reels.forEach((reel, index) => {
        reel.actions.delay(500 + index * 200).then(() => {
          reel.graphics.use(new Sprite(this.getRandomSymbol().image));
          reel.actions.easeTo(0, 500, 500, 'easeOutQuad');
        });
      });
      this.arm.actions.delay(1500).then(() => {
        this.arm.graphics.opacity = 1;
        this.spinning = false;
      });
    }
  }

  getRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
  }
}

// Create the slot machine instance
const slotMachine = new SlotMachine();
engine.add(slotMachine);

// Add a button to spin the slot machine
const spinButton = new Actor({
  x: 400,
  y: 550
});
spinButton.graphics.use(new Sprite('spin-button.png'));
spinButton.on('pointerdown', () => {
  slotMachine.spin();
});
engine.add(spinButton);
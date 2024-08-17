import { Scene, Label, Input, Color, Font, FontUnit, Vector, Timer } from 'excalibur';
import { Trophy } from './trophy';
import { UI } from './ui';
import { Resources } from './resources'; // Zorg ervoor dat de juiste resources zijn geïmporteerd
import { BackgroundBetting } from './backgroundBet';
import { Icon } from './iconMaker';
import { Explosion } from './Explosion';
import { Maurice } from "./maurice";
import { Game } from './game';


export class bettingScene extends Scene {

    constructor(engine, game){
        super();
        this.game = game;
        this.bettingFee = 100;
        this.winnings = 1000;

        //Uitkomst voorafgaand aan de spin
        this.bettingOutcomeL = 0;
        this.bettingOutcomeM = 0;
        this.bettingOutcomeR = 0;

        //Uitkomst opslaan
        this.spinL = 0;
        this.spinM = 0;
        this.spinR = 0;
       
        this.bettingCooldown = 2000; // Cooldown period in milliseconds (2 seconds)
        this.lastBettingTime = 0; // Timestamp of the last betting action

        this.dt = 500; //Delta voor timer

        this.achievementMusic = Resources.Achievement;


    }
onInitialize(engine, game){
    this.disableSpin()
    this.cash;
     let storedValue = localStorage.getItem("cash");
    this.cash = storedValue !== null ? parseInt(storedValue) : 0;
    if (isNaN(this.cash)) {
      console.error("Kan aantal munten niet parsen uit localStorage.");
      // Behandel de fout of geef een standaardwaarde op
    }

const background = new BackgroundBetting();
background.z = 1002;
    this.add(background);

this.ui = new UI(this);
    this.add(this.ui);


//Maak de icoontjes aan
this.Left = new Icon(395, 403);
this.Left.graphics.use(Resources.gold.toSprite());
this.Left.z = 1004;
this.Left.value = 1;

this.Middle = new Icon(718, 403);
this.Middle.graphics.use(Resources.gold.toSprite());
this.Middle.z = 1004;
this.Middle.value = 2;

this.right = new Icon(1045, 403);
this.right.graphics.use(Resources.gold.toSprite());
this.right.z = 1004;
this.right.value = 3;

//Toevoegen icoontjes
this.add(this.Left);
this.add(this.Middle);
this.add(this.right);

this.timer = new Timer({
    repeats: false,
     fcn: () => this.explosionStop(game),
        interval: 4000,
    });
this.add(this.timer);



  this.input.keyboard.on("press", (evt) => {
      this.handleInput(evt.key, this.cash, game);
    });

 const optie3Tekst = new Label({
      x: 200,
      y: 750,
      z: 1004,
      text: "Welkom in de gokkamer. Verdien hier meer coins zonder te hoeven vissen.",
      color: Color.Black,
      font: new Font({ size: 24, unit: FontUnit.Px }),
    });

     const optie4Tekst = new Label({
      x: 200,
      y: 780,
      z: 1004,
      text: "Om terug te gaan naar de smid klik op <-",
      color: Color.Black,
      font: new Font({ size: 24, unit: FontUnit.Px }),
    });
    // Voeg de labels toe aan de scene
    this.add(optie3Tekst);
    this.add(optie4Tekst);
}

handleInput(key, cash, game){
    if(key === Input.Keys.Enter){
        this.beforeBetting(cash, game)

    }
    if (key === Input.Keys.A){
        this.ui?.updateLocalStorage();
      this.engine.goToScene("smith"); // ga terug naar smithscene
    }
}

beforeBetting(cash, game) {
       
        if(cash >= 199){
            const currentTime = Date.now();
            if (currentTime - this.lastBettingTime >= this.bettingCooldown) {
            // Sufficient cooldown period has passed, allow fishing
            // @ts-ignore
            this.ui?.bettingFee(this.bettingFee);
            this.ui?.updateLocalStorage();
            this.enableSpin()
            this.bettingHandler(game)
            this.disableSpin()
            this.lastBettingTime = currentTime;
            
            }
           
        } else if(cash <= 199) {
            console.log("Bro je geld is op, ga vissen jij!")
            this.disableSpin()
        }
       
    }

bettingHandler(game){
    this.iconRight(game)
    this.iconLeft(game)
    this.iconMiddle(game)
    
   
}

iconLeft(game){
    const left = this.Left
    this.betting(left, this.bettingOutcomeL, game)
}
iconMiddle(game){
    const middle = this.Middle
    this.betting(middle, this.bettingOutcomeM, game)
}
iconRight(game){
    const right = this.right
    this.betting(right, this.bettingOutcomeR, game)
}




disableSpin() {
    this.canSpin = false // Spinwiel staat stil
}

enableSpin(){
    this.canSpin = true // Spinwiel staat aan
}

betting(direction, outcome, game){
    this.lastoutcome = outcome;
    this.enableSpin
    if (this.canSpin){
        const outcomes = ['crystal', 'diamond', 'goldbar', 'goldbar1', 'pickaxe'];
        const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];

        const scene = this;
            // @ts-ignore (Deze fout is er, maar game werkt wel.)
        const ui = scene?.ui;

        if(ui){
            switch (randomOutcome) {
                    case 'crystal':
                        // console.log("1");
                        direction.graphics.use(Resources.Crystal.toSprite());  
                        this.lastoutcome = 1;
                        break;
                    case 'diamond':
                        // console.log("2");
                        direction.graphics.use(Resources.Diamond.toSprite());
                        this.lastoutcome = 2;
                        break;
                    case 'goldbar':
                        // console.log("3");
                        direction.graphics.use(Resources.Goldbar.toSprite());
                        this.lastoutcome = 3;
                        break;
                    case 'goldbar1':
                        // console.log("4");
                        direction.graphics.use(Resources.Goldbar1.toSprite());
                        this.lastoutcome = 4; 
                        break;
                    case 'pickaxe':
                        // console.log("5");
                        direction.graphics.use(Resources.Pickaxe.toSprite()); 
                        this.lastoutcome = 5;
                        break;
                }
                outcome - this.lastoutcome;
                this.saveOutcome(direction, this.lastoutcome, outcome, game);
            } else {
                console.error('UI is not available in the current scene.');
            }

        } else {
            console.log("je kan niet gokken")
        } 
    
    }


saveOutcome(direction, lastoutcome, outcome, game){
        
if (direction === this.Left){
    this.spinL = lastoutcome;
    this.bettingOutcomeL = outcome;
    console.log(this.spinL);
} else if(direction === this.Middle){
    this.spinM = lastoutcome;
    this.bettingOutcomeM = outcome;
    console.log(this.spinM);
} else if (direction === this.right){
    this.spinR = lastoutcome;
    this.bettingOutcomeR = outcome;
    console.log(this.spinR);
}
this.winningsHandler(this.spinL, this.spinM, this.spinR, game)
}

winningsHandler (outcomeL, outcomeM, outcomeR, game){
if (outcomeL === outcomeM && outcomeL === outcomeR && outcomeM === outcomeR){
    this.ui?.winnings(this.winnings);
    this.explosion(game)
    this.winningAnimation(this.timer)
}
}


winningAnimation(timer, time){
    timer.start();
}
  
explosionStop(game){
    this.timer?.stop();
  this.achievementMusic?.pause();
    this.image?.kill();
    this.maurice?.kill();
}
explosion(game){
    this.maurice = new Maurice(730, 450)
    this.maurice.z = 1016
    this.add(this.maurice)

    this.achievementMusic.loop = true;
    this.achievementMusic.play();
    this.image = new Explosion(720, 450);
    this.image.z = 1005;
    this.add(this.image);
this.image.onPostUpdate = () => {
  this.image.rotation += 30 * this.dt; // rotate 30 degrees per half a second
};
}
}


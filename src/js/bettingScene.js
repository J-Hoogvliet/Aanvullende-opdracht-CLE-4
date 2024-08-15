import { Scene, Label, Input, Color, Font, FontUnit, Vector, } from 'excalibur';
import { Trophy } from './trophy';
import { UI } from './ui';
import { Resources } from './resources'; // Zorg ervoor dat de juiste resources zijn geïmporteerd
import { BackgroundBetting } from './backgroundBet';

export class bettingScene extends Scene {

    constructor(engine, game){
        super();
        this.game = game;
        this.bettingFee = -100;
        this.winnings = 1000;
        this.bettingNumerOutcome = 0;

       
    }
onInitialize(engine){
    this.disableSpin()

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

    

  this.input.keyboard.on("press", (evt) => {
      this.handleInput(evt.key);
    });

}

handleInput(key){
    if(key === Input.Keys.Enter){
        this.enableSpin()
        console.log("gokken kan altijd")
        this.betting1()
    }
}




disableSpin() {
    this.canSpin = false // Spinwiel staat stil
}

enableSpin(){
    this.canSpin = true // Spinwiel staat aan
}

betting1(){
    this.enableSpin
    if (this.canSpin){
        const outcomes = ['crystal', 'diamond', 'goldbar', 'goldbar1', 'pickaxe'];
        const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];

        const scene = this.scene;
            // @ts-ignore (Deze fout is er, maar game werkt wel.)
        const ui = scene?.ui;

        if(ui){
            switch (randomOutcome) {
                    case 'crystal':
                        console.log("1")

                    case 'diamond':
                        console.log("2")
                        
                    case 'goldbar':
                        console.log("3")
                        
                    case 'goldbar1':
                        console.log("4")

                    case 'pickaxe':
                        console.log("5")

                }
            } else {
                console.error('UI is not available in the current scene.');
            }

        } else {
            console.log("je kan niet gokken")
        }
    }

  
}


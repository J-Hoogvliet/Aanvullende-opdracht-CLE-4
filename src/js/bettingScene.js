import { Scene, Label, Input, Color, Font, FontUnit, Vector, } from 'excalibur';
import { Trophy } from './trophy';
import { UI } from './ui';
import { Resources } from './resources'; // Zorg ervoor dat de juiste resources zijn geïmporteerd

export class bettingScene extends Scene {

    constructor(game){
        super();
        this.game = game;
        this.bettingFee = -100;
        this.winnings = 1000;
       
    }
onInitialize(data, engine){
    this.disableSpin()

     let storedValue = localStorage.getItem("cash");
    this.cash = storedValue !== null ? parseInt(storedValue) : 0;
    if (isNaN(this.cash)) {
      console.error("Kan aantal munten niet parsen uit localStorage.");
      // Behandel de fout of geef een standaardwaarde op
    }
this.ui = new UI(this);
    this.add(this.ui);

    console.log(storedValue)
}

disableSpin() {
    this.canSpin = false // Spinwiel staat stil
}

enableSpin(){
    this.canSpin = true // Spinwiel staat aan
}

betting(){
    this.enableSpin
    if (this.canSpin){
        const outcomes = ['crystal', 'diamond', 'goldbar', 'goldbar1', 'pickaxe'];
        const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];

        const scene = this.scene;
            // @ts-ignore (Deze fout is er, maar game werkt wel.)
            const ui = scene?.ui;
    }
}


}


import { Scene, Label, Input, Color, Engine } from 'excalibur'; 

export class smithScene extends Scene {
  onInitialize(engine) {
 
    const welkomTekst = new Label({
      x: 50,
      y: 50,
      text: "Hallo en welkom in mijn winkel. Lever hier uw vissen in.",
      color: Color.Black
    });
    
    const optie1Tekst = new Label({
      x: 50,
      y: 100,
      text: "1. Wilt u uw vissen inleveren?",
      color: Color.Black
    });
    
    const optie2Tekst = new Label({
      x: 50,
      y: 130,
      text: "2. Als u naar de casino wilt?",
      color: Color.Black
    });

    // Voeg de labels toe aan de scene
    this.add(welkomTekst);
    this.add(optie1Tekst);
    this.add(optie2Tekst);

    // Event handler voor toetsen
    engine.input.keyboard.on('press', (evt) => {
      if (evt.key === Input.Keys.Digit1) {
        alert("U heeft gekozen om uw vissen in te leveren.");
        // Hier zou je verdere logica kunnen toevoegen voor wat er gebeurt na optie 1
      } else if (evt.key === Input.Keys.Digit2) {
        alert("U heeft gekozen om naar de casino te gaan.");
        // Hier zou je verdere logica kunnen toevoegen voor wat er gebeurt na optie 2
      }
    });
  }

  draw(ctx, delta) {
    ctx.fillStyle = Color.White.toString(); 
    ctx.fillRect(0, 0, this.engine.drawWidth, this.engine.drawHeight); 
    super.draw(ctx, delta); 
  }
}
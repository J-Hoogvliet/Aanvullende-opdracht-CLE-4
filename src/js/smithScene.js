const game = new ex.Engine({
    width: 800,
    height: 600,
  });
  
  // Tekst elementen
  const welkomTekst = new ex.Label({
    x: 50,
    y: 50,
    text: "Hallo en welkom in mijn winkel. Lever hier uw vissen in.",
  });
  
  const optie1Tekst = new ex.Label({
    x: 50,
    y: 100,
    text: "1. Wilt u uw vissen inleveren?",
  });
  
  const optie2Tekst = new ex.Label({
    x: 50,
    y: 130,
    text: "2. Als u naar de casino wilt?",
  });
  
  game.add(welkomTekst);
  game.add(optie1Tekst);
  game.add(optie2Tekst);
  
  // Event handler voor toetsen
  game.input.keyboard.on("press", (evt) => {
    if (evt.key === ex.Input.Keys.Key1) {
      alert("U heeft gekozen om uw vissen in te leveren.");
      // Hier zou je verdere logica kunnen toevoegen voor wat er gebeurt na optie 1
    } else if (evt.key === ex.Input.Keys.Key2) {
      alert("U heeft gekozen om naar de casino te gaan.");
      // Hier zou je verdere logica kunnen toevoegen voor wat er gebeurt na optie 2
    }
  });
  
  game.start();
  
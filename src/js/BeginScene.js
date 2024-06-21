import { Scene, Label, Color, Vector, Actor, CoordPlane, TextAlign, Font, Animation, SpriteSheet, Sprite } from 'excalibur';
import { Resources } from './resources';


export class BeginScene extends Scene {
    constructor(game) {
        super();
        this.game = game;
    }

    onInitialize(engine) {
        // Titel label (Titel afbeelding als een Sprite)
        const TitelSprite = new Sprite({
            image: Resources.Titel,
            destSize: { width: 1000, height: 500 }
        });

         // Check if there is a saved volume in localStorage
         const savedVolume = localStorage.getItem('volume');
         if (savedVolume !== null) {
             // Apply the saved volume to your background music or any relevant audio sources
             this.game.backgroundMusic.volume = parseFloat(savedVolume);
         }
            


        const Titel = new Actor({
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2 - 250),
            anchor: new Vector(0.5, 0.5)
        });
        Titel.graphics.use(TitelSprite);
        this.add(Titel);


        

        // Definieer de sprites voor de standaard en hover statussen van de startknop
        const startknopSprite = new Sprite({
            image: Resources.GameStart,
            destSize: { width: 300, height: 75 }
        });

        const startknopHoverSprite = new Sprite({
            image: Resources.GameStartSelect,
            destSize: { width: 300, height: 75 }
        });

        // Maak de startknop actor
        const startknop = new Actor({
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2 + 150),
            anchor: new Vector(0.5, 0.5)
        });

        // Gebruik de standaard sprite voor de startknop
        startknop.graphics.use(startknopSprite);
        this.add(startknop);

        // Voeg een event handler toe voor wanneer de muis op de knop wordt losgelaten
        startknop.on('pointerup', () => {
            this.game.goToScene('Intro');
        });

        // Voeg event handlers toe voor hover en leave events
        startknop.on('pointerenter', () => {
            // Verander de afbeelding naar de hover afbeelding
            startknop.graphics.use(startknopHoverSprite);
        });

        startknop.on('pointerleave', () => {
            // Verander de afbeelding terug naar de standaard afbeelding
            startknop.graphics.use(startknopSprite);
        });

        // Definieer de sprites voor de standaard en hover statussen van de startknop
        const optionsSprite = new Sprite({
            image: Resources.Options,
            destSize: { width: 300, height: 75 }
        });

        const optionsHoverSprite = new Sprite({
            image: Resources.OptionsSelect,
            destSize: { width: 300, height: 75 }
        });

        // Maak de startknop actor
        const options = new Actor({
            pos: new Vector(engine.drawWidth / 2 + 70, engine.drawHeight / 2 + 260),
            anchor: new Vector(0.5, 0.5)
        });

        // Gebruik de standaard sprite voor de startknop
        options.graphics.use(optionsSprite);
        this.add(options);

        // Voeg een event handler toe voor wanneer de muis op de knop wordt losgelaten
        options.on('pointerup', () => {
            this.game.goToScene('options');
        });

        // Voeg event handlers toe voor hover en leave events
        options.on('pointerenter', () => {
            // Verander de afbeelding naar de hover afbeelding
            options.graphics.use(optionsHoverSprite);
        });

        options.on('pointerleave', () => {
            // Verander de afbeelding terug naar de standaard afbeelding
            options.graphics.use(optionsSprite);
        });



    }
}

// Helper functie om een range van nummers te genereren
function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}

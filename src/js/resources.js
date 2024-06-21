import { ImageSource, Loader } from 'excalibur';
import { TiledResource } from '@excaliburjs/plugin-tiled';

const Resources = {
  Player: new ImageSource('images/Storm-forw.png'),
  Player_back: new ImageSource('images/Storm-back.png'),
  Player_left: new ImageSource('images/Storm-left-stand.png'),
  Player_right: new ImageSource('images/Storm-right-stand.png'),
  gold: new ImageSource('images/goldfish.png'),
  nothing: new ImageSource('images/nothing.png'),
  trash: new ImageSource('images/trash.png'),
  tiledMap: new TiledResource('maps/TileMap-cle4.tmx'),
  GameStart: new ImageSource('images/startgame.png'),
    GameStartSelect: new ImageSource('images/startgameselect.png'),
    Titel: new ImageSource('images/titel.png'),
    Options: new ImageSource('images/options.png'),
    OptionsSelect: new ImageSource('images/optionsselect.png'),
    Home: new ImageSource('images/home.png'),
    HomeSelect: new ImageSource('images/homeselect.png'),
    Bus: new ImageSource('images/buszwart.png'),
    Muziek: new Audio('images/muziek.ogg'),
  // Add other resources here if needed
};

const ResourceLoader = new Loader([
  Resources.Player,
  Resources.tiledMap,
  Resources.Player_back,
  Resources.Player_left,
  Resources.Player_right,
  Resources.gold,
  Resources.nothing,
  Resources.trash,
  Resources.GameStart,
  Resources.GameStartSelect,
  Resources.Titel,
  Resources.Options,
  Resources.OptionsSelect,
  Resources.Home,
  Resources.HomeSelect,
  Resources.Bus
]);

export { Resources, ResourceLoader };
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
  Textbox: new ImageSource('images/textbox.png'),
  Smith: new ImageSource('images/Smid_scene.png'),
  TrophyBlack: new ImageSource('images/trophyBlack.png'),
  TrophyBronze: new ImageSource('images/trophyBronze.png'),
  TrophySilver: new ImageSource('images/trophySilver.png'),
  TrophyGold: new ImageSource('images/trophyGold.png'),
  TrophyGreen: new ImageSource('images/trophyGreen.png'),
  TrophyDiamond: new ImageSource('images/trophyDiamond.png'),
  TrophyCount: new ImageSource('images/trophyCount.png'),
  Control: new ImageSource('images/controls.png'), 
  ControlsSelect: new ImageSource('images/controlsselect.png'), 
  Controlpixel: new ImageSource('images/control.png'),
  Achievement: new Audio('images/achievement.mp3'),
  Goldbar1: new ImageSource('images/1goldbar.png'),
  Crystal: new ImageSource('images/crystal.png'),
  Diamond: new ImageSource('images/daimond.png'),
  Goldbar: new ImageSource('images/goldbar.png'),
  Pickaxe: new ImageSource('images/pickaxe.png'),
  BettingBackground: new ImageSource('images/backgroud-betting-ship.png'),
  Maurice: new ImageSource('images/Maurice_29.png'),
  Explosion: new ImageSource('images/My-img8bit-com-Effect__2_-removebg-preview.png'),

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
  Resources.Bus,
  Resources.Textbox,
  Resources.Smith,
  Resources.TrophyBlack,
  Resources.TrophyBronze,
  Resources.TrophySilver,
  Resources.TrophyGreen,
  Resources.TrophyDiamond,
  Resources.TrophyGold,
  Resources.TrophyCount,
  Resources.Control,
  Resources.ControlsSelect,
  Resources.Controlpixel,
  Resources.Goldbar1,
  Resources.Crystal,
  Resources.Diamond,
  Resources.Goldbar,
  Resources.Pickaxe,
  Resources.BettingBackground,
  Resources.Maurice,
  Resources.Explosion,
]);

export { Resources, ResourceLoader };
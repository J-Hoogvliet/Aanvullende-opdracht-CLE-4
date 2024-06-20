import { ImageSource, Loader } from 'excalibur';
import { TiledResource } from '@excaliburjs/plugin-tiled';

const Resources = {
  Player: new ImageSource('images/Storm-forw.png'),
  tiledMap: new TiledResource('maps/TileMap-cle4.tmx')
  // Add other resources here if needed
};

const ResourceLoader = new Loader([
  Resources.Player,
  Resources.tiledMap
]);

export { Resources, ResourceLoader };
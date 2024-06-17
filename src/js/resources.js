import { ImageSource, Sound, Resource, Loader, TileMap } from 'excalibur'
import { TiledResource } from '@excaliburjs/plugin-tiled'


const Resources = {
    Player: new ImageSource('images/fish.png'),
    Land: new TiledResource ('images/TileMap-cle4..tmx'),
}
const ResourceLoader = new Loader([
    Resources.Player,
    Resources.Land,
])


export { Resources, ResourceLoader }
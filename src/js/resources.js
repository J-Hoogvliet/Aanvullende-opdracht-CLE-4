import { ImageSource, Sound, Resource, Loader } from 'excalibur'


const Resources = {
    Player: new ImageSource('images/fish.png'),
    Land: new ImageSource('images/Green.png'),
}
const ResourceLoader = new Loader([
    Resources.Player,
    Resources.Land,
])


export { Resources, ResourceLoader }
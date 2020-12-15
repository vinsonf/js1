import {Player as MyPlayer} from './player.js';
export class Enemy extends MyPlayer {
    lookForPlayer() {
        console.log('searching');
    }
}

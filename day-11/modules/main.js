import { Player, randomNumber } from './player.js';
import { Enemy } from './enemy.js'

const player1 = new Player();
player1.attack();

const enemy1 = new Enemy();
enemy1.lookForPlayer();

console.log(randomNumber(5));

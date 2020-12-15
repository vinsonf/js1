export class Player {
    health = 100;
    attack() {
        console.log('attack');
    }
}

export function randomNumber(range) {
    return Math.random() * range;
}

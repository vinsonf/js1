const player1 = new Player(200, 200, 'red');
const player2 = new Player(300, 300, 'blue', 'a', 'd', 'w', 's');

const player3 = new Player(400, 200, 'green', 'j', 'l', 'i', 'k');
const player4 = new Player(400, 300, 'purple', 'c', 'b', 'f', 'v');

window.addEventListener('keydown', function (event) {

    player1.move(event.key);
    player2.move(event.key);
    player3.move(event.key);
    player4.move(event.key);
});

console.log(player1, player2);
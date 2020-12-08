const players = [];

function MyPlayer(name, health, color) {
    return {
        name,
        health,
        color,
        speak: function () {

        }
    }
}

players.push(new Player(200, 200, 'red'));

function random() {
    return Math.floor(Math.random() * 800);
}

for (let i = 0; i < 1; i++) {
    players.push(new Enemy(random(), random(), 'purple'))
}
window.addEventListener('keydown', function (event) {

    players.forEach( player => {
        player.move(event.key);
        if (player instanceof Enemy) {
            players[0].checkCollision(player)
        }
    });
});

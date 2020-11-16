var score = 0;
let isPaused = true;

function addPoint() {
    score += 2;
}

function createMole() {
    const gameView =  document.querySelector('#game-view');
    gameView.innerHTML = `<div style="top: ${getRandomNumber()}px; left:${getRandomNumber()}px" onclick="addPoint()"></div>`;
}

function getRandomNumber() {
     return Math.ceil( Math.random() * 600 ); 
}

setInterval(   function() {
    if (!isPaused) {
        createMole();
    }
},    1000 );

setTimeout(   function() {
    isPaused = true;
    alert('you scored: ' + score);
},    1000 * 12    );


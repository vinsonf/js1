const suits = ['spade', 'diamond', 'club', 'heart'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

const cards = [];

suits.forEach( suit => {
    values.forEach( value => {
        const card = {
            suit: suit,
            value: value,
        }
        cards.push(card);
    });
});

cards.sort(function (a, b) {
    return Math.random() > .5 ? -1 : 1
});
console.log(cards);

let dealersTotal = 0;
let playersTotal = 0;

function addDealerCard() {
    const ul = document.querySelectorAll('ul')[0];
    const li = document.createElement('li');
    const card = cards.splice(Math.floor(Math.random() * cards.length), 1)[0];
    console.log(card);
    li.innerHTML = `<div>${card.suit}</div><div>${card.value}</div>`;
    ul.appendChild(li);

    switch (card.value) {
        case 'J':
            dealersTotal += 10;
            break;
        case 'Q':
            dealersTotal += 10;
            break;
        case 'K':
            dealersTotal += 10;
            break;
        case 'A':
            dealersTotal += Number(prompt(1 + 'or 10'));
            break;
        default:
            dealersTotal += card.value;
    }
    document.querySelector('#dealer').innerHTML = dealersTotal;
    if (dealersTotal > 21) {
        alert('bust, player wins!')
    }
}

function addPlayerCard() {
    const ul = document.querySelectorAll('ul')[1];
    const li = document.createElement('li');
    const card = cards.splice(Math.floor(Math.random() * cards.length), 1)[0];
    console.log(card);
    li.innerHTML = `<div>${card.suit}</div><div>${card.value}</div>`;
    ul.appendChild(li);
    switch (card.value) {
        case 'J':
            playersTotal += 10;
            break;
        case 'Q':
            playersTotal += 10;
            break;
        case 'K':
            playersTotal += 10;
            break;
        case 'A':
            playersTotal += Number(prompt(1 + 'or 10'));
            break;
        default:
            playersTotal += card.value;
    }
    document.querySelector('#player').innerHTML = playersTotal;
    if (playersTotal > 21) {
        alert('bust, dealer wins!')
    }
}
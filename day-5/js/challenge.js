/*
Write a function that accepts a number as an argument
Alert the user whether the given number is even or odd
Call your function
*/


function evenOrOdd(value) {
    if (!value) {
        return console.log('enter a real number!');
    }
    return value % 2 ? 'odd' : 'even';
}
const answer = parseInt(prompt('what number'));
document.body.innerHTML = evenOrOdd(answer);
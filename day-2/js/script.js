// Declare
var myVARVariable = 1 + 'string' + true;
var myVARVariable = 1 + 'string' + true;
let myLETVariable = '';
myLETVariable = '';
const myConstVariable = 1;


// Data Types
const title = 'strings';
const age = 9;
const isActive = true;
const hasVipMembership = false;
const myObject = {
    age: 1,
    isActive: 3,
    2: 5
};
const myArray = [1,3,5];

// Operators
let answer = 2;
answer %= 4;

// Strings
answer = 'a ${1 + 2}';

const abc = 2
answer = 'abcdefghijklmnopqrstuvwxyz';

console.log(answer);
console.dir( answer.indexOf('!'));

const users = [
    {
        name: 'Joe',
        age: 40,
        isActive: true
    },
    {
        name: 'Moe',
        age: 20,
        isActive: true
    },
    {
        name: 'larry',
        age: 60,
        isActive: false
    },
    {
        name: 'Curly',
        age: 60,
        isActive: false
    },

];

const ul = document.querySelector('ul');
ul.innerHTML = '';


users.forEach( function (user) {

    ul.innerHTML += `
    <li>
    <div>${user.name.replace('l', 'L')}</div>
    <div>${user.isActive}</div>
    </li>
    `;
});


let selected = null;

console.log(variable);
variable = 10;
console.log(variable);
variable = undefined;
console.log(variable);










//



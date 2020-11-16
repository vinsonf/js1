// declare
// var myVar = 're declare-able and re assignable';
// let myLet = 're assignable';
// const myCont = 'once assigned cannot be re assigned';

// TYPES
const myString = 'This is a string.';
const myNumber = .2;
const myBoolean = false;

// TYPES EXTENDED console.log('test');
const myObject = {
    backgroundColor: 1,
    myString: 'This is a string',
    myBoolean: true,
    updateBackgroundColor: function () {
        this.backgroundColor = 'yellow';
    }
};
const myArray = [ 1, 'This is a string', true];

console.log(myObject);
console.log(myArray);

function doubleANumber(value) {
    console.log('can you see this');
    return value * 2;
}

console.log(doubleANumber(2, 3));
console.log(doubleANumber(4));
console.log(doubleANumber(100));
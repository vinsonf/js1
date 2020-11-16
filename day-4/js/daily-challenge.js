// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number
let chance = 0;
let validNumber1 = getValidNumber(1);
let validNumber2 = getValidNumber(2);


function getValidNumber(number) {
    chance++;
    const number1 = prompt('number: ' + number);
    if (chance > 3) {
        return 0;
    }
    const parsedNumber = parseInt(number1);
    if (!parsedNumber && parsedNumber !== 0) {
        return getValidNumber(number);
    }
    return parsedNumber;
}

alert(Math.max(validNumber1, validNumber2))






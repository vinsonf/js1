const myArray = ['value1', 'value2', 'value3', 'value4'];
function random(range) {
    return Math.random() * range;
}

function floor(decimal) {
    return Math.floor(decimal)
}

function getRandomString() {
    const length = myArray.length;
    console.log('length', length);
    const randomWithDecimal = random(length);
    console.log('randomWithDecimal', randomWithDecimal);
    const floored = floor(randomWithDecimal);
    console.log('floored', floored);

    const answer = myArray[floored];
    console.log(answer);
}





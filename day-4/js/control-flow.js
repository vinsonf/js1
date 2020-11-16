a = 3;
x = 9;
if (a === 2) {
    console.log('is 2')
} else if (x === 9) {
    console.log('is 3')
} else {
    console.log('this is default')
}

switch (a)  {
    case 2:
        console.log('is 2');
        break;
    case 3:
        console.log('is 3');
        break;
    default:
        console.log('this is default');
}

a === 3 ? console.log('is 3') : console.log('is not 3');
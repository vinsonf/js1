// const myAlertValue = alert('this is internal');
// const myPromptValue = prompt('enter something');
// const myConfirmValue = confirm('Yes or No');
// const myDate = new Date();
// myDate.setMonth(myDate.getMonth() + 11);

function randomNumberGenerator(start, range) {
    if (!start || !range) {
        console.log('please enter a valid range');
        return 0;
    }
    return Math.ceil(Math.random() * range) + start;
}


//
// const user = {}
// if (randomNumberGenerator(0, 5) > 2 && user.age >= 18) {
//     console.log('it was greater than 2 and they are of age');
// } else if (user.age > 35) {
//     console.log('this is free to you')
// } else {
//     console.log('this does\'t work for you ')
// }
// user.age > 17 ?
//     console.log('yes they have access') :
//     console.log('no access');
//
// switch (user.age) {
//     case 18:
//         console.log('you are exactly 18');
//         break;
//     case 19:
//         console.log('you are exactly 19');
//         break
//     default:
//         console.log('you are some other age');
// }

const answer = randomNumberGenerator(4, 4)
console.log(answer);
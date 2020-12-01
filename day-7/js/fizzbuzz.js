function fizzbuzz() {
    for (let i = 1; i <= 100; i++ ) {
        const fizzBuzz = (i % 3 === 0) && (i % 5 === 0) ? 'fizzBuzz' : '';
        const fizz = i % 3 === 0 ? 'fizz' : '';
        const buzz = (i % 5) === 0 ? 'buzz' : '';
        const answer = fizzBuzz || fizz || buzz || i;
        console.log(answer);
    }
}

fizzbuzz();

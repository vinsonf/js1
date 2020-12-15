const splash = document.createElement('div');
const content = document.createElement('div');



document.body.style.overflow = 'hidden';
document.body.style.margin = '0';


splash.style.width = '100%';
splash.style.height = '100vh';
splash.style.backgroundColor = 'green';
splash.style.position = 'absolute';
splash.style.zIndex = '100';
splash.classList.add('splash');

const myInterval = setInterval(function () {
    console.log('interval');
    if (splash.classList.contains('fade')) {
        splash.classList.remove('fade');
        splash.classList.add('fadeIn');
    } else {
        splash.classList.add('fade');
        splash.classList.remove('fadeIn');
    }

}, 1000);

setTimeout(function () {
   clearInterval(myInterval)
}, 5000);

content.style.width = '100%';
content.style.height = '100vh';
content.style.backgroundColor = 'red';
content.style.position = 'absolute';

document.body.appendChild(splash);
document.body.appendChild(content);


setImmediate(function () {
    clearInterval(myInterval);
});

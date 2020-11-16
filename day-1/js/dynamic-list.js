const apiList = [
    {name: 'one', connected: true},
    {name: 'two', connected: false},
    {name: 'three', connected: false},
    {name: 'four', connected: true},
    {name: 'five', connected: true}
];

const ul = document.querySelector('ol');

apiList.forEach( user => {
    const li = document.createElement('li');
    li.innerHTML = user.name;
    user.connected ? li.classList.add('online') : li.classList.add('offline');
    ul.appendChild(li);
});
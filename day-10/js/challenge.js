const form = document.createElement('form');
const usernameInput = document.createElement('input');
const passwordInput = document.createElement('input');
const confirmInput = document.createElement('input');
const button = document.createElement('button');


passwordInput.type = 'password';
confirmInput.type = 'password';

usernameInput.placeholder = 'username';
passwordInput.placeholder = 'password';
confirmInput.placeholder = 'confirm';
button.innerHTML = 'Create Account';







document.body.appendChild(form);
form.appendChild(usernameInput);
form.appendChild(passwordInput);
form.appendChild(confirmInput);
form.appendChild(button);


form.addEventListener('submit', function (event) {
    event.preventDefault();
})

button.disabled = true;

function valid() {
    const username = usernameInput.value;
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    if (username && password && confirm) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

usernameInput.addEventListener('input', valid);
passwordInput.addEventListener('input', valid);
confirmInput.addEventListener('input', valid);

button.addEventListener('click', function () {
    const username = usernameInput.value;
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    if (password === confirm) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        console.log(username, password);
    } else {
        alert('Passwords do not match');
    }

})

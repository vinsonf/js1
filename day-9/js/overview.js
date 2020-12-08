function onSubmit(event) {
    event.preventDefault();
    const validMyName = event.target.myName.value;
    const validIsActive = event.target.isActive.checked;

    if (!validIsActive || !validMyName) {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
        return;
    }

    event.target.classList.remove('invalid');
    event.target.classList.add('valid');

    console.log('this is on submit', event.target.isActive.checked);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
    xhr.onreadystatechange = function (data) {
        console.log(data);
    }
    xhr.onload = function (data) {
        const obj = JSON.parse(xhr.responseText);
        console.log(obj);
        document.querySelector('img').src = obj.message;
    }
    xhr.send();
}



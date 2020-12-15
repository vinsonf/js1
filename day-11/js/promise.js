const server = {
    users: ['Larry', 'Moe', 'Curly', 'Shemp'],

    profiles: {
        Larry: {
            last: 'Schmo1'
        },
        Moe: {
            last: 'Schmo2'
        },
        Curly: {
            last: 'Schmo3'
        },
        Shemp: {
            last: 'Schmo4'
        }
    },

    getUsers: function () {
       return new Promise((resolve, reject) => {
              resolve(this.users);
       });
    },

    getProfile: function (name) {
        return new Promise((resolve, reject) => {
                resolve(this.profiles[name])
        });
    }
}


const usersPromise = server.getUsers();

// usersPromise.then(users => {
//     console.log('users', users);
//     return server.getProfile(users[0]);
// }).then( profile => {
//     console.log('profile', profile);
// }).catch(err => console.log(err));

const url = 'https://dog.ceo/api/breeds/image/random';
function ownFetch(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            console.log(xhr.responseText);
            resolve(JSON.parse(xhr.responseText));
        }
        xhr.send();
    })
}

async function login() {
    try {
        const users = await server.getUsers();

        Promise
            .all([
                server.getProfile(users[1]),
                ownFetch(url)
                ]).then(value => {
                    console.log(value, 'promise all');
        })
    } catch (err) {
        console.log(err);
    }
}

login();





// fetch(url).then( response => {
//     console.log('response', response);
//     return response.json()
// }).then( result => {
//     console.log(result);
// });


// ownFetch(url)
//     .then( ourResult => { console.log(ourResult)})



async function testFetch() {
    const message = await ownFetch(url);
    console.log(message);
}

testFetch();

var pets = ['dog'];

function petPets() {
    this.pets.forEach( function (pet) {
        console.log('i pet my', pet);
    });
}

petPets();


const user1 = {
    pets: ['cat', 'spider'],
    petPets: petPets,
};
const user2 = {
    pets: ['dog', 'fish'],
    petPets: petPets,
};
function localFunction() {
    const name = 'local';
}

localFunction();
console.log(user2.petPets());
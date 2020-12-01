
// Create
const button = document.createElement('button');
const groceryList = [];
const ul = document.createElement('ul');
const ulDone = document.createElement('ul');

// Read
const body = document.querySelector('body');

// Update
body.appendChild(ul);
body.appendChild(ulDone);
// Update
body.prepend(button);
// Update
button.innerHTML = 'Add Item';

// Update
button.addEventListener('click', function () {
    // Read
    const value = prompt('Name of Item?');
    // Update
    groceryList.push(value);
    // Create
    const li = document.createElement('li');
    // Update
    li.innerHTML = value;
    // Update
    ul.appendChild(li);
    // Update
    console.log(groceryList);

    // Create
    const deleteButton = document.createElement('button');
    // Update
    deleteButton.innerHTML = 'X';
    // Update
    li.prepend(deleteButton);
    // Update
    deleteButton.addEventListener('click', function () {
        console.log('delete', this);
        // Delete
        // this.parentElement.remove();
        // li.remove();
        ulDone.appendChild(li);
    });

});

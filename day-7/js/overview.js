const imgSize = 200;
const storeData = {
    items: [],
    name: 'GW Market',
    ui: {
        body: document.querySelector('body'),
        header: document.createElement('h1'),
        itemList: document.createElement('ul'),
        total: document.createElement('h2'),
    },
    cart: [],
    cartList: document.createElement('ul'),
};

storeData.items.push(
    createItem(
        500,
        'usb',
        '16gb',
        true
    ),
    createItem(
        50000,
        'tv',
        '75 inch curved',
        false
    ),
    createItem(
        100,
        'gum',
        'chewy',
        true
    ),
    createItem(
        100000,
        'computer',
        'good one',
        false
    ),
);
storeData.ui.itemList.style.display = 'flex';
storeData.ui.body.appendChild(storeData.ui.header);
storeData.ui.header.innerText = storeData.name;
storeData.ui.header.style.textAlign = 'center';
storeData.ui.body.appendChild(storeData.ui.itemList);
storeData.ui.body.appendChild(document.createElement('hr'));
storeData.ui.body.appendChild(storeData.cartList);
storeData.cartList.style.display = 'flex';
storeData.ui.body.appendChild(document.createElement('hr'));
storeData.ui.body.appendChild(storeData.ui.total);

function addStoreItemsToList(item) {
    const li = document.createElement('li');
    li.style.listStyle = 'none';
    storeData.ui.itemList.appendChild(li);
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    li.appendChild(ul);
    const imgLi = document.createElement('li');
    ul.appendChild(imgLi);
    imgLi.innerHTML = `<img width="${imgSize}" height="${imgSize}" src="https://source.unsplash.com/random/100×100/?${item.title}"/>`;
    imgLi.addEventListener('click', function () {
       storeData.cart.push(item);
       storeData.cartList.innerHTML = cartListHtml();
       const images = storeData.cartList.querySelectorAll('img');
       images.forEach( img => {
           img.addEventListener('click', function () {
              let index = 0;
               console.log(storeData.cart);
               storeData.cart.forEach( (thing, loc) => {
                  if (thing.title === item.title) {
                      index = loc;
                  }
              });
              storeData.cart.splice(index, 1);
              updateTotal();
               storeData.cartList.innerHTML = cartListHtml();
           });
       })
    });
    createDetail('Price', 'price');
    createDetail('Title', 'title');
    createDetail('Desc', 'description');
    createDetail('Sale', 'onSale');

    function createDetail(detailName, property) {
        const detailLi = document.createElement('li');
        ul.appendChild(detailLi);
        detailLi.innerHTML = detailName + ': ' + convertCentsToDollars(item[property]);
    }


}

storeData.items.forEach( function (item) {
    addStoreItemsToList(item);
});

function cartListHtml() {
    updateTotal();
    let html = '';
    storeData.cart.forEach(function (item) {
        html += `
            <li>
                <ul>
                    <li><img width="${imgSize}" height="${imgSize}" src="https://source.unsplash.com/random/100×100/?${item.title}" alt=""></li>
                    <li>Title: ${item.title}</li>
                    <li>Price: ${convertCentsToDollars(item.price)}</li>
                </ul>
            </li>
        `;

    });
    return html;
}

function updateTotal() {
    let total = 0;
    storeData.cart.forEach( item => {
        total += item.price;
    });
    storeData.ui.total.innerHTML = convertCentsToDollars(total);
}





function convertCentsToDollars(pennies) {
    if (typeof pennies === 'number') {
        const newString = String(pennies)
        const array = newString.split('');
        array.splice(-2, 0, '.');
        const convertedString = array.join('');
        return '$' + convertedString;
    } else {
        return pennies;
    }
}

function createItem(price, title, description, onSale) {
    return {
        price: price,
        title: title,
        description,
        onSale,
    }
}
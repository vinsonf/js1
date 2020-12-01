const body = document.querySelector('body');

body.innerHTML = `
<h1> Variable Declarations </h1>
    <ul>
    <li>var</li>
    <li>const</li>
    <li>let</li>
</ul>
`;

body.innerHTML += `
<h1> Variable Names </h1>
    <ul>
    <li>start with letters also _$</li>
    <li>can not start with !-^ and numbers</li>
    <li>casing: camelCasing, PascalCasing, snake_casing</li>
</ul>
`;

body.innerHTML += `
<h1> Variable Types </h1>
    <ul>
    <li>string: names, titles, properties, label</li>
    <li>number: numbers, quantities, markers, value</li>
    <li>boolean: true false, yes-no, is, has</li>
    <li>object: container that holds other variables</li>
    <li>array: container for listable items</li>
    <li>functions: objects that are callable</li>
</ul>
`;

body.innerHTML += '<hr>'

function addTopic(topic, listOfThings) {
    let createData = `<h1> ${topic} </h1><ul>`;
    for (let point of listOfThings) {
        console.log(point);
        createData += `<li>${point}</li>`
    }
    createData += `</ul>`
    return createData;
}


body.innerHTML += addTopic(
    'Variable Names',
    [
        'starts with letters',
        'can not start with numbers',
        'casing: camelCase, PascalCase, snake_case',
    ]);

body.innerHTML += addTopic(
    'Variable Types',
    [
        'string',
        'number',
        'boolean',
        'object',
        'array',
        'function'
    ]
)
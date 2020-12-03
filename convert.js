const fs = require('fs');

const fileData = fs.readFileSync('./something.csv', 'utf8');


let on = false;
const newDataArray = [];
let string = '';
fileData.split('').forEach( c => {
    if (c === '"') {
        on = !on;
    }
    if (c === ',' && on === false) {
        newDataArray.push(string);
        string = '';
    } else {
        if (c !== '"')
        string+= c;
    }
});

fs.writeFileSync('./somethingConvert.csv', fileData);
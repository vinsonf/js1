const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = [];
const apiVersion = '1.0.0';


// Server Stuff;
app.get('', function (req,res,next){
    res.send('<h1>Hello</h1>');
});

app.get('/users', function (req,res,next){
    res.json({
        users,
        version: apiVersion,
        time: new Date(),
    });
});

app.post('/users', function (req, res, next){
    console.log(req.body);

    users.push(req.body.username);


    res.json({
        errors: [''],
        users,
        version: apiVersion,
        time: new Date(),
    });
});


const server = app.listen(4000, function () {
    console.log('app running on port.', server.address().port);
});

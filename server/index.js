const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = [];
const apiVersion = '1.0.0';


// Server Stuff;
app.get('', function (req,res,next){
    res.send(html);
});

app.get('/users', function (req,res,next){
    res.json({
        users,
        version: apiVersion,
        time: new Date(),
    });
});

app.get('/login', function (req,res,next){
    res.send('<h1>Login</h1>');
});


app.post('', function (req,res,next){

    console.log(req.body);
    if (req.body.name && !users.includes(req.body.name)) {
        users.push(req.body.name);
    }
    res.json({
        users,
        version: apiVersion,
        time: new Date(),
    });
});

const server = app.listen(4000, function () {
    console.log('app running on port.', server.address().port);
});

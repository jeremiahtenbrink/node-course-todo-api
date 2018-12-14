"use strict";

let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');

let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text,
    });

    todo.save().then((doc) => {
       console.log("Saved todo");
       console.log(JSON.stringify(doc, undefined, 2));
       res.send(JSON.stringify(doc));
    },(e) => {
        console.log('Unable to save todo');
        res.send("Unable to save todo", e);
    });
});

app.listen(4000, () => {
    console.log('Started on port 4000');
});








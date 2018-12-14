let mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    completedAt: {
        type: Number,
        default: null,
    }
});

module.exports = {Todo};

// let newTodo = new Todo({
//    text: "Cook dinner"
// });
//
// newTodo.save().then((result) => {
//     console.log("Saved todo");
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

// let otherTodo = new Todo({
//     text: "feed the cat",
//     completed: true,
//     completedAt: 123,
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log("Unable to save todo", e);
// });
let mongoose = require('mongoose');

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    }
});

module.exports = {User};


// var user = new User({
//     email: "Jeremiah",
// });
//
// user.save((doc) => {
//     console.log(JSON.stringify(doc, undefined, 4));
// }, (e) => {
//    console.log("Unable to save user", e);
// });
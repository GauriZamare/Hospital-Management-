const mongoose = require('mongoose');

// User Schema for Create a user 
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// creating the model for userSchema
const User = mongoose.model("user", userSchema);
module.exports = User;
const mongoose = require('mongoose');

// Profile Schema for Create a Profile 
const profileSchema = new mongoose.Schema({
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
    phone: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        default: "Male",
        enum: ["Male", "Female","Others"]
      },
    age: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    docurl: {
        type: String,
        required: true
    },
    medicalhistory: {
        type: String,
        required: true
    },
});

// creating the model for ProfileSchema
const Profile = mongoose.model("profile", profileSchema);
module.exports = Profile;
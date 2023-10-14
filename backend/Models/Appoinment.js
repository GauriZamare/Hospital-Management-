const mongoose = require('mongoose');

// Appoinment Schema for Create a Appoinment 
const appoinmentSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    doctor_name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

// creating the model for appoinmentSchema
const Appoinment = mongoose.model("appoinment", appoinmentSchema);
module.exports = Appoinment;
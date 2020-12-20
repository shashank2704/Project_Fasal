const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 0,
        max: 100,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    }
    
});

module.exports = new mongoose.model('user', userschema);

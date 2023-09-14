const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    contactNo: {
        type: String,
    },
    // You can add more user-related fields here
});

const User = mongoose.model('User', userSchema);

module.exports = User;

const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    // List of user IDs who are part of this group
    usersList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;

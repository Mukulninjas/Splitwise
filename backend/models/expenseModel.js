const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    expenseId: {
        type: String,
        unique: true,
        required: true,
    },
    isSettled: {
        type: Boolean,
        default: false,
    },
    // Map of userId to balance for this expense
    balances: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        balance: {
            type: Number,
            default: 0,
        },
    }],
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
    },
    title: {
        type: String,
        required: true,
    },
    timeStamp: {
        type: Date,
        default: Date.now,
    },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;

const mongoose =require('mongoose');

const TransactionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    comment: {
        type: String,
        required: false
    },
    remeaningbalance: {
        type: Number,
        required: false,
        default: 100000
    },
    lasttransaction: {
        type: Number,
        require: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('transcation', TransactionSchema);
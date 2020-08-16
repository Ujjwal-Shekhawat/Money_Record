const mongoose =require('mongoose');

const TransactionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: email,
        required: true
    },
    remeaningbalance: {
        type: NumberDecimal,
        required: true
    },
    lasttransaction: {
        type: NumberDecimal,
        require: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

module.exports = TransactionSchema = mongoose.model('transcation', TransactionSchema);
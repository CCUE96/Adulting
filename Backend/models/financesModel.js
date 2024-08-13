const { Schema, model } = require('mongoose');

const financeSchema = new Schema({
    annualIncome: {
        type: String,
        required: true,
    },
    weeklyIncome: {
        type: String,
        required: true
    },
    monthlyIncome: {
        type: String,
        required: true
    },
    expenses: {
        type: Map,
        of: String,
        default: {}
    },
    savings: {
        type: String,
        required: true
    },
    investments: {
        type: Map,
        of: String,
        default: {}
    },
    debts: {
        type: Map,
        of: String,
        default: {}
    },
    currency: {
        type: String,
        required: true,
        default: 'USD'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

financeSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Finance = model('Finance', financeSchema);

module.exports = Finance;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    cardholderName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cardNumber: { type: String, required: true },
    expirationDate: { type: String, required: true },
    cvv: { type: String, required: true },
    phoneNo: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.models.PaymentData || mongoose.model('PaymentData', userSchema);


const express = require('express');
const PaymentData = require('../models/Paymentdb');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure:true,
  auth: {
      user: process.env.MYEMAIL,
      pass: process.env.MYPASS,
  },
});

router.post('/payment', async (req, res) => {
    console.log('Payment route accessed');
    const { cardholderName, email, cardNumber, expirationDate, cvv, phoneNo } = req.body;
    const paymentData = new PaymentData({ cardholderName, email, cardNumber, expirationDate, cvv, phoneNo });

    try {
        await paymentData.save();

        await transporter.sendMail({
            from: process.env.MYEMAIL,
            to: email,
            subject: 'Payment Successful',
            text: `Thank you ${cardholderName}, your payment of $${req.body.amount} was successful!`,
        });

        res.status(201).json('Payment processed and email sent.');
    } catch (error) {
        res.status(400).json('Error processing payment: ' + error.message);
    }
});

module.exports = router;


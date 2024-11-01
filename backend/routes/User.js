const express = require('express');
const nodemailer = require('nodemailer');
const User = require('../models/User');
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

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        res.status(200).json({ message: 'Login successful.', name: user.name });
    } catch (error) {
        res.status(500).json({ message: 'Server error: ' + error.message });
    }
});

// Signup route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already in use' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        // Sending email
        await transporter.sendMail({
            from: process.env.MYEMAIL,
            to: email,
            subject: 'Welcome to Our Service',
            text: `Hi ${name},\n\nThank you for registering with us. We're excited to have you on board!`,
        });

        res.status(201).json({ message: 'User registered successfully, email sent.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error: ' + error.message });
    }
});

module.exports = router;

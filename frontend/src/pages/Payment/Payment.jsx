// Payment.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Payment = ({ totalAmount, cartItems, onPaymentComplete }) => {
    const [cardholderName, setCardholderName] = useState('');
    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const paymentData = {
            cardholderName,
            email,
            cardNumber,
            expirationDate,
            cvv,
            phoneNo,
            amount: totalAmount,
        };

        try {
            const response = await axios.post('http://localhost:3000/api/payment', paymentData);
            if (response.status === 201) {
                alert('Payment successful!');
                
                onPaymentComplete(totalAmount, cartItems);
            }
        } catch (error) {
            setError('Error processing payment. Please try again.');
            console.error('Error processing payment:', error);
        }
    };

    return (
        <div>
            <h2>Payment Details</h2>
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    placeholder="Cardholder Name"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Card Number"
                    required
                />
                <input
                    type="text"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    placeholder="Expiration Date (MM/YY)"
                    required
                />
                <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="CVV"
                    required
                />
                <input
                    type="text"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    placeholder="Phone Number"
                    required
                />
                <button type="submit">Pay</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Payment;







  







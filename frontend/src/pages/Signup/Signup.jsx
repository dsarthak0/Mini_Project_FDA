import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = ({ onSignupSuccess, onNavigate }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Sending data:', { name, email, password }); 

        try {
            const response = await axios.post('http://localhost:3000/api/signup', {
                name,
                email,
                password,
            });
            console.log('Signup response:', response.data); // Log the response data
            alert('Signup successful! Please check your email.');
            onSignupSuccess(name);
        } catch (error) {
            console.error('Signup error:', error);
            console.log('Error details:', error.response); // Log error details

            if (error.response) {
                const { status, data } = error.response;
                console.log('Response status:', status); 
                console.log('Response data:', data); 

                if (status === 409) {
                    alert('Account already exists. Redirecting to login.');
                    window.location.href = '/login'; 
                } else {
                    setError(data.message || 'Signup failed. Please try again.');
                }
            } else {
                setError('Network error. Please try again later.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <h2>Sign Up</h2>
            {error && <p className="error">{error}</p>}
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Sign Up</button>
            <button type="button" onClick={() => onNavigate('home')}>
                Cancel
            </button>
        </form>
    );
};

export default Signup;









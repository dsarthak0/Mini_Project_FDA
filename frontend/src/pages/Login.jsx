import React, { useState } from 'react';
import axios from 'axios';


const Login = ({ onLoginSuccess, onNavigate }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                email,
                password,
            });
            const { name } = response.data; 
            onLoginSuccess(name); 
            onNavigate('home'); // Navigate to home after login
        } catch (err) {
            setError('Invalid email or password. Please try again.');
            console.error('Login error:', err);
        }
    };

    return (
        <form onSubmit={handleLogin} className="login-form">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
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
            <button type="submit">Login</button>
            <button type="button" onClick={() => onNavigate('signup')}>
                Sign Up
            </button>
        </form>
    );
};

export default Login;


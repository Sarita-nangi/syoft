// src/components/Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        user_email: '',
        user_password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://syoft.dev/Api/userlogin/api/userlogin', formData);
            localStorage.setItem('user', JSON.stringify(response.data));
            navigate('/dashboard');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="login-container">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="user_email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="user_password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;


// src/components/SignUp.js

import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({
        user_firstname: '',
        user_email: '',
        user_password: '',
        user_phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...formData,
            user_lastname: 'ni',
            user_city: 'Hyderabad',
            user_zipcode: '500072'
        };

        try {
            const response = await axios.post('https://syoft.dev/Api/user_registeration/api/user_registeration', payload);
            console.log(response.data);
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user_firstname" placeholder="First Name" onChange={handleChange} required />
                <input type="email" name="user_email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="user_password" placeholder="Password" onChange={handleChange} required />
                <input type="tel" name="user_phone" placeholder="Phone" onChange={handleChange} required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;

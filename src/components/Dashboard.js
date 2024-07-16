// src/components/Dashboard.js

import React from 'react';

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            {user ? (
                <div className="user-info">
                    <p><strong>First Name:</strong> {user.user_firstname}</p>
                    <p><strong>Email:</strong> {user.user_email}</p>
                    <p><strong>Phone:</strong> {user.user_phone}</p>
                    {/* Add more user information as needed */}
                </div>
            ) : (
                <p>No user information available</p>
            )}
        </div>
    );
};

export default Dashboard;

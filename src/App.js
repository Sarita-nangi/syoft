// src/App.js
// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './styles/styles.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" exact element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;



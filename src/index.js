import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Style/dashboard.css'
import './Style/custom.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './Context/Context';
import { AuthHandler } from './Context/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <AuthHandler>
    <AuthContext>
        <App/>
    </AuthContext>
    </AuthHandler>
    </BrowserRouter>
);


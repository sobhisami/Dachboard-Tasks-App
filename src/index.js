import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers/Routers';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import style from './Resources/css/custom.css';
import { AuthHandle } from './Context/Auth';
import { OprationHandler } from './Context/Opration';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthHandle>
    <OprationHandler>
    <Routers/>
    </OprationHandler>
  </AuthHandle>
  </BrowserRouter>
);



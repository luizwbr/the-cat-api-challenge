/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unused-modules */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EcomContextProvider from './Context/EcomContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <EcomContextProvider>
      <App />
    </EcomContextProvider>
  </>
);

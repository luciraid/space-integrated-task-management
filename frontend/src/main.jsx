import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';     // if you use Tailwind, otherwise remove
import '../styles.css';   // <-- import your new theme

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

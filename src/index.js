import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' in React 18+
import App from './App';
import './App.css'; // Optional for styling

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
root.render( // Use the new render method
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

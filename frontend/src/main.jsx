// frontend/src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Mount the React App into the root div in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

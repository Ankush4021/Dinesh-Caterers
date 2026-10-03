import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './styles.css';

// React app ko browser mein render karna.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter page navigation handle karta hai. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
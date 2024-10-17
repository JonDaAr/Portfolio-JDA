import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('root');
const root = createRoot(container); // Crea un root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

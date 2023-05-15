import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import '@unocss/reset/tailwind.css';
import './index.css';
import 'virtual:uno.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

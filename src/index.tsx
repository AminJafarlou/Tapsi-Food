import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import GlobalProvider from './core/providers/GlobalProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);


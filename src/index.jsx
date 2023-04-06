/* eslint-disable no-undef */
// @ts-nocheck
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './app/store';
import App from './App';
import './index.css';
import { AuthContextProvider } from './context/auth-context';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>,
);

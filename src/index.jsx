import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store.js';
import { Provider } from 'react-redux';
import { TokenProvider } from './logic/TokenContxt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenProvider>
        <Provider store={store}>
          <App />
        </Provider>,
      </TokenProvider>
    </BrowserRouter>
  </React.StrictMode>
);


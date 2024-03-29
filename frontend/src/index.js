import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({reducer:reducers}, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

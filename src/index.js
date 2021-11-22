import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { todos } from './modules/reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    todos,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

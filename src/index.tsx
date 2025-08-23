import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { Provider } from 'react-redux';
import store from './models';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);

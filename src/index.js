import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { App } from 'components/App';
import './index.css';

import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // {/* <BrowserRouter basename="/expedit"> */}
  <Provider store={store}>
    <BrowserRouter basename="/expedit">
      <App />
    </BrowserRouter>
  </Provider>
  // {/* </React.StrictMode> */}
);

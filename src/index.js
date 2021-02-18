/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T07:55:50-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-01T13:17:28-06:00
 */
import React from 'react';
import store from './store';
import App from './components/App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

registerServiceWorker();

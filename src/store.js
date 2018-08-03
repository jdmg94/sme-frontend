/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T09:59:54-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T09:16:22-06:00
 */
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import sagas from './sagas';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = process.env.NODE_ENV === 'production' ?
  applyMiddleware(sagaMiddleware) :
  composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, middleware);

sagaMiddleware.run(sagas);

export default store;

/**
 * @Author: JoseMunoz
 * @Date:   2018-08-02T08:50:43-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T18:19:03-06:00
 */
import {
  fetchFail,
  fetchSuccess,
  FETCH_OPTIONS,
  clearSelection,
} from './Dough.ducks';
import { fetchDough } from '../../services/Dough';
import { CLEAR_ALL } from '../Checkout/Checkout.ducks';
import { all, call, put, takeLatest } from 'redux-saga/effects';

export function* getDough(){
  try {
    const options = yield call(fetchDough);

    yield put(fetchSuccess(options));
  } catch (error) {
    yield put(fetchFail(error));
  }
}

export function* clearDough(){
  yield put(clearSelection());
}

function* rootSaga(){
  yield all([
    takeLatest(CLEAR_ALL, clearDough),
    takeLatest(FETCH_OPTIONS, getDough),
  ]);
}

export default rootSaga;

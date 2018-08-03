/**
 * @Author: JoseMunoz
 * @Date:   2018-08-02T09:27:51-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T18:19:00-06:00
 */
import {
  FETCH_SAUCES,
  fetchFail,
  fetchSuccess,
  clearSelection,
} from './Sauces.ducks';
import { fetchSauce } from '../../services/Sauce';
import { CLEAR_ALL } from '../Checkout/Checkout.ducks';
import { all, call, put, takeLatest } from 'redux-saga/effects';

export function* getSauce(){
  try {
    const options = yield call(fetchSauce);

    yield put(fetchSuccess(options));
  } catch (error) {
    yield put(fetchFail(error));
  }
}

export function* clearSauce(){
  yield put(clearSelection());
}

function* rootSaga(){
  yield all([
    takeLatest(CLEAR_ALL, clearSauce),
    takeLatest(FETCH_SAUCES, getSauce),
  ]);
}

export default rootSaga;

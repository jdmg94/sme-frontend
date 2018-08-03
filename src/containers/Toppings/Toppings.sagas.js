/**
 * @Author: JoseMunoz
 * @Date:   2018-08-02T10:44:37-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T18:27:36-06:00
 */
import { CLEAR_ALL } from '../Checkout/Checkout.ducks';
import { fetchToppings } from '../../services/Toppings';
import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  fetchFail,
  fetchSuccess,
  FETCH_TOPPINGS,
  clearToppings,
} from './Toppings.ducks';

export function* getToppings(){
  try {
    const options = yield call(fetchToppings);

    yield put(fetchSuccess(options));
  } catch (error) {
    yield put(fetchFail(error));
  }
}

export function* clearSelection(){
  yield put(clearToppings());
}

function* rootSaga(){
  yield all([
    takeLatest(CLEAR_ALL, clearSelection),
    takeLatest(FETCH_TOPPINGS, getToppings),
  ]);
}

export default rootSaga;

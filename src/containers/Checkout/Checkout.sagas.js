/**
 * @Author: JoseMunoz
 * @Date:   2018-08-02T14:25:48-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T17:10:47-06:00
 */
import { processOrder } from '../../services/Orders';
import { all, put, call, select, takeLatest } from 'redux-saga/effects';
import {
  PROCESS_ORDER,
  orderFail,
  orderSuccess,
  clearAll,
} from './Checkout.ducks';

export const orderDetails = state => state.Checkout;

export function* submitOrder(){
  try {
    const order = yield select(orderDetails);
    yield call(processOrder, order);

    yield put(orderSuccess());
    yield put(clearAll());
  } catch(error) {
    yield put(orderFail(error));
  }
}

function* rootSaga(){
  yield all([
    takeLatest(PROCESS_ORDER, submitOrder),
  ]);
}

export default rootSaga;

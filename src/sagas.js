/**
 * @Author: JoseMunoz
 * @Date:   2018-08-02T09:08:28-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T17:52:46-06:00
 */
import { all } from 'redux-saga/effects';
import { sagas as Dough } from './containers/Dough';
import { sagas as Sauces } from './containers/Sauces';
import { sagas as Toppings } from './containers/Toppings';
import { sagas as Checkout } from './containers/Checkout';

function* rootSaga(){
  yield all([
    Dough(),
    Sauces(),
    Toppings(),
    Checkout(),
  ])
};

export default rootSaga;

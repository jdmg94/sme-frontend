/**
 * @Author: JoseMunoz
 * @Date:   2018-08-02T09:12:16-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T09:15:23-06:00
 */
 import { combineReducers } from 'redux';
 import { reducer as Dough } from './containers/Dough';
 import { reducer as Sauces } from './containers/Sauces';
 import { reducer as Toppings } from './containers/Toppings';
 import { reducer as Checkout } from './containers/Checkout';

 const reducer = combineReducers({
   Dough,
   Sauces,
   Toppings,
   Checkout,
 });

export default reducer;

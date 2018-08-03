/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T10:36:55-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T17:08:34-06:00
 */
import { reduce, round } from 'lodash';

const CLEAR_ALL = 'SocialMediaEmotions/Pizza/Order/CLEAR_ALL';
const CALCULATE_ORDER = 'SocialMediaEmotions/Pizza/Order/CALCULATE_ORDER';

const PROCESS_ORDER = 'SocialMediaEmotions/Pizza/Order/PROCESS_ORDER';
const ORDER_FAIL = 'SocialMediaEmotions/Pizza/Order/ORDER_FAIL';
const ORDER_SUCCESS = 'SocialMediaEmotions/Pizza/Order/ORDER_SUCCESS';

const initialState = {
  order: {},
  tax: 0.09,
  basePrice: 4,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CALCULATE_ORDER: {
      const { order } = payload;
      const { toppings } = order;
      const { tax, basePrice } = state;
      const accumulateExtras = (total, { price }) => (total += price);
      const subtotal = reduce(toppings, accumulateExtras, basePrice);
      const taxDue = round(subtotal * tax, 2);
      const total = round(subtotal * (1 + tax), 2);

      return { ...state, order, subtotal, taxDue, total };
    }
    case CLEAR_ALL:
      return initialState;

    case ORDER_FAIL:
    case PROCESS_ORDER:
    case ORDER_SUCCESS:
    default:
      return state;
  }
};

const clearAll = () => ({ type: CLEAR_ALL });
const processOrder = () => ({ type: PROCESS_ORDER });
const orderSuccess = () => ({ type: ORDER_SUCCESS });
const orderFail = error => ({ type: ORDER_FAIL, payload: { error }});
const calculateOrder = order => ({ type: CALCULATE_ORDER, payload: { order }});

export default reducer;
export {
  CLEAR_ALL,
  CALCULATE_ORDER,
  PROCESS_ORDER,
  ORDER_FAIL,
  ORDER_SUCCESS,
  clearAll,
  processOrder,
  orderSuccess,
  orderFail,
  calculateOrder,
};

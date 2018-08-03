/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T10:20:41-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T18:35:52-06:00
 */
import { concat, filter } from 'lodash';
const SELECT_OPTION = 'SocialMediaEmotions/Pizza/Toppings/SELECT_OPTION';
const REMOVE_OPTION = 'SocialMediaEmotions/Pizza/Toppings/REMOVE_OPTION';
const CLEAR_TOPPINGS = 'SocialMediaEmotions/Pizza/Toppings/CLEAR_TOPPINGS';

const FETCH_TOPPINGS = 'SocialMediaEmotions/Pizza/Toppings/FETCH_TOPPINGS';
const FETCH_TOPPINGS_FAIL = 'SocialMediaEmotions/Pizza/Toppings/FETCH_TOPPINGS_FAIL';
const FETCH_TOPPINGS_SUCCESS = 'SocialMediaEmotions/Pizza/Toppings/FETCH_TOPPINGS_SUCCESS';

const initialState = {
  options: [],
  selection: [],
  isFetching: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_OPTION:{
      const { selection: nextData } = payload;
      const { selection: prevData } = state;

      const selection = concat(prevData, nextData);

      return { ...state, selection };
    }

    case REMOVE_OPTION:{
      const { selection: toBeDeleted } = payload;
      const { selection: prevData } = state;
      const selection = filter(prevData, ({ id }) => id !== toBeDeleted.id);

      return { ...state, selection };
    }

    case FETCH_TOPPINGS:
    case FETCH_TOPPINGS_FAIL: {
      const { isFetching: prevData } = state;
      const isFetching = !prevData;

      return { ...state, isFetching };
    }

    case FETCH_TOPPINGS_SUCCESS: {
      const isFetching = false;
      const { options } = payload;

      return { ...state, options, isFetching };
    }

    case CLEAR_TOPPINGS: {
      const { selection } = initialState;

      return { ...state, selection };
    }

    default:
      return state;
  }
};

const clearToppings = () => ({ type: CLEAR_TOPPINGS });
const removeTopping = selection => ({ type: REMOVE_OPTION, payload: { selection }});
const selectTopping = selection => ({ type: SELECT_OPTION, payload: { selection }});

const fetchToppings = () => ({ type: FETCH_TOPPINGS });
const fetchFail = error => ({ type: FETCH_TOPPINGS_FAIL, payload: { error }});
const fetchSuccess = options => ({ type: FETCH_TOPPINGS_SUCCESS, payload: { options }});

export default reducer;
export {
  clearToppings,
  CLEAR_TOPPINGS,
  removeTopping,
  selectTopping,
  REMOVE_OPTION,
  SELECT_OPTION,
  fetchToppings,
  fetchFail,
  fetchSuccess,
  FETCH_TOPPINGS,
  FETCH_TOPPINGS_FAIL,
  FETCH_TOPPINGS_SUCCESS,
};

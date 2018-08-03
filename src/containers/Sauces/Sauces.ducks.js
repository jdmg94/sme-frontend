/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T10:19:29-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T10:34:53-06:00
 */
const SELECT_OPTION = 'SocialMediaEmotions/Pizza/Sauce/SELECT_OPTION';
const REMOVE_OPTION = 'SocialMediaEmotions/Pizza/Sauce/REMOVE_OPTION';

const FETCH_SAUCES = 'SocialMediaEmotions/Pizza/Sauce/FETCH_SAUCES';
const FETCH_SAUCES_FAIL = 'SocialMediaEmotions/Pizza/Sauce/FETCH_SAUCES_FAIL';
const FETCH_SAUCES_SUCCESS = 'SocialMediaEmotions/Pizza/Sauce/FETCH_SAUCES_SUCCESS';

const initialState = {
  options: [],
  selection: {},
  isFetching: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_OPTION: {
      const { selection } = payload;

      return { ...state, selection };
    }

    case REMOVE_OPTION: {
      const selection = {};

      return { ...state, selection };
    }

    case FETCH_SAUCES:
    case FETCH_SAUCES_FAIL: {
      const { isFetching: prevData } = state;
      const isFetching = !prevData;

      return { ...state, isFetching };
    }

    case FETCH_SAUCES_SUCCESS: {
      const isFetching = false;
      const { options } = payload;

      return { ...state, options, isFetching };
    }

    default:
      return state;
  }
};

const clearSelection = () => ({ type: REMOVE_OPTION });
const selectSauce = selection => ({ type: SELECT_OPTION, payload: { selection }});

const fetchSauces = () => ({ type: FETCH_SAUCES });
const fetchFail = error => ({ type: FETCH_SAUCES_FAIL, payload: { error }});
const fetchSuccess = options => ({ type: FETCH_SAUCES_SUCCESS, payload: { options }});

export default reducer;
export {
  selectSauce,
  clearSelection,
  REMOVE_OPTION,
  SELECT_OPTION,
  fetchSauces,
  fetchFail,
  fetchSuccess,
  FETCH_SAUCES,
  FETCH_SAUCES_FAIL,
  FETCH_SAUCES_SUCCESS,
};

/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T10:04:19-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T10:24:16-06:00
 */
const REMOVE_OPTION = 'SocialMediaEmotions/Pizza/Dough/REMOVE_OPTION';
const SELECT_OPTION = 'SocialMediaEmotions/Pizza/Dough/SELECT_OPTION';

const FETCH_OPTIONS = 'SocialMediaEmotions/Pizza/Dough/FETCH_OPTIONS';
const FETCH_OPTIONS_FAIL = 'SocialMediaEmotions/Pizza/Dough/FETCH_OPTIONS_FAIL';
const FETCH_OPTIONS_SUCCESS = 'SocialMediaEmotions/Pizza/Dough/FETCH_OPTIONS_SUCCESS';

const initialState = {
  options: [],
  selection: {},
  isFetching: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REMOVE_OPTION:{
      const selection = {};

      return { ...state, selection };
    }

    case SELECT_OPTION:{
      const { selection } = payload;

      return { ...state, selection };
    }

    case FETCH_OPTIONS:
    case FETCH_OPTIONS_FAIL: {
      const { isFetching: prevData } = state;
      const isFetching = !prevData;

      return { ...state, isFetching };

    }

    case FETCH_OPTIONS_SUCCESS: {
      const isFetching = false;
      const { options } = payload;

      return { ...state, options, isFetching };
    }

    default:
     return state;
  }
};

const clearSelection = () => ({ type: REMOVE_OPTION });
const selectDough = selection => ({ type: SELECT_OPTION, payload: { selection }});

const fetchDough = () => ({ type: FETCH_OPTIONS });
const fetchFail = error => ({ type: FETCH_OPTIONS_FAIL, payload: { error }});
const fetchSuccess = options => ({ type: FETCH_OPTIONS_SUCCESS, payload: { options }});

export default reducer;
export {
  selectDough,
  clearSelection,
  REMOVE_OPTION,
  SELECT_OPTION,
  fetchDough,
  fetchFail,
  fetchSuccess,
  FETCH_OPTIONS,
  FETCH_OPTIONS_FAIL,
  FETCH_OPTIONS_SUCCESS,
};

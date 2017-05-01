import * as types from '../actions/types';

const initialState = {
  articles: [],
  loading: false,
  error: null
};

export default function articlesReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTICLES_REQUEST:
      return Object.assign({}, prevState, {
        loading: true
      });
    case types.FETCH_ARTICLES_SUCCESS:
      return Object.assign({}, prevState, {
        articles: action.data,
        loading: false
      });
    case types.FETCH_ARTICLES_ERROR:
      return Object.assign({}, prevState, {
        error: action.error,
        loading: false
      });
    default:
      return prevState;
  }
}

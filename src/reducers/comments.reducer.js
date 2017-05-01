import * as types from '../actions/types';

const initialState = {
  comments: [],
  loading: false,
  error: null
};

function commentsReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_COMMENTS_REQUEST:
      return Object.assign({}, prevState, {
        loading: true
      });
    case types.FETCH_COMMENTS_SUCCESS:
      return Object.assign({}, prevState, {
        comments: action.data,
        loading: false
      });
    case types.FETCH_COMMENTS_ERROR:
      return Object.assign({}, prevState, {
        error: action.error,
        loading: false
      });
    default:
      return prevState;
  }
}

export default commentsReducer;

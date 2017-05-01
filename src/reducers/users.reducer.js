import * as types from '../actions/types';

const initialState = {
  users: [],
  loading: false,
  error: null
};

function usersReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
      return Object.assign({}, prevState, {
        loading: true
      });
      case types.FETCH_USERS_SUCCESS:
        return Object.assign({}, prevState, {
          users: action.data,
          loading: false
        });
      case types.FETCH_USERS_ERROR:
        return Object.assign({}, prevState, {
          error: action.error,
          loading: false
        });
      default:
        return prevState;
    }
  }

export default usersReducer;

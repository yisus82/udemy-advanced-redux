import { AUTH_USER, AUTH_ERROR } from '../actions/auth';

export const AUTH_INITIAL_STATE = {
  token: '',
  errorMessage: '',
};

const authReducer = (state = AUTH_INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        token: action.payload,
        errorMessage: '',
      };
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

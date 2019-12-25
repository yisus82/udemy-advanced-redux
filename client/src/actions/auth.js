import axios from 'axios';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

const getErrorMessage = err => {
  if (err.response) {
    return err.response.data.error;
  }
  if (err.request) {
    return err.request;
  }
  return `ERROR: ${err.message}`;
};

export const signup = ({ email, password }, callbackFn) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', {
      email,
      password,
    });
    dispatch({ type: AUTH_USER, payload: response.data.token });
    callbackFn();
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: getErrorMessage(err) });
  }
};

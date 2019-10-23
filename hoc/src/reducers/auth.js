import { CHANGE_AUTH } from '../actions/auth';

const authReducer = (state = false, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;

import { ADD_COMMENT, FETCH_COMMENTS } from '../actions/comments';

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS: {
      console.log(action.payload);

      const comments = action.payload.data.map(comment => comment.name);
      return [...state, ...comments];
    }
    default:
      return state;
  }
};

export default commentsReducer;

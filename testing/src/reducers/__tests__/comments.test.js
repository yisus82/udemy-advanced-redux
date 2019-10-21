import commentsReducer from '..';
import { ADD_COMMENT } from '../../actions/comments';

const initialState = { comments: [] };

it('handles actions of type ADD_COMMENT', () => {
  const action = {
    type: ADD_COMMENT,
    comment: 'New comment',
  };
  const newState = commentsReducer(initialState, action);
  expect(newState.comments).toEqual(['New comment']);
});

it('handles actions of unknown type', () => {
  const action = {
    type: 'UNKNOWN',
  };
  const newState = commentsReducer(initialState, action);
  expect(newState).toEqual(initialState);
});

import { addComment, ADD_COMMENT } from '../comments';

it('has the correct type', () => {
  const action = addComment('');
  expect(action.type).toEqual(ADD_COMMENT);
});

it('has the correct payload', () => {
  const action = addComment('New comment');
  expect(action.payload).toEqual('New comment');
});

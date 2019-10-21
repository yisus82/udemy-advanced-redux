import '../../setupTests';
import { mount } from 'enzyme';
import CommentList from '../CommentList';
import withStore from '../withStore';

let wrapped;

beforeEach(() => {
  const initialState = { comments: ['Comment 1', 'Comment 2'] };
  wrapped = mount(withStore(CommentList, initialState));
});

afterEach(() => {
  wrapped.unmount();
});

it('creates one <li> per comment', () => {
  expect(wrapped).toContainMatchingElements(2, 'li');
});

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
});

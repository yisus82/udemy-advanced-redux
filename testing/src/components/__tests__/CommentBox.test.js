import '../../setupTests';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import withStore from '../withStore';

let wrapped;

beforeEach(() => {
  wrapped = mount(withStore(CommentBox));
});

afterEach(() => {
  wrapped.unmount();
});

it('has a form with a text area and a button', () => {
  expect(wrapped.find('form')).toContainExactlyOneMatchingElement('textarea');
  expect(wrapped.find('form')).toContainExactlyOneMatchingElement('button');
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped
      .find('textarea')
      .simulate('change', { target: { value: 'New comment' } });
    wrapped.update();
  });

  it('can be used to type in it', () => {
    expect(wrapped.find('textarea')).toHaveProp('value', 'New comment');
  });

  it('gets emptied when form is submitted', () => {
    wrapped.find('form').simulate('submit', { preventDefault: () => {} });
    wrapped.update();
    expect(wrapped.find('textarea')).toHaveProp('value', '');
  });
});

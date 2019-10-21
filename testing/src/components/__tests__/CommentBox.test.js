import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import CommentBox from '../CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<CommentBox />);
});

it('shows a text area and a button', () => {
  expect(wrapped).toContainExactlyOneMatchingElement('textarea');
  expect(wrapped).toContainExactlyOneMatchingElement('button');
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped
      .find('textarea')
      .simulate('change', { target: { value: 'new comment' } });
    wrapped.update();
  });

  it('can be used to type in it', () => {
    expect(wrapped.find('textarea')).toHaveProp('value', 'new comment');
  });

  it('gets emptied when form is submitted', () => {
    wrapped.find('form').simulate('submit', { preventDefault: () => {} });
    wrapped.update();
    expect(wrapped.find('textarea')).toHaveProp('value', '');
  });
});

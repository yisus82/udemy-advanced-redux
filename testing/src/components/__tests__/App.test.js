import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import App from '../App';

it('shows a comment box', () => {
  const wrapped = shallow(<App />);

  expect(wrapped).toContainExactlyOneMatchingElement('CommentBox');
});

it('shows a comment list', () => {
  const wrapped = shallow(<App />);

  expect(wrapped).toContainExactlyOneMatchingElement('CommentList');
});

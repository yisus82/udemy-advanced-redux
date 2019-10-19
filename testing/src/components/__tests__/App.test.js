import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import App from '../App';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  expect(wrapped).toContainExactlyOneMatchingElement('CommentBox');
});

it('shows a comment list', () => {
  expect(wrapped).toContainExactlyOneMatchingElement('CommentList');
});

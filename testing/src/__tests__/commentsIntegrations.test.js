import '../setupTests';
import { mount } from 'enzyme';
import moxios from 'moxios';
import { FETCH_COMMENTS_URL } from '../actions/comments';
import withStore from '../components/withStore';
import App from '../components/App';

let wrapped;

beforeEach(() => {
  wrapped = mount(withStore(App));
  moxios.install();
  moxios.stubRequest(FETCH_COMMENTS_URL, {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
  wrapped.unmount();
});

it('can fetch a list of comments and displays them', done => {
  wrapped.find('#fetch-comments').simulate('click');
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped).toContainMatchingElements(2, 'li');
    done();
  });
});

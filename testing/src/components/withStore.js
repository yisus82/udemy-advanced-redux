import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

const store = createStore(
  reducers,
  typeof window !== 'undefined' &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

const withStore = Component => (
  <Provider store={store}>
    <Component />
  </Provider>
);

export default withStore;

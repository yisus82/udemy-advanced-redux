import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

const withStore = (Component, initialState = {}) => {
  const store = createStore(
    reducers,
    initialState,
    typeof window !== 'undefined' &&
      // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

export default withStore;

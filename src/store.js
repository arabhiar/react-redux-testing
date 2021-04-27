import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxPromise from 'redux-promise';

import reducers from 'reducers';

const middleware = [thunk, reduxPromise];

const myStore = (initialState) => {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return store;
};

export default myStore;

import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import reduxPromise from 'redux-promise';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';

import reducers from 'reducers';

const middleware = [async, stateValidator];

const myStore = (initialState) => {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return store;
};

export default myStore;

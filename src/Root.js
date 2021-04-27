import React from 'react';
import { Provider } from 'react-redux';

import myStore from 'store';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const { children, initialState = {} } = props;

  return <Provider store={myStore(initialState)}>{children}</Provider>;
};

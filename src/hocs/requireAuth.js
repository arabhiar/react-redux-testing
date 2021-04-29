import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// eslint-disable-next-line import/no-anonymous-default-export
export default (Component) => {
  const ComposedComponent = (props) => {
    const { history } = props;
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
      if (!auth) {
        history.push('/');
      }
      return () => {};
    }, [auth, history]);

    return (
      <>
        <Component {...props} />
      </>
    );
  };
  return ComposedComponent;
};

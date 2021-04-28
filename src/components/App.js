import React from 'react';
import { Link, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { changeAuth } from 'actions';

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const renderButton = () => {
    return auth ? (
      <button onClick={() => dispatch(changeAuth(false))}>Sign Out</button>
    ) : (
      <button onClick={() => dispatch(changeAuth(true))}>Sign In</button>
    );
  };

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  };

  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route path="/" component={CommentList} exact />
    </div>
  );
};

export default App;

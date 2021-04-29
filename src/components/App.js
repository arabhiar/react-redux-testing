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
      <button className="sign-out" onClick={() => dispatch(changeAuth(false))}>
        Sign Out
      </button>
    ) : (
      <button className="sign-in" onClick={() => dispatch(changeAuth(true))}>
        Sign In
      </button>
    );
  };

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link className='to-home' to="/">Home</Link>
        </li>
        <li className="to-post">
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

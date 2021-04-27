import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { saveComment, fetchComments } from 'actions';

const CommentBox = (props) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(saveComment(comment));

    setComment('');
  };

  const handleClick = () => {
    dispatch(fetchComments());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className='fetch-comments' onClick={handleClick}>Fetch Comments</button>
    </div>
  );
};

export default CommentBox;

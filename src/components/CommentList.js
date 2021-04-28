import React from 'react';
import { useSelector } from 'react-redux';

const CommentList = () => {
  const comments = useSelector((state) => state.comments);
  const renderComments = () => {
    return comments.map((comment, index) => <li key={index}>{comment}</li>);
  };

  return (
    <div>
      <h4>CommentList</h4>
      <ul>{renderComments()}</ul>
    </div>
  );
};

export default CommentList;

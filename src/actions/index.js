import axios from 'axios';

import { SAVE_COMMENT, FETCH_COMMENTS, CHNAGE_AUTH } from 'actions/types';

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchComments = () => {
  const response = axios.get('https://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
};

export const changeAuth = (isLoggedIn) => {
  return {
    type: CHNAGE_AUTH,
    payload: isLoggedIn,
  };
};

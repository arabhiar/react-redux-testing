import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const fetchedComments = action.payload.map((comment) => comment.name);
      return [...state, ...fetchedComments];
    default:
      return state;
  }
}

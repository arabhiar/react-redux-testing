import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('should handle actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'this is a comment',
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(['this is a comment']);
});

it('should handle actions with unknown types', () => {
  const action = {
    type: 'RANDOM_ACTION',
    payload: 'this is a comment',
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual([]);
});

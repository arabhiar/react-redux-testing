import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
  it('should have correct type', () => {
    const action = saveComment('this is a comment');

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('should have correct payload', () => {
    const action = saveComment('this is a comment');

    expect(action.payload).toEqual('this is a comment');
  });
});

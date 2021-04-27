import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should contain a text-area and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {
        value: 'this is a comment',
      },
    });
    wrapped.update();
  });
  it('should have a text-area where user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('this is a comment');
  });

  it('should contain empty text-area after submit', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});

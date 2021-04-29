import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapper;
afterEach(() => {
  wrapper.unmount();
});

it('should show a comment box', () => {
  wrapper = mount(
    <Root>
      <MemoryRouter initialEntries={['/post']}>
        <App />
      </MemoryRouter>
    </Root>
  );
  wrapper.find('.sign-in').simulate('click');
  wrapper.update();
  wrapper.find('.to-post a').simulate('click', {
    button: 0,
  });
  wrapper.update();
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('should ahow a comment list', () => {
  wrapper = mount(
    <Root>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </Root>
  );
  expect(wrapper.find(CommentList).length).toEqual(1);
});

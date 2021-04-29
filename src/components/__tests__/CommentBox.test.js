import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import CommentBox from 'components/CommentBox';
import Root from 'Root';
import App from 'components/App';

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <MemoryRouter>
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
});

// afterEach(() => {
//   wrapper.unmount();
// });

it('should contain a text-area and two buttons', () => {
  expect(wrapper.find('.comment-box textarea').length).toEqual(1);
  expect(wrapper.find('.comment-box button').length).toEqual(2);
});

// describe('text area', () => {
//   beforeEach(() => {
//     wrapper.find('textarea').simulate('change', {
//       target: {
//         value: 'this is a comment',
//       },
//     });
//     wrapper.update();
//   });
//   it('should have a text-area where user can type in', () => {
//     expect(wrapper.find('textarea').prop('value')).toEqual('this is a comment');
//   });

//   it('should contain empty text-area after submit', () => {
//     wrapper.find('form').simulate('submit');
//     wrapper.update();
//     expect(wrapper.find('textarea').prop('value')).toEqual('');
//   });
// });

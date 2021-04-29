import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import { MemoryRouter } from 'react-router-dom';

import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('should fetch a list of comments and display them', (done) => {
  const wrapper = mount(
    <Root>
      <MemoryRouter initialEntries={['/post']}>
        <App />
      </MemoryRouter>
    </Root>
  );
  wrapper.find('.sign-in').simulate('click');
  wrapper.update();
  wrapper.find('.to-post a').simulate('click', { button: 0 });
  wrapper.update();
  wrapper.find('.fetch-comments').simulate('click');
  moxios.wait(() => {
    wrapper.update();
    wrapper.find('.to-home a').simulate('click', { button: 0 });
    wrapper.update();
    // console.log(wrapper.find('.all-comments li').debug());
    expect(wrapper.find('.all-comments li').length).toEqual(2);

    done();
    wrapper.unmount();
  });
});

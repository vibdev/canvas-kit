import * as React from 'react';
import {Search} from '../lib/parts/Search';
import {mount} from 'enzyme';

describe('Header Search', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('Searching something should call callback', () => {
    const component = mount(<Search onSearchSubmit={cb} />);

    component.find('form').simulate('submit');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('Collapsed prop should render search icon (without form) until clicked', () => {
    const component = mount(<Search collapse={true} />);

    expect(component.find('form').exists()).toBe(false);

    const openIcon = component.find('span'); // I was having trouble targeting svgs
    openIcon.simulate('click');

    const form = component.find('form');
    expect(form.exists()).toBe(true);

    const closeIcon = form.find('span');
    closeIcon.simulate('click');

    expect(
      component
        .find('form')
        .render()
        .hasClass('search-exit-active')
    ).toBe(true);

    component.unmount();
  });

  test('Focussing input should update state', () => {
    const component = mount(<Search onSearchSubmit={cb} />);

    component.find('input').simulate('focus');
    expect(component.state('focused')).toBe(true);
    component.unmount();
  });
});

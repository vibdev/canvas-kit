import * as React from 'react';
import Avatar from '../lib/Avatar';
import {mount} from 'enzyme';

describe('Avatar', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('render a button with id', () => {
    const component = mount(<Avatar id="myAvatar" />);
    expect(component.find('div').props().id).toBe('myAvatar');
    component.unmount();
  });

  test('should call a callback function', () => {
    const component = mount(<Avatar onClick={cb} />);
    const avatar = component.find('div');
    avatar.simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });
});

describe('Avatar Accessibility', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('Avatar should be using HTML5 <button> tag', () => {
    const component = mount(<Avatar />);
    expect(component.getDOMNode().tagName.toLowerCase()).toEqual('button');
    component.unmount();
  });
});

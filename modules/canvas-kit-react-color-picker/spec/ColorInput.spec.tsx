import * as React from 'react';
import ColorInput from '../lib/ColorInput';
import {mount} from 'enzyme';

describe('ColorInput', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('should call onClick on Enter', () => {
    const component = mount(<ColorInput selectedHexColor="#DD5" onEnterPress={cb} />);
    component.setState({typedInHexValue: '#DD5'});
    const input = component.find('input');
    input.simulate('keypress', {key: 'Enter'});
    expect(cb).toHaveBeenCalled();
  });

  test('should not call onClick on Enter if hex value is invalid', () => {
    const component = mount(<ColorInput selectedHexColor="#DD5" onEnterPress={cb} />);
    component.setState({typedInHexValue: '#DD500076'});
    const input = component.find('input');
    input.simulate('keypress', {key: 'Enter'});
    expect(cb.mock.calls.length).toBe(0);
  });

  test('should update typedInHexValue onChange', () => {
    const component = mount(<ColorInput selectedHexColor="#DD5" onEnterPress={cb} />);
    const input = component.find('input');
    input.simulate('change', {target: {value: 'DD5'}});
    expect(component.state('typedInHexValue')).toBe('#DD5');
  });
});

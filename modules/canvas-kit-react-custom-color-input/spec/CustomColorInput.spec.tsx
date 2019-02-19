import * as React from 'react';
import CustomColorInput from '../lib/CustomColorInput';
import {mount} from 'enzyme';

describe('CustomColorInput', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('should call onClick when clicking the button', () => {
    const component = mount(<CustomColorInput selectedHexColor="#DD5" onClick={cb} />);
    component.setState({typedInHexValue: '#DD5'});
    const button = component.find('button');
    button.simulate('click');

    expect(cb).toHaveBeenCalled();
  });

  test('should call onClick on Enter', () => {
    const component = mount(<CustomColorInput selectedHexColor="#DD5" onClick={cb} />);
    component.setState({typedInHexValue: '#DD5'});
    const input = component.find('input');
    input.simulate('keypress', {key: 'Enter'});
    expect(cb).toHaveBeenCalled();
  });

  test('should not call onClick on Enter if hex value is invalid', () => {
    const component = mount(<CustomColorInput selectedHexColor="#DD5" onClick={cb} />);
    component.setState({typedInHexValue: '#DD500076'});
    const input = component.find('input');
    input.simulate('keypress', {key: 'Enter'});
    expect(cb.mock.calls.length).toBe(0);
  });

  test('should not call onClick if invalid hex value', () => {
    const component = mount(<CustomColorInput selectedHexColor="#DD5" onClick={cb} />);
    component.setState({typedInHexValue: '#DD567890'});
    const button = component.find('button');
    button.simulate('click');

    expect(cb.mock.calls.length).toBe(0);
  });

  test('should add # to a hex value', () => {
    const component = mount(<CustomColorInput selectedHexColor="#DD5" onClick={cb} />);
    component.setState({typedInHexValue: 'DD5'});
    const button = component.find('button');
    button.simulate('click');

    expect(component.props().selectedHexColor).toEqual('#DD5');
  });

  test('should still submit a hex code that has #', () => {
    const component = mount(<CustomColorInput selectedHexColor="#DD5" onClick={cb} />);
    component.setState({typedInHexValue: '#DD5'});
    const button = component.find('button');
    button.simulate('click');

    expect(component.props().selectedHexColor).toEqual('#DD5');
  });

  test('should update typedInHexValue  onChange', () => {
    const component = mount(<CustomColorInput selectedHexColor="#DD5" onClick={cb} />);
    const input = component.find('input');
    input.simulate('change', {target: {value: 'DD5'}});
    expect(component.state('typedInHexValue')).toBe('#DD5');
  });
});

import * as React from 'react';
import ColorInput from '../lib/ColorInput';
import {mount} from 'enzyme';

describe('ColorInput', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('should update potentialHexValue onChange', () => {
    const component = mount(
      <ColorInput onChange={jest.fn()} onValidColorChange={jest.fn()} value={''} />
    );
    const input = component.find('input');
    input.simulate('change', {target: {value: 'DD5'}});
    expect(component.state('potentialHexValue')).toBe('#DD5');
  });
  test('should update potentialHexValue onChange with pound sign', () => {
    const component = mount(
      <ColorInput onChange={jest.fn()} onValidColorChange={jest.fn()} value={''} />
    );
    const input = component.find('input');
    input.simulate('change', {target: {value: '#DD5'}});
    expect(component.state('potentialHexValue')).toBe('#DD5');
  });
  test('should update potentialHexValue onChange to empty string if not valid hex value', () => {
    const component = mount(
      <ColorInput onChange={jest.fn()} onValidColorChange={jest.fn()} value={''} />
    );
    const input = component.find('input');
    input.simulate('change', {target: {value: '#eeeeeeee'}});
    expect(component.state('potentialHexValue')).toBe('');
  });
  test('should still allow user to type if more than 3 characters', () => {
    const component = mount(
      <ColorInput onChange={jest.fn()} onValidColorChange={jest.fn()} value={''} />
    );
    const input = component.find('input');
    input.simulate('change', {target: {value: '#eeeee'}});
    expect(component.state('potentialHexValue')).toBe('eeeee');
  });
});

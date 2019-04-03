import * as React from 'react';
import {mount} from 'enzyme';
import TextField from '../lib/TextField';

describe('TextField', () => {
  test('Set a string label', () => {
    const label = 'Label';
    const component = mount(<TextField label={label} />);

    expect(component.find('label').text()).toBe(label);

    component.unmount();
  });

  test('Set a custom component', () => {
    const label = <label>Custom Label</label>;
    const component = mount(<TextField label={label} />);

    expect(component.contains(label)).toBeDefined();

    component.unmount();
  });

  test('Set hint text', () => {
    const component = mount(<TextField hintText="Hint Text" />);

    expect(component.render().text()).toEqual(expect.stringContaining('Hint Text'));

    component.unmount();
  });
});

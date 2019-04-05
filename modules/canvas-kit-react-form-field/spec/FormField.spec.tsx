import * as React from 'react';
import {mount} from 'enzyme';
import FormField from '../lib/FormField';

describe('FormField', () => {
  test('Set a string label', () => {
    const label = 'Label';
    const component = mount(<FormField input={<input type="text" />} label={label} />);

    expect(component.find('label').text()).toBe(label);

    component.unmount();
  });

  test('Set a custom component', () => {
    const label = <label>Custom Label</label>;
    const component = mount(<FormField input={<input type="text" />} label={label} />);

    expect(component.contains(label)).toBeDefined();

    component.unmount();
  });

  test('Set hint text', () => {
    const component = mount(<FormField input={<input type="text" />} hintText="Hint Text" />);

    expect(component.render().text()).toEqual(expect.stringContaining('Hint Text'));

    component.unmount();
  });
});

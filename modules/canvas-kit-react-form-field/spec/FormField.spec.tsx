import * as React from 'react';
import {mount} from 'enzyme';
import FormField from '../lib/FormField';

describe('FormField', () => {
  test('Set a string label', () => {
    const label = 'Label';
    const component = mount(
      <FormField label={label}>
        <input type="text" />
      </FormField>
    );

    expect(component.find('label').text()).toBe(label);

    component.unmount();
  });

  test('Set a custom component', () => {
    const label = <label>Custom Label</label>;
    const component = mount(
      <FormField label={label}>
        <input type="text" />
      </FormField>
    );

    expect(component.contains(label)).toBeDefined();

    component.unmount();
  });

  test('Set hint text', () => {
    const hintText = 'Hint Text';
    const component = mount(
      <FormField hintText={hintText}>
        <input type="text" />
      </FormField>
    );

    expect(component.render().text()).toEqual(expect.stringContaining(hintText));

    component.unmount();
  });
});

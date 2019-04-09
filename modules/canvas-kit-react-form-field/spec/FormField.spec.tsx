import * as React from 'react';
import {mount} from 'enzyme';
import {GrowthBehavior} from '@workday/canvas-kit-react-common';
import FormField, {ErrorBehavior} from '../lib/FormField';

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

  test('Sets grow prop', () => {
    const InputComponent: React.SFC<GrowthBehavior> = () => <input type="text" />;

    const component = mount(
      <FormField grow={true}>
        <InputComponent />
      </FormField>
    );

    expect(component.find(InputComponent).props().grow).toEqual(true);

    component.unmount();
  });

  test('Sets error prop', () => {
    const InputComponent: React.SFC<ErrorBehavior> = () => <input type="text" />;

    const component = mount(
      <FormField error={FormField.ErrorType.Error}>
        <InputComponent />
      </FormField>
    );

    expect(component.find(InputComponent).props().error).toEqual(FormField.ErrorType.Error);

    component.unmount();
  });

  test('String child', () => {
    const component = mount(<FormField>Text</FormField>);

    expect(component.children().text()).toBe('Text');

    component.unmount();
  });
});

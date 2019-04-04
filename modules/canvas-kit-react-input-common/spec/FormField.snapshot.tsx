import * as React from 'react';
import * as renderer from 'react-test-renderer';
import FormField from '../lib/FormField';

describe('FormField Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<FormField input={<input type="text" />} />);
    expect(component).toMatchSnapshot();
  });

  test('grow', () => {
    const component = renderer.create(<FormField input={<input type="text" />} grow={true} />);
    expect(component).toMatchSnapshot();
  });

  test('grow with left label', () => {
    const component = renderer.create(
      <FormField
        input={<input type="text" />}
        labelPosition={FormField.LabelPosition.Left}
        grow={true}
      />
    );
    expect(component).toMatchSnapshot();
  });
});

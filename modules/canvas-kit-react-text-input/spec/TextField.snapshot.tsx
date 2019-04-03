import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TextField from '../lib/TextField';

describe('TextField Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<TextField />);
    expect(component).toMatchSnapshot();
  });

  test('grow', () => {
    const component = renderer.create(<TextField grow={true} />);
    expect(component).toMatchSnapshot();
  });

  test('grow with left label', () => {
    const component = renderer.create(
      <TextField labelPosition={TextField.LabelPosition.Left} grow={true} />
    );
    expect(component).toMatchSnapshot();
  });
});

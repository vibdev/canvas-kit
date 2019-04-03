import * as React from 'react';
import * as renderer from 'react-test-renderer';
import FormGroup from '../lib/FormGroup';

describe('FormGroup Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<FormGroup />);
    expect(component).toMatchSnapshot();
  });

  test('renders left label', () => {
    const component = renderer.create(<FormGroup labelPosition={FormGroup.LabelPosition.Left} />);
    expect(component).toMatchSnapshot();
  });
});

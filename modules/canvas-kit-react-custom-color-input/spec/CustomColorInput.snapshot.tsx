import * as React from 'react';
import CustomColorInput from '../lib/CustomColorInput';
import * as renderer from 'react-test-renderer';

describe('CustomColorInput Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(
      <CustomColorInput selectedHexColor={''} onClick={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders with a selected color', () => {
    const component = renderer.create(
      <CustomColorInput selectedHexColor={'#e6e'} onClick={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders with a selected color without #', () => {
    const component = renderer.create(
      <CustomColorInput selectedHexColor={'DD5'} onClick={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
});

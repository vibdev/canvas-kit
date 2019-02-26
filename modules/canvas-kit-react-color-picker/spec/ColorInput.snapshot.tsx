import * as React from 'react';
import ColorInput from '../lib/ColorInput';
import * as renderer from 'react-test-renderer';

describe('ColorInput Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<ColorInput selectedHexColor={''} onClick={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });
  test('renders with a selected color', () => {
    const component = renderer.create(<ColorInput selectedHexColor={'#e6e'} onClick={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });
  test('renders with a selected color without #', () => {
    const component = renderer.create(<ColorInput selectedHexColor={'DD5'} onClick={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });
});

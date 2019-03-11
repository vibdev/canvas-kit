import * as React from 'react';
import ColorInput from '../lib/ColorInput';
import * as renderer from 'react-test-renderer';

describe('ColorInput Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(
      <ColorInput onChange={jest.fn()} onValidColorChange={jest.fn()} value={''} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders with a selected color', () => {
    const component = renderer.create(
      <ColorInput onChange={jest.fn()} onValidColorChange={jest.fn()} value={'e6e'} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders with a selected color without #', () => {
    const component = renderer.create(
      <ColorInput onChange={jest.fn()} onValidColorChange={jest.fn()} value={'#e6e'} />
    );
    expect(component).toMatchSnapshot();
  });
});

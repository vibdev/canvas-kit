import * as React from 'react';
import ColorInput from '../lib/ColorInput';
import * as renderer from 'react-test-renderer';

describe('ColorInput Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(
      <ColorInput selectedHexColor={''} onEnterPress={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders with a selected color', () => {
    const component = renderer.create(
      <ColorInput selectedHexColor={'#e6e'} onEnterPress={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders with a selected color without #', () => {
    const component = renderer.create(
      <ColorInput selectedHexColor={'DD5'} onEnterPress={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders without checked icon', () => {
    const component = renderer.create(
      <ColorInput
        selectedHexColor={'DD5'}
        onEnterPress={jest.fn()}
        showSwatchTileCheckIcon={false}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a checked icon', () => {
    const component = renderer.create(
      <ColorInput
        selectedHexColor={'DD5'}
        onEnterPress={jest.fn()}
        showSwatchTileCheckIcon={true}
      />
    );
    expect(component).toMatchSnapshot();
  });
});

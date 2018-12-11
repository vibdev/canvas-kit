import * as React from 'react';
import Toggle from '../lib/Toggle';
import * as renderer from 'react-test-renderer';

describe('Toggle Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(
      <Toggle
        checked={false}
        onChange={() => {
          /* foo */
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders toggle on', () => {
    const component = renderer.create(
      <Toggle
        checked={true}
        onChange={() => {
          /* foo */
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});

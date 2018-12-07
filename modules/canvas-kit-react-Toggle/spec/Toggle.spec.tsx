import * as React from 'react';
import Toggle from '../lib/Toggle';
import * as renderer from 'react-test-renderer';

describe('Toggle Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(
      <Toggle
        isChecked={false}
        onClick={() => {
          /* foo */
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders toggle on', () => {
    const component = renderer.create(
      <Toggle
        isChecked={true}
        onClick={() => {
          /* foo */
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders toggle with different background color', () => {
    const component = renderer.create(
      <Toggle
        isChecked={true}
        onClick={() => {
          /* foo */
        }}
        toggleBackgroundColor="#000"
      />
    );
    expect(component).toMatchSnapshot();
  });
});

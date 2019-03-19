import * as React from 'react';
import Checkbox from '../lib/Checkbox';
import * as renderer from 'react-test-renderer';

describe('Checkbox Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(
      <Checkbox
        checked={false}
        onChange={() => {
          /* foo */
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});

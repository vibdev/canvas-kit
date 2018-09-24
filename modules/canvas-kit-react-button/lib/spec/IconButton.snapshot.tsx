import renderer from 'react-test-renderer';
import IconButton from '../IconButton';
import React from 'react';

describe('Icon Button Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(
      <IconButton>
        <svg>Hello</svg>
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });
});

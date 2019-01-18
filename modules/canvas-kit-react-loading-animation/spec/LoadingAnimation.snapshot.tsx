import * as React from 'react';
import * as renderer from 'react-test-renderer';
import LoadingAnimation from '../lib/LoadingAnimation';

describe('LoadingAnimation Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<LoadingAnimation />);
    expect(component).toMatchSnapshot();
  });
});

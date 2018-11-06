import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PageHeader from '..';

describe('Page Header Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<PageHeader title="Test Page Header" />);
    expect(component).toMatchSnapshot();
  });
});

import * as React from 'react';
import Card from '../lib/Card';
import * as renderer from 'react-test-renderer';

describe('Card Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Card>Card</Card>);
    expect(component).toMatchSnapshot();
  });

  test('renders a card with heading', () => {
    const component = renderer.create(<Card heading="Card Title">Card</Card>);
    expect(component).toMatchSnapshot();
  });
});

import * as React from 'react';
import Card, {CardSize} from '../lib/Card';
import * as renderer from 'react-test-renderer';

describe('Card Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Card>Card</Card>);
    expect(component).toMatchSnapshot();
  });

  test('renders a card with title', () => {
    const component = renderer.create(<Card title="Card Title">Card</Card>);
    expect(component).toMatchSnapshot();
  });

  const cards = Array.from(Array(12).keys()).map(size => (
    <Card title="Title" size={(size + 1) as CardSize} key={size} />
  ));

  cards.forEach((card, i) => {
    test(`renders a card with size ${i + 1}`, () => {
      const component = renderer.create(card);
      expect(component).toMatchSnapshot();
    });
  });

  test(`renders a card with custom breakpoints`, () => {
    const customBreakpoints = {
      sm: 120,
      md: 240,
      lg: 480,
    };

    const component = renderer.create(<Card size={2} breakpoints={customBreakpoints} />);
    expect(component).toMatchSnapshot();
  });
});

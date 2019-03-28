import * as React from 'react';
import Popover from '../lib/Popover';
import * as renderer from 'react-test-renderer';

describe('Popover Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Popover padding={Popover.padding.s} />);
    expect(component).toMatchSnapshot();
  });
  test('renders popover with close icon', () => {
    const component = renderer.create(
      <Popover handleClose={jest.fn()} padding={Popover.padding.s} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders popover with different padding', () => {
    const component = renderer.create(
      <Popover handleClose={jest.fn()} padding={Popover.padding.l} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders popover with children elements', () => {
    const component = renderer.create(
      <Popover handleClose={jest.fn()} padding={Popover.padding.zero}>
        <span>hello world</span>
      </Popover>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders popover without close icon', () => {
    const component = renderer.create(
      <Popover padding={Popover.padding.zero}>
        <span>hello world</span>
      </Popover>
    );
    expect(component).toMatchSnapshot();
  });
});

import * as React from 'react';
import Popover, {PopoverPadding} from '../lib/Popover';
import * as renderer from 'react-test-renderer';

describe('Toggle Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Popover paddingSize={PopoverPadding.s} />);
    expect(component).toMatchSnapshot();
  });
  test('renders popover with close icon', () => {
    const component = renderer.create(
      <Popover handleClose={jest.fn()} paddingSize={PopoverPadding.s} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders popover different padding', () => {
    const component = renderer.create(
      <Popover handleClose={jest.fn()} paddingSize={PopoverPadding.l} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders popover with children elements', () => {
    const component = renderer.create(
      <Popover handleClose={jest.fn()} paddingSize={PopoverPadding.zero}>
        <span>hello world</span>
      </Popover>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders without close icon', () => {
    const component = renderer.create(
      <Popover paddingSize={PopoverPadding.zero}>
        <span>hello world</span>
      </Popover>
    );
    expect(component).toMatchSnapshot();
  });
});

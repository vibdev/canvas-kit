import * as React from 'react';
import Popup from '../lib/Popup';
import * as renderer from 'react-test-renderer';

describe('Popup Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Popup padding={Popup.padding.s} />);
    expect(component).toMatchSnapshot();
  });
  test('renders Popup with close icon', () => {
    const component = renderer.create(<Popup handleClose={jest.fn()} padding={Popup.padding.s} />);
    expect(component).toMatchSnapshot();
  });
  test('renders Popup with different padding', () => {
    const component = renderer.create(<Popup handleClose={jest.fn()} padding={Popup.padding.l} />);
    expect(component).toMatchSnapshot();
  });
  test('renders Popup with children elements', () => {
    const component = renderer.create(
      <Popup handleClose={jest.fn()} padding={Popup.padding.zero}>
        <span>hello world</span>
      </Popup>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders Popup without close icon', () => {
    const component = renderer.create(
      <Popup padding={Popup.padding.zero}>
        <span>hello world</span>
      </Popup>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders Popup with transformOrigin', () => {
    const component = renderer.create(
      <Popup transformOrigin={{vertical: 'top', horizontal: 'center'}} padding={Popup.padding.zero}>
        <span>hello world</span>
      </Popup>
    );
    expect(component).toMatchSnapshot();
  });
});

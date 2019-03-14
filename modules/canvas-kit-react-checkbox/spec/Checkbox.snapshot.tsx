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
  test('renders Checkbox on', () => {
    const component = renderer.create(
      <Checkbox
        checked={true}
        onChange={() => {
          /* foo */
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders Checkbox disabled unchecked', () => {
    const component = renderer.create(
      <Checkbox
        disabled={true}
        checked={false}
        onChange={() => {
          /* foo */
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders Checkbox disabled checked', () => {
    const component = renderer.create(
      <Checkbox
        disabled={true}
        checked={true}
        onChange={() => {
          /* foo */
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders Checkbox with name and value', () => {
    const component = renderer.create(
      <Checkbox
        value="user"
        disabled={false}
        checked={true}
        onChange={() => {
          /* foo */
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders Checkbox with id', () => {
    const component = renderer.create(
      <Checkbox value="user" id={'123'} disabled={false} checked={true} onChange={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders Checkbox with custom prop', () => {
    const component = renderer.create(
      <Checkbox
        title="hello world"
        value="user"
        id={'123'}
        disabled={false}
        checked={true}
        onChange={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});

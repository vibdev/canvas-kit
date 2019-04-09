import * as renderer from 'react-test-renderer';
import Tooltip from '../lib/Tooltip';
import * as React from 'react';
jest.mock('react-dom');
describe('Tooltip Snapshots', () => {
  test('renders a tooltip with a child element', () => {
    const container = renderer.create(
      <div>
        <Tooltip>
          <div>I'm being hovered</div>
        </Tooltip>
      </div>
    );
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders a tooltip with a different transformOrigin', () => {
    const container = renderer.create(
      <div>
        <Tooltip transformOrigin={{horizontal: 'center', vertical: 'top'}}>
          <div>Delete</div>
        </Tooltip>
      </div>
    );
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import * as renderer from 'react-test-renderer';
import Tooltip from '../lib/Tooltip';
import * as React from 'react';
jest.mock('react-dom');
describe('Tooltip Snapshots', () => {
  test('renders a tooltip with a title', () => {
    const container = renderer.create(
      <div>
        <Tooltip title="world">
          <div>hello</div>
        </Tooltip>
      </div>
    );
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders a tooltip with a carrot', () => {
    const container = renderer.create(
      <div>
        <Tooltip title="world" showTriangle={true}>
          <div>hello</div>
        </Tooltip>
      </div>
    );
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders a tooltip positioned at the top', () => {
    const container = renderer.create(
      <div>
        <Tooltip title="world" showTriangle={true} tooltipPosition="top">
          <div>hello</div>
        </Tooltip>
      </div>
    );
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

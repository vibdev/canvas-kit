import * as React from 'react';
import SidePanel from '../lib/SidePanel';
import * as renderer from 'react-test-renderer';

describe('SidePanel Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<SidePanel open={true} />);
    expect(component).toMatchSnapshot();
  });
  test('renders a closed side panel', () => {
    const component = renderer.create(<SidePanel open={false} />);
    expect(component).toMatchSnapshot();
  });
  test('renders a side panel header', () => {
    const component = renderer.create(<SidePanel title={'Side Panel Header'} open={true} />);
    expect(component).toMatchSnapshot();
  });
  test('does not render header when side panel is closed', () => {
    const component = renderer.create(<SidePanel title={'Side Panel Header'} open={false} />);
    expect(component).toMatchSnapshot();
  });
  test('renders a toggle button', () => {
    const component = renderer.create(
      <SidePanel onToggleClick={jest.fn} title={'Side Panel Header'} open={false} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders side panel on the right with correct toggle button when panel is closed', () => {
    const component = renderer.create(
      <SidePanel
        onToggleClick={jest.fn}
        openRight={true}
        title={'Side Panel Header'}
        open={false}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders side panel on the right with correct toggle button when panel is open', () => {
    const component = renderer.create(
      <SidePanel onToggleClick={jest.fn} openRight={true} title={'Side Panel Header'} open={true} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders side panel on the left', () => {
    const component = renderer.create(
      <SidePanel openLeft={true} title={'Side Panel Header'} open={true} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a side panel with children elements', () => {
    const component = renderer.create(
      <SidePanel open={true}>
        <ul>
          <li>Home</li>
          <li>Favorites</li>
          <li>Recents</li>
          <li>Trash</li>
        </ul>
      </SidePanel>
    );
    expect(component).toMatchSnapshot();
  });
});

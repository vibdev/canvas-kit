import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {IconButton} from '../index';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';

describe('Button (Icon) Snapshots', () => {
  test('renders a default icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton toggled={true}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a primary icon button', () => {
    const component = renderer.create(
      <IconButton buttonType={IconButton.Types.IconPrimary}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a primary icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton toggled={true} buttonType={IconButton.Types.IconPrimary}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a primary icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton toggled={false} buttonType={IconButton.Types.IconPrimary}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a primary filled icon button', () => {
    const component = renderer.create(
      <IconButton buttonType={IconButton.Types.IconPrimaryFilled}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a primary filled icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton toggled={true} buttonType={IconButton.Types.IconPrimaryFilled}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a primary filled icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton toggled={false} buttonType={IconButton.Types.IconPrimaryFilled}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse icon button', () => {
    const component = renderer.create(
      <IconButton buttonType={IconButton.Types.IconInverse}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton toggled={true} buttonType={IconButton.Types.IconInverse}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton toggled={false} buttonType={IconButton.Types.IconInverse}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse filled icon button', () => {
    const component = renderer.create(
      <IconButton buttonType={IconButton.Types.IconInverseFilled}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse filled icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton toggled={true} buttonType={IconButton.Types.IconInverseFilled}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse filled icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton toggled={false} buttonType={IconButton.Types.IconInverseFilled}>
        <SystemIcon icon={activityStreamIcon} />
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });
});

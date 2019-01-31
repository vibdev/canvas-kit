import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {IconButton} from '../index';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

describe('Button (Icon) Snapshots', () => {
  test('renders a default icon button, toggled on', () => {
    const component = renderer.create(<IconButton toggled={true} icon={activityStreamIcon} />);
    expect(component).toMatchSnapshot();
  });

  test('renders a plain icon button', () => {
    const component = renderer.create(
      <IconButton buttonType={IconButton.Types.IconPlain} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small plain icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonType={IconButton.Types.IconPlain}
        buttonSize={IconButton.Sizes.Small}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium plain icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonType={IconButton.Types.IconPlain}
        buttonSize={IconButton.Sizes.Medium}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a primary icon button', () => {
    const component = renderer.create(
      <IconButton buttonType={IconButton.Types.IconPrimary} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small primary icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Sizes.Small}
        buttonType={IconButton.Types.IconPrimary}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium primary icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Sizes.Medium}
        buttonType={IconButton.Types.IconPrimary}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a primary icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton
        toggled={true}
        buttonType={IconButton.Types.IconPrimary}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a primary icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton
        toggled={false}
        buttonType={IconButton.Types.IconPrimary}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a primary filled icon button', () => {
    const component = renderer.create(
      <IconButton buttonType={IconButton.Types.IconPrimaryFilled} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small primary filled icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Sizes.Small}
        buttonType={IconButton.Types.IconPrimaryFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium primary filled icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Sizes.Medium}
        buttonType={IconButton.Types.IconPrimaryFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a primary filled icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton
        toggled={true}
        buttonType={IconButton.Types.IconPrimaryFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a primary filled icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton
        toggled={false}
        buttonType={IconButton.Types.IconPrimaryFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse icon button', () => {
    const component = renderer.create(
      <IconButton buttonType={IconButton.Types.IconInverse} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small inverse icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Sizes.Small}
        buttonType={IconButton.Types.IconInverse}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium inverse icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Sizes.Medium}
        buttonType={IconButton.Types.IconInverse}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton
        toggled={true}
        buttonType={IconButton.Types.IconInverse}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton
        toggled={false}
        buttonType={IconButton.Types.IconInverse}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse filled icon button', () => {
    const component = renderer.create(
      <IconButton buttonType={IconButton.Types.IconInverseFilled} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small inverse filled icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Sizes.Small}
        buttonType={IconButton.Types.IconInverseFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium inverse filled icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Sizes.Medium}
        buttonType={IconButton.Types.IconInverseFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse filled icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton
        toggled={true}
        buttonType={IconButton.Types.IconInverseFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse filled icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton
        toggled={false}
        buttonType={IconButton.Types.IconInverseFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });
});

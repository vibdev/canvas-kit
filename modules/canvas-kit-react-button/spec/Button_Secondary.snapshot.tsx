import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Button from '../lib/Button';
import {editIcon} from '@workday/canvas-system-icons-web';

describe('Button (Secondary) Snapshots', () => {
  test('renders a large, secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, (beta) secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.BetaSecondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, (beta) secondary button with an icon', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.BetaSecondary}
        icon={editIcon}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, (beta) secondary button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.BetaSecondary}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, (beta) secondary button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.BetaSecondary}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, (beta) secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.BetaSecondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, (beta) secondary button with an icon', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.BetaSecondary}
        icon={editIcon}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, (beta) secondary button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.BetaSecondary}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, (beta) secondary button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.BetaSecondary}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, (beta) secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.BetaSecondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});

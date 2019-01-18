import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Button from '../lib/Button';
import {editIcon} from '@workday/canvas-system-icons-web';

describe('Button (Outline) Snapshots', () => {
  test('renders a large, outline blue button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlineBlue}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline blue button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlineBlue} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline blue button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.OutlineBlue}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline blue button with an icon and data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.OutlineBlue}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline dark button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlineDark}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline dark button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlineDark} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline dark button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.OutlineDark}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline dark button with an icon and data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.OutlineDark}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline white button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlineWhite}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline white button with an icon', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.OutlineWhite}
        icon={editIcon}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline white button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.OutlineWhite}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline white button with an icon and data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.OutlineWhite}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline blue button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.OutlineBlue}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline blue button with an icon', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.OutlineBlue}
        icon={editIcon}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline blue button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.OutlineBlue}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline blue button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.OutlineBlue}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline dark button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.OutlineDark}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline dark button with an icon', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.OutlineDark}
        icon={editIcon}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline dark button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.OutlineDark}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline dark button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.OutlineDark}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline white button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.OutlineWhite}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline white button with an icon', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.OutlineWhite}
        icon={editIcon}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline white button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.OutlineWhite}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline white button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.OutlineWhite}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, outline blue button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.OutlineBlue}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, outline dark button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.OutlineDark}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, outline white button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.OutlineWhite}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TextButton from '../lib/TextButton';
import {editIcon} from '@workday/canvas-system-icons-web';

describe('Button (Text) Snapshots', () => {
  test('renders a large, text button', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Sizes.Large} buttonType={TextButton.Types.Default}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Large}
        buttonType={TextButton.Types.Default}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Large}
        buttonType={TextButton.Types.Default}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text all caps button', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Sizes.Large} buttonType={TextButton.Types.AllCaps}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text all caps button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Large}
        buttonType={TextButton.Types.AllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text all caps button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Large}
        buttonType={TextButton.Types.AllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark all caps button', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Sizes.Large} buttonType={TextButton.Types.DarkAllCaps}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark all caps button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Large}
        buttonType={TextButton.Types.DarkAllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark all caps button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Large}
        buttonType={TextButton.Types.DarkAllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark button', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Sizes.Large} buttonType={TextButton.Types.Dark}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Large}
        buttonType={TextButton.Types.Dark}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Large}
        buttonType={TextButton.Types.Dark}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark all caps button', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Sizes.Large} buttonType={TextButton.Types.DarkAllCaps}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark all caps button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Large}
        buttonType={TextButton.Types.DarkAllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark all caps button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Large}
        buttonType={TextButton.Types.DarkAllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Sizes.Small} buttonType={TextButton.Types.Default}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Small}
        buttonType={TextButton.Types.Default}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Small}
        buttonType={TextButton.Types.Default}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button with all caps', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Sizes.Small} buttonType={TextButton.Types.AllCaps}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button with all caps with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Small}
        buttonType={TextButton.Types.AllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button with all caps with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Small}
        buttonType={TextButton.Types.AllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text dark button', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Sizes.Small} buttonType={TextButton.Types.Dark}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text dark button with all caps', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Sizes.Small} buttonType={TextButton.Types.DarkAllCaps}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text dark button with all caps and left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Small}
        buttonType={TextButton.Types.DarkAllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text dark button with all caps and right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Small}
        buttonType={TextButton.Types.DarkAllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text dark button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Small}
        buttonType={TextButton.Types.Dark}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text dark button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Sizes.Small}
        buttonType={TextButton.Types.Dark}
        icon={editIcon}
        iconPosition={TextButton.IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });
});

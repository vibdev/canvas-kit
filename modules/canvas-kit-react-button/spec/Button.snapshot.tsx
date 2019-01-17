import * as React from 'react';
import Button from '../lib/Button';
import DropdownButton from '../lib/DropdownButton';
import TextButton from '../lib/TextButton';
import * as renderer from 'react-test-renderer';
import {editIcon} from '@workday/canvas-system-icons-web';

describe('Button Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Button>Button</Button>);
    expect(component).toMatchSnapshot();
  });
  test('renders a large, primary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a large, secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, delete button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, UDE primary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.UdePrimary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, UDE primary button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.UdePrimary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, UDE primary button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.UdePrimary}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, UDE primary button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.UdePrimary}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, UDE secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.UdeSecondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, UDE secondary button with an icon', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.UdeSecondary}
        icon={editIcon}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, UDE secondary button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.UdeSecondary}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, UDE secondary button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.UdeSecondary}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, UDE delete button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.UdeDelete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, highlight button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Highlight} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, highlight button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Highlight}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, highlight button with an icon and data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Highlight}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

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

  test('renders a large, dropdown primary button', () => {
    const component = renderer.create(
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Large}
        buttonType={DropdownButton.Types.UdePrimary}
      >
        Button
      </DropdownButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, dropdown secondary button', () => {
    const component = renderer.create(
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Large}
        buttonType={DropdownButton.Types.UdeSecondary}
      >
        Button
      </DropdownButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, primary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Primary}>
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

  test('renders a medium, delete button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, UDE primary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.UdePrimary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, UDE primary button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.UdePrimary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, UDE primary button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.UdePrimary}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, UDE primary button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.UdePrimary}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, UDE secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.UdeSecondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, UDE secondary button with an icon', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.UdeSecondary}
        icon={editIcon}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, UDE secondary button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.UdeSecondary}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, UDE secondary button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.UdeSecondary}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, UDE delete button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.UdeDelete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, highlight button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Highlight} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, highlight button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Highlight}
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

  test('renders a medium, dropdown primary button', () => {
    const component = renderer.create(
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Medium}
        buttonType={DropdownButton.Types.UdePrimary}
      >
        Button
      </DropdownButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, dropdown secondary button', () => {
    const component = renderer.create(
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Medium}
        buttonType={DropdownButton.Types.UdeSecondary}
      >
        Button
      </DropdownButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, primary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.Primary}>
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

  test('renders a small, delete button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, UDE primary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.UdePrimary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, UDE secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.UdePrimary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, UDE delete button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.UdeDelete}>
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

  test('renders a button with no type defined', () => {
    const component = renderer.create(<Button buttonType={undefined}>Button</Button>);
    expect(component).toMatchSnapshot();
  });

  test('renders a growing button', () => {
    const component = renderer.create(<Button grow={true}>Button</Button>);
    expect(component).toMatchSnapshot();
  });
});

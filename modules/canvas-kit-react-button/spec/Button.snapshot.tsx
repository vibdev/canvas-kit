import * as React from 'react';
import Button from '../lib/Button';
import DropdownButton from '../lib/DropdownButton';
import TextButton from '../lib/TextButton';
import * as renderer from 'react-test-renderer';
import {ButtonTypes, ButtonSizes, IconPositions} from '../lib/types';
import {editIcon} from '@workday/canvas-system-icons-web';

describe('Button Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Button>Button</Button>);
    expect(component).toMatchSnapshot();
  });
  test('renders a large, primary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a large, secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, delete button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, UDE primary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.UdePrimary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, UDE primary button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.UdePrimary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, UDE primary button with a data label', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.UdePrimary} dataLabel={'1:00'}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, UDE primary button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.UdePrimary}
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
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.UdeSecondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, UDE secondary button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.UdeSecondary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, UDE secondary button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.UdeSecondary}
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
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.UdeSecondary}
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
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.UdeDelete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, highlight button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.Highlight} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, highlight button with a data label', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.Highlight} dataLabel={'1:00'}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, highlight button with an icon and data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.Highlight}
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
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.OutlineBlue}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline blue button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.OutlineBlue} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline blue button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.OutlineBlue}
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
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.OutlineBlue}
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
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.OutlineDark}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline dark button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.OutlineDark} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline dark button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.OutlineDark}
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
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.OutlineDark}
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
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.OutlineWhite}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline white button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.OutlineWhite} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline white button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.OutlineWhite}
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
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.OutlineWhite}
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
      <TextButton buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.Text}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.Text}
        icon={editIcon}
        iconPosition={IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.Text}
        icon={editIcon}
        iconPosition={IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text all caps button', () => {
    const component = renderer.create(
      <TextButton buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.TextAllCaps}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text all caps button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.TextAllCaps}
        icon={editIcon}
        iconPosition={IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text all caps button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.TextAllCaps}
        icon={editIcon}
        iconPosition={IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark all caps button', () => {
    const component = renderer.create(
      <TextButton buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.TextDarkAllCaps}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark all caps button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.TextDarkAllCaps}
        icon={editIcon}
        iconPosition={IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark all caps button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.TextDarkAllCaps}
        icon={editIcon}
        iconPosition={IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark button', () => {
    const component = renderer.create(
      <TextButton buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.TextDark}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.TextDark}
        icon={editIcon}
        iconPosition={IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.TextDark}
        icon={editIcon}
        iconPosition={IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark all caps button', () => {
    const component = renderer.create(
      <TextButton buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.TextDarkAllCaps}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark all caps button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.TextDarkAllCaps}
        icon={editIcon}
        iconPosition={IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text dark all caps button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Large}
        buttonType={ButtonTypes.TextDarkAllCaps}
        icon={editIcon}
        iconPosition={IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, dropdown primary button', () => {
    const component = renderer.create(
      <DropdownButton buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.Primary}>
        Button
      </DropdownButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, dropdown secondary button', () => {
    const component = renderer.create(
      <DropdownButton buttonSize={ButtonSizes.Large} buttonType={ButtonTypes.Secondary}>
        Button
      </DropdownButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, primary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, delete button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, UDE primary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.UdePrimary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, UDE primary button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.UdePrimary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, UDE primary button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={ButtonSizes.Medium}
        buttonType={ButtonTypes.UdePrimary}
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
        buttonSize={ButtonSizes.Medium}
        buttonType={ButtonTypes.UdePrimary}
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
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.UdeSecondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, UDE secondary button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.UdeSecondary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, UDE secondary button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={ButtonSizes.Medium}
        buttonType={ButtonTypes.UdeSecondary}
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
        buttonSize={ButtonSizes.Medium}
        buttonType={ButtonTypes.UdeSecondary}
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
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.UdeDelete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, highlight button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.Highlight} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, highlight button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={ButtonSizes.Medium}
        buttonType={ButtonTypes.Highlight}
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
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.OutlineBlue}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline blue button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.OutlineBlue} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline blue button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={ButtonSizes.Medium}
        buttonType={ButtonTypes.OutlineBlue}
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
        buttonSize={ButtonSizes.Medium}
        buttonType={ButtonTypes.OutlineBlue}
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
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.OutlineDark}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline dark button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.OutlineDark} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline dark button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={ButtonSizes.Medium}
        buttonType={ButtonTypes.OutlineDark}
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
        buttonSize={ButtonSizes.Medium}
        buttonType={ButtonTypes.OutlineDark}
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
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.OutlineWhite}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline white button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.OutlineWhite} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline white button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={ButtonSizes.Medium}
        buttonType={ButtonTypes.OutlineWhite}
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
        buttonSize={ButtonSizes.Medium}
        buttonType={ButtonTypes.OutlineWhite}
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
      <DropdownButton buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.Primary}>
        Button
      </DropdownButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, dropdown secondary button', () => {
    const component = renderer.create(
      <DropdownButton buttonSize={ButtonSizes.Medium} buttonType={ButtonTypes.Secondary}>
        Button
      </DropdownButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, primary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, delete button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, UDE primary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.UdePrimary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, UDE secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.UdePrimary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, UDE delete button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.UdeDelete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, outline blue button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.OutlineBlue}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, outline dark button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.OutlineDark}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, outline white button', () => {
    const component = renderer.create(
      <Button buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.OutlineWhite}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button', () => {
    const component = renderer.create(
      <TextButton buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.Text}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Small}
        buttonType={ButtonTypes.Text}
        icon={editIcon}
        iconPosition={IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Small}
        buttonType={ButtonTypes.Text}
        icon={editIcon}
        iconPosition={IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button with all caps', () => {
    const component = renderer.create(
      <TextButton buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.TextAllCaps}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button with all caps with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Small}
        buttonType={ButtonTypes.TextAllCaps}
        icon={editIcon}
        iconPosition={IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button with all caps with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Small}
        buttonType={ButtonTypes.TextAllCaps}
        icon={editIcon}
        iconPosition={IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text dark button', () => {
    const component = renderer.create(
      <TextButton buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.TextDark}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text dark button with all caps', () => {
    const component = renderer.create(
      <TextButton buttonSize={ButtonSizes.Small} buttonType={ButtonTypes.TextDarkAllCaps}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text dark button with all caps and left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Small}
        buttonType={ButtonTypes.TextDarkAllCaps}
        icon={editIcon}
        iconPosition={IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text dark button with all caps and right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Small}
        buttonType={ButtonTypes.TextDarkAllCaps}
        icon={editIcon}
        iconPosition={IconPositions.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text dark button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Small}
        buttonType={ButtonTypes.TextDark}
        icon={editIcon}
        iconPosition={IconPositions.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text dark button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={ButtonSizes.Small}
        buttonType={ButtonTypes.TextDark}
        icon={editIcon}
        iconPosition={IconPositions.Right}
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

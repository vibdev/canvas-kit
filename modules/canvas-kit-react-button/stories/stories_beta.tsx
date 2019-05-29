/// <reference path="../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {
  editIcon,
  playCircleIcon,
  arrowRightIcon,
  activityStreamIcon,
} from '@workday/canvas-system-icons-web';

import {beta_Button as Button, DropdownButton, TextButton} from '..';
import README from '../README.md';
import {css} from 'emotion';
import {CSSObject} from 'create-emotion';

// TODO (beta button): remove this story, edit storybook config to not accept stories*.tsx
// TODO (beta button): remove stories_beta.tsx from tsconfig.json in this module
const blueBackground: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0875e1',
  margin: '0 10px',
  padding: '24px',
  maxWidth: 'max-content',
  borderRadius: '3px',
  button: {
    margin: '0 12px',
  },
};

const buttonContainer = {
  display: 'flex',
  alignItems: 'center',
  '& button + button': {
    marginLeft: 10,
  },
};

storiesOf('Button/Beta', module)
  .addDecorator(withReadme(README))
  .add('Primary Buttons', () => (
    <div className="story">
      <h1 className="section-label">Primary Buttons</h1>
      <h3>Large Primary Buttons</h3>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Primary}>
        Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Primary}
        icon={activityStreamIcon}
      >
        Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <h3>Medium Primary Buttons</h3>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Primary}>
        Primary
      </Button>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Primary} icon={editIcon}>
        Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Primary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <h3>Small Primary Buttons</h3>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.Primary}>
        Primary
      </Button>
      <Button disabled={true} buttonSize={Button.Sizes.Small} buttonType={Button.Types.Primary}>
        Primary
      </Button>
      <h3>Growing Primary Button</h3>
      <div className={css(buttonContainer)}>
        <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Primary} grow={true}>
          Primary
        </Button>
      </div>
    </div>
  ))
  .add('Secondary Buttons', () => (
    <div className="story">
      <h1 className="section-label">Secondary Buttons</h1>
      <h3>Large Secondary Buttons</h3>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Secondary}>
        Secondary
      </Button>
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Secondary}
        icon={activityStreamIcon}
      >
        Secondary
      </Button>
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <h3>Medium Secondary Buttons</h3>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Secondary}>
        Secondary
      </Button>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Secondary} icon={editIcon}>
        Secondary
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Secondary}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <h3>Small Secondary Buttons</h3>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.Secondary}>
        Secondary
      </Button>
      <Button disabled={true} buttonSize={Button.Sizes.Small} buttonType={Button.Types.Secondary}>
        Secondary
      </Button>
      <h3>Growing Secondary Button</h3>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Secondary} grow={true}>
        Growing Secondary
      </Button>
    </div>
  ))
  .add('Delete Buttons', () => (
    <div className="story">
      <h1 className="section-label">Delete Buttons</h1>
      <h3>Large Delete Buttons</h3>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Delete}>
        Delete
      </Button>
      <Button disabled={true} buttonSize={Button.Sizes.Large} buttonType={Button.Types.Delete}>
        Delete
      </Button>
      <h3>Medium Delete Buttons</h3>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Delete}>
        Delete
      </Button>
      <Button disabled={true} buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Delete}>
        Delete
      </Button>
      <h3>Small Delete Buttons</h3>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.Delete}>
        Delete
      </Button>
      <Button disabled={true} buttonSize={Button.Sizes.Small} buttonType={Button.Types.Delete}>
        Delete
      </Button>
    </div>
  ))
  .add('Highlight Buttons', () => (
    <div className="story">
      <h1 className="section-label">Highlight Buttons</h1>
      <h3>Large Highlight Buttons</h3>
      <Button buttonType={Button.Types.Highlight} icon={activityStreamIcon}>
        Highlight
      </Button>
      <Button buttonType={Button.Types.Highlight} icon={playCircleIcon} dataLabel={'2:00'}>
        Highlight
      </Button>
      <Button
        disabled={true}
        buttonType={Button.Types.Highlight}
        icon={playCircleIcon}
        dataLabel={'2:00'}
      >
        Highlight
      </Button>

      <h3>Medium Highlight Buttons</h3>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Highlight}
        icon={playCircleIcon}
      >
        Highlight
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Highlight}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Highlight
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Highlight}
        icon={playCircleIcon}
        dataLabel={'1:00'}
      >
        Highlight
      </Button>
      <h3>Growing Buttons</h3>
      <div className={css(buttonContainer)}>
        <Button buttonType={Button.Types.Highlight} icon={activityStreamIcon} grow={true}>
          Highlight
        </Button>
        <Button
          buttonType={Button.Types.Highlight}
          icon={playCircleIcon}
          dataLabel={'2:00'}
          grow={true}
        >
          Highlight
        </Button>
      </div>
    </div>
  ));

storiesOf('Button/Beta/Text', module)
  .addDecorator(withReadme(README))
  .add('Text Buttons', () => (
    <div className="story">
      <h1 className="section-label">Text Buttons</h1>
      <h3>Large Text Button</h3>
      <TextButton buttonSize={TextButton.Sizes.Large} buttonType={TextButton.Types.Default}>
        Text
      </TextButton>
      <TextButton
        disabled={true}
        buttonSize={TextButton.Sizes.Large}
        buttonType={TextButton.Types.Default}
      >
        Text
      </TextButton>
      <h3>Small Text Button</h3>
      <TextButton buttonSize={TextButton.Sizes.Small} buttonType={TextButton.Types.Default}>
        Text
      </TextButton>
      <TextButton
        disabled={true}
        buttonSize={TextButton.Sizes.Small}
        buttonType={TextButton.Types.Default}
      >
        Text
      </TextButton>
      <h3>All Caps Text Button</h3>
      <TextButton buttonType={TextButton.Types.AllCaps}>All Caps</TextButton>
      <h3>Icon Text Buttons</h3>
      <div className={css(buttonContainer)}>
        <TextButton
          icon={editIcon}
          iconPosition={TextButton.IconPositions.Left}
          buttonType={TextButton.Types.Default}
        >
          Left Icon Large
        </TextButton>
        <TextButton
          icon={arrowRightIcon}
          iconPosition={TextButton.IconPositions.Right}
          buttonType={TextButton.Types.Default}
        >
          Right Icon Large
        </TextButton>
      </div>
    </div>
  ))
  .add('Inverse Text Buttons', () => (
    <div className="story">
      <h1 className="section-label">Inverse Text Buttons</h1>
      <h3>Large Inverse Text Button</h3>
      <div className={css(blueBackground)}>
        <TextButton buttonSize={TextButton.Sizes.Large} buttonType={TextButton.Types.Inverse}>
          Text
        </TextButton>
        <TextButton
          disabled={true}
          buttonSize={TextButton.Sizes.Large}
          buttonType={TextButton.Types.Inverse}
        >
          Text
        </TextButton>
      </div>
      <h3>Small Inverse Text Button</h3>
      <div className={css(blueBackground)}>
        <TextButton buttonSize={TextButton.Sizes.Small} buttonType={TextButton.Types.Inverse}>
          Text
        </TextButton>
        <TextButton
          disabled={true}
          buttonSize={TextButton.Sizes.Small}
          buttonType={TextButton.Types.Inverse}
        >
          Text
        </TextButton>
      </div>
      <h3>All Caps Inverse Text Button</h3>
      <div className={css(blueBackground)}>
        <TextButton buttonType={TextButton.Types.InverseAllCaps}>All Caps</TextButton>
      </div>
      <h3>Icon Inverse Text Buttons</h3>
      <div className={css(buttonContainer, blueBackground)}>
        <TextButton
          icon={editIcon}
          iconPosition={TextButton.IconPositions.Left}
          buttonType={TextButton.Types.Inverse}
        >
          Left Icon Large
        </TextButton>
        <TextButton
          icon={arrowRightIcon}
          iconPosition={TextButton.IconPositions.Right}
          buttonType={TextButton.Types.Inverse}
        >
          Right Icon Large
        </TextButton>
      </div>
    </div>
  ));

storiesOf('Button/Beta/Outline', module)
  .addDecorator(withReadme(README))
  .add('Primary Outline Buttons', () => (
    <div className="story">
      <h1 className="section-label">Primary Outline Buttons</h1>
      <h3>Large Primary Outline Buttons</h3>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlinePrimary}>
        Outline Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.OutlinePrimary}
        icon={activityStreamIcon}
      >
        Outline Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Large}
        dataLabel={'1:00'}
        buttonType={Button.Types.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Large}
        disabled={true}
        dataLabel={'1:00'}
        buttonType={Button.Types.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>
      <h3>Medium Primary Outline Buttons</h3>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.OutlinePrimary}>
        Outline Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.OutlinePrimary}
        icon={editIcon}
      >
        Outline Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        dataLabel={'1:00'}
        buttonType={Button.Types.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        disabled={true}
        dataLabel={'1:00'}
        buttonType={Button.Types.OutlinePrimary}
        icon={playCircleIcon}
      >
        Outline Primary
      </Button>
      <h3>Small Primary Outline Buttons</h3>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.OutlinePrimary}>
        Outline Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Small}
        disabled={true}
        buttonType={Button.Types.OutlinePrimary}
      >
        Outline Primary
      </Button>
      <h3>Growing Primary Outline Button</h3>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlinePrimary} grow={true}>
        Growing Primary Outline
      </Button>
    </div>
  ))
  .add('Secondary Outline Buttons', () => (
    <div className="story">
      <h1 className="section-label">Secondary Outline Buttons</h1>
      <h3>Large Secondary Outline Buttons</h3>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlineSecondary}>
        Outline Secondary
      </Button>
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.OutlineSecondary}
        icon={activityStreamIcon}
      >
        Outline Secondary
      </Button>
      <Button
        buttonSize={Button.Sizes.Large}
        dataLabel={'1:00'}
        buttonType={Button.Types.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>
      <Button
        buttonSize={Button.Sizes.Large}
        disabled={true}
        dataLabel={'1:00'}
        buttonType={Button.Types.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>
      <h3>Medium Secondary Outline Buttons</h3>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.OutlineSecondary}>
        Outline Secondary
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.OutlineSecondary}
        icon={editIcon}
      >
        Outline Secondary
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        dataLabel={'1:00'}
        buttonType={Button.Types.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        disabled={true}
        dataLabel={'1:00'}
        buttonType={Button.Types.OutlineSecondary}
        icon={playCircleIcon}
      >
        Outline Secondary
      </Button>
      <h3>Small Secondary Outline Buttons</h3>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.OutlineSecondary}>
        Outline Secondary
      </Button>
      <Button
        buttonSize={Button.Sizes.Small}
        disabled={true}
        buttonType={Button.Types.OutlineSecondary}
      >
        Outline Secondary
      </Button>
      <h3>Growing Secondary Outline Button</h3>
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.OutlineSecondary}
        grow={true}
      >
        Growing Secondary Outline
      </Button>
    </div>
  ))
  .add('Inverse Outline Buttons', () => (
    <div className="story">
      <h1 className="section-label">Inverse Outline Buttons</h1>
      <h3>Large Inverse Outline Buttons</h3>
      <div className={css(blueBackground)}>
        <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlineInverse}>
          Outline Inverse
        </Button>
        <Button
          buttonSize={Button.Sizes.Large}
          buttonType={Button.Types.OutlineInverse}
          icon={activityStreamIcon}
        >
          Outline Inverse
        </Button>
        <Button
          buttonSize={Button.Sizes.Large}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
        <Button
          buttonSize={Button.Sizes.Large}
          disabled={true}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
      </div>
      <h3>Medium Inverse Outline Buttons</h3>
      <div className={css(blueBackground)}>
        <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.OutlineInverse}>
          Outline Inverse
        </Button>
        <Button
          buttonSize={Button.Sizes.Medium}
          buttonType={Button.Types.OutlineInverse}
          icon={editIcon}
        >
          Outline Inverse
        </Button>
        <Button
          buttonSize={Button.Sizes.Medium}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
        <Button
          buttonSize={Button.Sizes.Medium}
          disabled={true}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineInverse}
          icon={playCircleIcon}
        >
          Outline Inverse
        </Button>
      </div>
      <h3>Small Inverse Outline Buttons</h3>
      <div className={css(blueBackground)}>
        <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.OutlineInverse}>
          Outline Inverse
        </Button>
        <Button
          buttonSize={Button.Sizes.Small}
          disabled={true}
          buttonType={Button.Types.OutlineInverse}
        >
          Outline Inverse
        </Button>
      </div>
      <h3>Growing Inverse Outline Button</h3>
      <div className={css(blueBackground)} style={{maxWidth: 'initial'}}>
        <Button
          buttonSize={Button.Sizes.Large}
          buttonType={Button.Types.OutlineInverse}
          grow={true}
        >
          Growing Inverse Outline
        </Button>
      </div>
    </div>
  ));

storiesOf('Button/Beta/Dropdown', module)
  .addDecorator(withReadme(README))
  .add('Primary Dropdown Buttons', () => (
    <div className="story">
      <h1 className="section-label">Primary Dropdown Buttons</h1>
      <h3>Large Primary Dropdown Buttons</h3>
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Large}
        buttonType={DropdownButton.Types.Primary}
      >
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        buttonSize={DropdownButton.Sizes.Large}
        buttonType={DropdownButton.Types.Primary}
      >
        Dropdown Button
      </DropdownButton>
      <h3>Medium Primary Dropdown Buttons</h3>
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Medium}
        buttonType={DropdownButton.Types.Primary}
      >
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        buttonSize={DropdownButton.Sizes.Medium}
        buttonType={DropdownButton.Types.Primary}
      >
        Dropdown Button
      </DropdownButton>
    </div>
  ))
  .add('Secondary Dropdown Buttons', () => (
    <div className="story">
      <h1 className="section-label">Secondary Dropdown Buttons</h1>
      <h3>Large Secondary Dropdown Buttons</h3>
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Large}
        buttonType={DropdownButton.Types.Secondary}
      >
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        buttonSize={DropdownButton.Sizes.Large}
        buttonType={DropdownButton.Types.Secondary}
      >
        Dropdown Button
      </DropdownButton>
      <h3>Medium Secondary Dropdown Buttons</h3>
      <DropdownButton
        buttonSize={DropdownButton.Sizes.Medium}
        buttonType={DropdownButton.Types.Secondary}
      >
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        buttonSize={DropdownButton.Sizes.Medium}
        buttonType={DropdownButton.Types.Secondary}
      >
        Dropdown Button
      </DropdownButton>
    </div>
  ));

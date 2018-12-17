/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {editIcon, mediaPlayIcon, arrowRightIcon} from '@workday/canvas-system-icons-web';

import {Button, IconButton, DropdownButton, TextButton} from './index'; // tslint:disable-line:import-name
import README from './README.md';
import {css} from 'emotion';
import {CSSObject} from 'create-emotion';

const outlineWhiteBackground = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#0875e1',
  margin: '0 10px',
  padding: '24px',
  maxWidth: 'max-content',
  borderRadius: '3px',
} as CSSObject;

const buttonContainer = {
  display: 'flex',
  alignItems: 'center',
  '& button + button': {
    marginLeft: 10,
  },
};

storiesOf('Canvas Kit/Button', module)
  .addDecorator(withReadme(README))
  .add('Canvas', () => (
    <div className="story">
      <h1 className="section-label">Canvas Buttons</h1>
      <Button
        buttonType={Button.Types.Primary}
        onClick={() => {
          window.alert('Primary Button selected');
        }}
      >
        Primary Button
      </Button>
      <Button>Secondary Button</Button>
      <Button buttonType={Button.Types.Delete}>Delete Button</Button>
      <br />
      <Button buttonType={Button.Types.Primary} buttonSize={Button.Sizes.Medium}>
        Primary Button
      </Button>
      <Button buttonSize={Button.Sizes.Medium}>Secondary Button</Button>
      <Button buttonType={Button.Types.Delete} buttonSize={Button.Sizes.Medium}>
        Delete Button
      </Button>
      <br />
      <Button buttonSize={Button.Sizes.Small}>Secondary Button</Button>
      <br />
      <Button buttonType={Button.Types.Primary} disabled={true}>
        Primary Button
      </Button>
      <Button disabled={true}>Secondary Button</Button>
      <Button buttonType={Button.Types.Delete} disabled={true}>
        Delete Button
      </Button>
      <br />
      <IconButton>
        <SystemIcon icon={editIcon} />
      </IconButton>
      <br />
      <IconButton disabled={true}>
        <SystemIcon icon={editIcon} />
      </IconButton>
      <br />
      <h1 className="section-label">Growing Button</h1>
      <div className={css(buttonContainer)}>
        <Button
          buttonType={Button.Types.Primary}
          grow={true}
          onClick={() => {
            window.alert('Growing Primary Button selected');
          }}
        >
          Growing Primary Button
        </Button>
        <Button
          buttonType={Button.Types.Secondary}
          grow={true}
          onClick={() => {
            window.alert('Growing Secondary Button selected');
          }}
        >
          Growing Secondary Button
        </Button>
      </div>
    </div>
  ))
  .add('UDE Buttons', () => (
    <div className="story">
      <h1 className="section-label">UDE Buttons</h1>
      <h3>Large Buttons</h3>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.UdePrimary}>
        Primary
      </Button>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.UdeSecondary}>
        Secondary
      </Button>
      <br />
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.UdePrimary} icon={editIcon}>
        Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.UdeSecondary}
        icon={editIcon}
      >
        Secondary
      </Button>
      <br />
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.UdePrimary}
        icon={mediaPlayIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.UdeSecondary}
        icon={mediaPlayIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <br />
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.UdePrimary}
        icon={mediaPlayIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.UdeSecondary}
        icon={mediaPlayIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <h3>Medium Buttons</h3>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.UdePrimary}>
        Primary
      </Button>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.UdeSecondary}>
        Secondary
      </Button>
      <br />
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.UdePrimary} icon={editIcon}>
        Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.UdeSecondary}
        icon={editIcon}
      >
        Secondary
      </Button>
      <br />
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.UdePrimary}
        icon={mediaPlayIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.UdeSecondary}
        icon={mediaPlayIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <br />
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.UdePrimary}
        icon={mediaPlayIcon}
        dataLabel={'1:00'}
      >
        Primary
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.UdeSecondary}
        icon={mediaPlayIcon}
        dataLabel={'1:00'}
      >
        Secondary
      </Button>
      <h3>Small Buttons</h3>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.UdePrimary}>
        Primary
      </Button>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.UdeSecondary}>
        Secondary
      </Button>
      <br />
      <Button disabled={true} buttonSize={Button.Sizes.Small} buttonType={Button.Types.UdePrimary}>
        Primary
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Small}
        buttonType={Button.Types.UdeSecondary}
      >
        Secondary
      </Button>
    </div>
  ))
  .add('Highlight Buttons', () => (
    <div className="story">
      <h1 className="section-label">Highlight Buttons</h1>
      <h3>Large Highlight Buttons</h3>
      <Button buttonType={Button.Types.Highlight} icon={mediaPlayIcon}>
        Highlight
      </Button>
      <Button buttonType={Button.Types.Highlight} icon={mediaPlayIcon} dataLabel={'2:00'}>
        Highlight
      </Button>
      <Button
        disabled={true}
        buttonType={Button.Types.Highlight}
        icon={mediaPlayIcon}
        dataLabel={'2:00'}
      >
        Highlight
      </Button>

      <h3>Medium Highlight Buttons</h3>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Highlight}
        icon={mediaPlayIcon}
      >
        Highlight
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Highlight}
        icon={mediaPlayIcon}
        dataLabel={'1:00'}
      >
        Highlight
      </Button>
      <Button
        disabled={true}
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Highlight}
        icon={mediaPlayIcon}
        dataLabel={'1:00'}
      >
        Highlight
      </Button>
    </div>
  ))
  .add('Outline Buttons', () => (
    <div className="story">
      <h1 className="section-label">Outline Buttons</h1>
      <h3>Large Outline Buttons</h3>
      <div className={css(buttonContainer)}>
        <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlineBlue}>
          Outline Blue
        </Button>
        <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlineDark}>
          Outline Dark
        </Button>
        <div className={css(outlineWhiteBackground)}>
          <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlineWhite}>
            Outline White
          </Button>
        </div>
      </div>
      <br />
      <div className={css(buttonContainer)}>
        <Button
          buttonSize={Button.Sizes.Large}
          buttonType={Button.Types.OutlineBlue}
          icon={editIcon}
        >
          Outline Blue
        </Button>
        <Button
          buttonSize={Button.Sizes.Large}
          buttonType={Button.Types.OutlineDark}
          icon={editIcon}
        >
          Outline Dark
        </Button>
        <div className={css(outlineWhiteBackground)}>
          <Button
            buttonSize={Button.Sizes.Large}
            buttonType={Button.Types.OutlineWhite}
            icon={editIcon}
          >
            Outline White
          </Button>
        </div>
      </div>
      <br />
      <div className={css(buttonContainer)}>
        <Button
          buttonSize={Button.Sizes.Large}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineBlue}
          icon={mediaPlayIcon}
        >
          Outline Blue
        </Button>
        <Button
          buttonSize={Button.Sizes.Large}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineDark}
          icon={mediaPlayIcon}
        >
          Outline Dark
        </Button>
        <div className={css(outlineWhiteBackground)}>
          <Button
            buttonSize={Button.Sizes.Large}
            dataLabel={'1:00'}
            buttonType={Button.Types.OutlineWhite}
            icon={mediaPlayIcon}
          >
            Outline White
          </Button>
        </div>
      </div>
      <br />
      <div className={css(buttonContainer)}>
        <Button
          buttonSize={Button.Sizes.Large}
          disabled={true}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineBlue}
          icon={mediaPlayIcon}
        >
          Outline Blue
        </Button>
        <Button
          buttonSize={Button.Sizes.Large}
          disabled={true}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineDark}
          icon={mediaPlayIcon}
        >
          Outline Dark
        </Button>
        <div className={css(outlineWhiteBackground)}>
          <Button
            buttonSize={Button.Sizes.Large}
            disabled={true}
            dataLabel={'1:00'}
            buttonType={Button.Types.OutlineWhite}
            icon={mediaPlayIcon}
          >
            Outline White
          </Button>
        </div>
      </div>
      <h3>Medium Outline Buttons</h3>
      <div className={css(buttonContainer)}>
        <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.OutlineBlue}>
          Outline Blue
        </Button>
        <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.OutlineDark}>
          Outline Dark
        </Button>
        <div className={css(outlineWhiteBackground)}>
          <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.OutlineWhite}>
            Outline White
          </Button>
        </div>
      </div>
      <br />
      <div className={css(buttonContainer)}>
        <Button
          buttonSize={Button.Sizes.Medium}
          buttonType={Button.Types.OutlineBlue}
          icon={editIcon}
        >
          Outline Blue
        </Button>
        <Button
          buttonSize={Button.Sizes.Medium}
          buttonType={Button.Types.OutlineDark}
          icon={editIcon}
        >
          Outline Dark
        </Button>
        <div className={css(outlineWhiteBackground)}>
          <Button
            buttonSize={Button.Sizes.Medium}
            buttonType={Button.Types.OutlineWhite}
            icon={editIcon}
          >
            Outline White
          </Button>
        </div>
      </div>
      <br />
      <div className={css(buttonContainer)}>
        <Button
          buttonSize={Button.Sizes.Medium}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineBlue}
          icon={mediaPlayIcon}
        >
          Outline Blue
        </Button>
        <Button
          buttonSize={Button.Sizes.Medium}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineDark}
          icon={mediaPlayIcon}
        >
          Outline Dark
        </Button>
        <div className={css(outlineWhiteBackground)}>
          <Button
            buttonSize={Button.Sizes.Medium}
            dataLabel={'1:00'}
            buttonType={Button.Types.OutlineWhite}
            icon={mediaPlayIcon}
          >
            Outline White
          </Button>
        </div>
      </div>
      <br />
      <div className={css(buttonContainer)}>
        <Button
          buttonSize={Button.Sizes.Medium}
          disabled={true}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineBlue}
          icon={mediaPlayIcon}
        >
          Outline Blue
        </Button>
        <Button
          buttonSize={Button.Sizes.Medium}
          disabled={true}
          dataLabel={'1:00'}
          buttonType={Button.Types.OutlineDark}
          icon={mediaPlayIcon}
        >
          Outline Dark
        </Button>
        <div className={css(outlineWhiteBackground)}>
          <Button
            buttonSize={Button.Sizes.Medium}
            disabled={true}
            dataLabel={'1:00'}
            buttonType={Button.Types.OutlineWhite}
            icon={mediaPlayIcon}
          >
            Outline White
          </Button>
        </div>
      </div>
      <h3>Small Outline Buttons</h3>
      <div className={css(buttonContainer)}>
        <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.OutlineBlue}>
          Outline Blue
        </Button>
        <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.OutlineDark}>
          Outline Dark
        </Button>
        <div className={css(outlineWhiteBackground)}>
          <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.OutlineWhite}>
            Outline White
          </Button>
        </div>
      </div>
      <br />
      <div className={css(buttonContainer)}>
        <Button
          buttonSize={Button.Sizes.Small}
          disabled={true}
          buttonType={Button.Types.OutlineBlue}
        >
          Outline Blue
        </Button>
        <Button
          buttonSize={Button.Sizes.Small}
          disabled={true}
          buttonType={Button.Types.OutlineDark}
        >
          Outline Dark
        </Button>
        <div className={css(outlineWhiteBackground)}>
          <Button
            buttonSize={Button.Sizes.Small}
            disabled={true}
            buttonType={Button.Types.OutlineWhite}
          >
            Outline White
          </Button>
        </div>
      </div>
    </div>
  ))
  .add('Text Buttons', () => (
    <div className="story">
      <h1 className="section-label">Text Buttons</h1>
      <h3>Large Text Buttons</h3>
      <div className={css(outlineWhiteBackground)}>
        <TextButton buttonSize={Button.Sizes.Large} buttonType={Button.Types.TextDark}>
          Text Dark
        </TextButton>
      </div>
      <TextButton buttonSize={Button.Sizes.Large} buttonType={Button.Types.Text}>
        Text
      </TextButton>
      <h3>Small Text Buttons</h3>
      <div className={css(outlineWhiteBackground)}>
        <TextButton buttonSize={Button.Sizes.Small} buttonType={Button.Types.TextDark}>
          Text Dark
        </TextButton>
      </div>
      <TextButton buttonSize={Button.Sizes.Small} buttonType={Button.Types.Text}>
        Text
      </TextButton>
      <h3>All Caps Text Buttons</h3>
      <TextButton buttonType={Button.Types.TextAllCaps}>All Caps</TextButton>
      <div className={css(outlineWhiteBackground)}>
        <TextButton buttonType={Button.Types.TextDarkAllCaps}>All Caps</TextButton>
      </div>

      <h3>Icon Text Buttons</h3>
      <div className={css(buttonContainer)}>
        <TextButton
          icon={editIcon}
          iconPosition={TextButton.IconPositions.Left}
          buttonType={Button.Types.Text}
        >
          Left Icon Large
        </TextButton>
        <TextButton
          icon={arrowRightIcon}
          iconPosition={TextButton.IconPositions.Right}
          buttonType={Button.Types.Text}
        >
          Right Icon Large
        </TextButton>
      </div>
      <div className={css(outlineWhiteBackground)}>
        <TextButton
          icon={editIcon}
          iconPosition={TextButton.IconPositions.Left}
          buttonType={Button.Types.TextDark}
        >
          Left Icon Large
        </TextButton>
      </div>
      <div className={css(buttonContainer)}>
        <TextButton
          buttonSize={Button.Sizes.Small}
          icon={editIcon}
          iconPosition={TextButton.IconPositions.Left}
          buttonType={Button.Types.Text}
        >
          Left Icon Small
        </TextButton>
        <TextButton
          buttonSize={Button.Sizes.Small}
          icon={arrowRightIcon}
          iconPosition={TextButton.IconPositions.Right}
          buttonType={Button.Types.Text}
        >
          Right Icon Small
        </TextButton>
      </div>
      <div className={css(outlineWhiteBackground)}>
        <TextButton
          buttonSize={Button.Sizes.Small}
          iconPosition={TextButton.IconPositions.Left}
          icon={editIcon}
          buttonType={Button.Types.TextDark}
        >
          Left Icon Small
        </TextButton>
      </div>
      <h3>Disabled States</h3>
      <div className={css(outlineWhiteBackground)}>
        <TextButton
          icon={editIcon}
          disabled={true}
          buttonSize={Button.Sizes.Large}
          buttonType={Button.Types.TextDark}
        >
          Text Dark
        </TextButton>
      </div>
      <TextButton
        icon={editIcon}
        disabled={true}
        buttonSize={Button.Sizes.Small}
        buttonType={Button.Types.Text}
      >
        Text
      </TextButton>
    </div>
  ))
  .add('Dropdown Buttons', () => (
    <div className="story">
      <h1 className="section-label">Dropdown Buttons</h1>
      <h3>Large Dropdown Buttons</h3>
      <DropdownButton buttonSize={Button.Sizes.Large} buttonType={Button.Types.Primary}>
        Dropdown Button
      </DropdownButton>
      <DropdownButton buttonSize={Button.Sizes.Large} buttonType={Button.Types.Secondary}>
        Dropdown Button
      </DropdownButton>
      <br />
      <DropdownButton
        disabled={true}
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Primary}
      >
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Secondary}
      >
        Dropdown Button
      </DropdownButton>
      <h3>Medium Dropdown Buttons</h3>
      <DropdownButton buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Primary}>
        Dropdown Button
      </DropdownButton>
      <DropdownButton buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Secondary}>
        Dropdown Button
      </DropdownButton>
      <br />
      <DropdownButton
        disabled={true}
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Primary}
      >
        Dropdown Button
      </DropdownButton>
      <DropdownButton
        disabled={true}
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Secondary}
      >
        Dropdown Button
      </DropdownButton>
    </div>
  ));

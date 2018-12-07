/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {editIcon, mediaPlayIcon} from '@workday/canvas-system-icons-web';

import {Button, IconButton, DropdownButton} from './index'; // tslint:disable-line:import-name
import README from './README.md';
import {css} from 'emotion';

storiesOf('Canvas Kit/Button', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
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
      <div
        className={css({
          display: 'flex',
          '& button + button': {
            marginLeft: 10,
          },
        })}
      >
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
      <br />
      <h1 className="section-label">UDE Buttons</h1>
      <h3>Large Buttons</h3>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.UdePrimary}>
        Ude Primary
      </Button>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.UdeSecondary}>
        Ude Secondary
      </Button>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Highlight}>
        Highlight
      </Button>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlineBlue}>
        Outline Blue
      </Button>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlineDark}>
        Outline Dark
      </Button>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4a47d4',
          width: '200px',
          height: '100px',
        })}
      >
        <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.OutlineWhite}>
          Outline White
        </Button>
      </div>
      <h3>Medium Buttons</h3>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.UdePrimary}>
        Ude Primary
      </Button>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.UdeSecondary}>
        Ude Secondary
      </Button>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Highlight}>
        Highlight
      </Button>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.OutlineBlue}>
        Outline Blue
      </Button>
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.OutlineDark}>
        Outline Dark
      </Button>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4a47d4',
          width: '200px',
          height: '100px',
        })}
      >
        <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.OutlineWhite}>
          Outline White
        </Button>
      </div>
      <h3>Small Buttons</h3>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.UdePrimary}>
        Ude Primary
      </Button>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.UdeSecondary}>
        Ude Secondary
      </Button>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.Highlight}>
        Highlight
      </Button>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.OutlineBlue}>
        Outline Blue
      </Button>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.OutlineDark}>
        Outline Dark
      </Button>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4a47d4',
          width: '300px',
          height: '100px',
        })}
      >
        <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.OutlineWhite}>
          Outline White
        </Button>
      </div>
      <h1 className="section-label">UDE Data Labels</h1>
      <h3>Large Buttons</h3>
      <Button buttonType={Button.Types.Highlight} dataLabel={'1:00'}>
        Highlight
      </Button>
      <Button buttonType={Button.Types.OutlineBlue} dataLabel={'2:00'}>
        Outline Blue
      </Button>
      <Button buttonType={Button.Types.OutlineDark} dataLabel={'5:00'}>
        Outline Dark
      </Button>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4a47d4',
          width: '300px',
          height: '100px',
        })}
      >
        <Button buttonType={Button.Types.OutlineWhite} dataLabel={'3:00'}>
          Outline White
        </Button>
      </div>
      <h3>Medium Buttons</h3>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Highlight}
        dataLabel={'1:00'}
      >
        Highlight
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.OutlineBlue}
        dataLabel={'2:00'}
      >
        Outline Blue
      </Button>
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.OutlineDark}
        dataLabel={'5:00'}
      >
        Outline Dark
      </Button>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4a47d4',
          width: '300px',
          height: '100px',
        })}
      >
        <Button
          buttonSize={Button.Sizes.Medium}
          buttonType={Button.Types.OutlineWhite}
          dataLabel={'3:00'}
        >
          Outline White
        </Button>
      </div>

      <h1 className="section-label">UDE Button Icons</h1>
      <h3>Large Buttons</h3>
      <div
        className={css({
          display: 'flex',
          button: {
            margin: '15px',
          },
        })}
      >
        <Button buttonType={Button.Types.UdePrimary} icon={editIcon}>
          Primary
        </Button>
        <Button buttonType={Button.Types.UdeSecondary} icon={editIcon}>
          Primary
        </Button>
        <Button buttonType={Button.Types.Highlight} icon={editIcon}>
          Highlight
        </Button>
        <Button buttonType={Button.Types.Highlight} icon={mediaPlayIcon} dataLabel={'1:00'}>
          Highlight
        </Button>
        <Button buttonType={Button.Types.OutlineBlue} icon={editIcon}>
          Outline Blue
        </Button>
      </div>
      <h3>Medium Buttons</h3>
      <div
        className={css({
          display: 'flex',
          button: {
            margin: '15px',
          },
        })}
      >
        <Button
          buttonType={Button.Types.UdePrimary}
          buttonSize={Button.Sizes.Medium}
          icon={editIcon}
        >
          Primary
        </Button>
        <Button
          buttonType={Button.Types.UdeSecondary}
          buttonSize={Button.Sizes.Medium}
          icon={editIcon}
        >
          Primary
        </Button>
        <Button
          buttonSize={Button.Sizes.Medium}
          buttonType={Button.Types.Highlight}
          icon={editIcon}
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
          buttonSize={Button.Sizes.Medium}
          buttonType={Button.Types.OutlineBlue}
          icon={editIcon}
        >
          Outline Blue
        </Button>
      </div>
      <h1 className="section-label">UDE Text Buttons</h1>
      <h3>Large Text Buttons</h3>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4a47d4',
          width: '300px',
          height: '100px',
        })}
      >
        <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.TextDark}>
          Text Dark
        </Button>
      </div>
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Text}>
        Text
      </Button>
      <h3>Medium Text Buttons</h3>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4a47d4',
          width: '300px',
          height: '100px',
        })}
      >
        <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.TextDark}>
          Text Dark
        </Button>
      </div>
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.Text}>
        Text
      </Button>
      <h1 className="section-label">Dropdown Buttons</h1>
      <DropdownButton buttonSize={Button.Sizes.Large} buttonType={Button.Types.Primary}>
        Dropdown Button
      </DropdownButton>
      <DropdownButton buttonSize={Button.Sizes.Large} buttonType={Button.Types.Secondary}>
        Dropdown Button
      </DropdownButton>
      <DropdownButton buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Primary}>
        Dropdown Button
      </DropdownButton>
      <DropdownButton buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Secondary}>
        Dropdown Button
      </DropdownButton>
    </div>
  ));

/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {editIcon} from '@workday/canvas-system-icons-web';

import {Button, IconButton} from './index'; // tslint:disable-line:import-name
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
      <Button buttonType={Button.Types.Highlight}>Highlight</Button>
      <Button buttonType={Button.Types.OutlineBlue}>Outline Blue</Button>
      <Button buttonType={Button.Types.OutlineDark}>Outline Dark</Button>
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
        <Button buttonType={Button.Types.OutlineWhite}>Outline White</Button>
      </div>
      <Button buttonType={Button.Types.Text}>Text</Button>
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
        <Button buttonType={Button.Types.TextDark}>Text Dark</Button>
      </div>
    </div>
  ));

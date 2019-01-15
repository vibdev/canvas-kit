/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProvider} from '@workday/canvas-kit-react-core';
import {ThemeProvider} from 'emotion-theming';

import Avatar from './index'; // tslint:disable-line:import-name
import README from './README.md';

// Page.js
import styled from 'react-emotion';

const Headline = styled.h1`
  color: ${props => props.theme.color};
  font-family: sans-serif;
`;

// App.js
const theme = storiesOf('Canvas Kit/Avatar', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <ThemeProvider theme={{color: 'red'}}>
        <Headline>I'm red!</Headline>
      </ThemeProvider>
      <h1 className="section-label">Avatar</h1>
      <ThemeProvider theme={{backgroundColor: 'red'}}>
        <Avatar />
        <Avatar size={Avatar.Size.l} />
        <Avatar size={48} />
        <Avatar themeColor={Avatar.ThemeColor.Dark} />
        <Avatar size={Avatar.Size.l} themeColor={Avatar.ThemeColor.Dark} />
        <Avatar size={48} themeColor={Avatar.ThemeColor.Dark} />
        <Avatar
          size={48}
          url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png"
        />
        <Avatar
          onClick={() => {
            window.alert('Avatar Clicked');
          }}
          size={Avatar.Size.l}
        />
        <Avatar
          onClick={() => {
            window.alert('Avatar Clicked');
          }}
          size={Avatar.Size.l}
          themeColor={Avatar.ThemeColor.Dark}
        />
      </ThemeProvider>
    </div>
  ));

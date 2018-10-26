/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Avatar from './index'; // tslint:disable-line:import-name
import README from './README.md';

storiesOf('Canvas Kit/Avatar', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Avatar</h1>
      <Avatar />
      <Avatar size={Avatar.Size.l} />
      <Avatar size={48} />
      <Avatar theme={Avatar.Theme.Dark} />
      <Avatar size={Avatar.Size.l} theme={Avatar.Theme.Dark} />
      <Avatar size={48} theme={Avatar.Theme.Dark} />
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
        theme={Avatar.Theme.Dark}
      />
    </div>
  ));

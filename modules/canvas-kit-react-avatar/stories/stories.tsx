/// <reference path="../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator} from '../../../utils/storybook';

import Avatar from '..';
import README from '../README.md';

const IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png';

storiesOf('Avatar', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Light Avatar', () => (
    <div className="story">
      <h1 className="section-label">Light Avatar</h1>
      <h3>Extra-Extra Large</h3>
      <Avatar size={Avatar.Size.xxl} />
      <h3>Extra Large</h3>
      <Avatar size={Avatar.Size.xl} />
      <h3>Large</h3>
      <Avatar size={Avatar.Size.l} />
      <h3>Medium</h3>
      <Avatar size={Avatar.Size.m} />
      <h3>Small</h3>
      <Avatar size={Avatar.Size.s} />
      <h3>Extra Small</h3>
      <Avatar size={Avatar.Size.xs} />
    </div>
  ))
  .add('Dark Avatar', () => (
    <div className="story">
      <h1 className="section-label">Dark Avatar</h1>
      <h3>Extra-Extra Large</h3>
      <Avatar size={Avatar.Size.xxl} themeColor={Avatar.ThemeColor.Dark} />
      <h3>Extra Large</h3>
      <Avatar size={Avatar.Size.xl} themeColor={Avatar.ThemeColor.Dark} />
      <h3>Large</h3>
      <Avatar size={Avatar.Size.l} themeColor={Avatar.ThemeColor.Dark} />
      <h3>Medium</h3>
      <Avatar size={Avatar.Size.m} themeColor={Avatar.ThemeColor.Dark} />
      <h3>Small</h3>
      <Avatar size={Avatar.Size.s} themeColor={Avatar.ThemeColor.Dark} />
      <h3>Extra Small</h3>
      <Avatar size={Avatar.Size.xs} themeColor={Avatar.ThemeColor.Dark} />
    </div>
  ))
  .add('Image Avatar', () => (
    <div className="story">
      <h1 className="section-label">Image Avatar</h1>
      <h3>Extra-Extra Large</h3>
      <Avatar size={Avatar.Size.xxl} url={IMAGE_URL} />
      <h3>Extra Large</h3>
      <Avatar size={Avatar.Size.xl} url={IMAGE_URL} />
      <h3>Large</h3>
      <Avatar size={Avatar.Size.l} url={IMAGE_URL} />
      <h3>Medium</h3>
      <Avatar size={Avatar.Size.m} url={IMAGE_URL} />
      <h3>Small</h3>
      <Avatar size={Avatar.Size.s} url={IMAGE_URL} />
      <h3>Extra Small</h3>
      <Avatar size={Avatar.Size.xs} url={IMAGE_URL} />
    </div>
  ));

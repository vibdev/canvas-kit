/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {SmallHeader, LargeHeader, ProductHeader} from './index'; // tslint:disable-line:import-name
import canvas from '@workday/canvas-kit-react-core';

import README from './README.md';

storiesOf('Canvas Kit/Header', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Header</h1>
      <h2>Small Header</h2>
      <SmallHeader title="Primary" />
      <SmallHeader title="Secondary" mode="secondary" bgColor={canvas.colors.gradients.blueberry} />
      <br />
      <h2>Product Header</h2>
      <ProductHeader />
      <br />
      <h2>Large Header</h2>
      <LargeHeader title="Primary" mode="primary" />
      <LargeHeader title="Secondary" mode="secondary" bgColor={canvas.colors.gradients.blueberry} />
    </div>
  ));

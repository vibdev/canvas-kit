/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Button, ButtonTypes} from '../../../button/react/index';
import {FloatingActionToolbar} from '../index';
import README from '../README.md';

storiesOf('Floating Action Toolbar', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <FloatingActionToolbar>
        <Button buttonType={ButtonTypes.Primary}>Button</Button>
        <Button>Button</Button>
      </FloatingActionToolbar>
    </div>
  ))
  .add('With Three Buttons', () => (
    <div className="story">
      <FloatingActionToolbar>
        <Button buttonType={ButtonTypes.Primary}>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </FloatingActionToolbar>
    </div>
  ))
  .add('With Two Buttons Fixed', () => (
    <div className="story">
      <FloatingActionToolbar fixed={true}>
        <Button buttonType={ButtonTypes.Primary}>Button</Button>
        <Button>Button</Button>
      </FloatingActionToolbar>
    </div>
  ))
  .add('With Three Buttons Fixed', () => (
    <div className="story">
      <FloatingActionToolbar fixed={true}>
        <Button buttonType={ButtonTypes.Primary}>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </FloatingActionToolbar>
    </div>
  ));

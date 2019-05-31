/// <reference path="../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {Button, ButtonTypes} from '@workday/canvas-kit-react-button';

import {FloatingActionToolbar} from '..';
import README from '../README.md';

storiesOf('Floating Action Toolbar', module)
  .addDecorator(withReadme(README))
  .add('With Two Buttons', () => (
    <div className="story">
      <h1 className="section-label">Floating Action Toolbar With Two Buttons</h1>
      <FloatingActionToolbar>
        <Button buttonType={ButtonTypes.Primary}>Button</Button>
        <Button>Button</Button>
      </FloatingActionToolbar>
    </div>
  ))
  .add('With Three Buttons', () => (
    <div className="story">
      <h1 className="section-label">Floating Action Toolbar With Three Buttons</h1>
      <FloatingActionToolbar>
        <Button buttonType={ButtonTypes.Primary}>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </FloatingActionToolbar>
    </div>
  ))
  .add('With Two Buttons Fixed', () => (
    <div className="story">
      <h1 className="section-label">Floating Action Toolbar With Two Buttons Fixed</h1>
      <FloatingActionToolbar fixed={true}>
        <Button buttonType={ButtonTypes.Primary}>Button</Button>
        <Button>Button</Button>
      </FloatingActionToolbar>
    </div>
  ))
  .add('With Three Buttons Fixed', () => (
    <div className="story">
      <h1 className="section-label">Floating Action Toolbar With Three Buttons Fixed</h1>
      <FloatingActionToolbar fixed={true}>
        <Button buttonType={ButtonTypes.Primary}>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </FloatingActionToolbar>
    </div>
  ));

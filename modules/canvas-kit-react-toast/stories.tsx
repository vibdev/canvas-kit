/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {checkIcon, exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import withReadme from 'storybook-readme/with-readme';

import Toast from './index'; // tslint:disable-line:import-name
import README from './README.md';

class ToastWrapper extends React.Component {
  public render() {
    return (
      <section>
        <Toast iconColor={'green'} toastIcon={checkIcon}>
          Your workbook was successfully processed.
        </Toast>
        <Toast handleClose={() => console.warn('hi')}>
          You data has been successfully updated.
        </Toast>
        <Toast
          actionLinkText={'View Error'}
          handleActionLink={() => console.warn('viee')}
          toastIcon={exclamationCircleIcon}
          iconColor={'red'}
        >
          There was an error while your data was being processed.
        </Toast>
      </section>
    );
  }
}

storiesOf('Canvas Kit/Toast', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Toast</h1>
      <ToastWrapper />
    </div>
  ));

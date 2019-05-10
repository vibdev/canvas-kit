/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import withReadme from 'storybook-readme/with-readme';
import Toast from './index'; // tslint:disable-line:import-name
import README from './README.md';

class ToastWrapper extends React.Component {
  public render() {
    return (
      <section>
        <Toast iconColor={'greenApple400'}>
          <div>Your workbook was successfully processed.</div>
        </Toast>
        <Toast icon={null} onClose={() => console.warn('handle close was clicked')}>
          You data has been successfully updated.
        </Toast>
        <Toast
          actionText={'View Error'}
          onClose={() => console.warn('test')}
          onActionClick={() => console.warn('link was clicked')}
          icon={exclamationCircleIcon}
          iconColor={'cinnamon500'}
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

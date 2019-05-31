/// <reference path="../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {colors} from '@workday/canvas-kit-react-core';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import withReadme from 'storybook-readme/with-readme';
import Toast from '..';
import README from '../README.md';

const toastData = {
  success: {
    icon: undefined,
    iconColor: undefined,
    messages: [
      'Your workbook was successfully processed.',
      'Your data has been successfully updated.',
      'Your data has been sucessfully downloaded.',
      'View Data',
    ],
  },
  error: {
    icon: exclamationCircleIcon,
    iconColor: colors.cinnamon500,
    messages: [
      'There was an error with your workbook.',
      'You are currently offline.',
      'There was an error while your data was being processed.',
      'View Error',
    ],
  },
};

class ToastWrapper extends React.Component<{state?: string}> {
  public render() {
    let toastMeta;

    switch (this.props.state) {
      case 'Success':
      default:
        toastMeta = toastData.success;
        break;
      case 'Error':
        toastMeta = toastData.error;
        break;
    }

    const {messages} = toastMeta;

    return (
      <section>
        <Toast icon={toastMeta.icon} iconColor={toastMeta.iconColor}>
          {messages[0]}
        </Toast>
        <Toast icon={toastMeta.icon} iconColor={toastMeta.iconColor}>
          {messages[1]}
        </Toast>
        <Toast
          actionText={messages[3]}
          onClose={() => console.warn('test')}
          onActionClick={() => console.warn('link was clicked')}
          icon={toastMeta.icon}
          iconColor={toastMeta.iconColor}
        >
          {messages[2]}
        </Toast>
      </section>
    );
  }
}

storiesOf('Toast', module)
  .addDecorator(withReadme(README))
  .add('Successful Toast', () => (
    <div className="story">
      <h1 className="section-label">Successful Toast</h1>
      <ToastWrapper state={'Success'} />
    </div>
  ))
  .add('Error Toast', () => (
    <div className="story">
      <h1 className="section-label">Error Toast</h1>
      <ToastWrapper state={'Error'} />
    </div>
  ));

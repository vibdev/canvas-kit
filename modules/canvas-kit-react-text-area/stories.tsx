/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, SectionDecorator} from '@workday/canvas-kit-react-common';

import {TextArea, TextAreaProps} from './index'; // tslint:disable-line:import-name
import README from './README.md';

export class Input extends React.Component<TextAreaProps, {}> {
  static defaultProps = {
    type: 'text',
  };

  state = {
    value: this.props.value,
  };

  onChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
    this.setState({value: e.target.value});
  };

  public render() {
    const {value, ...props} = this.props;
    return <TextArea {...props} value={this.state.value} onChange={this.onChange} />;
  }
}

export const TextAreas = {
  Plain: <TextArea />,
  Placeholder: <TextArea placeholder="Placeholder" />,
  Disabled: <TextArea disabled={true} />,
  DisabledPlaceholder: <TextArea placeholder="Placeholder" disabled={true} />,
  Alert: <TextArea error={TextArea.ErrorType.Alert} defaultValue="Alert" />,
  Error: <TextArea error={TextArea.ErrorType.Error} defaultValue="Error" />,
  Grow: <TextArea placeholder="Placeholder" grow={true} />,
  GrowError: <TextArea placeholder="Placeholder" grow={true} error={TextArea.ErrorType.Error} />,
};

storiesOf('Canvas Kit/Text Area', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(SectionDecorator('Text Area'))
  .addDecorator(withReadme(README))
  .add('Plain', () => TextAreas.Plain)
  .add('With placeholder', () => TextAreas.Placeholder)
  .add('Disabled', () => TextAreas.Disabled)
  .add('Disabled with placeholder', () => TextAreas.DisabledPlaceholder)
  .add('Alert', () => TextAreas.Alert)
  .add('Error', () => TextAreas.Error)
  .add('Grow', () => TextAreas.Grow)
  .add('Grow - Error', () => TextAreas.GrowError);

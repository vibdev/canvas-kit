/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, SectionDecorator} from '@workday/canvas-kit-react-common';

import {TextArea, TextAreaProps} from './index'; // tslint:disable-line:import-name
import README from './README.md';

export class TextAreaWrapper extends React.Component<Partial<TextAreaProps>, {}> {
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
  Plain: <TextAreaWrapper id="textarea-plain" />,
  Placeholder: <TextAreaWrapper placeholder="Placeholder" id="textarea-placeholder" />,
  XResize: (
    <TextAreaWrapper
      placeholder="Resizable Horizontally"
      id="textarea-xresize"
      resize={TextArea.ResizeDirection.Horizontal}
    />
  ),
  YResize: (
    <TextAreaWrapper
      placeholder="Resizable Vertically"
      id="textarea-yresize"
      resize={TextArea.ResizeDirection.Vertical}
    />
  ),
  NoResize: (
    <TextAreaWrapper
      placeholder="Not Resizable"
      id="textarea-no-resize"
      resize={TextArea.ResizeDirection.None}
    />
  ),
  XYResize: (
    <TextAreaWrapper
      placeholder="Resizable"
      id="textarea-resize"
      resize={TextArea.ResizeDirection.Both}
    />
  ),
  Disabled: <TextAreaWrapper disabled={true} id="textarea-disabled" />,
  DisabledPlaceholder: (
    <TextAreaWrapper placeholder="Placeholder" id="textarea-disabled-placeholder" disabled={true} />
  ),
  Alert: <TextAreaWrapper error={TextArea.ErrorType.Alert} id="textarea-alert" value="Alert" />,
  Error: <TextAreaWrapper error={TextArea.ErrorType.Error} id="textarea-error" value="Error" />,
  Grow: <TextAreaWrapper placeholder="Placeholder" id="textarea-grow" grow={true} />,
};

storiesOf('Canvas Kit/Text Area', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(SectionDecorator('Text Area'))
  .addDecorator(withReadme(README))
  .add('Plain', () => TextAreas.Plain)
  .add('With placeholder', () => TextAreas.Placeholder)
  .add('Disabled', () => TextAreas.Disabled)
  .add('Disabled with placeholder', () => TextAreas.DisabledPlaceholder)
  .add('Error', () => TextAreas.Error)
  .add('Grow', () => TextAreas.Grow)
  .add('Resizable Horizontally', () => TextAreas.XResize)
  .add('Resizable Vertically', () => TextAreas.YResize)
  .add('Not Resizable', () => TextAreas.NoResize)
  .add('Resizable', () => TextAreas.XYResize);

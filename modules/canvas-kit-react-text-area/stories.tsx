/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator, SectionDecorator} from '@workday/canvas-kit-react-common';

import {TextArea, TextAreaProps} from './index'; // tslint:disable-line:import-name
import {TextAreaResize} from './lib/shared/types';
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
  XResize: <TextArea placeholder="Resizable Horizontally" resize={TextAreaResize.Horizontal} />,
  YResize: <TextArea placeholder="Resizable Vertically" resize={TextAreaResize.Vertical} />,
  NoResize: <TextArea placeholder="Not Resizable" resize={TextAreaResize.None} />,
  XYResize: <TextArea placeholder="Resizable" resize={TextAreaResize.Both} />,
  Disabled: <TextArea disabled={true} />,
  DisabledPlaceholder: <TextArea placeholder="Placeholder" disabled={true} />,
  Grow: <TextArea placeholder="Placeholder" grow={true} />,
};

storiesOf('Canvas Kit/Text Area', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(SectionDecorator('Text Area'))
  .addDecorator(withReadme(README))
  .add('Plain', () => TextAreas.Plain)
  .add('With placeholder', () => TextAreas.Placeholder)
  .add('Disabled', () => TextAreas.Disabled)
  .add('Disabled with placeholder', () => TextAreas.DisabledPlaceholder)
  .add('Grow', () => TextAreas.Grow)
  .add('Resizable Horizontally', () => TextAreas.XResize)
  .add('Resizable Vertically', () => TextAreas.YResize)
  .add('Not Resizable', () => TextAreas.NoResize)
  .add('Resizable', () => TextAreas.XYResize);

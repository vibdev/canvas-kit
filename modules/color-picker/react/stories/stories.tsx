/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator} from '../../../../utils/storybook';

import ColorInput, {ColorPreview} from '..';
import README from '../README.md';

interface CustomColorInputWrapperState {
  color: string;
  validColor: string;
}

export default class CustomColorInputWrapper extends React.Component<
  {checkbox: boolean; growing?: boolean},
  CustomColorInputWrapperState
> {
  state = {
    color: '',
    validColor: '',
  };

  public render() {
    return (
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <ColorInput
          showCheck={this.props.checkbox}
          onChange={this.onChange}
          value={this.state.color}
          onValidColorChange={this.validColorChange}
          disabled={false}
          grow={this.props.growing}
        />
      </div>
    );
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      color: e.currentTarget.value,
    });
  };

  private validColorChange = (colorHex: string) => {
    this.setState({
      validColor: colorHex,
    });
  };
}

storiesOf('Color Picker/Color Input', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Default Color Input</h1>
      <CustomColorInputWrapper checkbox={true} />
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <h1 className="section-label">Color Input Disabled</h1>
      <ColorInput value={'EEEEEE'} showCheck={true} disabled={true} grow={false} />
    </div>
  ))
  .add('Without Checkbox', () => (
    <div className="story">
      <h1 className="section-label">Color Input Without Checkbox</h1>
      <CustomColorInputWrapper checkbox={false} />
    </div>
  ))
  .add('Growing', () => (
    <div className="story">
      <h1 className="section-label">Color Input Growing</h1>
      <ColorInput grow={true} />
    </div>
  ));

storiesOf('Color Picker', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Color Preview', () => (
    <div className="story">
      <h1 className="section-label">Color Preview</h1>
      <ColorPreview value="#00FFCC" />
    </div>
  ));

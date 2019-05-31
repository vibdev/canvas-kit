/// <reference path="../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator} from '../../../utils/storybook';

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

storiesOf('Color Picker', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Color Input', () => (
    <div className="story">
      <h1 className="section-label">Color Inputs</h1>
      <h3>Standard</h3>
      <CustomColorInputWrapper checkbox={true} />
      <h3>Without Checkbox</h3>
      <CustomColorInputWrapper checkbox={false} />
      <h3>Disabled</h3>
      <ColorInput value={'EEEEEE'} showCheck={true} disabled={true} grow={false} />
      <h3>Growing</h3>
      <CustomColorInputWrapper checkbox={true} growing={true} />
    </div>
  ))
  .add('Color Preview', () => (
    <div className="story">
      <h1 className="section-label">Color Preview</h1>
      <h3>Standard</h3>
      <ColorPreview value="#00FFCC" />
    </div>
  ));

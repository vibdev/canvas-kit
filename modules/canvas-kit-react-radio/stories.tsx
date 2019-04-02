/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator} from '@workday/canvas-kit-react-common';

import Radio, {RadioGroup, RadioGroupProps} from './index'; // tslint:disable-line:import-name
import README from './README.md';

// Wrapper to add state mgmt to RadioGroups
interface RadioGroupWrapperState {
  selectedValue: string | number;
}

export class RadioGroupWrapper extends React.Component<{}, RadioGroupWrapperState> {
  state = {
    selectedValue: '',
  };

  public render() {
    const child = this.props.children as React.ReactElement<RadioGroupProps>;
    return React.cloneElement(child, {
      value: this.state.selectedValue === '' ? child.props.value : this.state.selectedValue,
      onChange: this.handleToggle,
    });
  }

  public handleToggle = (selectedValue: string | number) => {
    this.setState({selectedValue});
  };
}

storiesOf('Canvas Kit/Radio', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Radio</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <RadioGroupWrapper>
          <RadioGroup name="contact">
            <Radio id="1" value="email" label="E-mail" />
            <Radio id="2" value="phone" label="Phone" />
            <Radio id="3" value="fax" label="Fax (disabled)" disabled={true} />
            <Radio id="4" value="mail" label="Mail" />
          </RadioGroup>
        </RadioGroupWrapper>
      </div>
    </div>
  ));

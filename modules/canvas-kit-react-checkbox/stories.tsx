/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {InputProviderDecorator} from '@workday/canvas-kit-react-common';

import Checkbox from './index'; // tslint:disable-line:import-name
import README from './README.md';

export class CheckboxWrapper extends React.Component<{disabled?: boolean}> {
  state = {
    checked: false,
  };

  onChange = () => {
    this.setState(prevState => ({
      checked: !this.state.checked,
    }));
  };

  renderChildren = (child: React.ReactNode) => {
    if (React.isValidElement<any>(child)) {
      const {children, ...props} = this.props;
      const childProps = {
        ...props,
        ...child.props,
        checked: this.state.checked,
        onChange: this.onChange,
      };
      return React.cloneElement(child, childProps);
    }
    return child;
  };

  render() {
    return React.Children.map(this.props.children, this.renderChildren);
  }
}

storiesOf('Canvas Kit/Checkbox', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Checkbox</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <CheckboxWrapper>
          <Checkbox id="1" label="Checkbox option" />
        </CheckboxWrapper>
      </div>
    </div>
  ))
  .add('Disabled', () => (
    <div className="story">
      <h1 className="section-label">Checkbox</h1>
      <div style={{textAlign: 'left', marginBottom: '24px'}}>
        <CheckboxWrapper>
          <Checkbox disabled={true} id="1" label="Checkbox option" />
        </CheckboxWrapper>
      </div>
    </div>
  ));

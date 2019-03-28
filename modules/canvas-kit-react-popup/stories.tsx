/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Popper from '@material-ui/core/Popper';

import {Button} from '@workday/canvas-kit-react-button';
import {Popover} from './index'; // tslint:disable-line:import-name
import README from './README.md';

interface PopoverWrapperState {
  open: boolean;
  anchorEl: HTMLElement | null;
}

class PopoverWrapper extends React.Component<{}, PopoverWrapperState> {
  state = {
    open: false,
    anchorEl: null,
  };
  public render() {
    const {anchorEl, open} = this.state;
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button onClick={this.handleClick}>Open Popover</Button>
        <Popper placement={'bottom'} open={open} anchorEl={anchorEl}>
          <Popover
            width={300}
            heading={'Popover Title'}
            padding={Popover.padding.s}
            handleClose={this.handleClose}
          >
            <div style={{marginBottom: '24px'}}>
              This is the content of a popover. You can add whatever you'd like in here.
            </div>

            <Button onClick={this.handleSubmit} buttonType={Button.Types.Primary}>
              Submit
            </Button>
          </Popover>
        </Popper>
      </div>
    );
  }

  private handleClose = () => {
    this.setState({
      open: false,
    });
  };

  private handleSubmit = () => {
    this.setState({
      open: false,
    });
  };

  private handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const {currentTarget} = e;
    this.setState({
      anchorEl: currentTarget,
      open: !this.state.open,
    });
  };
}

storiesOf('Canvas Kit/Popup', module)
  .addDecorator(withReadme(README))
  .add('Popover', () => (
    <div className="story">
      <h1 className="section-label">Popover</h1>
      <PopoverWrapper />
    </div>
  ));

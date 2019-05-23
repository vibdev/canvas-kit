/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {beta_Button as Button} from '@workday/canvas-kit-react-button';
import {Popup} from '@workday/canvas-kit-react-popup';
import {Popper} from './index';
import README from './README.md';

interface PopperPopupState {
  open: boolean;
}

class PopperPopup extends React.Component<{}, PopperPopupState> {
  private buttonRef: React.RefObject<HTMLButtonElement> = React.createRef();

  public state: PopperPopupState = {
    open: false,
  };

  public render() {
    const {open} = this.state;

    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button
          buttonRef={this.buttonRef}
          buttonType={Button.Types.Delete}
          onClick={this.handleClick}
        >
          Toggle Popup
        </Button>
        <Popper placement={'bottom'} open={open} anchorElement={this.buttonRef.current!}>
          <Popup width={400} heading={'Popper Example'} handleClose={this.handleClose}>
            <div>Welcome to your popup positioned by Popper!</div>
          </Popup>
        </Popper>
      </div>
    );
  }

  private handleClose = () => {
    this.setState({open: false});
  };

  private handleClick = () => {
    this.setState({open: !this.state.open});
  };
}

storiesOf('Common', module)
  .addDecorator(withReadme(README))
  .add('Popper', () => (
    <div className="story">
      <h1 className="section-label">Popper</h1>
      <PopperPopup />
    </div>
  ));
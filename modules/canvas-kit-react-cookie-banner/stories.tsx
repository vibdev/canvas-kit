/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {action} from '@storybook/addon-actions';
import styled from 'react-emotion';
import {Button} from '@workday/canvas-kit-react-button';

import CookieBanner from './index'; // tslint:disable-line:import-name
import README from './README.md';

interface State {
  acceptedCookies: boolean;
}

class BannerContainer extends React.Component<{}, State> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      acceptedCookies: false,
    };
  }

  private onAccept = (): void => {
    action('accept-cookies');
    this.setState({
      acceptedCookies: true,
    });
  };

  private reset = (): void => {
    this.setState({
      acceptedCookies: false,
    });
  };

  public render() {
    const Container = styled('div')({
      backgroundColor: '#eff0f2',
      padding: 24,
      '& > *': {
        marginBottom: 24,
      },
    });
    return (
      <Container>
        <Button onClick={this.reset}>Reset Banner</Button>
        <CookieBanner onAccept={this.onAccept} isClosed={this.state.acceptedCookies} />
      </Container>
    );
  }
}

storiesOf('Canvas Kit/Cookie Banner', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Cookie Banner</h1>
      <BannerContainer />
    </div>
  ));

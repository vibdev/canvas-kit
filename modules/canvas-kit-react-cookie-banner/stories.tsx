/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {action} from '@storybook/addon-actions';
import styled from 'react-emotion';
import {Button} from '@workday/canvas-kit-react-button';

import CookieBanner from './index'; // tslint:disable-line:import-name
import README from './README.md';

interface Props {
  bannerProps?: any;
}

interface State {
  acceptedCookies: boolean;
}

class BannerContainer extends React.Component<Props, State> {
  public constructor(props: Props) {
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

    const {bannerProps} = this.props;

    return (
      <Container>
        <Button onClick={this.reset}>Reset Banner</Button>
        <CookieBanner
          onAccept={this.onAccept}
          isClosed={this.state.acceptedCookies}
          {...bannerProps}
        />
      </Container>
    );
  }
}

storiesOf('Canvas Kit/Cookie Banner', module)
  .addDecorator(withReadme(README))
  .add('Full', () => (
    <div className="story">
      <h1 className="section-label">Cookie Banner</h1>
      <BannerContainer
        bannerProps={{
          onClickSettings: () => {
            action('click-settings');
          },
        }}
      />
    </div>
  ))
  .add('No Settings', () => (
    <div className="story">
      <h1 className="section-label">Cookie Banner with no settings</h1>
      <BannerContainer />
    </div>
  ));

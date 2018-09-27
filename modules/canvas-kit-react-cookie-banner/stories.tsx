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

  private onAccept = (e: React.MouseEvent<HTMLButtonElement>): void => {
    action('accept-cookies')(e);
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
    const Container = styled('div')();

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
          onClickSettings: action('click-settings'),
          onClickPrivacyPolicy: action('click-privacy-policy'),
        }}
      />
    </div>
  ))
  .add('Privacy Policy URL', () => (
    <div className="story">
      <h1 className="section-label">Cookie Banner with privacy policy URL</h1>
      <BannerContainer
        bannerProps={{
          onClickSettings: action('click-settings'),
          onClickPrivacyPolicy: 'https://www.workday.com/en-us/privacy.html',
        }}
      />
    </div>
  ))
  .add('Simple', () => (
    <div className="story">
      <h1 className="section-label">Cookie Banner with no privacy policy or settings</h1>
      <BannerContainer />
    </div>
  ));

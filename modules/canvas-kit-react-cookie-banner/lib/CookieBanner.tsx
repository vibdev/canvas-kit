import * as React from 'react';
import styled from 'react-emotion';
import {commonColors, type, spacing} from '@workday/canvas-kit-react-core';
import Button from '@workday/canvas-kit-react-button';

const Banner = styled('div')(type.body, {
  backgroundColor: commonColors.background,
  display: 'flex',
  padding: spacing.m,
  alignItems: 'center',
  justifyContent: 'center',
});

const BannerItem = styled('div')({
  paddingLeft: spacing.s,
  paddingRight: spacing.s,
});

const CookieSettingsLink = styled('a')({
  ...type.link,
  fontWeight: 500,
  whiteSpace: 'nowrap',
});

const Link = styled('a')(type.link);

interface Props {
  onAccept?: ((e: React.MouseEvent<HTMLButtonElement>) => void);
}

interface State {
  acceptedCookies: boolean;
}

export default class CookieBanner extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      acceptedCookies: false,
    };
  }

  private onAccept = (event: React.MouseEvent<HTMLButtonElement>): void => {
    this.setState({
      acceptedCookies: true,
    });

    if (this.props.onAccept) {
      this.props.onAccept(event);
    }
  };

  public render() {
    if (this.state.acceptedCookies) {
      return null;
    }

    return (
      <Banner>
        <BannerItem>
          We use cookies to ensure that we give you the best experience on our website. If you
          continue without changing your settings, we’ll assume that you are willing to receive
          cookies. You can read more in our <Link href="#">Privacy Policy</Link>.
        </BannerItem>
        <BannerItem>
          <CookieSettingsLink href="#">Cookie Settings</CookieSettingsLink>
        </BannerItem>
        <BannerItem>
          <Button onClick={this.onAccept}>Continue</Button>
        </BannerItem>
      </Banner>
    );
  }
}

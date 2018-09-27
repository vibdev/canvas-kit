import * as React from 'react';
import styled from 'react-emotion';
import {commonColors, type, spacing} from '@workday/canvas-kit-react-core';
import Button from '@workday/canvas-kit-react-button';

interface BannerProps {
  isClosed?: boolean;
}

export interface CookieBannerProps extends BannerProps {
  onAccept: ((e: React.MouseEvent<HTMLButtonElement>) => void);
  onClickSettings?: ((e: React.MouseEvent<HTMLButtonElement>) => void);
  onClickPrivacyPolicy?: string | ((e: React.MouseEvent<HTMLAnchorElement>) => void);
}

interface State {
  acceptedCookies: boolean;
}

const Banner = styled('div')(
  type.body,
  {
    backgroundColor: commonColors.background,
    display: 'flex',
    padding: spacing.m,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ({isClosed}: BannerProps) => (isClosed ? {visibility: 'hidden'} : null)
);

const BannerItem = styled('div')({
  paddingLeft: spacing.s,
  paddingRight: spacing.s,
});

const CookieSettings = styled('button')(type.body, type.link, {
  border: 0,
  fontWeight: 500,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  padding: 0,
});

const Link = styled('a')(type.link, {
  cursor: 'pointer',
});

export default class CookieBanner extends React.Component<CookieBannerProps, State> {
  public render() {
    const {isClosed, onAccept, onClickSettings, onClickPrivacyPolicy} = this.props;

    let PrivacyPolicy = null;

    if (onClickPrivacyPolicy) {
      const linkProps =
        typeof onClickPrivacyPolicy === 'string'
          ? {href: onClickPrivacyPolicy, target: '__blank'}
          : {onClick: onClickPrivacyPolicy};

      PrivacyPolicy = (
        <React.Fragment>
          You can read more in our <Link {...linkProps}>Privacy Policy</Link>.
        </React.Fragment>
      );
    }

    return (
      <Banner isClosed={isClosed}>
        <BannerItem>
          We use cookies to ensure that we give you the best experience on our website. If you
          continue without changing your settings, we’ll assume that you are willing to receive
          cookies. {PrivacyPolicy}
        </BannerItem>
        {onClickSettings && (
          <BannerItem>
            <CookieSettings onClick={onClickSettings}>Cookie Settings</CookieSettings>
          </BannerItem>
        )}
        <BannerItem>
          <Button onClick={onAccept}>Continue</Button>
        </BannerItem>
      </Banner>
    );
  }
}

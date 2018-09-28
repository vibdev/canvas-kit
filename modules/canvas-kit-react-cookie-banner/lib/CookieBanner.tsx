import * as React from 'react';
import styled, {css} from 'react-emotion';
import {colors, commonColors, type, spacing} from '@workday/canvas-kit-react-core';
import Button from '@workday/canvas-kit-react-button';

interface BannerProps {
  /**
   * If the banner is currently closed
   */
  isClosed?: boolean;
}

export interface CookieBannerProps extends BannerProps {
  /**
   * Callback for Continue button, should set isClosed to true
   */
  onAccept: ((e: React.MouseEvent<HTMLButtonElement>) => void);

  /**
   * Callback for Cookie Settings button
   */
  onClickSettings?: ((e: React.MouseEvent<HTMLButtonElement>) => void);

  /**
   * Custom cookie notice text or element to display
   */
  notice?: string | React.ReactNode;
}

const Banner = styled('div')(
  type.body2,
  {
    backgroundColor: commonColors.background,
    borderTop: `1px solid ${colors.soap400}`,
    display: 'flex',
    padding: spacing.m,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: `calc(100% - ${spacing.m} - ${spacing.m})`,
    '@media (max-width: 450px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
      textAlign: 'center',
      padding: `${spacing.s} 0`,
    },
  },
  ({isClosed}: BannerProps) => (isClosed ? {visibility: 'hidden'} : null)
);

const BannerItem = styled('div')({
  marginLeft: spacing.s,
  marginRight: spacing.s,
  '@media (max-width: 450px)': {
    '&:not(:first-child)': {
      marginTop: spacing.s,
    },
  },
});

const CookieSettings = styled('button')(type.body2, type.link, {
  border: 0,
  fontWeight: 500,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  padding: 0,
});

const GrowButton = css({
  width: '100%',
  maxWidth: 'auto',
});

export default class CookieBanner extends React.Component<CookieBannerProps> {
  public static DefaultNotice =
    'We use cookies to understand what visitors find useful on the site. Any data we collect is anonymous and only used to enhance the user experience. If you are ok with us using cookies for this purpose, please accept this notice.';

  public render(): React.ReactNode {
    const {isClosed, onAccept, onClickSettings, notice} = this.props;

    return (
      <Banner isClosed={isClosed}>
        <BannerItem>{notice || CookieBanner.DefaultNotice}</BannerItem>
        {onClickSettings && (
          <BannerItem>
            <CookieSettings onClick={onClickSettings}>Cookie Settings</CookieSettings>
          </BannerItem>
        )}
        <BannerItem>
          <Button onClick={onAccept} buttonType={Button.Types.Primary} className={GrowButton}>
            Continue
          </Button>
        </BannerItem>
      </Banner>
    );
  }
}

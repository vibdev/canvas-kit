import * as React from 'react';
import styled from 'react-emotion';
import {colors} from '@workday/canvas-kit-react-core';
import {focusRing} from '@workday/canvas-kit-react-common';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {userIcon} from '@workday/canvas-system-icons-web';

export enum AvatarTheme {
  Light,
  Dark,
}

export enum AvatarSize {
  xs = '16px',
  s = '24px',
  m = '32px',
  l = '40px',
  xl = '64px',
  xxl = '120px',
}

export interface AvatarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * An AvatarTheme enum indicating which theme to use for the default state (Light vs. Dark)
   */
  theme: AvatarTheme;
  /**
   * An AvatarSize enum or number value indicating the size of the avatar
   */
  size: AvatarSize | number;
  /**
   * The url of the users avatar photo
   */
  url?: string;
  /**
   * An event handler function that gets called when the avatar is clicked
   */
  onClick?: (e: React.SyntheticEvent) => void;
  /**
   * Ref of button that the styled component renders.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
}

const Container = styled('button')<AvatarProps>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 0,
    borderRadius: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  ({theme, size, url, onClick}) => ({
    height: size,
    width: size,
    cursor: onClick ? 'pointer' : 'default',
    backgroundColor: url
      ? undefined
      : theme === AvatarTheme.Dark
        ? colors.blueberry400
        : colors.soap300,
    '&:not([disabled])': {
      '&:focus': {
        outline: 'none',
        ...(theme === AvatarTheme.Dark ? focusRing(2, 2) : focusRing(2)),
      },
    },
  })
);

export default class Avatar extends React.Component<AvatarProps> {
  static Theme = AvatarTheme;
  static Size = AvatarSize;
  static defaultProps = {
    theme: AvatarTheme.Light,
    size: AvatarSize.m,
  };

  render() {
    const {buttonRef, theme, size, url, onClick} = this.props;

    const iconColor = theme === AvatarTheme.Dark ? colors.frenchVanilla100 : colors.licorice400;
    const iconColorHover = theme === AvatarTheme.Dark ? colors.blueberry100 : colors.licorice500;

    let iconSize = size;
    if (typeof iconSize === 'string') {
      iconSize = parseInt(iconSize.replace('px', ''), 10);
    }
    iconSize = iconSize * 0.625;

    return (
      <Container {...this.props} disabled={onClick ? false : true} innerRef={buttonRef}>
        {url ? (
          <img src={url} />
        ) : (
          <SystemIcon
            icon={userIcon}
            color={iconColor}
            colorHover={onClick ? iconColorHover : iconColor}
            size={iconSize}
          />
        )}
      </Container>
    );
  }
}

import * as React from 'react';
import styled from 'react-emotion';
import {colors} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {userIcon} from '@workday/canvas-system-icons-web';

export enum AvatarTheme {
  Light,
  Dark,
}

export enum AvatarSize {
  x = '16px',
  s = '24px',
  m = '32px',
  l = '40px',
  xl = '64px',
  xxl = '120px',
}

export interface AvatarProps {
  theme?: AvatarTheme;
  size?: AvatarSize | number;
}

const Container = styled('div')<AvatarProps>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    boxSizing: 'border-box',
  },
  ({theme, size}) => ({
    height: size,
    width: size,
    backgroundColor: theme === AvatarTheme.Dark ? colors.blueberry400 : colors.soap300,
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
    const {theme, size} = this.props;

    const iconColor = theme === AvatarTheme.Dark ? colors.frenchVanilla100 : colors.licorice400;
    const iconColorHover = theme === AvatarTheme.Dark ? colors.blueberry100 : colors.licorice500;

    let iconSize = size!; // Size will always be defined due to defaultProps
    if (typeof iconSize === 'string') {
      iconSize = parseInt(iconSize.replace('px', ''), 10);
    }
    iconSize = iconSize * 0.625;

    return (
      <Container {...this.props}>
        <SystemIcon icon={userIcon} color={iconColor} colorHover={iconColorHover} size={iconSize} />
      </Container>
    );
  }
}

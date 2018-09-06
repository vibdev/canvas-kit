import * as React from 'react';
import {HeaderTheme, HeaderThemePropType} from '../shared/types';
import {css} from 'emotion';
import {colors} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {userIcon} from '@workday/canvas-system-icons-web';

export type AvatarProps = Partial<HeaderThemePropType>;

export const Avatar: React.SFC<AvatarProps> = props => {
  const avatarSize = '32px';
  const avatarStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: avatarSize,
    width: avatarSize,
    backgroundColor: props.theme === HeaderTheme.white ? colors.blueberry400 : colors.soap400,
    borderRadius: '9999px',
    boxSizing: 'border-box',
    paddingTop: '2px',
  });
  const iconColor =
    props.theme === HeaderTheme.white ? colors.frenchVanilla100 : colors.licorice500;

  // TODO: Soap 300 bg colorrrrr
  return (
    <div className={avatarStyle}>
      <SystemIcon icon={userIcon} color={iconColor} size={20} />
    </div>
  );
};

/**
 * This is a placeholder component until we get the details of an avatar ironed out.
 *
 * @alex.nicholls no need to review unless it's for show/tell
 */
import * as React from 'react';
import {HeaderTheme} from '../shared/types';
import {css} from 'emotion';
import {colors} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {userIcon} from '@workday/canvas-system-icons-web';

export type AvatarProps = {
  themeColor?: HeaderTheme;
};

export const Avatar: React.SFC<AvatarProps> = ({themeColor = HeaderTheme.White}: AvatarProps) => {
  const avatarSize = '32px';
  const avatarStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: avatarSize,
    width: avatarSize,
    backgroundColor: themeColor === HeaderTheme.White ? colors.soap300 : colors.blueberry400,
    borderRadius: '9999px',
    boxSizing: 'border-box',
  });
  const iconColor = themeColor === HeaderTheme.White ? colors.licorice500 : colors.frenchVanilla100;

  return (
    <div className={avatarStyle}>
      <SystemIcon icon={userIcon} color={iconColor} size={20} />
    </div>
  );
};

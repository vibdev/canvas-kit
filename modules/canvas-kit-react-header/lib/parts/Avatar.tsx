/**
 * This is a placeholder component until we get the details of an avatar ironed out.
 *
 * @alex.nicholls no need to review unless it's for show/tell
 */
import * as React from 'react';
import {HeaderTheme, HeaderThemePropType} from '../shared/types';
import {css} from 'emotion';
import {colors} from '@workday/canvas-kit-react-core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {userIcon} from '@workday/canvas-system-icons-web';

export type AvatarProps = Partial<HeaderThemePropType>;

const defaultProps: AvatarProps = {
  theme: HeaderTheme.white,
};

export const Avatar: React.SFC<AvatarProps> = props => {
  const avatarSize = '32px';
  const avatarStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: avatarSize,
    width: avatarSize,
    backgroundColor: props.theme === HeaderTheme.white ? colors.soap300 : colors.blueberry400,
    borderRadius: '9999px',
    boxSizing: 'border-box',
    paddingTop: '2px',
  });
  const iconColor =
    props.theme === HeaderTheme.white ? colors.licorice500 : colors.frenchVanilla100;

  return (
    <div className={avatarStyle}>
      <SystemIcon icon={userIcon} color={iconColor} size={20} />
    </div>
  );
};

Avatar.defaultProps = defaultProps;

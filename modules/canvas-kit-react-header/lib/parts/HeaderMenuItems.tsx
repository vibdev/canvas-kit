import * as React from 'react';
import {css} from 'emotion';
import {spacing} from '@workday/canvas-kit-react-core';
import {verticalCenterStyle} from '@workday/canvas-kit-react-header/lib/shared/styles';

export const HeaderMenuItems: React.SFC = props => {
  const navStyle = css({
    flexGrow: 1,
    justifyContent: 'center',
    height: 'inherit',

    '& ul': {
      ...verticalCenterStyle,
      justifyContent: 'center',
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      height: 'inherit',

      '& li': {
        ...verticalCenterStyle,
        margin: `0 ${spacing.s}`,
        color: 'inherit',
        fontSize: '14px',
        fontWeight: 700,
        height: 'inherit',
      },
      '& li:first-child': {
        marginLeft: 0,
      },
      '& li:last-child': {
        marginRight: 0,
      },

      '& li a': {
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        color: 'inherit',
        textDecoration: 'none',
        height: 'inherit',
        padding: `0px ${spacing.xxs}`,
      },
    },
  });
  return <nav className={navStyle}>{props.children}</nav>;
};

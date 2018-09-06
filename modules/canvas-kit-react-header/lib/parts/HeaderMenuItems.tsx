import * as React from 'react';
import {css} from 'emotion';
import {spacing} from '@workday/canvas-kit-react-core';
import {verticalCenterStyle} from '@workday/canvas-kit-react-header/lib/shared/styles';

export const HeaderMenuItems: React.SFC = props => {
  const navStyle = css({
    flexGrow: 1,
    justifyContent: 'center',

    '& ul': {
      ...verticalCenterStyle,
      justifyContent: 'center',
      listStyleType: 'none',
      padding: 0,
      margin: 0,

      '& li': {
        ...verticalCenterStyle,
        margin: `0 ${spacing.m}`,
        color: 'inherit',
        fontSize: '14px',
        fontWeight: 700,
      },
      '& li:first-child': {
        marginLeft: 0,
      },
      '& li:last-child': {
        marginRight: 0,
      },

      '& li a': {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
  });
  return <nav className={navStyle}>{props.children}</nav>;
};

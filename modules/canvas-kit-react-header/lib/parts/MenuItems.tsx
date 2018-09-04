import * as React from 'react';
import {css} from 'emotion';
import {spacing} from '@workday/canvas-kit-react-core';

export const MenuItems: React.SFC = props => {
  const navStyle = css({
    '& ul': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      listStyleType: 'none',
      padding: 0,
      margin: 0,

      '& li': {
        margin: `0 ${spacing.s}`,
        color: 'inherit',
        fontSize: '14px',
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

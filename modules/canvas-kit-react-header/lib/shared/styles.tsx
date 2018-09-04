import {css} from 'emotion';
import {spacing} from '@workday/canvas-kit-react-core';

export const fontFamily = css({
  fontFamily: "'IBM Plex Sans', 'Roboto', sans-serif",
});
export const logoTitleStyle = css(fontFamily, {
  display: 'inline-block',
  fontSize: '20px',
  fontWeight: 400,
  paddingRight: spacing.l,
});

export const verticalCenterStyle = css({
  display: 'flex',
  alignItems: 'center',
});

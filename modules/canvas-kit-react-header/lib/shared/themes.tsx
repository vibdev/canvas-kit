import {colors, depth, CSSProperties} from '@workday/canvas-kit-react-core';
import * as chroma from 'chroma-js';
import {HeaderTheme} from './types';

// TODO: Relocate to a theme file
export interface ThemeAttributes {
  color: string;
  background: string;
  depth: CSSProperties;
  systemIcon: {
    color: string;
    colorHover: string;
  };
  linkColor: string;
  linkFadeOutColor: string;
  currentLinkColor: string;
  chipColor: string;
}

export interface Themes {
  [key: string]: ThemeAttributes;
}

export const themes: Themes = {
  [HeaderTheme.White]: {
    color: colors.blackPepper400,
    background: colors.frenchVanilla100,
    depth: depth['1'],
    systemIcon: {
      color: colors.licorice200,
      colorHover: colors.licorice500,
    },
    linkColor: colors.blackPepper400,
    linkFadeOutColor: colors.licorice200,
    currentLinkColor: colors.blueberry500,
    chipColor: colors.blueberry400,
  },
  [HeaderTheme.Blue]: {
    color: colors.frenchVanilla100,
    background: colors.gradients.blueberry,
    depth: depth['3'],
    systemIcon: {
      color: colors.frenchVanilla100,
      colorHover: colors.frenchVanilla400,
    },
    linkColor: colors.frenchVanilla100,
    linkFadeOutColor: chroma(colors.frenchVanilla100)
      .alpha(0.5)
      .css(),
    currentLinkColor: colors.frenchVanilla100,
    chipColor: colors.frenchVanilla100,
  },
  [HeaderTheme.Transparent]: {
    color: colors.frenchVanilla100,
    background: 'rgba(0,0,0,0)',
    depth: {boxShadow: 'none'},
    systemIcon: {
      color: colors.frenchVanilla100,
      colorHover: colors.frenchVanilla400,
    },
    linkColor: colors.frenchVanilla100,
    linkFadeOutColor: chroma(colors.frenchVanilla100)
      .alpha(0.5)
      .css(),
    currentLinkColor: colors.frenchVanilla100,
    chipColor: colors.frenchVanilla100,
  },
};

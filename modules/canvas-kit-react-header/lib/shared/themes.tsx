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
  activeChipColor: string;
  activeLinkColor: string;
}

export interface Themes {
  [key: string]: ThemeAttributes;
}

export const themes: Themes = {
  [HeaderTheme.White]: {
    color: colors.licorice300,
    background: colors.frenchVanilla100,
    depth: depth['1'],
    systemIcon: {
      color: colors.licorice200,
      colorHover: colors.licorice500,
    },
    linkColor: colors.licorice300,
    activeChipColor: colors.blueberry300,
    activeLinkColor: colors.blackPepper400,
  },
  [HeaderTheme.Blue]: {
    color: colors.frenchVanilla100,
    background: colors.gradients.blueberry,
    depth: depth['3'],
    systemIcon: {
      color: colors.frenchVanilla100,
      colorHover: colors.frenchVanilla400,
    },
    linkColor: chroma(colors.frenchVanilla100)
      .alpha(0.7)
      .css(),
    activeChipColor: colors.blueberry300,
    activeLinkColor: colors.frenchVanilla100,
  },
  [HeaderTheme.Transparent]: {
    color: colors.frenchVanilla100,
    background: 'rgba(0,0,0,0)',
    depth: {boxShadow: 'none'},
    systemIcon: {
      color: colors.frenchVanilla100,
      colorHover: colors.frenchVanilla400,
    },
    linkColor: chroma(colors.frenchVanilla100)
      .alpha(0.7)
      .css(),
    activeChipColor: colors.blueberry300,
    activeLinkColor: colors.frenchVanilla100,
  },
};

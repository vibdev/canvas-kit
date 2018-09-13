import {colors, depth, CSSProperties} from '@workday/canvas-kit-react-core';
import {HeaderTheme} from '@workday/canvas-kit-react-header/lib/shared/types';

// TODO: Relocate to a theme file
export interface ThemeAttributes {
  color: string;
  background: string;
  depth: CSSProperties;
  systemIcon: {
    color: string;
    colorHover: string;
  };
}

export interface Themes {
  [key: string]: ThemeAttributes;
}

export const themes: Themes = {
  [HeaderTheme.white]: {
    color: colors.licorice400,
    background: colors.frenchVanilla100,
    depth: depth['1'],
    systemIcon: {
      color: colors.licorice200,
      colorHover: colors.licorice500,
    },
  },
  [HeaderTheme.blue]: {
    color: colors.frenchVanilla100,
    background: colors.gradients.blueberry,
    depth: depth['3'],
    systemIcon: {
      color: colors.frenchVanilla100,
      colorHover: colors.frenchVanilla400,
    },
  },
  [HeaderTheme.transparent]: {
    color: colors.frenchVanilla100,
    background: 'rgba(0,0,0,0)',
    depth: {boxShadow: 'none'},
    systemIcon: {
      color: colors.frenchVanilla100,
      colorHover: colors.frenchVanilla400,
    },
  },
};

export enum Mode {
  primary = 'primary',
  secondary = 'secondary',
}

export interface HeaderMode {
  mode: keyof typeof Mode;
}

export const enum HeaderTheme {
  dark = 'dark',
  light = 'light',
}

export interface HeaderThemePropType {
  theme: keyof typeof HeaderTheme;
}

export interface HeaderPartPropType {
  last?: boolean;
}

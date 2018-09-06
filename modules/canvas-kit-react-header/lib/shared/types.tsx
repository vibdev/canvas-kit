export enum Mode {
  primary = 'primary',
  secondary = 'secondary',
}

export interface HeaderMode {
  mode: keyof typeof Mode;
}

export const enum HeaderTheme {
  white = 'white',
  blue = 'blue',
}

export type HeaderThemeType = keyof typeof HeaderTheme;

export interface HeaderThemePropType {
  theme: HeaderThemeType;
  transparent: boolean;
}

export const enum HeaderVariant {
  full = 'full',
  dub = 'dub',
}

export type HeaderVariantType = keyof typeof HeaderVariant;

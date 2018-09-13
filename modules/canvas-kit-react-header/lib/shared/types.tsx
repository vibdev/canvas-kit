export const enum HeaderTheme {
  white = 'white',
  blue = 'blue',
  transparent = 'transparent',
}

export type HeaderThemeType = keyof typeof HeaderTheme;

export interface HeaderThemePropType {
  theme: HeaderThemeType;
}

export const enum HeaderVariant {
  full = 'full',
  dub = 'dub',
}

export type HeaderVariantType = keyof typeof HeaderVariant;
